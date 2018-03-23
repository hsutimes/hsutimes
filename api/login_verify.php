<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/18 0018 22:51
 * Description : 登录验证
 */

if (isset($_COOKIE['name'])) {
    $data['name'] = $_COOKIE['name'];
    $data['code'] = 0;
} else {
    $data['code'] = 1;
    $data['msg'] = "用户未登录或登录超时";
}
echo json_encode($data);

?>