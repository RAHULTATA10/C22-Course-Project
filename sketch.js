var rect1, rect2 ;

function setup() {
    createCanvas(400, 400) ;

    rect1 = createSprite(150, 280, 90, 42) ;
    
    rect1.shapeColor = "red";
    rect1.setCollider("Circle", 0, 0, 75) ;
    rect1.debug = true ; 

    rect2 = createSprite(320, 180, 37, 87) ;
    
    rect2.shapeColor = "blue";
    rect2.setCollider("Circle", 0, 0, 75) ;
    rect2.debug = true ;
}

function draw() {
    background (303, 250, 203) ;

        rect2.x = World.mouseX ;
        rect2.y = World.mouseY ;
        if (rect1.isTouching (rect2)){
        rect1.shapeColor = "yellow" ; 
        rect2.shapeColor = "green" ; 
        }
        
        else{
            rect1.shapeColor = "red" ; 
            rect2.shapeColor = "blue" ; 
        }
        
        drawSprites() ;
}
