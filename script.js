```javascript
const text = `Dear Apurva ❤️

Happy Birthday To The Most Beautiful Girl.

On this beautiful day, I just want to say...

You are truly special.

May your smile always shine brighter than the stars ✨

May every dream you see become reality.
  
May happiness always stay with you.

May God bless you with endless love,
good health,
success,
and beautiful memories.

Keep Smiling 😊

Keep Shining ✨

Stay Blessed Forever ❤️

Once Again...

🎂 Happy Birthday Apurva 🎂

Made With Endless Love ❤️`;

function openGift(){

document.getElementById("gift").classList.add("hide");

document.getElementById("content").classList.remove("hide");

let music=document.getElementById("music");

music.play().catch(()=>{});

let i=0;

let box=document.getElementById("msg");

let typing=setInterval(()=>{

box.innerHTML=text.substring(0,++i).replace(/\n/g,"<br>");

if(i>=text.length){

clearInterval(typing);

}

},35);

confetti();

}

setInterval(createHeart,250);

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

function confetti(){

for(let i=0;i<180;i++){

let piece=document.createElement("div");

piece.style.position="absolute";

piece.style.width="8px";

piece.style.height="8px";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.borderRadius="50%";

piece.style.background=`hsl(${Math.random()*360},100%,50%)`;

piece.style.transition=(3+Math.random()*2)+"s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform=`translateY(${window.innerHeight+100}px) rotate(720deg)`;

},50);

setTimeout(()=>{

piece.remove();

},6000);

}

}
```
