require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "index":"index",
        "shopcar":"shopcar"
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["index","shopcar"], function(index,shopcar){
    index.close()
    index.both()
    index.ceil()
    index.box()
    index.dex1()
    index.dex2()
    index.backTop()
    shopcar.loadCarData()
    shopcar.changeCars()
  })