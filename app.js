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
  // --- Emergency Kit ---
  { id:17, name:'Emergency Period Kit',          sub:'Pads + liners + wipes',         category:'period',   cat_label:'Period Care',     emoji:'🚨', price:14.99, badge:'Fastest',   eta:'~20 min', desc:'Pre-packed emergency kit: organic pads (regular + overnight), pantiliners, and intimate wipes. Everything you need, right now. No thinking required.', features:['Ready to Go','Fast Delivery','Organic Pads','Wipes Included'] },
  // --- Undies & Bottoms ---
  { id:18, name:'Cotton Brief Essentials 5-Pack',sub:'XS–XL · soft & breathable',      category:'clothing', cat_label:'Undies & Bottoms',emoji:'🧥', price:12.99, badge:'Must Have', eta:'~25 min', desc:'Ultra-soft 100% cotton briefs in a 5-pack. Perfect for emergencies or everyday comfort. Tagless waistband, full coverage. XS–XL.', features:['100% Cotton','Full Coverage','Tagless','5-Pack'] },
  { id:19, name:'High-Waist Cotton Briefs 3-Pack',sub:'XS–3XL · all sizes',            category:'clothing', cat_label:'Undies & Bottoms',emoji:'👙', price:18.99, badge:null,       eta:'~40 min', desc:'High-rise waist for extra coverage and comfort. Buttery-soft cotton, wide waistband, perfect for period days or anytime you want something cozy.', features:['High-Waist','Extra Coverage','Wide Band','3-Pack'] },
  { id:20, name:'Cozy Lounge Leggings',          sub:'One size fits most',              category:'clothing', cat_label:'Undies & Bottoms',emoji:'👖', price:27.99, badge:null,       eta:'~50 min', desc:'Ultra-soft brushed interior lounge leggings with a wide comfort waistband. Dark wash, no see-through, perfect for period days at home or on the go.', features:['Brushed Interior','Wide Band','Dark Wash','Full Length'] },
  { id:21, name:'Classic Biker Shorts',          sub:'High-waist · 5" inseam',             category:'clothing', cat_label:'Undies & Bottoms',emoji:'⚡',    price:22.99, badge:'Top Pick',   eta:'~45 min', desc:'High-waist compression biker shorts. No ride-up, no chafing. Perfect under dresses or on their own. Double-layered for confidence.', features:['Compression','No Ride-Up','Double Layer','High Waist'] },
  // --- Sweets ---
  { id:22, name:'Dark Chocolate Assortment',     sub:'Sea salt & almond · 3.5 oz',         category:'candy',    cat_label:'Sweets',          emoji:'🍫', price:11.99, badge:'Fan Fave',   eta:'~40 min', desc:'Rich 70% dark chocolate bark with sea salt and roasted almonds. Mood-lifting, antioxidant-rich, and honestly just delicious. Period approved.', features:['70% Dark Cocoa','Sea Salt','Antioxidants','Mood Boost'] },
  { id:23, name:'Gummy Candy Mix',               sub:'Sweet + sour · assorted',             category:'candy',    cat_label:'Sweets',          emoji:'🍮', price:8.99,  badge:null,       eta:'~35 min', desc:'A satisfying mix of sweet and sour gummies — fruity bears, worms, peach rings, and more. The craving is real and we are not judging.', features:['Assorted Flavors','Sweet + Sour','Shareable','Resealable Bag'] },
  { id:24, name:'Salted Caramel Cocoa Kit',      sub:'2 cocoa packets + caramel',        category:'candy',    cat_label:'Sweets',          emoji:'☕',    price:13.99, badge:null,       eta:'~45 min', desc:'Rich hot cocoa mix with a salted caramel drizzle pack. Just add hot water or milk. Cozy in a cup — perfect for period evenings on the couch.', features:['Rich Cocoa','Salted Caramel','Just Add Milk','2 Servings'] },
  // --- Cozy Picks ---
  { id:25, name:'Sheet Face Mask Set',           sub:'Hydrating + brightening · 5-pack',    category:'comfort',  cat_label:'Cozy Picks',      emoji:'🧖', price:15.99, badge:null,       eta:'~40 min', desc:'5-pack K-beauty sheet masks: hyaluronic acid, vitamin C brightening, centella calming, collagen firming, and charcoal pore-cleanse.', features:['5 Variety Masks','K-Beauty','Single Use','All Skin Types'] },
  { id:26, name:'Cozy Fuzzy Socks 3-Pack',       sub:'Ultra-plush · one size',              category:'comfort',  cat_label:'Cozy Picks',      emoji:'🧦', price:13.99, badge:'So Cozy',   eta:'~35 min', desc:'Thick cloud-soft fuzzy socks in 3 neutral shades. Non-slip sole, wide cuff, machine washable. You deserve the softest socks on your hardest days.', features:['Ultra-Plush','Non-Slip Sole','Machine Wash','3 Colors'] },
  { id:27, name:'Lavender Calm Roller',          sub:'Aromatherapy · 10 mL roller',         category:'comfort',  cat_label:'Cozy Picks',      emoji:'💜', price:14.99, badge:null,       eta:'~40 min', desc:'Essential oil blend — lavender, chamomile and eucalyptus — in a ready-to-use roller ball. Apply to pulse points for calm and stress relief.', features:['Lavender + Chamomile','Roller Ball','Pulse Points','Calming Blend'] },
  // --- Holistic & Natural ---
  { id:28, name:'Reusable Menstrual Disc',         sub:'Medical silicone · one size',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🌀', price:29.99, badge:'Zero Waste',  eta:'~50 min', desc:'Soft medical-grade silicone disc. Sits at the vaginal fornix — holds 4× more than a tampon. Reusable for years. Period sex safe.', features:['Medical Silicone','12-hr Wear','Reusable','Period-Sex Safe'] },
  { id:29, name:'Organic Cloth Pads Set',          sub:'Washable · 5-pack assorted',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🌿', price:34.99, badge:'Top Pick',    eta:'~45 min', desc:'Soft organic cotton washable pads — regular, heavy, and night sizes. Snap-wing design, leak-proof inner layer. Lasts 3–5 years.', features:['100% Organic Cotton','Washable','5-Pack Mix','Snap Wing'] },
  { id:30, name:'CBD Period Relief Salve',         sub:'50mg broad-spectrum · 2 oz',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🫚', price:32.99, badge:'Natural',     eta:'~50 min', desc:'Broad-spectrum CBD with arnica and clary sage in a beeswax base. Rub directly on the lower abdomen for targeted cramp and tension relief. Third-party tested.', features:['50mg CBD','Arnica','Clary Sage','3rd-Party Tested'] },
  { id:31, name:'Castor Oil Ritual Kit',           sub:'Cold-pressed + flannel pack',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🧴', price:26.99, badge:null,         eta:'~55 min', desc:'Cold-pressed organic castor oil with a reusable flannel pack. Apply to abdomen with gentle heat to ease cramps and bloating. A beloved holistic ritual.', features:['Cold-Pressed','Organic','Reusable Pack','Anti-Bloat'] },
  { id:32, name:'Magnesium Body Lotion',           sub:'Period + PMS relief · 6 oz',          category:'holistic', cat_label:'Holistic & Natural', emoji:'🌸', price:22.99, badge:'PMS Relief',   eta:'~45 min', desc:'Transdermal magnesium glycinate lotion. Absorbed through the skin for fast cramp, bloat, and mood relief. Fragrance-free, paraben-free.', features:['Magnesium Glycinate','Transdermal','Fragrance-Free','Fast Absorption'] },
  { id:33, name:'Cramp Bark Herbal Tea',           sub:'Red raspberry leaf blend · 20 bags',  category:'holistic', cat_label:'Holistic & Natural', emoji:'🍵', price:16.99, badge:'Herbalist Pick',eta:'~50 min', desc:'Potent blend of cramp bark, red raspberry leaf, ginger root, and passionflower. Targets uterine cramps and eases PMS tension naturally. Caffeine-free.', features:['Cramp Bark','Raspberry Leaf','Ginger','Caffeine-Free'] },
  { id:34, name:'Clary Sage Period Mist',          sub:'Aromatherapy · 4 oz spray',           category:'holistic', cat_label:'Holistic & Natural', emoji:'🌾', price:18.99, badge:null,         eta:'~45 min', desc:'Pure clary sage, lavender, and geranium in distilled witch hazel. Mist over lower abdomen or pulse points to support hormonal calm and cycle flow.', features:['Clary Sage','Geranium','Witch Hazel','Hormone-Supportive'] },
  { id:35, name:'Natural Sea Sponge Tampon',       sub:'Ethically harvested · 2-pack',        category:'holistic', cat_label:'Holistic & Natural', emoji:'🧽', price:19.99, badge:'Plastic-Free', eta:'~55 min', desc:'100% natural sea sponge — a traditional tampon alternative. Moistened and inserted like a tampon. Rinse, reuse, compost when done. Truly zero waste.', features:['100% Natural','Reusable','Compostable','Plastic-Free'] },
  { id:36, name:'Organic Period Underwear (2-pk)', sub:'Heavy flow · XS–3XL',                 category:'holistic', cat_label:'Holistic & Natural', emoji:'🌱', price:42.99, badge:'Best Seller',  eta:'~50 min', desc:'GOTS-certified organic cotton period underwear — heavy flow capacity, no synthetic liners. Tagless, breathable, and kind to sensitive skin. 2-pack.', features:['GOTS Certified','Organic Cotton','Heavy Flow','All Sizes'] },
  { id:37, name:'Beeswax Cramp Relief Balm',       sub:'Lavender + clove · 1 oz tin',         category:'holistic', cat_label:'Holistic & Natural', emoji:'🍯', price:15.99, badge:null,         eta:'~40 min', desc:'Traditional beeswax salve with clove, lavender, and peppermint oil. Warm into skin for localized cramp and back pain relief. 100% natural ingredients.', features:['Beeswax Base','Clove + Clary Sage','Peppermint','100% Natural'] },
];

const CATEGORIES = [
  { id:'all',      label:'All',              icon:'✦' },
  { id:'period',   label:'Period Care',      icon:'🌸' },
  { id:'intimate', label:'Intimate',         icon:'🫧' },
  { id:'wellness', label:'Wellness',         icon:'🌿' },
  { id:'skincare', label:'Skincare',         icon:'🌹' },
  { id:'hygiene',  label:'Hygiene',          icon:'🧴' },
  { id:'clothing', label:'Undies & Bottoms', icon:'👙' },
  { id:'candy',    label:'Sweets',           icon:'🍫' },
  { id:'comfort',  label:'Cozy Picks',       icon:'✨' },
  { id:'holistic', label:'Holistic & Natural', icon:'🌿' },
];

const PLANS = {
  starter:   { name:'Starter',   price:19.99, slots:3  },
  essential: { name:'Essential', price:34.99, slots:6  },
  royal:     { name:'Royal',     price:54.99, slots:9  },
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
    card1Desc:           'Delivered right to you in under an hour. Like DoorDash but for your care \u2014 periodt.',
    card2Title:          'My Monthly for My Monthly',
    card2Desc:           'Pick your plan, choose your faves, and get your care package every month. period, pooh \u2728',
    howTitle:            'how it works \u{1F451}',
    step1Name:           'Browse & Pick',
    step1Desc:           'Shop our full menu \u2014 period care, intimate wellness, skincare & more. Whatever you need.',
    step2Name:           'Order Placed',
    step2Desc:           'We link up with our supplier partners and get your order moving. Periodt.',
    step3Name:           'Right to You',
    step3Desc:           '30\u201360 mins for on-demand, or on your date for your monthly box. Home, school, office \u2014 no stress, period, pooh.',
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
    card1Desc:           'Get feminine care products delivered right to you in under an hour \u2014 fast, discreet, and reliable when you need it.',
    card2Title:          'Care Package',
    card2Desc:           'A monthly subscription built around you. Choose your plan, select your products, and we handle the rest.',
    howTitle:            'How It Works',
    step1Name:           'Browse & Select',
    step1Desc:           'Shop our curated catalog \u2014 period care, intimate wellness, skincare, hygiene, and more.',
    step2Name:           'Place Your Order',
    step2Desc:           'We connect with our supplier partners and arrange fast delivery directly to you.',
    step3Name:           'Delivered to You',
    step3Desc:           '30\u201360 minutes for on-demand orders, or on your chosen delivery date for Care Packages \u2014 home, office, school, wherever you are.',
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
    trustBadges:         ['\U0001F6A8 Under 30 Min', '\U0001F4E6 Discreet Pack', '\U0001F9F7 Always Stocked', '\u26a1 Order Fast', '\U0001F49C No Judgment'],
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
    step3Desc:           'Delivered in eco-conscious packaging \u2014 home, office, or wherever you are. 30\u201360 min on-demand or on your monthly schedule.',
    trustBadges:         ['🌿 100% Natural', '♻️ Zero Waste', '🧪 Third-Party Tested', '🌱 No Synthetics', '💚 Toxin-Free'],
    subEyebrow:          'Monthly Natural Box',
    subTitle:            'My Natural<br><span>Monthly.</span>',
    subSub:              'Choose your plan, select your holistic essentials, and receive a fully natural care package every month.',
    plansLabel:          'Step 1 — Choose Your Plan',
    pickerTitle:         'Step 2 — Build Your Natural Box',
  },

  gifter: {
    heroTagline:         'show up for her. \U0001F451',
    heroSub:             "let's be real \u2014 it's not the most fun week. but you showing up? that changes everything.",
    heroOrderNowText:    'Gift Her Now',
    heroCarePackageText: 'Monthly Gift Box',
    card1Title:          'Gift Her Now',
    card1Desc:           "Because we know it's a rough one. Chocolate, cozy socks, heating patches, period care \u2014 build her a care basket and get it to her today.",
    card2Title:          'Monthly Gift Box',
    card2Desc:           "Set it up once and she gets a thoughtful delivery every month \u2014 right before or during her cycle. She'll know exactly how much you care.",
    howTitle:            'How It Works',
    step1Name:           'Pick Her Favorites',
    step1Desc:           "Browse candy, cozy picks, period care, bottoms, skincare \u2014 everything she loves.",
    step2Name:           'Add a Sweet Note',
    step2Desc:           "Personalize your gift and we handle the rest \u2014 packaged with care and discretion.",
    step3Name:           'Delivered to Her',
    step3Desc:           "Discreet delivery right to her \u2014 home, office, school, wherever she is. Same-day or monthly, so she always knows you're thinking of her.",
    trustBadges:         ['\U0001F381 Gift-Ready', '\U0001F36B Sweets Included', '\U0001F48C Personal Note', '\U0001F680 Same-Day Delivery', "\U0001F451 She'll Love It"],
    subEyebrow:          'Monthly Gift Box',
    subTitle:            'Send love<br><span>every month.</span>',
    subSub:              "Set up a recurring gift box \u2014 she gets a thoughtful delivery every cycle or on whatever schedule you set.",
    plansLabel:          'Step 1 \u2014 Choose a Gift Plan',
    pickerTitle:         'Step 2 \u2014 Pick What She Gets',
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
  version:         null,       // 'teen' | 'adult'
  cart:            {},          // { id: qty }
  careBox:         {},          // { id: qty } for subscription
  activeCategory:  'all',
  shopMode:        'categories', // 'categories' | 'products'
  pickerFilter:    'all',       // category filter inside subscription picker
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
  const validVersions = ['teen', 'adult', 'emergency', 'gifter', 'holistic'];
  if (validVersions.includes(stored)) {
    setVersion(stored);
    // Head script already set data-version, CSS hides picker — force display:none as backup
    const picker = $('versionPicker');
    if (picker) picker.style.display = 'none';
  } else {
    // First visit — show the picker
    document.body.style.overflow = 'hidden';
  }

  const pickTeen      = $('pickTeen');
  const pickAdult     = $('pickAdult');
  const pickEmergency = $('pickEmergency');
  const pickGifter    = $('pickGifter');
  const pickHolistic  = $('pickHolistic');
  const switchBtn     = $('switchModeBtn');

  if (pickTeen)      pickTeen.addEventListener('click',      () => { setVersion('teen');      dismissVersionPicker(); });
  if (pickAdult)     pickAdult.addEventListener('click',     () => { setVersion('adult');     dismissVersionPicker(); });
  if (pickEmergency) pickEmergency.addEventListener('click', () => {
    setVersion('emergency');
    dismissVersionPicker();
    // Emergency = no time to browse — go straight to products
    setTimeout(() => { navigate('shop'); showProductsMode('all'); }, 460);
  });
  if (pickGifter)    pickGifter.addEventListener('click',    () => { setVersion('gifter');    dismissVersionPicker(); });
  if (pickHolistic)  pickHolistic.addEventListener('click',  () => { setVersion('holistic');  dismissVersionPicker(); });
  if (switchBtn)     switchBtn.addEventListener('click', showVersionPicker);
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
    state.searchQuery = '';
    if ($('searchInput')) $('searchInput').value = '';
    // Emergency mode skips categories — show all products immediately
    if (state.version === 'emergency') {
      showProductsMode('all');
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
    if (state.activeCategory === 'favorites') return getFavorites().includes(p.id);
    const catOk = state.activeCategory === 'all' || p.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const srchOk = !q || p.name.toLowerCase().includes(q) || p.cat_label.toLowerCase().includes(q) || p.features.some(f => f.toLowerCase().includes(q));
    return catOk && srchOk;
  });
}

/* Show the category browse grid */
function showCategoriesMode() {
  state.shopMode = 'categories';
  state.activeCategory = 'all';
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
    btn.addEventListener('click', e => { e.stopPropagation(); addToCart(+btn.dataset.add); });
  });
  grid.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleFavorite(+btn.dataset.fav); });
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
  state.pickerFilter = 'all';  // reset filter on plan change
  updateSubscribeBtn();
  renderPickerFilter();
  renderPickerGrid();
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
  // Validate cart has items
  const itemCount = Object.values(state.cart).reduce((s, n) => s + n, 0);
  if (itemCount === 0) {
    showToast('Add items to your cart first ✨');
    return;
  }

  const label = provider === 'apple' ? 'Apple Pay' : 'Google Pay';

  // When Stripe is connected (Day 2), this will trigger the native payment sheet.
  // For now, simulate the express checkout flow.
  showToast(`${label} — payment goes live on launch day 🚀`);

  // Simulate brief processing then complete order
  setTimeout(() => {
    placeOrder();
  }, 900);
}

