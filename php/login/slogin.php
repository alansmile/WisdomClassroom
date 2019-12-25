<?php
$susername=$_POST['susername'];
$spassword=$_POST['spassword'];
$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_select = "SELECT * FROM `students` WHERE `学号` = \"$susername\" and `学号` = \"$spassword\" ";
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