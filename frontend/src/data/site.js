export const OWNER_NAME = 'Ishwar Singh';
export const PHONE = '+918219232827';
export const PHONE_DISPLAY = '+91 82192 32827';
export const PHONE_2 = '+919805576370';
export const PHONE_2_DISPLAY = '+91 98055 76370';
export const WA_NUMBER = '918219232827';
export const WA_DISPLAY = '+91 82192 32827';
export const EMAIL = 'jdvtravels07@gmail.com';
export const WEBSITE_URL = 'https://jdvtravels.in';
export const WEBSITE_DISPLAY = 'jdvtravels.in';
export const INSTAGRAM_URL = 'https://www.instagram.com/jdvtravels?utm_source=qr&mdxt=MXB5ZDZrZDI1cGVyaw%3D%3D';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61595524456060&rdid=CxTsO5t0BqHekWS2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HjRT2U1s7%2F#';

export const waLink = (text = "Hi JDV Travels, I'd like help booking a hotel.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/hotels', 'Hotels'],
  ['/why-us', 'Why Us'],
  ['/about', 'About Us'],
  ['/contact', 'Contact'],
];

export const DEST_OPTIONS = {
  'Himachal Pradesh': [
    'Jibhi',
    'Shimla',
    'Manali',
    'Lahul & Spiti',
    'Tirthan Valley',
    'Jalori Pass',
    'Sojha',
    'Dharamshala / McLeod Ganj',
    'Kasol & Parvati Valley',
    'Dalhousie & Khajjiar',
    'Kullu',
    'Kasauli',
    'Bir Billing',
    'Kinnaur & Chitkul',
  ],
  'Jammu & Kashmir': [
    'Srinagar',
    'Gulmarg',
    'Pahalgam',
    'Sonamarg',
    'Doodhpathri',
    'Patnitop & Sanasar',
    'Katra (Vaishno Devi)',
    'Jammu',
  ],
  'Ladakh': [
    'Leh',
    'Nubra Valley',
    'Pangong Tso Lake',
    'Tso Moriri',
    'Zanskar Valley',
    'Kargil & Drass',
  ],
  'Uttarakhand': [
    'Nainital',
    'Mussoorie',
    'Rishikesh',
    'Haridwar',
    'Auli',
    'Jim Corbett',
    'Dehradun',
    'Kanatal',
    'Lansdowne',
    'Chopta',
  ],
};

export const DESTINATIONS = [
  {
    name: 'Jibhi',
    state: 'himachal',
    img: '/Assets/destinations/jibhi.jpg',
    alt: 'Charming wooden cottages and pine forests in Jibhi',
    text: 'Peaceful wooden cottages, crystal-clear streams, hidden waterfalls and lush deodar forests.',
  },
  {
    name: 'Shimla',
    state: 'himachal',
    img: '/Assets/destinations/shimla.png',
    alt: 'Christ Church and the Ridge in Shimla at dusk',
    text: 'Colonial charm, the iconic Ridge, Mall Road walks, pine trails and panoramic mountain viewpoints.',
  },
  {
    name: 'Manali',
    state: 'himachal',
    img: '/Assets/destinations/manali.png',
    alt: 'Snow-capped peaks above pine forests in Manali',
    text: 'Snow-capped peaks, Solang Valley adventures, riverside cafes and cosy wooden mountain chalets.',
  },
  {
    name: 'Ladakh',
    state: 'ladakh',
    img: '/Assets/destinations/ladakh.jpg',
    alt: 'Vibrant turquoise Pangong Lake with mountain ranges in Ladakh',
    text: 'Mesmerising Pangong Tso, high passes, Nubra Valley sand dunes and ancient cliffside monasteries.',
  },
  {
    name: 'Lahul & Spiti',
    state: 'himachal',
    img: '/Assets/destinations/spiti.jpg',
    alt: 'Key Gompa monastery perched high in Spiti Valley',
    text: 'Dramatic cold desert landscapes, sacred Key Monastery, Chandratal Lake and starlit Himalayan skies.',
  },
  {
    name: 'Tirthan Valley',
    state: 'himachal',
    img: '/Assets/destinations/tirthan.jpg',
    alt: 'Riverside wooden retreat in Tirthan Valley surrounded by cedar trees',
    text: 'Pristine trout streams, cedar forests, offbeat river chalets and Great Himalayan National Park.',
  },
  {
    name: 'Jalori Pass',
    state: 'himachal',
    img: '/Assets/destinations/jalori-pass.jpg',
    alt: 'Alpine mountain pass and ridge trail at Jalori Pass',
    text: 'Breathtaking 10,800 ft mountain pass, 360° Himalayan views, alpine meadows and the Serolsar Lake trek.',
  },
  {
    name: 'Sojha',
    state: 'himachal',
    img: '/Assets/destinations/sojha.jpg',
    alt: 'Wooden alpine cottages overlooking misty valley in Sojha',
    text: 'Serene hamlet perched above the clouds with panoramic vistas of the Seraj Valley and snow ranges.',
  },
  {
    name: 'Srinagar',
    state: 'kashmir',
    img: '/Assets/destinations/srinagar.jpg',
    alt: 'Traditional shikara boat on Dal Lake in Srinagar against snow mountains',
    text: 'Paradise on earth: tranquil Dal Lake shikaras, handcrafted luxury houseboats and Mughal gardens.',
  },
  {
    name: 'Gulmarg',
    state: 'kashmir',
    img: '/Assets/destinations/gulmarg.jpg',
    alt: 'Alpine wildflower meadows and gondola in Gulmarg',
    text: 'Vast green meadows, snow-covered Apharwat peak, pine slopes and Asia’s highest gondola ride.',
  },
  {
    name: 'Dharamshala',
    state: 'himachal',
    img: '/Assets/destinations/dharamshala.png',
    alt: 'Prayer flags and a monastery in Dharamshala',
    text: 'Monasteries, Tibetan cafés and Dhauladhar views in McLeod Ganj.',
  },
  {
    name: 'Nainital',
    state: 'uttarakhand',
    img: '/Assets/destinations/nainital.png',
    alt: 'Boats on Naini Lake surrounded by hills in Nainital',
    text: 'Lake views, boating and cool hill breezes. A family favourite.',
  },
];

