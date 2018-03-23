<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/19 0019 16:21
 * Description : 用户空间
 */
include 'conn.php';
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: GET");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Headers: x-requested-with,content-type");
$name = $_COOKIE['name'];
$conn = connect_mysql();
// sql语句
$sql = "CALL getUserByName('" . $name . "')";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data['code'] = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $user = array('id' => $row['u_id'], 'name' => $row['u_name'], 'sex' => $row['u_sex'],
            'role' => $row['u_role'], 'date' => $row['u_date'], 'email' => $row['u_email']);
    }
    $data['data'] = $user;
} else {
    $data['code'] = 1;
}
echo json_encode($data);
// 关闭数据库
mysqli_close($conn);
?>
