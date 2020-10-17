require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "index":"index",
        "banner":"banner",
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["banner","index"], function(banner,index){
    banner.move()
    index.close()
    index.both()
    index.ceil()
    index.box()
    index.dex1()
    index.dex2()
    index.backTop()
  })