// NOTE: sample hotels across primary destinations — customizable with real partner stays
export const HOTELS = [
  {
    name: 'The Riverside Wood Chalet',
    loc: 'Jibhi, Himachal Pradesh',
    type: 'Boutique Wooden Cottage',
    tag: ['drop', 'Riverside'],
    img: '/Assets/destinations/jibhi.jpg',
    amenities: [['flame', 'Bonfire'], ['wifi', 'Free Wi-Fi'], ['coffee', 'Breakfast']],
  },
  {
    name: 'Snow Peak Chalet',
    loc: 'Manali, Himachal Pradesh',
    type: 'Mountain Chalet',
    tag: ['mountain', 'Snow View'],
    img: '/Assets/hotels/snow-chalet.png',
    amenities: [['flame', 'Bonfire'], ['coffee', 'Breakfast'], ['parking', 'Parking']],
  },
  {
    name: 'Tirthan Riverfront Retreat',
    loc: 'Tirthan Valley, Himachal Pradesh',
    type: 'Valley Homestay',
    tag: ['mountain', 'River View'],
    img: '/Assets/destinations/tirthan.jpg',
    amenities: [['mountain', 'River View'], ['wifi', 'Free Wi-Fi'], ['coffee', 'Breakfast']],
  },
  {
    name: 'Himalayan Cloud View Cottage',
    loc: 'Sojha, Himachal Pradesh',
    type: 'Alpine Stay',
    tag: ['mountain', 'Cloud View'],
    img: '/Assets/destinations/sojha.jpg',
    amenities: [['flame', 'Bonfire'], ['coffee', 'Breakfast'], ['wifi', 'Free Wi-Fi']],
  },
  {
    name: 'Ladakh Heritage Camp & Resort',
    loc: 'Leh & Ladakh',
    type: 'Luxury Mountain Stay',
    tag: ['mountain', 'Scenic View'],
    img: '/Assets/destinations/ladakh.jpg',
    amenities: [['coffee', 'Breakfast'], ['wifi', 'Free Wi-Fi'], ['parking', 'Parking']],
  },
  {
    name: 'Royal Dal Heritage Houseboat',
    loc: 'Srinagar, Kashmir',
    type: 'Luxury Houseboat',
    tag: ['drop', 'Lake View'],
    img: '/Assets/destinations/srinagar.jpg',
    amenities: [['drop', 'Lake View'], ['wifi', 'Free Wi-Fi'], ['coffee', 'Breakfast']],
  },
  {
    name: 'Spiti High-Altitude Eco Lodge',
    loc: 'Spiti Valley, Himachal Pradesh',
    type: 'Mountain Lodge',
    tag: ['mountain', 'Monastery View'],
    img: '/Assets/destinations/spiti.jpg',
    amenities: [['flame', 'Bonfire'], ['coffee', 'Breakfast'], ['parking', 'Parking']],
  },
  {
    name: 'The Lakeview Retreat',
    loc: 'Nainital, Uttarakhand',
    type: 'Boutique Resort',
    tag: ['drop', 'Lake View'],
    img: '/Assets/hotels/lakeside-resort.png',
    amenities: [['wifi', 'Free Wi-Fi'], ['coffee', 'Breakfast'], ['parking', 'Parking']],
  },
];

export const WHY = [
  ['shield', 'Hand-Picked Hotels & Chalets', 'We shortlist stays for hygiene, scenic location and warm hospitality, so you only see options worth booking.'],
  ['tag', 'Best Available Rates', 'We negotiate directly with property owners for your dates to get the lowest transparent price without markups.'],
  ['whatsapp', 'Quick WhatsApp Replies', 'Receive hotel photos, room options and prices directly on WhatsApp in minutes. No hassles, no waiting.'],
  ['compass', 'Himalayan Travel Experts', 'Specialists in all Himachal, Jammu & Kashmir, Ladakh, and Uttarakhand routes, weather, and hidden gems.'],
  ['wallet', 'Every Budget Covered', 'From cozy backpacker riverside chalets to luxury mountain resorts and houseboats, tailored to your budget.'],
  ['headset', 'Personal Concierge Support', 'One direct contact person from your initial enquiry until your check-out, just a call or message away.'],
];

export const STEPS = [
  ['send', 'Send an Enquiry', 'Select your destination or message us on WhatsApp, call, or email.'],
  ['search', 'Get Hand-Picked Stays', 'We check live availability and share curated cottages & hotels with the best prices.'],
  ['check', 'Confirm Your Booking', 'Pick your favourite stay. We confirm it directly with the property and send vouchers.'],
  ['smile', 'Enjoy the Mountains', "Pack your bags and experience the majestic Himalayas. We're on call throughout your journey."],
];
