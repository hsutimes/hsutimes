<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/8 0008 22:14
 * Description : 连接数据库
 */

/**
 * @return mysqli
 */

function connect_mysql()
{
    $host = "localhost";
    $name = "root";
    $password = "123456";
    $database = "db_blog";
    // 连接数据库
    $conn = mysqli_connect($host, $name, $password, $database);
    // 设置编码，防止中文乱码
    mysqli_set_charset($conn, "utf8");
    // 连接失败
    if (!$conn) {
        die("连接失败" . mysqli_connect_error());
    }
    return $conn;
}

?>