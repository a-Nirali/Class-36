class Game {
    constructor(){
      }
//anonymus function 
    getState(){
    database.ref("gamestate").on("value", function (data){
        gamestate=data.val()
    })

    }
    
    updateState(state){
     
    database.ref("/").set({gamestate : state})
    }
    
}