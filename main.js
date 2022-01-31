var mouseEvent="empty"
canvas = document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
var lastpositionofx,lastpositionofy
color="red"
lineWidth=3
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft
    currentpositionofy=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=lineWidth
        console.log("n of x and y ="+lastpositionofx+","+lastpositionofy)
        ctx.moveTo(lastpositionofx,lastpositionofy)
        ctx.lineTo(currentpositionofx,currentpositionofy)
        console.log('current position of x and y ='+currentpositionofx+","+currentpositionofy)
        ctx.stroke()
        
    }
    lastpositionofx=currentpositionofx
    lastpositionofy=currentpositionofy
}

var width=screen.width
newWidth=width-70
newHeight=screen.height-150
var last_position_of_x, last_position_of_y;

   
  
       if(width<992){
           document.getElementById("myCanvas").width=newWidth
           document.getElementById("myCanvas").height=newHeight
           document.body.style.overflow="hidden"
       }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        
         
        //Addictonal Activity ends

       last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
       last_position_of_y=e.touches[0].clientY-canvas.offsetTop
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

 