const phone='919572283857';

/* Menu data from the restaurant's menu photos (Google Maps).
   Item format: [name, fullPrice, halfPrice (optional), note (optional)]
   Veg / non-veg dot is worked out automatically from the item name. */
const sections=[
{key:'biryani',label:'Biryani',sub:'Biryani Lovers',items:[
 ['Chicken Dum Biryani',200],
 ['Chicken Leg Dum Biryani',260],
 ['Special Chicken Dum Biryani',320],
 ['Mutton Dum Biryani',280],
 ['Special Mutton Dum Biryani',375],
 ['Egg Biryani',180],
 ['Veg Biryani',180],
 ['Paneer Biryani',200],
 ['Special Veg Biryani',230],
 ['Special Paneer Biryani',250],
 ['Steam Rice',70],
 ['Jeera Rice',100],
 ['Veg Pulao',180],
 ['Special Dry Fruit Pulao',225]
]},
{key:'nvcurry',label:'Non-Veg Curry',sub:'Indian Curry Non-Veg',items:[
 ['Chicken Butter Masala',360,220],
 ['Chicken Masala',360,220],
 ['Chicken Kadahi',360,220],
 ['Chicken Do Pyaza',360,220],
 ['Chicken Korma',360,220],
 ['Chicken Dehati',360,220],
 ['Chicken Curry',360,220],
 ['Chicken Bhartha',360,220],
 ['Chicken Lababdar',400,250],
 ['Chicken Handi',400,250],
 ['Chicken Tikka Masala',450,300],
 ['Tandoori Chicken Masala',600,400],
 ['Mutton Dehati',380,220],
 ['Mutton Korma',380,220],
 ['Mutton Curry',380,220],
 ['Egg Curry',120],
 ['Egg Do Pyaza',150],
 ['Omelette Curry',150]
]},
{key:'vcurry',label:'Veg Curry',sub:'Indian Curry Veg',items:[
 // VERIFY: veg curry prices come from an older menu photo (about 3 years old); Paneer Lababdar full price was blurry.
 ['Paneer Butter Masala',219,130],
 ['Paneer Do Pyaza',219,130],
 ['Paneer Kadhai',219,130],
 ['Mutter Paneer',219,130],
 ['Paneer Handi',250,160],
 ['Paneer Lababdar',250,160],
 ['Paneer Kolhapuri',250,160],
 ['Sahi Paneer',250,160],
 ['Paneer Dhaniya Adraki',250,160],
 ['Mushroom Masala',250,160],
 ['Mushroom Do Pyaza',250,160],
 ['Mushroom Kadhai',250,160],
 ['Mushroom Mutter',250,160],
 ['Paneer Tikka Masala',330,200],
 ['Malai Kofta',300,180],
 ['Veg Kofta',200,120],
 ['Aaloo Dum Kashmiri',160,100],
 ['Methi Mutter Malai',230,150],
 ['Mix Veg',160,120],
 ['Chana Dal Tadka',120,80]
]},
{key:'tandoor',label:'Tandoor & Breads',sub:'Koyle Ki Angaar Se',items:[
 ['Tandoori Roti (Plain)',10],
 ['Tandoori Roti (Butter)',15],
 ['Tawa Roti (Plain)',10],
 ['Tawa Roti (Butter)',15],
 ['Naan (Plain)',30],
 ['Naan (Butter)',35],
 ['Garlic Naan',60],
 ['Masala Kulcha',60],
 ['Paneer Kulcha',70],
 ['Laccha Paratha',35],
 ['Paneer Tikka',300],
 ['Mushroom Tikka',300],
 ['Chicken Tikka',350],
 ['Chicken Chatpata Tikka',380],
 ['Chicken Garlic Tikka',400],
 ['Chicken Malai Tikka',400],
 ['Chicken Boti Kabab',400],
 ['Chicken Reshmi Kabab',400],
 ['Chicken Tandoori',350],
 ['Zayka Special Chicken',400],
 ['Chicken Afghani',400]
]},
{key:'thali',label:'Thali',sub:'Thali',items:[
 ['Veg Deluxe Thali',149,null,'2 Tawa Roti / Tandoori Roti, Jeera Rice, Yellow Dal, Mutter Paneer, Salad'],
 ['Veg Premium Thali',199,null,'1 Butter Naan / Veg Pulao, Yellow Dal, Paneer Butter Masala, Mixed Veg, Green Salad, Boondi Raita, Roasted Papad'],
 ['Non-Veg Deluxe Thali',225,null,'2 Tawa Roti, Jeera Rice, Yellow Dal, Mutter Paneer, Chicken Curry (2 pc)'],
 ['Non-Veg Premium Thali',299,null,'1 Butter Naan / Veg Pulao, Yellow Dal, Paneer Butter Masala, Mixed Veg, Chicken Kadhai (2 pc), Boondi Raita, Green Salad']
]},
{key:'chinese',label:'China Garden',sub:'China Garden',items:[
 ['Paneer Chilly',230],
 ['Paneer Hot Garlic',260],
 ['Paneer Manchurian',260],
 ['Paneer Ginger',260],
 ['Paneer 65',260], // VERIFY: price was struck out / unclear in the photo
 ['Veg Manchurian',260],
 ['Mushroom Chilly',280], // VERIFY: check against the printed menu
 ['Mushroom Hot Garlic',220], // VERIFY: check against the printed menu
 ['Crispy Baby Corn',230],
 ['Chicken Chilli Boneless',230],
 ['Chicken Chilly With Bone',260],
 ['Chicken Hot Garlic',260],
 ['Chicken Manchurian',260],
 ['Chicken Lollipop',200]
]},
{key:'noodles',label:'Noodles & Rice',sub:'China Garden Noodles Rice',items:[
 ['Veg Chowmein',130],
 ['Paneer Chowmein',150],
 ['Mushroom Chowmein',150],
 ['Baby Corn Chowmein',150],
 ['Mixed Veg Chowmein',180],
 ['Chicken Chowmein',150],
 ['Egg Chowmein',150],
 ['Mixed Non-Veg Chowmein',180],
 ['Veg Fried Rice',140],
 ['Paneer Fried Rice',160],
 ['Mushroom Fried Rice',160],
 ['Baby Corn Fried Rice',160],
 ['Mixed Veg Fried Rice',180],
 ['Chicken Fried Rice',160],
 ['Egg Fried Rice',160],
 ['Mixed Non-Veg Fried Rice',180]
]},
{key:'roll',label:'Kolkata Rolls',sub:'Kolkata Kathi Rolls',items:[
 ['Veg Roll',70],
 ['Paneer Roll',80],
 ['Double Paneer Roll',100],
 ['Single Egg Roll',70],
 ['Double Egg Roll',80],
 ['Chicken Roll',80],
 ['Double Chicken Roll',100],
 ['Single Egg Paneer Roll',100],
 ['Double Egg Paneer Roll',120],
 ['Single Egg Chicken Roll',100],
 ['Double Egg Chicken Roll',120]
]},
{key:'munch',label:'Something to Munch',sub:'Something to Munch',items:[
 ['Veg Pakora',80,null,'6 pcs'],
 ['Paneer Pakora',140,null,'6 pcs'],
 ['Cheese Pakora',150,null,'6 pcs'],
 ['Egg Pakora',150,null,'6 pcs'],
 ['Chicken Pakora',160,null,'6 pcs'],
 ['Veg Cutlet',70,null,'2 pcs'],
 ['Paneer Cutlet',100,null,'2 pcs'],
 ['Chicken Cutlet',100,null,'2 pcs'],
 ['Chicken Egg Devil',120,null,'2 pcs']
]},
{key:'soup',label:'Soups',sub:'Soups',items:[
 ['Cream of Tomato Soup',110],
 ['Veg Hot N Sour Soup',110],
 ['Veg Sweet Corn Soup',110],
 ['Veg Manchow Soup',120],
 ['Lemon Coriander Soup',100],
 ['Chicken Hot N Sour Soup',130],
 ['Chicken Sweet Corn Soup',130],
 ['Chicken Manchow Soup',140]
]},
{key:'drinks',label:'Refreshment',sub:'Refreshment',items:[
 ['Cold Drinks',30],
 ['Masala Cold Drinks',50],
 ['Lemon Soda',50],
 ['Masala Soda',50],
 ['Coffee',50]
]},
{key:'sides',label:'Salad & Raita',sub:'Miscellaneous',items:[
 ['Green Salad',60],
 ['Onion Salad',40],
 ['Raita',30]
]}
];