function placeOrder() {
  // Clear cart and show success
  state.cart = {};
  updateCartBadge();
  renderCart();
  if (state.shopMode === 'products') renderProductGrid();
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
    if (e.key === 'Escape') { closeModal(); closeCart(); closeAddressModal(); closeNewsletterModal(); }
  });

  // Newsletter
  if ($('openNewsletterBtn'))  $('openNewsletterBtn').addEventListener('click', showNewsletterModal);
  if ($('nlCloseBtn'))         $('nlCloseBtn').addEventListener('click', closeNewsletterModal);
  if ($('nlSubmitBtn'))        $('nlSubmitBtn').addEventListener('click', subscribeNewsletter);
  if ($('nlOpenTracker'))      $('nlOpenTracker').addEventListener('click', () => { closeNewsletterModal(); navigate('tracker'); });
  if ($('newsletterModal'))    $('newsletterModal').addEventListener('click', e => { if (e.target === $('newsletterModal')) closeNewsletterModal(); });
  if ($('nlEmailInput'))       $('nlEmailInput').addEventListener('keydown', e => { if (e.key === 'Enter') subscribeNewsletter(); });

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
    const d = getTrackerData();
    const al = calcAvgCycleLength(d.cycles), ad = calcAvgDuration(d.cycles);
    renderTrackerCalendar(d.cycles, al, ad, getNextPeriodDate(d.cycles, al), todayStr());
    const ml = $('trackerMonthLabel');
    const MN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    if (ml) ml.textContent = MN[month] + ' ' + year;
  });
  if ($('logStart')) $('logStart').addEventListener('click', logPeriodStart);
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
  },
  slang: {
    teen:      ["understood the assignment 💅","main character era ✨","it's giving wellness 🌸","slay, periodt 👑","LutealTok made me do it 🌙","cycle check queen 👑","that girl activated ✨","real for that, no cap 💜","hot girl healing era 🌸","understood the vibes 💅"],
    adult:     ["living in alignment 🌙","luteal phase supported 💜","cycle-synced and thriving","hormonal health era 🌿","radical softness, always","doing the work 👑","follicular energy activated ✨","in my wellness era 🌸","cycle-aware baddie 👑","aligned and unbothered 🌙"],
    emergency: ["we've got you, always ⚡","SOS handled 🚨","never caught off guard 💪","always stocked, always ready 🧷"],
    gifter:    ["show up for her 👑","she deserves it, periodt 💝","thoughtful queen energy 🎁","because you see her 💜"],
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
  const pills = $('trendingPills');
  if (!strip || !pills) return;

  const v      = state.version || 'adult';
  const focus  = (_trends.weeklyFocus || {})[v];
  const trendIds = _trends.trendingProductIds || [];
  const items  = [];

  if (focus) items.push(`<div class="trending-pill trending-pill--focus">${focus.label}</div>`);

  const slang = getWeeklySlang(v);
  if (slang) items.push(`<div class="trending-pill"><span class="fire">✦</span> ${slang}</div>`);

  trendIds.slice(0, 4).forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) items.push(`<div class="trending-pill">${p.emoji} ${p.name.split(' ').slice(0,2).join(' ')}</div>`);
  });

  pills.innerHTML = items.join('');
  strip.style.display = 'flex';
}

