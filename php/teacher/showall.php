<?php
$con = mysqli_connect("127.0.0.1","alan","123456",'wisdomclassroom');

$sql_select1 = "SELECT * FROM `cloudclass` ";
$sql_select2 = "SELECT * FROM `itbegin` ";
$sql_select3 = "SELECT * FROM `cg` ";
$sql_select4 = "SELECT * FROM `sum` ";
$sql_select5 = "SELECT * FROM `students` ";

$res_select1 = mysqli_query($con,$sql_select1);
$res_select2 = mysqli_query($con,$sql_select2);
$res_select3 = mysqli_query($con,$sql_select3);
$res_select4 = mysqli_query($con,$sql_select4);
$res_select5 = mysqli_query($con,$sql_select5);

if((mysqli_num_rows($res_select1)==0)&&(mysqli_num_rows($res_select2)==0)&&(mysqli_num_rows($res_select3)==0)&&(mysqli_num_rows($res_select4)==0)&&(mysqli_num_rows($res_select5)==0)){
    $defeat=['defeat'=>'defeat'];
    $json_defeat=json_encode($defeat);
    echo $json_defeat;
}else{
    $row1 = mysqli_fetch_all($res_select1);
    $row2 = mysqli_fetch_all($res_select2);
    $row3 = mysqli_fetch_all($res_select3);
    $row4 = mysqli_fetch_all($res_select4);
    $row5 = mysqli_fetch_all($res_select5);
    $sum=[$row1,$row2,$row3,$row4,$row5];

    $json_obj=json_encode($sum);
    echo $json_obj;
}
?>