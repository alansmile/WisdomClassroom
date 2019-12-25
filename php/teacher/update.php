<?php
$username=$_POST['num'];
$name=$_POST['name'];
$grade=$_POST['grade'];
$major=$_POST['major'];
$clas=$_POST['clas'];

$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');
$sql_update = "UPDATE `wisdomclassroom`.`students` SET `姓名` = \"$name\", `年级` = \"$grade\", `专业` = \"$major\", `班级` = \"$clas\" WHERE `students`.`学号` = \"$username\"; ";

$res_update = mysqli_query($con,$sql_update);

if(!$res_update){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $win=['win'=>'win'];
    $json_win=json_encode($win);
    echo $json_win;
}
?>