const NONVEG=/chicken|mutton|egg|omelette|non[- ]?veg/i;
const items=[];
sections.forEach(s=>s.items.forEach(([name,price,half,desc])=>{
  items.push({id:items.length,cat:s.key,name,price,half:half==null?null:half,desc:desc||'',veg:!NONVEG.test(name)});
}));

let cart={};            // key "id-F" or "id-H" -> quantity
let filter='all';       // category key
let vegMode='all';      // all | veg | nv

const grid=document.getElementById('foodGrid');
const filtersEl=document.getElementById('filters');
filtersEl.innerHTML=`<button class="active" data-filter="all">All Items</button>`+sections.map(s=>`<button data-filter="${s.key}">${s.label}</button>`).join('');

function unitPrice(id,size){const d=items[id];return size==='H'?d.half:d.price}
function itemLabel(id,size){const d=items[id];return d.half!=null?`${d.name} (${size==='H'?'Half':'Full'})`:d.name}
function cartLines(){
  return Object.entries(cart).filter(x=>x[1]>0).map(([key,qty])=>{
    const [id,size]=key.split('-');
    return {key,qty,name:itemLabel(+id,size),price:unitPrice(+id,size)};
  });
}

function card(d){
  const rows=d.half!=null?[['F','Full',d.price],['H','Half',d.half]]:[['F','',d.price]];
  return `<article class="food-card"><div class="food-head"><span class="dot ${d.veg?'veg':'nv'}" title="${d.veg?'Veg':'Non-veg'}"></span><h3>${d.name}</h3></div>${d.desc?`<p>${d.desc}</p>`:''}<div class="food-sizes">${rows.map(([s,l,p])=>`<div class="size-row"><span>${l?l+' ':''}<b class="price">₹${p}</b></span><button class="add-btn" data-id="${d.id}" data-size="${s}">+ Add</button></div>`).join('')}</div></article>`;
}

