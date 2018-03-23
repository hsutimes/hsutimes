<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/9 0009 16:51
 * Description : 删除指定用户
 */
include 'conn.php';
header("Content-Type: application/json");

$id = $_GET["u_id"];
$sql = "CALL deleteUserById(" . $id . ")";

if ($id == null || $id == '') {
    $data['code'] = 1;
    $data['msg'] = "参数为空";
} else {
    $conn = connect_mysql();
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