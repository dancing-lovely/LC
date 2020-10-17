require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "register":"register",
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["register"], function(register){
    register.registerSend()
  })