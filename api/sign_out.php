<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/19 0019 15:09
 * Description : 注销登录
 */
if (isset($_COOKIE['name'])) {
    setcookie('name', '', time());
    $data['code'] = 0;
} else {
    $data['code'] = 1;
    $data['msg'] = "登录超时";
}
echo json_encode($data);

?>

