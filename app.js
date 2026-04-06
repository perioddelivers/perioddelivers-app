'use strict';

/* =============================================
   PRODUCT DATA
   ============================================= */
const PRODUCTS = [
  { id:1,  name:'Ultra-Thin Organic Pads',       sub:'Regular flow · 20 ct',    category:'period',  cat_label:'Period Care', emoji:'🌸', price:8.99,  badge:'Best Seller', eta:'~35 min', desc:'100% certified organic cotton pads with superior absorption. Fragrance-free and dermatologist-tested for sensitive skin.', features:['Organic Cotton','Fragrance-Free','No Plastic Core','Breathable'] },
  { id:2,  name:'Overnight Pads with Wings',      sub:'Heavy flow · 14 ct',      category:'period',  cat_label:'Period Care', emoji:'🌙', price:10.49, badge:null,          eta:'~35 min', desc:'Extra-long coverage for full-night protection. Wings keep pad in place. 360° leak guard. Unscented and ultra-soft.', features:['Extra Long','Full Coverage','Stay-Put Wings','Leak Guard'] },
  { id:3,  name:'Organic Tampons Variety',        sub:'Reg/Super · 18 ct',       category:'period',  cat_label:'Period Care', emoji:'💜', price:9.99,  badge:'New',         eta:'~40 min', desc:'Plastic-free organic cotton tampons in a mixed pack. BPA-free and septic-safe with a smooth plastic-free applicator.', features:['Organic Cotton','Plastic-Free','BPA-Free','Septic Safe'] },
  { id:4,  name:'Menstrual Cup',                  sub:'Medical silicone · S/L',  category:'period',  cat_label:'Period Care', emoji:'♻️', price:24.99, badge:'Eco Choice',   eta:'~50 min', desc:'Reusable medical-grade silicone cup. Holds 3× more than a tampon. Lasts up to 10 years — zero waste.', features:['Reusable','Medical Grade','12hr Hold','Zero Waste'] },
  { id:5,  name:'Period Panties',                 sub:'Bikini style · XS–3XL',   category:'period',  cat_label:'Period Care', emoji:'👙', price:18.99, badge:null,          eta:'~45 min', desc:'4-layer leak-proof underwear. Absorbs up to 2 tampons worth. Machine washable.', features:['4-Layer Tech','Machine Wash','All Sizes','Super Soft'] },
  { id:6,  name:'Gentle Feminine Wash',           sub:'pH-balanced · 8 fl oz',   category:'intimate',cat_label:'Intimate Care',emoji:'🫧', price:11.99, badge:'Top Rated',    eta:'~35 min', desc:'pH-balanced daily intimate wash. Free from sulfates, parabens, and artificial fragrances. Maintains natural microbiome.', features:['pH-Balanced','Sulfate-Free','Derm. Tested','Daily Use'] },
  { id:7,  name:'Intimate Moisturizing Gel',      sub:'Hormone-free · 1.7 fl oz',category:'intimate',cat_label:'Intimate Care',emoji:'✨', price:16.99, badge:null,          eta:'~35 min', desc:'Natural intimate moisturizer with hyaluronic acid and aloe vera. Relieves dryness. Hormone-free, latex-safe.', features:['Hyaluronic Acid','Aloe Vera','Hormone-Free','Latex Safe'] },
  { id:8,  name:'Probiotic Feminine Capsules',    sub:'Vaginal health · 30 caps', category:'wellness',cat_label:'Wellness',    emoji:'🌿', price:22.99, badge:'Dr. Rec.',      eta:'~55 min', desc:'10 billion CFU lactobacillus blend for vaginal and urinary tract health. Shelf stable, no refrigeration needed.', features:['10B CFU','Clinically Studied','Vaginal Health','UTI Support'] },
  { id:9,  name:'Iron & Folate Supplement',       sub:"Women's formula · 60 caps",category:'wellness',cat_label:'Wellness',    emoji:'💊', price:19.99, badge:null,          eta:'~55 min', desc:"Women's iron supplement with folate, B12, and vitamin C. Gentle on the stomach. Ideal for cycle recovery.", features:['Iron + Folate','Vitamin C','Gentle Formula','B12 Added'] },
  { id:10, name:'Cramp Relief Heat Patches',      sub:'8-hour heat · 5 patches',  category:'wellness',cat_label:'Wellness',    emoji:'🌡️',price:13.99, badge:'Popular',       eta:'~40 min', desc:'Air-activated heat patches worn on clothing. 8 hours of gentle warmth for menstrual cramp relief. No batteries.', features:['8-Hour Heat','Adhesive Back','Discreet','Air-Activated'] },
  { id:11, name:'Natural Deodorant Spray',        sub:'Lavender & Sage · 3.4 oz', category:'hygiene', cat_label:'Hygiene',     emoji:'🌾', price:12.49, badge:null,          eta:'~35 min', desc:'Aluminum-free deodorant with baking soda and magnesium. 24-hour freshness. Subtle lavender + sage scent.', features:['Aluminum-Free','24hr Fresh','Natural Scent','Sensitive Skin'] },
  { id:12, name:'Hydrating Body Oil',             sub:'Rose & Argan · 4 fl oz',   category:'skincare',cat_label:'Skincare',    emoji:'🌹', price:21.99, badge:'Luxury',       eta:'~45 min', desc:'Lightweight argan, jojoba, and rosehip blend. Absorbs quickly, no greasy residue. Leaves skin silky smooth.', features:['Argan Oil','Rosehip','Non-Greasy','Fast Absorb'] },
  { id:13, name:'Brightening Vitamin C Serum',   sub:'15% Ascorbic · 1 fl oz',   category:'skincare',cat_label:'Skincare',    emoji:'🍊', price:28.99, badge:'Fan Fave',      eta:'~45 min', desc:'15% vitamin C serum with ferulic acid and vitamin E. Fades dark spots, evens tone, boosts collagen.', features:['15% Vit C','Ferulic Acid','Brightening','Anti-Aging'] },
  { id:14, name:'Ingrown Hair Serum',             sub:'Bikini + body · 2 fl oz',  category:'skincare',cat_label:'Skincare',    emoji:'🧴', price:15.99, badge:null,          eta:'~45 min', desc:'Salicylic acid serum to target and prevent ingrown hairs in sensitive areas. Aloe and centella asiatica soothe skin.', features:['Salicylic Acid','Aloe Vera','Centella','All Skin Types'] },
  { id:15, name:'Intimate Wipes Travel Pack',     sub:'Fragrance-free · 30 ct',   category:'hygiene', cat_label:'Hygiene',     emoji:'🧻', price:7.99,  badge:null,          eta:'~30 min', desc:'Individually wrapped flushable wipes. pH-balanced for intimate use. Perfect for on-the-go. Alcohol & paraben-free.', features:['Flushable','pH-Balanced','Travel Size','No Alcohol'] },
  { id:16, name:'Hormone Balance Tea',            sub:'Raspberry leaf · 20 bags', category:'wellness',cat_label:'Wellness',    emoji:'🍵', price:14.99, badge:'Natural',       eta:'~50 min', desc:'Herbal blend with red raspberry leaf, vitex, and spearmint. Supports hormonal balance and eases PMS symptoms.', features:['Raspberry Leaf','Vitex Berry','Spearmint','Caffeine-Free'] },
];

