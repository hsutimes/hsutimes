<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/9 0009 21:48
 * Description : 修改指定用户信息
 */
include 'conn.php';
header("Content-Type: application/json");

$id = $_GET["u_id"];
$name = $_GET["u_name"];
$sex = $_GET["u_sex"];
$email = $_GET["u_email"];

if ($id == null || $name == null || $sex == null || $email == null
    || $id == '' || $name == '' || $sex == '' || $email == '') {
    $data['code'] = 1;
    $data['msg'] = "参数为空";
} else {
    $conn = connect_mysql();
    $sql = "CALL updateUserById(" . $id . ", '" . $name . "', '" . $sex . "', '" . $email . "')";
    if (mysqli_query($conn, $sql)) {
        $data['code'] = 0;
    } else {
        $data['code'] = 1;
        $data['msg'] = "数据库异常";
    }
    mysqli_close($conn);
}
echo json_encode($data);

?>