function render(){
  const q=document.getElementById('search').value.trim().toLowerCase();
  let html='';
  sections.forEach(s=>{
    if(filter!=='all'&&s.key!==filter)return;
    const arr=items.filter(d=>d.cat===s.key&&d.name.toLowerCase().includes(q)&&(vegMode==='all'||(vegMode==='veg')===d.veg));
    if(!arr.length)return;
    html+=`<div class="menu-cat"><h3>${s.sub}</h3><span>${arr.length} items</span></div><div class="food-grid">${arr.map(card).join('')}</div>`;
  });
  grid.innerHTML=html||'<p class="no-items">No dishes found. Try another search or filter.</p>';
}

function addToCart(id,size){const k=id+'-'+size;cart[k]=(cart[k]||0)+1;updateCart()}

function updateCart(){
  const lines=cartLines();
  const count=lines.reduce((a,l)=>a+l.qty,0),total=lines.reduce((s,l)=>s+l.price*l.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartTotal').textContent='₹'+total;
  document.getElementById('modalTotal').textContent='₹'+total;
  document.getElementById('cartFab').classList.toggle('show',count>0);
  document.getElementById('cartItems').innerHTML=lines.map(l=>`<div class="cart-row"><span>${l.name}<br>₹${l.price} × ${l.qty}</span><span class="cart-right">₹${l.price*l.qty}<span class="qty"><button data-dec="${l.key}" aria-label="Decrease">−</button><button data-inc="${l.key}" aria-label="Increase">+</button></span><button data-remove="${l.key}">Remove</button></span></div>`).join('');
}

grid.addEventListener('click',e=>{const b=e.target.closest('.add-btn');if(b)addToCart(+b.dataset.id,b.dataset.size)});
document.getElementById('cartItems').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.inc)cart[b.dataset.inc]++;
  else if(b.dataset.dec){cart[b.dataset.dec]--;if(cart[b.dataset.dec]<=0)delete cart[b.dataset.dec]}
  else if(b.dataset.remove)delete cart[b.dataset.remove];
  else return;
  updateCart();
});
filtersEl.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;filter=b.dataset.filter;filtersEl.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));render()});
document.getElementById('vegToggle').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;vegMode=b.dataset.veg;document.querySelectorAll('#vegToggle button').forEach(x=>x.classList.toggle('active',x===b));render()});
document.getElementById('search').addEventListener('input',render);
document.getElementById('viewCart').onclick=()=>document.getElementById('cartModal').classList.add('open');
document.getElementById('closeCart').onclick=()=>document.getElementById('cartModal').classList.remove('open');
document.getElementById('cartModal').onclick=e=>{if(e.target.id==='cartModal')e.currentTarget.classList.remove('open')};
document.getElementById('checkout').onclick=()=>{
  const lines=cartLines();
  if(!lines.length)return;
  const total=lines.reduce((s,l)=>s+l.price*l.qty,0);
  const name=document.getElementById('customerName').value.trim()||'Not provided';
  const address=document.getElementById('customerAddress').value.trim()||'Not provided';
  const msg=`Hello Zayka Biryani! I would like to place an order:\n\n${lines.map(l=>`${l.name} x ${l.qty} = ₹${l.price*l.qty}`).join('\n')}\n\nEstimated total: ₹${total}\nName: ${name}\nAddress / pickup: ${address}\n\nPlease confirm availability, final prices and delivery charges.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank');
};
document.querySelector('.menu-toggle').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
render();