const CATEGORIES = [
  { id:'all',      label:'All',         icon:'✦' },
  { id:'period',   label:'Period Care', icon:'🌸' },
  { id:'intimate', label:'Intimate',    icon:'🫧' },
  { id:'wellness', label:'Wellness',    icon:'🌿' },
  { id:'skincare', label:'Skincare',    icon:'🌹' },
  { id:'hygiene',  label:'Hygiene',     icon:'🧴' },
];

const PLANS = {
  starter:   { name:'Starter',   price:19.99, slots:5  },
  essential: { name:'Essential', price:34.99, slots:10 },
  royal:     { name:'Royal',     price:54.99, slots:15 },
};

/* =============================================
   VERSION CONTENT MAPS
   ============================================= */
const CONTENT = {
  teen: {
    heroTagline:         'period, pooh. we got you. \u{1F451}',
    heroSub:             "get what you need, when you need it. no judgment \u2014 periodt.",
    heroOrderNowText:    'Shop Now',
    heroCarePackageText: 'Get My Box',
    card1Title:          'Get It Now',
    card1Desc:           'Delivered to your door in under an hour. Like DoorDash but for your care \u2014 periodt.',
    card2Title:          'My Monthly for My Monthly',
    card2Desc:           'Pick your plan, choose your faves, and get your care package every month. period, pooh \u2728',
    howTitle:            'how it works \u{1F451}',
    step1Name:           'Browse & Pick',
    step1Desc:           'Shop our full menu \u2014 period care, intimate wellness, skincare & more. Whatever you need.',
    step2Name:           'Order Placed',
    step2Desc:           'We link up with our supplier partners and get your order moving. Periodt.',
    step3Name:           'At Your Door',
    step3Desc:           '30\u201360 mins for on-demand, or on your date for your monthly box. No stress \u2014 period, pooh.',
    trustBadges:         ['\ud83d\udd12 Discreet AF', '\u26a1 Under 1 Hour', '\ud83c\udf3f Natural Only', '\u21a9\ufe0f Easy Returns', '\ud83d\udc51 Supplier Direct'],
    subEyebrow:          'Monthly Drop',
    subTitle:            'my monthly<br><span>for my monthly.</span>',
    subSub:              "pick what you want, choose your plan, get it every month. period, pooh \u2014 we got you.",
    plansLabel:          'step 1 \u2014 pick your plan',
    pickerTitle:         'step 2 \u2014 build your box',
  },
  adult: {
    heroTagline:         'Your care. Your schedule.',
    heroSub:             'On-demand delivery in under an hour, or a monthly care package built around your routine.',
    heroOrderNowText:    'Order Now',
    heroCarePackageText: 'Care Package',
    card1Title:          'Order Now',
    card1Desc:           'Get feminine care products delivered to your door in under an hour \u2014 fast, discreet, and reliable when you need it.',
    card2Title:          'Care Package',
    card2Desc:           'A monthly subscription built around you. Choose your plan, select your products, and we handle the rest.',
    howTitle:            'How It Works',
    step1Name:           'Browse & Select',
    step1Desc:           'Shop our curated catalog \u2014 period care, intimate wellness, skincare, hygiene, and more.',
    step2Name:           'Place Your Order',
    step2Desc:           'We connect with our supplier partners and arrange fast delivery directly to you.',
    step3Name:           'Delivered to You',
    step3Desc:           '30\u201360 minutes for on-demand orders, or on your chosen delivery date for Care Packages.',
    trustBadges:         ['\ud83d\udd12 Secure & Discreet', '\u26a1 Under 1 Hour', '\ud83c\udf3f Natural Products', '\u21a9\ufe0f Easy Returns', '\ud83d\udc51 Supplier Direct'],
    subEyebrow:          'Monthly Subscription',
    subTitle:            'Your personal<br><span>care package.</span>',
    subSub:              'Pick a plan, choose what goes inside, and receive it every month \u2014 on your schedule.',
    plansLabel:          'Step 1 \u2014 Choose Your Plan',
    pickerTitle:         'Step 2 \u2014 Build Your Box',
  }
};

