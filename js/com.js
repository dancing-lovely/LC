define(["jquery","jquery-cookie"], 
function($){
  function download(){
      var id = valueByName(location.search,"id")
      $.ajax({
        url:'./data/com-main.json',
        success:function(arr){
            var goodsMsg =  arr.find(item => item.id == id)
            var node = $(`<div class="box_left">
            <div class="box">
                <div class="show fl">
                    <ul>
                        <li class="show-img1"><img src="${goodsMsg.img1}"></li>
                        <li class="show-img2"><img src="${goodsMsg.img2}"></li>
                        <li class="show-img3"><img src="${goodsMsg.img3}"></li>
                        <li class="show-img4"><img src="${goodsMsg.img4}"></li>
                        <li class="show-img5"><img src="${goodsMsg.img5}"></li>
                        <li class="show-img6"><img src="${goodsMsg.img1}"></li>
                    </ul>
                    <div class="btn-left">
                        &lt;
                    </div>
                    <div class="btn-right">
                        >
                    </div>
                </div>
                <div class="showpic clr">
                    <li class="clr rim"><img src="${goodsMsg.img1}"></li>
                    <li class="clr"><img src="${goodsMsg.img2}"></li>
                    <li class="clr"><img src="${goodsMsg.img3}"></li>
                    <li class="clr"><img src="${goodsMsg.img4}"></li>
                    <li class="clr"><img src="${goodsMsg.img5}"></li>
                </div>
            </div>
            <div class="loupe">
                <img src="${goodsMsg.img1}">
            </div>
            <div class="primary">
                <p class="brand">
                    ${goodsMsg.brand}
                </p>
                <p class="referral">
                    ${goodsMsg.referral}
                </p>
                <p class="price">
                    价格:<span>${goodsMsg.price}</span>
                </p>
                <p class="custom"><span><img src="./img/commodity/24691.png"></span>定制商品30天发货</p>
                <p class="free"><span><img src="./img/commodity/24690.png"></span>免运费 正品授权 </p>
                <div class="number">
                    <span class="fl">数量：</span>
                    <div class="minus"><img src="./img/commodity/24748.png"></div>
                    <div class="count">1</div>
                    <div class="add"><img src="./img/commodity/24750.png"></div>
                </div>
                <a href="#" class="buy ">
                    立即购买
                </a>
                <a href="#" class="a-shopcar join-car" id="${goodsMsg.id}">
                    <span><img src="./img/commodity/24749.png"></span>加入购物车
                </a>
                <a href="#" class="a-share">
                    <span><img src="./img/commodity/24746.png"></span>分享
                </a>
            </div>
            <div class="rolling">
                <div><img src="${goodsMsg.img1}"></div>
                <div><img src="${goodsMsg.img2}"></div>
                <div><img src="${goodsMsg.img3}"></div>
                <div><img src="${goodsMsg.img4}"></div>
                <div><img src="${goodsMsg.img5}"></div>
            </div>
            <div class="trademark">
                <p><span class="ic"><img src="./img/commodity/24830.png"></span>品牌简介</p>
                <div>${goodsMsg.jianjie}</div>
            </div>
            <div class="guide">
                <p class="zhinan"><span class="ic"><img src="./img/commodity/24829.png"></span>购物指南</p>
                <p>- 所有商品均为正品保证。</p>
                <p>- 中国大陆地区免运费，默认商家合作快递。 </p>
                <p>- 蜡烛、液态品、手表等含电池产品无法空运，运输时间相较普通空运件会更久。 </p>
                <p>- 如出现产品质量问题请在签收后72小时内联系客服。 </p>
            </div>
            <div class="sale">
                <img src="./img/commodity/24832.png">
            </div>
        </div>
        <div class="box_right">
            <p class="like">猜你喜欢</p>
            <div class="pic1">
                <img src="./img/commodity/pic1.jpg">
            </div>
            <p class="name">这是名字</p>
            <p class="shangjia">这是厂家</p>
            <p class="price-pic">${goodsMsg.price1}</p>
            <div class="pic2">
                <img src="./img/commodity/pic2.jpg">
            </div>
            <p class="name">名字</p>
            <p class="shangjia">厂家</p>
            <p class="price-pic">${goodsMsg.price2}</p>
            <div class="pic3">
                <img src="./img/commodity/pic3.jpg">
            </div>
            <p class="name">名字</p>
            <p class="shangjia">厂家</p>
            <p class="price-pic">${goodsMsg.price3}</p>
        </div>`)
            $("main").html(node)
        },
        error:function(msg){
            console.log(msg)
        }
    })
  }
  function valueByName(search,name){
      var start = search.indexOf(name + "=")
      if(start == -1){
          return null
      }else{
          var end = search.indexOf("&",start)
          if(end == -1){
              end = search.length
          }
          var str = search.substring(start,end)
          var arr = str.split("=")
          return arr[1]
      }
  }
  function move(){
      var aBtns = $(".showpic li")
      var oUl = $(".show").find("ul");
      var iNow = 0;
      var timer = null;
      aBtns.click(function () {
        iNow = $(this).index();
        tab();
      });
      $("main").on("click",'.btn-right',function(){
        if(iNow > 4){
            iNow == 1;
          }
          else{
            iNow++;
          }
          tab();
      })
      $("main").on("click",'.btn-left',function(){
        if(iNow < 1){
            iNow = 5
          }
          iNow--;
          tab()
      })
      function tab() {
        var oUl = $(".show").find("ul");
        var aBtns = $(".showpic li")
        aBtns.removeClass("rim").eq(iNow).addClass("rim");

        if (iNow == aBtns.size()) {
          aBtns.eq(0).addClass("rim");
        }
        oUl.animate(
          {
            left: iNow * -350,
          },
          500,
          function () {
            if (iNow === aBtns.size()) {
              iNow = 0;
              oUl.css("left", 0);
            }
          }
        );
      }
  }
  function num(){
    var num = 1
    $("main").on("click",".add",function(){
        if(num>98){
            num = 99
        }else{
            num++
        }
        $("main").find(".count").html(num)
    })
    $("main").on("click",".minus",function(){
        if(num<2){
            num = 1
        }else{
            num--
        }
        $("main").find(".count").html(num)
    })
  }
  function loupe(){
    $('main').on('mouseenter','.show',function(){
        $('.loupe').css('display','block');
        $(window).mousemove(function(e){
            var X = e.pageX - $('.show').offset().left - 50;
            var Y = e.pageY - $('.show').offset().top - 50;
            X = Math.max(0,X)
            X = Math.min(250,X)
            Y = Math.max(0,Y)
            Y = Math.min(250,Y)
            $('.loupe img').css({
                left:X * -2,
                top:Y * -2
            })
        })
    }).on('mouseleave','.show',function(){
        $('.loupe').css('display','none');
    })
        // var Img = document.querySelector("#small img")
        // console.log(Img)
        // var oBig = document.getElementById("big")
        // var oSmall = document.getElementById("small")
        // var oMask = document.getElementById("mask")
        // oBig.onmouseenter = function(){
        //     oSmall.style.display = "block"
        //     oMask.style.display = "block"
        // }
        // oBig.onmouseleave = function(){
        //     oSmall.style.display = "none"
        //     oMask.style.display = "none"
        // }
        // oBig.onmousemove = function(e){
        //     var ev = e || window.event
        //     var oX =ev.clientX - oBig.offsetLeft - 100
        //     oX = Math.max(0,oX)
        //     oX = Math.min(300,oX)
        //     var oY =ev.clientY - oBig.offsetTop - 100
        //     oY = Math.max(0,oY)
        //     oY = Math.min(300,oY)
        //     oMask.style.left = oX + "px"
        //     oMask.style.top = oY + "px"
        //     Img.style.left = -2*oX +"px"
        //     Img.style.top =  -2*oY + "px"
        // }
  }
  function car(){
    $("main").on("click",".join-car",function(){
        var id = this.id
         var first = $.cookie("goods") == null ? true : false
         if(first){
             var cookieArr = [{id:id,num:1}]
             $.cookie("goods",JSON.stringify(cookieArr),{
                 expires:7
             })
         }else{
             var same = false
             var cookieStr = $.cookie("goods")
             var cookieArr = JSON.parse(cookieStr)
             for(var i=1;i<cookieArr.length;i++){
                 if(cookieArr[i].id == id){
                     cookieArr[i].num++
                     same = true
                     break
                 }
             }
             if(!same){
                 var obj = {id:id,num:1}
                 cookieArr.push(obj)
             }
             $.cookie("goods",JSON.stringify(cookieArr),{
                 expires:7
             })
         }
         $.cookie("goods",JSON.stringify(cookieArr),{
             expires:7
         })
        return false
    })
  }
  return {
    move,
    download,
    num,
    loupe,
    car,
  }
})

