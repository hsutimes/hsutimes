<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/13 0013 20:31
 * Description : 登录验证
 */
include 'conn.php';
header("Content-Type: application/json");

$name = $_POST["u_name"];
$password = $_POST["u_password"];

if ($name == null || $password == null || $name == '' || $password == '') {
    $data['code'] = 1;
    $data['msg'] = "参数为空";
} else {
    $conn = connect_mysql();
    $sql = "SELECT isExistUser('" . $name . "') AS result";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    if ($row['result'] == 'true') {
        $sql = "CALL loginValidate('" . $name . "')";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if ($password == $row['u_password']) {
            $data['code'] = 0;
            if (!isset($_COOKIE['name'])) {
                setcookie('name', $name, time() + 2 * 60 * 60);
            }
        } else {
            $data['code'] = 1;
            $data['msg'] = "密码错误";
        }
    } else {
        $data['code'] = 1;
        $data['msg'] = "用户名错误或用户不存在";
    }
    mysqli_close($conn);
}
echo json_encode($data);

?>

