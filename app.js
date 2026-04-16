'use strict';


/* =============================================
   PRODUCT DATA
   ============================================= */
const PRODUCTS = [
  { id:1,  name:'Ultra-Thin Organic Pads',       sub:'Regular flow · 20 ct',    category:'period',  cat_label:'Period Care', emoji:'🌸', price:8.99,  badge:'Best Seller', eta:'1–3 days', desc:'100% certified organic cotton pads with superior absorption. Fragrance-free and dermatologist-tested for sensitive skin.', features:['Organic Cotton','Fragrance-Free','No Plastic Core','Breathable'] },
  { id:2,  name:'Overnight Pads with Wings',      sub:'Heavy flow · 14 ct',      category:'period',  cat_label:'Period Care', emoji:'🌙', price:10.49, badge:null,          eta:'1–3 days', desc:'Extra-long coverage for full-night protection. Wings keep pad in place. 360° leak guard. Unscented and ultra-soft.', features:['Extra Long','Full Coverage','Stay-Put Wings','Leak Guard'] },
  { id:3,  name:'Organic Tampons Variety',        sub:'Reg/Super · 18 ct',       category:'period',  cat_label:'Period Care', emoji:'💜', price:9.99,  badge:'New',         eta:'1–3 days', desc:'Plastic-free organic cotton tampons in a mixed pack. BPA-free and septic-safe with a smooth plastic-free applicator.', features:['Organic Cotton','Plastic-Free','BPA-Free','Septic Safe'] },
  { id:4,  name:'Menstrual Cup',                  sub:'Medical silicone · S/L',  category:'period',  cat_label:'Period Care', emoji:'♻️', price:24.99, badge:'Eco Choice',   eta:'1–3 days', desc:'Reusable medical-grade silicone cup. Holds 3× more than a tampon. Lasts up to 10 years — zero waste.', features:['Reusable','Medical Grade','12hr Hold','Zero Waste'] },
  { id:5,  name:'Period Panties',                 sub:'Bikini style · XS–3XL',   category:'period',  cat_label:'Period Care', emoji:'👙', price:18.99, badge:null,          eta:'1–3 days', desc:'4-layer leak-proof underwear. Absorbs up to 2 tampons worth. Machine washable.', features:['4-Layer Tech','Machine Wash','All Sizes','Super Soft'] },
  { id:6,  name:'Gentle Feminine Wash',           sub:'pH-balanced · 8 fl oz',   category:'intimate',cat_label:'Intimate Care',emoji:'🫧', price:11.99, badge:'Top Rated',    eta:'1–3 days', desc:'pH-balanced daily intimate wash. Free from sulfates, parabens, and artificial fragrances. Maintains natural microbiome.', features:['pH-Balanced','Sulfate-Free','Derm. Tested','Daily Use'] },
  { id:7,  name:'Intimate Moisturizing Gel',      sub:'Hormone-free · 1.7 fl oz',category:'intimate',cat_label:'Intimate Care',emoji:'✨', price:16.99, badge:null,          eta:'1–3 days', desc:'Natural intimate moisturizer with hyaluronic acid and aloe vera. Relieves dryness. Hormone-free, latex-safe.', features:['Hyaluronic Acid','Aloe Vera','Hormone-Free','Latex Safe'] },
  { id:8,  name:'Probiotic Feminine Capsules',    sub:'Vaginal health · 30 caps', category:'wellness',cat_label:'Wellness',    emoji:'🌿', price:22.99, badge:'Dr. Rec.',      eta:'1–3 days', desc:'10 billion CFU lactobacillus blend for vaginal and urinary tract health. Shelf stable, no refrigeration needed.', features:['10B CFU','Clinically Studied','Vaginal Health','UTI Support'] },
  { id:9,  name:'Iron & Folate Supplement',       sub:"Women's formula · 60 caps",category:'wellness',cat_label:'Wellness',    emoji:'💊', price:19.99, badge:null,          eta:'1–3 days', desc:"Women's iron supplement with folate, B12, and vitamin C. Gentle on the stomach. Ideal for cycle recovery.", features:['Iron + Folate','Vitamin C','Gentle Formula','B12 Added'] },
  { id:10, name:'Cramp Relief Heat Patches',      sub:'8-hour heat · 5 patches',  category:'wellness',cat_label:'Wellness',    emoji:'🌡️',price:13.99, badge:'Popular',       eta:'1–3 days', desc:'Air-activated heat patches worn on clothing. 8 hours of gentle warmth for menstrual cramp relief. No batteries.', features:['8-Hour Heat','Adhesive Back','Discreet','Air-Activated'] },
  { id:11, name:'Natural Deodorant Spray',        sub:'Lavender & Sage · 3.4 oz', category:'hygiene', cat_label:'Hygiene',     emoji:'🌾', price:12.49, badge:null,          eta:'1–3 days', desc:'Aluminum-free deodorant with baking soda and magnesium. 24-hour freshness. Subtle lavender + sage scent.', features:['Aluminum-Free','24hr Fresh','Natural Scent','Sensitive Skin'] },
  { id:12, name:'Hydrating Body Oil',             sub:'Rose & Argan · 4 fl oz',   category:'skincare',cat_label:'Skincare',    emoji:'🌹', price:21.99, badge:'Luxury',       eta:'1–3 days', desc:'Lightweight argan, jojoba, and rosehip blend. Absorbs quickly, no greasy residue. Leaves skin silky smooth.', features:['Argan Oil','Rosehip','Non-Greasy','Fast Absorb'] },
  { id:13, name:'Brightening Vitamin C Serum',   sub:'15% Ascorbic · 1 fl oz',   category:'skincare',cat_label:'Skincare',    emoji:'🍊', price:28.99, badge:'Fan Fave',      eta:'1–3 days', desc:'15% vitamin C serum with ferulic acid and vitamin E. Fades dark spots, evens tone, boosts collagen.', features:['15% Vit C','Ferulic Acid','Brightening','Anti-Aging'] },
  { id:14, name:'Ingrown Hair Serum',             sub:'Bikini + body · 2 fl oz',  category:'skincare',cat_label:'Skincare',    emoji:'🧴', price:15.99, badge:null,          eta:'1–3 days', desc:'Salicylic acid serum to target and prevent ingrown hairs in sensitive areas. Aloe and centella asiatica soothe skin.', features:['Salicylic Acid','Aloe Vera','Centella','All Skin Types'] },
  { id:15, name:'Intimate Wipes Travel Pack',     sub:'Fragrance-free · 30 ct',   category:'hygiene', cat_label:'Hygiene',     emoji:'🧻', price:7.99,  badge:null,          eta:'1–3 days', desc:'Individually wrapped flushable wipes. pH-balanced for intimate use. Perfect for on-the-go. Alcohol & paraben-free.', features:['Flushable','pH-Balanced','Travel Size','No Alcohol'] },
  { id:16, name:'Hormone Balance Tea',            sub:'Raspberry leaf · 20 bags', category:'wellness',cat_label:'Wellness',    emoji:'🍵', price:14.99, badge:'Natural',       eta:'1–3 days', desc:'Herbal blend with red raspberry leaf, vitex, and spearmint. Supports hormonal balance and eases PMS symptoms.', features:['Raspberry Leaf','Vitex Berry','Spearmint','Caffeine-Free'] },
  // --- Emergency Kit ---
  { id:17, name:'Emergency Period Kit',          sub:'Pads + liners + wipes',         category:'period',   cat_label:'Period Care',     emoji:'🚨', price:14.99, badge:'Fastest',   eta:'~20 min', desc:'Pre-packed emergency kit: organic pads (regular + overnight), pantiliners, and intimate wipes. Everything you need, right now. No thinking required.', features:['Ready to Go','Fast Delivery','Organic Pads','Wipes Included'] },
  // --- Undies & Bottoms ---
  { id:18, name:'Cotton Brief Essentials 5-Pack',sub:'XS–XL · soft & breathable',      category:'clothing', cat_label:'Undies & Bottoms',emoji:'🧥', price:12.99, badge:'Must Have', eta:'1–3 days', desc:'Ultra-soft 100% cotton briefs in a 5-pack. Perfect for emergencies or everyday comfort. Tagless waistband, full coverage. XS–XL.', features:['100% Cotton','Full Coverage','Tagless','5-Pack'] },
  { id:19, name:'High-Waist Cotton Briefs 3-Pack',sub:'XS–3XL · all sizes',            category:'clothing', cat_label:'Undies & Bottoms',emoji:'👙', price:18.99, badge:null,       eta:'1–3 days', desc:'High-rise waist for extra coverage and comfort. Buttery-soft cotton, wide waistband, perfect for period days or anytime you want something cozy.', features:['High-Waist','Extra Coverage','Wide Band','3-Pack'] },
  { id:20, name:'Cozy Lounge Leggings',          sub:'One size fits most',              category:'clothing', cat_label:'Undies & Bottoms',emoji:'👖', price:27.99, badge:null,       eta:'1–3 days', desc:'Ultra-soft brushed interior lounge leggings with a wide comfort waistband. Dark wash, no see-through, perfect for period days at home or on the go.', features:['Brushed Interior','Wide Band','Dark Wash','Full Length'] },
  { id:21, name:'Classic Biker Shorts',          sub:'High-waist · 5" inseam',             category:'clothing', cat_label:'Undies & Bottoms',emoji:'⚡',    price:22.99, badge:'Top Pick',   eta:'1–3 days', desc:'High-waist compression biker shorts. No ride-up, no chafing. Perfect under dresses or on their own. Double-layered for confidence.', features:['Compression','No Ride-Up','Double Layer','High Waist'] },
  // --- Sweets ---
  { id:22, name:'Dark Chocolate Assortment',     sub:'Sea salt & almond · 3.5 oz',         category:'candy',    cat_label:'Sweets',          emoji:'🍫', price:11.99, badge:'Fan Fave',   eta:'1–3 days', desc:'Rich 70% dark chocolate bark with sea salt and roasted almonds. Mood-lifting, antioxidant-rich, and honestly just delicious. Period approved.', features:['70% Dark Cocoa','Sea Salt','Antioxidants','Mood Boost'] },
  { id:23, name:'Gummy Candy Mix',               sub:'Sweet + sour · assorted',             category:'candy',    cat_label:'Sweets',          emoji:'🍮', price:8.99,  badge:null,       eta:'1–3 days', desc:'A satisfying mix of sweet and sour gummies — fruity bears, worms, peach rings, and more. The craving is real and we are not judging.', features:['Assorted Flavors','Sweet + Sour','Shareable','Resealable Bag'] },
  { id:24, name:'Salted Caramel Cocoa Kit',      sub:'2 cocoa packets + caramel',        category:'candy',    cat_label:'Sweets',          emoji:'☕',    price:13.99, badge:null,       eta:'1–3 days', desc:'Rich hot cocoa mix with a salted caramel drizzle pack. Just add hot water or milk. Cozy in a cup — perfect for period evenings on the couch.', features:['Rich Cocoa','Salted Caramel','Just Add Milk','2 Servings'] },
  // --- Cozy Picks ---
  { id:25, name:'Sheet Face Mask Set',           sub:'Hydrating + brightening · 5-pack',    category:'comfort',  cat_label:'Cozy Picks',      emoji:'🧖', price:15.99, badge:null,       eta:'1–3 days', desc:'5-pack K-beauty sheet masks: hyaluronic acid, vitamin C brightening, centella calming, collagen firming, and charcoal pore-cleanse.', features:['5 Variety Masks','K-Beauty','Single Use','All Skin Types'] },
  { id:26, name:'Cozy Fuzzy Socks 3-Pack',       sub:'Ultra-plush · one size',              category:'comfort',  cat_label:'Cozy Picks',      emoji:'🧦', price:13.99, badge:'So Cozy',   eta:'1–3 days', desc:'Thick cloud-soft fuzzy socks in 3 neutral shades. Non-slip sole, wide cuff, machine washable. You deserve the softest socks on your hardest days.', features:['Ultra-Plush','Non-Slip Sole','Machine Wash','3 Colors'] },
  { id:27, name:'Lavender Calm Roller',          sub:'Aromatherapy · 10 mL roller',         category:'comfort',  cat_label:'Cozy Picks',      emoji:'💜', price:14.99, badge:null,       eta:'1–3 days', desc:'Essential oil blend — lavender, chamomile and eucalyptus — in a ready-to-use roller ball. Apply to pulse points for calm and stress relief.', features:['Lavender + Chamomile','Roller Ball','Pulse Points','Calming Blend'] },
  // --- Holistic & Natural ---
  { id:28, name:'Reusable Menstrual Disc',         sub:'Medical silicone · one size',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🌀', price:29.99, badge:'Zero Waste',  eta:'1–3 days', desc:'Soft medical-grade silicone disc. Sits at the vaginal fornix — holds 4× more than a tampon. Reusable for years. Period sex safe.', features:['Medical Silicone','12-hr Wear','Reusable','Period-Sex Safe'] },
  { id:29, name:'Organic Cloth Pads Set',          sub:'Washable · 5-pack assorted',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🌿', price:34.99, badge:'Top Pick',    eta:'1–3 days', desc:'Soft organic cotton washable pads — regular, heavy, and night sizes. Snap-wing design, leak-proof inner layer. Lasts 3–5 years.', features:['100% Organic Cotton','Washable','5-Pack Mix','Snap Wing'] },
  { id:30, name:'CBD Period Relief Salve',         sub:'50mg broad-spectrum · 2 oz',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🫚', price:32.99, badge:'Natural',     eta:'1–3 days', desc:'Broad-spectrum CBD with arnica and clary sage in a beeswax base. Rub directly on the lower abdomen for targeted cramp and tension relief. Third-party tested.', features:['50mg CBD','Arnica','Clary Sage','3rd-Party Tested'] },
  { id:31, name:'Castor Oil Ritual Kit',           sub:'Cold-pressed + flannel pack',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🧴', price:26.99, badge:null,         eta:'1–3 days', desc:'Cold-pressed organic castor oil with a reusable flannel pack. Apply to abdomen with gentle heat to ease cramps and bloating. A beloved holistic ritual.', features:['Cold-Pressed','Organic','Reusable Pack','Anti-Bloat'] },
  { id:32, name:'Magnesium Body Lotion',           sub:'Period + PMS relief · 6 oz',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🌸', price:22.99, badge:'PMS Relief',   eta:'1–3 days', desc:'Transdermal magnesium glycinate lotion. Absorbed through the skin for fast cramp, bloat, and mood relief. Fragrance-free, paraben-free.', features:['Magnesium Glycinate','Transdermal','Fragrance-Free','Fast Absorption'] },
  { id:33, name:'Cramp Bark Herbal Tea',           sub:'Red raspberry leaf blend · 20 bags',  category:'holistic', cat_label:'Holistic & Natural', emoji:'🍵', price:16.99, badge:'Herbalist Pick',eta:'1–3 days', desc:'Potent blend of cramp bark, red raspberry leaf, ginger root, and passionflower. Targets uterine cramps and eases PMS tension naturally. Caffeine-free.', features:['Cramp Bark','Raspberry Leaf','Ginger','Caffeine-Free'] },
  { id:34, name:'Clary Sage Period Mist',          sub:'Aromatherapy · 4 oz spray',           category:'holistic', cat_label:'Holistic & Natural', emoji:'🌾', price:18.99, badge:null,         eta:'1–3 days', desc:'Pure clary sage, lavender, and geranium in distilled witch hazel. Mist over lower abdomen or pulse points to support hormonal calm and cycle flow.', features:['Clary Sage','Geranium','Witch Hazel','Hormone-Supportive'] },
  { id:35, name:'Natural Sea Sponge Tampon',       sub:'Ethically harvested · 2-pack',        category:'holistic', cat_label:'Holistic & Natural', emoji:'🧽', price:19.99, badge:'Plastic-Free', eta:'1–3 days', desc:'100% natural sea sponge — a traditional tampon alternative. Moistened and inserted like a tampon. Rinse, reuse, compost when done. Truly zero waste.', features:['100% Natural','Reusable','Compostable','Plastic-Free'] },
  { id:36, name:'Organic Period Underwear (2-pk)', sub:'Heavy flow · XS–3XL',                 category:'holistic', cat_label:'Holistic & Natural', emoji:'🌱', price:42.99, badge:'Best Seller',  eta:'1–3 days', desc:'GOTS-certified organic cotton period underwear — heavy flow capacity, no synthetic liners. Tagless, breathable, and kind to sensitive skin. 2-pack.', features:['GOTS Certified','Organic Cotton','Heavy Flow','All Sizes'] },
  { id:37, name:'Beeswax Cramp Relief Balm',       sub:'Lavender + clove · 1 oz tin',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🍯', price:15.99, badge:null,         eta:'1–3 days', desc:'Traditional beeswax salve with clove, lavender, and peppermint oil. Warm into skin for localized cramp and back pain relief. 100% natural ingredients.', features:['Beeswax Base','Clove + Clary Sage','Peppermint','100% Natural'] },
  { id:38, name:'Classic Comfort Bear',        sub:'Plush · Medium · 12"',          category:'cuddles', cat_label:'Cuddles', emoji:'🧸', price:19.99, badge:'New',        eta:'1–3 days', desc:'Ultra-soft minky plush bear — made for squeezing on hard days. Machine washable. The right size to actually hug.', features:['Ultra-Soft Minky','Machine Wash','Medium 12"','Perfect Hug'] },
  { id:39, name:'Microwavable Plush Bunny',    sub:'Lavender scented · Heatable',   category:'cuddles', cat_label:'Cuddles', emoji:'🐰', price:28.99, badge:'Fan Fave',   eta:'1–3 days', desc:'Cute plush bunny with a removable heat insert. Microwave for 90 seconds for gentle, soothing warmth. Lavender-scented filling for relaxation. Great for cramps.', features:['Microwavable','Lavender Scent','Soothing Heat','Washable Cover'] },
  { id:40, name:'Weighted Comfort Blanket',    sub:'5 lb · 48"x72" · Glass beads', category:'cuddles', cat_label:'Cuddles', emoji:'🛏', price:49.99, badge:null,          eta:'1–3 days', desc:'5-pound weighted blanket with glass bead filling. Gentle deep-pressure sensation eases anxiety and promotes calm. Soft minky top, cool cotton back.', features:['5 lb Weight','Glass Beads','Anxiety Relief','Minky + Cotton'] },
  { id:41, name:'Plush Sherpa Throw Blanket', sub:'50"x60" · Cloud-soft',           category:'cuddles', cat_label:'Cuddles', emoji:'🌥', price:34.99, badge:'Popular',     eta:'1–3 days', desc:'Incredibly soft double-sided throw — silky satin on one side, fluffy sherpa on the other. Built for period days on the couch. Machine washable.', features:['Double-Sided','Sherpa + Satin','Couch Perfect','Machine Wash'] },
  { id:42, name:'Mini Squishy Axolotl',        sub:'Squishy · 8" · Pastel pink',    category:'cuddles', cat_label:'Cuddles', emoji:'💗', price:14.99, badge:'Trending',    eta:'1–3 days', desc:'Adorable squishy axolotl in pastel pink. Super squishable and stress-relieving. The perfect desk or bedside buddy for hard days.', features:['Squishy Fill','Stress Relief','Pastel Pink','Desk Buddy'] },
  { id:43, name:'Comfort Care Gift Bundle',    sub:'Bear + blanket + cocoa kit',     category:'cuddles', cat_label:'Cuddles', emoji:'🎁', price:54.99, badge:'Gift Ready',  eta:'1–3 days', desc:'The ultimate comfort gift — a plush teddy bear, a mini sherpa throw, and our salted caramel cocoa kit, all in one gift box. Order it for yourself or send the love.', features:['Gift Boxed','3-Piece Set','Bear + Blanket + Cocoa','Same-Day Delivery'] },
  { id:44, name:'Cooling Towel & Mist Set',    emoji:'🧊', category:'cooldown', cat_label:'Cool Down', sub:'Instant relief for hot flashes', desc:'Instant-cooling towel + facial mist spray. Clinically tested to reduce skin temperature by up to 30°F. Perfect for night sweats and sudden heat surges.', price:16.99, eta:'1-3 days', badge:'New', features:['Instant cooling','Reusable towel','Travel-size mist','Dermatologist safe'] },
  { id:45, name:'Menthol Cooling Patches',      emoji:'💙', category:'cooldown', cat_label:'Cool Down', sub:'Wearable cooling relief',         desc:'Discreet adhesive patches infused with menthol and aloe. Wear on neck, wrists, or chest for up to 8 hours of cooling sensation. Drug-free and hormone-free.', price:14.99, eta:'1-3 days', badge:null,  features:['8hr cooling','Drug-free','Discreet wear','12 patches'] },
  { id:46, name:'Cooling Gel Eye Mask',         emoji:'😴', category:'cooldown', cat_label:'Cool Down', sub:'Cool relief for night sweats',     desc:'Refrigeratable gel mask that stays cold for 20+ minutes. Helps reduce facial flushing and heat during perimenopause night sweats. Reusable, latex-free.', price:12.99, eta:'1-3 days', badge:null,  features:['20min cold','Reusable','Latex-free','Adjustable strap'] },
  { id:47, name:'Cooling Bamboo Pillowcase Set',emoji:'🌿', category:'cooldown', cat_label:'Cool Down', sub:'Sleep cooler, sleep better',       desc:'100% organic bamboo pillowcases with moisture-wicking technology. Stays up to 3° cooler than cotton all night. Dermatologist recommended for menopause sleep disruption.', price:29.99, eta:'1-3 days', badge:'Best Seller', features:['Organic bamboo','Moisture-wicking','Hypoallergenic','Queen & King sizes'] },
  { id:48, name:'Magnesium Cooling Lotion',     emoji:'🧴', category:'cooldown', cat_label:'Cool Down', sub:'Calm hot flashes from within',    desc:'Transdermal magnesium lotion with peppermint and eucalyptus. Applied to wrists and chest, it absorbs quickly to help regulate body temperature and reduce hot flash intensity.', price:22.99, eta:'1-3 days', badge:null,  features:['Transdermal Mg','Peppermint + eucalyptus','Fast absorbing','Hormone-free'] },
];


const CATEGORIES = [
  { id:'all',      label:'All',              icon:'✦' },
  { id:'period',   label:'Period Care',      icon:'🌸' },
  { id:'intimate', label:'Intimate',         icon:'🫧' },
  { id:'wellness', label:'Wellness',         icon:'🌿' },
  { id:'cooldown', label:'Cool Down',        icon:'❄️' },
  { id:'skincare', label:'Skincare',         icon:'🌹' },
  { id:'hygiene',  label:'Hygiene',          icon:'🧴' },
  { id:'clothing', label:'Undies & Bottoms', icon:'👙' },
  { id:'candy',    label:'Sweets',           icon:'🍫' },
  { id:'comfort',  label:'Cozy Picks',       icon:'✨' },
  { id:'cuddles',  label:'Cuddles',           icon:'🧸' },
  { id:'holistic', label:'Holistic & Natural', icon:'🌿' },
];


const PLANS = {
  starter:   { name:'Starter',   price:19.99, slots:3  },
  essential: { name:'Essential', price:34.99, slots:6  },
  royal:     { name:'Royal',     price:54.99, slots:9  },
};




/* =============================================
   PRICING ENGINE — Promo Codes + Dynamic Fees
   ============================================= */
const PROMO_CODES = {
  'WELCOME20': { type:'percent',  value:20,   label:'20% off — welcome gift 🎉' },
  'PERIOD10':  { type:'percent',  value:10,   label:'10% off your order'         },
  'FREESHIP':  { type:'shipping', value:0,    label:'Free delivery 🛵'           },
  'ROYAL5':    { type:'fixed',    value:5.00, label:'$5 off your order 👑'       },
};


function getDeliveryFee(subtotal) {
  if (state.appliedPromo && state.appliedPromo.type === 'shipping') return 0;
  return subtotal >= 35 ? 0 : 4.99;
}


function getOrderTotal() {
  const subtotal = cartTotal();
  const delivery = getDeliveryFee(subtotal);
  const promo    = state.appliedPromo;
  let   discount = 0;
  if (promo) {
    if (promo.type === 'percent') discount = +(subtotal * promo.value / 100).toFixed(2);
    if (promo.type === 'fixed')   discount = Math.min(promo.value, subtotal);
  }
  const total = Math.max(0, +(subtotal - discount + delivery).toFixed(2));
  return { subtotal, delivery, discount, total };
}


function applyPromoCode() {
  const input = $('promoInput');
  const code  = input ? input.value.trim().toUpperCase() : '';
  if (!code) { showToast('Enter a promo code first ✨'); return; }
  const promo = PROMO_CODES[code];
  if (!promo) {
    showToast("That code isn't valid — try again");
    if (input) {
      input.style.borderColor = 'var(--error, #F87171)';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
    }
    return;
  }
  state.appliedPromo = { ...promo, code };
  if (input) input.value = '';
  showToast(promo.label + ' applied!');
  renderCart();
}


function removePromoCode() {
  state.appliedPromo = null;
  renderCart();
  showToast('Promo removed');
}


/* =============================================
   VERSION CONTENT MAPS
   ============================================= */
const CONTENT = {
  teen: {
    heroTagline:         'period, pooh. we got you. \u{1F451}',
    heroSub:             "get what you need, when you need it. no judgment \u2014 periodt.",
    heroOrderNowText:    'Urgent',
    heroCarePackageText: 'Get My Box',
    card1Title:          'Order Now',
    card1Desc:           'need it? we got you. pads, liners, wipes, skincare, comfort — order in the app, delivered to your door. periodt. 🛒',
    card2Title:          'My Monthly for My Monthly',
    card2Desc:           'Pick your plan, choose your faves, and get your care package every month. period, pooh \u2728',
    howTitle:            'how it works \u{1F451}',
    step1Name:           'Browse & Pick',
    step1Desc:           'Shop our full menu \u2014 period care, intimate wellness, skincare & more. Whatever you need.',
    step2Name:           'Order Placed',
    step2Desc:           'We link up with our supplier partners and get your order moving. Periodt.',
    step3Name:           'Right to You',
    step3Desc:           '1–3 days for standard orders, or on your date for your monthly box. Home, school, office — no stress, period, pooh.',
    trustBadges:         ['\ud83d\udd12 Discreet AF', '\u26a1 Under 1 Hour', '\ud83c\udf3f Natural Only', '\u21a9\ufe0f Easy Returns', '\ud83d\udc51 Supplier Direct'],
    subEyebrow:          'Monthly Drop',
    subTitle:            'my monthly<br><span>for my monthly.</span>',
    subSub:              "pick what you want, choose your plan, get it every month. period, pooh \u2014 we got you.",
    plansLabel:          'step 1 \u2014 pick your plan',
    pickerTitle:         'step 2 \u2014 build your box',
  },
  adult: {
    heroTagline:         'Your care. Your schedule.',
    heroSub:             'Delivered to your door in 1–3 days, or a curated monthly care package — built around your routine.',
    heroOrderNowText:    'Urgent',
    heroCarePackageText: 'Care Package',
    card1Title:          'Order Now',
    card1Desc:           'Need something? Browse our full catalog — period care, wellness, skincare, comfort. Ordered in the app, delivered to your door in 1–3 days.',
    card2Title:          'Care Package',
    card2Desc:           'A monthly subscription built around you. Choose your plan, select your products, and we handle the rest.',
    howTitle:            'How It Works',
    step1Name:           'Browse & Select',
    step1Desc:           'Shop our curated catalog \u2014 period care, intimate wellness, skincare, hygiene, and more.',
    step2Name:           'Place Your Order',
    step2Desc:           'We connect with our supplier partners and arrange fast delivery directly to you.',
    step3Name:           'Delivered to You',
    step3Desc:           '1–3 days for standard orders, or on your chosen delivery date for Care Packages — home, office, school, wherever you are.',
    trustBadges:         ['\ud83d\udd12 Secure & Discreet', '\u26a1 Under 1 Hour', '\ud83c\udf3f Natural Products', '\u21a9\ufe0f Easy Returns', '\ud83d\udc51 Supplier Direct'],
    subEyebrow:          'Monthly Subscription',
    subTitle:            'Your personal<br><span>care package.</span>',
    subSub:              'Pick a plan, choose what goes inside, and receive it every month \u2014 on your schedule.',
    plansLabel:          'Step 1 \u2014 Choose Your Plan',
    pickerTitle:         'Step 2 \u2014 Build Your Box',
  },


  emergency: {
    heroTagline:         "we've got you. right now.",
    heroSub:             "pads, underwear, essentials \u2014 wherever you are in under 30 minutes. no fluff. just fast.",
    heroOrderNowText:    'Get It NOW',
    heroCarePackageText: 'Auto-Delivery',
    card1Title:          'Get It NOW',
    card1Desc:           "Fastest delivery available. Pads, liners, fresh underwear, wipes \u2014 whatever you need, wherever you are in under 30 minutes.",
    card2Title:          'Set Auto-Delivery',
    card2Desc:           "So this never happens again. Your essentials ship automatically every month \u2014 on time, every time.",
    howTitle:            'How It Works',
    step1Name:           'Tell Us What You Need',
    step1Desc:           "Pads, liners, underwear \u2014 pick your essentials fast. We stock the must-haves for every situation.",
    step2Name:           'Order in Seconds',
    step2Desc:           "One tap, done. We route your order to the nearest supplier for the fastest possible delivery.",
    step3Name:           'On the Way \u2014 Fast',
    step3Desc:           "Under 30 minutes for emergency orders. Delivered to home, school, or office \u2014 discreet packaging. No judgment. Ever.",
    trustBadges:         ['\u{1F6A8} Under 30 Min', '\u{1F4E6} Discreet Pack', '\u{1F9F7} Always Stocked', '\u26a1 Order Fast', '\u{1F49C} No Judgment'],
    subEyebrow:          'Never Get Caught Off Guard',
    subTitle:            'Set up<br><span>auto-delivery.</span>',
    subSub:              "Pick a plan and your essentials ship every month \u2014 automatically. Always covered, no stress.",
    plansLabel:          'Step 1 \u2014 Choose Your Plan',
    pickerTitle:         'Step 2 \u2014 Build Your Box',
  },


  holistic: {
    heroTagline:         'your body, your way. 🌿',
    heroSub:             'All-natural, zero-waste, and chemical-free. No synthetics, no toxins — just your cycle, honored.',
    heroOrderNowText:    'Shop Natural',
    heroCarePackageText: 'Natural Box',
    card1Title:          'Shop Natural',
    card1Desc:           'Menstrual discs, cloth pads, CBD salves, magnesium, sea sponges — every product is clean, natural, and truly toxin-free.',
    card2Title:          'My Natural Monthly',
    card2Desc:           'A curated monthly box of all-natural, organic, and holistic period care delivered right to you. Intentional. Clean. Yours.',
    howTitle:            'How It Works 🌿',
    step1Name:           'Browse Clean Products',
    step1Desc:           'Every item is holistic, natural, or zero-waste. Filter by Holistic & Natural for your full collection.',
    step2Name:           'Order on Your Terms',
    step2Desc:           'We connect with our natural supplier partners — no warehouses, no synthetics in the supply chain.',
    step3Name:           'Right to You',
    step3Desc:           'Delivered in eco-conscious packaging — home, office, or wherever you are. 1–3 days standard, or on your monthly schedule.',
    trustBadges:         ['🌿 100% Natural', '♻️ Zero Waste', '🧪 Third-Party Tested', '🌱 No Synthetics', '💚 Toxin-Free'],
    subEyebrow:          'Monthly Natural Box',
    subTitle:            'My Natural<br><span>Monthly.</span>',
    subSub:              'Choose your plan, select your holistic essentials, and receive a fully natural care package every month.',
    plansLabel:          'Step 1 — Choose Your Plan',
    pickerTitle:         'Step 2 — Build Your Natural Box',
  },


  gifter: {
    heroTagline:         'show up for her. \u{1F451}',
    heroSub:             "let's be real \u2014 it's not the most fun week. but you showing up? that changes everything.",
    heroOrderNowText:    'Urgent',
    heroCarePackageText: 'Monthly Gift Box',
    card1Title:          'Urgent',
    card1Desc:           "Rough week? Get her what she needs. Chocolate, cozy socks, heating patches, period care — curated and delivered to her door in 1–3 days.",
    card2Title:          'Monthly Gift Box',
    card2Desc:           "Set it up once and she gets a thoughtful delivery every month \u2014 right before or during her cycle. She'll know exactly how much you care.",
    howTitle:            'How It Works',
    step1Name:           'Pick Her Favorites',
    step1Desc:           "Browse candy, cozy picks, period care, bottoms, skincare \u2014 everything she loves.",
    step2Name:           'Add a Sweet Note',
    step2Desc:           "Personalize your gift and we handle the rest \u2014 packaged with care and discretion.",
    step3Name:           'Delivered to Her',
    step3Desc:           "Delivered right to her door in 1–3 days — home, office, school, wherever she is. Or set up a monthly subscription so she always knows you're thinking of her.",
    trustBadges:         ['\u{1F381} Gift-Ready', '\u{1F36B} Sweets Included', '\u{1F48C} Personal Note', '\u{1F680} Same-Day Delivery', "\u{1F451} She'll Love It"],
    subEyebrow:          'Monthly Gift Box',
    subTitle:            'Send love<br><span>every month.</span>',
    subSub:              "Set up a recurring gift box \u2014 she gets a thoughtful delivery every cycle or on whatever schedule you set.",
    plansLabel:          'Step 1 \u2014 Choose a Gift Plan',
    pickerTitle:         'Step 2 \u2014 Pick What She Gets',
  },
  starter: {
    heroTagline:         'hey! your body just leveled up. \u2728',
    heroSub:             'getting your period is totally normal. we are here to help you understand it, handle it, and feel awesome. \u{1F338}',
    heroOrderNowText:    'Get My First Kit \u2728',
    heroCarePackageText: 'Monthly Supply',
    card1Title:          'Get Supplies',
    card1Desc:           'Liners, pads, period underwear \u2014 whatever feels right for you. No experience needed!',
    card2Title:          'Monthly Kit',
    card2Desc:           'We send you everything you need every month so you are always ready. Easy!',
    subEyebrow:          'Monthly Starter Supply',
    subTitle:            'Your monthly<br><span>period kit.</span>',
    subSub:              'We pick the beginner-friendly essentials and send them every month. You never have to worry about running out!',
    plansLabel:          'Step 1 \u2014 Pick Your Kit Size',
    pickerTitle:         'Step 2 \u2014 Pick What Goes In',
    trustBadges:         ['\u{1F512} Private & Safe', '\u2728 Beginner Friendly', '\u{1F4E6} Delivered to You', '\u{1F49C} No Judgment Ever', '\u{1F4DE} We\'re Here to Help']
  }
};


/* =============================================
   WHY PERIOD — Version-specific appeal content
   ============================================= */
const WHY_PERIOD = {
  teen: {
    headline: "Why Period. hits different 👑",
    tagline: "periodt, Pooh — we built this FOR you. Not DoorDash. Not a brand. You.",
    cards: [
      { icon:"💜", label:"For Real Though",   title:"Built for YOU. Not the app store.",
        body:"We didn't start this to compete with DoorDash. We started it because someone we love was that girl — in the bathroom, panicking, completely alone. DoorDash is a food app. We are YOUR app. That is not the same thing, period." },
      { icon:"💡", label:"The Logic",          title:"Same products. Smarter. Cheaper monthly.",
        body:"Same brands as DoorDash — but we learn the difference between your regular day and your 'I bled through everything' day. We quiz you, remember your preferences, and shop FOR you. DoorDash just shows you everything and hopes you figure it out. We don't do that." },
      { icon:"🤝", label:"Community",          title:"Your whole squad deserves you in the room.",
        body:"Every order rounds up for girls who can't afford what you're ordering. When you buy from Period., a girl somewhere gets what she needs too. No girl should have to figure this out alone — and with us, she doesn't have to." },
      { icon:"👑", label:"Real Talk",           title:"DoorDash brings fries. We bring freedom.",
        body:"They deliver pads AND pizza AND 2am everything else. We do ONE thing. We made it our whole personality. We know your flow type better than your last situationship. We researched all the organic options. We are completely at peace with this. Period, Pooh. 👑" }
    ],
    cta: "Shop My Way",
    footer: "1–3 Day Delivery · Price-matched · No judgment · Always stocked"
  },
  adult: {
    headline: "Why Period. instead of DoorDash",
    tagline: "Built for women who've been figuring it out alone long enough.",
    cards: [
      { icon:"💜", label:"The Why",             title:"You've been taking care of everyone. Let us take care of this.",
        body:"The founder of Period. grew up in a house where no one talked about feminine care. Her grandmother didn't know how to bring it up. Her sister tried but was figuring it out herself. They all just winged it. Period. exists so no woman — at any age — has to wing it again." },
      { icon:"💡", label:"The Logic",          title:"Price-matched. Personalized. 30–40% cheaper monthly.",
        body:"Every product is price-matched to or below what you'd pay elsewhere. Our subscription saves you 30–40% monthly. A 5-question quiz learns your flow type and preferences so you're never scrolling through products you don't need. That level of personalization doesn't exist anywhere else." },
      { icon:"🤝", label:"Community",          title:"Your routine becomes someone else's resource.",
        body:"Every order rounds up for period poverty organizations. Every purchase contributes to kits donated to Cleveland schools and shelters. You take care of yourself. We help you take care of someone else. That's the whole model — and it's why we built this instead of just becoming another delivery app." },
      { icon:"😂", label:"Let's Be Real",      title:"They deliver tampons AND hot wings. We only do one thing.",
        body:"DoorDash delivers period care. They also deliver pizza, 2am snacks, and everything else imaginable. They don't know your flow type. They don't know if you need organic. They don't know that heavy cramps mean you need the CBD salve AND the magnesium AND the dark chocolate. We do. We're specifically, earnestly excellent at this one thing." }
    ],
    cta: "Shop My Essentials",
    footer: "1–3 Day Delivery · Price-matched · Monthly subscription available · Always discreet"
  },
  emergency: {
    headline: "You're okay. We've got you.",
    tagline: "Fast, clear, no judgment. That's the whole thing.",
    cards: [
      { icon:"💜", label:"Right Now",          title:"Take a breath. Help is on the way.",
        body:"Whatever just happened — you are okay. Period. was built specifically for this moment. Not for browsing. Not for comparing options. For right now, when you need something fast and you cannot think about anything else." },
      { icon:"⚡", label:"How Fast",           title:"One tap. Under 30 minutes. Anywhere.",
        body:"School, office, home, your friend's house — we deliver to wherever you are in under 30 minutes. Emergency kit is pre-packed with everything you need. One tap. Done. No account required." },
      { icon:"🤝", label:"Not Alone",          title:"You are not the only person who has been here.",
        body:"Thousands of people have used this same button. You are not dramatic. You are not unprepared. You are human. This happens to everyone. And help is always one tap away — that's exactly why we built this." },
      { icon:"✅", label:"After This",         title:"Set it so this never happens again.",
        body:"Once you're settled — when you're calm — consider setting up a monthly care package. It ships automatically so you're always stocked. We'll offer it to you after your order. No pressure right now. Just — we've got you." }
    ],
    cta: "Get It Now",
    footer: "Under 30 min · Discreet packaging · No judgment · Always available"
  },
  gifter: {
    headline: "Why Period. for gifting",
    tagline: "The most powerful thing you can do is show up.",
    cards: [
      { icon:"💜", label:"Why It Matters",     title:"Most people forget. You remembered.",
        body:"The fact that you thought of her today — that you noticed she might be having a rough week — changes everything. We built Period. to make showing up for someone as easy as possible, because the gesture itself is what matters most." },
      { icon:"💡", label:"The Simple Truth",   title:"3 minutes. Something she'll remember forever.",
        body:"Pick what she gets, set a delivery time, add a personal note. Three minutes of your time equals a box of care that arrives when she needs it most. A food app can send snacks. Only Period. sends a whole moment." },
      { icon:"🤝", label:"Give Back",          title:"Your gift doubles.",
        body:"For every gift order, Period. rounds up and donates a care kit to a local school or shelter. You show up for her. We show up for someone who needed it just as much. One gift, two people taken care of." },
      { icon:"😂", label:"Real Talk",           title:"Flowers say 'I care.' This says 'I REALLY care.'",
        body:"Flowers are lovely. But chocolate, cozy socks, her favorite pads, cramp patches, and a handwritten note that says 'I've got you' — that's a completely different message. We make it easy to be THAT person. And she will absolutely tell her friends about you." }
    ],
    cta: "Build Her Gift",
    footer: "Same-day delivery · Personal gift notes · Monthly gifting available"
  },
  holistic: {
    headline: "Why Period. for clean care",
    tagline: "Your body is not a chemistry experiment. We treat it that way.",
    cards: [
      { icon:"💜", label:"The Standard",       title:"Clean ingredients shouldn't require a PhD.",
        body:"We vet every holistic product so you don't have to read ingredient lists at midnight. No vague 'natural fragrance.' No greenwashing. Every item in our natural catalog is third-party tested, ingredient-transparent, and curated for real purity — not just a clean-sounding label." },
      { icon:"💡", label:"The Logic",          title:"All-natural. Verified. All in one place.",
        body:"Finding genuine clean alternatives normally means jumping between 10 websites, each with different standards. Period.'s holistic catalog is one curated, vetted collection — organic pads, reusable cups, CBD relief, castor oil kits, herbal teas, magnesium — fully clean. One place." },
      { icon:"🤝", label:"Beyond You",         title:"Your choice ripples outward.",
        body:"Choosing natural reduces your body's chemical load. Choosing reusable reduces plastic waste. Choosing Period. rounds up for girls who can't afford any of it. Your care is intentional — and it counts for you, for the environment, for the community." },
      { icon:"😂", label:"Being Honest",       title:"We researched all of this. We have opinions. We're fine.",
        body:"Conventional options come wrapped in bleached rayon with plastic cores. We will send you a castor oil ritual kit, cramp bark herbal tea, GOTS-certified organic cotton pads, and a lavender calm roller. We have deep feelings about clean period care. We are completely at peace with this. 🌿" }
    ],
    cta: "Shop Natural",
    footer: "Third-party tested · Zero-waste options · Delivered to you · Always clean"
  }
};


const CAT_GRADIENTS = {
  period:   'linear-gradient(135deg,#1A0D2E,#3D1A6E)',
  intimate: 'linear-gradient(135deg,#0D1020,#1F1050)',
  wellness: 'linear-gradient(135deg,#0D150A,#1A3020)',
  skincare: 'linear-gradient(135deg,#1A1205,#3D2A08)',
  hygiene:  'linear-gradient(135deg,#0A1020,#102040)',
  clothing: 'linear-gradient(135deg,#1A0515,#2D0A28)',
  candy:    'linear-gradient(135deg,#1A0808,#3D1010)',
  comfort:  'linear-gradient(135deg,#0D0A1A,#1A1240)',
  holistic: 'linear-gradient(135deg,#0A1A0D,#0E2E15)',
};


/* =============================================
   STATE
   ============================================= */
let state = {
  view:            'home',
  version:         null,       // 'teen' | 'adult' | 'emergency' | 'gifter' | 'holistic'
  cart:            {},          // { id: qty }
  careBox:         {},          // { id: qty } for subscription
  activeCategory:  'all',
  shopMode:        'categories', // 'categories' | 'products'
  pickerFilter:    'all',       // category filter inside subscription picker
  searchQuery:     '',
  openProduct:     null,
  selectedPlan:    null,
  deliveryAddress: '',
  appliedPromo:       null,   // { type, value, label, code } | null
  _stripeCard:        null,   // Stripe Card Element instance
  _stripeCardMounted: false,
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
  // Show personalized greeting
  setTimeout(() => showWelcomeCard(), 600);
  // Show/hide starter educational section
  const starterSection = document.getElementById('starterSection');
  if (starterSection) {
    starterSection.style.display = version === 'starter' ? '' : 'none';
  }
  // Wire starter order button
  const starterOrderBtn = document.getElementById('starterOrderBtn');
  if (starterOrderBtn) {
    starterOrderBtn.onclick = function() { navigate('shop'); };
  }
  // Lock down starter experience for 9-12
  if (version === 'starter') {
    setTimeout(initStarterExperience, 300);
  } else {
    // Restore everything if switching away from starter
    if (typeof restoreFromStarterMode === 'function') restoreFromStarterMode();
  }
  // Show hygiene button for all experiences
  let hygieneBtn = document.getElementById('hygieneGuideBtn');
  if (!hygieneBtn) {
    hygieneBtn = document.createElement('button');
    hygieneBtn.id = 'hygieneGuideBtn';
    hygieneBtn.className = 'hero-how-btn';
    hygieneBtn.innerHTML = '&#x1F6BF; Hygiene Guide <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    hygieneBtn.style.cssText = 'cursor:pointer;pointer-events:auto;';
    hygieneBtn.addEventListener('click', function() { showHygieneGuide(state.version); });
    const quickLinks = document.querySelector('.hero-quick-links');
    if (quickLinks) quickLinks.appendChild(hygieneBtn);
  }
  // Add self-care button
  let selfCareBtn = document.getElementById('selfCareGuideBtn');
  if (!selfCareBtn && state.version !== 'gifter') {
    selfCareBtn = document.createElement('button');
    selfCareBtn.id = 'selfCareGuideBtn';
    selfCareBtn.className = 'hero-how-btn';
    selfCareBtn.innerHTML = '&#x1F338; Self-Care Guide <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    selfCareBtn.style.cssText = 'cursor:pointer;pointer-events:auto;';
    selfCareBtn.addEventListener('click', function() { showSelfCareGuide(state.version); });
    const quickLinks2 = document.querySelector('.hero-quick-links');
    if (quickLinks2) quickLinks2.appendChild(selfCareBtn);
  }


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


  // Version badge in header
  const badgeLabels = {
    teen:      '\u{1F451} Teen',
    adult:     '\u{1F49C} Adult',
    emergency: '\u{1F6A8} Urgent',
    gifter:    '\u{1F381} Gifter',
    holistic:  '\u{1F33F} Holistic',
    starter:   '\u2728 Just Starting'
  };
  const badgeText = $('versionBadgeText');
  if (badgeText) badgeText.textContent = badgeLabels[version] || 'Choose';
}


function setVersionCookie(v) {
  document.cookie = 'period_version=' + v + ';max-age=31536000;path=/;SameSite=Lax';
  try { localStorage.setItem('period_version_backup', v); } catch(e) {}
}
function getVersionCookie() {
  var m = document.cookie.match(/period_version=([^;]+)/);
  if (m) return m[1];
  try { return localStorage.getItem('period_version_backup'); } catch(e) { return null; }
}


function setVersion(version) {
  state.version = version;
  setVersionCookie(version);
  document.documentElement.setAttribute('data-version', version);
  applyVersionContent(version);
}


function showVersionPicker() {
  // Don't show for guys experience
  try { if (new URLSearchParams(window.location.search).get('for') === 'him') return; } catch(e) {}
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



/* =============================================
   APP INTRO CARD — shown before experience picker
   ============================================= */
function showAppIntroCard() {
  // Don't show for guys experience
  try { if (new URLSearchParams(window.location.search).get('for') === 'him') return; } catch(e) {}
  const overlay = document.createElement('div');
  overlay.id = 'appIntroOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(8,6,16,0.98);display:flex;align-items:center;justify-content:center;padding:1.5rem;';
  overlay.innerHTML = `
    <div style="max-width:360px;width:100%;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
        <span style="font-size:2.5rem;">&#x1F451;</span>
      </div>
      <div style="font-family:var(--font-display);font-size:1.8rem;font-weight:700;color:#EDE8FA;line-height:1.1;">Period.</div>
      <div style="font-size:0.78rem;color:rgba(237,232,250,0.45);letter-spacing:0.1em;text-transform:uppercase;">period care &middot; delivered to you</div>
      <div style="width:48px;height:2px;background:linear-gradient(135deg,#A855F7,#7C3AED);border-radius:999px;"></div>
      <p style="font-size:0.9rem;color:rgba(237,232,250,0.75);line-height:1.7;max-width:300px;">
        We deliver period care, wellness essentials &amp; more &mdash; on demand or monthly. Whether it&#39;s your first period or you&#39;ve been at this for years, we have something just for you. &#x1F49C;
      </p>
      <p style="font-size:0.82rem;color:rgba(237,232,250,0.5);line-height:1.6;">
        On the next screen, <strong style="color:rgba(237,232,250,0.8);">select the experience that best describes you</strong> &mdash; we&#39;ll personalize everything from there.
      </p>
      <button id="appIntroNextBtn" style="width:100%;padding:1rem;background:linear-gradient(135deg,#A855F7,#7C3AED);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-top:0.25rem;">
        Let&#39;s Go &#x2728;
      </button>
      <p style="font-size:0.72rem;color:rgba(237,232,250,0.3);">Secure &middot; Private &middot; Always Free to Browse</p>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.getElementById('appIntroNextBtn').addEventListener('click', () => {
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      initVersionPicker();
    }, 300);
  });
}

function initVersionPicker() {
  const picker = $('versionPicker');
  if (picker) {
    picker.style.display = 'flex';
    picker.style.opacity = '1';
    picker.style.visibility = 'visible';
  }
  document.body.style.overflow = 'hidden';
  const pickTeen = $('pickTeen'), pickAdult = $('pickAdult');
  const pickEmergency = $('pickEmergency'), pickGifter = $('pickGifter');
  const pickHolistic = $('pickHolistic'), switchBtn = $('switchModeBtn');
  if (pickTeen)      pickTeen.addEventListener('click',      () => { setVersion('teen');      dismissVersionPicker(); });
  if (pickAdult)     pickAdult.addEventListener('click',     () => { setVersion('adult');     dismissVersionPicker(); });
  if (pickEmergency) pickEmergency.addEventListener('click', () => { setVersion('emergency'); dismissVersionPicker(); setTimeout(() => navigate('shop'), 460); });
  if (pickGifter)    pickGifter.addEventListener('click',    () => { setVersion('gifter');    dismissVersionPicker(); });
  if (pickHolistic)  pickHolistic.addEventListener('click',  () => { setVersion('holistic');  dismissVersionPicker(); });
  const pickStarter = $('pickStarter');
  if (pickStarter)   pickStarter.addEventListener('click',   () => { setVersion('starter');   dismissVersionPicker(); });
  if (switchBtn)     switchBtn.addEventListener('click', showVersionPicker);
  const versionBadge = $('versionBadge');
  if (versionBadge)  versionBadge.addEventListener('click', showVersionPicker);
}

function initVersion() {
  const stored = getVersionCookie();
  const validVersions = ['teen', 'adult', 'emergency', 'gifter', 'holistic', 'starter'];
  if (validVersions.includes(stored)) {
    // Already has a version — activate home view and go
    navigate('home');
    setVersion(stored);
  } else {
    // No version yet — check if age already verified
    const ageCookie = document.cookie.match('(?:^|; )period_age_ok=([^;]*)');
    const ageOk = ageCookie ? ageCookie[1] === 'yes' : false;
    if (ageOk) {
      // Age verified, no version — show app intro → picker
      setTimeout(showAppIntroCard, 400);
    }
    // If no age cookie, the age gate DOMContentLoaded will handle showing the gate
    // and after YES it will call showAppIntroCard
  }
}


/* =============================================
   NAVIGATION
   ============================================= */
function navigate(view) {
  if (view === 'cycleScoopView') {
    $$('.view').forEach(v => v.classList.remove('active'));
    const scoopEl = document.getElementById('cycleScoopView');
    if (scoopEl) scoopEl.classList.add('active');
    state.view = 'cycleScoopView';
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderScoopFacts();
    renderScoopFaq();
    initCycleScoopTabs();
    return;
  }
  $$('.view').forEach(v => v.classList.remove('active'));
  $(`${view}View`).classList.add('active');
  state.view = view;
  window.scrollTo({ top:0, behavior:'instant' });


  if (view === 'shop') {
    state.searchQuery = '';
    if ($('searchInput')) $('searchInput').value = '';
    // Emergency mode gets a stripped-down urgent UI
    if (state.version === 'emergency') {
      renderEmergencyShop();
    } else {
      showCategoriesMode();
    }
  }
  if (view === 'subscribe') {
    renderPlanCards();
  }
  if (view === 'tracker') {
    trackerDisplayMonth = null;  // reset to today's month on entry
    renderTracker();
    // Fire 5-second tutorial on first-ever visit
    setTimeout(showTrackerTutorial, 300);
  }
  if (view === 'community') {
    initCommunity();
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
   FAVORITES
   ============================================= */
function getFavorites() {
  try {
    const m = document.cookie.match(/period_favs=([^;]+)/);
    return m ? JSON.parse(decodeURIComponent(m[1])) : [];
  } catch { return []; }
}
function saveFavorites(favs) {
  try {
    document.cookie = 'period_favs=' + encodeURIComponent(JSON.stringify(favs)) + ';max-age=946080000;path=/;SameSite=Lax';
  } catch {}
  // Also persist to Firestore so favorites survive cookie clears
  if (_firebaseFs) {
    _firebaseFs.collection('favorites').doc(getDeviceId()).set({
      items:      favs,
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.warn('[Period.] Firestore favorites save failed:', e));
  }
}
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    showToast('Removed from favorites');
  } else {
    favs.push(id);
    showToast('❤️ Saved to favorites');
  }
  saveFavorites(favs);
  renderProductGrid();
}


/* =============================================
   SHOP — Category Grid & Products
   ============================================= */
function filteredProducts() {
  return PRODUCTS.filter(p => {
    // Cool Down only shows for adult and holistic experiences
    if (p.category === 'cooldown' && state.version !== 'adult' && state.version !== 'holistic') return false;
    if (state.activeCategory === 'favorites') return getFavorites().includes(p.id);
    const catOk = state.activeCategory === 'all' || p.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const srchOk = !q || p.name.toLowerCase().includes(q) || p.cat_label.toLowerCase().includes(q) || p.features.some(f => f.toLowerCase().includes(q));
    return catOk && srchOk;
  });
}


/* =============================================
   EMERGENCY SHOP — stripped-down urgent UI
   ============================================= */
const EMERGENCY_IDS = [17, 18, 1, 15, 2]; // kit first, then add-ons


function renderEmergencyShop() {
  // Hide all normal shop elements
  $('emergencyShop').style.display = '';
  $('categoryGrid').style.display = 'none';
  $('shopBreadcrumb').style.display = 'none';
  if ($('filterBar'))    $('filterBar').style.display = 'none';
  if ($('sectionHeader')) $('sectionHeader').style.display = 'none';
  $('productGrid').style.display = 'none';


  // Render add-on items (everything except the kit hero)
  const addOns = EMERGENCY_IDS.slice(1)
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);


  const items = $('emergencyItems');
  items.innerHTML = addOns.map(p => {
    const inCart = state.cart[p.id] > 0;
    return `
      <div class="emg-item">
        <div class="emg-item-info">
          <span class="emg-item-emoji">${p.emoji}</span>
          <div>
            <div class="emg-item-name">${p.name}</div>
            <div class="emg-item-meta">${p.eta} \u00b7 ${fmt(p.price)}</div>
          </div>
        </div>
        <button class="emg-add-btn ${inCart ? 'in-cart' : ''}" data-add="${p.id}">
          ${inCart ? '\u2713 Added' : '+ Add'}
        </button>
      </div>`;
  }).join('');


  items.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(+btn.dataset.add);
      renderEmergencyShop(); // re-render to update button states
    });
  });


  // Wire kit button (only once)
  const kitBtn = $('emergencyKitBtn');
  kitBtn.onclick = () => {
    addToCart(17);
    openCart();
  };
}


/* Show the category browse grid */
function showCategoriesMode() {
  state.shopMode = 'categories';
  state.activeCategory = 'all';
  if ($('emergencyShop')) $('emergencyShop').style.display = 'none';
  $('categoryGrid').style.display = '';
  $('shopBreadcrumb').style.display = 'none';
  if ($('filterBar')) $('filterBar').style.display = 'none';
  if ($('sectionHeader')) $('sectionHeader').style.display = 'none';
  $('productGrid').style.display = 'none';
  renderCategoryGrid();
}


/* Switch to products view for a specific category */
function showProductsMode(catId) {
  state.shopMode = 'products';
  state.activeCategory = catId;
  $('categoryGrid').style.display = 'none';
  $('shopBreadcrumb').style.display = '';
  if ($('filterBar')) $('filterBar').style.display = '';
  if ($('sectionHeader')) $('sectionHeader').style.display = '';
  $('productGrid').style.display = '';


  // Set breadcrumb title
  const cat = CATEGORIES.find(c => c.id === catId);
  const bcLabel = catId === 'favorites' ? '❤️ My Favorites' : (cat ? cat.icon + ' ' + cat.label : catId);
  if ($('shopBcTitle')) $('shopBcTitle').textContent = bcLabel;
  if ($('sectionTitle')) $('sectionTitle').textContent = catId === 'favorites' ? 'My Favorites' : (cat?.label || 'Products');


  renderFilterPills();
  renderProductGrid();
}


/* Render category cards grid */
function renderCategoryGrid() {
  const grid = $('categoryGrid');
  if (!grid) return;


  const favs = getFavorites();
  const favCard = favs.length
    ? [{ id:'favorites', label:'My Favorites', icon:'❤️', count: favs.length }]
    : [];


  const cats = CATEGORIES.filter(c => c.id !== 'all').map(c => ({
    ...c, count: PRODUCTS.filter(p => p.category === c.id).length
  }));


  const allCards = [...favCard, ...cats];


  grid.innerHTML = allCards.map(c => `
    <button class="cat-card" data-cat="${c.id}" role="listitem" aria-label="Browse ${c.label} \u2014 ${c.count} item${c.count !== 1 ? 's' : ''}">
      <span class="cat-card-icon">${c.icon}</span>
      <span class="cat-card-name">${c.label}</span>
      <span class="cat-card-count">${c.count} item${c.count !== 1 ? 's' : ''}</span>
    </button>`).join('');


  grid.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => showProductsMode(card.dataset.cat));
  });
}


/* Render filter pills (shown inside products mode) */
function renderFilterPills() {
  const bar = $('filterPills');
  if (!bar) return;
  const cats = CATEGORIES.filter(c => c.id !== 'all');
  // Add favorites pill if user has favorites
  const favs = getFavorites();
  const favPill = favs.length
    ? [{ id:'favorites', label:'Favorites', icon:'❤️' }]
    : [];
  const pills = [...favPill, ...cats];


  bar.innerHTML = pills.map(c => `
    <button class="pill ${state.activeCategory === c.id ? 'active':''}" data-cat="${c.id}" role="listitem">
      <span aria-hidden="true">${c.icon}</span> ${c.label}
    </button>`).join('');
  bar.querySelectorAll('.pill').forEach(p => {
    p.addEventListener('click', () => {
      state.activeCategory = p.dataset.cat;
      if ($('sectionTitle')) $('sectionTitle').textContent = p.dataset.cat === 'favorites' ? 'My Favorites' : (CATEGORIES.find(c => c.id === p.dataset.cat)?.label || 'Products');
      renderFilterPills();
      renderProductGrid();
    });
  });
}


/* Render product cards (called when in products mode) */
function renderProductGrid() {
  const grid  = $('productGrid');
  const count = $('productCount');
  const prods = filteredProducts();
  if (count) count.textContent = prods.length + ' item' + (prods.length !== 1 ? 's' : '');


  if (!prods.length) {
    const emptyMsg = state.activeCategory === 'favorites'
      ? '<div class="empty-state"><div class="empty-icon">❤️</div><div class="empty-title">No favorites yet</div><div class="empty-sub">Tap the ♥ on any product to save it here</div></div>'
      : '<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">No products found</div><div class="empty-sub">Try a different search or category</div></div>';
    grid.innerHTML = emptyMsg;
    return;
  }


  grid.innerHTML = prods.map(p => {
    const inCart = state.cart[p.id] > 0;
    const faved  = isFavorite(p.id);
    return `
      <div class="product-card" data-id="${p.id}" role="listitem button" tabindex="0" aria-label="View ${p.name}">
        <div class="product-img" data-cat="${p.category}">
          <span aria-hidden="true">${p.emoji}</span>
          ${p.badge ? `<span class="product-img-badge">${p.badge}</span>` : ''}
          <span class="product-eta" aria-label="Estimated delivery ${p.eta}">🛯 ${p.eta}</span>
          <button class="fav-btn ${faved ? 'active' : ''}" data-fav="${p.id}" aria-label="${faved ? 'Remove from favorites' : 'Save to favorites'}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="${faved ? '#ef4444' : 'none'}" stroke="${faved ? '#ef4444' : 'currentColor'}" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
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
    card.addEventListener('click', e => {
      if (e.target.closest('[data-add]') || e.target.closest('[data-fav]')) return;
      openProductModal(+card.dataset.id);
    });
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openProductModal(+card.dataset.id); });
  });
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      addToCart(+btn.dataset.add);
      showGoToCartBtn();
    });
  });
  grid.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); e.preventDefault(); toggleFavorite(+btn.dataset.fav); });
  });
}

function showGoToCartBtn() {
  let btn = document.getElementById('goToCartFloating');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'goToCartFloating';
    btn.style.cssText = 'position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);z-index:1000;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;padding:0.875rem 2rem;font-size:0.95rem;font-weight:700;cursor:pointer;box-shadow:0 4px 20px rgba(124,58,237,0.4);display:flex;align-items:center;gap:0.5rem;white-space:nowrap;animation:fadeSlideIn 0.3s ease;';
    btn.innerHTML = '&#x1F6D2; Go to Cart <span id="goToCartCount" style="background:white;color:#7C3AED;border-radius:999px;padding:0.1rem 0.5rem;font-size:0.8rem;font-weight:800;"></span>';
    btn.addEventListener('click', () => { openCart(); });
    document.body.appendChild(btn);
  }
  const count = cartCount();
  const countEl = document.getElementById('goToCartCount');
  if (countEl) countEl.textContent = count;
  btn.style.display = count > 0 ? 'flex' : 'none';
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
  showGoToCartBtn();
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


  // Dynamic pricing breakdown
  const _pricing = getOrderTotal();
  const _el = id => document.getElementById(id);


  if (_el('breakdownSubtotal')) _el('breakdownSubtotal').textContent = fmt(_pricing.subtotal);


  if (_el('breakdownDelivery')) {
    _el('breakdownDelivery').textContent  = _pricing.delivery === 0 ? 'FREE 🎉' : fmt(_pricing.delivery);
    _el('breakdownDelivery').style.color  = _pricing.delivery === 0 ? '#6DAA45' : '';
  }


  if (_el('breakdownDiscountRow')) {
    const _hasDisc = _pricing.discount > 0;
    _el('breakdownDiscountRow').style.display = _hasDisc ? '' : 'none';
    if (_hasDisc) {
      if (_el('breakdownDiscount')) _el('breakdownDiscount').textContent = '−' + fmt(_pricing.discount);
      if (_el('breakdownDiscountLabel') && state.appliedPromo)
        _el('breakdownDiscountLabel').textContent = 'Discount (' + state.appliedPromo.code + ')';
    }
  }


  if (_el('cartTotal')) _el('cartTotal').textContent = fmt(_pricing.total);


  // Promo row toggle
  const _hasPromo = !!state.appliedPromo;
  if (_el('promoInputWrap'))  _el('promoInputWrap').style.display  = _hasPromo ? 'none' : '';
  if (_el('promoAppliedRow')) _el('promoAppliedRow').style.display = _hasPromo ? '' : 'none';
  if (_hasPromo && _el('promoAppliedLabel')) _el('promoAppliedLabel').textContent = state.appliedPromo.label;


  $('cartItemCount').textContent = cartCount() + ' item' + (cartCount()!==1?'s':'');
}


function openCart()  {
  $('cartSidebar').classList.add('open'); $('cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; renderCart();
  const goBtn = document.getElementById('goToCartFloating');
  if (goBtn) goBtn.style.display = 'none';
}
function closeCart() {
  $('cartSidebar').classList.remove('open'); $('cartOverlay').classList.remove('open'); document.body.style.overflow='';
  if (cartCount() > 0) showGoToCartBtn();
}


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
  state.pickerFilter = 'all';  // reset filter on plan change
  updateSubscribeBtn();
  renderSmartSuggestions();
  renderPickerFilter();
  renderPickerGrid();
}


function renderSmartSuggestions() {
  const favIds = getFavorites();
  const box    = $('smartSuggestions');
  const row    = $('smartSuggestRow');
  if (!box || !row) return;


  const favProducts = PRODUCTS.filter(p => favIds.includes(p.id));
  if (!favProducts.length) {
    box.style.display = 'none';
    return;
  }


  const plan = PLANS[state.selectedPlan];
  const slots = plan ? plan.slots : 0;
  const used  = careBoxCount();


  row.innerHTML = favProducts.map(p => {
    const selected = state.careBox[p.id] > 0;
    const full     = !selected && used >= slots;
    return `<button class="smart-chip ${selected ? 'selected' : ''} ${full ? 'disabled' : ''}"
              data-suggest="${p.id}" ${full ? 'disabled' : ''}
              aria-pressed="${selected}" aria-label="${selected ? 'Remove' : 'Add'} ${p.name}">
      <span class="chip-emoji" aria-hidden="true">${p.emoji}</span>
      <span class="chip-name">${p.name}</span>
    </button>`;
  }).join('');


  box.style.display = 'block';


  row.querySelectorAll('[data-suggest]').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleCareItem(+btn.dataset.suggest);
      renderSmartSuggestions(); // re-render chips after toggle
    });
  });
}


function renderPickerFilter() {
  const bar = $('pickerFilterBar');
  if (!bar) return;


  // Build category list from products that exist
  const usedCats = [...new Set(PRODUCTS.map(p => p.category))];
  const tabs = CATEGORIES.filter(c => c.id === 'all' || usedCats.includes(c.id));


  bar.innerHTML = tabs.map(c => `
    <button class="picker-filter-tab ${state.pickerFilter === c.id ? 'active' : ''}"
            data-filter="${c.id}" aria-pressed="${state.pickerFilter === c.id}">
      <span aria-hidden="true">${c.icon}</span> ${c.label}
    </button>`).join('');


  bar.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.pickerFilter = btn.dataset.filter;
      renderPickerFilter();
      renderPickerGrid();
    });
  });
}


function renderPickerGrid() {
  const plan  = PLANS[state.selectedPlan];
  const used  = careBoxCount();
  const slots = plan ? plan.slots : 0;


  $('pickerSlots').textContent = `${used} / ${slots} selected`;
  $('pickerSlots').classList.toggle('full', used >= slots);


  const filtered = state.pickerFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === state.pickerFilter);


  $('pickerGrid').innerHTML = filtered.length ? filtered.map(p => {
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
          <div class="picker-cat">${p.cat_label}</div>
          <div class="picker-price">${fmt(p.price)}</div>
        </div>
      </div>`;
  }).join('') : `<p class="picker-empty">No products in this category yet.</p>`;


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
  renderSmartSuggestions();
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
/* =============================================
   EXPRESS CHECKOUT — Apple Pay & Google Pay
   ============================================= */
function handleExpressCheckout(provider) {
  const itemCount = Object.values(state.cart).reduce((s, n) => s + n, 0);
  if (itemCount === 0) { showToast('Add items to your cart first ✨'); return; }


  const label = provider === 'apple' ? 'Apple Pay' : 'Google Pay';


  if (_stripe) {
    // Real Stripe Payment Request — Apple Pay / Google Pay native sheet
    const { total, delivery } = getOrderTotal();
    const pr = _stripe.paymentRequest({
      country: 'US', currency: 'usd',
      total: { label: 'Period. Order', amount: Math.round(total * 100) },
      requestPayerEmail: true, requestPayerName: true, requestShipping: true,
      shippingOptions: [{
        id: 'local', label: 'Local Delivery (~45 min)',
        detail: 'Via our partner network',
        amount: Math.round(delivery * 100)
      }]
    });
    pr.on('paymentmethod', ev => {
      // TODO: call your backend to confirm PaymentIntent, then:
      ev.complete('success');
      state.cart = {}; state.appliedPromo = null;
      updateCartBadge(); renderCart(); closeCart();
      $('orderSuccess').classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    pr.canMakePayment().then(result => {
      if (result) { pr.show(); }
      else {
        showToast(`${label} not available on this device — try card checkout`);
        openStripeCheckout();
      }
    });
    return;
  }


  // Pre-launch: friendly feedback + complete pre-order
  showToast(`${label} activates at launch 🚀`);
  setTimeout(() => placeOrder(), 900);
}




/* =============================================
   PERSONALIZED GREETING + TONE SYSTEM
   ============================================= */

const TONES = {
  teen: {
    greetings: {
      morning: ["rise and slay, bestie ✨", "good morning pooh ??", "wakey wakey, queen ??", "morning! today is giving main character ✨"],
      afternoon: ["hey bestie, we see you ??", "afternoon check-in, pooh ??", "you ate today? hydrated? we love that ??", "hey queen, how we feeling? ??"],
      evening: ["evening vibes, bestie ??", "rest era activated, pooh ??", "you showed up today and that matters ✨", "wind down time, queen ??"],
      night: ["still up? same bestie ??", "late night energy, we see you!", "rest is productive too, periodt.", "night owl era ?? stay hydrated tho"]
    }
  },
  adult: {
    greetings: {
      morning: ["Good morning, sis. You've got this. ??", "Rise and handle business, queen. ??", "Morning! Coffee first, everything else second. ☕", "Good morning. Today is yours. ✨"],
      afternoon: ["Hey love. Hope today is being kind to you. ??", "Afternoon check-in — how are you holding up? ??", "You're doing great, even when it doesn't feel like it. ??", "Hey sis. Breathe. You're doing enough. ✨"],
      evening: ["Evening, love. Time to wind down. ??", "You made it through today. That counts. ??", "Rest is not lazy — it's necessary. Good evening. ??", "Hey sis. The hard part is done. Relax now. ✨"],
      night: ["Still up? Take care of yourself. ??", "Late night energy. Hope you're okay. ??", "Rest well when you're ready, love. ✨", "Night, sis. Tomorrow is a new day. ??"]
    }
  },
  emergency: {
    greetings: {
      morning: ["We've got you. Right now. ⚡", "Help is one tap away. ??", "You're okay. We're here. ⚡", "Breathe. We've got this. ??"],
      afternoon: ["We've got you. Right now. ⚡", "Help is one tap away. ??", "You're okay. We're here. ⚡", "Breathe. We've got this. ??"],
      evening: ["We've got you. Right now. ⚡", "Help is one tap away. ??", "You're okay. We're here. ⚡", "Breathe. We've got this. ??"],
      night: ["We've got you. Right now. ⚡", "Help is one tap away. ??", "You're okay. We're here. ⚡", "Breathe. We've got this. ??"]
    }
  },
  gifter: {
    greetings: {
      morning: ["Good morning! You're about to make someone's day. ??", "Morning, thoughtful one. ??", "She's lucky to have you. Good morning! ??", "Rise and show up for her. ??"],
      afternoon: ["Hey! Thinking of her today? We love that. ??", "Afternoon! She deserves it. Let's make it happen. ??", "You remembered. That means everything. ??", "Hey, thoughtful one. Ready to shop for her? ??"],
      evening: ["Evening! Still time to send some love. ??", "Good evening, gift-giver. ??", "She'll remember this. Good evening! ??", "Evening! Let's do something kind tonight. ??"],
      night: ["Late night love mission? We respect it. ??", "Night owl gifter energy. ?? Let's go. ??", "She deserves it, even at this hour. ??", "Night! Quick gift before you sleep? ??"]
    }
  },
  holistic: {
    greetings: {
      morning: ["Good morning. Honor your body today. ??", "Rise intentionally, love. ??", "Morning rituals first. We see you. ??", "Good morning. Your cycle is your superpower. ??"],
      afternoon: ["Midday check-in. How is your body feeling? ??", "Afternoon, clean girl. ?? Stay grounded. ??", "How is your energy today? Listen to your body. ??", "Afternoon. Hydrate. Breathe. You've got this. ??"],
      evening: ["Evening wind-down. Tend to yourself. ??", "Good evening, love. Rest is part of the ritual. ??", "Evening. Your body did a lot today. Honor it. ??", "Wind-down time. Clean and intentional. ??"],
      night: ["Rest is healing. Good night, love. ??", "Night rituals. You know what to do. ??", "Sleep is the ultimate wellness practice. ??", "Good night. Your body restores while you sleep. ??"]
    }
  },
  starter: {
    greetings: {
      morning:   ["Good morning, superstar! \u2728 Your body is doing something amazing.", "Hey! Rise and shine! \u{1F31F} You got this today!", "Morning! Did you know your body is literally a superhero? \u{1F9B8}", "Good morning! Today is going to be great. \u2728"],
      afternoon: ["Hey there! How are you feeling right now? \u{1F338}", "Afternoon check-in! You are doing SO well. \u2728", "Hey! Your body is working hard today. Be kind to it. \u{1F49C}", "Hi! How is your day going? We are rooting for you! \u{1F31F}"],
      evening:   ["Good evening! You made it through the day! \u{1F338}", "Hey! Rest time! Your body deserves it. \u{1F49C}", "Evening! You did amazing today. For real. \u2728", "Hi! Wind down time. Put on something comfy. \u{1F319}"],
      night:     ["Hey night owl! Get some rest when you can. \u{1F49C}", "Good night! Your body does its best work while you sleep. \u2728", "Night night! You were awesome today. \u{1F31F}", "Hey! Sleep is a superpower too. Rest up. \u{1F319}"]
    }
  }
};

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

function getPersonalizedGreeting(version) {
  const v = version || state.version || 'adult';
  const tone = TONES[v] || TONES.adult;
  const timeKey = getTimeOfDay();
  const arr = tone.greetings[timeKey];
  const name = getNickname ? getNickname() : null;
  let greeting = arr[Math.floor(Math.random() * arr.length)];
  if (name && v === 'teen') greeting = greeting.replace('bestie', name).replace('pooh', name).replace('queen', name);
  if (name && v === 'adult') greeting = greeting.replace('sis', name).replace('love', name).replace('queen', name);
  return greeting;
}




/* =============================================
   SELF-CARE & WELLNESS GUIDE — PER EXPERIENCE
   ============================================= */

const SELF_CARE_CONTENT = {
  starter: {
    title: 'Feel Better During Your Period &#x1F338;',
    intro: 'Your period can make you feel blah. Cramps, tired, moody &#x2014; all normal! But there are some easy things you can do to feel WAY better. No doctor needed. Promise! &#x2728;',
    sections: [
      {
        emoji: '&#x1F3C3;',
        title: 'Move a little (yes, really!)',
        color: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.2)',
        tips: [
          'A short walk outside can actually help cramps. Wild, right?',
          'Gentle stretching or yoga for beginners &#x2014; look up "period yoga" on YouTube',
          'Dancing around your room counts. 100%. Put on your favorite song and go.',
          'Even 10 minutes of light movement releases feel-good chemicals in your brain!'
        ]
      },
      {
        emoji: '&#x1F4A7;',
        title: 'Drink water (SO much water)',
        color: 'rgba(14,165,233,0.1)',
        border: 'rgba(14,165,233,0.2)',
        tips: [
          'Dehydration makes cramps and headaches WORSE. Drink up!',
          'Aim for 8 glasses a day &#x2014; more during your period',
          'Herbal tea counts! Chamomile and peppermint tea are great for cramps',
          'Avoid soda and energy drinks &#x2014; they make bloating worse'
        ]
      },
      {
        emoji: '&#x1F34C;',
        title: 'Eat foods that help',
        color: 'rgba(251,191,36,0.1)',
        border: 'rgba(251,191,36,0.2)',
        tips: [
          '&#x1F36B; Dark chocolate (70%+) has magnesium which helps cramps. YES this is real!',
          '&#x1F34C; Bananas help with bloating and mood &#x2014; potassium is your friend',
          '&#x1F966; Leafy greens (spinach, kale) replace the iron your body loses',
          '&#x1F36F; Ginger in tea or food helps with nausea and stomach pain',
          'Avoid super salty snacks &#x2014; they make bloating much worse'
        ]
      },
      {
        emoji: '&#x1F6CB;',
        title: 'Rest is your superpower',
        color: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.2)',
        tips: [
          'Your body is literally doing extra work right now. Rest is not being lazy!',
          'A heating pad or hot water bottle on your tummy = instant cramp relief',
          'Take naps if you need them. No guilt. Zero.',
          'Warm baths help relax your muscles and can ease cramps a lot'
        ]
      }
    ]
  },
  teen: {
    title: 'Survive Your Period Like a Pro &#x1F451;',
    intro: 'Okay bestie &#x2014; your period does not have to ruin your whole week. Here is the real guide nobody gave you. Save this. Screenshot it. Live by it. &#x1F525;',
    sections: [
      {
        emoji: '&#x1F3C3;',
        title: 'Movement that actually helps (no gym required)',
        color: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.2)',
        tips: [
          'Light walks literally reduce prostaglandins (those are what cause cramps). Science said so.',
          'Period yoga is a thing and it WORKS. Search "yin yoga for period cramps" &#x2014; 20 mins, game changer.',
          'Dancing, slow stretching, gentle pilates &#x2014; all valid. Heavy lifting on day 1-2? Skip it.',
          'Movement releases endorphins which counteract the serotonin drop your hormones cause. Your mood WILL improve.'
        ]
      },
      {
        emoji: '&#x1F4A7;',
        title: 'Hydrate or suffer bestie (no cap)',
        color: 'rgba(14,165,233,0.1)',
        border: 'rgba(14,165,233,0.2)',
        tips: [
          'Dehydration + period = headaches, worse cramps, more fatigue. Drink water periodt.',
          'Raspberry leaf tea reduces uterine cramping &#x2014; start drinking it the week before your period',
          'Chamomile tea calms inflammation AND helps you sleep. Two for one.',
          'Electrolytes (like Liquid IV) help if you are losing a lot of blood. Replenish your minerals.'
        ]
      },
      {
        emoji: '&#x1F354;',
        title: 'Eat smart or feel worse (your choice)',
        color: 'rgba(251,191,36,0.1)',
        border: 'rgba(251,191,36,0.2)',
        tips: [
          '&#x1F36B; Dark chocolate is medicinal. Magnesium reduces cramp intensity. Eat it with zero guilt.',
          '&#x1F957; Iron-rich foods (spinach, red meat, lentils) replace what your body loses. Fatigue is often iron loss.',
          '&#x1F9C0; Calcium + magnesium combo &#x2014; dairy, almonds, dark leafy greens &#x2014; reduces PMS symptoms significantly.',
          'Avoid: alcohol, excess caffeine, super salty snacks, processed foods. They make everything worse. Yes, all of them.'
        ]
      },
      {
        emoji: '&#x1F9D8;',
        title: 'Soft life era for real this week',
        color: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.2)',
        tips: [
          'Heat patches on your lower abdomen and lower back &#x2014; relief within minutes. Non-negotiable.',
          'Warm bath with Epsom salt &#x2014; magnesium absorbs through skin, reduces cramps. Add lavender. You deserve it.',
          'Your body is shedding its uterine lining. That is EFFORT. Rest without guilt.',
          'Weighted blanket + comfort show + heating pad = the period trinity. Build your nest and stay in it.'
        ]
      }
    ]
  },
  adult: {
    title: 'Period Self-Care That Actually Works &#x1F49C;',
    intro: 'No fluff, no filler. Here is what the research actually supports for managing your cycle like the informed, capable woman you are. Your period does not have to wreck your week.',
    sections: [
      {
        emoji: '&#x1F3CB;',
        title: 'Movement & inflammation management',
        color: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.2)',
        tips: [
          'Aerobic exercise (even 20-30 min walks) reduces prostaglandin production &#x2014; the compounds that cause cramping.',
          'Yoga specifically: child&#39;s pose, supine twist, and cat-cow are clinically studied for menstrual pain relief.',
          'Avoid high-intensity training on days 1-2 &#x2014; your body is in an inflammatory state. Work with it, not against it.',
          'Swimming is uniquely effective &#x2014; water pressure reduces bloating and the warmth relaxes uterine muscles.'
        ]
      },
      {
        emoji: '&#x1F9EC;',
        title: 'Nutrition for hormonal support',
        color: 'rgba(251,191,36,0.1)',
        border: 'rgba(251,191,36,0.2)',
        tips: [
          'Magnesium glycinate (200-400mg daily) is the most evidence-based supplement for reducing PMS and cramping.',
          'Omega-3 fatty acids (salmon, walnuts, flaxseed) reduce systemic inflammation including menstrual pain.',
          'Iron + Vitamin C together &#x2014; your body loses significant iron during menstruation. Pair iron-rich foods with citrus for optimal absorption.',
          'Reduce: alcohol (disrupts hormone metabolism), excess caffeine (increases cortisol), refined sugar (drives inflammation). The data is clear.',
          'Anti-inflammatory foods: turmeric, ginger, dark leafy greens, berries, fatty fish. Make them a habit the week before and during.'
        ]
      },
      {
        emoji: '&#x1F4A7;',
        title: 'Hydration & bloating reduction',
        color: 'rgba(14,165,233,0.1)',
        border: 'rgba(14,165,233,0.2)',
        tips: [
          'Counterintuitive truth: drinking MORE water reduces water retention and bloating, not less.',
          'Reduce sodium significantly the week before your period to prevent pre-period bloating.',
          'Dandelion root tea is a natural diuretic that reduces bloating without depleting electrolytes.',
          'Fennel seeds brewed as tea &#x2014; a studied remedy for menstrual cramping and digestive discomfort.'
        ]
      },
      {
        emoji: '&#x1F9D8;',
        title: 'Targeted relief & recovery',
        color: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.2)',
        tips: [
          'Heat therapy (40-45°C) is as effective as ibuprofen for menstrual pain in multiple studies. Use it.',
          'Epsom salt baths: magnesium sulfate absorbs transdermally and reduces both cramping and mood symptoms.',
          'CBD topical applied to lower abdomen shows promising results for localized pain without systemic effects.',
          'Sleep prioritization during your period is not optional &#x2014; melatonin production is disrupted by hormonal shifts. Protect your sleep environment.'
        ]
      }
    ]
  },
  holistic: {
    title: 'Cycle Syncing & Natural Wellness &#x1F33F;',
    intro: 'Your menstrual phase is a time of release, inward reflection, and restoration. Honor what your body is asking for. These plant-based, evidence-informed practices support your cycle naturally.',
    sections: [
      {
        emoji: '&#x1F33F;',
        title: 'Gentle movement in your menstrual phase',
        color: 'rgba(34,197,94,0.1)',
        border: 'rgba(34,197,94,0.2)',
        tips: [
          'Yin yoga and restorative yoga are ideal during menstruation &#x2014; long-held poses release deep fascial tension around the uterus.',
          'Walking in nature reduces cortisol and supports progesterone balance. Ground yourself literally.',
          'Qigong and tai chi support pelvic energy flow according to Traditional Chinese Medicine practitioners.',
          'Avoid vigorous practice days 1-2. Your energy is directed inward. Honor that, not override it.'
        ]
      },
      {
        emoji: '&#x1F375;',
        title: 'Herbal & plant-based support',
        color: 'rgba(251,191,36,0.1)',
        border: 'rgba(251,191,36,0.2)',
        tips: [
          'Red raspberry leaf tea: tones the uterine muscle, reduces cramping. Drink 2-3 cups daily starting 1 week before.',
          'Cramp bark tincture: one of the most studied herbal antispasmodics for uterine cramping.',
          'Ginger root tea: clinically comparable to ibuprofen for menstrual pain in some studies. Make it fresh.',
          'Turmeric with black pepper: curcumin reduces prostaglandin-driven inflammation. Add to golden milk daily.',
          'Vitex (Chaste Tree Berry): supports progesterone production and reduces PMS over time. 3-month commitment minimum.'
        ]
      },
      {
        emoji: '&#x1F9F4;',
        title: 'Anti-inflammatory nutrition',
        color: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.2)',
        tips: [
          'Seed cycling: pumpkin and flax seeds in the first half of your cycle, sesame and sunflower in the second. Supports estrogen and progesterone balance.',
          'Eliminate: gluten, dairy, refined sugar, alcohol during your period. Inflammatory foods amplify every symptom.',
          'Wild-caught salmon or sardines: highest omega-3 density, most anti-inflammatory protein source available.',
          'Magnesium-rich foods: dark chocolate, pumpkin seeds, avocado, black beans &#x2014; the natural version of supplementation.'
        ]
      },
      {
        emoji: '&#x1F9D8;',
        title: 'Ritual, rest & nervous system support',
        color: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.2)',
        tips: [
          'Castor oil pack on lower abdomen for 45-60 minutes: a traditional naturopathic practice for reducing uterine inflammation.',
          'Magnesium flake baths (not just Epsom): higher bioavailability of transdermal magnesium absorption.',
          'Aromatherapy: lavender and clary sage essential oils (diluted) applied to lower abdomen have documented antispasmodic effects.',
          'Your menstrual phase is associated with the new moon energy in many traditions. Use it for rest, reflection, and intention &#x2014; not productivity.'
        ]
      }
    ]
  },
  emergency: {
    title: 'Feel Better Fast &#x26A1;',
    intro: 'No time for long explanations. Here is what works RIGHT NOW to get you through.',
    sections: [
      {
        emoji: '&#x1F525;',
        title: 'Instant relief',
        color: 'rgba(239,68,68,0.1)',
        border: 'rgba(239,68,68,0.2)',
        tips: [
          'Heat on your lower belly &#x2014; heating pad, hot water bottle, even a warm towel. Works within minutes.',
          'Ibuprofen works best taken BEFORE cramps peak. Take it early.',
          'Fetal position with a pillow between your knees reduces pelvic pressure.',
          'Slow deep breaths activate your parasympathetic nervous system and reduce pain perception.'
        ]
      },
      {
        emoji: '&#x1F4A7;',
        title: 'Drink something warm',
        color: 'rgba(14,165,233,0.1)',
        border: 'rgba(14,165,233,0.2)',
        tips: [
          'Warm water or herbal tea right now. Warmth internally and externally helps.',
          'Avoid cold drinks &#x2014; they can increase cramping.',
          'Ginger tea if you have it &#x2014; fastest natural anti-inflammatory.'
        ]
      }
    ]
  }
};

function showSelfCareGuide(version) {
  const v = version || state.version || 'adult';
  const data = SELF_CARE_CONTENT[v] || SELF_CARE_CONTENT.adult;

  const overlay = document.createElement('div');
  overlay.id = 'selfCareOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.97);overflow-y:auto;padding:1.5rem;';

  const sectionsHtml = data.sections.map(section => {
    const tipsHtml = section.tips.map(tip =>
      '<li style="margin-bottom:0.6rem;font-size:0.85rem;color:var(--text-muted);line-height:1.65;padding-left:0.25rem;">' + tip + '</li>'
    ).join('');

    return '<div style="margin-bottom:1.25rem;padding:1rem;background:' + section.color + ';border:1px solid ' + section.border + ';border-radius:16px;">' +
      '<div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">' +
      '<span style="font-size:1.3rem;">' + section.emoji + '</span>' +
      '<span style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">' + section.title + '</span>' +
      '</div>' +
      '<ul style="list-style:none;padding:0;margin:0;">' + tipsHtml + '</ul>' +
      '</div>';
  }).join('');

  overlay.innerHTML =
    '<div style="max-width:480px;margin:0 auto;">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">' +
    '<h2 style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--text-primary);">' + data.title + '</h2>' +
    '<button id="closeSelfCareBtn" style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer;">&#xD7;</button>' +
    '</div>' +
    '<div style="background:rgba(168,85,247,0.08);border-radius:16px;padding:1rem;margin-bottom:1.25rem;border:1px solid rgba(168,85,247,0.2);">' +
    '<p style="font-size:0.875rem;color:var(--text-muted);line-height:1.7;margin:0;">' + data.intro + '</p>' +
    '</div>' +
    sectionsHtml +
    '<div style="background:rgba(34,197,94,0.08);border-radius:16px;padding:1rem;margin-top:0.5rem;border:1px solid rgba(34,197,94,0.2);">' +
    '<p style="font-size:0.78rem;color:var(--text-muted);line-height:1.6;margin:0;">&#x1F4AC; <strong>Important:</strong> These are general wellness suggestions, not medical advice. If your symptoms are severe or disabling, please talk to a healthcare provider. You deserve proper care.</p>' +
    '</div>' +
    '<button id="closeSelfCareBtnBottom" style="width:100%;margin-top:1.25rem;padding:1rem;background:var(--accent);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">Got it! &#x1F49C;</button>' +
    '</div>';

  document.body.appendChild(overlay);
  document.getElementById('closeSelfCareBtn').addEventListener('click', () => overlay.remove());
  document.getElementById('closeSelfCareBtnBottom').addEventListener('click', () => overlay.remove());
}



/* =============================================
   TRUSTED ADULT SYSTEM — Ages 9-12
   (Hidden until attorney approval)
   Preview via: ?preview=starter
   ============================================= */

const STARTER_PREVIEW_MODE = new URLSearchParams(window.location.search).get('preview') === 'starter';

function checkStarterAccess() {
  // Developer preview mode — only accessible via ?preview=starter
  if (STARTER_PREVIEW_MODE) {
    console.log('[Period.] Starter preview mode active');
    return true;
  }
  return false;
}

function showTrustedAdultGate(onApproved) {
  const overlay = document.createElement('div');
  overlay.id = 'trustedAdultGate';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:linear-gradient(160deg,rgba(251,191,36,0.15),rgba(236,72,153,0.12),rgba(168,85,247,0.10));display:flex;align-items:center;justify-content:center;padding:1.5rem;overflow-y:auto;';

  overlay.innerHTML = `
    <div style="max-width:380px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:2px solid rgba(251,191,36,0.3);box-shadow:0 8px 40px rgba(251,191,36,0.15);">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:1.5rem;">
        <div style="font-size:2.5rem;margin-bottom:0.5rem;">&#x1F6AB;</div>
        <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">A Trusted Adult is REQUIRED</h2>
        <div style="background:rgba(239,68,68,0.1);border:1.5px solid rgba(239,68,68,0.3);border-radius:12px;padding:0.875rem;margin-bottom:0.75rem;">
          <p style="font-size:0.875rem;color:var(--text-primary);line-height:1.6;margin:0;font-weight:600;">&#x26A0;&#xFE0F; This is not optional.</p>
          <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.6;margin:0.25rem 0 0;">A parent or guardian, school nurse, or trusted teacher <strong>must</strong> be physically present with you right now to continue. Period. is committed to your safety above everything else.</p>
        </div>
        <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.6;">Please hand the phone or device to your trusted adult now. They will complete the next steps. &#x1F49C;</p>
      </div>

      <!-- Adult type selector -->
      <div style="margin-bottom:1.25rem;">
        <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.6rem;">Trusted Adult &mdash; please select your role:</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;" id="adultTypeOptions">
          <button class="adult-type-btn" data-type="parent" style="padding:0.875rem 1rem;border-radius:14px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.15s;">
            <span style="font-size:1.3rem;">&#x1F468;&#x200D;&#x1F467;</span>
            <div><div style="font-weight:600;">Parent or Guardian</div><div style="font-size:0.75rem;color:var(--text-muted);">I am the child's parent or legal guardian</div></div>
          </button>
          <button class="adult-type-btn" data-type="nurse" style="padding:0.875rem 1rem;border-radius:14px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.15s;">
            <span style="font-size:1.3rem;">&#x1F9D1;&#x200D;&#x2695;&#xFE0F;</span>
            <div><div style="font-weight:600;">School Nurse</div><div style="font-size:0.75rem;color:var(--text-muted);">I am a licensed school health professional</div></div>
          </button>
          <button class="adult-type-btn" data-type="teacher" style="padding:0.875rem 1rem;border-radius:14px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;display:flex;align-items:center;gap:0.75rem;transition:all 0.15s;">
            <span style="font-size:1.3rem;">&#x1F9D1;&#x200D;&#x1F3EB;</span>
            <div><div style="font-weight:600;">Teacher or Principal</div><div style="font-size:0.75rem;color:var(--text-muted);">I am a school staff member acting in loco parentis</div></div>
          </button>
        </div>
      </div>

      <!-- Adult info form (shown after type selected) -->
      <div id="adultInfoForm" style="display:none;margin-bottom:1.25rem;">
        <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.6rem;">Your Information</div>
        <input id="adultName" type="text" placeholder="Full name" style="width:100%;height:44px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:10px;font-size:0.875rem;color:var(--text-primary);outline:none;margin-bottom:0.5rem;box-sizing:border-box;"/>
        <input id="adultContact" type="tel" placeholder="Phone number (for parent notification)" style="width:100%;height:44px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:10px;font-size:0.875rem;color:var(--text-primary);outline:none;margin-bottom:0.5rem;box-sizing:border-box;"/>
        <input id="parentContact" type="tel" placeholder="Parent/Guardian phone (to notify them)" id="parentContactField" style="width:100%;height:44px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:10px;font-size:0.875rem;color:var(--text-primary);outline:none;margin-bottom:0.75rem;box-sizing:border-box;"/>

        <!-- Agreement -->
        <div style="background:rgba(251,191,36,0.08);border-radius:12px;padding:0.875rem;border:1px solid rgba(251,191,36,0.2);margin-bottom:0.75rem;">
          <label style="display:flex;align-items:flex-start;gap:0.75rem;cursor:pointer;">
            <input type="checkbox" id="adultAgreement" style="margin-top:0.2rem;flex-shrink:0;accent-color:#A855F7;width:16px;height:16px;"/>
            <span style="font-size:0.78rem;color:var(--text-muted);line-height:1.6;">I confirm I am a trusted adult assisting a child aged 9&ndash;12. I agree to Period. terms of use and consent to the parent/guardian being notified of this session. I take responsibility for this access.</span>
          </label>
        </div>

        <button id="adultProceedBtn" style="width:100%;padding:1rem;background:linear-gradient(135deg,#FBB024,#EC4899);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">
          Continue &mdash; I Am Present &#x1F91D;
        </button>
      </div>

      <!-- Coming soon notice -->
      <div style="background:rgba(168,85,247,0.06);border-radius:12px;padding:0.75rem;border:1px solid rgba(168,85,247,0.15);text-align:center;">
        <div style="font-size:0.72rem;color:var(--text-muted);line-height:1.5;">
          &#x1F6A7; <strong>Coming Soon:</strong> School nurse profiles, parental pre-authorization, and automatic parent notifications are launching soon. This flow is in preview mode.
        </div>
      </div>

    </div>`;

  document.body.appendChild(overlay);

  // Wire adult type buttons
  let selectedAdultType = null;
  overlay.querySelectorAll('.adult-type-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      overlay.querySelectorAll('.adult-type-btn').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.style.background = 'var(--surface-2)';
      });
      btn.style.borderColor = 'rgba(251,191,36,0.6)';
      btn.style.background = 'rgba(251,191,36,0.08)';
      selectedAdultType = btn.dataset.type;

      // Show form
      const form = document.getElementById('adultInfoForm');
      if (form) form.style.display = '';

      // Adjust parent contact label
      const parentField = document.getElementById('parentContact');
      if (parentField && selectedAdultType === 'parent') {
        parentField.style.display = 'none';
      } else if (parentField) {
        parentField.style.display = '';
        parentField.placeholder = 'Parent/Guardian phone (to notify them)';
      }
    });
  });

  // Wire proceed button
  const proceedBtn = document.getElementById('adultProceedBtn');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', function() {
      const name = document.getElementById('adultName').value.trim();
      const contact = document.getElementById('adultContact').value.trim();
      const agreed = document.getElementById('adultAgreement').checked;

      if (!name) { showToast('Please enter your name'); return; }
      if (!contact) { showToast('Please enter your phone number'); return; }
      if (!agreed) { showToast('Please confirm the agreement to continue'); return; }

      // Save trusted adult session
      const session = {
        type: selectedAdultType,
        name: name,
        contact: contact,
        timestamp: new Date().toISOString()
      };
      sessionStorage.setItem('period_trusted_adult', JSON.stringify(session));

      // Save to Firebase for records
      if (_firebaseFs) {
        _firebaseFs.collection('trusted_adult_sessions').add({
          adult_type: selectedAdultType,
          adult_name: name,
          adult_contact: contact,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          source: 'starter_experience'
        }).catch(function(e) { console.warn('Session save failed:', e); });
      }

      // Notify parent if nurse/teacher
      if (selectedAdultType !== 'parent') {
        const parentContact = document.getElementById('parentContact');
        if (parentContact && parentContact.value.trim()) {
          showToast('Parent notification will be sent when SMS launches &#x1F49C;');
        }
      }

      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        if (typeof onApproved === 'function') onApproved();
      }, 300);
    });
  }
}

// School Profile System (placeholder — ready for launch)
function showSchoolProfileSetup() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.97);display:flex;align-items:center;justify-content:center;padding:1.5rem;overflow-y:auto;';
  overlay.innerHTML = `
    <div style="max-width:380px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:1px solid rgba(251,191,36,0.3);text-align:center;">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">&#x1F3EB;</div>
      <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">School Profile Setup</h2>
      <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;margin-bottom:1.25rem;">
        Register your school so nurses and staff can quickly order on behalf of students. Parents are notified automatically.
      </p>
      <div style="background:rgba(251,191,36,0.08);border-radius:16px;padding:1rem;margin-bottom:1rem;border:1px solid rgba(251,191,36,0.2);">
        <div style="font-size:0.78rem;font-weight:700;color:rgba(251,191,36,0.9);margin-bottom:0.5rem;">&#x1F6A7; Coming Soon</div>
        <div style="font-size:0.82rem;color:var(--text-muted);line-height:1.6;">School profile registration is launching soon. Join our waitlist to be notified when it goes live.</div>
      </div>
      <input type="email" id="schoolWaitlistEmail" placeholder="School email address" style="width:100%;height:44px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:10px;font-size:0.875rem;outline:none;margin-bottom:0.75rem;box-sizing:border-box;color:var(--text-primary);"/>
      <input type="text" id="schoolName" placeholder="School name" style="width:100%;height:44px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:10px;font-size:0.875rem;outline:none;margin-bottom:0.75rem;box-sizing:border-box;color:var(--text-primary);"/>
      <button id="schoolWaitlistBtn" style="width:100%;padding:0.875rem;background:linear-gradient(135deg,#FBB024,#EC4899);color:white;border:none;border-radius:999px;font-size:0.9rem;font-weight:700;cursor:pointer;margin-bottom:0.75rem;">
        Join School Waitlist &#x2728;
      </button>
      <button id="closeSchoolProfile" style="background:none;border:none;color:var(--text-muted);font-size:0.85rem;cursor:pointer;">Close</button>
    </div>`;

  document.body.appendChild(overlay);

  document.getElementById('schoolWaitlistBtn').addEventListener('click', function() {
    const email = document.getElementById('schoolWaitlistEmail').value.trim();
    const school = document.getElementById('schoolName').value.trim();
    if (!email || !school) { showToast('Please fill in both fields'); return; }
    if (_firebaseFs) {
      _firebaseFs.collection('school_waitlist').add({
        email: email,
        school_name: school,
        created_at: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(function(e) { console.warn('School waitlist save failed:', e); });
    }
    showToast('School registered for waitlist! We will be in touch. &#x1F3EB;');
    overlay.remove();
  });

  document.getElementById('closeSchoolProfile').addEventListener('click', () => overlay.remove());
}

/* =============================================
   STARTER EXPERIENCE — 9-12 LOCKDOWN MODE
   ============================================= */

function initStarterExperience() {
  // Check if preview mode is active (for developer testing)
  if (!STARTER_PREVIEW_MODE) {
    // Show trusted adult gate first
    showTrustedAdultGate(function() {
      _runStarterExperience();
    });
    return;
  }
  _runStarterExperience();
}

function _runStarterExperience() {
  // Hide all nav items not appropriate for 9-12
  const hideIds = [
    'navCommunity', 'heroCommBar', 'heroWhyBtn',
    'cardCarePackage', 'cardHolistic', 'heroNewsletterBtn',
    'impactStrip', 'impactSection', 'featureSpotlight',
    'nlHomeCta', 'voicesSection', 'cycleEduSection',
    'changeSisSection', 'teenBodySection', 'teenFactsSection',
    'teenFreakSection'
  ];
  hideIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // Apply soft yellow/pink background to home view
  var homeView = document.getElementById('homeView');
  if (homeView) {
    homeView.style.background = 'linear-gradient(160deg,rgba(251,191,36,0.08) 0%,rgba(236,72,153,0.06) 50%,rgba(168,85,247,0.05) 100%)';
    homeView.style.minHeight = '100vh';
  }

  // Apply to version picker too
  var pickerEl = document.getElementById('versionPicker');
  if (pickerEl) {
    pickerEl.style.background = 'linear-gradient(160deg,rgba(251,191,36,0.15),rgba(236,72,153,0.10),rgba(168,85,247,0.08))';
  }

  // Show starter section
  var starterSection = document.getElementById('starterSection');
  if (starterSection) starterSection.style.display = '';

  // Show the nurse/school profile card
  showSchoolNurseCard();

  // In preview mode, add a visible "Switch Experience" button for developer testing
  if (STARTER_PREVIEW_MODE) {
    var existing = document.getElementById('starterPreviewExitBtn');
    if (!existing) {
      var exitBtn = document.createElement('button');
      exitBtn.id = 'starterPreviewExitBtn';
      exitBtn.style.cssText = 'position:fixed;bottom:5rem;right:1rem;z-index:9000;background:#7C3AED;color:white;border:none;border-radius:999px;padding:0.6rem 1rem;font-size:0.78rem;font-weight:700;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
      exitBtn.innerHTML = '&#x1F500; Switch Experience';
      exitBtn.addEventListener('click', function() {
        // Restore hidden elements before switching
        restoreFromStarterMode();
        showVersionPicker();
      });
      document.body.appendChild(exitBtn);
    }
  }
}

function restoreFromStarterMode() {
  // Restore all elements hidden by starter mode
  var restoreIds = [
    'navCommunity', 'heroCommBar', 'heroWhyBtn',
    'cardCarePackage', 'cardHolistic', 'heroNewsletterBtn',
    'impactStrip', 'impactSection', 'featureSpotlight',
    'nlHomeCta', 'voicesSection', 'cycleEduSection',
    'changeSisSection', 'teenBodySection', 'teenFactsSection',
    'teenFreakSection'
  ];
  restoreIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = '';
  });
  // Restore home background
  var homeView = document.getElementById('homeView');
  if (homeView) {
    homeView.style.background = '';
    homeView.style.minHeight = '';
  }
  // Reset picker background
  var pickerEl = document.getElementById('versionPicker');
  if (pickerEl) pickerEl.style.background = '';
  // Hide starter section
  var starterSection = document.getElementById('starterSection');
  if (starterSection) starterSection.style.display = 'none';
  // Remove nurse card
  var nurseCard = document.getElementById('nurseProfileCard');
  if (nurseCard) nurseCard.remove();
  // Remove preview exit button
  var exitBtn = document.getElementById('starterPreviewExitBtn');
  if (exitBtn) exitBtn.remove();
}

function showSchoolNurseCard() {
  const existing = document.getElementById('nurseProfileCard');
  if (existing) return;

  const card = document.createElement('div');
  card.id = 'nurseProfileCard';
  card.style.cssText = 'margin:0 1rem 1rem;padding:1.25rem;background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(236,72,153,0.08));border:1.5px solid rgba(251,191,36,0.3);border-radius:20px;';
  card.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
      <span style="font-size:1.5rem;">&#x1F3EB;</span>
      <div>
        <div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">Need help at school?</div>
        <div style="font-size:0.75rem;color:var(--text-muted);">Your school nurse can order for you</div>
      </div>
    </div>
    <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.875rem;">
      If you are at school and need supplies, your school nurse can place an order on your behalf. No need to feel embarrassed &mdash; they are there to help! &#x1F49C;
    </p>
    <div style="background:rgba(251,191,36,0.08);border-radius:12px;padding:0.75rem;border:1px solid rgba(251,191,36,0.2);margin-bottom:0.75rem;">
      <div style="font-size:0.78rem;font-weight:700;color:rgba(251,191,36,0.9);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.4rem;">&#x1F6A7; Coming Soon</div>
      <div style="font-size:0.8rem;color:var(--text-muted);line-height:1.5;">School nurse profiles &mdash; where your school nurse can have a verified account to order on your behalf and track deliveries. We are working on this! &#x2728;</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:0.5rem;">
      <button onclick="showNurseContactInfo()" style="width:100%;padding:0.75rem;background:linear-gradient(135deg,rgba(251,191,36,0.8),rgba(236,72,153,0.7));color:white;border:none;border-radius:999px;font-size:0.85rem;font-weight:700;cursor:pointer;">
        &#x1F4DE; Tell My Nurse About Period.
      </button>
      <button onclick="showSchoolProfileSetup()" style="width:100%;padding:0.75rem;background:var(--surface-2);border:1.5px solid rgba(251,191,36,0.3);border-radius:999px;color:var(--text-primary);font-size:0.82rem;font-weight:600;cursor:pointer;">
        &#x1F3EB; Register My School
      </button>
    </div>`;

  // Insert after starter educational section
  const starterSection = document.getElementById('starterSection');
  if (starterSection) {
    starterSection.insertAdjacentElement('afterend', card);
  }
}

function showNurseContactInfo() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.95);display:flex;align-items:center;justify-content:center;padding:1.5rem;';
  overlay.innerHTML = `
    <div style="max-width:340px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:1px solid rgba(251,191,36,0.3);text-align:center;">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">&#x1F3EB;</div>
      <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">Tell Your School Nurse!</h2>
      <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6;margin-bottom:1rem;">
        Show your nurse this screen or have them visit <strong style="color:var(--text-primary);">perioddelivers.com</strong> &mdash; they can order supplies for you and the whole school!
      </p>
      <div style="background:rgba(251,191,36,0.1);border-radius:12px;padding:0.875rem;margin-bottom:1rem;border:1px solid rgba(251,191,36,0.2);">
        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.25rem;">School supply orders &amp; inquiries:</div>
        <div style="font-size:1rem;font-weight:700;color:var(--text-primary);">perioddelivers.com</div>
        <div style="font-size:0.85rem;color:var(--text-muted);">&#x1F4DE; (216) 250-1993</div>
      </div>
      <button id="closeNurseInfo" style="width:100%;padding:0.875rem;background:linear-gradient(135deg,rgba(251,191,36,0.8),rgba(236,72,153,0.7));color:white;border:none;border-radius:999px;font-size:0.9rem;font-weight:700;cursor:pointer;">Got it! &#x1F338;</button>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('closeNurseInfo').addEventListener('click', () => overlay.remove());
}

/* =============================================
   PERIOD HYGIENE EDUCATION — PER EXPERIENCE
   ============================================= */

const HYGIENE_CONTENT = {
  starter: {
    title: 'Keeping Clean &#x1F6BF; (Super Important!)',
    intro: 'Okay real talk &mdash; periods can create a smell. That is 100% normal and happens to EVERYONE. But here is how to stay fresh and feel confident! No more awkward moments. We got you! &#x2728;',
    steps: [
      { icon:'&#x23F0;', title:'Change your pad every 3-4 hours', body:'Even if it does not look super full! Leaving it too long = smell. Set an alarm on your phone if you need to. Your future self will thank you.' },
      { icon:'&#x1F6BF;', title:'Wipe front to back ALWAYS', body:'This is the most important rule ever. Always wipe from front (where your pee comes out) to back (your bottom). Never the other way. This keeps bad germs away from your body.' },
      { icon:'&#x1F9FC;', title:'Wash with just water down there', body:'Here is a secret: soap inside your private area actually makes things worse! Just warm water is perfect. Your body cleans itself naturally. Soap on the outside only.' },
      { icon:'&#x1F9E5;', title:'Fresh underwear every day', body:'During your period, change your underwear at least once a day. Period underwear is amazing because it holds everything and washes easily. Dark colors are your best friend right now.' },
      { icon:'&#x1F4A8;', title:'Period smell is NORMAL', body:'A little smell is completely normal &mdash; it is just blood. But if it smells really strong or fishy, tell a doctor. That could mean something needs attention. No shame, just health!' },
      { icon:'&#x1F9FB;', title:'Wrap and toss properly', body:'Wrap used pads in the wrapper from the new one or toilet paper, then put in the trash. NEVER flush pads down the toilet &mdash; they will clog it and cause big problems!' },
    ]
  },
  teen: {
    title: 'Period Hygiene, No Cap &#x1F4A7;',
    intro: 'Okay bestie, real talk. Periods create a smell &mdash; it is literally just blood and your body doing its thing. Totally normal. But here is how to stay fresh and unbothered because YOU deserve to feel confident every single day. &#x1F31F;',
    steps: [
      { icon:'&#x23F0;', title:'Change every 3-4 hours, periodt', body:'Even if your pad is not completely soaked. Old blood = smell. New pad = fresh. Set an alarm, make it a routine, and never skip it especially at school.' },
      { icon:'&#x1F6BF;', title:'Front to back. Always. Non-negotiable.', body:'Wipe from front to back after using the bathroom. Never back to front. This is literally the most important hygiene rule of your life. Front = clean zone. Keep it that way.' },
      { icon:'&#x1F9FC;', title:'No soap inside, just water', body:'Your vagina is self-cleaning (yes, really). Soap inside throws off your pH and can actually make you smell worse or cause infections. Warm water on the outside only. That is it.' },
      { icon:'&#x1F9E5;', title:'Fresh fit, fresh underwear', body:'Change your underwear daily during your period, or more if needed. Period underwear and dark colors are the move. Your outfits slap harder when you feel clean underneath.' },
      { icon:'&#x1F4A8;', title:'The smell is real and it is okay', body:'Period blood has a smell. A little is normal and nobody around you can smell it like you think they can. But if it is strong or fishy, see a doctor. That is your body asking for help.' },
      { icon:'&#x1F9FB;', title:'Wrap it, bin it, never flush it', body:'Wrap used pads in toilet paper or the wrapper and toss in the trash. Flushing pads or tampons clogs pipes and causes literal disasters. Trash only, always.' },
    ]
  },
  adult: {
    title: 'Period Hygiene: The Full Honest Truth &#x1F49C;',
    intro: 'Let us normalize talking about this. Period odor is biological and completely normal. But nobody taught most of us the full picture &mdash; so here it is, no filter, no shame. Because you deserve to feel fresh and confident all cycle long.',
    steps: [
      { icon:'&#x23F0;', title:'Change every 3-4 hours minimum', body:'Tampons especially should never exceed 8 hours due to TSS risk (toxic shock syndrome). Pads every 3-4 hours. On heavy days, more frequently. Do not push it &mdash; your health is worth the extra bathroom trip.' },
      { icon:'&#x1F6BF;', title:'Front to back, every single time', body:'Always wipe anterior to posterior. This prevents fecal bacteria from entering the vaginal and urethral areas, which is a leading cause of UTIs. Make it muscle memory.' },
      { icon:'&#x1F9FC;', title:'Water only, internally. Full stop.', body:'The vagina maintains its own pH balance. Scented soaps, douches, and feminine washes disrupt this ecosystem and often cause the very odor and infections they claim to prevent. Warm water externally is all you need.' },
      { icon:'&#x1F4A7;', title:'Period smell is biology, not uncleanliness', body:'Menstrual blood has a metallic, slightly musky odor due to iron content and bacteria contact with air. This is normal. A strong fishy or foul odor, however, can indicate BV (bacterial vaginosis) or infection &mdash; worth seeing your provider.' },
      { icon:'&#x1F9D8;', title:'Breathable fabrics only during your period', body:'Cotton underwear allows airflow which reduces moisture and odor. Avoid synthetic fabrics that trap heat. Period underwear in cotton or bamboo blends are an excellent option.' },
      { icon:'&#x1F33F;', title:'Holistic odor support', body:'Staying hydrated, eating less sugar, and adding probiotics to your routine can noticeably reduce period odor over time. What you put in your body shows up everywhere &mdash; including your cycle.' },
    ]
  },
  holistic: {
    title: 'Natural Period Hygiene &#x1F33F;',
    intro: 'Your body is not dirty. Period odor is natural, biological, and completely normal. Here is how to care for yourself during your cycle in a clean, toxin-free, body-positive way.',
    steps: [
      { icon:'&#x1F33F;', title:'Change every 3-4 hours naturally', body:'Reusable cloth pads and period underwear should be rinsed in cold water immediately after removal, then washed with gentle, fragrance-free soap. Cold water first &mdash; hot sets the stain.' },
      { icon:'&#x1F6BF;', title:'Front to back, always', body:'This is universal regardless of hygiene philosophy. Anterior to posterior wiping prevents bacteria migration and protects your urinary and vaginal health.' },
      { icon:'&#x1F4A7;', title:'Water is your best cleanse', body:'Your vagina is self-regulating. Organic coconut oil can be used externally only for comfort and moisture. Avoid all scented products, even natural ones, internally. Simple is best.' },
      { icon:'&#x1F9EA;', title:'pH-friendly support', body:'Organic unpasteurized apple cider vinegar diluted in a sitz bath can support external pH balance. Probiotics containing Lactobacillus strains support vaginal flora from the inside.' },
      { icon:'&#x1F343;', title:'Plant-based odor support', body:'Chlorophyll drops in water, taken daily, are a natural internal deodorizer many holistic practitioners recommend during menstruation. Spearmint tea also supports hormonal balance.' },
      { icon:'&#x267B;&#xFE0F;', title:'Sustainable period care', body:'Menstrual cups, discs, and cloth pads eliminate the chemicals found in conventional products. Sterilize your cup by boiling for 5-7 minutes between cycles. Store in a breathable cotton pouch.' },
    ]
  },
  emergency: {
    title: 'Quick Hygiene Tips &#x26A1;',
    intro: 'No time for long explanations &mdash; here is what you need to know RIGHT NOW to feel clean and comfortable.',
    steps: [
      { icon:'&#x23F0;', title:'Change your pad as soon as possible', body:'Old blood smells. New pad = instant refresh. Priority number one.' },
      { icon:'&#x1F6BF;', title:'Wipe front to back', body:'Always. Every time. Without exception.' },
      { icon:'&#x1F9FC;', title:'Rinse with warm water if you can', body:'Even a quick rinse makes a huge difference in freshness.' },
      { icon:'&#x1F9FB;', title:'Trash the used pad, never flush', body:'Wrap it up and bin it. Flushing causes blockages.' },
    ]
  },
  gifter: {
    title: 'What She Needs to Know &#x1F49C;',
    intro: 'If you are shopping for someone who is just starting out or going through a tough time, consider including some hygiene essentials. Here is a quick guide so you understand what she is dealing with.',
    steps: [
      { icon:'&#x1F381;', title:'Unscented wipes are a game-changer gift', body:'Unscented feminine wipes (for external use only) are perfect for on-the-go freshness. A thoughtful addition to any period gift.' },
      { icon:'&#x1F9FC;', title:'Include a note about changing regularly', body:'If gifting to a young person, a kind note reminding them to change every 3-4 hours can make a real difference. Knowledge is the best gift.' },
      { icon:'&#x1F49C;', title:'Period smell is normal &mdash; reassure her', body:'If she seems self-conscious, remind her that period odor is biological and completely normal. A little empathy goes a long way.' },
    ]
  }
};

function showHygieneGuide(version) {
  const v = version || state.version || 'adult';
  const data = HYGIENE_CONTENT[v] || HYGIENE_CONTENT.adult;

  const overlay = document.createElement('div');
  overlay.id = 'hygieneOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.97);overflow-y:auto;padding:1.5rem;';

  const stepsHtml = data.steps.map((s, i) =>
    '<div style="display:flex;align-items:flex-start;gap:0.875rem;margin-bottom:1.1rem;padding-bottom:1.1rem;border-bottom:1px solid var(--border);">' +
    '<span style="font-size:1.4rem;flex-shrink:0;margin-top:0.1rem;">' + s.icon + '</span>' +
    '<div><div style="font-size:0.9rem;font-weight:700;color:var(--text-primary);margin-bottom:0.3rem;">' + s.title + '</div>' +
    '<div style="font-size:0.845rem;color:var(--text-muted);line-height:1.65;">' + s.body + '</div></div>' +
    '</div>'
  ).join('');

  overlay.innerHTML =
    '<div style="max-width:480px;margin:0 auto;">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">' +
    '<h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);">' + data.title + '</h2>' +
    '<button id="closeHygieneBtn" style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer;">&#xD7;</button>' +
    '</div>' +
    '<div style="background:rgba(168,85,247,0.08);border-radius:16px;padding:1rem;margin-bottom:1.25rem;border:1px solid rgba(168,85,247,0.2);">' +
    '<p style="font-size:0.875rem;color:var(--text-muted);line-height:1.7;margin:0;">' + data.intro + '</p>' +
    '</div>' +
    stepsHtml +
    '<div style="background:rgba(34,197,94,0.08);border-radius:16px;padding:1rem;border:1px solid rgba(34,197,94,0.2);margin-top:0.5rem;">' +
    '<p style="font-size:0.8rem;color:var(--text-muted);line-height:1.6;margin:0;">&#x1F4AC; <strong>Remember:</strong> Period odor is normal and biological. Proper hygiene keeps you comfortable and confident. If you notice anything unusual &mdash; strong odor, unusual discharge, or discomfort &mdash; please talk to a healthcare provider. You deserve to feel your best.</p>' +
    '</div>' +
    '<button id="closeHygieneBtnBottom" style="width:100%;margin-top:1.25rem;padding:1rem;background:var(--accent);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">Got it! &#x1F49C;</button>' +
    '</div>';

  document.body.appendChild(overlay);
  document.getElementById('closeHygieneBtn').addEventListener('click', () => overlay.remove());
  document.getElementById('closeHygieneBtnBottom').addEventListener('click', () => overlay.remove());
}

/* =============================================
   JUST STARTING — INTERACTIVE FUNCTIONS
   ============================================= */
function toggleFiveW(btn) {
  const answer = btn.querySelector('.five-w-answer');
  const arrow  = btn.querySelector('span:last-child');
  if (!answer) return;
  const isOpen = answer.style.display !== 'none';
  answer.style.display = isOpen ? 'none' : 'block';
  if (arrow) arrow.textContent = isOpen ? '\u25BC' : '\u25B2';
}

function showWelcomeCard() {
  const existing = document.getElementById('welcomeCard');
  if (existing) existing.remove();

  const greeting = getPersonalizedGreeting(state.version);
  const v = state.version || 'adult';
  const gradients = {
    teen:      'linear-gradient(135deg,rgba(236,72,153,0.15),rgba(168,85,247,0.10))',
    adult:     'linear-gradient(135deg,rgba(168,85,247,0.15),rgba(124,58,237,0.08))',
    emergency: 'linear-gradient(135deg,rgba(239,68,68,0.15),rgba(220,38,38,0.08))',
    gifter:    'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(245,158,11,0.08))',
    holistic:  'linear-gradient(135deg,rgba(34,197,94,0.15),rgba(16,185,129,0.08))',
    starter:   'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(236,72,153,0.10))'
  };
  const borders = {
    teen:'rgba(236,72,153,0.25)', adult:'rgba(168,85,247,0.25)',
    emergency:'rgba(239,68,68,0.25)', gifter:'rgba(251,191,36,0.25)', holistic:'rgba(34,197,94,0.25)',
    starter:'rgba(251,191,36,0.3)'
  };
  const emojis = { teen:'🌸', adult:'💜', emergency:'⚡', gifter:'💝', holistic:'🌿' };

  const card = document.createElement('div');
  card.id = 'welcomeCard';
  card.style.cssText = 'margin:0.75rem 1rem 0;padding:1rem 1.25rem;background:' + (gradients[v]||gradients.adult) + ';border:1px solid ' + (borders[v]||borders.adult) + ';border-radius:20px;animation:fadeSlideIn 0.5s ease;display:flex;align-items:center;gap:0.75rem;';
  card.innerHTML = '<span style="font-size:1.5rem;flex-shrink:0;">' + (emojis[v]||'💜') + '</span>' +
    '<div style="flex:1;">' +
    '<div style="font-size:0.9rem;color:var(--text-primary);line-height:1.4;font-weight:500;">' + greeting + '</div>' +
    '</div>' +
    '<button onclick="this.parentElement.style.display=\'none\'" style="background:none;border:none;color:var(--text-muted);font-size:1.1rem;cursor:pointer;flex-shrink:0;padding:0.25rem;">&#xD7;</button>';

  const hero = document.querySelector('.home-hero');
  if (hero) hero.insertAdjacentElement('afterend', card);
}

/* =============================================
   SAVED ADDRESSES SYSTEM
   ============================================= */
const DEFAULT_ADDRESS_LABELS = ['Home', 'School', 'Work', 'Custom'];

function getSavedAddresses() {
  try {
    const m = document.cookie.match(/period_addresses=([^;]+)/);
    return m ? JSON.parse(decodeURIComponent(m[1])) : [];
  } catch { return []; }
}

function saveAddresses(addresses) {
  document.cookie = 'period_addresses=' + encodeURIComponent(JSON.stringify(addresses)) + ';max-age=946080000;path=/;SameSite=Lax';
}

function addSavedAddress(label, address) {
  const addresses = getSavedAddresses();
  const existing = addresses.findIndex(a => a.label === label);
  if (existing > -1) addresses[existing].address = address;
  else addresses.push({ label, address });
  saveAddresses(addresses);
}

function renderAddressDropdown() {
  const addresses = getSavedAddresses();
  const select = document.getElementById('savedAddressSelect');
  if (!select) return;
  select.innerHTML = '<option value="">-- Choose saved address --</option>' +
    addresses.map(a => `<option value="${a.address}">${a.label}: ${a.address.split(',')[0]}</option>`).join('') +
    '<option value="__new__">+ Add new address</option>';
  select.onchange = function() {
    const input = document.getElementById('addressInput');
    if (this.value === '__new__') {
      if (input) { input.value = ''; input.focus(); }
      this.value = '';
    } else if (this.value) {
      if (input) input.value = this.value;
      state.deliveryAddress = this.value;
    }
  };
}

function renderAddressLabelButtons() {
  const container = document.getElementById('addressLabelBtns');
  if (!container) return;
  container.innerHTML = DEFAULT_ADDRESS_LABELS.map(l =>
    `<button class="addr-label-btn" data-label="${l}" onclick="selectAddressLabel('${l}')" style="padding:0.4rem 0.9rem;border-radius:999px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-muted);font-size:0.8rem;cursor:pointer;transition:all 0.15s;">${l}</button>`
  ).join('');
}

function selectAddressLabel(label) {
  document.querySelectorAll('.addr-label-btn').forEach(b => {
    const on = b.dataset.label === label;
    b.style.background = on ? 'var(--accent)' : 'var(--surface-2)';
    b.style.color = on ? 'white' : 'var(--text-muted)';
    b.style.borderColor = on ? 'var(--accent)' : 'var(--border)';
  });
  const inp = document.getElementById('addressLabelCustom');
  if (inp) inp.style.display = label === 'Custom' ? 'block' : 'none';
  window._selectedAddressLabel = label;
}


/* =============================================
   SCHOOL PROFILE SYSTEM
   ============================================= */
function getSchoolProfiles() {
  try {
    const m = document.cookie.match(/period_schools=([^;]+)/);
    return m ? JSON.parse(decodeURIComponent(m[1])) : [];
  } catch { return []; }
}

function saveSchoolProfile(name, address, nurseContact) {
  const schools = getSchoolProfiles();
  const existing = schools.findIndex(s => s.name === name);
  const profile = { name, address, nurseContact, type: 'school' };
  if (existing > -1) schools[existing] = profile;
  else schools.push(profile);
  document.cookie = 'period_schools=' + encodeURIComponent(JSON.stringify(schools)) + ';max-age:946080000;path=/;SameSite=Lax';
  // Also add to regular addresses
  addSavedAddress('School: ' + name, address);
}

function renderSchoolProfileOption() {
  const addresses = getSavedAddresses();
  const schools = getSchoolProfiles();
  const allOptions = [
    ...addresses.map(a => ({ label: a.label, address: a.address, type: 'saved' })),
    ...schools.map(s => ({ label: s.name + ' (School)', address: s.address, type: 'school' }))
  ];
  return allOptions;
}

/* =============================================
   ORDER NOTES + NURSE NOTIFICATION + LOCATION
   ============================================= */

const NURSE_KEYWORDS = ['school', 'nurse', 'classroom', 'embarrassed', 'cant get up', 'student', 'teacher', 'office', 'period at school', 'accident at school'];
const WORK_KEYWORDS  = ['work', 'office', 'desk', 'meeting', 'conference', 'floor', 'reception', 'colleague', 'embarrassed at work', 'accident at work'];

function checkOrderNoteForFlag(note) {
  if (!note) return null;
  const lower = note.toLowerCase();
  if (NURSE_KEYWORDS.some(k => lower.includes(k))) return 'school';
  if (WORK_KEYWORDS.some(k => lower.includes(k))) return 'work';
  return null;
}

function showDiscreetDeliveryPopup(type) {
  const existing = document.getElementById('discreetPopup');
  if (existing) existing.remove();
  const msg = type === 'school'
    ? "We've got you. ?? This happens to everyone — there's nothing to be embarrassed about. We'll make sure your order reaches you discreetly through your school nurse. Breathe."
    : "It happens to the best of us. ?? No explanation needed. We'll make sure your delivery reaches you discreetly — wherever you are.";
  const overlay = document.createElement('div');
  overlay.id = 'discreetPopup';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(8,6,16,0.92);display:flex;align-items:center;justify-content:center;padding:1.5rem;';
  overlay.innerHTML =
    '<div style="max-width:340px;width:100%;text-align:center;display:flex;flex-direction:column;gap:1.25rem;background:#1A0D2E;border-radius:20px;padding:2rem;border:1px solid rgba(168,85,247,0.3);">' +
    '<div style="font-size:2.5rem;">??</div>' +
    '<div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:#EDE8FA;line-height:1.4;">' + msg + '</div>' +
    '<button id="discreetOk" style="width:100%;padding:1rem;background:linear-gradient(135deg,#A855F7,#7C3AED);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">Got it — thank you ??</button>' +
    '</div>';
  document.body.appendChild(overlay);
  document.getElementById('discreetOk').addEventListener('click', () => overlay.remove());
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) { reject('Geolocation not supported'); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err.message)
    );
  });
}

async function autoPopulateLocation() {
  const btn = document.getElementById('useLocationBtn');
  const input = document.getElementById('addressInput') || $('addressInput');
  if (btn) { btn.textContent = 'Getting location...'; btn.disabled = true; }
  try {
    const pos = await getUserLocation();
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.lat}&lon=${pos.lng}&format=json`);
    const data = await res.json();
    const addr = data.display_name || `${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`;
    if (input) input.value = addr;
    state.deliveryAddress = addr;
    if ($('addressPill')) {
      $('addressPill').innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + addr.split(',')[0];
    }
    showToast('Location detected ✓');
  } catch(e) {
    showToast('Could not get location — please enter manually');
  }
  if (btn) { btn.textContent = '?? Use My Location'; btn.disabled = false; }
}

function calcDistanceFee(distanceMiles) {
  if (distanceMiles <= 2) return 0;
  if (distanceMiles <= 5) return 3;
  if (distanceMiles <= 10) return 5;
  return 7;
}




/* =============================================
   PWA INSTALL EDUCATION
   ============================================= */
function showPWAEducation() {
  try { if (new URLSearchParams(window.location.search).get('for') === 'him') return; } catch(e) {}
  if (document.cookie.includes('period_pwa_edu')) return;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isAndroid = /android/i.test(navigator.userAgent);
  if (!isIOS && !isAndroid) return;
  setTimeout(function() {
    if (document.getElementById('pwaEduToast')) return;
    const steps = isIOS
      ? 'Tap the <strong>Share</strong> button then <strong>Add to Home Screen</strong>'
      : 'Tap the <strong>Menu</strong> button then <strong>Add to Home screen</strong>';
    const toast = document.createElement('div');
    toast.id = 'pwaEduToast';
    toast.style.cssText = 'position:fixed;bottom:1.5rem;left:1rem;right:1rem;z-index:9990;background:var(--surface);border:1px solid rgba(168,85,247,0.3);border-radius:16px;padding:1rem;box-shadow:0 8px 32px rgba(0,0,0,0.3);animation:fadeSlideIn 0.4s ease;';
    toast.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:0.75rem;">
        <span style="font-size:1.5rem;flex-shrink:0;">&#x1F4F1;</span>
        <div style="flex:1;">
          <div style="font-size:0.875rem;font-weight:700;color:var(--text-primary);margin-bottom:0.25rem;">Add Period. to your home screen</div>
          <div style="font-size:0.8rem;color:var(--text-muted);line-height:1.5;">${steps} for the best experience &amp; push notifications.</div>
        </div>
        <button id="pwaEduClose" style="background:none;border:none;color:var(--text-muted);font-size:1.2rem;cursor:pointer;flex-shrink:0;">&#xD7;</button>
      </div>`;
    document.body.appendChild(toast);
    document.getElementById('pwaEduClose').addEventListener('click', function() {
      toast.remove();
      document.cookie = 'period_pwa_edu=1;max-age=946080000;path=/;SameSite=Lax';
    });
  }, 8000);
}

/* =============================================
   COMING SOON + WAITLIST SYSTEM
   ============================================= */
const COMING_SOON_MODE = true;

function showComingSoonBanner() {
  try { if (new URLSearchParams(window.location.search).get('for') === 'him') return; } catch(e) {}
  if (!COMING_SOON_MODE) return;
  if (document.getElementById('comingSoonBanner')) return;
  const banner = document.createElement('div');
  banner.id = 'comingSoonBanner';
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9998;background:linear-gradient(135deg,#7C3AED,#A855F7);padding:0.6rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:0.5rem;';
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.5rem;flex:1;">
      <span style="font-size:0.85rem;color:white;font-weight:600;">&#x1F451; Launch coming soon! Be the first to know.</span>
    </div>
    <button id="waitlistBannerBtn" style="background:white;color:#7C3AED;border:none;border-radius:999px;padding:0.35rem 0.9rem;font-size:0.78rem;font-weight:700;cursor:pointer;white-space:nowrap;">Join Waitlist</button>
    <button id="bannerClose" style="background:none;border:none;color:rgba(255,255,255,0.7);font-size:1.2rem;cursor:pointer;padding:0 0.25rem;">&#xD7;</button>`;
  document.body.insertBefore(banner, document.body.firstChild);
  document.body.style.paddingTop = '44px';
  document.getElementById('waitlistBannerBtn').addEventListener('click', showWaitlistModal);
  document.getElementById('bannerClose').addEventListener('click', function() {
    banner.style.display = 'none';
    document.body.style.paddingTop = '0';
  });
}

function showWaitlistModal() {
  let modal = document.getElementById('waitlistModal');
  if (modal) { modal.style.display = 'flex'; return; }
  modal = document.createElement('div');
  modal.id = 'waitlistModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.95);display:flex;align-items:center;justify-content:center;padding:1.5rem;';
  modal.innerHTML = `
    <div style="max-width:340px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:1px solid rgba(168,85,247,0.3);text-align:center;">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">&#x1F451;</div>
      <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">Be First in Line</h2>
      <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6;margin-bottom:1.25rem;">Period. is launching soon. Join the waitlist and be the first to know when we go live. Early members get an exclusive discount. &#x1F49C;</p>
      <input id="waitlistEmail" type="email" placeholder="your@email.com" style="width:100%;height:48px;padding:0 1rem;background:var(--surface-2);border:1.5px solid var(--border);border-radius:12px;font-size:0.9rem;color:var(--text-primary);outline:none;margin-bottom:0.75rem;box-sizing:border-box;"/>
      <button id="waitlistSubmitBtn" style="width:100%;height:48px;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-bottom:0.75rem;">Count Me In &#x2728;</button>
      <button id="waitlistCloseBtn" style="background:none;border:none;color:var(--text-muted);font-size:0.85rem;cursor:pointer;">maybe later</button>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById('waitlistSubmitBtn').addEventListener('click', submitWaitlist);
  document.getElementById('waitlistCloseBtn').addEventListener('click', function() {
    modal.style.display = 'none';
  });
  document.getElementById('waitlistEmail').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') submitWaitlist();
  });
}

function submitWaitlist() {
  const input = document.getElementById('waitlistEmail');
  const email = input ? input.value.trim() : '';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (input) { input.style.borderColor = '#ef4444'; setTimeout(function() { input.style.borderColor = ''; }, 2000); }
    showToast('Please enter a valid email');
    return;
  }
  if (_firebaseFs) {
    _firebaseFs.collection('waitlist').add({
      email: email,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      source: 'waitlist_modal'
    }).catch(function(e) { console.warn('Waitlist save failed:', e); });
  }
  if (EMAILJS_CONFIG && typeof emailjs !== 'undefined') {
    try {
      emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        to_email: email, to_name: 'there',
        life_stage: 'waitlist', version: 'waitlist',
        store_url: 'https://perioddelivers.com'
      }).catch(function(e) { console.warn('EmailJS failed:', e); });
    } catch(e) {}
  }
  const modal = document.getElementById('waitlistModal');
  if (modal) modal.innerHTML = `
    <div style="max-width:340px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:1px solid rgba(168,85,247,0.3);text-align:center;">
      <div style="font-size:3rem;margin-bottom:1rem;">&#x1F451;</div>
      <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">You are on the list!</h2>
      <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6;margin-bottom:1.25rem;">We will email you the moment Period. launches. Thank you for believing in us. &#x1F49C;</p>
      <button id="waitlistDoneBtn" style="width:100%;height:48px;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">Close</button>
    </div>`;
  const doneBtn = document.getElementById('waitlistDoneBtn');
  if (doneBtn) doneBtn.addEventListener('click', function() {
    const m = document.getElementById('waitlistModal');
    if (m) m.style.display = 'none';
  });
}

function showComingSoonCheckoutBlock() {
  if (!COMING_SOON_MODE) return false;
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.95);display:flex;align-items:center;justify-content:center;padding:1.5rem;';
  overlay.innerHTML = `
    <div style="max-width:340px;width:100%;background:var(--surface);border-radius:24px;padding:2rem;border:1px solid rgba(168,85,247,0.3);text-align:center;">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">&#x1F6A7;</div>
      <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">We are not live yet!</h2>
      <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6;margin-bottom:1.25rem;">Period. is launching soon. Join the waitlist to be first in line and get an exclusive early-bird discount. &#x1F49C;</p>
      <button id="csWaitlistBtn" style="width:100%;height:48px;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-bottom:0.75rem;">Join the Waitlist &#x2728;</button>
      <button id="csBackBtn" style="background:none;border:none;color:var(--text-muted);font-size:0.85rem;cursor:pointer;">Go back</button>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('csWaitlistBtn').addEventListener('click', function() {
    overlay.remove();
    showWaitlistModal();
  });
  document.getElementById('csBackBtn').addEventListener('click', function() {
    overlay.remove();
  });
  return true;
}


function toggleDiscreetDelivery() {
  const track = document.getElementById('discreetToggleTrack');
  const thumb = document.getElementById('discreetToggleThumb');
  const chk   = document.getElementById('discreetToggle');
  if (!track) return;
  const on = !chk.checked;
  chk.checked = on;
  track.style.background = on ? '#A855F7' : 'var(--surface-3,#333)';
  if (thumb) thumb.style.transform = on ? 'translateX(20px)' : 'translateX(0)';
  if (on) showDiscreetDeliveryPopup(state.version === 'teen' ? 'school' : 'work');
  state.discreetDelivery = on;
}

function placeOrder() {
  const { subtotal, delivery, discount, total } = getOrderTotal();


  if (subtotal > 0 && subtotal < 15) {
    showToast(`Minimum order is $15.00 — add ${fmt(15 - subtotal)} more`);
    return;
  }

  // Require delivery address
  if (!state.deliveryAddress) {
    openAddressModal();
    showToast('Please set a delivery address first ??');
    return;
  }

  // Stripe connected → open secure checkout modal
  if (_stripe) { openStripeCheckout(); return; }


  // Pre-launch: save order to Firestore + show success
  const orderItems = Object.entries(state.cart).map(([id, qty]) => ({ id, qty }));
  if (_firebaseFs && orderItems.length) {
    _firebaseFs.collection('orders').add({
      items:      orderItems,
      subtotal,
      delivery,
      discount,
      total,
      promo:      state.appliedPromo ? state.appliedPromo.code : null,
      type:       state.version || 'adult',
      device_id:  getDeviceId(),
      address:    state.deliveryAddress || null,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.warn('[Period.] Firestore order save failed:', e));
  }


  state.cart         = {};
  state.appliedPromo = null;
  updateCartBadge();
  renderCart();
  if (state.shopMode === 'products') renderProductGrid();
  closeCart();
  // Fix ETA message based on order type
  const etaEl = document.querySelector('#orderSuccess .success-eta');
  if (etaEl) {
    if (state.version === 'emergency') {
      etaEl.textContent = '&#x1F6F5; Arriving in 30–45 minutes';
    } else {
      etaEl.textContent = '&#x1F4E6; Arriving in 1–3 business days';
    }
  }
  $('orderSuccess').classList.add('open');
  document.body.style.overflow = 'hidden';
}


function confirmSubscribe() {
  const plan = PLANS[state.selectedPlan];
  if (!plan) return;
  $('subscribeSuccessEta').textContent = `👑 ${plan.name} Plan — ${fmt(plan.price)}/month`;
  $('subscribeSuccessSub').textContent = `Your first ${plan.name} care package (${careBoxCount()} items) ships within 3–5 business days. You'll receive a confirmation shortly.`;


  // Save subscription to Firestore
  if (_firebaseFs && plan) {
    _firebaseFs.collection('subscriptions').add({
      plan:       plan.name,
      price:      plan.price,
      items:      Object.entries(state.careBox || {}).map(([id, qty]) => ({ id, qty })),
      version:    state.version || 'adult',
      device_id:  getDeviceId(),
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.warn('[Period.] Firestore subscription save failed:', e));
  }


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
  renderAddressDropdown();
  renderAddressLabelButtons();
  selectAddressLabel('Home');
  setTimeout(() => { const inp = $('addressInput'); if (inp) inp.focus(); }, 200);
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
  // Check for ?for=him FIRST before any female experience loads
  try {
    const _urlParams = new URLSearchParams(window.location.search);
    if (_urlParams.get('for') === 'him') {
      initTheme();
      registerSW();
      navigateGuys();
      return; // Stop here — don't run any female experience code
    }
  } catch(e) {}

  initVersion();
  initTheme();
  registerSW();
  showComingSoonBanner();
  showPWAEducation();
  // Show quiz after version picked if not done yet
  const _origDismiss = dismissVersionPicker;
  dismissVersionPicker = function() {
    _origDismiss();
    if (!isQuizDone() && state.version !== 'emergency' && state.version !== 'starter') {
      setTimeout(showQuiz, 1200);
    }
  };


  // Home navigation
  $('homeLogo')      .addEventListener('click', () => navigate('home'));
  // Always wire version badge switcher
  const vBadge = $('versionBadge');
  if (vBadge) vBadge.addEventListener('click', showVersionPicker);
   // Init symptom log
  initSymptomLog();
  $('heroOrderNow').addEventListener('click', () => {
    navigate('shop');
    setTimeout(() => {
      if (state.version === 'emergency') {
        renderEmergencyShop();
      } else if ($('heroOrderNowText') && ($('heroOrderNowText').textContent.includes('Urgent') || $('heroOrderNowText').textContent.includes('NOW') || $('heroOrderNowText').textContent.includes('Natural'))) {
        const banner = document.querySelector('.delivery-banner');
        if (banner) banner.classList.add('delivery-banner--urgent');
        const deliveryTime = document.querySelector('.delivery-time');
        if (deliveryTime) deliveryTime.textContent = 'Under 30 min delivery';
        const deliveryLabel = document.querySelector('.delivery-label');
        if (deliveryLabel) deliveryLabel.textContent = '🚨 Urgent Delivery';
        showCategoriesMode();
      }
    }, 100);
  });
  $('heroCarePackage').addEventListener('click', () => {
    if (state.version === 'gifter') {
      const choice = confirm('Would you like to send a one-time gift?\n\nClick OK for a One-Time Gift Order\nClick Cancel for a Monthly Gift Subscription');
      if (choice) {
        navigate('shop');
        showToast('Browse products and add to cart for a one-time gift 💝');
      } else {
        navigate('subscribe');
      }
    } else {
      navigate('subscribe');
    }
  });
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
  const addrSaveEl = $('addressSave');
  if (addrSaveEl) addrSaveEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const val = $('addressInput').value.trim();
    if (!val) { showToast('Please enter an address'); return; }
    state.deliveryAddress = val;
    // Save with label
    const label = window._selectedAddressLabel || 'Home';
    const customLabelInput = document.getElementById('addressLabelCustom');
    const finalLabel = (label === 'Custom' && customLabelInput && customLabelInput.value.trim())
      ? customLabelInput.value.trim() : label;
    addSavedAddress(finalLabel, val);
    renderAddressDropdown();
    renderAddressLabelButtons();
    const shortAddr = val.split(',')[0];
    $('addressPill').innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + shortAddr;
    showToast(finalLabel + ' address saved ✓');
    closeAddressModal();
  });


  // Search
  const searchInput = $('searchInput');
  let debounce;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.searchQuery = searchInput.value.trim();
      if (state.searchQuery && state.shopMode === 'categories') {
        // Auto-switch to 'all products' mode when user starts searching
        state.activeCategory = 'all';
        showProductsMode('all');
        if ($('shopBcTitle')) $('shopBcTitle').textContent = '🔍 Search Results';
        if ($('sectionTitle')) $('sectionTitle').textContent = 'Search Results';
      } else if (state.shopMode === 'products') {
        renderProductGrid();
      }
    }, 200);
  });


  // Keyboard ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeAddressModal(); closeNewsletterModal(); closeWhyModal(); if ($('nicknameModal') && $('nicknameModal').classList.contains('open')) { $('nicknameModal').classList.remove('open'); $('nicknameOverlay').classList.remove('open'); } }
  });


  // Newsletter
  if ($('openNewsletterBtn'))  $('openNewsletterBtn').addEventListener('click', showNewsletterModal);
  if ($('nlCloseBtn'))         $('nlCloseBtn').addEventListener('click', closeNewsletterModal);
  if ($('nlSubmitBtn'))        $('nlSubmitBtn').addEventListener('click', subscribeNewsletter);


  // Promo code
  if ($('promoApplyBtn'))  $('promoApplyBtn').addEventListener('click', applyPromoCode);
  if ($('promoRemoveBtn')) $('promoRemoveBtn').addEventListener('click', removePromoCode);
  if ($('promoInput'))     $('promoInput').addEventListener('keydown', e => { if (e.key === 'Enter') applyPromoCode(); });


  // Stripe checkout modal
  if ($('coBackBtn'))  $('coBackBtn').addEventListener('click',  closeStripeCheckout);
  if ($('coOverlay'))  $('coOverlay').addEventListener('click',  closeStripeCheckout);
  if ($('coPayBtn'))   $('coPayBtn').addEventListener('click',   processStripePayment);
  if ($('nlOpenTracker'))      $('nlOpenTracker').addEventListener('click', () => { closeNewsletterModal(); navigate('tracker'); });
  if ($('newsletterModal'))    $('newsletterModal').addEventListener('click', e => { if (e.target === $('newsletterModal')) closeNewsletterModal(); });
  if ($('nlEmailInput')) {
    $('nlEmailInput').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); subscribeNewsletter(); } });
    $('nlEmailInput').addEventListener('keyup',   e => { if (e.key === 'Enter') { e.preventDefault(); subscribeNewsletter(); } });
  }


  // Newsletter life-stage buttons (use event delegation)
  const stageRow = $('nlStageRow');
  if (stageRow) stageRow.addEventListener('click', e => {
    const btn = e.target.closest('.nl-stage-btn');
    if (!btn) return;
    _nlSelectedStage = btn.dataset.stage;
    $$('.nl-stage-btn').forEach(b => b.classList.toggle('active', b === btn));
  });


  // Tracker access button
  if ($('trackerAccessBtn')) $('trackerAccessBtn').addEventListener('click', () => {
    if (isNewsletterSubscribed()) navigate('tracker');
    else showNewsletterModal();
  });


  // Tracker back / calendar nav / log buttons
  if ($('trackerBack')) $('trackerBack').addEventListener('click', () => navigate('home'));
   // Tracker widget buttons
  if ($('twUnlockBtn')) $('twUnlockBtn').addEventListener('click', showNewsletterModal);
  if ($('twLogBtn')) $('twLogBtn').addEventListener('click', () => {
    if (!isNewsletterSubscribed()) { showNewsletterModal(); return; }
    logPeriodStart();
    updateTrackerWidget();
  });
  if ($('trackerWidgetCard')) $('trackerWidgetCard').addEventListener('click', (e) => {
    if (e.target.closest('#twUnlockBtn') || e.target.closest('#twLogBtn')) return;
    if (!isNewsletterSubscribed()) { showNewsletterModal(); return; }
    navigate('tracker');
  });


  // Floating tracker button
  if ($('floatingTrackerBtn')) $('floatingTrackerBtn').addEventListener('click', () => {
    if (!isNewsletterSubscribed()) { showNewsletterModal(); return; }
    navigate('tracker');
  });
  if ($('trackerPrev')) $('trackerPrev').addEventListener('click', () => {
    if (!trackerDisplayMonth) return;
    let { year, month } = trackerDisplayMonth;
    if (--month < 0) { month = 11; year--; }
    trackerDisplayMonth = { year, month };
    const d = getTrackerData();
    const al = calcAvgCycleLength(d.cycles), ad = calcAvgDuration(d.cycles);
    renderTrackerCalendar(d.cycles, al, ad, getNextPeriodDate(d.cycles, al), todayStr());
    const ml = $('trackerMonthLabel');
    const MN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    if (ml) ml.textContent = MN[month] + ' ' + year;
  });
  if ($('trackerNext')) $('trackerNext').addEventListener('click', () => {
    if (!trackerDisplayMonth) return;
    let { year, month } = trackerDisplayMonth;
    if (++month > 11) { month = 0; year++; }
    trackerDisplayMonth = { year, month };
    const d2 = getTrackerData();
    const al2 = calcAvgCycleLength(d2.cycles), ad2 = calcAvgDuration(d2.cycles);
    renderTrackerCalendar(d2.cycles, al2, ad2, getNextPeriodDate(d2.cycles, al2), todayStr());
    const ml2 = $('trackerMonthLabel');
    const MN2 = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    if (ml2) ml2.textContent = MN2[month] + ' ' + year;
  });
  if ($('logStart')) $('logStart').addEventListener('click', logPeriodStart);
   // Seed date button
  if ($('seedDateBtn')) $('seedDateBtn').addEventListener('click', () => {
    const input = $('seedDateInput');
    if (!input || !input.value) { showToast('Pick a date first'); return; }
    const dateStr = input.value;
    if (dateStr > todayStr()) { showToast("Date can't be in the future"); return; }
    const data = getTrackerData();
    const alreadyExists = data.cycles.some(c => c.s === dateStr);
    if (alreadyExists) { showToast('That date is already logged'); return; }
    data.cycles.push({ s: dateStr, e: null });
    data.cycles.sort((a, b) => (a.s < b.s ? -1 : 1));
    data.avgLength = calcAvgCycleLength(data.cycles);
    setTrackerData(data);
    renderTracker();
    showToast('Last period date saved ✓ Predictions updated!');
  });
  if ($('logEnd'))   $('logEnd').addEventListener('click', logPeriodEnd);


  // Reminder buttons (wired in initReminders)
  initReminders();


  // Holistic shop shortcut
  if ($('cardHolistic')) $('cardHolistic').addEventListener('click', () => {
    navigate('shop');
    showProductsMode('holistic');
  });


  // Back to categories from products
  if ($('shopBackCat')) $('shopBackCat').addEventListener('click', showCategoriesMode);


  // Legal modal
  if ($('openPrivacy'))    $('openPrivacy').addEventListener('click',   () => openLegal('privacy'));
  if ($('openTerms'))      $('openTerms').addEventListener('click',     () => openLegal('terms'));
  if ($('legalModalClose')) $('legalModalClose').addEventListener('click', closeLegal);
  if ($('legalOverlay'))   $('legalOverlay').addEventListener('click',  closeLegal);


  // Apple Pay + Google Pay (express checkout)
  if ($('applePayBtn'))  $('applePayBtn').addEventListener('click',  () => handleExpressCheckout('apple'));
  if ($('googlePayBtn')) $('googlePayBtn').addEventListener('click', () => handleExpressCheckout('google'));


  // Why Period modal
  if ($('heroWhyBtn'))   $('heroWhyBtn').addEventListener('click', openWhyModal);
  if ($('whyCloseBtn'))  $('whyCloseBtn').addEventListener('click', closeWhyModal);
  if ($('whyOverlay'))   $('whyOverlay').addEventListener('click', closeWhyModal);
  if ($('whyShopBtn'))   $('whyShopBtn').addEventListener('click', () => { closeWhyModal(); navigate('shop'); });

  // The Tea, Period. nav buttons — wired here so they survive version switching
  const _openScoop = () => {
    navigate('cycleScoopView');
    renderScoopFacts();
    renderScoopFaq();
    initCycleScoopTabs();
  };
  if ($('heroScoopBtn'))   $('heroScoopBtn').addEventListener('click', _openScoop);
  if ($('teenScoopLink'))  $('teenScoopLink').addEventListener('click', _openScoop);
  if ($('cycleScoopBack')) $('cycleScoopBack').addEventListener('click', () => navigate('home'));

  // Newsletter hero button — re-wire here in case starter mode hid/restored it
  if ($('heroNewsletterBtn')) {
    $('heroNewsletterBtn').addEventListener('click', () => {
      showNewsletterModal();
    });
  }


  if ($('commBackBtn'))   $('commBackBtn').addEventListener('click', renderCommunityHome);
  if ($('commPostBtn'))   $('commPostBtn').addEventListener('click', submitCommPost);
  if ($('commInput'))     $('commInput').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitCommPost(); } });
  if ($('nicknameConfirm')) $('nicknameConfirm').addEventListener('click', confirmNickname);
  if ($('nicknameInput'))   $('nicknameInput').addEventListener('keydown', e => { if (e.key === 'Enter') confirmNickname(); });
  if ($('navCommunity'))  $('navCommunity').addEventListener('click', () => navigate('community'));
  if ($('heroCommBar'))   $('heroCommBar').addEventListener('click', () => navigate('community'));


  // Monthly upsell (post-order)
  if ($('upsellYes')) $('upsellYes').addEventListener('click', () => {
    $('orderSuccess').classList.remove('open');
    document.body.style.overflow = '';
    navigate('subscribe');
  });
  if ($('upsellNo')) $('upsellNo').addEventListener('click', () => {
    $('orderSuccess').classList.remove('open');
    document.body.style.overflow = '';
    navigate('home');
  });


  // Fetch live trends + init tracker button state
  fetchTrends();
  updateTrackerBtn();


  // Initial cart render
  renderCart();
  updateCartBadge();
}


/* =============================================
   STRIPE CHECKOUT MODAL
   ============================================= */
function openStripeCheckout() {
  const items = Object.entries(state.cart).filter(([,q]) => q > 0);
  if (!items.length) { showToast('Add items to your cart first ✨'); return; }


  const { subtotal, delivery, discount, total } = getOrderTotal();


  // Order notes section — add before summary
  // Build order summary
  const sumEl = $('coSummary');
  if (sumEl) {
    const itemLines = items.map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === +id);
      return `<div class="co-sum-row"><span>${p.emoji} ${p.name}${qty > 1 ? ` ×${qty}` : ''}</span><span>${fmt(p.price * qty)}</span></div>`;
    }).join('');
    const promoLine = (discount > 0 && state.appliedPromo)
      ? `<div class="co-sum-row co-sum-discount"><span>Code: ${state.appliedPromo.code}</span><span>−${fmt(discount)}</span></div>`
      : '';
    const delivLine = delivery === 0
      ? `<div class="co-sum-row co-sum-free"><span>Delivery</span><span>FREE 🎉</span></div>`
      : `<div class="co-sum-row"><span>Delivery 🛵</span><span>${fmt(delivery)}</span></div>`;
    sumEl.innerHTML = `
      <div class="co-sum-items">${itemLines}</div>
      <div class="co-sum-divider"></div>
      ${promoLine}${delivLine}
      <div class="co-sum-row co-sum-total"><span>Total</span><span>${fmt(total)}</span></div>`;
  }


  const payAmt = $('coPayAmt');
  if (payAmt) payAmt.textContent = fmt(total);


  // Mount Stripe Card Element (once per session)
  if (_stripe && !state._stripeCardMounted) {
    const elements = _stripe.elements();
    state._stripeCard = elements.create('card', {
      style: {
        base: {
          color: '#F3F0FF',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '16px',
          '::placeholder': { color: '#7C69A0' }
        },
        invalid: { color: '#F87171' }
      }
    });
    state._stripeCard.mount('#stripeCardElement');
    state._stripeCard.addEventListener('change', ev => {
      const err = $('stripeCardError');
      if (err) err.textContent = ev.error ? ev.error.message : '';
    });
    state._stripeCardMounted = true;
  }


  // Inject order notes + discreet delivery toggle
  const coBody = document.querySelector('.co-body');
  const existingNotesCheck = document.getElementById('orderNotesSection');
  if (coBody && !existingNotesCheck) {
    const notesDiv = document.createElement('div');
    notesDiv.id = 'orderNotesSection';
    notesDiv.style.cssText = 'margin-bottom:1rem;padding:1rem;background:var(--surface-2);border-radius:12px;';
    notesDiv.innerHTML =
      '<div style="font-size:0.8rem;font-weight:600;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">Order Notes (optional)</div>' +
      '<textarea id="orderNoteInput" placeholder="Special instructions? e.g. leave at front desk, knock loudly, fragrance-free only..." style="width:100%;height:70px;padding:0.75rem;background:var(--surface);border:1.5px solid var(--border);border-radius:10px;font-size:0.85rem;color:var(--text-primary);resize:none;outline:none;margin-bottom:0.75rem;" maxlength="300"></textarea>' +
      '<div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(168,85,247,0.08);border-radius:10px;border:1px solid rgba(168,85,247,0.2);">' +
      '<div style="position:relative;flex-shrink:0;">' +
      '<input type="checkbox" id="discreetToggle" style="opacity:0;position:absolute;width:0;height:0;">' +
      '<div id="discreetToggleTrack" onclick="toggleDiscreetDelivery()" style="width:44px;height:24px;background:var(--surface-3,#333);border-radius:999px;cursor:pointer;position:relative;transition:background 0.2s;">' +
      '<div id="discreetToggleThumb" style="position:absolute;top:2px;left:2px;width:20px;height:20px;background:white;border-radius:50%;transition:transform 0.2s;"></div>' +
      '</div></div>' +
      '<div><div style="font-size:0.875rem;font-weight:600;color:var(--text-primary);">?? Discreet delivery &mdash; bring it to me</div>' +
      '<div style="font-size:0.75rem;color:var(--text-muted);">School nurse, work reception, or similar</div></div>' +
      '</div>';
    const coSummary = document.getElementById('coSummary');
    if (coSummary) coBody.insertBefore(notesDiv, coSummary);
  }

  const modal   = $('coModal');
  const overlay = $('coOverlay');
  if (modal)   { modal.style.display = ''; setTimeout(() => modal.classList.add('open'), 10); }
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}


function closeStripeCheckout() {
  const modal = $('coModal'), overlay = $('coOverlay');
  if (modal)   modal.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  setTimeout(() => { if (modal) modal.style.display = 'none'; }, 300);
  document.body.style.overflow = '';
}


async function processStripePayment() {
  if (!_stripe || !state._stripeCard) return;
  const btn = $('coPayBtn');
  if (btn) { btn.disabled = true; btn.innerHTML = 'Processing…'; }


  try {
    const cardName = ($('coCardName') || {}).value || '';
    // ── PRODUCTION FLOW ──────────────────────────────────────────
    // 1. POST to your backend → create a Stripe PaymentIntent
    //    Returns: { clientSecret: 'pi_xxx_secret_xxx' }
    // 2. const { error, paymentIntent } = await _stripe.confirmCardPayment(
    //      clientSecret,
    //      { payment_method: { card: state._stripeCard, billing_details: { name: cardName } } }
    //    );
    // 3. If error → show err.message; else → placeOrder()
    // ─────────────────────────────────────────────────────────────
    throw new Error('BACKEND_NEEDED'); // remove once backend is wired
  } catch(e) {
    const errEl = $('stripeCardError');
    if (errEl) errEl.textContent = e.message === 'BACKEND_NEEDED'
      ? 'Connect your Stripe backend to process payments (see code comments).'
      : (e.message || 'Payment failed — try again');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `Pay <span id="coPayAmt">${$('coPayAmt')?.textContent || ''}</span>`;
    }
  }
}


/* =================================================================
   FIREBASE CONFIG  —  Community Posts Storage
   =================================================================
   HOW TO SET UP (takes about 10 minutes, totally free):


   STEP 1 → Go to: https://console.firebase.google.com
   STEP 2 → Click "Add project" → name it "period-app"
   STEP 3 → Click the </> Web icon to add a web app
   STEP 4 → Copy the firebaseConfig object they show you
   STEP 5 → Paste it below, replacing "null" after FIREBASE_CONFIG =
   STEP 6 → In Firebase: Build → Realtime Database → Create database
             Choose "Start in test mode" (free Spark plan)


   Until you set this up, community posts save to the user's device
   (still works — Firebase just adds cross-device sharing later).
   ================================================================= */
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDjpDjka-euNeTPkwRE62lqojzGNzPSADI",
  authDomain:        "period-delivers.firebaseapp.com",
  projectId:         "period-delivers",
  storageBucket:     "period-delivers.firebasestorage.app",
  messagingSenderId: "1076074649022",
  appId:             "1:1076074649022:web:3538dcd4b424bde16095ef"
};


let _firebaseDb = null;
let _firebaseFs = null;
(function initFirebase() {
  if (!FIREBASE_CONFIG) return;
  try {
    if (typeof firebase === 'undefined') return;
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    _firebaseDb = firebase.database();
    _firebaseFs = firebase.firestore();
  } catch(e) { console.warn('[Period.] Firebase init failed:', e); }
})();


/* =================================================================
   EMAILJS CONFIG  —  Newsletter Send (Free: 200 emails/month)
   =================================================================
   HOW TO SET UP (takes about 5 minutes, totally free):


   STEP 1 → Go to: https://www.emailjs.com → Create free account
   STEP 2 → Email Services → Add Service → connect your Gmail
   STEP 3 → Email Templates → Create Template
             Subject: "Welcome to the . community! 💜"
             Body: paste the template below
   STEP 4 → Copy your Service ID, Template ID, and Public Key
   STEP 5 → Paste them below


   --- NEWSLETTER TEMPLATE (paste into EmailJS template body) ---
   Hi there!


   Welcome to the . community. 💜


   You just unlocked your free Period Tracker — use it to log
   your cycle, predict your next period, and get gentle reminders.


   Every month you'll receive:
   • Cycle education tailored to your phase
   • Trending product picks
   • Community support + exclusive drops


   Shop now: https://perioddelivers.com


   With love,
   The . Team  |  Period. LLC — Cleveland, OH
   Unsubscribe: reply "unsubscribe" to this email
   ---------------------------------------------------------------


   Until you set this up, subscribers are saved and you can
   email them manually from your dashboard.
   ================================================================= */
const EMAILJS_CONFIG = {
  serviceId:  'service_915qjs4',
  templateId: 'template_22llltm',
  publicKey:  'QcMi8VDsTqRYe59_D'
};


/* =================================================================
   STRIPE CONFIG  —  Card Payments, Apple Pay, Google Pay
   =================================================================
   HOW TO ACTIVATE (10 min — free Stripe account):


   STEP 1 → https://dashboard.stripe.com/register → create account
   STEP 2 → Add your bank account (needed for payouts)
   STEP 3 → Dashboard → Developers → API Keys
   STEP 4 → Copy Publishable Key (starts with pk_live_... or pk_test_...)
   STEP 5 → Replace null below:
             { publishableKey: 'pk_live_...' }


   Apple Pay + Google Pay: go live automatically once domain is verified.
   Stripe Dashboard → Settings → Payment Methods → Apple Pay → Add domain
   ================================================================= */
const STRIPE_CONFIG = null; // ← { publishableKey: 'pk_live_...' }


let _stripe = null;
if (STRIPE_CONFIG && typeof Stripe !== 'undefined') {
  try { _stripe = Stripe(STRIPE_CONFIG.publishableKey); }
  catch(e) { console.warn('[Period.] Stripe init failed:', e); }
}




if (EMAILJS_CONFIG && typeof emailjs !== 'undefined') {
  try { emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey }); } catch(e) { console.warn('[Period.] EmailJS init failed:', e); }
}


/* =============================================
   COMMUNITY — NICKNAME + GREETING + DISCUSSION
   ============================================= */


const COMMUNITY_NICKNAME_KEY = 'period_nickname';
const COMMUNITY_POSTS_KEY    = 'period_community_posts';


const COMMUNITY_TOPICS = [
  { id:'period-week',    title:'Period Week Talk',       emoji:'🩸', desc:'You\'re not alone this week. Share how you\'re feeling, ask for support, or just vent.' },
  { id:'self-care',      title:'Self-Care Rituals',      emoji:'💆', desc:'What\'s working for you? Drop your go-to rituals, products, or comfort habits.' },
  { id:'ask-anything',   title:'Ask Anything',           emoji:'💬', desc:'No question is too small. No judgment. We\'ve all been there.' },
  { id:'wins',           title:'Wins & Encouragement',  emoji:'👑', desc:'Celebrate something — big or tiny. Uplift someone who needs it today.' },
  { id:'reviews',        title:'Product Reviews',        emoji:'⭐', desc:'Which products are actually worth it? Help the community shop smarter.' },
];


const COMMUNITY_SEED = {
  'period-week': [
    { id:'s1', author:'Anonymous Queen',   time:'3h ago',  text:'Genuinely crying at a commercial right now and I have zero explanation. We are in it today 😭 Anyone else?', likes:24 },
    { id:'s2', author:'TheaRose',          time:'5h ago',  text:'Day 2 is always my worst. Heat patches + dark chocolate + this app = survival kit. That is my entire plan today.', likes:18 },
    { id:'s3', author:'JoyfulCycles',      time:'1d ago',  text:'Reminder that feeling EVERYTHING this week is literally hormonal — estrogen drops, serotonin drops with it. You are not being dramatic. You are being accurate. 💜', likes:41 },
  ],
  'self-care': [
    { id:'s4', author:'NaturalQueen',      time:'2h ago',  text:'Castor oil pack on my lower abdomen last night + a heating pad on top. Slept through the whole night with no cramps for the first time in YEARS. Try it.', likes:35 },
    { id:'s5', author:'WellnessWitch',     time:'6h ago',  text:'Magnesium glycinate two weeks before your period. Please trust me on this. It changed everything about my luteal phase.', likes:52 },
  ],
  'ask-anything': [
    { id:'s6', author:'FirstTimer2024',    time:'1h ago',  text:'Is it normal for cramps to be worse in your 20s than they were as a teen? Mine have been SO much worse lately and I don\'t know if that\'s normal or if I should go to the doctor.', likes:7 },
    { id:'s7', author:'CycleExpert',       time:'2h ago',  text:'@FirstTimer2024 Yes, and also no — worsening cramps can be normal hormonal shifts, but it can also be endometriosis or fibroids. If it\'s significantly worse, please see a doctor. You deserve to not be in that much pain. 💜', likes:19 },
  ],
  'wins': [
    { id:'s8', author:'SundayQueen',       time:'4h ago',  text:'Got through a full workday on Day 1 without going home early for the FIRST time. A tiny win that felt enormous. Heating patch + 800mg ibuprofen + this community. Thank you.', likes:67 },
    { id:'s9', author:'TamaraBee',         time:'8h ago',  text:'Finally made a doctor\'s appointment after years of just suffering through it. That alone felt like a win. Rooting for all of us 👑', likes:88 },
  ],
  'reviews': [
    { id:'s10', author:'OrganicMaven',     time:'1d ago',  text:'The Organic Tampons Variety pack from here — 10/10. No irritation, no smell, they actually WORK. I\'ve switched fully.', likes:31 },
    { id:'s11', author:'CuddleQueen',      time:'2d ago',  text:'The microwavable bunny is not a joke. I heated it up, held it against my lower back, fell asleep. Woke up with no cramps. SOLD.', likes:45 },
  ],
};


let _commActiveTopic = null;


function getNickname() {
  const m = document.cookie.match(/period_nickname=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}
function setNickname(name) {
  document.cookie = 'period_nickname=' + encodeURIComponent(name.trim()) + ';max-age=946080000;path=/;SameSite=Lax';
}


function getTimeGreeting(name) {
  const h = new Date().getHours();
  const greets = h < 5
    ? [`Still up, ${name}? We see you. Rest when you can. 💜`, `Late night, ${name}. Take care of yourself tonight.`]
    : h < 12
    ? [`Good morning, ${name}. You\'ve got this today. 💜`, `Morning, ${name}. Whatever this day holds — you\'re ready.`, `Rise and shine, ${name}. We\'re in your corner.`]
    : h < 17
    ? [`Hey ${name}. Hope your afternoon is treating you gently.`, `Good afternoon, ${name}. Taking care of yourself today? 💜`, `Hey ${name}. You\'re doing great — keep going.`]
    : h < 21
    ? [`Good evening, ${name}. Time to wind down a little. 💜`, `Hey ${name}. Hope today was kind to you.`, `Evening, ${name}. You deserve a moment to breathe.`]
    : [`Good night, ${name}. Rest well — your body does its best work while you sleep. 💜`, `Hey ${name}. End of day rest is sacred. Take it.`];
  return greets[Math.floor(Math.random() * greets.length)];
}


function getCommunityPosts(topicId) {
  try {
    const m = document.cookie.match(/period_community=([^;]+)/);
    const all = m ? JSON.parse(decodeURIComponent(m[1])) : {};
    return all[topicId] || [];
  } catch { return []; }
}


function saveCommunityPost(topicId, text, author) {
  try {
    const cm = document.cookie.match(/period_community=([^;]+)/);
    const all = cm ? JSON.parse(decodeURIComponent(cm[1])) : {};
    if (!all[topicId]) all[topicId] = [];
    const post = {
      id: 'u' + Date.now(),
      author: author || 'You',
      time: 'just now',
      text: text.trim(),
      likes: 0,
      isOwn: true,
    };
    all[topicId].unshift(post);
    document.cookie = 'period_community=' + encodeURIComponent(JSON.stringify(all)) + ';max-age=946080000;path=/;SameSite=Lax';
    // Also write to Firebase if configured (fire-and-forget)
    if (_firebaseDb) {
      const fbPost = Object.assign({}, post, { ts: Date.now() });
      _firebaseDb.ref('community/' + topicId + '/' + post.id).set(fbPost)
        .catch(e => console.warn('[Period.] Firebase write failed:', e));
    }
    return post;
  } catch { return null; }
}


function renderCommunityHome() {
  const name    = getNickname();
  const greet   = $('commGreeting');
  const topics  = $('commTopics');
  const thread  = $('commThread');


  if (thread)  thread.style.display  = 'none';
  if (topics)  topics.style.display  = '';
  if (greet)   greet.style.display   = '';
  _commActiveTopic = null;


  if (greet && name) {
    const txt = $('commGreetingText');
    if (txt) txt.textContent = getTimeGreeting(name);
  }


  const grid = $('commTopicGrid');
  if (!grid) return;
  grid.innerHTML = COMMUNITY_TOPICS.map(t => {
    const seedCount  = (COMMUNITY_SEED[t.id] || []).length;
    const userPosts  = getCommunityPosts(t.id).length;
    const total      = seedCount + userPosts;
    return `<button class="comm-topic-card" data-topic="${t.id}" onclick="openCommTopic('${t.id}')">
      <span class="comm-topic-emoji" aria-hidden="true">${t.emoji}</span>
      <div class="comm-topic-info">
        <div class="comm-topic-title">${t.title}</div>
        <div class="comm-topic-desc">${t.desc}</div>
      </div>
      <div class="comm-topic-count">${total}</div>
    </button>`;
  }).join('');
}


function openCommTopic(topicId) {
  _commActiveTopic = topicId;
  const topic   = COMMUNITY_TOPICS.find(t => t.id === topicId);
  if (!topic) return;


  const greet  = $('commGreeting');
  const topics = $('commTopics');
  const thread = $('commThread');
  if (greet)  greet.style.display  = 'none';
  if (topics) topics.style.display = 'none';
  if (thread) thread.style.display = '';


  const header = $('commThreadHeader');
  if (header) header.textContent = topic.emoji + ' ' + topic.title;


  renderCommPosts(topicId);
}


function renderCommPosts(topicId) {
  const container = $('commPosts');
  if (!container) return;


  const seed  = (COMMUNITY_SEED[topicId] || []).map(p => ({...p, isOwn: false}));
  const user  = getCommunityPosts(topicId);
  const all   = [...user, ...seed];


  container.innerHTML = all.map(p => `
    <div class="comm-post ${p.isOwn ? 'comm-post--own' : ''}">
      <div class="comm-post-header">
        <span class="comm-post-author">${p.isOwn ? '👑 ' + p.author : p.author}</span>
        <span class="comm-post-time">${p.time}</span>
      </div>
      <div class="comm-post-text">${p.text}</div>
      <div class="comm-post-footer">
        <button class="comm-like-btn" data-id="${p.id}" onclick="likePost('${topicId}','${p.id}',this)" aria-label="Like post">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="${p.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          ${p.likes}
        </button>
      </div>
    </div>`).join('') || '<p class="comm-empty">Be the first to post here. 💜</p>';


  container.scrollTop = 0;
}


function likePost(topicId, postId, btn) {
  if (!btn) return;
  btn.classList.toggle('liked');
  const heart = btn.querySelector('svg');
  const liked = btn.classList.contains('liked');
  if (heart) heart.setAttribute('fill', liked ? 'currentColor' : 'none');
  const current = parseInt(btn.textContent.trim()) || 0;
  btn.innerHTML = btn.innerHTML.replace(/\d+$/, liked ? current + 1 : Math.max(0, current - 1));
}


function submitCommPost() {
  const input  = $('commInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const name = getNickname() || 'You';
  saveCommunityPost(_commActiveTopic, text, name);
  input.value = '';
  renderCommPosts(_commActiveTopic);
  showToast('Posted! 💜');
}


function initCommunity() {
  const name = getNickname();
  if (!name) {
    // Show nickname prompt
    const modal   = $('nicknameModal');
    const overlay = $('nicknameOverlay');
    if (modal) {
      modal.style.display = 'flex';
      if (overlay) overlay.style.display = 'block';
      requestAnimationFrame(() => {
        modal.classList.add('open');
        if (overlay) overlay.classList.add('open');
      });
      setTimeout(() => {
        const inp = $('nicknameInput');
        if (inp) inp.focus();
      }, 400);
    }
  } else {
    renderCommunityHome();
  }
}


function confirmNickname() {
  const inp = $('nicknameInput');
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) { inp.placeholder = 'Please enter a name first...'; return; }
  setNickname(val);
  const modal   = $('nicknameModal');
  const overlay = $('nicknameOverlay');
  if (modal)   { modal.classList.remove('open'); setTimeout(() => { modal.style.display = 'none'; }, 300); }
  if (overlay) { overlay.classList.remove('open'); setTimeout(() => { overlay.style.display = 'none'; }, 300); }
  renderCommunityHome();
}


document.addEventListener('DOMContentLoaded', init);


/* =============================================
   TRENDS SYSTEM
   ============================================= */


// Bundled fallback — mirrors trends.json exactly
const TRENDS_DEFAULT = {
  version: '2026-W14',
  trendingProductIds: [10, 17, 22, 25, 26, 4, 5],
  trendBadge: '🔥 Trending',
  weeklyFocus: {
    teen:      { label: 'LutealTok Era 🌙',    desc: 'Understanding your pre-period phase' },
    adult:     { label: 'Cycle Syncing 2026',  desc: 'Match your life to your hormones' },
    emergency: { label: 'Always Prepared ⚡',  desc: 'Never get caught off guard again' },
    gifter:    { label: 'Gift the Glow-Up 💝', desc: 'What she actually wants this cycle' },
    holistic:  { label: 'Clean Cycle Era 🌿',  desc: 'All-natural period care, curated for you' },
  },
  slang: {
    teen:      ["understood the assignment 💅","main character era ✨","it's giving wellness 🌸","slay, periodt 👑","LutealTok made me do it 🌙","cycle check queen 👑","that girl activated ✨","real for that, no cap 💜","hot girl healing era 🌸","understood the vibes 💅"],
    adult:     ["living in alignment 🌙","luteal phase supported 💜","cycle-synced and thriving","hormonal health era 🌿","radical softness, always","doing the work 👑","follicular energy activated ✨","in my wellness era 🌸","cycle-aware baddie 👑","aligned and unbothered 🌙"],
    emergency: ["we've got you, always ⚡","SOS handled 🚨","never caught off guard 💪","always stocked, always ready 🧷"],
    gifter:    ["show up for her 👑","she deserves it, periodt 💝","thoughtful queen energy 🎁","because you see her 💜"],
    holistic:  ["clean cycle era 🌿","toxin-free and thriving","organic baddie energy 💚","zero waste, full power ♻️","plant-based and intentional 🌱","she cycles naturally 🌿"],
  },
  facts: {
    teen: [
      { icon: '🌱', text: "It takes 2–3 years after your first period for your cycle to fully regulate. You're not broken — you're calibrating." },
      { icon: '🧠', text: "Your brain literally changes throughout your cycle. In the days before your period, creative thinking actually peaks. No cap." },
      { icon: '💜', text: "Estrogen affects serotonin. Low estrogen before your period means lower serotonin — the emotional sensitivity is real, not dramatic." },
      { icon: '🔥', text: "'Period brain' is real. Iron loss during your period affects focus and memory. Iron-rich foods and rest genuinely help." },
      { icon: '💊', text: "Cramps are caused by prostaglandins — the same chemicals that cause inflammation. Heat + ibuprofen work together for a reason." },
      { icon: '🌙', text: "Your skin, energy, mood, digestion, and sleep all change throughout your cycle. Understanding the pattern is literally a superpower." },
    ],
    adult: [
      { icon: '🧬', text: "Your luteal phase metabolism rises by ~5–10%. Those carb cravings before your period are your body asking for more fuel. Biochemistry, not weakness." },
      { icon: '🧠', text: "Estrogen affects serotonin. Progesterone affects GABA. Your emotional map is hormonal — and it's always valid." },
      { icon: '🩺', text: "1 in 10 women has endometriosis. Average time to diagnosis: 7–10 years. Advocating for your pain is always the right move." },
      { icon: '💪', text: "Your pain tolerance actually drops in the luteal phase — up to 35% in some studies. You're not weak. You're hormonally accurate." },
      { icon: '🌿', text: "PCOS affects up to 10% of women and is a leading cause of infertility. Many cases go undiagnosed for years. Know your cycle, know your body." },
      { icon: '🌙', text: "Magnesium deficiency is common in the luteal phase and linked directly to PMS severity. Dark chocolate + magnesium glycinate: not a coincidence." },
    ],
    emergency: [
      { icon: '⚡', text: "Always keep a backup. Setting up auto-delivery means you'll always have essentials — no more unexpected emergencies." },
      { icon: '🧠', text: "Stress (like an unexpected period) spikes cortisol, which can actually worsen cramps. Having a plan literally reduces pain." },
    ],
    gifter: [
      { icon: '💝', text: "Research shows that receiving care packages during a menstrual cycle significantly reduces reported emotional distress. Showing up matters." },
      { icon: '🧠', text: "Dark chocolate contains magnesium — a mineral that's often deficient during the luteal phase and directly linked to PMS. That's why it's craved." },
    ],
    holistic: [
      { icon: '🌿', text: "Conventional pads and tampons may contain pesticide residues, dioxins from bleaching, and synthetic fragrances. Organic and reusable alternatives eliminate this exposure entirely." },
      { icon: '🌱', text: "The average person uses 10,000–16,000 disposable period products in their lifetime. Switching to reusable options reduces lifetime plastic waste by up to 99%." },
      { icon: '🫚', text: "Castor oil applied topically to the lower abdomen has been used for centuries to relieve uterine cramping and bloating. The ricinoleic acid it contains has documented anti-inflammatory properties." },
      { icon: '🍵', text: "Red raspberry leaf contains fragrine, a compound that tones the uterine muscle. Many herbalists recommend it in the luteal phase to reduce cramping and regulate flow." },
      { icon: '🧪', text: "CBD (cannabidiol) applied topically interacts with the endocannabinoid receptors in pelvic tissue. Third-party tested CBD products show promise for localized cramp relief without systemic effects." },
      { icon: '💚', text: "Magnesium glycinate is the most bioavailable form of magnesium. Studies show it reduces PMS symptoms by up to 40% when taken consistently in the second half of the cycle." },
    ],
  },
};


let _trends = TRENDS_DEFAULT;


async function fetchTrends() {
  try {
    const res = await fetch('trends.json', { cache: 'no-store' });
    if (res.ok) _trends = await res.json();
  } catch (e) { /* fall back to TRENDS_DEFAULT */ }
  renderTrendingStrip();
  populateNewsletterFact();
}


function getWeeklySlang(version) {
  const v   = version || state.version || 'adult';
  const arr = (_trends.slang || {})[v] || (_trends.slang || {}).adult || [''];
  const idx = Math.floor(Date.now() / (7 * 24 * 3600 * 1000)) % arr.length;
  return arr[idx];
}


function renderTrendingStrip() {
  const strip = $('trendingStrip');
  if (strip) strip.style.display = 'none';
}


/* =============================================
   NEWSLETTER SYSTEM
   ============================================= */


function getDeviceId() {
  let id = localStorage.getItem('period_device_id');
  if (!id) {
    id = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('period_device_id', id);
  }
  return id;
}


function getCookie(name) {
  const m = document.cookie.match('(?:^|; )' + name + '=([^;]*)');
  return m ? decodeURIComponent(m[1]) : null;
}


function setCookie(name, val, days) {
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(val) + '; expires=' + exp + '; path=/; SameSite=Lax';
}


function setNLCookie(email, stage) {
  document.cookie = 'period_nl=' + encodeURIComponent(email + '|' + stage) + ';max-age=946080000;path=/;SameSite=Lax';
}


function getNLCookie() {
  const m = document.cookie.match(/period_nl=([^;]+)/);
  if (!m) return null;
  const parts = decodeURIComponent(m[1]).split('|');
  return { email: parts[0], stage: parts[1] || 'adult' };
}


function isNewsletterSubscribed() { return getNLCookie() !== null; }


let _nlSelectedStage = null;


function populateNewsletterFact() {
  const v       = state.version || 'adult';
  const key     = v === 'teen' ? 'teen' : v === 'gifter' ? 'gifter' : v === 'emergency' ? 'emergency' : 'adult';
  const arr     = (_trends.facts || {})[key] || [];
  if (!arr.length) return;
  const weekIdx = Math.floor(Date.now() / (7 * 24 * 3600 * 1000)) % arr.length;
  const fact    = arr[weekIdx];
  if ($('nlFactIcon')) $('nlFactIcon').textContent = fact.icon;
  if ($('nlFactText')) $('nlFactText').textContent = fact.text;
}


function showNewsletterModal() {
  const modal = $('newsletterModal');
  if (!modal) return;


  // Reset to form state
  const fs = $('nlFormState'), ss = $('nlSuccessState');
  if (fs) fs.style.display = '';
  if (ss) ss.style.display = 'none';


  // Populate rotating fact
  populateNewsletterFact();


  // Pre-select stage matching current version
  const autoStage = (state.version === 'teen') ? 'teen' : 'adult';
  _nlSelectedStage = autoStage;
  $$('.nl-stage-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.stage === autoStage));


  modal.style.display = 'flex';
  modal.style.opacity = '';
  modal.style.transition = '';
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const inp = $('nlEmailInput'); if (inp) inp.focus(); }, 350);
}


function closeNewsletterModal() {
  const modal = $('newsletterModal');
  if (!modal) return;
  modal.style.transition = 'opacity 200ms ease';
  modal.style.opacity    = '0';
  setTimeout(() => {
    modal.style.display    = 'none';
    modal.style.opacity    = '';
    modal.style.transition = '';
    document.body.style.overflow = '';
  }, 210);
}


function subscribeNewsletter() {
  const emailInput = $('nlEmailInput');
  const email = emailInput ? emailInput.value.trim() : '';
  const stage = _nlSelectedStage || 'adult';


  const valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    if (emailInput) {
      emailInput.focus();
      emailInput.style.borderColor = 'var(--error)';
      emailInput.style.boxShadow   = '0 0 0 3px rgba(160,48,48,.18)';
      setTimeout(() => { emailInput.style.borderColor = ''; emailInput.style.boxShadow = ''; }, 2200);
    }
    showToast('Please enter a valid email address');
    return;
  }


  setNLCookie(email, stage);
  updateTrackerBtn();
updateTrackerWidget();
  // Save subscriber to Firestore
  if (_firebaseFs) {
    _firebaseFs.collection('subscribers').add({
      email,
      stage,
      version:   state.version || 'adult',
      source:    'newsletter_modal',
      device_id: getDeviceId(),
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(e => console.warn('[Period.] Firestore subscriber save failed:', e));
  }


  // Send welcome email via EmailJS if configured
  if (EMAILJS_CONFIG && typeof emailjs !== 'undefined') {
    try {
      const ejPromise = emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email:   email,
          to_name:    'there',
          life_stage: stage,
          version:    state.version || 'adult',
          store_url:  'https://perioddelivers.com',
        }
      );
      if (ejPromise && typeof ejPromise.catch === 'function') {
        ejPromise.catch(e => console.warn('[Period.] EmailJS send failed:', e));
      }
    } catch(e) {
      console.warn('[Period.] EmailJS send failed:', e);
    }
  }


  const fs = $('nlFormState'), ss = $('nlSuccessState');
  if (fs) fs.style.display = 'none';
  if (ss) ss.style.display = '';


  const msg = $('nlSuccessMsg');
  if (msg) {
    msg.textContent = (state.version === 'teen')
      ? "bestie, your period tracker is unlocked! welcome to the community 🌸"
      : "Your period tracker is now unlocked. Welcome to the community.";
  }
}


function updateTrackerBtn() {
  const btn  = $('trackerAccessBtn');
  const lock = $('trackerLock');
  if (!btn) return;
  if (isNewsletterSubscribed()) {
    btn.classList.add('unlocked');
    if (lock) lock.style.display = 'none';
  } else {
    btn.classList.remove('unlocked');
    if (lock) lock.style.display = '';
  }
  updateTrackerWidget();
}


function updateTrackerWidget() {
  const locked   = $('trackerWidgetLocked');
  const unlocked = $('trackerWidgetUnlocked');
  const ftbLock  = $('ftbLock');
  const subscribed = isNewsletterSubscribed();


  if (locked)   locked.style.display   = subscribed ? 'none' : '';
  if (unlocked) unlocked.style.display = subscribed ? ''     : 'none';
  if (ftbLock)  ftbLock.style.display  = subscribed ? 'none' : '';


  if (!subscribed) return;


  // Populate widget with tracker data
  const data      = getTrackerData();
  const { cycles } = data;
  const avgLength  = calcAvgCycleLength(cycles);
  const today      = todayStr();
  const nextPeriod = getNextPeriodDate(cycles, avgLength);
  const lastCycle  = cycles.length ? cycles[cycles.length - 1] : null;


  if (lastCycle) {
    const { phase, day, emoji } = getCurrentPhase(lastCycle.s);
    if ($('twEmoji'))     $('twEmoji').textContent     = emoji;
    if ($('twPhaseName')) $('twPhaseName').textContent = phase + ' Phase · Day ' + day;
    if ($('twPhaseDay'))  $('twPhaseDay').textContent  = 'Tap to open your tracker';
    if ($('twNext') && nextPeriod) {
      const dtu = daysBetween(today, nextPeriod);
      $('twNext').textContent = dtu > 0 ? '🩸 Next period in ' + dtu + ' days'
        : dtu === 0 ? '🩸 Period expected today'
        : '🩸 Period may be late — bodies vary';
    }
  } else {
    if ($('twEmoji'))     $('twEmoji').textContent     = '🌸';
    if ($('twPhaseName')) $('twPhaseName').textContent = 'Log a period to begin';
    if ($('twPhaseDay'))  $('twPhaseDay').textContent  = 'Tap to open your tracker';
    if ($('twNext'))      $('twNext').textContent      = '';
  }
}


/* =============================================
   THE CHANGE, SIS — SHOP FOR THIS STAGE
   ============================================= */
function openShopForStage() {
  navigate('shop');
  // After navigation, go directly to the Wellness category
  setTimeout(() => {
    showProductsMode('wellness');
    showToast('Showing Wellness products for your stage 💜');
  }, 120);
}


/* =============================================
   WHY PERIOD MODAL
   ============================================= */
function openWhyModal() {
  const modal   = $('whyModal');
  const overlay = $('whyOverlay');
  if (!modal) return;
  renderWhyModal();
  modal.style.display   = 'flex';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    modal.classList.add('open');
    overlay.classList.add('open');
  });
}


function closeWhyModal() {
  const modal   = $('whyModal');
  const overlay = $('whyOverlay');
  if (!modal) return;
  modal.classList.remove('open');
  overlay.classList.remove('open');
  setTimeout(() => {
    modal.style.display   = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}


function renderWhyModal() {
  const v    = state.version || 'adult';
  const data = WHY_PERIOD[v] || WHY_PERIOD.adult;
  if ($('whyHeadline'))  $('whyHeadline').textContent  = data.headline;
  if ($('whyTagline2'))  $('whyTagline2').textContent  = data.tagline;
  if ($('whyFooterSub')) $('whyFooterSub').textContent = data.footer;
  const btn = $('whyShopBtn');
  if (btn) btn.textContent = data.cta;
  const cards = $('whyCards');
  if (!cards) return;
  cards.innerHTML = data.cards.map((card, i) => `
    <div class="why-card" style="animation-delay:${i * 90}ms">
      <div class="why-card-top">
        <span class="why-card-icon" aria-hidden="true">${card.icon}</span>
        <span class="why-card-label">${card.label}</span>
      </div>
      <div class="why-card-title">${card.title}</div>
      <div class="why-card-body">${card.body}</div>
    </div>`).join('');
}


/* =============================================
   PERIOD TRACKER
   ============================================= */


function getTrackerData() {
  const m = document.cookie.match(/period_cycles=([^;]+)/);
  if (!m) return { cycles: [], avgLength: 28 };
  try { return JSON.parse(decodeURIComponent(m[1])); } catch (e) { return { cycles: [], avgLength: 28 }; }
}


function setTrackerData(data) {
  document.cookie = 'period_cycles=' + encodeURIComponent(JSON.stringify(data)) + ';max-age=978307200;path=/;SameSite=Lax';
}


let trackerDisplayMonth = null; // { year, month } — 0-indexed month


function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}


function addDays(dateStr, n) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}


function daysBetween(a, b) {
  return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);
}


function calcAvgCycleLength(cycles) {
  if (cycles.length < 2) return 28;
  const lengths = [];
  for (let i = 1; i < cycles.length; i++) {
    const d = daysBetween(cycles[i-1].s, cycles[i].s);
    if (d > 14 && d < 60) lengths.push(d);
  }
  return lengths.length ? Math.round(lengths.reduce((a,b) => a+b, 0) / lengths.length) : 28;
}


function calcAvgDuration(cycles) {
  const complete = cycles.filter(c => c.s && c.e);
  if (!complete.length) return 5;
  const durations = complete.map(c => daysBetween(c.s, c.e) + 1);
  return Math.round(durations.reduce((a,b) => a+b, 0) / durations.length);
}


function getNextPeriodDate(cycles, avgLength) {
  if (!cycles || !cycles.length) return null;
  return addDays(cycles[cycles.length - 1].s, avgLength);
}


function getCurrentPhase(startDate) {
  const day = daysBetween(startDate, todayStr()) + 1;
  if (day < 1)   return { phase: 'Upcoming',   day, emoji: '🌙' };
  if (day <= 5)  return { phase: 'Menstrual',  day, emoji: '🩸' };
  if (day <= 13) return { phase: 'Follicular', day, emoji: '🌱' };
  if (day <= 16) return { phase: 'Ovulatory',  day, emoji: '✨' };
  return           { phase: 'Luteal',      day, emoji: '🌙' };
}


function getPhaseInfo(phase, version) {
  const teen = version === 'teen';
  const tips = {
    Menstrual:  teen ? "rest is productive, bestie. heat patches + hydration — you're literally shedding your lining 🩸"
                     : "Your body is working hard. Rest, warmth, and iron-rich foods support you most right now.",
    Follicular: teen ? "main character energy is back ✨ estrogen is rising — lean into it, periodt"
                     : "Rising estrogen brings clarity and energy. A great time to begin new projects.",
    Ovulatory:  teen ? "peak you era 🌟 you're magnetic rn, no cap"
                     : "Peak energy and confidence. Your communication and creativity are sharpest now.",
    Luteal:     teen ? "LutealTok era incoming 🌙 slow down, hydrate, magnesium genuinely helps. your feelings are valid."
                     : "Honor the slowdown. Magnesium, gentle movement, and rest support your luteal phase.",
    Upcoming:   teen ? "your cycle is coming soon 🌙 be kind to yourself, stay stocked"
                     : "Your next period is approaching. Rest and nourish your body.",
  };
  return tips[phase] || tips.Luteal;
}




/* =============================================
   IMPACT CHECK SYSTEM
   ============================================= */

function showImpactCheck(dateStr) {
  const overlay = document.createElement('div');
  overlay.id = 'impactCheckOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.97);display:flex;align-items:center;justify-content:center;padding:1.5rem;overflow-y:auto;';

  overlay.innerHTML = `
    <div style="max-width:400px;width:100%;background:var(--surface);border-radius:24px;padding:1.75rem;border:1px solid rgba(168,85,247,0.25);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.25rem;">
        <div style="font-size:1.5rem;">&#x1F4CB;</div>
        <span style="font-size:0.72rem;color:var(--text-muted);background:var(--surface-2);padding:0.2rem 0.6rem;border-radius:999px;">takes ~30 seconds &#x2728;</span>
      </div>
      <h2 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--text-primary);margin-bottom:0.25rem;">Quick Impact Check</h2>
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:1.25rem;line-height:1.5;">Help us build a clearer picture for your healthcare provider.</p>

      <!-- Q1: Daily impact -->
      <div style="margin-bottom:1.25rem;">
        <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary);margin-bottom:0.6rem;">1. Did your symptoms affect your day today?</div>
        <div style="display:flex;flex-direction:column;gap:0.4rem;" id="impactQ1">
          <button class="impact-opt" data-q="impact" data-val="none" style="padding:0.75rem 1rem;border-radius:12px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;">&#x1F60A; Not at all</button>
          <button class="impact-opt" data-q="impact" data-val="slight" style="padding:0.75rem 1rem;border-radius:12px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;">&#x1F610; Slightly &mdash; managed through it</button>
          <button class="impact-opt" data-q="impact" data-val="moderate" style="padding:0.75rem 1rem;border-radius:12px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;">&#x1F614; Moderately &mdash; had to slow down</button>
          <button class="impact-opt" data-q="impact" data-val="severe" style="padding:0.75rem 1rem;border-radius:12px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.875rem;text-align:left;cursor:pointer;">&#x1F62B; Severely &mdash; could not function normally</button>
        </div>
      </div>

      <!-- Q2: What was affected -->
      <div style="margin-bottom:1.25rem;" id="impactQ2Section" style="display:none;">
        <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary);margin-bottom:0.6rem;">2. What was affected? <span style="font-weight:400;color:var(--text-muted);">(select all that apply)</span></div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;" id="impactQ2">
          ${['&#x1F3EB; School/classes','&#x1F4BC; Work','&#x1F3C3; Exercise','&#x1F634; Sleep','&#x1F91D; Social plans','&#x1F37D;&#xFE0F; Eating/appetite','&#x1F9E0; Focus/concentration'].map(item =>
            '<button class="impact-multi" data-item="'+item+'" style="padding:0.5rem 0.75rem;border-radius:999px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.78rem;cursor:pointer;">'+item+'</button>'
          ).join('')}
          <button class="impact-multi" data-item="none" style="padding:0.5rem 0.75rem;border-radius:999px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-muted);font-size:0.78rem;cursor:pointer;">None of the above</button>
        </div>
      </div>

      <!-- Q3: Irregularities -->
      <div style="margin-bottom:1.25rem;" id="impactQ3Section">
        <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary);margin-bottom:0.6rem;">3. Any cycle irregularities today? <span style="font-weight:400;color:var(--text-muted);">(select all that apply)</span></div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;" id="impactQ3">
          ${['Heavier than normal','Lighter than normal','Unusual pain location','Spotting between periods','Longer than usual','Shorter than usual'].map(item =>
            '<button class="impact-irreg" data-item="'+item+'" style="padding:0.5rem 0.75rem;border-radius:999px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-primary);font-size:0.78rem;cursor:pointer;">'+item+'</button>'
          ).join('')}
          <button class="impact-irreg" data-item="nothing" style="padding:0.5rem 0.75rem;border-radius:999px;border:1.5px solid var(--border);background:var(--surface-2);color:var(--text-muted);font-size:0.78rem;cursor:pointer;">Nothing unusual</button>
        </div>
      </div>

      <button id="saveImpactBtn" style="width:100%;padding:1rem;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-bottom:0.5rem;">Save &amp; Done &#x1F49C;</button>
      <button id="skipImpactBtn" style="width:100%;padding:0.5rem;background:none;border:none;color:var(--text-muted);font-size:0.82rem;cursor:pointer;">skip for today</button>
    </div>`;

  document.body.appendChild(overlay);

  // Wire Q1 - show Q2 when answered
  let selectedImpact = null;
  const selectedActivities = new Set();
  const selectedIrreg = new Set();

  overlay.querySelectorAll('.impact-opt').forEach(btn => {
    btn.addEventListener('click', function() {
      overlay.querySelectorAll('.impact-opt').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.style.background = 'var(--surface-2)';
        b.style.fontWeight = '400';
      });
      btn.style.borderColor = 'var(--accent)';
      btn.style.background = 'rgba(168,85,247,0.12)';
      btn.style.fontWeight = '600';
      selectedImpact = btn.dataset.val;
      // Show Q2 if impact > none
      const q2 = document.getElementById('impactQ2Section');
      if (q2) q2.style.display = selectedImpact !== 'none' ? '' : 'none';
    });
  });

  // Wire Q2 multi-select
  overlay.querySelectorAll('.impact-multi').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = btn.dataset.item;
      if (item === 'none') {
        selectedActivities.clear();
        overlay.querySelectorAll('.impact-multi').forEach(b => {
          b.style.borderColor = 'var(--border)';
          b.style.background = 'var(--surface-2)';
        });
        selectedActivities.add('none');
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'rgba(168,85,247,0.12)';
      } else {
        selectedActivities.delete('none');
        if (selectedActivities.has(item)) {
          selectedActivities.delete(item);
          btn.style.borderColor = 'var(--border)';
          btn.style.background = 'var(--surface-2)';
        } else {
          selectedActivities.add(item);
          btn.style.borderColor = 'var(--accent)';
          btn.style.background = 'rgba(168,85,247,0.12)';
        }
        // Deselect none
        overlay.querySelectorAll('.impact-multi[data-item="none"]').forEach(b => {
          b.style.borderColor = 'var(--border)';
          b.style.background = 'var(--surface-2)';
        });
      }
    });
  });

  // Wire Q3 multi-select
  overlay.querySelectorAll('.impact-irreg').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = btn.dataset.item;
      if (item === 'nothing') {
        selectedIrreg.clear();
        overlay.querySelectorAll('.impact-irreg').forEach(b => {
          b.style.borderColor = 'var(--border)';
          b.style.background = 'var(--surface-2)';
        });
        selectedIrreg.add('nothing');
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'rgba(168,85,247,0.12)';
      } else {
        selectedIrreg.delete('nothing');
        if (selectedIrreg.has(item)) {
          selectedIrreg.delete(item);
          btn.style.borderColor = 'var(--border)';
          btn.style.background = 'var(--surface-2)';
        } else {
          selectedIrreg.add(item);
          btn.style.borderColor = 'var(--accent)';
          btn.style.background = 'rgba(168,85,247,0.12)';
        }
        overlay.querySelectorAll('.impact-irreg[data-item="nothing"]').forEach(b => {
          b.style.borderColor = 'var(--border)';
          b.style.background = 'var(--surface-2)';
        });
      }
    });
  });

  // Save
  document.getElementById('saveImpactBtn').addEventListener('click', function() {
    const impactData = getSymptomsData();
    if (!impactData[dateStr]) impactData[dateStr] = {};
    if (selectedImpact) impactData[dateStr]._impact = selectedImpact;
    if (selectedActivities.size) impactData[dateStr]._activities = Array.from(selectedActivities);
    if (selectedIrreg.size) impactData[dateStr]._irregularities = Array.from(selectedIrreg);
    saveSymptomsData(impactData);
    overlay.remove();
    showToast('Impact logged. Your health summary is being updated. &#x1F49C;');
    setTimeout(() => navigate('home'), 600);
  });

  document.getElementById('skipImpactBtn').addEventListener('click', function() {
    overlay.remove();
    setTimeout(() => navigate('home'), 300);
  });
}

function getImpactLabel(val) {
  const map = { none:'Not affected', slight:'Slightly affected', moderate:'Moderately affected', severe:'Severely affected' };
  return map[val] || val;
}

/* =============================================
   SYMPTOM HEALTH SUMMARY REPORT
   ============================================= */
function generateHealthSummary() {
  const cycleData = getTrackerData();
  const symptomData = getSymptomsData();
  const cycles = cycleData.cycles;

  if (!cycles.length) {
    showToast('Log at least one period to generate a summary');
    return;
  }

  const lastCycle = cycles[cycles.length - 1];
  const startDate = lastCycle.s;
  const endDate   = lastCycle.e || todayStr();

  // Collect all symptom entries for this cycle
  const entries = [];
  let d = startDate;
  while (d <= endDate) {
    const daySymptoms = symptomData[d];
    if (daySymptoms && Object.keys(daySymptoms).length > 0) {
      entries.push({ date: d, symptoms: daySymptoms });
    }
    d = addDays(d, 1);
  }

  if (!entries.length) {
    showToast('No symptoms logged for this cycle yet');
    return;
  }

  // Build summary HTML
  const avgLen = calcAvgCycleLength(cycles);
  const summaryEl = document.createElement('div');
  summaryEl.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(8,6,16,0.97);overflow-y:auto;padding:1.5rem;';

  let entriesHtml = entries.map(e => {
    const impact = e.symptoms._impact;
    const activities = e.symptoms._activities;
    const irregs = e.symptoms._irregularities;

    const symptomList = Object.entries(e.symptoms)
      .filter(([sid]) => !sid.startsWith('_'))
      .map(([sid, val]) => {
        const s = SYMPTOMS.find(s => s.id === sid);
        const label = s ? s.icon + ' ' + s.label : sid;
        const value = val === true ? 'Yes' : val;
        return '<li style="margin-bottom:0.25rem;"><strong>' + label + ':</strong> ' + value + '</li>';
      }).join('');

    let impactHtml = '';
    if (impact) {
      const impactColors = { none:'#22c55e', slight:'#eab308', moderate:'#f97316', severe:'#ef4444' };
      const color = impactColors[impact] || '#A855F7';
      impactHtml = '<div style="margin-top:0.5rem;padding:0.4rem 0.75rem;background:rgba(168,85,247,0.08);border-radius:8px;font-size:0.8rem;">' +
        '<strong style="color:' + color + ';">Daily Impact:</strong> ' + getImpactLabel(impact) + '</div>';
    }

    let activitiesHtml = '';
    if (activities && activities.length && activities[0] !== 'none') {
      activitiesHtml = '<div style="margin-top:0.4rem;font-size:0.8rem;color:var(--text-muted);"><strong>Affected:</strong> ' + activities.join(', ') + '</div>';
    }

    let irregHtml = '';
    if (irregs && irregs.length && irregs[0] !== 'nothing') {
      irregHtml = '<div style="margin-top:0.4rem;font-size:0.8rem;color:#f97316;"><strong>&#x26A0;&#xFE0F; Irregularities:</strong> ' + irregs.join(', ') + '</div>';
    }

    return '<div style="margin-bottom:1rem;padding:0.75rem;background:rgba(168,85,247,0.08);border-radius:10px;border-left:3px solid var(--accent);">' +
      '<div style="font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">' + e.date + '</div>' +
      (symptomList ? '<ul style="list-style:none;padding:0;margin:0;font-size:0.875rem;color:var(--text-muted);">' + symptomList + '</ul>' : '') +
      impactHtml + activitiesHtml + irregHtml +
      '</div>';
  }).join('');

  summaryEl.innerHTML = `
    <div style="max-width:480px;margin:0 auto;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
        <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--text-primary);">&#x1F4CB; Health Summary</h2>
        <button id="closeSummaryBtn" style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer;">&#xD7;</button>
      </div>
      <div style="background:rgba(168,85,247,0.08);border-radius:16px;padding:1rem;margin-bottom:1.25rem;border:1px solid rgba(168,85,247,0.2);">
        <div style="font-size:0.75rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem;">Cycle Overview</div>
        <div style="font-size:0.875rem;color:var(--text-primary);line-height:1.8;">
          <div>&#x1F4C5; Period start: <strong>${startDate}</strong></div>
          <div>&#x1F4C5; Period end: <strong>${endDate}</strong></div>
          <div>&#x1F4CA; Average cycle length: <strong>${avgLen} days</strong></div>
          <div>&#x1F9E0; Symptom days logged: <strong>${entries.length}</strong></div>
        </div>
      </div>
      <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem;">Daily Symptom Log</div>
      ${entriesHtml}
      <div style="background:rgba(34,197,94,0.08);border-radius:16px;padding:1rem;margin-top:1.25rem;border:1px solid rgba(34,197,94,0.2);">
        <div style="font-size:0.875rem;color:var(--text-primary);line-height:1.7;">
          <strong>&#x1F4AC; Share with your healthcare provider</strong><br>
          <span style="color:var(--text-muted);">This summary shows your logged symptoms during your most recent cycle. Screenshot or share this report at your next appointment.</span>
        </div>
      </div>
      <button id="screenshotSummaryBtn" style="width:100%;margin-top:1.25rem;padding:1rem;background:linear-gradient(135deg,#7C3AED,#A855F7);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;">&#x1F4F8; Screenshot to Save</button>
      <button id="emailSummaryBtn" style="width:100%;margin-top:0.75rem;padding:1rem;background:var(--surface-2);color:var(--text-primary);border:1.5px solid var(--border);border-radius:999px;font-size:0.875rem;font-weight:600;cursor:pointer;">&#x1F4E7; Email to Myself</button>
    </div>`;

  document.body.appendChild(summaryEl);

  document.getElementById('closeSummaryBtn').addEventListener('click', () => summaryEl.remove());

  document.getElementById('screenshotSummaryBtn').addEventListener('click', () => {
    showToast('Take a screenshot now to save your summary ??');
  });

  document.getElementById('emailSummaryBtn').addEventListener('click', () => {
    const nlData = getNLCookie();
    if (!nlData || !nlData.email) {
      showToast('Subscribe to the newsletter first to enable email summaries');
      return;
    }
    if (EMAILJS_CONFIG && typeof emailjs !== 'undefined') {
      const body = entries.map(e => {
        return e.date + ': ' + Object.entries(e.symptoms).map(([sid,val]) => {
          const s = SYMPTOMS.find(s => s.id === sid);
          return (s ? s.label : sid) + ' - ' + (val === true ? 'Yes' : val);
        }).join(', ');
      }).join('\n');

      emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        to_email: nlData.email,
        to_name: 'there',
        life_stage: 'health_summary',
        version: state.version || 'adult',
        store_url: 'Period: ' + startDate + ' to ' + endDate + '\n\n' + body


      }).then(() => showToast('Summary sent to ' + nlData.email + ' ??'))
        .catch(() => showToast('Could not send email. Try screenshotting instead.'));
    } else {
      showToast('Email not configured yet. Screenshot your summary for now ??');
    }
  });
}

function renderTracker() {
  const data       = getTrackerData();
  const { cycles } = data;
  const avgLength  = calcAvgCycleLength(cycles);
  const avgDur     = calcAvgDuration(cycles);
  const today      = todayStr();
  const nextPeriod = getNextPeriodDate(cycles, avgLength);
  const v          = state.version || 'adult';
  // Optional: seed with last period date if not yet tracked
  const seedSection = $('trackerSeedSection');
  if (seedSection) seedSection.style.display = cycles.length ? 'none' : '';


  const lastCycle = cycles.length ? cycles[cycles.length - 1] : null;
  // ---- Phase card ----
  if (lastCycle) {
    const { phase, day, emoji } = getCurrentPhase(lastCycle.s);
    if ($('tpcEmoji')) $('tpcEmoji').textContent = emoji;
    if ($('tpcPhase')) $('tpcPhase').textContent = phase + ' Phase';
    if ($('tpcDay'))   $('tpcDay').textContent   = phase === 'Upcoming' ? 'Your next cycle is approaching' : `Cycle day ${day}`;
    if ($('tpcTip'))   $('tpcTip').textContent   = getPhaseInfo(phase, v);


    if ($('tpcNext') && nextPeriod) {
      const dtu = daysBetween(today, nextPeriod);
      $('tpcNext').textContent = dtu > 0 ? `🩸 Next period in ${dtu} days`
        : dtu === 0 ? '🩸 Period expected today'
        : '🩸 Period may be late — bodies vary';
    }


    // Edu card
    const fKey = v === 'teen' ? 'teen' : 'adult';
    const fArr = (_trends.facts || {})[fKey] || [];
    const piMap = { Menstrual: 0, Follicular: 1, Ovulatory: 2, Luteal: v === 'teen' ? 1 : 4, Upcoming: 5 };
    const fi    = Math.min(piMap[phase] || 0, fArr.length - 1);
    if (fArr[fi]) {
      if ($('tecText')) $('tecText').textContent = fArr[fi].text;
      const ec = $('trackerEduCard');
      if (ec) ec.style.display = '';
    }
  } else {
    if ($('tpcEmoji')) $('tpcEmoji').textContent = '🌸';
    if ($('tpcPhase')) $('tpcPhase').textContent = 'Log a period to begin';
    if ($('tpcDay'))   $('tpcDay').textContent   = 'Tap "Log Period Start" below';
    if ($('tpcNext'))  $('tpcNext').textContent  = '';
    if ($('tpcTip'))   $('tpcTip').textContent   = '';
  }


  // ---- Stats ----
  if ($('tstatAvg'))      $('tstatAvg').textContent      = cycles.length >= 2 ? avgLength + ' days' : '—';
  if ($('tstatCount'))    $('tstatCount').textContent    = cycles.length || '—';
  if ($('tstatDuration')) $('tstatDuration').textContent = cycles.filter(c => c.e).length ? avgDur + ' days' : '—';


  // ---- Calendar ----
  if (!trackerDisplayMonth) {
    const now = new Date();
    trackerDisplayMonth = { year: now.getFullYear(), month: now.getMonth() };
  }
  renderTrackerCalendar(cycles, avgLength, avgDur, nextPeriod, today);
}


function renderTrackerCalendar(cycles, avgLength, avgDur, nextPeriod, today) {
  const { year, month } = trackerDisplayMonth;
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if ($('trackerMonthLabel')) $('trackerMonthLabel').textContent = MONTHS[month] + ' ' + year;


  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();


  // Build date sets
  const loggedSet    = new Set();
  const predictedSet = new Set();
  const ovulationSet = new Set();


  cycles.forEach(c => {
    const end = c.e || c.s;
    let d = c.s;
    for (let i = 0; i <= 14 && d <= end; i++) { loggedSet.add(d); d = addDays(d, 1); }
  });


  if (nextPeriod) {
    const pd = avgDur || 5;
    for (let i = 0; i < pd; i++) predictedSet.add(addDays(nextPeriod, i));
    for (let i = -16; i <= -11; i++) ovulationSet.add(addDays(nextPeriod, i));
  }


  const grid = $('trackerCalGrid');
  if (!grid) return;


  let html = '';
  for (let i = 0; i < firstDay; i++) html += `<div class="tcal-day empty"></div>`;


  for (let d = 1; d <= daysInMonth; d++) {
    const ds = year + '-' + String(month+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    const cls = ['tcal-day'];
    if (ds === today)              cls.push('today');
    if (loggedSet.has(ds))         cls.push('period-logged');
    else if (predictedSet.has(ds)) cls.push('period-predicted');
    if (ovulationSet.has(ds) && !loggedSet.has(ds) && !predictedSet.has(ds)) cls.push('ovulation');
    html += `<div class="${cls.join(' ')}" data-date="${ds}" aria-label="${ds}">${d}</div>`;
  }


  grid.innerHTML = html;


  grid.querySelectorAll('.tcal-day:not(.empty)').forEach(day => {
    day.addEventListener('click', () => { if (day.dataset.date > todayStr()) { showToast("Can't log future dates"); return; } logDateFromCalendar(day.dataset.date); });
  });
}


function logDateFromCalendar(dateStr) {
  const data = getTrackerData();
  const existingIdx = data.cycles.findIndex(c => dateStr >= c.s && dateStr <= (c.e || c.s));


  if (existingIdx > -1) {
    // Date already logged — show edit/delete options
    const cycle = data.cycles[existingIdx];
    const action = window.confirm(
      `📅 ${dateStr} is already logged.\n\nClick OK to DELETE this entry.\nClick Cancel to keep it.`
    );
    if (action) {
      data.cycles.splice(existingIdx, 1);
      data.avgLength = calcAvgCycleLength(data.cycles);
      setTrackerData(data);
      renderTracker();
      showToast('Entry deleted ✓');
    }
    return;
  }


  data.cycles.push({ s: dateStr, e: null });
  data.cycles.sort((a, b) => (a.s < b.s ? -1 : 1));
  data.avgLength = calcAvgCycleLength(data.cycles);
  setTrackerData(data);
  renderTracker();
  showToast('Period start logged ✓');
}


function logPeriodStart() {
  const data  = getTrackerData();
  const today = todayStr();
  if (data.cycles.find(c => c.s === today)) { showToast('Period start already logged for today'); return; }
  if (data.cycles.find(c => today >= c.s && today <= (c.e || c.s))) { showToast('Today is already logged'); return; }
  data.cycles.push({ s: today, e: null });
  data.cycles.sort((a, b) => (a.s < b.s ? -1 : 1));
  data.avgLength = calcAvgCycleLength(data.cycles);
  setTrackerData(data);
  renderTracker();
  showToast('Period start logged ✓');
}


function logPeriodEnd() {
  const data  = getTrackerData();
  const today = todayStr();
  const open  = [...data.cycles].reverse().find(c => !c.e);
  if (!open)          { showToast('Log a period start first'); return; }
  if (today < open.s) { showToast("End date can't be before start"); return; }
  open.e = today;
  data.avgLength = calcAvgCycleLength(data.cycles);
  setTrackerData(data);
  renderTracker();
  showToast('Period end logged ✓');
}


/* =============================================
   SYMPTOM LOGGING
   ============================================= */
const SYMPTOMS = [
  { id:'cramps',  label:'Cramps',        icon:'🔥' },
  { id:'bloating',label:'Bloating',      icon:'🌊' },
  { id:'headache',label:'Headache',      icon:'🤕' },
  { id:'cravings',label:'Cravings',      icon:'🍫' },
  { id:'mood',    label:'Mood',          icon:'💭', options:['Happy 😊','Sad 😢','Anxious 😰','Irritable 😤'] },
  { id:'energy',  label:'Energy',        icon:'⚡', options:['High ✨','Medium 😐','Low 😴'] },
  { id:'sleep',   label:'Sleep Quality', icon:'🌙', options:['Great 😴','Okay 😐','Poor 😩'] },
];


function getSymptomsData() {
  try {
    const m = document.cookie.match(/period_symptoms=([^;]+)/);
    return m ? JSON.parse(decodeURIComponent(m[1])) : {};
  } catch { return {}; }
}


function saveSymptomsData(data) {
  document.cookie = 'period_symptoms=' + encodeURIComponent(JSON.stringify(data)) + ';max-age=978307200;path=/;SameSite=Lax';
}


function logSymptom(dateStr, symptomId, value) {
  const data = getSymptomsData();
  if (!data[dateStr]) data[dateStr] = {};
  if (data[dateStr][symptomId] === value) {
    delete data[dateStr][symptomId];
    showToast('Symptom removed');
  } else {
    data[dateStr][symptomId] = value;
    showToast('Symptom logged 💜');
  }
  saveSymptomsData(data);
  renderSymptomLog(dateStr);
}


function renderSymptomLog(dateStr) {
  const container = $('symptomLogSection');
  if (!container) return;
  const data = getSymptomsData();
  const todaySymptoms = data[dateStr] || {};

  let html = '<div class="symptom-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">' +
    '<div class="symptom-title" style="font-size:1rem;font-weight:700;color:var(--text-primary);">&#x1F338; How are you feeling?</div>' +
    '<div class="symptom-date" style="font-size:0.75rem;color:var(--text-muted);">' + dateStr + '</div>' +
    '</div>';

  SYMPTOMS.forEach(function(s) {
    const logged = todaySymptoms[s.id];
    if (s.options) {
      html += '<div style="margin-bottom:1.25rem;">' +
        '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem;">' +
        '<span style="font-size:1.1rem;">' + s.icon + '</span>' +
        '<span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">' + s.label + '</span>' +
        (logged ? '<span style="font-size:0.7rem;background:var(--accent);color:white;padding:0.15rem 0.5rem;border-radius:999px;margin-left:auto;">' + logged + '</span>' : '') +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:0.5rem;">';
      s.options.forEach(function(opt) {
        const active = logged === opt;
        html += '<button style="width:100%;padding:0.85rem 1rem;text-align:left;border-radius:12px;border:1.5px solid ' +
          (active ? 'var(--accent)' : 'var(--border)') + ';background:' +
          (active ? 'rgba(168,85,247,0.12)' : 'var(--surface-2)') + ';color:var(--text-primary);font-size:0.9rem;font-weight:' +
          (active ? '600' : '400') + ';cursor:pointer;transition:all 0.15s;display:flex;align-items:center;justify-content:space-between;" ' +
          'data-date="' + dateStr + '" data-sid="' + s.id + '" data-opt="' + opt + '" type="button">' +
          '<span>' + opt + '</span>' +
          (active ? '<span style="color:var(--accent);">&#x2713;</span>' : '') +
          '</button>';
      });
      html += '</div></div>';
    } else {
      const active = !!logged;
      html += '<button style="width:100%;padding:0.85rem 1rem;border-radius:12px;border:1.5px solid ' +
        (active ? 'var(--accent)' : 'var(--border)') + ';background:' +
        (active ? 'rgba(168,85,247,0.12)' : 'var(--surface-2)') + ';color:var(--text-primary);font-size:0.9rem;cursor:pointer;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.75rem;transition:all 0.15s;" ' +
        'data-date="' + dateStr + '" data-sid="' + s.id + '" data-opt="__toggle__" type="button">' +
        '<span style="font-size:1.1rem;">' + s.icon + '</span>' +
        '<span style="font-weight:' + (active ? '600' : '400') + ';">' + s.label + '</span>' +
        (active ? '<span style="margin-left:auto;color:var(--accent);font-weight:700;">&#x2713; Logged</span>' : '<span style="margin-left:auto;color:var(--text-muted);font-size:0.8rem;">tap to log</span>') +
        '</button>';
    }
  });

  // Save button
  html += '<button id="saveSymptomBtn" style="width:100%;padding:1rem;background:var(--accent);color:white;border:none;border-radius:999px;font-size:0.95rem;font-weight:700;cursor:pointer;margin-top:0.5rem;">Save &amp; Done &#x2713;</button>';

  container.innerHTML = html;

  container.querySelectorAll('[data-sid]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.id === 'saveSymptomBtn') return;
      var d = btn.dataset.date;
      var sid = btn.dataset.sid;
      var opt = btn.dataset.opt === '__toggle__' ? true : btn.dataset.opt;
      if (d && sid) {
        logSymptom(d, sid, opt);
        renderSymptomLog(d);
      }
    });
  });

  const saveBtn = document.getElementById('saveSymptomBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      showToast('Symptoms saved! &#x1F49C;');
      setTimeout(() => showImpactCheck(dateStr), 400);
    });
  }
}
function initSymptomLog() {
  const section = $('symptomLogSection');
  if (!section) return;
  renderSymptomLog(todayStr());
  // Event delegation for symptom option buttons
  section.addEventListener('click', e => {
    const btn = e.target.closest('.symptom-opt');
    if (!btn) return;
    const dateStr = btn.dataset.date;
    const sid = btn.dataset.sid;
    const opt = btn.dataset.opt;
    if (dateStr && sid && opt) logSymptom(dateStr, sid, opt);
  });
  section.addEventListener('click', e => {
    const btn = e.target.closest('.symptom-card--toggle');
    if (!btn) return;
    // handled by inline onclick
  });
}


/* =============================================
   PERIOD REMINDER SYSTEM
   ============================================= */


// Cookie: period_reminders = encodeURIComponent(JSON.stringify({browser:true, sms:'555-...', daysBefore:3}))
function getReminderPrefs() {
  const m = document.cookie.match(/period_reminders=([^;]+)/);
  if (!m) return { browser: false, sms: '', daysBefore: 3 };
  try { return JSON.parse(decodeURIComponent(m[1])); } catch (e) { return { browser: false, sms: '', daysBefore: 3 }; }
}
function setReminderPrefs(prefs) {
  document.cookie = 'period_reminders=' + encodeURIComponent(JSON.stringify(prefs)) + ';max-age=946080000;path=/;SameSite=Lax';
}


let _reminderTab = 'browser'; // 'browser' | 'sms'


function initReminders() {
  // Tab switching
  const tabBrowser = $('remTabBrowser');
  const tabSms     = $('remTabSms');
  const panelBrowser = $('remPanelBrowser');
  const panelSms     = $('remPanelSms');


  function switchRemTab(tab) {
    _reminderTab = tab;
    if (tabBrowser)     tabBrowser.classList.toggle('active', tab === 'browser');
    if (tabSms)         tabSms.classList.toggle('active',     tab === 'sms');
    if (panelBrowser)   panelBrowser.style.display = tab === 'browser' ? '' : 'none';
    if (panelSms)       panelSms.style.display     = tab === 'sms'     ? '' : 'none';
  }


  if (tabBrowser) tabBrowser.addEventListener('click', () => switchRemTab('browser'));
  if (tabSms)     tabSms.addEventListener('click',     () => switchRemTab('sms'));


  // Days-before selector
  const daysRow = document.querySelectorAll('.rem-days-btn');
  daysRow.forEach(btn => btn.addEventListener('click', () => {
    daysRow.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }));


  // Enable browser notifications
  const enableBrowserBtn = $('remEnableBrowser');
  if (enableBrowserBtn) enableBrowserBtn.addEventListener('click', requestBrowserNotifications);


  // Save SMS
  const saveSmsBtn = $('remSaveSms');
  if (saveSmsBtn) saveSmsBtn.addEventListener('click', saveSmsReminder);


  // Restore saved prefs
  renderReminderState();
}


function getSelectedDaysBefore() {
  const active = document.querySelector('.rem-days-btn.active');
  return active ? parseInt(active.dataset.days, 10) : 3;
}


async function requestBrowserNotifications() {
  if (!('Notification' in window)) {
    showToast('Push notifications not supported on this browser. Try adding the app to your home screen first! ??');
    return;
  }
  try {
    if (Notification.permission === 'granted') {
      saveBrowserReminder();
      return;
    }
    if (Notification.permission === 'denied') {
      showToast('Notifications are blocked. Go to your browser settings → Site Settings → Notifications → Allow for perioddelivers.com');
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      saveBrowserReminder();
      showToast('Reminders enabled! ??');
    } else {
      showToast('Permission not granted. You can enable in browser settings anytime.');
    }
  } catch(e) {
    // Fallback for browsers that don't support the promise version
    Notification.requestPermission(function(perm) {
      if (perm === 'granted') {
        saveBrowserReminder();
        showToast('Reminders enabled! ??');
      }
    });
  }
}


function saveBrowserReminder() {
  const prefs = getReminderPrefs();
  prefs.browser    = true;
  prefs.daysBefore = getSelectedDaysBefore();
  setReminderPrefs(prefs);
  renderReminderState();


  // Schedule a demo notification now to confirm it works
  const data     = getTrackerData();
  const avgLen   = calcAvgCycleLength(data.cycles);
  const nextDate = getNextPeriodDate(data.cycles, avgLen);
  const msg      = nextDate
    ? `Your period is predicted around ${nextDate}. We'll remind you ${prefs.daysBefore} day${prefs.daysBefore!==1?'s':''} before.`
    : `Reminders set! Log a period start to activate predictions.`;


  new Notification('👑 . Period Reminders Active', { body: msg, icon: 'icon-192.png' });
  showToast(`Browser reminders set — ${prefs.daysBefore} days before`);
  checkAndFireReminder(); // check immediately in case reminder is due
}


function saveSmsReminder() {
  const input = $('remSmsInput');
  const phone = input ? input.value.trim() : '';
  if (!phone || phone.length < 7) {
    if (input) { input.focus(); input.style.borderColor = 'var(--error)'; setTimeout(() => input.style.borderColor = '', 2000); }
    showToast('Please enter a valid phone number');
    return;
  }
  const prefs = getReminderPrefs();
  prefs.sms        = phone;
  prefs.daysBefore = getSelectedDaysBefore();
  setReminderPrefs(prefs);
  renderReminderState();
  showToast('Got it! ?? SMS reminders are set. You will receive a text before your next predicted period.');
  // Show info about SMS
  const smsStatus = $('remSmsStatus');
  if (smsStatus) {
    smsStatus.style.display = '';
    smsStatus.textContent   = '\u2705 Saved: ' + phone + ' \u2014 SMS reminders active ' + prefs.daysBefore + ' days before your period.';
  }
}


function renderReminderState() {
  const prefs = getReminderPrefs();


  // Browser tab status
  const browserStatus = $('remBrowserStatus');
  const enableBtn     = $('remEnableBrowser');
  if (browserStatus && enableBtn) {
    if (prefs.browser && Notification.permission === 'granted') {
      browserStatus.style.display = '';
      browserStatus.textContent   = '\u2705 Browser reminders active \u2014 ' + prefs.daysBefore + ' day' + (prefs.daysBefore!==1?'s':'') + ' before your period.';
      enableBtn.textContent = 'Update Reminder';
    } else {
      browserStatus.style.display = 'none';
    }
  }


  // Pre-select days
  document.querySelectorAll('.rem-days-btn').forEach(b => b.classList.toggle('active', +b.dataset.days === prefs.daysBefore));


  // SMS tab
  const smsStatus = $('remSmsStatus');
  const smsInput  = $('remSmsInput');
  if (smsStatus && prefs.sms) {
    smsStatus.style.display = '';
    smsStatus.textContent   = '\u2705 Saved: ' + prefs.sms + ' \u2014 ' + prefs.daysBefore + ' days before.';
    if (smsInput) smsInput.value = prefs.sms;
  }
}


// Check on app open whether a reminder notification should fire
function checkAndFireReminder() {
  const prefs = getReminderPrefs();
  if (!prefs.browser || Notification.permission !== 'granted') return;


  const data     = getTrackerData();
  const avgLen   = calcAvgCycleLength(data.cycles);
  const nextDate = getNextPeriodDate(data.cycles, avgLen);
  if (!nextDate) return;


  const today     = todayStr();
  const daysUntil = daysBetween(today, nextDate);
  const lastFired = document.cookie.match(/period_notif_fired=([^;]+)/);
  const lastKey   = lastFired ? lastFired[1] : '';
  const fireKey   = nextDate + '-' + prefs.daysBefore;


  if (daysUntil === prefs.daysBefore && lastKey !== fireKey) {
    document.cookie = 'period_notif_fired=' + fireKey + ';max-age=86400;path=/;SameSite=Lax';
    new Notification('\ud83e\ude78 Period Coming Up', {
      body: 'Your period is predicted in ' + prefs.daysBefore + ' day' + (prefs.daysBefore!==1?'s':'') + '. Stay stocked with \u00b7',
      icon: 'icon-192.png',
    });
  }
}


/* =============================================
   LEGAL — PRIVACY POLICY + TERMS OF SERVICE
   ============================================= */


const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'April 8, 2026',
    content: `
      <p class="legal-updated">Last updated: April 8, 2026</p>


      <h3>Who We Are</h3>
      <p>Period. LLC ("we," "us," or "our") operates the . (Period) platform — a feminine care delivery and subscription service based in Cleveland, Ohio. We are the middleman between you and our supplier partners. We do not manufacture or warehouse products.</p>


      <h3>Information We Collect</h3>
      <p><strong>You provide directly:</strong></p>
      <ul>
        <li>Email address (newsletter, account)</li>
        <li>Phone number (optional, SMS reminders only)</li>
        <li>Delivery address (for order fulfillment)</li>
        <li>Payment information — processed securely by Stripe. We never store your card number.</li>
      </ul>
      <p><strong>Automatically collected:</strong></p>
      <ul>
        <li>Cookies — we use browser cookies to remember your version preference, period tracker data, and cart. No third-party tracking cookies.</li>
        <li>Usage data — general analytics to improve the app (no personally identifiable information).</li>
      </ul>


      <h3>How We Use Your Information</h3>
      <ul>
        <li>To process and fulfill your orders</li>
        <li>To send your monthly care package</li>
        <li>To send the newsletter you subscribed to (you can unsubscribe any time)</li>
        <li>To send period reminder notifications or SMS messages you opted into</li>
        <li>To improve our products and services</li>
        <li>To comply with legal obligations</li>
      </ul>


      <h3>Third-Party Services</h3>
      <p>We work with the following trusted partners who may process your data:</p>
      <ul>
        <li><strong>Stripe</strong> — payment processing (stripe.com/privacy)</li>
        <li><strong>DoorDash Drive / Uber Direct</strong> — on-demand order delivery</li>
        <li><strong>Klaviyo</strong> — email newsletter platform</li>
        <li><strong>Spocket</strong> — supplier fulfillment network</li>
      </ul>
      <p>We do not sell your personal information to any third party. Ever.</p>


      <h3>Cookies</h3>
      <p>We use first-party cookies only to store your preferences locally (version selection, tracker data, cart). No advertising or cross-site tracking cookies are used. You can clear cookies in your browser settings at any time.</p>


      <h3>Children's Privacy</h3>
      <p>Our service is intended for users aged 13 and older. Users between 13–17 should have parental awareness when making purchases. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has submitted information, contact us immediately.</p>


      <h3>Your Rights</h3>
      <ul>
        <li><strong>Access</strong> — Request a copy of the data we hold about you</li>
        <li><strong>Deletion</strong> — Request deletion of your personal data</li>
        <li><strong>Opt-out</strong> — Unsubscribe from emails or SMS at any time</li>
        <li><strong>Correction</strong> — Update inaccurate information</li>
      </ul>
      <p>To exercise any of these rights, email us at <a href="mailto:privacy@perioddelivers.com">privacy@perioddelivers.com</a>.</p>


      <h3>Data Security</h3>
      <p>We use industry-standard encryption (HTTPS/TLS) for all data in transit. Payment data is handled exclusively by Stripe and never touches our servers. We regularly review our security practices.</p>


      <h3>Changes to This Policy</h3>
      <p>We may update this policy from time to time. When we do, we'll update the "Last updated" date at the top and notify newsletter subscribers of material changes.</p>


      <h3>Contact Us</h3>
      <p>Period. LLC<br>Cleveland, Ohio<br>Email: <a href="mailto:privacy@perioddelivers.com">privacy@perioddelivers.com</a></p>
    `
  },


  terms: {
    title: 'Terms of Service',
    lastUpdated: 'April 8, 2026',
    content: `
      <p class="legal-updated">Last updated: April 8, 2026</p>


      <h3>Agreement to Terms</h3>
      <p>By accessing or using the . (Period) platform operated by Period. LLC ("we," "us," "our"), you agree to these Terms of Service. If you do not agree, please do not use our service. You must be at least 13 years old to use this platform.</p>


      <h3>What We Do</h3>
      <p>Period. LLC is a middleman service. We connect customers with third-party supplier partners for feminine care, wellness, and related products. We do not manufacture, store, or ship products ourselves. We coordinate on-demand delivery through third-party courier services (DoorDash Drive, Uber Direct) and monthly subscription fulfillment through our supplier network.</p>


      <h3>Orders and Payment</h3>
      <ul>
        <li>All prices are listed in U.S. dollars.</li>
        <li>Prices may change due to supplier costs or market conditions. Your cart price at checkout is the price you pay.</li>
        <li>Payment is processed securely by Stripe. By placing an order, you authorize the charge to your payment method.</li>
        <li>Orders are confirmed via email. We reserve the right to cancel orders if a product becomes unavailable.</li>
      </ul>


      <h3>Delivery</h3>
      <ul>
        <li>On-demand delivery is estimated at 30–60 minutes. Actual times depend on your location, courier availability, and conditions outside our control.</li>
        <li>Delivery estimates are not guaranteed. We are not liable for delays caused by third-party couriers, weather, or other circumstances beyond our control.</li>
        <li>Delivery is available within our service area. We'll notify you if we can't fulfill delivery to your address.</li>
      </ul>


      <h3>Subscriptions</h3>
      <ul>
        <li>Monthly care package subscriptions are billed on a recurring basis on your chosen plan date.</li>
        <li><strong>Cancel anytime — no calls, no hassle, one tap.</strong> Tap "Manage or cancel subscription" on your confirmation screen, or email <a href="mailto:cancel@perioddelivers.com" color="#A855F7">cancel@perioddelivers.com</a> and we will cancel immediately. No questions asked.</li>
        <li>To avoid being charged for the next cycle, cancel before your monthly billing date. Cancellations confirmed via email within 24 hours.</li>
        <li>We do not offer refunds for subscription boxes that have already shipped.</li>
        <li>You may swap items in your box at any time before your monthly cutoff date (3 days before billing).</li>
        <li>You will receive an email reminder 3 days before each billing date with a direct cancel link.</li>
      </ul>


      <h3>Returns and Refunds</h3>
      <ul>
        <li>Due to the personal hygiene nature of our products, opened items cannot be returned.</li>
        <li>Unopened, unused items may be eligible for return within 7 days of delivery. Contact us to initiate a return.</li>
        <li>If you received the wrong item or a damaged product, we will replace it at no cost to you.</li>
        <li>Refunds are issued to the original payment method within 5–10 business days.</li>
      </ul>


      <h3>Your Account</h3>
      <ul>
        <li>You are responsible for keeping your delivery address and payment method up to date.</li>
        <li>You are responsible for all activity associated with your orders.</li>
        <li>We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.</li>
      </ul>


      <h3>Intellectual Property</h3>
      <p>The . (Period) name, crown logo, app design, copy, and all original content are owned by Period. LLC. You may not copy, reproduce, or use our brand assets without written permission. All rights reserved.</p>


      <h3>Prohibited Uses</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the platform for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, copy, or replicate our platform</li>
        <li>Submit false or fraudulent orders</li>
        <li>Harass, abuse, or harm other users or our team</li>
      </ul>


      <h3>Limitation of Liability</h3>
      <p>To the fullest extent permitted by Ohio law, Period. LLC is not liable for indirect, incidental, or consequential damages arising from use of our service, including delivery delays, product allergic reactions (please review product ingredients), or third-party service failures. Our total liability for any claim shall not exceed the amount you paid for the specific order in question.</p>


      <h3>Health Disclaimer</h3>
      <p>Products sold through our platform are not intended to diagnose, treat, cure, or prevent any medical condition. The period tracker and health content on this platform are for informational purposes only and do not constitute medical advice. Consult a healthcare provider for medical concerns.</p>


      <h3>Governing Law</h3>
      <p>These Terms are governed by the laws of the State of Ohio, United States. Any disputes shall be resolved in the courts of Cuyahoga County, Ohio.</p>


      <h3>Changes to Terms</h3>
      <p>We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms. We'll notify subscribers of material changes.</p>


      <h3>Contact Us</h3>
      <p>Period. LLC<br>Cleveland, Ohio<br>Email: <a href="mailto:legal@perioddelivers.com">legal@perioddelivers.com</a></p>
    `
  }
};


function openLegal(type) {
  const doc   = LEGAL[type];
  const modal = $('legalModal');
  const overlay = $('legalOverlay');
  if (!modal || !doc) return;
  $('legalModalTitle').textContent = doc.title;
  $('legalModalBody').innerHTML    = doc.content;
  modal.style.display = 'flex';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}


function closeLegal() {
  const modal = $('legalModal');
  const overlay = $('legalOverlay');
  if (!modal) return;
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}


/* =============================================================
   FEATURE A: ONBOARDING QUIZ + PERSONALIZATION ENGINE
   ============================================================= */


const QUIZ_QUESTIONS = [
 {
    id: 'flow',
    q: 'How does your flow usually run?',
    sub: "We'll suggest products that match your needs.",
    choices: [
      { value: 'first',     label: 'First Time', icon: '🌸', desc: 'Just getting started' },
      { value: 'light',     label: 'Light',      icon: '🍃', desc: '1–3 days, light' },
      { value: 'medium',    label: 'Medium',     icon: '💧', desc: 'Moderate & predictable' },
      { value: 'heavy',     label: 'Heavy',      icon: '🌊', desc: 'Heavy — need extra coverage' },
      { value: 'irregular', label: 'Irregular',  icon: '🌀', desc: 'Varies cycle to cycle' },
    ]
  },
  {
    id: 'product',
    q: "What's your go-to product?",
    sub: "We'll put your favorites up front.",
    choices: [
      { value: 'pads',    label: 'Pads',             icon: '🌸', desc: 'I prefer pads' },
      { value: 'tampons', label: 'Tampons',           icon: '💜', desc: 'Tampons are my thing' },
      { value: 'cup',     label: 'Cup / Disc',        icon: '♻️', desc: 'Reusable all the way' },
      { value: 'underwear', label: 'Period Underwear', icon: '👙', desc: 'Leak-proof undies' },
     { value: 'mix',     label: 'Mix It Up',         icon: '✨', desc: 'Depends on the day' },
    ]
  },
  {
    id: 'priority',
    q: 'What matters most to you?',
    sub: "We'll highlight products that fit your life.",
    choices: [
      { value: 'comfort', label: 'Comfort',      icon: '🛋️', desc: 'Soft, reliable, cozy' },
      { value: 'eco',     label: 'Eco-Friendly', icon: '🌿', desc: 'Planet-first choices' },
      { value: 'budget',  label: 'Budget',       icon: '💸', desc: 'Best value always' },
      { value: 'natural', label: 'All Natural',  icon: '🌱', desc: 'No synthetics, ever' },
    ]
  },
  {
    id: 'cramp',
    q: "How's the cramp situation?",
    sub: "We'll surface the right relief for you.",
    choices: [
      { value: 'mild',     label: 'Pretty Mild', icon: '☀️', desc: 'Barely notice it' },
      { value: 'moderate', label: 'Moderate',    icon: '😤', desc: 'A bit uncomfortable' },
      { value: 'rough',    label: 'Rough',       icon: '🔥', desc: 'I need real relief' },
      { value: 'variable', label: 'It Varies',   icon: '🌀', desc: 'Depends on the cycle' },
    ]
  },
  {
    id: 'lifestyle',
    q: 'Which describes you best?',
    sub: 'Helps us personalize your whole experience.',
    choices: [
      { value: 'student', label: 'Student',     icon: '📚', desc: 'School or college life' },
      { value: 'working', label: 'Working Pro', icon: '💼', desc: 'Office or WFH grind' },
      { value: 'active',  label: 'Active Life', icon: '⚡', desc: 'Always on the move' },
      { value: 'vibing',  label: 'Just Vibing', icon: '✨', desc: 'Taking it easy, cozy' },
    ]
  },
];


let _quizStep = 0;
let _quizAnswers = {};
let _quizSelectedVal = null;


function getQuizPrefs() {
  try {
    const raw = getCookie('period_prefs');
    return raw ? JSON.parse(decodeURIComponent(raw)) : null;
  } catch { return null; }
}


function saveQuizPrefs(prefs) {
  setCookie('period_prefs', encodeURIComponent(JSON.stringify(prefs)), 365 * 10);
  setCookie('period_quiz_done', '1', 365 * 10);
}


function isQuizDone() {
  return getCookie('period_quiz_done') === '1';
}


function showQuiz() {
  _quizStep = 0;
  _quizAnswers = {};
  _quizSelectedVal = null;
  const overlay = $('quizOverlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  showQuizUrgencyCheck();
}


function showQuizUrgencyCheck() {
  const body    = $('quizBody');
  const nextBtn = $('quizNextBtn');
  const progFill = $('quizProgressFill');
  if (!body || !nextBtn) return;


  if (progFill) progFill.style.width = '0%';
  nextBtn.disabled = true;
  nextBtn.textContent = 'Continue →';
  nextBtn.classList.remove('done-btn');


  body.innerHTML = `
    <div class="quiz-urgency-card">
      <div class="quiz-urgency-icon">⚡</div>
      <div class="quiz-urgency-title">Quick check — do you need something right now?</div>
      <div class="quiz-urgency-sub">We want to personalize your experience, but if you're in a pinch we'll get you sorted first.</div>
      <div class="quiz-urgency-btns">
        <button class="quiz-urgency-yes" id="quizUrgencyYes">🚨 Yes — I need it now</button>
        <button class="quiz-urgency-no" id="quizUrgencyNo">No — I'm good, let's personalize ✨</button>
      </div>
      <p class="quiz-urgency-note">If you skip, the quiz will pop up next visit so you can set your preferences then 💜</p>
    </div>`;


  const yesBtn = document.getElementById('quizUrgencyYes');
  const noBtn  = document.getElementById('quizUrgencyNo');
  if (yesBtn) yesBtn.addEventListener('click', () => { closeQuiz(); setTimeout(() => navigate('shop'), 200); });
  if (noBtn)  noBtn.addEventListener('click',  () => { renderQuizSlide(); });
}


function closeQuiz() {
  const overlay = $('quizOverlay');
  if (!overlay) return;
  overlay.style.display = 'none';
  document.body.style.overflow = '';
  setCookie('period_quiz_done', '1', 365 * 10);
}


function renderQuizSlide() {
  const body     = $('quizBody');
  const nextBtn  = $('quizNextBtn');
  const progFill = $('quizProgressFill');
  if (!body || !nextBtn) return;

  _quizSelectedVal = null;
  nextBtn.style.display = 'none';

  const pct = (_quizStep / QUIZ_QUESTIONS.length) * 100;
  if (progFill) progFill.style.width = pct + '%';

  if (_quizStep >= QUIZ_QUESTIONS.length) {
    if (progFill) progFill.style.width = '100%';
    const chips = Object.values(_quizAnswers).map(v =>
      `<span class="quiz-pref-chip">${v}</span>`
    ).join('');
    body.innerHTML = `
      <div class="quiz-done-slide">
        <div class="quiz-done-icon">&#x1F451;</div>
        <div class="quiz-done-title">You're all set!</div>
        <div class="quiz-done-sub">Your shop is now personalized. We'll surface what fits your cycle.</div>
        <div class="quiz-prefs-chips">${chips}</div>
      </div>`;
    nextBtn.style.display = 'block';
    nextBtn.disabled = false;
    nextBtn.textContent = "Let's shop ✨";
    nextBtn.classList.add('done-btn');
    saveQuizPrefs(_quizAnswers);
    return;
  }

  const q = QUIZ_QUESTIONS[_quizStep];
  const showBack = _quizStep > 0;
  body.innerHTML = `
    <div class="quiz-q-eyebrow">
      ${showBack ? '<button class="quiz-back-btn" id="quizBackBtn">← back</button>' : ''}
      <span>Question ${_quizStep + 1} of ${QUIZ_QUESTIONS.length}</span>
      ${_quizStep === 0 ? '<span class="quiz-hint">no cap, takes 30 sec ✨</span>' : ''}
    </div>
    <div class="quiz-q-text">${q.q}</div>
    <div class="quiz-q-sub">${q.sub}</div>
    <div class="quiz-choices">
      ${q.choices.map(c =>
        '<button class="quiz-choice" data-val="' + c.value + '" aria-pressed="false">' +
        '<span class="quiz-choice-icon">' + c.icon + '</span>' +
        '<span class="quiz-choice-label">' + c.label + '</span>' +
        '</button>'
      ).join('')}
    </div>`;

  if (showBack) {
    const backBtn = document.getElementById('quizBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => { _quizStep--; renderQuizSlide(); });
  }

  body.querySelectorAll('.quiz-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      body.querySelectorAll('.quiz-choice').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
      _quizSelectedVal = btn.dataset.val;
      _quizAnswers[QUIZ_QUESTIONS[_quizStep].id] = _quizSelectedVal;
      _quizStep++;
      setTimeout(() => renderQuizSlide(), 400);
    });
  });
}
function quizNext() {
  if (_quizStep < QUIZ_QUESTIONS.length) {
    if (_quizSelectedVal === null) return;
    _quizAnswers[QUIZ_QUESTIONS[_quizStep].id] = _quizSelectedVal;
    _quizStep++;
    renderQuizSlide();
  } else {
    closeQuiz();
    // Personalize if shop is open
    setTimeout(() => {
      if (state.shopMode === 'products') renderProductGrid();
    }, 200);
  }
}


function initQuiz() {
  const nextBtn = $('quizNextBtn');
  const skipBtn = $('quizSkipBtn');
  if (nextBtn) nextBtn.addEventListener('click', quizNext);
  if (skipBtn) skipBtn.addEventListener('click', closeQuiz);
}


/* --- Personalization scoring --- */
function getQuizPersonalizedProducts(arr) {
  const prefs = getQuizPrefs();
  if (!prefs) return arr;
  return [...arr].sort((a, b) => scoreProductForPrefs(b, prefs) - scoreProductForPrefs(a, prefs));
}


function scoreProductForPrefs(p, prefs) {
  let score = 0;
  if (prefs.product === 'pads'    && (p.id === 1 || p.id === 2))          score += 10;
  if (prefs.product === 'tampons' && p.id === 3)                           score += 10;
  if (prefs.product === 'cup'     && (p.id === 4 || p.id === 28))          score += 10;
  if (prefs.flow === 'heavy'   && (p.id === 2 || p.id === 5))              score += 8;
  if (prefs.flow === 'light'   && p.id === 1)                              score += 6;
  if ((prefs.priority==='eco' || prefs.priority==='natural') && p.category === 'holistic') score += 8;
  if (prefs.priority === 'budget'  && p.price < 15)                        score += 5;
  if (prefs.priority === 'comfort' && p.category === 'comfort')            score += 7;
  if (prefs.cramp === 'rough'    && [10, 30, 33, 31, 32, 16].includes(p.id)) score += 9;
  if (prefs.cramp === 'moderate' && [10, 33].includes(p.id))               score += 5;
  if (prefs.lifestyle === 'student' && p.price < 15)                       score += 3;
  return score;
}


/* =============================================================
   FEATURE B: GIVE-BACK — ROUND-UP & DONATE A KIT
   ============================================================= */


let _roundUpEnabled   = false;
let _donateKitEnabled = false;


function getRoundUpAmt() {
  const total = cartTotal();
  if (total <= 0) return 0.01;
  const ceil = Math.ceil(total);
  const diff = parseFloat((ceil - total).toFixed(2));
  return diff === 0 ? 1.00 : diff;
}


function updateRoundUpDisplay() {
  const el = $('roundUpAmt');
  if (el) el.textContent = '+$' + getRoundUpAmt().toFixed(2);
}


function recordGiveBackOnOrder() {
  if (_donateKitEnabled) {
    const kits = parseInt(getCookie('period_donated_kits') || '0', 10);
    setCookie('period_donated_kits', String(kits + 1), 365 * 10);
    showToast('💜 A period kit is being donated to a Cleveland school!');
  }
  if (_roundUpEnabled) {
    const cents    = Math.round(getRoundUpAmt() * 100);
    const existing = parseInt(getCookie('period_roundup_cents') || '0', 10);
    setCookie('period_roundup_cents', String(existing + cents), 365 * 10);
  }
  _roundUpEnabled   = false;
  _donateKitEnabled = false;
  const rt = $('roundUpToggle');
  const dt = $('donateKitToggle');
  if (rt) rt.checked = false;
  if (dt) dt.checked = false;
  setTimeout(updateImpactCounters, 400);
}


function initGiveBack() {
  const roundUpToggle = $('roundUpToggle');
  const donateToggle  = $('donateKitToggle');


  if (roundUpToggle) {
    roundUpToggle.addEventListener('change', () => {
      _roundUpEnabled = roundUpToggle.checked;
      updateRoundUpDisplay();
    });
  }
  if (donateToggle) {
    donateToggle.addEventListener('change', () => {
      _donateKitEnabled = donateToggle.checked;
      if (_donateKitEnabled) showToast('💜 Kit donation added — we\'ll handle the rest!');
    });
  }


  // Update round-up amount whenever cart renders (MutationObserver on cart sidebar)
  const cartSidebar = $('cartSidebar');
  if (cartSidebar) {
    new MutationObserver(() => {
      if (cartSidebar.classList.contains('open')) updateRoundUpDisplay();
    }).observe(cartSidebar, { attributes: true, attributeFilter: ['class'] });
  }


  // Hook into orderSuccess opening to record give-back
  const orderSuccessEl = $('orderSuccess');
  if (orderSuccessEl) {
    new MutationObserver(() => {
      if (orderSuccessEl.classList.contains('open')) recordGiveBackOnOrder();
    }).observe(orderSuccessEl, { attributes: true, attributeFilter: ['class'] });
  }
}


/* =============================================================
   FEATURE C: COMMUNITY IMPACT COUNTER
   ============================================================= */


const IMPACT_BASELINE_KITS    = 0;
const IMPACT_BASELINE_ROUNDUP = 0;


function getTotalImpact() {
  const launchMs  = new Date('2026-01-01').getTime();
  const daysLive  = Math.max(0, Math.floor((Date.now() - launchMs) / 86400000));
  const growth    = 0; // Will grow with real orders only
  const localKits = parseInt(getCookie('period_donated_kits')    || '0', 10);
  const roundCents= parseInt(getCookie('period_roundup_cents')   || '0', 10);
  return {
    kits:    IMPACT_BASELINE_KITS    + growth + localKits,
    students:IMPACT_BASELINE_KITS    + growth + localKits,
    roundup: IMPACT_BASELINE_ROUNDUP + Math.floor(roundCents / 100),
  };
}


let _impactAnimated = false;


function animateImpactCount(el, target, prefix, suffix) {
  if (!el) return;
  const duration = 1800;
  const start    = Date.now();
  function tick() {
    const elapsed  = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.floor(target * eased);
    el.textContent = (prefix || '') + current.toLocaleString() + (suffix || '');
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}


function updateImpactCounters() {
  const t = getTotalImpact();
  const kEl = $('impactKits');
  const sEl = $('impactStudents');
  const rEl = $('impactRoundup');
  if (kEl && !_impactAnimated) kEl.textContent = t.kits.toLocaleString();
  if (sEl && !_impactAnimated) sEl.textContent = t.students.toLocaleString();
  if (rEl && !_impactAnimated) rEl.textContent = '$' + t.roundup.toLocaleString();
}


function initImpactCounter() {
  updateImpactCounters();


  const section = $('impactSection');
  if (!section) return;


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !_impactAnimated) {
        _impactAnimated = true;
        const t = getTotalImpact();
        animateImpactCount($('impactKits'),     t.kits,    '',  '');
        animateImpactCount($('impactStudents'), t.students,'',  '');
        animateImpactCount($('impactRoundup'),  t.roundup, '$', '');
      }
    });
  }, { threshold: 0.3 });
  observer.observe(section);


  const donateBtn = $('impactDonateBtn');
  if (donateBtn) {
    donateBtn.addEventListener('click', () => {
      openCart();
      setTimeout(() => {
        const dt = $('donateKitToggle');
        if (dt && !dt.checked) {
          dt.checked = true;
          _donateKitEnabled = true;
          showToast('💜 Kit donation added to your cart!');
        }
      }, 400);
    });
  }
}



/* =============================================================
   FOR THE GUYS — Male Education Experience
   Entry point: perioddelivers.com?for=him
   ============================================================= */

const GUYS_HEADLINES = [
  "You found this. That already says something. \u{1F44A}",
  "Real ones educate themselves. Let's go. \u{1F4AA}",
  "She didn't have to tell you twice. Respect. \u{1F44A}",
  "Most guys wouldn't click this. You're not most guys. \u{1F4AA}",
  "You showed up. That's already half the battle. \u{1F44A}",
  "No cap \u2014 this is the move. Let's get you right. \u{1F4AA}",
  "Legend behavior. Let's make sure you know what to do. \u{1F44A}",
  "She noticed you're here. Even if she doesn't know it yet. \u{1F4AA}",
];

const GUYS_SAFE_PICKS = [10, 22, 23, 26, 27, 25, 1, 15];

const GUYS_CONTENT = {
  dad: {
    emoji: "\u{1F9D4}", role: "The Dad",
    tagline: "Your daughter needs you to show up differently right now.",
    period101: {
      title: "Period 101 \u2014 What's Actually Happening",
      body: "Your daughter's body is doing exactly what it's supposed to do. Once a month, her uterus sheds its lining \u2014 that's the bleeding. It lasts 3\u20137 days and comes with cramps, fatigue, mood changes, and discomfort. It is not an illness. It is not weakness. It is biology. And how you respond to it right now will shape how she feels about her body for the rest of her life."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"She's physically uncomfortable. Cramps are real. Fatigue is real. She needs warmth, rest, and zero added stress from you." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"Energy is coming back. She's feeling more like herself. Great time for normal dad-daughter activities." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"Peak energy and mood. She's at her best. Enjoy it." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"PMS territory. Mood shifts are hormonal \u2014 not personal. She's not attacking you. Her hormones are loud right now." },
    ],
    doThis: [
      "Ask her what she needs \u2014 then actually get it without making it weird",
      "Keep heating pads, her preferred pain relief, and comfort snacks stocked at home",
      "Give her space when she needs it without making her feel guilty for needing it",
      "Normalize it \u2014 the more matter-of-fact you are, the more confident she'll feel",
      "Learn what products she uses so you can restock without her having to ask",
    ],
    notThat: [
      "Don't make a face, a comment, or a joke about it \u2014 ever",
      "Don't say 'it's just a period' \u2014 it's not 'just' anything to her body right now",
      "Don't ghost or disappear when she's struggling \u2014 that's when she needs dad energy most",
      "Don't make her feel embarrassed for needing supplies, pain relief, or a day off",
      "Don't pretend it's not happening \u2014 awkward silence teaches her to be ashamed",
    ],
    wishYoudStop: [
      "'Are you on your period?' every time she has a feeling",
      "Acting uncomfortable when she mentions it \u2014 she notices",
      "Sending her to ask mom for everything period-related \u2014 you can handle this too",
      "Making it a bigger deal than it is OR a smaller deal than it is",
    ],
    heroNote: "You don't have to have all the answers. You just have to not make her feel alone in it. That's the whole job right now."
  },
  brother: {
    emoji: "\u{1F466}", role: "The Brother",
    tagline: "Yeah, it's a little awkward. Do it anyway.",
    period101: {
      title: "Period 101 \u2014 The Short Version",
      body: "Once a month her body sheds its uterine lining. That's the blood. It comes with cramps (think: muscle spasms in her abdomen), fatigue, headaches, and mood swings caused by actual hormone drops. It lasts 3\u20137 days. It happens every single month. It's not a big deal to make a big deal out of \u2014 but it IS a big deal to her body."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"Worst days physically. She might be quieter, more tired, or snappier than usual. Don't take it personally." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"She's coming back online. Normal sibling chaos can resume." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"She's at peak energy. Best time to ask her for favors, not gonna lie." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"Pre-period tension. She might be more sensitive or irritable. This is hormonal. Pick your battles." },
    ],
    doThis: [
      "If she's out of supplies and can't get them \u2014 go get them. It's not that deep.",
      "Don't make her feel gross or dramatic for having a normal biological function",
      "Offer to grab snacks or food she's craving without making it a whole thing",
      "If she's clearly in pain, ask if she needs anything \u2014 one time, genuinely",
      "Have her back if anyone else gives her a hard time about it",
    ],
    notThat: [
      "Don't roast her for being on her period \u2014 even as a joke, it hits different when it's your brother",
      "Don't ghost or disappear when she's clearly having a hard time",
      "Don't tell her she's being dramatic \u2014 her cramps can be as painful as a mild heart attack. Look it up.",
      "Don't make buying her pads a whole production \u2014 it's literally just a store run",
      "Don't weaponize her mood against her ('you're just PMSing') \u2014 that's a low blow",
    ],
    wishYoudStop: [
      "The face you make when period stuff comes up",
      "Announcing to other people when she seems off that 'she's probably on her period'",
      "Acting like buying feminine products is embarrassing \u2014 brothers who do this without hesitation are legends",
      "'You're so dramatic' \u2014 she's really not",
    ],
    heroNote: "You don't have to fully get it. You just have to not make her feel worse about something she already didn't choose. That's it. That's the whole bar."
  },
  boyfriend: {
    emoji: "\u{1F499}", role: "The Boyfriend",
    tagline: "This is literally how you keep her.",
    period101: {
      title: "Period 101 \u2014 What's Going On In Her Body",
      body: "Once a month, her hormone levels drop sharply \u2014 estrogen and progesterone both crash. This triggers her period AND affects her serotonin (the happy chemical). So the physical pain AND the emotional sensitivity are both real and both happening at the same time. She's not being difficult. Her body is running a full system reset. How you show up during this week is one of the most remembered things in a relationship."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"Physical pain + emotional vulnerability. She needs warmth, patience, and to feel like you're not checked out." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"Rising estrogen = rising energy and mood. She's more communicative, more affectionate, more herself." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"Peak confidence and connection. She's magnetic. Make plans, go on dates, be present." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"PMS territory. She might need more reassurance, more space, or both. Ask, don't assume." },
    ],
    doThis: [
      "Ask 'what do you need from me right now?' and actually mean it",
      "Show up with her comfort items without being asked \u2014 heating pad, her snacks, whatever she loves",
      "Be physically present \u2014 sit with her, watch something she wants, just exist in the same space",
      "Validate what she's feeling \u2014 'that sounds really hard' goes a long way",
      "Learn her cycle so you're never caught off guard and can anticipate her needs",
    ],
    notThat: [
      "Don't ghost or disappear \u2014 that is the single worst thing you can do this week",
      "Don't say 'you're being emotional' like it's an insult \u2014 she knows, and she can't help it",
      "Don't make her feel like a burden for being in pain",
      "Don't bring up arguments or heavy conversations during her period \u2014 terrible timing",
      "Don't act inconvenienced \u2014 she didn't choose this",
    ],
    wishYoudStop: [
      "'Are you on your period?' as a response to literally any emotion she expresses",
      "Disappearing when she needs you most and calling it 'giving her space'",
      "'I don't know what you want me to do' \u2014 ask her. She'll tell you.",
      "Acting like her period is a break from the relationship \u2014 it's part of the relationship",
    ],
    heroNote: "The guy who shows up during her period is the guy she talks about to her friends. Be that guy."
  },
  bestie: {
    emoji: "\u{1F91D}", role: "The Bestie",
    tagline: "You already know. Now level up.",
    period101: {
      title: "Period 101 \u2014 Real Talk",
      body: "You probably already know the basics \u2014 monthly bleeding, cramps, mood swings. But here's what most people miss: the hormone crash before her period literally lowers her serotonin. So when she's in her feelings, it's not just attitude \u2014 her brain chemistry is actually different right now. And the cramps? Some studies compare them to mild heart attack pain. So yeah. She's not being extra. She's actually going through it."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"She's in it. Check in. Bring snacks. Watch the show she picked. Zero complaints." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"She's back. Make plans, be chaotic, do your thing." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"Main character activated. She's at her best. Match her energy." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"Pre-period. She might be in her head. Be a safe space, not another thing to manage." },
    ],
    doThis: [
      "Check in without being asked \u2014 a simple 'you good?' text hits different",
      "Show up with her snacks, no explanation needed",
      "Be the person who doesn't make it weird \u2014 she appreciates that more than you know",
      "Hype her up when she's feeling gross \u2014 she needs it",
      "Go on the midnight snack run. No questions. Ride or die.",
    ],
    notThat: [
      "Don't ghost when she goes quiet \u2014 that's when besties check IN not out",
      "Don't make jokes at her expense about it \u2014 you can laugh WITH her, never AT her",
      "Don't cancel plans without offering alternatives \u2014 she might need the distraction",
      "Don't make her explain herself for being tired, quiet, or emotional",
      "Don't disappear and then act confused when she's distant later",
    ],
    wishYoudStop: [
      "Acting like her period is an inconvenience to YOUR plans",
      "The 'just take some Advil' advice \u2014 she knows, and it's not always enough",
      "Being weird about going to the store for her \u2014 real ones don't hesitate",
      "Forgetting that she did this for you when you needed it",
    ],
    heroNote: "Day ones don't need a reason to show up. That's the whole definition. Go be her person this week."
  },
  coparent: {
    emoji: "\u{1F46A}", role: "The Co-Parent",
    tagline: "This is about her. Not you two.",
    period101: {
      title: "Period 101 \u2014 What Your Daughter Is Going Through",
      body: "Your daughter's body is going through a monthly hormonal cycle that affects her physically and emotionally. The bleeding lasts 3\u20137 days and is accompanied by cramping, fatigue, headaches, and mood shifts caused by dropping hormone levels. She didn't choose this, she can't control it, and how both of you respond to it will directly shape her relationship with her own body. Co-parenting through her cycle means being consistent, informed, and keeping adult conflict completely out of it."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"She's physically uncomfortable. Consistent support from both parents \u2014 regardless of your situation \u2014 matters most right now." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"She's recovering and feeling better. Normal routines can resume." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"Peak energy. Good time for activities, outings, quality time." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"Pre-period sensitivity. She may be more emotional. Keep environments calm and low-conflict." },
    ],
    doThis: [
      "Keep her supplies stocked at your home \u2014 both homes should have what she needs",
      "Communicate with her other parent about her cycle if it affects custody schedules \u2014 calmly and practically",
      "Let her rest when she needs to rest \u2014 school and activities can be managed around her worst days",
      "Ask her what she needs and make it safe for her to tell you without embarrassment",
      "Present a united, drama-free front \u2014 her wellbeing comes first",
    ],
    notThat: [
      "Don't use her discomfort as a bargaining chip in co-parenting conflict",
      "Don't make her feel like she has to manage adult emotions on top of her own pain",
      "Don't ghost or check out during her hard days because it's 'her mother's week'",
      "Don't make her feel embarrassed or dramatic for needing extra support",
      "Don't put her in the middle of supply or schedule disagreements",
    ],
    wishYoudStop: [
      "Making her period a logistical problem instead of a human experience",
      "Expecting her other parent to handle it all \u2014 you're both her parents",
      "Letting adult conflict bleed into how supported she feels during her cycle",
      "Treating it like something she should just quietly manage on her own",
    ],
    heroNote: "You don't have to have a perfect co-parenting relationship. You just have to make sure she never has to choose between her parents when she's already in pain."
  },
  educator: {
    emoji: "\u{1F9D1}\u200D\u{1F3EB}", role: "The Educator",
    tagline: "What your student needs \u2014 and how to actually help.",
    period101: {
      title: "Period 101 \u2014 What's Happening in Your Classroom",
      body: "Menstruation is a monthly biological process affecting approximately half your student population. During their period (typically days 1\u20135 of their cycle), students may experience cramping, fatigue, headaches, nausea, and mood changes caused by hormonal fluctuation. These are not excuses \u2014 they are documented physiological experiences that directly impact concentration, participation, and physical comfort in a classroom setting."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period Phase (Days 1\u20135)", desc:"Peak physical discomfort. Students may struggle to concentrate or sit still. Bathroom access and flexibility matter most." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"Recovery and rising energy. Students are typically more engaged and focused." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"Peak cognitive performance for many. Best days for complex tasks and presentations." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"Some students experience anxiety or difficulty concentrating. Low-stress environments help." },
    ],
    doThis: [
      "Allow bathroom access without requiring public explanation or justification",
      "Keep a discreet supply of pads and tampons in your classroom or know where students can get them",
      "Offer flexible seating options \u2014 sometimes a position change helps with cramping",
      "Handle conversations with privacy and matter-of-fact professionalism",
      "Know your school's period poverty policy and advocate for better resources if needed",
    ],
    notThat: [
      "Don't require students to publicly explain why they need the bathroom",
      "Don't deny bathroom access \u2014 this is a health and dignity issue, not a discipline one",
      "Don't make comments about mood or behavior that reference their cycle publicly",
      "Don't ghost the issue \u2014 pretending it doesn't exist doesn't make it easier for students",
      "Don't treat period-related absences differently than other health needs",
    ],
    wishYoudStop: [
      "Requiring public justification for bathroom visits",
      "Making students feel like their biology is an inconvenience to your lesson plan",
      "Assuming emotional responses during the luteal phase are behavioral issues",
      "Leaving students without access to supplies when they're caught off guard",
    ],
    heroNote: "The educators who handle this with discretion and zero drama are the ones students remember as safe adults. That reputation is worth everything."
  },
  friend: {
    emoji: "\u{1F465}", role: "The Friend",
    tagline: "You don't have to fully get it. You just have to show up.",
    period101: {
      title: "Period 101 \u2014 The Basics",
      body: "Once a month, her body goes through a cycle that ends with 3\u20137 days of bleeding, cramps, fatigue, and mood changes. The mood stuff isn't attitude \u2014 it's actual hormone changes affecting her brain chemistry. The physical pain is real. She's not asking you to understand all of it. She's just asking you to not make it harder than it already is."
    },
    phases: [
      { emoji:"\u{1FA78}", name:"Period (Days 1\u20135)", desc:"She's dealing with physical discomfort on top of everything else. Low-key support goes a long way." },
      { emoji:"\u{1F331}", name:"Follicular (Days 6\u201313)", desc:"She's feeling more like herself. Normal friendship stuff." },
      { emoji:"\u2728", name:"Ovulation (Days 14\u201316)", desc:"She's at her best. Match the energy." },
      { emoji:"\u{1F319}", name:"Luteal (Days 17\u201328)", desc:"She might be more in her head. Just be a calm, easy presence." },
    ],
    doThis: [
      "Check in \u2014 a simple text is enough",
      "If she needs something from the store and you're going anyway, grab it. No big deal.",
      "Be a low-maintenance, easy presence when she's having a hard week",
      "Let her set the tone \u2014 if she wants to talk, talk. If she wants to watch TV, watch TV.",
      "Just don't disappear. That's genuinely the main thing.",
    ],
    notThat: [
      "Don't ghost when she goes quiet \u2014 check in instead",
      "Don't make it weird \u2014 it's a normal biological thing",
      "Don't offer unsolicited advice about what she should be doing for her symptoms",
      "Don't make her feel like she's a lot \u2014 she's just having a hard few days",
      "Don't disappear and then act confused why things feel different later",
    ],
    wishYoudStop: [
      "Treating period stuff like it's contagious or embarrassing",
      "The awkward silence every time it comes up",
      "Acting like buying her something is a huge favor \u2014 it's just being a good friend",
      "'I don't really know anything about that stuff' \u2014 you know enough to be kind",
    ],
    heroNote: "You don't need to be an expert. You don't need to say the perfect thing. You just need to not ghost, not make it weird, and show up. That's friendship."
  }
};


/* =============================================================
   GUYS VIEW FUNCTIONS
   ============================================================= */
let _guysRole = null;
let _guysHeadlineTimer = null;
let _guysHeadlineIdx = 0;
let _guysShopMode = false;

function initGuysView() {
  _guysHeadlineIdx = Math.floor(Math.random() * GUYS_HEADLINES.length);
  renderGuysHeadline();
  if (_guysHeadlineTimer) clearInterval(_guysHeadlineTimer);
  _guysHeadlineTimer = setInterval(() => {
    const el = document.getElementById('guysHeadline');
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
      _guysHeadlineIdx = (_guysHeadlineIdx + 1) % GUYS_HEADLINES.length;
      renderGuysHeadline();
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400);
  }, 5000);

  document.querySelectorAll('.guys-role-btn').forEach(btn => {
    btn.addEventListener('click', () => openGuysRole(btn.dataset.role));
    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(212,175,55,0.12)';
      btn.style.borderColor = 'rgba(212,175,55,0.5)';
      btn.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'rgba(255,255,255,0.05)';
      btn.style.borderColor = 'rgba(255,255,255,0.1)';
      btn.style.transform = 'translateY(0)';
    });
  });

  const backBtn = document.getElementById('guysBackBtn');
  if (backBtn) backBtn.addEventListener('click', showGuysLanding);
}

function renderGuysHeadline() {
  const el = document.getElementById('guysHeadline');
  if (el) el.textContent = GUYS_HEADLINES[_guysHeadlineIdx];
}

function showGuysLanding() {
  const landing = document.getElementById('guysLanding');
  const guide   = document.getElementById('guysGuide');
  if (landing) { landing.style.display = 'flex'; }
  if (guide)   { guide.style.display   = 'none'; }
  window.scrollTo({ top:0, behavior:'instant' });
}

function openGuysRole(role) {
  _guysRole = role;
  const data = GUYS_CONTENT[role];
  if (!data) return;

  const landing = document.getElementById('guysLanding');
  const guide   = document.getElementById('guysGuide');
  const badge   = document.getElementById('guysRoleBadge');
  const content = document.getElementById('guysGuideContent');

  if (landing) landing.style.display = 'none';
  if (guide)   guide.style.display   = 'block';
  window.scrollTo({ top:0, behavior:'instant' });

  if (badge) {
    badge.innerHTML =
      '<div style="display:inline-flex;flex-direction:column;align-items:center;gap:0.5rem;padding:1.25rem 2rem;' +
      'background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);border-radius:20px;margin-bottom:0.5rem;">' +
      '<span style="font-size:2.5rem;">' + data.emoji + '</span>' +
      '<span style="font-size:1.1rem;font-weight:800;color:white;">' + data.role + '</span>' +
      '<span style="font-size:0.8rem;color:rgba(255,255,255,0.5);font-style:italic;">' + data.tagline + '</span>' +
      '</div>' +
      '<p style="font-size:0.75rem;color:rgba(255,255,255,0.35);margin-top:0.75rem;line-height:1.6;">' +
      'Got more than one woman in your life? <button onclick="showGuysLanding()" ' +
      'style="background:none;border:none;color:#D4AF37;font-size:0.75rem;cursor:pointer;text-decoration:underline;">' +
      'Switch roles here</button> \u2014 you can always go back.' +
      '</p>';
  }

  if (content) {
    const phasesHtml = data.phases.map(p =>
      '<div style="display:flex;gap:0.875rem;padding:0.875rem;background:rgba(255,255,255,0.04);' +
      'border-radius:12px;border:1px solid rgba(255,255,255,0.07);margin-bottom:0.5rem;">' +
      '<span style="font-size:1.3rem;flex-shrink:0;">' + p.emoji + '</span>' +
      '<div><div style="font-size:0.85rem;font-weight:700;color:white;margin-bottom:0.2rem;">' + p.name + '</div>' +
      '<div style="font-size:0.8rem;color:rgba(255,255,255,0.5);line-height:1.55;">' + p.desc + '</div></div></div>'
    ).join('');

    const doHtml = data.doThis.map(t =>
      '<div style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.6rem;">' +
      '<span style="color:#4CAF50;font-weight:700;flex-shrink:0;">\u2713</span>' +
      '<span style="font-size:0.875rem;color:rgba(255,255,255,0.75);line-height:1.55;">' + t + '</span></div>'
    ).join('');

    const notHtml = data.notThat.map(t =>
      '<div style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.6rem;">' +
      '<span style="color:#EF4444;font-weight:700;flex-shrink:0;">\u2717</span>' +
      '<span style="font-size:0.875rem;color:rgba(255,255,255,0.75);line-height:1.55;">' + t + '</span></div>'
    ).join('');

    const wishHtml = data.wishYoudStop.map(t =>
      '<div style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:0.5rem;">' +
      '<span style="color:#D4AF37;flex-shrink:0;">\u2192</span>' +
      '<span style="font-size:0.85rem;color:rgba(255,255,255,0.6);line-height:1.55;font-style:italic;">&ldquo;' + t + '&rdquo;</span></div>'
    ).join('');

    content.innerHTML =
      // Period 101
      '<div style="margin-bottom:1.5rem;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.75rem;">\ud83d\udcd6 ' + data.period101.title + '</div>' +
      '<div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:1rem;border:1px solid rgba(255,255,255,0.08);">' +
      '<p style="font-size:0.875rem;color:rgba(255,255,255,0.7);line-height:1.75;margin:0;">' + data.period101.body + '</p>' +
      '</div></div>' +
      // Phases
      '<div style="margin-bottom:1.5rem;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.75rem;">\ud83d\udd04 Her Monthly Phases</div>' +
      phasesHtml + '</div>' +
      // Do This
      '<div style="margin-bottom:1.5rem;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#4CAF50;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.75rem;">\u2705 Do This</div>' +
      '<div style="background:rgba(76,175,80,0.06);border-radius:14px;padding:1rem;border:1px solid rgba(76,175,80,0.15);">' +
      doHtml + '</div></div>' +
      // Not That
      '<div style="margin-bottom:1.5rem;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#EF4444;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.75rem;">\u274c Not That</div>' +
      '<div style="background:rgba(239,68,68,0.06);border-radius:14px;padding:1rem;border:1px solid rgba(239,68,68,0.15);">' +
      notHtml + '</div></div>' +
      // Wishes
      '<div style="margin-bottom:1.5rem;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.75rem;">\ud83d\udeab Things She Wishes You\'d Stop Saying</div>' +
      '<div style="background:rgba(212,175,55,0.06);border-radius:14px;padding:1rem;border:1px solid rgba(212,175,55,0.15);">' +
      wishHtml + '</div></div>' +
      // Bottom line
      '<div style="margin-bottom:2rem;padding:1.25rem;background:linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.06));border:1.5px solid rgba(212,175,55,0.3);border-radius:16px;">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#D4AF37;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;">\ud83d\udc51 The Bottom Line</div>' +
      '<p style="font-size:0.9rem;color:rgba(255,255,255,0.85);line-height:1.7;margin:0;font-style:italic;">' + data.heroNote + '</p>' +
      '</div>' +
      // Hero Move
      '<div style="background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.1);border-radius:20px;padding:1.5rem;text-align:center;margin-bottom:1.5rem;">' +
      '<div style="font-size:1.4rem;margin-bottom:0.5rem;">\ud83d\udc51</div>' +
      '<div style="font-size:1rem;font-weight:800;color:white;margin-bottom:0.4rem;">Now Go Be Her Hero</div>' +
      '<p style="font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.6;margin-bottom:1.25rem;">Two ways to show up right now:</p>' +
      '<button id="guysShopBtn" style="width:100%;padding:1rem;background:linear-gradient(135deg,#D4AF37,#B8962E);color:#0A0E1A;border:none;border-radius:999px;font-size:0.95rem;font-weight:800;cursor:pointer;margin-bottom:0.75rem;">' +
      '\ud83d\uded2 Shop for Her Now \u2014 Safe Picks Curated' +
      '</button>' +
      '<button id="guysSendLinkBtn" style="width:100%;padding:1rem;background:rgba(255,255,255,0.08);color:white;border:1.5px solid rgba(255,255,255,0.2);border-radius:999px;font-size:0.9rem;font-weight:700;cursor:pointer;">' +
      '\ud83d\udc8c Let Her Pick \u2014 You Just Pay' +
      '</button>' +
      '<p style="font-size:0.72rem;color:rgba(255,255,255,0.3);margin-top:0.75rem;line-height:1.5;">Not sure what she needs? Send her the link. She picks. You cover it. Real hero move.</p>' +
      '<div style="margin-top:1rem;padding:0.875rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;text-align:left;">' +
      '<p style="font-size:0.72rem;color:rgba(255,255,255,0.3);line-height:1.65;margin:0;">' +
      '<strong style="color:rgba(255,255,255,0.45);">Under 18?</strong> This guide is appropriate for all ages. If you\'d like to place an order, please have a parent or guardian assist with checkout. ' +
      'By proceeding you confirm you are 18+ or have parental consent. Payments are processed securely by Stripe — Period. LLC never stores card information. ' +
      '© 2026 Period. LLC — Cleveland, OH.' +
      '</p></div>' +
      '</div>';

    // Wire shop button
    const shopBtn = document.getElementById('guysShopBtn');
    if (shopBtn) shopBtn.addEventListener('click', () => {
      if (_guysHeadlineTimer) clearInterval(_guysHeadlineTimer);
      setVersion('gifter');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      navigate('shop');
      _guysShopMode = true;
      setTimeout(renderGuysSafePicks, 200);
    });

    // Wire send link button — opens native SMS
    const sendBtn = document.getElementById('guysSendLinkBtn');
    if (sendBtn) sendBtn.addEventListener('click', () => {
      const msg = encodeURIComponent(
        "Hey, I got you something but I want to make sure it's actually what you want. Pick what you need here and I'll take care of it \ud83d\udc9c\nhttps://perioddelivers.com"
      );
      window.location.href = 'sms:?body=' + msg;
    });
  }
}

function renderGuysSafePicks() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const picks = GUYS_SAFE_PICKS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const title = document.getElementById('sectionTitle');
  const count = document.getElementById('productCount');
  if (title) title.textContent = '\ud83d\udc51 Safe Picks \u2014 She\'ll Love These';
  if (count) count.textContent = picks.length + ' curated picks';
  grid.innerHTML = picks.map(p => {
    const inCart = state.cart[p.id] > 0;
    return '<div class="product-card" data-id="' + p.id + '" role="listitem">' +
      '<div class="product-img" data-cat="' + p.category + '">' +
      '<span>' + p.emoji + '</span>' +
      '<span class="product-img-badge">Safe Pick \ud83d\udc51</span>' +
      '<span class="product-eta">\ud83d\udef5 ' + p.eta + '</span>' +
      '</div>' +
      '<div class="product-body">' +
      '<div class="product-name">' + p.name + '</div>' +
      '<div class="product-sub">' + p.sub + '</div>' +
      '<div class="product-footer">' +
      '<div class="product-price">' + fmt(p.price) + '</div>' +
      '<button class="add-btn ' + (inCart ? 'in-cart' : '') + '" data-add="' + p.id + '">' +
      (inCart
        ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'
        : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>') +
      '</button></div></div></div>';
  }).join('');
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(+btn.dataset.add);
      showGoToCartBtn();
      renderGuysSafePicks();
    });
  });
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('[data-add]')) return;
      openProductModal(+card.dataset.id);
    });
  });
}

function navigateGuys() {
  // Hide age gate and ALL overlays immediately
  const ageGate = document.getElementById('ageGateWrap');
  if (ageGate) { ageGate.style.display = 'none'; ageGate.style.visibility = 'hidden'; }
  // Hide version picker if showing
  const picker = document.getElementById('versionPicker');
  if (picker) { picker.style.display = 'none'; picker.style.opacity = '0'; }
  // Remove any intro overlay
  const intro = document.getElementById('appIntroOverlay');
  if (intro) intro.remove();
  document.body.style.overflow = '';
  // Remove active from all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  // Show guys view
  const guysView = document.getElementById('guysView');
  if (guysView) { guysView.classList.add('active'); guysView.style.display = 'block'; }
  setTimeout(initGuysView, 100);
}


/* =============================================================
   URL PARAM HANDLER: ?v=emergency goes straight to emergency shop
   ============================================================= */
function handleURLParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    // For The Guys entry point
    const forHim = params.get('for');
    if (forHim === 'him') {
      navigateGuys();
      return;
    }
    // Standard version override
    const v = params.get('v');
    if (v && ['teen','adult','emergency','gifter','holistic'].includes(v)) {
      setVersion(v);
      dismissVersionPicker();
      if (v === 'emergency') setTimeout(() => navigate('shop'), 400);
    }
  } catch(e) {}
}


/* =============================================================
   PATCH renderProductGrid to apply personalization
   ============================================================= */
(function patchRenderProductGrid() {
  const _orig = renderProductGrid;
  renderProductGrid = function() {
    _orig();
    // After render, re-sort if prefs exist — re-render with personalization
    const prefs = getQuizPrefs();
    if (!prefs) return;
    const grid = document.querySelector('#shopView .product-grid');
    if (!grid) return;
    const cards = Array.from(grid.children);
    if (!cards.length) return;
    // Score each card by product id (data-product-id attr)
    const scored = cards.map(card => {
      const id  = parseInt(card.dataset.productId || card.querySelector('[data-id]')?.dataset?.id || '0', 10);
      const prod = PRODUCTS.find(p => p.id === id);
      return { card, score: prod ? scoreProductForPrefs(prod, prefs) : 0 };
    }).sort((a, b) => b.score - a.score);
    scored.forEach(({ card }) => grid.appendChild(card));
  };
})();


/* =============================================================
   BOOT ALL NEW FEATURES after init() runs
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  handleURLParams();
  initGiveBack();
  initImpactCounter();
  initQuiz();
});


/* =============================================================
   TRACKER TUTORIAL (5-second, 4-step, first-time only)
   ============================================================= */
const TUTORIAL_STEPS = [
  {
    emoji: '\uD83D\uDCC5',
    title: 'Tap a date',
    desc:  'Tap any date on the calendar to log when your period starts. Red dots = days you tracked. That\u2019s literally it \u2014 we handle the rest!'
  },
  {
    emoji: '\uD83C\uDF38',
    title: 'Check your phase',
    desc:  'The card at the top tells you where you are in your cycle \u2014 period, ovulation, fertile window, or luteal. Your body has patterns, now you\u2019ll know them.'
  },
  {
    emoji: '\uD83D\uDC9C',
    title: 'Read the legend',
    desc:  'The color key at the bottom explains every dot: red = period days you logged, purple = predicted, teal = ovulation window. No guessing.'
  },
  {
    emoji: '\uD83D\uDD14',
    title: 'Set your reminder',
    desc:  'Scroll down and set a push or text reminder \u2014 so you\u2019re NEVER caught off guard again. Pick push or text. Best thing you can do for yourself, fr.'
  }
];


const TUT_STEP_MS = 1250;   // 1.25s per step = 5s total
let _tutStep = 0;
let _tutIntervalId = null;
let _tutStepStart  = 0;


function showTrackerTutorial() {
  const TUTORIAL_KEY = 'period_tracker_tutdone';
  if (document.cookie.includes(TUTORIAL_KEY)) return;

  const steps = [
    { emoji:'📅', title:'Tap a date', desc:'Tap any date on the calendar to log when your period starts. Simple as that!' },
    { emoji:'🩸', title:'Log start and end', desc:'Tap a date to mark your period start. Tap it again or use the Log Period End button when it is over.' },
    { emoji:'📊', title:'Track your symptoms', desc:'After logging, scroll down to track your mood, energy, cramps and more each day. Your body tells a story.' },
    { emoji:'🔔', title:'Set reminders', desc:'Enable push notifications or text reminders so you are never caught off guard again.' },
  ];

  let step = 0;
  const overlay = $('trackerTutorial');
  if (!overlay) return;
  overlay.classList.remove('hidden');

  function renderStep() {
    const s = steps[step];
    const emoji = document.getElementById('tutEmoji');
    const title = document.getElementById('tutTitle');
    const desc  = document.getElementById('tutDesc');
    const fill  = document.getElementById('tutProgressFill');
    const dots  = document.querySelectorAll('.tut-dot');
    if (emoji) emoji.textContent = s.emoji;
    if (title) title.textContent = s.title;
    if (desc)  desc.textContent  = s.desc;
    if (fill)  fill.style.width  = ((step + 1) / steps.length * 100) + '%';
    dots.forEach((d, i) => d.classList.toggle('active', i === step));
    const nextBtn = document.getElementById('tutNextBtn');
    if (nextBtn) nextBtn.textContent = step < steps.length - 1 ? 'Got it, next →' : 'Start tracking ??';
  }

  // Replace tap hint with proper button - only once
  const tapHint = overlay.querySelector('.tut-tap-hint');
  if (tapHint && !document.getElementById('tutNextBtn')) {
    const btn = document.createElement('button');
    btn.id = 'tutNextBtn';
    btn.style.cssText = 'margin-top:0.75rem;padding:0.75rem 2rem;background:var(--accent);color:white;border:none;border-radius:999px;font-size:0.9rem;font-weight:700;cursor:pointer;width:100%;';
    btn.textContent = 'Got it, next →';
    tapHint.parentNode.replaceChild(btn, tapHint);
    btn.addEventListener('click', function() {
      step++;
      if (step >= steps.length) {
        overlay.classList.add('hidden');
        document.cookie = TUTORIAL_KEY + '=1;max-age=946080000;path=/;SameSite=Lax';
      } else {
        renderStep();
      }
    });
  }

  const skipBtn = $('tutSkipBtn');
  if (skipBtn) {
    const newSkip = skipBtn.cloneNode(true);
    skipBtn.parentNode.replaceChild(newSkip, skipBtn);
    newSkip.addEventListener('click', function() {
      overlay.classList.add('hidden');
      document.cookie = TUTORIAL_KEY + '=1;max-age=946080000;path=/;SameSite=Lax';
    });
  }

  renderStep();
}
function _renderTutStep() {
  const s = TUTORIAL_STEPS[_tutStep];
  if (!s) return;
  $('tutEmoji').textContent = s.emoji;
  $('tutTitle').textContent = s.title;
  $('tutDesc').textContent  = s.desc;
  // Progress fill reset
  const fill = $('tutProgressFill');
  if (fill) { fill.style.transition = 'none'; fill.style.width = '0%'; fill.offsetHeight; fill.style.transition = ''; }
  // Update dots
  document.querySelectorAll('.tut-dot').forEach((d, i) => d.classList.toggle('active', i === _tutStep));
  // Re-trigger card animation
  const card = $('tutCard');
  if (card) { card.style.animation = 'none'; card.offsetHeight; card.style.animation = ''; }
}


function _startTutTimer() {
  clearInterval(_tutIntervalId);
  _tutStepStart = Date.now();
  _tutIntervalId = setInterval(() => {
    const elapsed = Date.now() - _tutStepStart;
    const pct     = Math.min(100, (elapsed / TUT_STEP_MS) * 100);
    const fill    = $('tutProgressFill');
    if (fill) fill.style.width = pct + '%';
    if (elapsed >= TUT_STEP_MS) _advanceTutorial();
  }, 30);
}


function _advanceTutorial() {
  clearInterval(_tutIntervalId);
  _tutStep++;
  if (_tutStep >= TUTORIAL_STEPS.length) {
    _dismissTutorial();
  } else {
    _renderTutStep();
    _startTutTimer();
  }
}


function _dismissTutorial() {
  clearInterval(_tutIntervalId);
  const overlay = $('trackerTutorial');
  if (!overlay) return;
  overlay.style.opacity    = '0';
  overlay.style.transition = 'opacity 0.4s';
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.style.opacity    = '';
    overlay.style.transition = '';
  }, 420);
  document.cookie = 'period_tracker_tutorial=done;max-age=31536000;path=/;SameSite=Lax';
}


// Wire tutorial buttons once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const card     = $('tutCard');
  const skipBtn  = $('tutSkipBtn');
  if (card)    card.addEventListener('click',    (e) => { if (e.target !== skipBtn) _advanceTutorial(); });
  if (skipBtn) skipBtn.addEventListener('click', (e) => { e.stopPropagation(); _dismissTutorial(); });
});


/* =============================================================
   HOW IT WORKS JUMP BUTTON
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // ── How It Works jump ──
  const howBtn = $('heroHowBtn');
  if (howBtn) {
    howBtn.addEventListener('click', () => {
      const section = document.querySelector('.how-section');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ── My Tracker hero pill ──
  const heroTrackerBtn = $('heroTrackerBtn');
  if (heroTrackerBtn) {
    heroTrackerBtn.addEventListener('click', () => {
      if (isNewsletterSubscribed()) navigate('tracker');
      else showNewsletterModal();
    });
  }

  // Newsletter hero pill handled in init()

  // ── Feature card buttons (may not exist if spotlight removed) ──
  const featureTrackerBtn = $('featureTrackerBtn');
  if (featureTrackerBtn) {
    featureTrackerBtn.addEventListener('click', () => {
      if (isNewsletterSubscribed()) navigate('tracker');
      else showNewsletterModal();
    });
  }
  const featureNewsletterBtn = $('featureNewsletterBtn');
  if (featureNewsletterBtn) {
    featureNewsletterBtn.addEventListener('click', showNewsletterModal);
  }
});


/* =============================================================
   EMOJI REVIEW SYSTEM
   ============================================================= */


function getReviews() {
  try {
    const raw = getCookie('period_reviews');
    return raw ? JSON.parse(decodeURIComponent(raw)) : [];
  } catch { return []; }
}


function saveReview(emoji, label, text) {
  const reviews = getReviews();
  reviews.push({ emoji, label, ts: Date.now(), v: state.version });
  // Keep last 50 reviews
  if (reviews.length > 50) reviews.shift();
  setCookie('period_reviews', encodeURIComponent(JSON.stringify(reviews)), 365 * 5);
}


function wasReviewedRecently() {
  const reviews = getReviews();
  if (!reviews.length) return false;
  const last = reviews[reviews.length - 1];
  // Don't re-prompt within 7 days
  return (Date.now() - last.ts) < 7 * 24 * 60 * 60 * 1000;
}


function initReviewPrompt() {
  const prompt   = $('reviewPrompt');
  const row      = $('reviewEmojiRow');
  const thanks   = $('reviewThanks');
  const thanksEm = $('reviewThanksEmoji');
  const textBox  = $('reviewTextBox');
  const textIn   = $('reviewTextInput');
  const submitBtn= $('reviewSubmitBtn');
  const skipBtn  = $('reviewSkipBtn');


  if (!prompt || !row) return;


  // Hide prompt if reviewed recently
  if (wasReviewedRecently()) {
    prompt.style.display = 'none';
    return;
  }


  // Determine if this version gets text feedback
  const v = state.version || 'adult';
  const hasTextFeedback = (v === 'adult' || v === 'holistic');


  let selectedEmoji = null;
  let selectedLabel = null;


  function showThanks() {
    row.style.display = 'none';
    if (textBox) textBox.style.display = 'none';
    if (thanksEm) thanksEm.textContent = selectedEmoji;
    if (thanks)   thanks.style.display = 'flex';
    document.querySelector('.review-prompt-q').textContent = selectedLabel + '!';
  }


  // Wire emoji buttons
  row.querySelectorAll('.review-emoji-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedEmoji = btn.dataset.emoji;
      selectedLabel = btn.dataset.label;


      // Mark selected
      row.querySelectorAll('.review-emoji-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');


      if (hasTextFeedback) {
        // Slide in the text box for adult / holistic
        if (textBox) {
          textBox.style.display = 'block';
          if (textIn) { textIn.value = ''; textIn.focus(); }
        }
      } else {
        // Teen — immediate thanks, no text
        saveReview(selectedEmoji, selectedLabel, '');
        setTimeout(showThanks, 300);
      }
    });
  });


  // Submit with text
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const text = textIn ? textIn.value.trim() : '';
      saveReview(selectedEmoji, selectedLabel, text);
      showThanks();
    });
  }


  // Skip (submit with no text)
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      saveReview(selectedEmoji, selectedLabel, '');
      showThanks();
    });
  }
}


// Re-init review prompt every time the order success modal opens
document.addEventListener('DOMContentLoaded', () => {
  const orderSuccessEl = $('orderSuccess');
  if (!orderSuccessEl) return;


  new MutationObserver(() => {
    if (orderSuccessEl.classList.contains('open')) {
      // Reset prompt state each time modal opens
      const prompt   = $('reviewPrompt');
      const row      = $('reviewEmojiRow');
      const thanks   = $('reviewThanks');
      const promptQ  = prompt?.querySelector('.review-prompt-q');


      if (wasReviewedRecently()) {
        if (prompt) prompt.style.display = 'none';
        return;
      }
      if (prompt)  prompt.style.display = '';
      if (row)     { row.style.display = 'flex'; }
      if (thanks)  thanks.style.display = 'none';
      if (promptQ) promptQ.textContent = 'How are you feeling about us?';
      row?.querySelectorAll('.review-emoji-btn').forEach(b => b.classList.remove('selected'));
      const tb = $('reviewTextBox');
      const ti = $('reviewTextInput');
      if (tb) { tb.style.display = 'none'; }
      if (ti) { ti.value = ''; }
      initReviewPrompt();
    }
  }).observe(orderSuccessEl, { attributes: true, attributeFilter: ['class'] });


  initReviewPrompt();
});


/* =============================================================
   IMPACT STRIP — sync numbers + scroll on click
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Sync strip numbers with the main counter values
  function syncImpactStrip() {
    const t = getTotalImpact();
    const sk = $('stripKits');
    const sr = $('stripRoundup');
    if (sk) sk.textContent = t.kits.toLocaleString();
    if (sr) sr.textContent = '$' + t.roundup.toLocaleString();
  }
  syncImpactStrip();


  // Tap strip → smooth scroll to full impact section
  const strip = $('impactStrip');
  if (strip) {
    strip.addEventListener('click', () => {
      const section = $('impactSection');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});


/* =====================================================
   AGE GATE — check on load, store answer in cookie
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Skip age gate entirely for ?for=him
  try { if (new URLSearchParams(window.location.search).get('for') === 'him') return; } catch(e) {}

  const wrap       = document.getElementById('ageGateWrap');
  const askScreen  = document.getElementById('ageGateAsk');
  const blocked    = document.getElementById('ageGateBlocked');
  const yesBtn     = document.getElementById('ageGateYes');
  const noBtn      = document.getElementById('ageGateNo');

  if (!wrap) return;

  const COOKIE = 'period_age_ok';

  function getAgeCookie() {
    const m = document.cookie.match('(?:^|; )' + COOKIE + '=([^;]*)');
    return m ? m[1] : null;
  }
  function setAgeCookie(val, days) {
    const exp = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = COOKIE + '=' + val + '; expires=' + exp + '; path=/; SameSite=Lax';
  }

  function dismissGate() {
    wrap.style.opacity = '0';
    wrap.style.transition = 'opacity .3s ease';
    setTimeout(() => {
      wrap.style.display = 'none';
      document.body.style.overflow = '';
      // AFTER age gate dismissed — show app intro then picker
      showAppIntroCard();
    }, 300);
  }

  // Already verified — skip age gate, go straight to intro/picker
  if (getAgeCookie() === 'yes') {
    wrap.style.display = 'none';
    return; // initVersion() already handled showing intro or home
  }

  // First visit — show age gate
  wrap.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  yesBtn.addEventListener('click', () => {
    setAgeCookie('yes', 365);
    dismissGate();
  });

  noBtn.addEventListener('click', () => {
    askScreen.style.display = 'none';
    blocked.style.display   = 'flex';
  });
});


/* =====================================================
   MANAGE / CANCEL SUBSCRIPTION modal
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const manageBtn = document.getElementById('manageSubBtn');
  if (!manageBtn) return;


  manageBtn.addEventListener('click', () => {
    // Build a simple inline cancel confirmation overlay
    const existing = document.getElementById('cancelSubOverlay');
    if (existing) { existing.remove(); }


    const overlay = document.createElement('div');
    overlay.id = 'cancelSubOverlay';
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.85);
      display:flex;align-items:center;justify-content:center;padding:1.5rem;
      animation:ageFadeIn .25s ease;
    `;
    overlay.innerHTML = `
      <div style="background:#1a1625;border:1px solid #333;border-radius:20px;padding:2rem 1.5rem;
                  max-width:340px;width:100%;text-align:center;display:flex;flex-direction:column;gap:1rem;">
        <div style="font-size:2rem;">👑</div>
        <h2 style="color:#fff;font-size:1.2rem;font-weight:700;margin:0;">Manage Your Subscription</h2>
        <p style="color:#aaa;font-size:.9rem;line-height:1.6;margin:0;">
          To cancel or change your plan, email us at
          <a href="mailto:cancel@perioddelivers.com"
             style="color:#A855F7;text-decoration:none;font-weight:600;">cancel@perioddelivers.com</a>
          and we'll take care of it within 24 hours — no questions asked.
        </p>
        <p style="color:#888;font-size:.8rem;margin:0;">
          Or call/text <a href="tel:+12162501993" style="color:#D4AF37;font-weight:600;">(216) 250-1993</a>
        </p>
        <button id="cancelSubClose" style="
          margin-top:.5rem;width:100%;padding:.8rem;
          background:linear-gradient(135deg,#A855F7,#7C3AED);
          color:#fff;border:none;border-radius:12px;
          font-size:.95rem;font-weight:600;cursor:pointer;">
          Got it
        </button>
      </div>`;
    document.body.appendChild(overlay);


    document.getElementById('cancelSubClose').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  });
});


/* =============================================================
   THE CYCLE SCOOP — Facts, FAQ, Teen Rotating Facts
   Add new facts to PERIOD_FACTS array to expand the library.
   ============================================================= */


const PERIOD_FACTS = [
  { emoji:'💜', text:'Your whole period is only about 2–3 tablespoons of blood total. It just FEELS like more.', tag:'Body' },
  { emoji:'🍫', text:'Chocolate cravings on your period? Your body is literally asking for magnesium. The craving is real AND scientific.', tag:'Body' },
  { emoji:'😅', text:'You can\'t lose a tampon inside you. It can only go so far. Your cervix is a closed door. Periodt.', tag:'Myths' },
  { emoji:'⚡', text:'Some athletes actually train harder during their follicular phase — right after their period ends. Your cycle is a superpower, not a setback.', tag:'Body' },
  { emoji:'👑', text:'The average person has about 450 periods in their lifetime. That\'s a lot of reasons to have Period. in your corner.', tag:'Fun' },
  { emoji:'🌡️', text:'Heat relaxes your uterine muscles — that\'s the literal science behind why a heating pad helps with cramps.', tag:'Body' },
  { emoji:'🧠', text:'PMS is real — the hormone shift before your period actually affects serotonin, your "happy chemical." You\'re not overreacting.', tag:'Body' },
  { emoji:'✨', text:'Period blood isn\'t dirty. It\'s the same blood in your veins plus uterine lining. Clean, natural, completely normal.', tag:'Myths' },
  { emoji:'🏃‍♀️', text:'Exercise actually helps with cramps. Your body releases endorphins — natural painkillers — when you move. Even a short walk counts.', tag:'Wellness' },
  { emoji:'🌊', text:'Irregular periods are super common in the first few years of having your cycle. Your body is still figuring out its rhythm — and that\'s okay.', tag:'Body' },
  { emoji:'👃', text:'Your sense of smell actually gets sharper around ovulation. Like, scientifically measurable sharper. Bodies are wild.', tag:'Fun' },
  { emoji:'😤', text:'Stress can delay your period. Your brain and your cycle are directly connected — when life is a lot, your body feels it too.', tag:'Body' },
  { emoji:'🏊‍♀️', text:'You can absolutely swim, run, dance, compete, and do anything else on your period. Your cycle doesn\'t get to cancel your life.', tag:'Myths' },
  { emoji:'🎨', text:'The follicular phase (right after your period) is when most people feel their most creative and focused. Plan your big moments then.', tag:'Body' },
  { emoji:'🩸', text:'Period underwear can absorb as much as 4 tampons worth of flow — with nothing extra needed. Technology did that.', tag:'Products' },
  { emoji:'🌿', text:'Menstrual cups are made of medical-grade silicone and can be worn for up to 12 hours. One cup can last years.', tag:'Products' },
  { emoji:'💊', text:'Iron levels drop during your period — that\'s part of why you feel more tired. Iron-rich foods (or supplements) actually help.', tag:'Wellness' },
  { emoji:'😴', text:'The luteal phase (before your period) is when your body temperature rises slightly and sleep gets harder. It\'s hormonal, not in your head.', tag:'Body' },
  { emoji:'🍵', text:'Red raspberry leaf tea has been used for centuries to ease cramps and support uterine health. Some things just work.', tag:'Wellness' },
  { emoji:'📅', text:'Your cycle length is counted from Day 1 of your period to Day 1 of your next period — not just the bleeding days. Knowing that changes everything.', tag:'Body' },
  { emoji:'💙', text:'Blood clots during your period are normal up to about the size of a quarter. Your body is doing exactly what it\'s supposed to.', tag:'Body' },
  { emoji:'🌙', text:'Melatonin (your sleep hormone) is affected by your cycle. Some people genuinely sleep better or worse depending on their phase.', tag:'Body' },
];


const FAQ_DATA = [
  { q:'How long does a period usually last?',
    a:'Most periods last between 3 and 7 days. The first couple of days tend to be the heaviest, then it lightens up. If yours is consistently shorter or longer, that can just be your normal — but it\'s worth mentioning to a doctor if it\'s over 7 days.' },
  { q:'Why do I get cramps?',
    a:'Your uterus contracts to push out its lining — and those contractions are what cause cramps. Heat, light movement, and hydration all genuinely help. If your cramps are severe enough to stop you from doing things, that\'s worth talking to a doctor about.' },
  { q:'What\'s the difference between pads, tampons, and cups?',
    a:'Pads sit in your underwear and absorb outside your body — great starting point. Tampons are inserted and absorb inside — comfortable once you get the hang of them. Menstrual cups are reusable silicone cups that collect instead of absorb. There\'s no "right" choice — it\'s personal.' },
  { q:'What is PMS?',
    a:'PMS (premenstrual syndrome) is a group of symptoms that show up in the 1–2 weeks before your period — mood shifts, cravings, bloating, fatigue, feeling more emotional. It\'s caused by hormone changes and it\'s very real. You\'re not imagining it.' },
  { q:'Why is my period irregular?',
    a:'Irregular periods are incredibly common, especially in the first few years. Stress, diet changes, illness, and major life events can all shift your cycle. Tracking your period (use the tracker here) helps you start to understand your own pattern.' },
  { q:'Can I exercise on my period?',
    a:'Yes — and it often helps. Movement releases endorphins, which can ease cramps and improve your mood. You don\'t have to push through anything that hurts, but gentle movement like walking, yoga, or stretching can genuinely make you feel better.' },
  { q:'What\'s a "normal" amount of blood?',
    a:'Most people lose 2–6 tablespoons of blood per period total — which sounds like a lot but is actually pretty small. Needing to change a pad or tampon every 1–2 hours consistently, or soaking through overnight, is worth mentioning to a doctor.' },
  { q:'Is it okay to skip a period?',
    a:'Missing a period can happen for lots of reasons — stress, sudden weight changes, illness, intense exercise. If it\'s a one-time thing and you\'re not sexually active, it\'s often nothing. If it happens regularly or there\'s any chance of pregnancy, talk to a healthcare provider.' },
  { q:'What should I bring with me so I\'m never caught off guard?',
    a:'A mini period kit in your bag goes a long way: 2 pads or tampons (or your preferred product), a small pack of wipes, a pair of spare underwear (just in case), and a pain reliever if you use one. And of course — Period. is always a tap away.' },
  { q:'How do I know what flow level I am?',
    a:'Light flow: can go 4–6 hours between changes. Medium: 2–4 hours. Heavy: needing to change every 1–2 hours. Most people are heaviest on days 1–2 and lighter toward the end. A "super" or "overnight" product is made for heavy flow days.' },
];


// ── Teen rotating facts ──────────────────────────────────────────
let teenFactIndex  = 0;
let teenFactTimer  = null;


function renderTeenFact(idx) {
  const fact     = PERIOD_FACTS[idx];
  const emoji    = $('teenFactEmoji');
  const text     = $('teenFactText');
  const dotsEl   = $('tfcDots');
  if (!fact || !emoji || !text) return;


  emoji.textContent = fact.emoji;
  text.textContent  = fact.text;


  if (dotsEl) {
    dotsEl.innerHTML = PERIOD_FACTS.map((_, i) =>
      `<span class="tfc-dot ${i===idx?'active':''}" aria-hidden="true"></span>`
    ).join('');
  }
}


function startTeenFactRotation() {
  if (teenFactTimer) clearInterval(teenFactTimer);
  // Start at a random fact each visit
  teenFactIndex = Math.floor(Math.random() * PERIOD_FACTS.length);
  renderTeenFact(teenFactIndex);
  teenFactTimer = setInterval(() => {
    teenFactIndex = (teenFactIndex + 1) % PERIOD_FACTS.length;
    const inner = $('teenFactInner');
    if (inner) {
      inner.style.opacity = '0';
      inner.style.transform = 'translateY(6px)';
      setTimeout(() => {
        renderTeenFact(teenFactIndex);
        inner.style.opacity = '1';
        inner.style.transform = 'translateY(0)';
      }, 280);
    }
  }, 7000); // rotate every 7 seconds
}


function stopTeenFactRotation() {
  if (teenFactTimer) { clearInterval(teenFactTimer); teenFactTimer = null; }
}


// ── The Tea, Period. view ─────────────────────────────────────────────
function renderScoopFacts() {
  const grid = $('scoopFactsGrid');
  if (!grid) return;
  grid.innerHTML = PERIOD_FACTS.map((f, i) => `
    <div class="scoop-fact-card" role="listitem" data-fact-idx="${i}" tabindex="0"
         aria-label="${f.text}">
      <div class="sfc-tag">${f.tag}</div>
      <div class="sfc-emoji" aria-hidden="true">${f.emoji}</div>
      <p class="sfc-text">${f.text}</p>
    </div>`).join('');


  // Tap to "save" (visual highlight toggle)
  grid.querySelectorAll('.scoop-fact-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('saved'));
    card.addEventListener('keydown', e => {
      if (e.key==='Enter'||e.key===' ') card.classList.toggle('saved');
    });
  });
}


function renderScoopFaq() {
  const list = $('faqList');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item" id="faqItem${i}">
      <button class="faq-q" aria-expanded="false" aria-controls="faqAnswer${i}">
        <span>${item.q}</span>
        <svg class="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-a" id="faqAnswer${i}" hidden>
        <p>${item.a}</p>
      </div>
    </div>`).join('');


  list.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all others
      list.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const ans = document.getElementById(b.getAttribute('aria-controls'));
        if (ans) ans.hidden = true;
        b.closest('.faq-item')?.classList.remove('open');
      });
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const ans = document.getElementById(btn.getAttribute('aria-controls'));
        if (ans) ans.hidden = false;
        btn.closest('.faq-item')?.classList.add('open');
      }
    });
  });
}


function initCycleScoopTabs() {
  const tabs = $$('[data-scoop-tab]');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      const which = tab.dataset.scoopTab;
      const factsPanel    = $('scoopFactsPanel');
      const faqPanel      = $('scoopFaqPanel');
      const athleticPanel = $('scoopAthleticPanel');
      if (factsPanel)    factsPanel.style.display    = which==='facts'    ? 'block' : 'none';
      if (faqPanel)      faqPanel.style.display      = which==='faq'      ? 'block' : 'none';
      if (athleticPanel) athleticPanel.style.display = which==='athletic' ? 'block' : 'none';
      if (which === 'athletic') renderAthleticContent();
    });
  });
}


/* =============================================
   ACTIVE & ATHLETIC — Per Experience Content
   Sources: ACOG, Mayo Clinic, Women's Sports
   Foundation, NIH/PubMed, Period.org
   ============================================= */

const ATHLETIC_CONTENT = {
  starter: {
    headline: "Can I Still Do Gym Class? YES! \uD83C\uDFC3\u200D\u2640\uFE0F",
    intro: "Getting your period does NOT mean you have to sit out. You can run, jump, swim, dance, and do every single thing you normally do. Your body is not broken \u2014 it is just doing something new! Here is everything you need to know to keep moving. \u2728",
    sections: [
      {
        emoji: "\uD83D\uDC4D",
        title: "Good news: moving actually helps!",
        color: "rgba(168,85,247,0.1)",
        border: "rgba(168,85,247,0.2)",
        items: [
          "Exercise releases feel-good chemicals called endorphins that actually make cramps feel better.",
          "You do NOT have to skip gym class. Seriously \u2014 you are allowed to move.",
          "Swimming, running, dancing, volleyball \u2014 all of it is totally fine on your period.",
          "If you feel tired, slow down a little. But you do not have to stop completely."
        ]
      },
      {
        emoji: "\uD83E\uDDE6",
        title: "What to wear so you feel confident",
        color: "rgba(236,72,153,0.1)",
        border: "rgba(236,72,153,0.2)",
        items: [
          "\uD83E\uDE72 Period underwear is AMAZING for sports \u2014 no pads slipping, no worries.",
          "\uD83C\uDFC3\u200D\u2640\uFE0F Tampons are great for swimming and active sports \u2014 ask a trusted adult to help you try one.",
          "\uD83C\uDF38 Pads work fine for most gym activities \u2014 pick a thin one so it stays in place.",
          "\uD83D\uDC51 Dark-colored leggings or shorts give you extra confidence just in case."
        ]
      },
      {
        emoji: "\uD83D\uDCAC",
        title: "Talking to your coach or teacher",
        color: "rgba(34,197,94,0.1)",
        border: "rgba(34,197,94,0.2)",
        items: [
          "You never have to explain WHY you need a bathroom break \u2014 just say you need one.",
          "If cramps are really bad one day, it is okay to tell your coach you are not feeling well.",
          "You do not have to say the word \u201Cperiod\u201D if you are not comfortable. \u201CI am not feeling well today\u201D is enough.",
          "Most coaches and teachers totally understand \u2014 they have been there too!"
        ]
      },
      {
        emoji: "\uD83D\uDEAB",
        title: "When to actually take it easy",
        color: "rgba(239,68,68,0.1)",
        border: "rgba(239,68,68,0.2)",
        items: [
          "Day 1 with really bad cramps? It is okay to do less today. Rest is not quitting.",
          "Feeling dizzy, very weak, or in a lot of pain? Sit out and tell an adult.",
          "Feeling tired is normal \u2014 but if you feel extremely exhausted every period, tell your doctor."
        ]
      }
    ],
    citations: [
      { org: "American College of Obstetricians and Gynecologists (ACOG)", note: "Exercise during menstruation is safe and often beneficial for symptom relief." },
      { org: "Mayo Clinic", note: "Physical activity can help reduce menstrual cramps through endorphin release." },
      { org: "Period.org", note: "Period poverty and education resources for young people." }
    ]
  },

  teen: {
    headline: "Period & the Grind Don\u2019t Have to Fight \uD83D\uDCAA",
    intro: "Real talk bestie \u2014 your period does not have to bench you. Athletes, dancers, gymnasts, and everyone in between compete and train on their periods every single day. Here is how to work WITH your cycle instead of fighting it. No cap. \uD83D\uDC9C",
    sections: [
      {
        emoji: "\uD83D\uDD25",
        title: "The truth about training on your period",
        color: "rgba(168,85,247,0.1)",
        border: "rgba(168,85,247,0.2)",
        items: [
          "Day 1 and 2 are usually the hardest \u2014 lower energy, higher inflammation. Go easier those days, not zero.",
          "By day 3-4? Most people feel their energy coming back. This is when you can push again.",
          "Exercise literally releases endorphins which counteract prostaglandins (the cramp chemicals). Moving = less cramping. Facts.",
          "Your follicular phase (after your period ends) is when you are STRONGEST. That is when to PR. Plan for it."
        ]
      },
      {
        emoji: "\uD83D\uDC5F",
        title: "What to wear for practice",
        color: "rgba(236,72,153,0.1)",
        border: "rgba(236,72,153,0.2)",
        items: [
          "\uD83E\uDE72 Period underwear + shorts = the combo. No pad shifting, no leaks, no anxiety.",
          "\uD83C\uDFC3\u200D\u2640\uFE0F Tampons or menstrual discs are best for swimming, gymnastics, and anything high-movement.",
          "\uD83D\uDC5A Compression shorts over your underwear give extra security and confidence.",
          "\uD83C\uDF99\uFE0F Dark uniform bottoms on heavy days \u2014 most coaches will not even notice or question it."
        ]
      },
      {
        emoji: "\u26A0\uFE0F",
        title: "Iron deficiency warning for athletes",
        color: "rgba(239,68,68,0.1)",
        border: "rgba(239,68,68,0.2)",
        items: [
          "Heavy flow + heavy training = real risk of iron deficiency. This is not rare for teen athletes.",
          "Signs: extreme fatigue, getting winded easily, slower times, brain fog, pale skin.",
          "Fix: iron-rich foods (red meat, spinach, lentils, fortified cereals) + vitamin C to absorb it better.",
          "If symptoms persist, ask your doctor for a blood test. Low iron is totally fixable \u2014 but it needs attention."
        ]
      },
      {
        emoji: "\uD83D\uDDE3\uFE0F",
        title: "Talking to your coach",
        color: "rgba(34,197,94,0.1)",
        border: "rgba(34,197,94,0.2)",
        items: [
          "You are never required to explain your period to your coach \u2014 \u201CI am not feeling 100% today\u201D is enough.",
          "If you have a coach you trust, being honest actually helps them support you better.",
          "Missing one practice for severe cramps is not going to ruin your season. Your health comes first.",
          "More coaches than you think understand \u2014 and the ones who do not are wrong, not you."
        ]
      }
    ],
    citations: [
      { org: "Women\u2019s Sports Foundation", note: "Menstruation and athletic performance research, including phase-based training." },
      { org: "American College of Obstetricians and Gynecologists (ACOG)", note: "Exercise and menstrual health guidance for adolescents." },
      { org: "NIH / PubMed", note: "Iron deficiency in female athletes: clinical evidence and dietary recommendations." },
      { org: "Mayo Clinic", note: "Menstrual cramps: lifestyle and home remedies including exercise." }
    ]
  },

  adult: {
    headline: "Cycle Syncing Your Training \uD83E\uDEC0",
    intro: "Your hormones do not just affect your mood \u2014 they directly impact your strength, endurance, recovery time, and injury risk throughout the month. Training with your cycle instead of ignoring it is not a trend. It is smart physiology.",
    sections: [
      {
        emoji: "\uD83D\uDCC5",
        title: "The 4 phases of your training cycle",
        color: "rgba(168,85,247,0.1)",
        border: "rgba(168,85,247,0.2)",
        items: [
          "\uD83E\uDE78 Menstrual (Days 1-5): Lower estrogen + progesterone. Energy is low, inflammation is high. Prioritize rest, light movement, yoga, walking. This is recovery time, not failure.",
          "\uD83C\uDF31 Follicular (Days 6-13): Estrogen rises. Energy and strength climb. Excellent time for high-intensity training, heavy lifting, and skill work.",
          "\u2728 Ovulatory (Days 14-17): Peak estrogen. Strength, coordination, and confidence are highest. Ideal window for competition, PRs, and max effort.",
          "\uD83C\uDF19 Luteal (Days 18-28): Progesterone rises. Endurance may feel easier but strength decreases. Good for moderate cardio. Reduce high-intensity toward end of phase."
        ]
      },
      {
        emoji: "\uD83E\uDD29",
        title: "Hormonal performance facts",
        color: "rgba(236,72,153,0.1)",
        border: "rgba(236,72,153,0.2)",
        items: [
          "Estrogen has an anabolic (muscle-building) effect \u2014 your follicular phase is when your body responds best to strength training.",
          "Pain tolerance drops by up to 35% in the luteal phase. You are not getting weaker \u2014 your body is more sensitive. Adjust accordingly.",
          "Core temperature rises slightly in the luteal phase, making heat-based exercise harder. Hydration matters even more.",
          "Relaxin levels peak around ovulation, increasing joint laxity. Injury risk is slightly higher \u2014 prioritize warm-up and proper form."
        ]
      },
      {
        emoji: "\uD83E\uDD69",
        title: "Nutrition for active cycles",
        color: "rgba(251,191,36,0.1)",
        border: "rgba(251,191,36,0.2)",
        items: [
          "Iron + Vitamin C together after your period: your body loses iron during menstruation and exercise depletes it further. Pair spinach or red meat with citrus for optimal absorption.",
          "Magnesium glycinate (200-400mg daily): reduces both PMS symptoms and exercise-related muscle cramps. Two problems, one solution.",
          "Carbohydrate needs rise in the luteal phase \u2014 this is biochemical, not a lack of willpower. Fuel your body appropriately.",
          "Anti-inflammatory foods (salmon, turmeric, berries, leafy greens) reduce menstrual inflammation AND support exercise recovery simultaneously."
        ]
      },
      {
        emoji: "\uD83D\uDEAB",
        title: "When to push vs. when to rest",
        color: "rgba(239,68,68,0.1)",
        border: "rgba(239,68,68,0.2)",
        items: [
          "Push: Follicular and ovulatory phases. Your body is primed \u2014 use the window.",
          "Moderate: Late luteal phase. Endurance is fine, max effort is not ideal.",
          "Rest or restore: Menstrual phase days 1-2. This is strategic recovery, not giving up.",
          "Always: If you experience dizziness, unusual fatigue, or pain beyond normal menstrual discomfort, stop and check in with your provider."
        ]
      }
    ],
    citations: [
      { org: "Women\u2019s Sports Foundation", note: "The Female Athlete Triad and cycle-based performance research." },
      { org: "NIH / PubMed", note: "Hormonal fluctuations and athletic performance across the menstrual cycle." },
      { org: "American College of Obstetricians and Gynecologists (ACOG)", note: "Exercise during menstruation: clinical guidelines for adults." },
      { org: "Mayo Clinic", note: "Iron deficiency anemia in female athletes: symptoms and dietary recommendations." }
    ]
  },

  holistic: {
    headline: "Supporting Your Active Body Naturally \uD83C\uDF3F",
    intro: "Movement and your menstrual cycle are deeply connected. Honoring your body\u2019s natural rhythms while staying active is not a compromise \u2014 it is the most intelligent approach to training. Here is how to support yourself from the inside out.",
    sections: [
      {
        emoji: "\uD83C\uDF3F",
        title: "Cycle-aware movement",
        color: "rgba(34,197,94,0.1)",
        border: "rgba(34,197,94,0.2)",
        items: [
          "Menstrual phase: Yin yoga, walking in nature, qigong. Let your body release without forcing it to perform.",
          "Follicular phase: Build intensity gradually. This is when your body is most receptive to new training stimuli.",
          "Ovulatory phase: Peak performance window. Try the thing you have been afraid of. Your body is ready.",
          "Luteal phase: Shift to endurance, dance, moderate hiking. Listen to when your body signals slowdown."
        ]
      },
      {
        emoji: "\uD83C\uDF3B",
        title: "Natural support for active bodies",
        color: "rgba(251,191,36,0.1)",
        border: "rgba(251,191,36,0.2)",
        items: [
          "Magnesium (from pumpkin seeds, dark chocolate, avocado): reduces both menstrual cramps AND exercise-induced muscle cramps.",
          "CBD topical on lower abdomen post-workout: addresses inflammation from both exercise and prostaglandins simultaneously. Third-party tested only.",
          "Turmeric with black pepper before training in your menstrual phase: curcumin reduces prostaglandin-driven inflammation.",
          "Seed cycling supports hormonal balance over time \u2014 supporting the foundation your training sits on."
        ]
      },
      {
        emoji: "\uD83D\uDCA7",
        title: "Hydration and recovery naturally",
        color: "rgba(14,165,233,0.1)",
        border: "rgba(14,165,233,0.2)",
        items: [
          "Coconut water provides natural electrolytes lost during both menstruation and exercise \u2014 without synthetic additives.",
          "Red raspberry leaf tea post-workout during your menstrual phase supports uterine recovery alongside muscle recovery.",
          "Castor oil pack on lower abdomen on rest days: reduces uterine inflammation and supports lymphatic drainage.",
          "Epsom salt baths after training during your period: magnesium absorbs transdermally while warm water eases both muscle and menstrual tension."
        ]
      }
    ],
    citations: [
      { org: "NIH / PubMed", note: "Magnesium supplementation and menstrual pain: randomized controlled trial evidence." },
      { org: "Women\u2019s Sports Foundation", note: "Natural approaches to cycle-aware athletic training." },
      { org: "American College of Obstetricians and Gynecologists (ACOG)", note: "Complementary and integrative medicine in menstrual health." }
    ]
  },

  emergency: {
    headline: "Moving Through It \u26A1",
    intro: "You are handling an emergency right now \u2014 so keep this brief. You absolutely can keep moving. Here is the short version.",
    sections: [
      {
        emoji: "\u26A1",
        title: "Quick facts",
        color: "rgba(239,68,68,0.1)",
        border: "rgba(239,68,68,0.2)",
        items: [
          "Exercise helps cramps. Even a short walk releases endorphins that reduce pain.",
          "Get your supplies sorted first, then move when you feel ready.",
          "If you are at school or work \u2014 you do not have to skip anything. Get what you need and carry on.",
          "Heavy flow does not mean you are unwell. It means you need better supplies, fast."
        ]
      }
    ],
    citations: [
      { org: "Mayo Clinic", note: "Exercise and menstrual cramp relief." }
    ]
  },

  gifter: {
    headline: "She Stays Active \uD83C\uDFC3\u200D\u2640\uFE0F Gift Her What She Needs",
    intro: "If she is an athlete, dancer, runner, or just someone who does not let her period stop her \u2014 she needs supplies that keep up. Here is what actually helps her stay active and confident.",
    sections: [
      {
        emoji: "\uD83C\uDF81",
        title: "What active women actually need",
        color: "rgba(168,85,247,0.1)",
        border: "rgba(168,85,247,0.2)",
        items: [
          "\uD83E\uDE72 Period underwear: the gift that keeps on giving. No shifting, no leaks, no anxiety mid-practice.",
          "\uD83D\uDCA8 Menstrual disc or cup: for swimmers, gymnasts, or anyone who hates feeling anything during movement.",
          "\uD83E\uDE78 Magnesium lotion: apply before bed for cramp relief that supports recovery too.",
          "\uD83D\uDEB4\u200D\u2640\uFE0F Iron + folate supplement: especially if she has heavy flow and trains regularly. Iron deficiency is common and fixable."
        ]
      },
      {
        emoji: "\uD83D\uDCAC",
        title: "What to say",
        color: "rgba(236,72,153,0.1)",
        border: "rgba(236,72,153,0.2)",
        items: [
          "\u201CI got you something that actually works during training.\u201D",
          "\u201CYou do not have to slow down for this \u2014 here is what helps.\u201D",
          "Sometimes the most powerful thing is just acknowledging that her period is real and you see her. That matters more than the gift."
        ]
      }
    ],
    citations: [
      { org: "Women\u2019s Sports Foundation", note: "Supporting female athletes\u2019 menstrual health and performance." },
      { org: "NIH / PubMed", note: "Iron deficiency in female athletes: prevalence and dietary solutions." }
    ]
  }
};

function renderAthleticContent() {
  const container = document.getElementById('scoopAthleticContent');
  if (!container) return;

  const v = state.version || 'adult';
  const data = ATHLETIC_CONTENT[v] || ATHLETIC_CONTENT.adult;

  let html = '<div style="padding:0.5rem 0;">';

  // Headline + intro
  html += '<div style="background:linear-gradient(135deg,rgba(168,85,247,0.12),rgba(236,72,153,0.08));border-radius:20px;padding:1.25rem;margin-bottom:1.25rem;border:1px solid rgba(168,85,247,0.2);">';
  html += '<h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:0.5rem;">' + data.headline + '</h2>';
  html += '<p style="font-size:0.875rem;color:var(--text-muted);line-height:1.7;margin:0;">' + data.intro + '</p>';
  html += '</div>';

  // Sections
  data.sections.forEach(function(section) {
    html += '<div style="background:' + section.color + ';border:1px solid ' + section.border + ';border-radius:16px;padding:1rem;margin-bottom:1rem;">';
    html += '<div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">';
    html += '<span style="font-size:1.3rem;">' + section.emoji + '</span>';
    html += '<span style="font-size:0.9rem;font-weight:700;color:var(--text-primary);">' + section.title + '</span>';
    html += '</div>';
    html += '<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.5rem;">';
    section.items.forEach(function(item) {
      html += '<li style="font-size:0.875rem;color:var(--text-muted);line-height:1.65;padding-left:0.5rem;border-left:2px solid ' + section.border + ';">' + item + '</li>';
    });
    html += '</ul></div>';
  });

  // Citations
  html += '<div style="background:rgba(168,85,247,0.06);border-radius:16px;padding:1rem;margin-top:0.5rem;border:1px solid rgba(168,85,247,0.15);">';
  html += '<div style="font-size:0.72rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.6rem;">\uD83D\uDCDA Sources & Education</div>';
  data.citations.forEach(function(cite) {
    html += '<div style="margin-bottom:0.4rem;">';
    html += '<span style="font-size:0.78rem;color:var(--accent);font-weight:600;">' + cite.org + '</span>';
    html += '<span style="font-size:0.75rem;color:var(--text-muted);"> \u2014 ' + cite.note + '</span>';
    html += '</div>';
  });
  html += '<p style="font-size:0.72rem;color:var(--text-muted);line-height:1.5;margin:0.75rem 0 0;">General education only \u2014 not medical advice. For personal health questions, consult a healthcare provider.</p>';
  html += '</div>';

  html += '</div>';
  container.innerHTML = html;
}



// ── Navigation wiring ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // The Tea nav buttons wired in init()


  // Freak Out Guide order button
  const freakOrder = $('freakOrderBtn');
  if (freakOrder) freakOrder.addEventListener('click', () => navigate('emergency'));


  // Start teen rotation when home is visible AND version is teen
  const homeEl = $('homeView');
  if (homeEl) {
    const observer = new MutationObserver(() => {
      if (homeEl.classList.contains('active') && state.version === 'teen') {
        startTeenFactRotation();
      } else {
        stopTeenFactRotation();
      }
    });
    observer.observe(homeEl, { attributes: true, attributeFilter: ['class'] });
    // Also start immediately if already on home + teen
    if (state.version === 'teen') startTeenFactRotation();
  }
});


// ── PWA INSTALL BANNER ──
(function() {
  const DISMISSED_KEY = 'period_pwa_dismissed';
  const INSTALLED_KEY = 'period_pwa_installed';


  // Don't show if already installed (standalone) or dismissed permanently
  if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) return;
  if (localStorage.getItem(INSTALLED_KEY)) return;
  if (localStorage.getItem(DISMISSED_KEY) > Date.now()) return;


  const banner   = document.getElementById('pwaInstallBanner');
  const closeBtn = document.getElementById('pwaBannerClose');
  const subText  = document.getElementById('pwaBannerSub');
  const steps    = document.getElementById('pwaBannerSteps');
  const mainBtn  = document.getElementById('pwaBannerBtn');


  const ua       = navigator.userAgent;
  const isIOS    = /iphone|ipad|ipod/i.test(ua);
  const isAndroid= /android/i.test(ua);


  let deferredPrompt = null;


  function showBanner() {
    if (!banner) return;
    banner.style.display = 'block';
  }


  function hideBanner(permanent) {
    if (!banner) return;
    banner.style.display = 'none';
    if (permanent) {
      // Dismiss for 30 days
      localStorage.setItem(DISMISSED_KEY, Date.now() + 30 * 24 * 60 * 60 * 1000);
    }
  }


  if (isIOS) {
    // iOS: show manual steps — can only install from Safari
    const isSafari = /safari/i.test(ua) && !/chrome|crios|fxios/i.test(ua);
    if (!isSafari) {
      // On iOS but not Safari — different message
      subText.textContent = 'Open this page in Safari to install the free app.';
      steps.innerHTML = '<span class="pwa-step">1. Copy the link</span><span class="pwa-step-arrow">›</span><span class="pwa-step">2. Open Safari</span><span class="pwa-step-arrow">›</span><span class="pwa-step">3. Paste & install</span>';
      mainBtn.style.display = 'none';
    } else {
      subText.textContent = 'Tap the share button below, then "Add to Home Screen."';
      steps.innerHTML = '<span class="pwa-step">1. Tap Share ⬆</span><span class="pwa-step-arrow">›</span><span class="pwa-step">2. Add to Home Screen</span><span class="pwa-step-arrow">›</span><span class="pwa-step">3. Tap Add</span>';
      mainBtn.textContent = 'Got it — I\'ll follow the steps';
      mainBtn.onclick = function() { hideBanner(true); };
    }
    // Show after 3 seconds
    setTimeout(showBanner, 3000);


  } else if (isAndroid) {
    // Android: use native beforeinstallprompt
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      subText.textContent = 'Install the free app in one tap — no App Store needed.';
      steps.innerHTML = '';
      mainBtn.textContent = 'Install Free App';
      mainBtn.onclick = async function() {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          localStorage.setItem(INSTALLED_KEY, '1');
          hideBanner(false);
        }
        deferredPrompt = null;
      };
      setTimeout(showBanner, 3000);
    });


  } else {
    // Desktop fallback — don't show
    return;
  }


  if (closeBtn) {
    closeBtn.onclick = function() { hideBanner(true); };
  }
})();
