$(function(){
    $('#login>.loginview>.switch>.teacheritem').click(function(){
        $('#login>.loginview>.student').css('display','none');
        $('#login>.loginview>.teacher').css('display','block');
    });
    $('#login>.loginview>.switch>.studentitem').click(function(){
        $('#login>.loginview>.teacher').css('display','none');
        $('#login>.loginview>.student').css('display','block');
    });
    $('#login>.loginview>.teacher>.teacherform>.teachergo').click(function(){
        if(($('#login>.loginview>.teacher>.teacherform>p>.tusername').val()=='')||($('#login>.loginview>.teacher>.teacherform>p>.tpassword').val()=='')){
            $('#login>.loginview>.teacher>.teacherform>.result').html('用户名或密码不能为空！');
        }else{
            $.ajax({
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/login/tlogin.php',
                type:'POST',
                data:$('#login>.loginview>.teacher>.teacherform').serialize(),
                dataType:'json',
                success:function(result){             
                    if(result.defeat=='defeat'){
                        $('#login>.loginview>.teacher>.teacherform>.result').html('教师用户名或密码错误，请确认无误后重新登录！');
                    }else{
                        $('#login>.loginview>.teacher>.teacherform>p>.tusername').val('');
                        $('#login>.loginview>.teacher>.teacherform>p>.tpassword').val('');
                        window.location.href='http://www.alanphp.com:8000/WisdomClassroom/html/WisdomClassroom_teacher.html?username='+result.username;
                    }
                }
            })
        }  
    });
        
    $('#login>.loginview>.student>.studentform>.studentgo').click(function(){
        if(($('#login>.loginview>.student>.studentform>p>.susername').val()=='')||($('#login>.loginview>.student>.studentform>p>.spassword').val()=='')){
            $('#login>.loginview>.student>.studentform>.result').html('用户名或密码不能为空！');
        }else{
            $.ajax({
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/login/slogin.php',
                type:'POST',
                data:$('#login>.loginview>.student>.studentform').serialize(),
                dataType:'json',
                success:function(result){         
                    if(result.defeat=='defeat'){
                        $('#login>.loginview>.student>.studentform>.result').html('学生用户名或密码错误，请确认无误后重新登录！');
                    }else{ 
                        $('#login>.loginview>.student>.studentform>p>.susername').val('');
                        $('#login>.loginview>.student>.studentform>p>.spassword').val('');
                        window.location.href='http://www.alanphp.com:8000/WisdomClassroom/html/WisdomClassroom_student.html?username='+result.学号;
                    } 
                }
            });
        }
    });
})