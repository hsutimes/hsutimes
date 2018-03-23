<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/18 0018 22:23
 * Description : 用户评论信息
 */

include 'conn.php';
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: GET");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Headers: x-requested-with,content-type");
$conn = connect_mysql();
// sql语句
if (isset($_GET['limit'])) {
    $limit = $_GET['limit'];
    if ($limit != null || $limit != '') {
        $sql = "CALL getCommentsLimitNum(" . $limit . ")";
    } else {
        $sql = "CALL getComment()";
    }
} else {
    $sql = "CALL getComment()";
}

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data['code'] = 0;
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $comment = array('id' => $row['id'], 'info' => $row['info'], 'name' => $row['name'], 'sex' => $row['sex'],
            'role' => $row['role'], 'email' => $row['email'], 'date' => $row['date']);
        $comments[$i++] = $comment;
    }
    $data['comments'] = $comments;
} else {
    $data['code'] = 1;
}
echo json_encode($data);
// 关闭数据库
mysqli_close($conn);

?>