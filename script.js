(() => {
 const menu=document.querySelector(".menu-toggle");
 const nav=document.querySelector(".main-nav");
 const year=document.getElementById("year");
 const form=document.getElementById("contact-form");
 if(year)year.textContent=String(new Date().getFullYear());
 if(menu&&nav){
   const close=()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Открыть меню")};
   menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Закрыть меню":"Открыть меню")});
   nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
   document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
 }
 if(form)form.addEventListener("submit",e=>{
   e.preventDefault();
   if(!form.reportValidity())return;
   const name=document.getElementById("sender-name").value.trim();
   const email=document.getElementById("sender-email").value.trim();
   const message=document.getElementById("sender-message").value.trim();
   const subject=encodeURIComponent("Сообщение с сайта CV от "+name);
   const body=encodeURIComponent("Имя: "+name+"\nEmail: "+email+"\n\n"+message);
   window.location.href="mailto:the@haymuz.ru?subject="+subject+"&body="+body;
 });
})();