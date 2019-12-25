$(function(){
    //鼠标滚动事件
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度 
        var headerH = $('#header').height();  //内容高度
        if(scroH>=headerH){
            $('#main>.mains>.content>.item').css({'position':'fixed','top':'0'});
            $('#main>.mains>.aside').css({'position':'fixed','top':'0'});
            $('#gotop img').css({'display':'block'});
        }else{
            $('#main>.mains>.content>.item').css({'position':'absolute','top':'0'});
            $('#main>.mains>.aside').css({'position':'relative','top':'0'});
            $('#gotop img').css({'display':'none'});
        }
    });
    {   //返回顶部
        $('#gotop img').click(function(){
            $('html').animate({scrollTop:'0'},500);
        }); 
    };
    {   //鼠标滑过上传数据事件
        $('#header>.headers>.add').mouseenter(function(){
            $('#header>.headers>.add>ul').slideDown('fast');
        })
        $('#header>.headers>.add').mouseleave(function(){
            $('#header>.headers>.add>ul').slideUp('fast');
        })
    };
    {   //点击标签切换不同的表格
        var item='#main>.mains>.content>.item>.';
        var content='#main>.mains>.content>.';
        var students=item+'students';
        var cloudclass=item+'cloudclass';
        var itbegin=item+'itbegin';
        var cg=item+'cg';
        var sum=item+'sum';
        var students_content=content+'students_content';
        var cloudclass_content=content+'cloudclass_content';
        var itbegin_content=content+'itbegin_content';
        var cg_content=content+'cg_content';
        var sum_content=content+'sum_content';
        var cssItem1={'font-weight':'normal','border-bottom':'1px solid #d1d5da'};
        var cssContent1={'z-index':'0','opacity':'0'};
        function clear(){
            $(students_content).css(cssContent1);
            $(cloudclass_content).css(cssContent1);
            $(itbegin_content).css(cssContent1);
            $(cg_content).css(cssContent1);
            $(sum_content).css(cssContent1);
            $(students).css(cssItem1);
            $(cloudclass).css(cssItem1);
            $(itbegin).css(cssItem1);
            $(cg).css(cssItem1);
            $(sum).css(cssItem1);
        };
        var cssItem2={'font-weight':'bold','border-bottom':'2px solid #0366d6'};
        var cssContent2={'z-index':'9','opacity':'1'};
        $(students).click(function(){
            clear();
            $(students).css(cssItem2);
            $(students_content).css(cssContent2); 
        });
        $(cloudclass).click(function(){
            clear();
            $(cloudclass).css(cssItem2);
            $(cloudclass_content).css(cssContent2);
        });
        $(itbegin).click(function(){
            clear();
            $(itbegin).css(cssItem2);
            $(itbegin_content).css(cssContent2);
        });
        $(cg).click(function(){
            clear();
            $(cg).css(cssItem2);
            $(cg_content).css(cssContent2);
        });
        $(sum).click(function(){
            clear();
            $(sum).css(cssItem2);
            $(sum_content).css(cssContent2);
        });
    };
    {
        var usernameUrl = window.location.search;   //解析URL中的username字符串，split是jquery中的分割字符串函数
        var username = 'username='+usernameUrl.split('=')[1];
        $.ajax({
            url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/teacher.php',
            type:'POST',
            data: username,
            dataType:'json',
            success:function(result){         
                if(result.defeat=='defeat'){
                    alert('教师信息加载失败，请联系阿岚（alansmileheng@qq.com）！');
                }else{
                    $('#main>.mains>.aside>.info').append('<p>Hello，'+result.姓名+'！</p><p>所授课程：'+result.所授课程+'</p><p>联系电话：'+result.联系电话+'</p>');
                } 
            }
        });
        function show(){
            $.ajax({    //显示其他平台信息到网页
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/showall.php',
                type:'POST',
                dataType:'json',
                success:function(result){    
                    if(result.defeat=='defeat'){
                        alert('数据信息加载失败，请联系阿岚（alansmileheng@qq.com）！');
                    }else{
                        for(let i=0;i<result[4].length;i++){
                            if(result[4][i][3]==106){
                                result[4][i][3]='机械电子工程';
                            }else if(result[4][i][3]==119){
                                result[4][i][3]='机器人工程';
                            }else{
                                result[4][i][3]=result[4][i][3];
                            }
                            $(students_content+'>.studentsinfo').append('<tr>'+'<td>'+result[4][i][0]+'</td><td>'+result[4][i][1]+'</td><td>'+result[4][i][2]+'</td><td>'+result[4][i][3]+'</td><td>'+result[4][i][4]+'</td></tr>');
                        }
                        for(let i=0;i<result[0].length;i++){ 
                            $(cloudclass_content+'>.cloudclassinfo').append('<tr>'+'<td>'+result[0][i][0]+'</td><td>'+result[0][i][1]+'</td><td>'+result[0][i][2]+'</td><td>'+result[0][i][3]+'</td><td>'+result[0][i][4]+'</td><td>'+result[0][i][5]+'</td></tr>');  
                        }
                        for(let i=0;i<result[1].length;i++){
                            $(itbegin_content+'>.itbegininfo').append('<tr>'+'<td>'+result[1][i][0]+'</td><td>'+result[1][i][1]+'</td><td>'+result[1][i][2]+'</td><td>'+result[1][i][3]+'</td><td>'+result[1][i][4]+'</td></tr>');  
                        }
                        for(let i=0;i<result[2].length;i++){
                            $(cg_content+'>.cginfo').append('<tr>'+'<td>'+result[2][i][0]+'</td><td>'+result[2][i][1]+'</td><td>'+result[2][i][2]+'</td><td>'+result[2][i][3]+'</td></tr>');  
                        }
                        for(let i=0;i<result[3].length;i++){
                            $(sum_content+'>.suminfo').append('<tr>'+'<td>'+result[3][i][0]+'</td><td>'+result[3][i][1]+'</td><td>'+result[3][i][2]+'</td><td>'+result[3][i][3]+'</td><td>'+result[3][i][4]+'</td><td>'+result[3][i][5]+'</td></tr>');  
                        }                  
                    } 
                }
            })
        };
        show();   
    };
    function remove(){
        $(students_content+'>.studentsinfo tr').nextAll().remove();
        $(cloudclass_content+'>.cloudclassinfo tr').nextAll().remove();
        $(itbegin_content+'>.itbegininfo tr').nextAll().remove();
        $(cg_content+'>.cginfo tr').nextAll().remove();
        $(sum_content+'>.suminfo tr').nextAll().remove();
        $('.choose').remove();
    };
    {   //搜索框
        $('#header>.headers>.searchphoto').click(function(){
            var search=$('#header>.headers>.searchform').serialize();
            function block(){
                var bCss={'display':'block'};
                $('.do1').css(bCss);
                $('.do2').css(bCss);
                $('.do3').css(bCss);
                $('.do4').css(bCss);
                $('.do5').css(bCss);
            };
            if($('#header>.headers>.searchform').val()==''){
                $('#tell').text('搜索信息不能为空！').animate({opacity:'1'},2000);
                $('#tell').text('搜索信息不能为空！').animate({opacity:'0'},2000);
            }else{     
                block();
                remove(); 
                select(); 
            }                        
            function select(){
                $.ajax({
                    url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/select.php',
                    type:'POST',
                    data: search,
                    dataType:'json',
                    success:function(result){   
                        if(result.defeat=='defeat'){
                            $('#tell').text('数据查询失败，请检查学号是否正确！').animate({opacity:'1'},1000);
                            $('#tell').text('数据查询失败，请检查学号是否正确！').animate({opacity:'0'},1000);
                        }else{
                            $('#tell').text('数据查询成功！').animate({opacity:'1'},1000);
                            $('#tell').text('数据查询成功！').animate({opacity:'0'},1000);
                            $('#header>.headers>.searchform').val('');
                            $(students_content+' .title').append('<td class="choose">选择</td>');
                            for(let i=0;i<result[4].length;i++){
                                if(result[4][i][3]==106){
                                    result[4][i][3]='机械电子工程';
                                }else if(result[4][i][3]==119){
                                    result[4][i][3]='机器人工程';
                                }else{
                                    result[4][i][3]=result[4][i][3];
                                }   
                                //这是一开始写的表格形式，后面改成了input  
                                // $(students_content+'>.studentsinfo').append('<tr>'+'<td class="num4">'+result[4][i][0]+'</td><td>'+result[4][i][1]+'</td><td>'+result[4][i][2]+'</td><td>'+result[4][i][3]+'</td><td>'+result[4][i][4]+'</td><td><input type="checkbox" class="checkbox4"></td></tr>');
                                $(students_content+'>.studentsinfo').append('<tr>'+'<td class="num4">'+result[4][i][0]+'</td><td><input class="update" type="text" value='+result[4][i][1]+'></td><td><input class="update" type="text" value='+result[4][i][2]+'></td><td><input class="update" type="text" value='+result[4][i][3]+'></td><td><input class="update" type="text" value='+result[4][i][4]+'></td><td><input type="checkbox" class="checkbox4"></td></tr>');
                            }
                            $(cloudclass_content+' .title').append('<td class="choose">选择</td>');
                            for(let i=0;i<result[0].length;i++){     
                                $(cloudclass_content+'>.cloudclassinfo').append('<tr>'+'<td class="num0">'+result[0][i][0]+'</td><td><input class="update" type="text" value='+result[0][i][1]+'></td><td><input class="update" type="text" value='+result[0][i][2]+'></td><td><input class="update" type="text" value='+result[0][i][3]+'></td><td><input class="update" type="text" value='+result[0][i][4]+'></td><td><input class="update" type="text" value='+result[0][i][5]+'></td><td><input type="checkbox" class="checkbox0"></td></tr>'); 
                            }
                            $(itbegin_content+' .title').append('<td class="choose">选择</td>');
                            for(let i=0;i<result[1].length;i++){                               
                                $(itbegin_content+'>.itbegininfo').append('<tr>'+'<td class="num1">'+result[1][i][0]+'</td><td><input class="update" type="text" value='+result[1][i][1]+'></td><td><input class="update" type="text" value='+result[1][i][2]+'></td><td><input class="update" type="text" value='+result[1][i][3]+'></td><td><input class="update" type="text" value='+result[1][i][4]+'></td><td><input type="checkbox" class="checkbox1"></td></tr>');  
                            }
                            $(cg_content+' .title').append('<td class="choose">选择</td>');
                            for(let i=0;i<result[2].length;i++){                                
                                $(cg_content+'>.cginfo').append('<tr>'+'<td class="num2">'+result[2][i][0]+'</td><td><input class="update" type="text" value='+result[2][i][1]+'></td><td><input class="update" type="text" value='+result[2][i][2]+'></td><td><input class="update" type="text" value='+result[2][i][3]+'></td><td><input type="checkbox" class="checkbox2"></td></tr>');  
                            }
                            $(sum_content+' .title').append('<td class="choose">选择</td>');
                            for(let i=0;i<result[3].length;i++){                  
                                $(sum_content+'>.suminfo').append('<tr>'+'<td class="num3">'+result[3][i][0]+'</td><td><input class="update" type="text" value='+result[3][i][1]+'></td><td><input class="update" type="text" value='+result[3][i][2]+'></td><td><input class="update" type="text" value='+result[3][i][3]+'></td><td><input class="update" type="text" value='+result[3][i][4]+'></td><td><input class="update" type="text" value='+result[3][i][5]+'></td><td><input type="checkbox" class="checkbox3"></td></tr>');  
                            }                  
                        } 
                    }
                })
            }
               
        });
        
    };
    {   //信息全览
        $('#header>.headers>.show').click(function(){ 
            function none(){
                var nCss={'display':'none'};
                $('.do1').css(nCss);
                $('.do2').css(nCss);
                $('.do3').css(nCss);
                $('.do4').css(nCss);
                $('.do5').css(nCss);
            };
            $('#header>.headers>.searchform').val('');//清空search框
            none();
            remove();
            show();
        })
    };
    function shadeS(){
        $('#shade').css('display','block');
    };//遮罩层显示
    function shadeH(){
        $('#shade').css('display','none');
    };//遮罩层隐藏
    {   //信息上传弹窗
        $('#header>.headers>.addstudent').click(function(){
            shadeS();
            $('#addstu').css('display','block');
        })
        $('#addstu>.exit').click(function(){
            $('.addstuform input').val('');
            $('#addstu .result').text('');
            $('#addstu').css('display','none');
            shadeH();
        })

        //云班课
        $('.add1').click(function(){
            shadeS();
            $('#addclo').css('display','block');
        })
        $('#addclo>.exit').click(function(){
            $('.addcloform input').val('');
            $('#addclo .result').text('');
            $('#addclo').css('display','none');
            shadeH();
        })

        //ITBegin
        $('.add2').click(function(){
            shadeS();
            $('#addit').css('display','block');
        })
        $('#addit>.exit').click(function(){
            $('.additform input').val('');
            $('#addit .result').text('');
            $('#addit').css('display','none');
            shadeH();
        })

        //CG
        $('.add3').click(function(){
            shadeS();
            $('#addcg').css('display','block');
        })
        $('#addcg>.exit').click(function(){
            $('.addcgform input').val('');
            $('#addcg .result').text('');
            $('#addcg').css('display','none');
            shadeH();
        })
    };
    {   //学生信息上传
        $('.addstuform-go').click(function(){
            $.ajax({    //显示其他平台信息到网页
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/insert1.php',
                type:'POST',
                data:$('.addstuform').serialize(),
                dataType:'json',
                success:function(result){ 
                    if(($('.addstuform .username').val()=='')||($('.addstuform .name').val()=='')||($('.addstuform .grade').val()=='')||($('.addstuform .major').val()=='')||($('.addstuform .class').val()=='')){
                        $('#addstu .result').text('信息不能为空！');
                    }else{
                        if(result.defeat=='defeat'){
                            $('#addstu .result').text('注册失败，请检查学号是否已被使用！');
                        }else{
                            $('#addstu .result').html('注册成功，学生登录用户名与密码默认为学号！');             
                        }
                    }    
                }
            })
        });

        //云班课数据上传
        $('.addcloform-go').click(function(){
            $.ajax({    //显示其他平台信息到网页
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/insert2.php',
                type:'POST',
                data:$('.addcloform').serialize(),
                dataType:'json',
                success:function(result){ 
                    if(($('.addcloform .cloud1').val()=='')||($('.addcloform .cloud2').val()=='')||($('.addcloform .cloud3').val()=='')||($('.addcloform .cloud4').val()=='')||($('.addcloform .cloud5').val()=='')||($('.addcloform .cloud6').val()=='')){
                        $('#addclo .result').text('数据不能为空！');
                    }else{
                        if(result.defeat=='defeat'){
                            $('#addclo .result').text('数据上传失败，请检查数据填写格式是否正确！');
                        }else{
                            $('#addclo .result').text('数据上传成功！');             
                        }
                    }    
                }
            })
        });

        //ITBegin数据上传
        $('.additform-go').click(function(){
            $.ajax({    //显示其他平台信息到网页
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/insert3.php',
                type:'POST',
                data:$('.additform').serialize(),
                dataType:'json',
                success:function(result){ 
                    if(($('.additform .it1').val()=='')||($('.additform .it2').val()=='')||($('.additform .it3').val()=='')||($('.additform .it4').val()=='')||($('.additform .it5').val()=='')){
                        $('#addit .result').text('数据不能为空！');
                    }else{
                        if(result.defeat=='defeat'){
                            $('#addit .result').text('数据上传失败，请检查数据填写格式是否正确！');
                        }else{
                            $('#addit .result').text('数据上传成功！');             
                        }
                    }    
                }
            })
        });

        //CG数据上传
        $('.addcgform-go').click(function(){
            $.ajax({    //显示其他平台信息到网页
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/insert4.php',
                type:'POST',
                data:$('.addcgform').serialize(),
                dataType:'json',
                success:function(result){ 
                    if(($('.addcgform .cg1').val()=='')||($('.addcgform .cg2').val()=='')||($('.addcgform .cg3').val()=='')||($('.addcgform .cg4').val()=='')){
                        $('#addcg .result').text('数据不能为空！');
                    }else{
                        if(result.defeat=='defeat'){
                            $('#addcg .result').text('数据上传失败，请检查数据填写格式是否正确！');
                        }else{
                            $('#addcg .result').text('数据上传成功！');             
                        }
                    }    
                }
            })
        });
    }
    {   //全选与取消全选
        $('.all1').click(function(){ 
            $(".checkbox4[type='checkbox']").prop('checked',true);
        });
        $('.not-all1').click(function(){
            $(".checkbox4[type='checkbox']").prop('checked',false);
        })
        $('.all2').click(function(){ 
            $(".checkbox0[type='checkbox']").prop('checked',true);
        });
        $('.not-all2').click(function(){
            $(".checkbox0[type='checkbox']").prop('checked',false);
        })
        $('.all3').click(function(){ 
            $(".checkbox1[type='checkbox']").prop('checked',true);
        });
        $('.not-all3').click(function(){
            $(".checkbox1[type='checkbox']").prop('checked',false);
        })
        $('.all4').click(function(){ 
            $(".checkbox2[type='checkbox']").prop('checked',true);
        });
        $('.not-all4').click(function(){
            $(".checkbox2[type='checkbox']").prop('checked',false);
        })
        $('.all5').click(function(){ 
            $(".checkbox3[type='checkbox']").prop('checked',true);
        });
        $('.not-all5').click(function(){
            $(".checkbox3[type='checkbox']").prop('checked',false);
        })
    }


    //（只写学生信息的删改，后面几个平台的删除、修改就不写了，天天跟造轮子一样，无聊！）
    {   //删除选中的行与其数据
        $(".delete1").click(function(){
            //遍历选中的checkbox
            $(".checkbox4:checked").each(function(){
                var n = $(this).parents("tr").index();//获取checkbox所在行的顺序  
                var num = $(this).parents("tr").children('.num4').text();//学号
            $.ajax({
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/delete.php',
                type:'POST',
                data: {'num':num},
                dataType:'json',
                success:function(result){
                        if(result.defeat=='defeat'){
                            $('#tell').text('数据删除失败！').animate({opacity:'1'},1000);
                            $('#tell').text('数据删除失败！').animate({opacity:'0'},1000);
                        }else{
                            $('#tell').text('数据删除成功！').animate({opacity:'1'},1000);
                            $('#tell').text('数据删除成功！').animate({opacity:'0'},1000);
                            $(".studentsinfo").find("tr:eq(" + n + ")").remove();                     
                        }
                    }    
                })              
            });
        });
    }

    {   //修改选中的行与其数据
        $(".update1").click(function(){
            $(".checkbox4:checked").each(function(){ 
                var num = $(this).parents("tr").children('.num4').text();//学号
                var name=$(this).parents("tr").children("td:eq(1)").children("input").val();
                var grade=$(this).parents("tr").children("td:eq(2)").children("input").val();
                var major=$(this).parents("tr").children("td:eq(3)").children("input").val();
                var clas=$(this).parents("tr").children("td:eq(4)").children("input").val();
            $.ajax({
                url:'http://www.alanphp.com:8000/WisdomClassroom/php/teacher/update.php',
                type:'POST',
                data: {'num':num,'name':name,'grade':grade,'major':major,'clas':clas},
                dataType:'json',
                success:function(result){
                        if(result.defeat=='defeat'){
                            $('#tell').text('数据修改失败！').animate({opacity:'1'},1000);
                            $('#tell').text('数据修改失败！').animate({opacity:'0'},1000);
                        }else{
                            $('#tell').text('数据修改成功！').animate({opacity:'1'},1000);
                            $('#tell').text('数据修改成功！').animate({opacity:'0'},1000);                                        
                        }
                    }    
                })            
            });
        });
    }
    
})