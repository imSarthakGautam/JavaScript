let button=document.querySelector('#oo');
let button2=document.querySelector('#ooo');
let button3=document.querySelector('#oooo');
let bulb=document.querySelector('.bulb');
let flag=0;
let flag2=0;
let actn;

let on = function(){
    if (flag==0){
        bulb.style.backgroundColor="yellow";
        console.log("button clicked : bulb on")
        flag=1
        } 
        else {
            bulb.style.backgroundColor="lightblue";
            console.log("button clicked again : bulb off")
            flag=0;
        }
}


//instead of passing callback function as argument passed function reference of on which does swithcing task
button.addEventListener('click', on)

button2.addEventListener('click', function(){
    if (flag2==0){
    console.log("button clicked just now, wait 2 seconds for blinking bulb")
    actn=setInterval(on,2000);
    flag2=1;
    }
    else{
    clearInterval(actn);
    flag2=0
    }


})

button3.addEventListener('click', function(){
    console.log("button clicked just now, wait 2 seconds")
    
        setTimeout(on,2000);

});

