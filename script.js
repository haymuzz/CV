(() => {
 const menu=document.querySelector(".menu-toggle");
 const nav=document.querySelector(".links");
 const year=document.getElementById("year");
 if(year)year.textContent=String(new Date().getFullYear());
 if(!menu||!nav)return;
 const close=()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Открыть меню");};
 menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Закрыть меню":"Открыть меню");});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
})();