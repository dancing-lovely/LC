define(["jquery"], function($){
    // console.log("good")
    function loginSend(){
        $(".login-log").click(function(){
            $.ajax({
                type:"post",
                url:"./php/mylogin.php",
                data:{
                    username:$(".inp").eq(0).val(),
                    password:$(".inp").eq(1).val(),
                    createtime:(new Date()).getTime()
                },
                success:function(result){
                    var obj = JSON.parse(result)
                    if(obj.code){
                        $(".hint").css("color","red")
                    }else{
                        $(".hint").css("color","green")
                        setTimeout(function(){
                            window.location.href="./index.html"
                        },1000)
                    }
                    $(".hint").html(obj.msg)
                },
                error:function(msg){
                    console.log(msg)
                }
            })
        })
    }
    

    return{
        loginSend,
    }
})