const CAT_GRADIENTS = {
  period:   'linear-gradient(135deg,#1A0D2E,#3D1A6E)',
  intimate: 'linear-gradient(135deg,#0D1020,#1F1050)',
  wellness: 'linear-gradient(135deg,#0D150A,#1A3020)',
  skincare: 'linear-gradient(135deg,#1A1205,#3D2A08)',
  hygiene:  'linear-gradient(135deg,#0A1020,#102040)',
};

/* =============================================
   STATE
   ============================================= */
let state = {
  view:            'home',
  version:         null,       // 'teen' | 'adult'
  cart:            {},          // { id: qty }
  careBox:         {},          // { id: qty } for subscription
  activeCategory:  'all',
  searchQuery:     '',
  openProduct:     null,
  selectedPlan:    null,
  deliveryAddress: '',
};

/* =============================================
   UTILITIES
   ============================================= */
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const fmt = p => '$' + p.toFixed(2);

function cartCount()  { return Object.values(state.cart).reduce((s,v) => s+v, 0); }
function cartTotal()  { return Object.entries(state.cart).reduce((s,[id,q]) => { const p=PRODUCTS.find(p=>p.id===+id); return s+(p?p.price*q:0); }, 0); }
function careBoxCount(){ return Object.values(state.careBox).reduce((s,v) => s+v, 0); }

function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* =============================================
   VERSION MANAGEMENT
   ============================================= */
