const text=`Dear Apurva,

Today is your special day. I sincerely wish your life is filled with happiness, peace, success and beautiful memories.

Thank you for every smile and every moment. No matter where life takes us, I genuinely hope you always stay happy.

Happy Birthday once again, Apurva.

— Kalpesh ❤️`;
function openGift(){gift.classList.add('hide');content.classList.remove('hide');let i=0;let box=document.getElementById('msg');let t=setInterval(()=>{box.innerHTML=text.slice(0,++i).replace(/\n/g,"<br>");if(i>=text.length)clearInterval(t)},35)}
