<?php
/**
 * Created by PhpStorm.
 * User        : times
 * Time        : 2018/2/13 0013 21:40
 * Description : description
 */

/*session_start();
if (isset($_SESSION['name'])) {
    echo $_SESSION['name'];
} else {
    $_SESSION['name'] = "hdskjlfhkjsld";
}*/
//setcookie('name', 'Tom', time() + 5);

/*if (isset($_COOKIE['name'])) {
    echo $_COOKIE['name'];
} else{
    echo 'cookie超时';
}*/

exec("javac", $return_array);
echo $return_array;
?>