function applyVersionContent(version) {
  const c = CONTENT[version];
  if (!c) return;

  // Hero
  if ($('heroTagline'))         $('heroTagline').textContent         = c.heroTagline;
  if ($('heroSub'))             $('heroSub').textContent             = c.heroSub;
  if ($('heroOrderNowText'))    $('heroOrderNowText').textContent    = c.heroOrderNowText;
  if ($('heroCarePackageText')) $('heroCarePackageText').textContent = c.heroCarePackageText;

  // Mode cards
  if ($('card1Title')) $('card1Title').textContent = c.card1Title;
  if ($('card1Desc'))  $('card1Desc').textContent  = c.card1Desc;
  if ($('card2Title')) $('card2Title').textContent = c.card2Title;
  if ($('card2Desc'))  $('card2Desc').textContent  = c.card2Desc;

  // How it works
  if ($('howTitle'))  $('howTitle').textContent  = c.howTitle;
  if ($('step1Name')) $('step1Name').textContent = c.step1Name;
  if ($('step1Desc')) $('step1Desc').textContent = c.step1Desc;
  if ($('step2Name')) $('step2Name').textContent = c.step2Name;
  if ($('step2Desc')) $('step2Desc').textContent = c.step2Desc;
  if ($('step3Name')) $('step3Name').textContent = c.step3Name;
  if ($('step3Desc')) $('step3Desc').textContent = c.step3Desc;

  // Trust badges
  const strip = $('trustStrip');
  if (strip) strip.innerHTML = c.trustBadges.map(b => `<div class="trust-badge" role="listitem">${b}</div>`).join('');

  // Subscribe section
  if ($('subEyebrow'))  $('subEyebrow').textContent  = c.subEyebrow;
  if ($('subTitle'))    $('subTitle').innerHTML       = c.subTitle;
  if ($('subSub'))      $('subSub').textContent       = c.subSub;
  if ($('plansLabel'))  $('plansLabel').textContent   = c.plansLabel;
  if ($('pickerTitle')) $('pickerTitle').textContent  = c.pickerTitle;
}

function setVersionCookie(v) {
  document.cookie = 'period_version=' + v + ';max-age=31536000;path=/;SameSite=Lax';
}
function getVersionCookie() {
  var m = document.cookie.match(/period_version=([^;]+)/);
  return m ? m[1] : null;
}

function setVersion(version) {
  state.version = version;
  setVersionCookie(version);
  document.documentElement.setAttribute('data-version', version);
  applyVersionContent(version);
}

function showVersionPicker() {
  const picker = $('versionPicker');
  if (!picker) return;
  picker.style.display    = 'flex';
  picker.style.opacity    = '1';
  picker.style.transition = 'none';
  document.body.style.overflow = 'hidden';
}

function dismissVersionPicker() {
  const picker = $('versionPicker');
  if (!picker) return;
  picker.style.transition = 'opacity 450ms ease';
  picker.style.opacity    = '0';
  setTimeout(() => {
    picker.style.display = 'none';
    document.body.style.overflow = '';
  }, 450);
}

function initVersion() {
  const stored = getVersionCookie();
  if (stored === 'teen' || stored === 'adult') {
    setVersion(stored);
    // Head script already set data-version, CSS hides picker — force display:none as backup
    const picker = $('versionPicker');
    if (picker) picker.style.display = 'none';
  } else {
    // First visit — show the picker
    document.body.style.overflow = 'hidden';
  }

  const pickTeen  = $('pickTeen');
  const pickAdult = $('pickAdult');
  const switchBtn = $('switchModeBtn');

  if (pickTeen)  pickTeen.addEventListener('click',  () => { setVersion('teen');  dismissVersionPicker(); });
  if (pickAdult) pickAdult.addEventListener('click', () => { setVersion('adult'); dismissVersionPicker(); });
  if (switchBtn) switchBtn.addEventListener('click', showVersionPicker);
}

/* =============================================
   NAVIGATION
   ============================================= */
function navigate(view) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $(`${view}View`).classList.add('active');
  state.view = view;
  window.scrollTo({ top:0, behavior:'instant' });

  if (view === 'shop') {
    renderCategories();
    renderProductGrid();
  }
  if (view === 'subscribe') {
    renderPlanCards();
  }
}

/* =============================================
   THEME TOGGLE
   ============================================= */
