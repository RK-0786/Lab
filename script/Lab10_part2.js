// var topPosition = 200;
// var leftPosition = -200;
var x = 50;
var y = 0;

function runPuppy(){

    var puppy = document.getElementById('puppy');

    var puppyposition = screen.availWidth - 97 - x;
    
    
    if(puppyposition > 10){
        puppy.style.left = x +"px";
        puppy.style.top = y +"px";
         x = x + 10 ;
         y =y + 10;
         while(y > screen.availHeight){
             y = 0;
         }
         console.log(puppyposition);

    }
    else{
        x = 50;
    }
}