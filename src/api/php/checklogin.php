<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers:DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type, Accept-Language, Origin, Accept-Encoding");
session_start();
$username = $_POST['username'];
$password = $_POST['password'];
// 验证
if($username == '') {
    die('请输入用户名');
} else if($password == '') {
    die('请输入密码');
}
// 连接数据库
$conn = @mysqli_connect('localhost', 'root', '', 'bbs');
// 检测连接是否有错
if (mysqli_connect_errno() !== 0) {
    die(mysqli_connect_error());
}

$sql = "SELECT * FROM `user` WHERE `username` = '" . $username . "'";
$result = mysqli_query($conn, $sql);
if(mysqli_errno($conn) !== 0) {
    die(mysqli_error($conn));
}
$user = mysqli_fetch_assoc($result);

if(!$user) {
    die('账号不存在,请重新输入!');
}

if($password != $user['password']) {
    die('密码错误,请重新输入!');
}

$_SESSION['is_login'] = 1;
$_SESSION['user'] = $user;
echo "ok";

header('Location: http://localhost:8080/');