function initTheme() {
  const root   = document.documentElement;
  const toggle = $('themeToggle');
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  setIcon(toggle, dark);
  toggle.addEventListener('click', () => {
    dark = !dark;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    setIcon(toggle, dark);
  });
}

function setIcon(btn, dark) {
  btn.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' mode');
  btn.innerHTML = dark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

/* =============================================
   SHOP — Categories & Products
   ============================================= */
function filteredProducts() {
  return PRODUCTS.filter(p => {
    const catOk = state.activeCategory === 'all' || p.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const srchOk = !q || p.name.toLowerCase().includes(q) || p.cat_label.toLowerCase().includes(q) || p.features.some(f => f.toLowerCase().includes(q));
    return catOk && srchOk;
  });
}

function renderCategories() {
  const bar = $('filterPills');
  bar.innerHTML = CATEGORIES.map(c => `
    <button class="pill ${state.activeCategory === c.id ? 'active':''}" data-cat="${c.id}" role="listitem">
      <span aria-hidden="true">${c.icon}</span> ${c.label}
    </button>`).join('');
  bar.querySelectorAll('.pill').forEach(p => {
    p.addEventListener('click', () => {
      state.activeCategory = p.dataset.cat;
      renderCategories(); renderProductGrid();
    });
  });
}

function renderProductGrid() {
  const grid  = $('productGrid');
  const count = $('productCount');
  const prods = filteredProducts();
  count.textContent = prods.length + ' item' + (prods.length !== 1 ? 's' : '');

  if (!prods.length) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">No products found</div><div class="empty-sub">Try a different search or category</div></div>`;
    return;
  }

  grid.innerHTML = prods.map(p => {
    const inCart = state.cart[p.id] > 0;
    return `
      <div class="product-card" data-id="${p.id}" role="listitem button" tabindex="0" aria-label="View ${p.name}">
        <div class="product-img" data-cat="${p.category}">
          <span aria-hidden="true">${p.emoji}</span>
          ${p.badge ? `<span class="product-img-badge">${p.badge}</span>` : ''}
          <span class="product-eta" aria-label="Estimated delivery ${p.eta}">🛵 ${p.eta}</span>
        </div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-sub">${p.sub}</div>
          <div class="product-footer">
            <div class="product-price">${fmt(p.price)}</div>
            <button class="add-btn ${inCart?'in-cart':''}" data-add="${p.id}" aria-label="${inCart?'Added':'Add to cart'}">
              ${inCart
                ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
                : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => { if (e.target.closest('[data-add]')) return; openProductModal(+card.dataset.id); });
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openProductModal(+card.dataset.id); });
  });
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); addToCart(+btn.dataset.add); });
  });
}

/* =============================================
   CART
   ============================================= */
function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  const p = PRODUCTS.find(p => p.id === id);
  showToast('Added ' + p.name.split(' ').slice(0,3).join(' '));
  updateCartBadge();
  renderProductGrid();
  renderCart();
  if (state.openProduct === id) updateModalBtn();
}

function updateCartBadge() {
  const b = $('cartBadge'), c = cartCount();
  b.textContent = c;
  b.classList.toggle('visible', c > 0);
}

function renderCart() {
  const body  = $('cartBody');
  const items = Object.entries(state.cart).filter(([,q]) => q > 0);

  if (!items.length) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛍️</div><div class="cart-empty-text">Your cart is empty.<br>Browse products and add items to get started.</div></div>`;
  } else {
    body.innerHTML = items.map(([id,qty]) => {
      const p = PRODUCTS.find(p => p.id === +id);
      return `
        <div class="cart-item">
          <div class="cart-item-img" style="background:${CAT_GRADIENTS[p.category]}">${p.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${fmt(p.price)}</div>
          </div>
          <div class="cart-qty">
            <button class="qty-btn" data-dec="${p.id}" aria-label="Decrease">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" data-inc="${p.id}" aria-label="Increase">+</button>
          </div>
        </div>`;
    }).join('');

    body.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => {
      state.cart[b.dataset.inc] = (state.cart[b.dataset.inc]||0) + 1;
      renderCart(); updateCartBadge();
    }));
    body.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.dec;
      state.cart[id] = Math.max(0, (state.cart[id]||0) - 1);
      if (!state.cart[id]) delete state.cart[id];
      renderCart(); updateCartBadge(); renderProductGrid();
      if (state.openProduct) updateModalBtn();
    }));
  }

  $('cartTotal').textContent = fmt(cartTotal());
  $('cartItemCount').textContent = cartCount() + ' item' + (cartCount()!==1?'s':'');
}

