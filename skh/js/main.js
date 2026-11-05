const b=document.querySelector('.burger'),n=document.querySelector('nav');
b&&b.addEventListener('click',()=>{n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))});
const lb=document.querySelector('.lb');
document.querySelectorAll('.gal .ph').forEach(p=>p.addEventListener('click',()=>{const i=p.querySelector('img');if(i&&lb){lb.querySelector('img').src=i.src;lb.classList.add('on')}}));
lb&&lb.addEventListener('click',()=>lb.classList.remove('on'));
const f=document.getElementById('appt');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const m=encodeURIComponent(`Hello Shree Krishna Hospital, I would like to book an appointment.\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nDepartment: ${d.get('dept')}\nPreferred date: ${d.get('date')||'Any'}\nNote: ${d.get('msg')||'-'}`);
window.open('https://wa.me/919457753542?text='+m,'_blank')});
