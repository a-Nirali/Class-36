class Form {
    constructor(){}

    display(){
        var heading = createElement ( "h4");
        heading.html("Car Racing Game")
        heading.position(150,20);

        var input = createInput ("enter your name")
        input.position(150,150)


        var button = createButton ("start")
         button.position(180,200)

       
         button.mousePressed(function (){
             input.hide();
             button.hide();
             var greeting = createElement("h2");
             greeting.html("hello "+ input.value() )
             greeting.position(250,250)
         })
    }
}