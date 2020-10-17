require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "index":"index",
        "list":"list"
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["index"], function(index){
    index.close()
    index.ceil()
    index.box()
    index.dex1()
    index.dex2()
    index.backTop()
    index.center()
  })