let start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeAppear(){
    let top = Math.random() * 550 ;
    let left = Math.random() * 550 ;
    let width = Math.random() * 350 ;
    let height = Math.random() * 350 ;

    if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius = "50%" ; 
    }
    else{
        document.getElementById("shape").style.borderRadius = "0%" ; 
    }
    
    document.getElementById("shape").style.top = top + "px" ;
    document.getElementById("shape").style.left = left + "px" ;
    document.getElementById("shape").style.width = width + "px" ;
    document.getElementById("shape").style.height = width + "px" ;

    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}

function shapeAppearDelay(){
setTimeout(shapeAppear, Math.random()* 1125);
}

shapeAppearDelay()

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none"
    let end = new Date().getTime() ;
    let time = (end - start) / 1000 ;
    //alert(time);
    document.getElementById("time").innerHTML = time + " Seconds to get that Object" ;
    //setTimeout(shapeAppear, Math.random()* 2500);
    shapeAppearDelay()
}