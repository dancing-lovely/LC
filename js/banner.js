define(["jquery"], function($){
  function move(){
    $(function () {
      var aBtns = $(".line").find("ul li");
      var oUl = $(".banner").find("ul");
      var iNow = 0;
      var timer = null;

      $(".banner").mouseenter(function () {
        clearInterval(timer);
      });
      aBtns.mouseenter(function () {
        clearInterval(timer);
      }).mouseleave(function(){
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);
      })

      $(".banner").mouseleave(function () {
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);
      });
      aBtns.click(function () {
        clearInterval(timer)
        iNow = $(this).index();
        tab();
      });
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 2000);

      $(".btn-right").click(function(){
        if(iNow > 3){
          iNow == 1;
        }else{
          iNow++;
        }
        tab();
      })
      $(".btn-left").click(function(){
        if(iNow < 1){
          iNow = 4
        }
        iNow--
        tab()
      })

      //点击按钮
      function tab() {
        aBtns.removeClass("active").eq(iNow).addClass("active");

        if (iNow == aBtns.size()) {
          aBtns.eq(0).addClass("active");
        }

        oUl.animate(
          {
            left: iNow * -1000,
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
    });
  }
  return {
    move
  }
})

