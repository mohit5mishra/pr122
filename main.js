x=0;
y=0;
draw_apple="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
    recognition.onresult=function(event){
        console.log(event);
        var content=event.results[0][0].transcript;
        document.getElementById("status").innerHTML="The speech has been recognized as "+ content;
        if(content=="circle"){
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            document.getElementById("status").innerHTM="started drawing circle";
            draw_circle="set";
        }
        if(content=="rectangle"){
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            document.getElementById("status").innerHTM="started drawing rectangle";
            draw_rect="set";
        }
           
    }

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementsById("status").innerHTML="Circle is dawn.";
        draw_circle="";
    }
    if(draw_rect=="set"){
      
        rect(x,y,70,50);
        document.getElementsById("status").innerHTML="Rectangle is dawn.";
        draw_rect="";
    }
}
    
