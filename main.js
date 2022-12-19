var progressBar = [document.getElementById('run-1'), document.getElementById('run-2'), document.getElementById('cover')];
var setTime = [document.getElementById('promo'), document.getElementById('short'), document.getElementById('long')];
var li = document.querySelectorAll('nav ul li');
var el = document.getElementById('graph');
var submit = document.getElementById('submit');
var color = document.getElementById('color');
var font = document.getElementById('fonts');
var stopBtn = document.getElementById('stop-btn');
var rotate = [315, 495];
var min = 25;
var sec = 0;
let ROTATION = 360/(min*60);

for(let i = 0; i < 3; i++){
    li[i].addEventListener('click', () => {
        min = setTime[i].value;
        sec = 0;
        rotate[0] = 315;
        rotate[1] = 495;
        ROTATION = 360/(min*60);
    });
}

stopBtn.addEventListener('click', () => {
    if(stopBtn.getAttribute("stop") === "false"){
        stopBtn.setAttribute("stop", "true");
        stopBtn.textContent = "play";
    }else {
        stopBtn.setAttribute("stop", "false");
        stopBtn.textContent = "pause";
    }
});


var minDown = setInterval(() => {
    if(stopBtn.getAttribute("stop") === "false"){
        rotate[0] = rotate[0] + ROTATION;
        if(sec > 1){
            sec--;
        }else {
            sec = 59;
            min--;
        } 
        if(min === -1 && sec === 59){
            min = "0";
            sec = "0";
            clearInterval(minDown);
            progressBar[1].remove();
            audio.play();
            var stopWhatch = document.createElement('button');
            stopWhatch.classList.add('stop-whatch');
            stopWhatch.textContent = "Stop";
            document.body.appendChild(stopWhatch);
            stopWhatch.addEventListener('click', () => {
                window.location.reload();
            });
        }
        if(Math.round(rotate[0]) >= 495){
            if(Math.round(rotate[0]) === 495){
                progressBar[0].remove();
                progressBar[2].style.borderBottom = "8px solid #151932";
                progressBar[2].style.borderRight = "8px solid #151932";
            }else {
                rotate[1] = rotate[1] + ROTATION;
                progressBar[1].style.transform =`rotate(${rotate[1]}deg)`;
            }
        }
        progressBar[0].style.transform =`rotate(${rotate[0]}deg)`;
    }
    el.firstElementChild.innerHTML = `${min < 10 ? "0"+min : min}:${sec < 10 ? "0"+sec : sec}`;
}, 999.5);

var closeBtn = document.getElementById('close');
var setting = document.getElementById('menu');
var img = document.getElementById('settings');

img.addEventListener('click', () => {
    setting.style.display = "flex";
});

function hide() {
    setting.style.display = "none";
}
closeBtn.addEventListener('click', hide);
submit.addEventListener('click', hide);

let children = Array.from(color.children);

children.forEach(elem => elem.addEventListener('click', () => {
    let theme = window.getComputedStyle(elem).backgroundColor;
    progressBar[0].style.borderRight = `${theme} 8px solid`;
    progressBar[0].style.borderBottom = `${theme} 8px solid`;
    progressBar[1].style.borderRight = `${theme} 8px solid`;
    progressBar[1].style.borderBottom = `${theme} 8px solid`;
    elem.appendChild(myImg);
    for(let c = 0; c < 3; c++){
        li[c].onmouseover = () => {
            li[c].style.backgroundColor = theme;
        }
        li[c].onmouseout = () => {
            li[c].style.backgroundColor = "transparent";
        }
    }
}));

let fontsArray = Array.from(font.children);

var myImg = document.createElement('img');
myImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0MC42MDggMjQwLjYwOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTIwOC43ODksMjkuOTcybDMxLjgxOSwzMS44Mkw5MS43NjMsMjEwLjYzN0wwLDExOC44NzZsMzEuODE5LTMxLjgybDU5Ljk0NCw1OS45NDJMMjA4Ljc4OSwyOS45NzJ6IiBmaWxsPSIjZmZmZWZlIiBkYXRhLW9yaWdpbmFsPSIjMDIwMjAyIiBjbGFzcz0iIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=';

fontsArray.forEach(elem => {
    elem.addEventListener('click', () => {
        let thisFont = window.getComputedStyle(elem).fontFamily;
        document.getElementsByTagName('html')[0].style.fontFamily = thisFont;
        if(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontFamily === "sans-serif"){
            fontsArray[0].classList.add('selected');
            fontsArray[1].classList.remove('selected');
            fontsArray[2].classList.remove('selected');
        }else if(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontFamily === '"Roboto Mono", monospace'){
            fontsArray[0].classList.remove('selected');
            fontsArray[1].classList.add('selected');
            fontsArray[2].classList.remove('selected');
        }else {
            fontsArray[0].classList.remove('selected');
            fontsArray[1].classList.remove('selected');
            fontsArray[2].classList.add('selected');
        }
    });
});

var audio = document.getElementById('beep');
audio.src = './alarm_beep.mp3';
audio.load();

window.onload = () => {
    children[0].appendChild(myImg);
    fontsArray[0].classList.add('selected');
}