function openCart()  { $('cartSidebar').classList.add('open'); $('cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; renderCart(); }
function closeCart() { $('cartSidebar').classList.remove('open'); $('cartOverlay').classList.remove('open'); document.body.style.overflow=''; }

/* =============================================
   PRODUCT MODAL
   ============================================= */
function openProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  state.openProduct = id;

  $('modalHero').style.background = CAT_GRADIENTS[p.category];
  $('modalHeroEmoji').textContent  = p.emoji;
  $('modalCatTag').textContent     = p.cat_label;
  $('modalTitle').textContent      = p.name;
  $('modalSub').textContent        = p.sub;
  $('modalDesc').textContent       = p.desc;
  $('modalPrice').textContent      = fmt(p.price);
  $('modalFeatures').innerHTML     = p.features.map(f => `<span class="feature-tag">${f}</span>`).join('');
  updateModalBtn();

  $('productModal').classList.add('open');
  $('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateModalBtn() {
  const id = state.openProduct;
  const inCart = state.cart[id] > 0;
  const btn = $('modalAddBtn');
  if (!btn) return;
  btn.className = 'modal-add-btn' + (inCart ? ' in-cart' : '');
  btn.innerHTML = inCart
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> In Cart`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Add to Cart`;
}

function closeModal() {
  $('productModal').classList.remove('open');
  $('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  state.openProduct = null;
}

/* =============================================
   SUBSCRIBE — Plans
   ============================================= */
function renderPlanCards() {
  $$('.plan-card').forEach(card => {
    const id = card.dataset.plan;
    card.classList.toggle('selected', state.selectedPlan === id);

    // Remove old listener by cloning
    const clone = card.cloneNode(true);
    card.parentNode.replaceChild(clone, card);
    clone.addEventListener('click',  () => selectPlan(id));
    clone.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') selectPlan(id); });
  });
}

function selectPlan(id) {
  state.selectedPlan = id;
  state.careBox = {};      // reset selections on plan change

  // Update UI
  $$('.plan-card').forEach(c => {
    const selected = c.dataset.plan === id;
    c.classList.toggle('selected', selected);
    c.setAttribute('aria-checked', selected ? 'true' : 'false');
  });

  const plan = PLANS[id];
  $('pickerSection').style.display  = 'block';
  $('subscribeCta').style.display   = 'block';
  $('subscribeSummaryText').textContent = `${plan.name} plan — pick ${plan.slots} items`;
  $('subscribeSummaryPrice').textContent = fmt(plan.price);
  $('subscribeBtnPrice').textContent = fmt(plan.price);
  updateSubscribeBtn();
  renderPickerGrid();
}

function renderPickerGrid() {
  const plan  = PLANS[state.selectedPlan];
  const used  = careBoxCount();
  const slots = plan ? plan.slots : 0;

  $('pickerSlots').textContent = `${used} / ${slots} selected`;
  $('pickerSlots').classList.toggle('full', used >= slots);

  $('pickerGrid').innerHTML = PRODUCTS.map(p => {
    const selected = state.careBox[p.id] > 0;
    const full     = !selected && used >= slots;
    return `
      <div class="picker-card ${selected?'selected':''} ${full?'disabled':''}"
           data-pick="${p.id}" role="listitem" tabindex="${full?-1:0}"
           aria-label="${selected?'Remove':'Add'} ${p.name}" aria-pressed="${selected}">
        <div class="picker-check" aria-hidden="true">✓</div>
        <div class="picker-img" data-cat="${p.category}" style="background:${CAT_GRADIENTS[p.category]}">
          <span aria-hidden="true">${p.emoji}</span>
        </div>
        <div class="picker-body">
          <div class="picker-name">${p.name}</div>
          <div class="picker-price">${fmt(p.price)}</div>
        </div>
      </div>`;
  }).join('');

  $$('[data-pick]').forEach(card => {
    card.addEventListener('click', () => toggleCareItem(+card.dataset.pick));
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') toggleCareItem(+card.dataset.pick); });
  });
}

function toggleCareItem(id) {
  const plan  = PLANS[state.selectedPlan];
  if (!plan) return;
  const isIn  = state.careBox[id] > 0;
  const count = careBoxCount();

  if (isIn) {
    delete state.careBox[id];
  } else {
    if (count >= plan.slots) { showToast(`Your ${plan.name} plan holds ${plan.slots} items`); return; }
    state.careBox[id] = 1;
  }
  renderPickerGrid();
  updateSubscribeBtn();
}

function updateSubscribeBtn() {
  const plan  = PLANS[state.selectedPlan];
  const used  = careBoxCount();
  const slots = plan ? plan.slots : 0;
  const btn   = $('subscribeBtn');
  btn.disabled = !plan || used === 0;
  $('subscribeSummaryText').textContent = plan
    ? `${plan.name} · ${used}/${slots} items chosen`
    : 'Select a plan to get started';
}

/* =============================================
   CHECKOUT / ORDER
   ============================================= */
function placeOrder() {
  // Clear cart and show success
  state.cart = {};
  updateCartBadge();
  renderCart();
  renderProductGrid();
  closeCart();

  $('orderSuccess').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function confirmSubscribe() {
  const plan = PLANS[state.selectedPlan];
  if (!plan) return;
  $('subscribeSuccessEta').textContent = `👑 ${plan.name} Plan — ${fmt(plan.price)}/month`;
  $('subscribeSuccessSub').textContent = `Your first ${plan.name} care package (${careBoxCount()} items) ships within 3–5 business days. You'll receive a confirmation shortly.`;

  state.careBox = {};
  state.selectedPlan = null;
  $('subscribeSuccess').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* =============================================
   ADDRESS MODAL
   ============================================= */
function openAddressModal() {
  $('addressOverlay').classList.add('open');
  $('addressModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('addressInput').focus(), 200);
}
function closeAddressModal() {
  $('addressOverlay').classList.remove('open');
  $('addressModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   PWA
   ============================================= */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

/* =============================================
   INIT — Wire all events
   ============================================= */
function init() {
  initVersion();
  initTheme();
  registerSW();

  // Home navigation
  $('homeLogo')      .addEventListener('click', () => navigate('home'));
  $('heroOrderNow')  .addEventListener('click', () => navigate('shop'));
  $('heroCarePackage').addEventListener('click', () => navigate('subscribe'));
  $('cardOrderNow')  .addEventListener('click', () => navigate('shop'));
  $('cardCarePackage').addEventListener('click', () => navigate('subscribe'));

  // Back buttons
  $('shopBack')      .addEventListener('click', () => navigate('home'));
  $('subscribeBack') .addEventListener('click', () => navigate('home'));

  // Cart
  $('cartBtn')       .addEventListener('click', openCart);
  $('cartClose')     .addEventListener('click', closeCart);
  $('cartOverlay')   .addEventListener('click', closeCart);
  $('checkoutBtn')   .addEventListener('click', placeOrder);

  // Product modal
  $('modalOverlay')  .addEventListener('click', closeModal);
  $('modalClose')    .addEventListener('click', closeModal);
  $('modalAddBtn')   .addEventListener('click', () => { if (state.openProduct) addToCart(state.openProduct); });

  // Order success
  $('orderSuccessClose').addEventListener('click', () => {
    $('orderSuccess').classList.remove('open');
    document.body.style.overflow = '';
    navigate('home');
  });

  // Subscribe
  $('subscribeBtn').addEventListener('click', confirmSubscribe);
  $('subscribeSuccessClose').addEventListener('click', () => {
    $('subscribeSuccess').classList.remove('open');
    document.body.style.overflow = '';
    navigate('home');
  });

  // Address modal
  $('addressPill').addEventListener('click', openAddressModal);
  $('addressOverlay').addEventListener('click', closeAddressModal);
  $('addressSave').addEventListener('click', () => {
    const val = $('addressInput').value.trim();
    if (val) {
      state.deliveryAddress = val;
      $('addressPill').innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ${val.split(',')[0]}`;
      showToast('Address saved');
    }
    closeAddressModal();
  });

  // Search
  const searchInput = $('searchInput');
  let debounce;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.searchQuery = searchInput.value.trim();
      renderProductGrid();
    }, 200);
  });

  // Keyboard ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeAddressModal(); }
  });

  // Initial cart render
  renderCart();
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', init);
