define(["jquery"], function($){
    // console.log("good")
    function registerSend(){
        $(".login-btn").click(function(){
            $.ajax({
                type:"post",
                url:"./php/myregister.php",
                data:{
                    username:$(".inp").eq(0).val(),
                    password:$(".inp").eq(1).val(),
                    repassword:$(".inp").eq(2).val(),
                    createtime:(new Date()).getTime()
                },
                success:function(result){
                    var obj = JSON.parse(result)
                    if(obj.code){
                        $(".hint").css("color","red")
                    }else{
                        $(".hint").css("color","green")
                        setTimeout(function(){
                            window.location.href="./login.html"
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
        registerSend,
    }
})

