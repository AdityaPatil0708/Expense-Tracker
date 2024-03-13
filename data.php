<?php
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    
    $conn = new mysqli('localhost','root','','expense tracker');
    if($conn->connect_error){
        die('Connection Failed :'.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into login('username','password') values(?,?)");
        $stmt->bind_param("ss", $user, $pass);
        $stmt->execute();
        echo "Login Success";
        $stmt->close();
        $conn->close();


    }
?>