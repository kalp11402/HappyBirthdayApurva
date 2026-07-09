const text=`Dear Apurva ❤️

Happy Birthday To The Most Beautiful Girl.

You are the reason behind countless smiles.

May your life always be filled with happiness,
love,
success,
peace,
and endless beautiful memories.

I wish every dream of yours comes true.

Keep Smiling 😊

Keep Shining ✨

Stay Blessed Forever ❤️

Once Again...

🎂 Happy Birthday Apurva 🎂

Made With ❤️ Just For You`;

function openGift(){

document.getElementById("gift").classList.add("hide");
document.getElementById("content").classList.remove("hide");

let i=0;
let box=document.getElementById("msg");

let t=setInterval(()=>{

box.innerHTML=text.slice(0,++i).replace(/\n/g,"<br>");

if(i>=text.length)
clearInterval(t);

},30);

createHearts();

confetti();
}

function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

},300);

}

function confetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.style.position="absolute";

c.style.width="8px";

c.style.height="8px";

c.style.background=`hsl(${Math.random()*360},100%,50%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

c.style.borderRadius="50%";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=`translateY(${window.innerHeight+50}px) rotate(720deg)`;

},50);

setTimeout(()=>c.remove(),4500);

}

}
