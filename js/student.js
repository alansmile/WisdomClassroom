$(function(){
    {
        var usernameUrl = window.location.search;   //解析URL中的username字符串，split是jquery中的分割字符串函数
        var username = 'username='+usernameUrl.split('=')[1];
        $.ajax({    //aside
            url:'http://www.alanphp.com:8000/WisdomClassroom/php/student/student.php',
            type:'POST',
            data: username,
            dataType:'json',
            success:function(result){    
                if(result.defeat=='defeat'){
                    alert('学生信息加载失败，请联系阿岚（alansmileheng@qq.com）！');
                }else{
                    if(result.专业==106){
                        result.专业='机械电子工程';
                    }else if(result.专业==119){
                        result.专业='机器人工程';
                    }else{
                        result.专业=result.专业;
                    } 
                    $('#main>.mains>.aside>.info').append('<p>Hello，'+result.姓名+'！</p><p>学号：'+result.学号+'</p><p>年级：'+result.年级+'级</p><p>专业：'+result.专业+'</p><p>班级：'+result.班级+'班</p>');
                } 
            }
        });
        $.ajax({    //main
            url:'http://www.alanphp.com:8000/WisdomClassroom/php/student/show.php',
            type:'POST',
            data: username,
            dataType:'json',
            success:function(result){    
                if(result.defeat=='defeat'){
                    alert('平台数据加载失败，请联系阿岚（alansmileheng@qq.com）！');
                }else{
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
        });
    };
    //鼠标滚动事件
    $(document).scroll(function(){
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
    {   //点击标签切换不同的表格
        var item='#main>.mains>.content>.item>.';
        var content='#main>.mains>.content>.';
        var cloudclass=item+'cloudclass';
        var itbegin=item+'itbegin';
        var cg=item+'cg';
        var sum=item+'sum';
        var cloudclass_content=content+'cloudclass_content';
        var itbegin_content=content+'itbegin_content';
        var cg_content=content+'cg_content';
        var sum_content=content+'sum_content';
        var cssItem1={'font-weight':'normal','border-bottom':'1px solid #d1d5da'};
        var cssContent1={'z-index':'0','opacity':'0'};
        function clear(){
            $(cloudclass_content).css(cssContent1);
            $(itbegin_content).css(cssContent1);
            $(cg_content).css(cssContent1);
            $(sum_content).css(cssContent1);
            $(cloudclass).css(cssItem1);
            $(itbegin).css(cssItem1);
            $(cg).css(cssItem1);
            $(sum).css(cssItem1);
        };
        var cssItem2={'font-weight':'bold','border-bottom':'2px solid #0366d6'};
        var cssContent2={'z-index':'9','opacity':'1'};
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
  
})