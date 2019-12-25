<?php
$username=$_POST['num'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_delete = "DELETE FROM `wisdomclassroom`.`students` WHERE `学号` = \"$username\";";

$res_delete = mysqli_query($con,$sql_delete);

if(!$res_delete){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $win=['win'=>'win'];
    $json_win=json_encode($win);
    echo $json_win;
}
?>