require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "com":"com",
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["com","index"], function(com,index){
    index.close()
    index.both()
    index.ceil()
    index.box()
    index.dex1()
    index.dex2()
    index.backTop()
    com.download()
    com.move()
    com.num()
    com.loupe()
    com.car()
  })