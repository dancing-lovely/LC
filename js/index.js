define([
    // 'parabola',
    'jquery',
    'jquery-cookie'
],function(jquery){
    function close(){
        $(".close").click(function(){
            $(".aside").css("display","none")
        })
    }
    function both(){
        $.ajax({
            url:'./data/data.json',
            success:function(arr){
                var str = ``;
                for(let i = 0;i < arr.length;i++){
                    str +=`<li>
                    <img src="${arr[i].url}">
                    <div class="mask">
                    <p class="big">${arr[i].big}</p>
                    <p class="small">${arr[i].small}</p>
                </div>
                    <div class="bar">
                        <img src="${arr[i].head}">
                        <a href="#">${arr[i].txt}</a>
                        <a href="#" class="goods">${arr[i].num}</a>
                    </div>
                </li>`
            }
                $('.item').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function box(){
        $.ajax({
            url:'./data/ceil.json',
            success:function(Arr){
                var str = ``;
                for(let i = 0;i < Arr.length-1;i++){
                    str +=`<li>
                    <img src="${Arr[i].img}">
                    <p>${Arr[i].text}</p>
                </li>`
            }
                $('.box-left').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function dex1(){
        $.ajax({
            url:'./data/dex.json',
            success:function(aRR){
                var str = ``;
                var aRR1 = aRR[0]
                for(let i = 0;i < aRR1.length;i++){
                    str +=`<li>${aRR1[i].main}</li>`
                }
                $('.magazing').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function dex2(){
        $.ajax({
            url:'./data/dex.json',
            success:function(aRR){
                var str = ``;
                var aRR2 = aRR[1]
                for(let i = 0;i < aRR2.length;i++){
                    str +=`<li>${aRR2[i].main}</li>`
                }
                $('.share').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function backTop(){
        $(".backtop").bind("click", function() {
            $("html").animate({ scrollTop: 0 }, 300)
            }) 
    }
    function center(){
        $.ajax({
            url:'./data/ceil.json',
            success:function(aRR){
                var str = `<li class="icon">
                <div class="NTS fl"></div>新品
            </li>`;
                for(let i = 0;i < aRR.length;i++){
                    str +=`<li>${aRR[i].text}</li>`
                }
                $('.center').html(str);
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    
    function ceil(){
        $(window).scroll(function(){
            var distance = $(window).scrollTop()
            if(distance >= 55){
                $('.ceil').css({
                    position:'fixed',
                    top:0,
                    margin:"auto",
                    left:"0",
                    right:"0",
                })
            }
            else{
                $('.ceil').css({
                    position: 'static',
                    margin:"0 auto",
                })
            }
        })
    }
    
    return{
        close,
        both,
        ceil,
        box,
        dex1,
        dex2,
        backTop,
        center,
    }
})

  