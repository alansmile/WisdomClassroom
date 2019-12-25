<?php
$cloud1=$_POST['cloud1'];
$cloud2=$_POST['cloud2'];
$cloud3=$_POST['cloud3'];
$cloud4=$_POST['cloud4'];
$cloud5=$_POST['cloud5'];
$cloud6=$_POST['cloud6'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_insert = "INSERT INTO `wisdomclassroom`.`cloudclass` (`学号`, `视频资源学习(30%)`, `非视频资源学习(25%)`, `签到(20%)`, `测试(25%)`, `百分制得分`) VALUES (\"$cloud1\", \"$cloud2\", \"$cloud3\", \"$cloud4\", \"$cloud5\", \"$cloud6\");";

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