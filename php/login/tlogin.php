<?php
$tusername=$_POST['tusername'];
$tpassword=$_POST['tpassword'];
$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_select = "SELECT * FROM `teacher` WHERE `username` = \"$tusername\" and `password` = \"$tpassword\" ";
$res_select = mysqli_query($con,$sql_select);
if(mysqli_num_rows($res_select)==0){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $row = mysqli_fetch_assoc($res_select);
    $json_obj=json_encode($row);
    echo $json_obj;
}
?>