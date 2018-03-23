<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/9 0009 21:34
 * Description : 连接到远程数据库
 */
/**
 * @return mysqli
 */
function connect_mysql_db()
{
    $host = "bdm30563111.my3w.com";
    $name = "bdm30563111";
    $password = "o141592653589793";
    $database = "bdm30563111_db";
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