<?php
$susername=$_POST['username'];
$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');

$sql_select1 = "SELECT * FROM `cloudclass` WHERE `学号` = \"$susername\" ";
$sql_select2 = "SELECT * FROM `itbegin` WHERE `学号` = \"$susername\" ";
$sql_select3 = "SELECT * FROM `cg` WHERE `学号` = \"$susername\" ";
$sql_select4 = "SELECT * FROM `sum` WHERE `学号` = \"$susername\" ";

$res_select1 = mysqli_query($con,$sql_select1);
$res_select2 = mysqli_query($con,$sql_select2);
$res_select3 = mysqli_query($con,$sql_select3);
$res_select4 = mysqli_query($con,$sql_select4);

if((mysqli_num_rows($res_select1)==0)&&(mysqli_num_rows($res_select2)==0)&&(mysqli_num_rows($res_select3)==0)&&(mysqli_num_rows($res_select4)==0)){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $row1 = mysqli_fetch_all($res_select1);
    $row2 = mysqli_fetch_all($res_select2);
    $row3 = mysqli_fetch_all($res_select3);
    $row4 = mysqli_fetch_all($res_select4);
    $sum=[$row1,$row2,$row3,$row4];

    $json_obj=json_encode($sum);
    echo $json_obj;
}
?>