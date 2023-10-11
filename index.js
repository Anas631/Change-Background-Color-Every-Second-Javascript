const randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)]
    }

    return color 
    
}

let intervalId;

function chengBgColor (){
    document.body.style.backgroundColor= randomColor()
}

document.getElementById('start').addEventListener("click",function(){
    intervalId =  setInterval(chengBgColor,1000)
})

document.getElementById("stop").addEventListener('click',function(){
     clearInterval(intervalId)
})

