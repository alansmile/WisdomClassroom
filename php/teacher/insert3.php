<?php
$it1=$_POST['it1'];
$it2=$_POST['it2'];
$it3=$_POST['it3'];
$it4=$_POST['it4'];
$it5=$_POST['it5'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_insert = "INSERT INTO `wisdomclassroom`.`itbegin` (`学号`, `运行次数`, `敲键次数`, `代码行数`, `课程时间`) VALUES (\"$it1\", \"$it2\", \"$it3\", \"$it4\", \"$it5\");";

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