/* =============================================
   NEWSLETTER SYSTEM
   ============================================= */

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

function renderTracker() {
  const data       = getTrackerData();
  const { cycles } = data;
  const avgLength  = calcAvgCycleLength(cycles);
  const avgDur     = calcAvgDuration(cycles);
  const today      = todayStr();
  const nextPeriod = getNextPeriodDate(cycles, avgLength);
  const v          = state.version || 'adult';
  const lastCycle  = cycles.length ? cycles[cycles.length - 1] : null;

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
  const alreadyLogged = data.cycles.some(c => dateStr >= c.s && dateStr <= (c.e || c.s));
  if (alreadyLogged) { showToast('Already logged'); return; }
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
    showToast('Browser notifications not supported on this device');
    return;
  }
  if (Notification.permission === 'granted') {
    saveBrowserReminder();
    return;
  }
  if (Notification.permission === 'denied') {
    showToast('Notifications blocked — enable them in your browser settings');
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    saveBrowserReminder();
  } else {
    showToast('Notifications permission not granted');
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
  showToast('SMS reminder saved \u2713');
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
    lastUpdated: 'April 6, 2026',
    content: `
      <p class="legal-updated">Last updated: April 6, 2026</p>

      <h3>Who We Are</h3>
      <p>Periodt LLC ("we," "us," or "our") operates the . (Period) platform — a feminine care delivery and subscription service based in Cleveland, Ohio. We are the middleman between you and our supplier partners. We do not manufacture or warehouse products.</p>

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
      <p>To exercise any of these rights, email us at <a href="mailto:privacy@shopperiodt.com">privacy@shopperiodt.com</a>.</p>

      <h3>Data Security</h3>
      <p>We use industry-standard encryption (HTTPS/TLS) for all data in transit. Payment data is handled exclusively by Stripe and never touches our servers. We regularly review our security practices.</p>

      <h3>Changes to This Policy</h3>
      <p>We may update this policy from time to time. When we do, we'll update the "Last updated" date at the top and notify newsletter subscribers of material changes.</p>

      <h3>Contact Us</h3>
      <p>Periodt LLC<br>Cleveland, Ohio<br>Email: <a href="mailto:privacy@shopperiodt.com">privacy@shopperiodt.com</a></p>
    `
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'April 6, 2026',
    content: `
      <p class="legal-updated">Last updated: April 6, 2026</p>

      <h3>Agreement to Terms</h3>
      <p>By accessing or using the . (Period) platform operated by Periodt LLC ("we," "us," "our"), you agree to these Terms of Service. If you do not agree, please do not use our service. You must be at least 13 years old to use this platform.</p>

      <h3>What We Do</h3>
      <p>Periodt LLC is a middleman service. We connect customers with third-party supplier partners for feminine care, wellness, and related products. We do not manufacture, store, or ship products ourselves. We coordinate on-demand delivery through third-party courier services (DoorDash Drive, Uber Direct) and monthly subscription fulfillment through our supplier network.</p>

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
        <li>You may cancel your subscription at any time before the next billing date. Cancellations take effect the following billing cycle.</li>
        <li>We do not offer refunds for subscription boxes that have already shipped.</li>
        <li>You may swap items in your box at any time before your monthly cutoff date.</li>
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
      <p>The . (Period) name, crown logo, app design, copy, and all original content are owned by Periodt LLC. You may not copy, reproduce, or use our brand assets without written permission. All rights reserved.</p>

      <h3>Prohibited Uses</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the platform for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, copy, or replicate our platform</li>
        <li>Submit false or fraudulent orders</li>
        <li>Harass, abuse, or harm other users or our team</li>
      </ul>

      <h3>Limitation of Liability</h3>
      <p>To the fullest extent permitted by Ohio law, Periodt LLC is not liable for indirect, incidental, or consequential damages arising from use of our service, including delivery delays, product allergic reactions (please review product ingredients), or third-party service failures. Our total liability for any claim shall not exceed the amount you paid for the specific order in question.</p>

      <h3>Health Disclaimer</h3>
      <p>Products sold through our platform are not intended to diagnose, treat, cure, or prevent any medical condition. The period tracker and health content on this platform are for informational purposes only and do not constitute medical advice. Consult a healthcare provider for medical concerns.</p>

      <h3>Governing Law</h3>
      <p>These Terms are governed by the laws of the State of Ohio, United States. Any disputes shall be resolved in the courts of Cuyahoga County, Ohio.</p>

      <h3>Changes to Terms</h3>
      <p>We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms. We'll notify subscribers of material changes.</p>

      <h3>Contact Us</h3>
      <p>Periodt LLC<br>Cleveland, Ohio<br>Email: <a href="mailto:legal@shopperiodt.com">legal@shopperiodt.com</a></p>
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
