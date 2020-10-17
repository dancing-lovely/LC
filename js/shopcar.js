define(["jquery", "jquery-cookie"],function($){
    function loadCarData(){ 
         $.ajax({
             type:'get',
             url:"./data/com-main.json",
             success:function(arr){
            var cookieStr = $.cookie("goods");
            if(!cookieStr){
                return;
            }    
            var cookieArr = JSON.parse(cookieStr);
            var newArr = [];
            for(var i = 0; i < arr.length; i++){
              for(var j = 0; j < cookieArr.length; j++){
                  
                if(cookieArr[j].id == arr[i].id){
                  arr[i].num = cookieArr[j].num;
                  newArr.push(arr[i]);
                  break;
                } 
              } 
            }
            for(var i = 0; i < newArr.length; i++){
                 var node = $( `<div class="matter" id="${newArr[i].id}">
                 <div class="corps">
                 <input type="checkbox" class="checkbox">
                 <a href="com.html?id=2222" class="a-1"><img src="${newArr[i].img1}" alt=""></a>
             </div>
             <div class="txt">
                 <p class="text">${newArr[i].referral}</p>
             </div>
             <div class="acount">
                 <div class="add_minus">
                     <div class="minus"><img src="./img/shopcar/minus.png"></div>
                     <div class="num">${newArr[i].num}</div>
                     <div class="add"><img src="./img/shopcar/add.png"></div>
                 </div>
             </div>
             <div class="univalence">
                 <p>${newArr[i].pr1}</p>
             </div>
             <div class="sum">
                 <p>${(newArr[i].pr1 * newArr[i].num).toFixed(2)}</p>
             </div>
             <div class="del">
                 <p>删除</p>
             </div>
             </div>`)
                node.appendTo('.nice')
             }
             isCheckAll();
            },
             error:function(msg){
                 console.log(msg);
             }
         })
        }
        function isCheckAll(){
            var allChecks = $(".nice").find(".matter")
            var isAll = true
            var total = 0
            var count = 0
            var totalCount = 0
            allChecks.each(function(index,item){
                    total += parseFloat($(item).find(".num").html()) * parseFloat($(item).find(".univalence p").html())
                })
                $(".bothprice span").html("￥"+total.toFixed(2))
        }
        function changeCars(){
            $('.nice').on("click",".del",function(){
                var id = $(this).closest(".matter").remove().attr("id")
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    if(id == cookieArr[i].id){
                        cookieArr.splice(i, 1);
                        break;
                    }
                }
                cookieArr.length == 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
                isCheckAll();
            })
            $('.nice').on("click",".minus,.add",function(){
                var id = $(this).closest(".matter").attr("id")
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var str 
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        if(this.className == "minus"){
                            cookieArr[i].num == 1 ? alert("数量已经为1，不能再减少！") : cookieArr[i].num--;
                        }else{
                            cookieArr[i].num +=1;
                        }
                        break;
                    }
                }
                $(this).siblings(".num").html(cookieArr[i].num);
                var price = parseFloat($(this).closest(".acount").siblings(".univalence").children().html().trim())
                $(this).closest(".acount").siblings(".sum").children().html((price * cookieArr[i].num).toFixed(2))
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
                isCheckAll()
            })
        }
    return{
        loadCarData,
        changeCars
    }
});