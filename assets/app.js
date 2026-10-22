(()=>{
const C=window.C,U=C.ui,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let L=ls.get('lang')||'es',I=()=>L==='es'?0:1;
const t=p=>Array.isArray(p)?p[I()]:p;
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const K=C.contact,GH=K.github+'/';
const sh=(id,i,extra='')=>`<div class="sh rv"><h2>${t(U.h[id])}</h2><span class="num">${i?String(i).padStart(2,'0')+' / 06':'/ contacto'}</span></div>${U.sub[id]?`<p class="sub rv">${t(U.sub[id])}</p>`:''}${extra}`;
const proj=p=>`<article class="card proj rv"><div class="meta">${p.fork?`<span class="chip a">${t(U.fork)}</span>`:''}<span class="chip">${t(C.groups[p.g])}</span>${p.l?`<span class="chip">${p.l}</span>`:''}</div><h3>${e(p.n)}</h3><p>${p.d?e(t(p.d)):`<i>${t(U.noDesc)}</i>`}</p><a class="go" href="${GH+encodeURI(p.n)}" target="_blank" rel="noopener">${t(U.repo)} ↗</a></article>`;
function badgeSvg(){return `<svg width="72" height="84" viewBox="0 0 72 84" role="img" aria-label="AWS Academy Cloud Foundations"><path d="M4 4h64v56L36 80 4 60z" fill="#e9eef0" stroke="#1d2b35" stroke-width="3"/><path d="M4 58l32 20 32-20V46H4z" fill="#1d2b35"/><text x="36" y="30" text-anchor="middle" font="" font-size="9" font-weight="700" fill="#1d2b35">aws</text><text x="36" y="41" text-anchor="middle" font-size="6" fill="#1d2b35">ACADEMY</text><text x="36" y="53" text-anchor="middle" font-size="6.5" font-weight="700" fill="#fff">TRAINED</text></svg>`}
function render(){
const P={...C.pitch,skills:C.pitch.skills||C.skills,skillsEn:C.pitch.skillsEn||C.skillsEn},sk=L==='es'?P.skills.map(s=>s[1]):P.skillsEn,pipe=L==='es'?U.pipe:U.pipeEn,main=C.projects.filter(p=>p.f),rest=C.projects.filter(p=>!p.f);
document.documentElement.lang=L;document.title=t(C.meta.title);$('meta[name=description]').content=t(C.meta.desc);
$('#app').innerHTML=`
<header class="top"><div class="wrap bar"><a class="logo" href="#inicio" aria-label="${C.name}"><i>FC</i>Fernando</a>
<nav id="nav" aria-label="Principal">${U.ids.map((id,i)=>`<a href="#${id}" data-s="${id}"><b>0${i+1}</b>${t(U.nav[i])}</a>`).join('')}<span class="soon" aria-disabled="true">${t(U.soon)}<em>${t(U.soonTag)}</em></span></nav>
<div class="tools"><button class="pill" id="th" aria-label="${t(U.theme)}" aria-pressed="${document.documentElement.dataset.theme==='dark'}"><svg class="s" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></svg><svg class="m" viewBox="0 0 24 24"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg></button>
<button class="lang" id="lg" aria-label="${t(U.lang)}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>${L==='es'?'ES':'EN'}</button>
<a class="btn sm" href="#contacto">${t(U.contact)}</a><button class="burger" id="bg2" aria-label="${t(U.menu)}" aria-expanded="false" aria-controls="nav">☰</button></div></div></header>
<main>
<section id="inicio" class="hero"><div class="wrap hero-grid"><div>
<span class="badge"><i class="dot"></i>${t(U.avail)}</span>
<p class="eyebrow"><b>${C.name}</b>${t(U.role)}</p>
<h1>${t(U.h1)} <span class="acc"><span id="tw"></span><i class="caret"></i></span></h1>
<p class="lead">${t(U.lead)}</p>
<div class="cta"><a class="btn" href="#proyectos">${t(U.seeWork)} →</a><a class="btn ghost" href="${K.cv}" target="_blank" rel="noopener">${t(U.cv)}</a></div>
<div class="links"><a href="${K.github}" target="_blank" rel="noopener">GitHub</a><a href="${K.linkedin}" target="_blank" rel="noopener">LinkedIn</a></div></div>
<aside class="card" aria-label="${t(U.cardTitle)}"><div class="row"><h3>${t(U.cardTitle)}</h3><span class="tag"><i class="dot"></i>${t(U.cardTag)}</span></div>
<ul class="pipe">${pipe.map(x=>`<li>${x[0]}<span>${x[1]}</span></li>`).join('')}</ul><div class="note">${t(U.cardNote)}</div></aside></div></section>

<section class="s" id="proyectos"><div class="wrap">${sh('proyectos',1)}
<h3 class="gt">${t(U.featured)}</h3><div class="grid">${main.map(proj).join('')}</div>
<h3 class="gt">${t(U.more)}</h3><div class="list">${rest.map(p=>`<a class="rv" href="${GH+encodeURI(p.n)}" target="_blank" rel="noopener"><span>${e(p.n)}</span><small>${p.fork?t(U.fork)+' · ':''}${p.l||t(C.groups[p.g])}</small></a>`).join('')}</div></div></section>

<section class="s" id="habilidades"><div class="wrap">${sh('habilidades',2)}<div class="sk">${P.skills.map((s,i)=>`<div class="card rv"><h3>${t(s[0])}</h3><div class="meta">${sk[i].map(x=>`<span class="chip">${x}</span>`).join('')}</div></div>`).join('')}</div></div></section>

<section class="s" id="experiencia"><div class="wrap">${sh('experiencia',3)}${C.jobs.map(j=>`<article class="job rv"><div><h3>${j.o}</h3><div class="p">${t(j.p)}</div></div><div><strong>${t(j.r)}</strong><ul>${j.b.map(b=>`<li>${t(b)}</li>`).join('')}</ul></div></article>`).join('')}</div></section>

<section class="s" id="formacion"><div class="wrap">${sh('formacion',4)}<div class="two"><div class="card rv"><h3>${t(C.edu.school)}</h3><p style="color:var(--mu);margin:.3rem 0 1.2rem">${t(C.edu.deg)}</p>
<div class="badgebox">${badgeSvg()}<div><span class="chip a">${t(U.badge)}</span><h3 style="margin:.5rem 0 .2rem;font-size:1.05rem">AWS Academy Graduate – Cloud Foundations</h3><p style="margin:0;color:var(--mu);font-size:.9rem">${t(U.issued)}</p><a class="tag" style="color:var(--ac);margin-top:.5rem" href="${K.credly}" target="_blank" rel="noopener">${t(U.badgeLink)} ↗</a></div></div>
<div class="note">${t(U.goal)}</div></div>
<div class="card rv"><h3 style="margin-bottom:.6rem">${t(U.cert)}</h3>${C.certs.map(c=>`<div class="cert"><div>${c[0]}<small>${t(c[2])}</small></div><small>${c[1]}</small></div>`).join('')}</div></div></div></section>

<section class="s" id="ruta"><div class="wrap">${sh('ruta',5)}<div class="tiers">${P.tiers.map((x,i)=>`<div class="card rv"><span class="chip ${i?'':'a'}">${t(U.tier[i])}</span><h3>${t(x[0])}</h3><p>${t(x[1])}</p></div>`).join('')}</div></div></section>

<section class="s" id="sobre-mi"><div class="wrap">${sh('sobre-mi',6)}<div class="two"><div class="term rv"><div class="hd"><i></i><i></i><i></i></div><div class="bd"><p><span class="c">$</span> whoami<br>${C.name}</p><p><span class="c">$</span> cat ${L==='es'?'perfil':'profile'}.txt</p>${C.about.lines.map(l=>`<p>${t(l)}</p>`).join('')}<p><span class="c">$</span> langs --list<br>${C.about.langs.map(l=>`${l[I()]}: ${l[I()+2]}`).join('<br>')}</p></div></div>
<div class="rv"><h3 class="gt" style="margin-top:0">${t(U.metrics)}</h3><div class="metrics" style="margin-top:0">${C.about.metrics.map(m=>`<div class="card"><b>${m[0]}</b><span>${t(m[1])}</span><small>${m[2]}</small></div>`).join('')}</div></div></div></div></section>

<section class="s" id="contacto"><div class="wrap">${sh('contacto',0)}<div class="cgrid"><form id="cf" class="rv" novalidate><input class="hp" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
<label>${t(U.f.name)}<input name="name" required autocomplete="name"></label><label>${t(U.f.email)}<input type="email" name="email" required autocomplete="email"></label><label>${t(U.f.msg)}<textarea name="message" rows="5" required></textarea></label>
<button class="btn" type="submit">${t(U.f.send)}</button><div id="st" role="status" aria-live="polite"></div></form>
<div class="direct rv"><h3 class="gt" style="margin-top:0">${t(U.direct)}</h3>
<a href="mailto:${K.email}"><small>${t(U.f.email)}</small>${K.email}</a><a href="tel:${K.tel}"><small>Tel</small>${K.phone}</a><a href="${K.wa}" target="_blank" rel="noopener"><small>WhatsApp</small>wa.me/51904931317</a>
<a href="${K.linkedin}" target="_blank" rel="noopener"><small>LinkedIn</small>fernando-angel-chirinos-paredes</a><a href="${K.github}" target="_blank" rel="noopener"><small>GitHub</small>CheXgun365</a><a><small>${L==='es'?'Ubicación':'Location'}</small>${t(K.loc)}</a></div></div></div></section>
</main>
<footer><div class="wrap"><span>© 2026 ${C.name} · ${t(K.loc)}</span><span><a href="mailto:${K.email}">${K.email}</a> · <a href="tel:${K.tel}">${K.phone}</a> · <a href="${K.wa}" target="_blank" rel="noopener">WhatsApp</a> · <a href="${K.github}" target="_blank" rel="noopener">GitHub</a> · <a href="${K.linkedin}" target="_blank" rel="noopener">LinkedIn</a></span></div></footer>
<button id="up" aria-label="${t(U.top)}">↑</button>`;
$('.skip').textContent=t(U.skip);
bind();typeStart();spy();reveal();
}
/* typewriter */
let tt;function typeStart(){clearTimeout(tt);const el=$('#tw'),ph=t(U.type),c=$('.caret');if(RM){el.textContent=ph[0];c.style.display='none';return}
let i=0,j=0,d=0;(function s(){const w=ph[i];j+=d?-1:1;el.textContent=w.slice(0,j);let ms=d?30:70;if(!d&&j===w.length){d=1;ms=1600}else if(d&&!j){d=0;i=(i+1)%ph.length;ms=300}tt=setTimeout(s,ms)})()}
/* observers */
let so,ro;function spy(){so&&so.disconnect();const ls=$$('nav a[data-s]');so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)ls.forEach(a=>a.classList.toggle('on',a.dataset.s===x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});U.ids.forEach(id=>so.observe($('#'+id)))}
function reveal(){ro&&ro.disconnect();ro=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}}),{threshold:.08});$$('.rv').forEach(n=>RM?n.classList.add('in'):ro.observe(n))}
/* handlers */
function bind(){
$('#th').onclick=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;ls.set('theme',n);$('#th').setAttribute('aria-pressed',n==='dark');$('meta[name=theme-color]').content=n==='dark'?'#070d12':'#f3f8f9'};
$('#lg').onclick=()=>{L=L==='es'?'en':'es';ls.set('lang',L);const y=scrollY;render();scrollTo(0,y)};
const nav=$('#nav'),b=$('#bg2');b.onclick=()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)};
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');b.setAttribute('aria-expanded',false)}));
$('#up').onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});
$('#cf').onsubmit=async ev=>{ev.preventDefault();const f=ev.target,st=$('#st');if(!f.checkValidity()){f.reportValidity();return}
const d=Object.fromEntries(new FormData(f)),k=K.web3formsKey;if(d.botcheck)return;
if(!k||k.includes('COMPLETAR')){location.href=`mailto:${K.email}?subject=${encodeURIComponent('Contacto portafolio: '+d.name)}&body=${encodeURIComponent(d.message+'\n\n'+d.name+' <'+d.email+'>')}`;st.textContent=t(U.f.mailto);return}
try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:k,name:d.name,email:d.email,message:d.message,subject:'Portafolio: '+d.name})});const j=await r.json();if(!j.success)throw 0;st.textContent=t(U.f.ok);f.reset()}catch(x){st.innerHTML=`${t(U.f.err)} <a href="mailto:${K.email}" style="text-decoration:underline">${t(U.f.alt)}</a>`}}}
addEventListener('scroll',()=>{const u=$('#up');u&&u.classList.toggle('show',scrollY>600)},{passive:true});
/* cursor */
function cursor(){if(RM||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
const r=document.createElement('div'),d=document.createElement('div');r.className='cr';d.className='cd';r.setAttribute('aria-hidden','true');d.setAttribute('aria-hidden','true');document.body.append(r,d);
let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;document.documentElement.classList.add('has-cursor');
addEventListener('mousemove',v=>{x=v.clientX;y=v.clientY},{passive:true});
addEventListener('mouseover',v=>r.classList.toggle('h',!!v.target.closest('a,button,[role=button]')));
addEventListener('mousedown',()=>r.classList.add('d'));addEventListener('mouseup',()=>r.classList.remove('d'));
(function f(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px)`;d.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})()}
/* particles */
function particles(){const cv=$('#bg'),g=cv.getContext('2d');let w,h,n,ps=[],run=!document.hidden;
const col=()=>getComputedStyle(document.documentElement).getPropertyValue('--ac').trim()||'#3ddbc4';
function size(){const q=devicePixelRatio||1;w=cv.width=innerWidth*q;h=cv.height=innerHeight*q;g.setTransform(q,0,0,q,0,0);w=innerWidth;h=innerHeight;n=Math.min(70,Math.floor(w*h/22000));ps=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}
function draw(){g.clearRect(0,0,w,h);const c=col();g.fillStyle=c;g.strokeStyle=c;for(const p of ps){if(!RM){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}g.globalAlpha=.55;g.beginPath();g.arc(p.x,p.y,1.4,0,7);g.fill()}
for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){const a=ps[i],b=ps[j],dd=(a.x-b.x)**2+(a.y-b.y)**2;if(dd<14400){g.globalAlpha=.16*(1-dd/14400);g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()}}
if(!RM&&run)requestAnimationFrame(draw)}
size();draw();addEventListener('resize',()=>{size();RM&&draw()});document.addEventListener('visibilitychange',()=>{run=!document.hidden;if(run&&!RM)draw()})}
render();cursor();particles();
})();