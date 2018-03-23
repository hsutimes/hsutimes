<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/9 0009 22:08
 * Description : 增加新用户
 */
include 'conn.php';
header("Content-Type: application/json");

$name = $_POST["u_name"];
$password = $_POST["u_password"];
$role = $_POST["u_role"];

if ($name == null || $password == null || $role == null
    || $name == '' || $password == '' || $role == '') {
    $data['code'] = 1;
    $data['msg'] = "参数为空";
} else {
    $conn = connect_mysql();
    $sql = "SELECT isExistUser('" . $name . "') AS result";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    if ($row['result'] != 'true') {
        $sql = "CALL addUser('" . $name . "', '" . $password . "', '" . $role . "')";
        if (mysqli_query($conn, $sql)) {
            $data['code'] = 0;
        } else {
            $data['code'] = 1;
            $data['msg'] = "数据库异常";
        }
    } else {
        $data['code'] = 1;
        $data['msg'] = "用户名已存在";
    }
    mysqli_close($conn);
}
echo json_encode($data);

?>