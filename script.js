const phone='919572283857';
const dishes=[
{name:'Chicken Dum Biryani',cat:'biryani',price:250,img:'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=700&q=85&fit=crop',desc:'Classic dum-style chicken biryani.'},
{name:'Special Chicken Dum Biryani',cat:'biryani',price:350,img:'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700&q=85&fit=crop',desc:'A hearty special dum biryani.'},
{name:'Chicken Leg Biryani',cat:'biryani',price:300,img:'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&q=85&fit=crop',desc:'Biryani served with a chicken leg piece.'},
{name:'Egg Biryani',cat:'biryani',price:220,img:'https://images.unsplash.com/photo-1596797000135-5e3e6c2f7f3f?w=700&q=85&fit=crop',desc:'Fragrant rice with masala-coated eggs.'},
{name:'Veg Biryani',cat:'biryani',price:220,img:'https://images.unsplash.com/photo-1596797000135-5e3e6c2f7f3f?w=700&q=85&fit=crop',desc:'A colourful vegetarian rice favourite.'},
{name:'Paneer Biryani',cat:'biryani',price:250,img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=85&fit=crop',desc:'A delicious paneer and rice combination.'},
{name:'Paneer Tikka',cat:'starter',price:320,img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=85&fit=crop',desc:'Tandoori-style paneer bites.'},
{name:'Chicken Tikka',cat:'starter',price:390,img:'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=700&q=85&fit=crop',desc:'Smoky, flavour-packed chicken tikka.'},
{name:'Chicken Tandoori',cat:'starter',price:270,img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700&q=85&fit=crop',desc:'A classic tandoor favourite.'},
{name:'Chicken Butter Masala',cat:'main',price:230,img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=85&fit=crop',desc:'Creamy tomato gravy with chicken.'},
{name:'Chicken Korma',cat:'main',price:230,img:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=85&fit=crop',desc:'Rich, comforting Mughlai-style curry.'},
{name:'Veg Deluxe Thali',cat:'thali',price:180,img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85&fit=crop',desc:'A satisfying assortment of veg favourites.'},
{name:'Non Veg Deluxe Thali',cat:'thali',price:260,img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85&fit=crop',desc:'A hearty meal with chicken curry.'},
{name:'Chicken Roll',cat:'roll',price:80,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700&q=85&fit=crop',desc:'A tasty chicken-filled roll.'},
{name:'Double Chicken Roll',cat:'roll',price:100,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700&q=85&fit=crop',desc:'A filling roll with extra chicken.'},
{name:'Paneer Roll',cat:'roll',price:80,img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700&q=85&fit=crop',desc:'A quick vegetarian favourite.'},
{name:'Veg Chowmein',cat:'chinese',price:150,img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=85&fit=crop',desc:'Wok-tossed noodles with vegetables.'},
{name:'Paneer Chowmein',cat:'chinese',price:170,img:'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=85&fit=crop',desc:'Noodles tossed with soft paneer.'}
];
let cart={};let filter='all';
const grid=document.getElementById('foodGrid');
function render(){let q=document.getElementById('search').value.toLowerCase();let arr=dishes.filter(d=>(filter==='all'||d.cat===filter)&&d.name.toLowerCase().includes(q));grid.innerHTML=arr.map(d=>`<article class="food-card"><img loading="lazy" src="${d.img}" alt="${d.name}"><div class="food-info"><div class="food-type">${d.cat}</div><h3>${d.name}</h3><p>${d.desc}</p><div class="food-bottom"><span class="price">₹${d.price}</span><button class="add-btn" data-name="${d.name}">+ Add</button></div></div></article>`).join('');grid.querySelectorAll('.add-btn').forEach(b=>b.onclick=()=>{cart[b.dataset.name]=(cart[b.dataset.name]||0)+1;updateCart()})}
function updateCart(){let count=Object.values(cart).reduce((a,b)=>a+b,0),total=dishes.reduce((s,d)=>s+d.price*(cart[d.name]||0),0);document.getElementById('cartCount').textContent=count;document.getElementById('cartTotal').textContent='₹'+total;document.getElementById('modalTotal').textContent='₹'+total;document.getElementById('cartFab').classList.toggle('show',count>0);document.getElementById('cartItems').innerHTML=Object.entries(cart).filter(x=>x[1]>0).map(([name,n])=>{let d=dishes.find(x=>x.name===name);return `<div class="cart-row"><span>${name}<br>₹${d.price} × ${n}</span><span>₹${d.price*n} <button data-remove="${name}">Remove</button></span></div>`}).join('');document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{delete cart[b.dataset.remove];updateCart()})}
document.getElementById('filters').querySelectorAll('button').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active',x===b));render()});
document.getElementById('search').addEventListener('input',render);
document.getElementById('viewCart').onclick=()=>document.getElementById('cartModal').classList.add('open');
document.getElementById('closeCart').onclick=()=>document.getElementById('cartModal').classList.remove('open');
document.getElementById('cartModal').onclick=e=>{if(e.target.id==='cartModal')e.currentTarget.classList.remove('open')};
document.getElementById('checkout').onclick=()=>{let lines=Object.entries(cart).filter(x=>x[1]>0).map(([n,q])=>{let d=dishes.find(x=>x.name===n);return `${n} x ${q} = ₹${d.price*q}`});if(!lines.length)return;let total=dishes.reduce((s,d)=>s+d.price*(cart[d.name]||0),0);let name=document.getElementById('customerName').value.trim()||'Not provided';let address=document.getElementById('customerAddress').value.trim()||'Not provided';let msg=`Hello Zayka Biryani! I would like to place an order:\\n\\n${lines.join('\\n')}\\n\\nEstimated total: ₹${total}\\nName: ${name}\\nAddress / pickup: ${address}\\n\\nPlease confirm availability, final prices and delivery charges.`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank')};
document.querySelector('.menu-toggle').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();render();