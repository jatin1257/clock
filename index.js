
var secondhand=document.querySelector('.second-hand');
var hourhand=document.querySelector('.hour-hand');
var minutehand=document.querySelector('.minute-hand');
function changesecond()
{
    const d=new Date();
     var hour=d.getHours();
     var minutes=d.getMinutes();
     var sec=d.getSeconds();
    var secdegree=sec*6;
    console.log(hour);
    var hourdegree=hour*15;
    var minutedegree=minutes*6;
    secondhand.style.transform=`rotate(${secdegree}deg)`;
    minutehand.style.transform=`rotate(${hourdegree}deg)`;
    hourhand.style.transform=`rotate(${minutedegree}deg)`;
 
    



}
function display()
{
    console.log("hello");
}
document.addEventListener("DOMContentLoaded",function(){    
            setInterval(changesecond,1000) ;
    
})


