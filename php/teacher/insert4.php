<?php
$cg1=$_POST['cg1'];
$cg2=$_POST['cg2'];
$cg3=$_POST['cg3'];
$cg4=$_POST['cg4'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_insert = "INSERT INTO `wisdomclassroom`.`cg` (`学号`, `成绩`, `修订成绩`, `作业ID`) VALUES (\"$cg1\", \"$cg2\", \"$cg3\", \"$cg4\");";

$res_insert = mysqli_query($con,$sql_insert);

if(!$res_insert){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $win=['win'=>'win'];
    $json_win=json_encode($win);
    echo $json_win;
}
?>