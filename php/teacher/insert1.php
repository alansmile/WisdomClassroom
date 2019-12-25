<?php
$username=$_POST['username'];
$name=$_POST['name'];
$grade=$_POST['grade'];
$major=$_POST['major'];
$class=$_POST['class'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_insert = "INSERT INTO `wisdomclassroom`.`students` (`学号`, `姓名`, `年级`, `专业`, `班级`) VALUES (\"$username\", \"$name\", \"$grade\", \"$major\", \"$class\");";

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