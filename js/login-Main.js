require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "login":"login",
    },
    shim:{
        "jquery-cookie":['jquery'],
        parabola:{
            exports:"_"
        }
    }
})

require(["login"], function(login){
    login.loginSend()
  })