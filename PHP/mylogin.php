<?php
    header("Content-type:text/html;charset=utf-8");
    $responseData = array("code" => 0,"msg" => "");
    $username = $_POST["username"];
    $password = $_POST["password"];
    if(!$username){
        $responseData["code"] = 1;
        $responseData["msg"] = "用户名不为空";
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData["code"] = 2;
        $responseData["msg"] = "密码不为空";
        echo json_encode($responseData);
        exit;
    }
    $link = mysql_connect("localhost","root","123456");
    if(!$link){
        echo "数据库连接失败";
        exit;
    }
    mysql_set_charset("utf8");
    mysql_select_db("liangcang");
    $str = md5($password);
    $sql = "SELECT * FROM user WHERE username = '{$username}' AND password='{$str}'";
    $res = mysql_query($sql);
    $row = mysql_fetch_assoc($res);
    if(!$row){
        $responseData['code'] = 3;
        $responseData['msg'] = "用户名或密码错误";
        echo json_encode($responseData);
        exit;
    }
    $responseData["msg"] = "登陆成功";
    echo json_encode($responseData);
    mysql_close($link);
    
?>