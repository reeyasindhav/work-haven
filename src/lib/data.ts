export type Amenity =
  | "Fast WiFi"
  | "Power outlets"
  | "Quiet zones"
  | "Coffee"
  | "Outdoor"
  | "Meeting rooms"
  | "Standing desks"
  | "Phone booths"
  | "24/7 access";

export type SpaceType = "Coworking space" | "Work-friendly café" | "Treehouse pick" | "Studio";

export interface Space {
  id: string;
  name: string;
  type: SpaceType;
  city: string;
  country: string;
  neighborhood: string;
  price: number;
  rating: number;
  reviews: number;
  amenities: Amenity[];
  images: string[];
  description: string;
  wifiMbps: number;
  noise: "Silent" | "Low hum" | "Lively";
  seats: number;
  openHours: string;
  host: string;
  // relative position on the stylized map (0-100)
  mx: number;
  my: number;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const AMENITIES: Amenity[] = [
  "Fast WiFi",
  "Power outlets",
  "Quiet zones",
  "Coffee",
  "Outdoor",
  "Meeting rooms",
  "Standing desks",
  "Phone booths",
  "24/7 access",
];

export const CITIES = [
  { name: "Lisbon, Portugal", spaces: 54, image: img("1585208798174-6cedd86e019a", 800) },
  { name: "Barcelona, Spain", spaces: 61, image: img("1523531294919-4bcd7c65e216", 800) },
  { name: "Berlin, Germany", spaces: 48, image: img("1560969184-10fe8719e047", 800) },
  { name: "Bali, Indonesia", spaces: 37, image: img("1537996194471-e657df975ab4", 800) },
  { name: "Mexico City, Mexico", spaces: 42, image: img("1518105779142-d975f22f1b0a", 800) },
  { name: "Tokyo, Japan", spaces: 29, image: img("1540959733332-eab4deabeeaf", 800) },
];

export const SPACES: Space[] = [
  {
    id: "second-home-lisboa",
    name: "Second Home Lisboa",
    type: "Treehouse pick",
    city: "Lisbon, Portugal",
    country: "Portugal",
    neighborhood: "Cais do Sodré",
    price: 18,
    rating: 4.9,
    reviews: 128,
    amenities: ["Fast WiFi", "Quiet zones", "Coffee", "Meeting rooms", "Standing desks"],
    images: [
      img("1497366754035-f200968a6e72"),
      img("1497366811353-6870744d04b2"),
      img("1524758631624-e2822e304c36"),
      img("1600607687939-ce8a6c25118c"),
    ],
    description:
      "A jungle of 1,000 plants wrapped around a former market hall. Deep-focus desks by the glass wall, plus a shared kitchen that smells permanently of good coffee.",
    wifiMbps: 320,
    noise: "Low hum",
    seats: 46,
    openHours: "08:00 – 20:00",
    host: "Marta Ribeiro",
    mx: 28,
    my: 40,
  },
  {
    id: "the-folks-cafe",
    name: "The Folks Café",
    type: "Work-friendly café",
    city: "Lisbon, Portugal",
    country: "Portugal",
    neighborhood: "Alfama",
    price: 8,
    rating: 4.7,
    reviews: 86,
    amenities: ["Fast WiFi", "Power outlets", "Coffee", "Outdoor"],
    images: [
      img("1554118811-1e0d58224f24"),
      img("1453614512568-c4024d13c247"),
      img("1495474472287-4d71bcdd2085"),
      img("1501339847302-ac426a4a7cbb"),
    ],
    description:
      "Bikes on the wall, filter coffee on tap, and a long communal table that fills with laptops by 10am. Outlets under every seat.",
    wifiMbps: 140,
    noise: "Lively",
    seats: 18,
    openHours: "07:30 – 18:00",
    host: "João Aguiar",
    mx: 62,
    my: 26,
  },
  {
    id: "heden-graca",
    name: "Heden Graça",
    type: "Coworking space",
    city: "Lisbon, Portugal",
    country: "Portugal",
    neighborhood: "Graça",
    price: 15,
    rating: 4.8,
    reviews: 204,
    amenities: ["Fast WiFi", "Power outlets", "Phone booths", "Meeting rooms", "24/7 access"],
    images: [
      img("1521737604893-d14cc237f11d"),
      img("1497215728101-856f4ea42174"),
      img("1556761175-b413da4baf72"),
      img("1503387762-592deb58ef4e"),
    ],
    description:
      "Concrete, oak and north light. Four phone booths, two meeting rooms and a rooftop that looks straight at the river.",
    wifiMbps: 480,
    noise: "Silent",
    seats: 72,
    openHours: "24 hours",
    host: "Heden Team",
    mx: 44,
    my: 62,
  },
  {
    id: "estufa-botanica",
    name: "Estufa Botânica",
    type: "Work-friendly café",
    city: "Lisbon, Portugal",
    country: "Portugal",
    neighborhood: "Príncipe Real",
    price: 6,
    rating: 4.6,
    reviews: 63,
    amenities: ["Coffee", "Outdoor", "Fast WiFi", "Quiet zones"],
    images: [
      img("1517248135467-4c7edcad34c4"),
      img("1462826303086-329426d1aef5"),
      img("1559925393-8be0ec4767c8"),
      img("1470071459604-3b5ec3a7fe05"),
    ],
    description:
      "A greenhouse café hidden behind a plant shop. Slow mornings, ferns everywhere and the quietest terrace in the neighbourhood.",
    wifiMbps: 95,
    noise: "Low hum",
    seats: 24,
    openHours: "08:00 – 19:00",
    host: "Inês Costa",
    mx: 74,
    my: 58,
  },
  {
    id: "aticco-bailen",
    name: "Aticco Bailèn",
    type: "Coworking space",
    city: "Barcelona, Spain",
    country: "Spain",
    neighborhood: "Eixample",
    price: 22,
    rating: 4.9,
    reviews: 312,
    amenities: ["Fast WiFi", "Meeting rooms", "Standing desks", "Outdoor", "Phone booths"],
    images: [
      img("1600585154340-be6161a56a0c"),
      img("1531973576160-7125cd663d86"),
      img("1519389950473-47ba0277781c"),
      img("1497366754035-f200968a6e72"),
    ],
    description:
      "A modernist block with a rooftop pool and 300 members. Hot desks on the fifth floor look over the Sagrada Família.",
    wifiMbps: 600,
    noise: "Low hum",
    seats: 120,
    openHours: "07:00 – 22:00",
    host: "Aticco",
    mx: 34,
    my: 22,
  },
  {
    id: "nomad-coffee-lab",
    name: "Nomad Coffee Lab",
    type: "Work-friendly café",
    city: "Barcelona, Spain",
    country: "Spain",
    neighborhood: "El Born",
    price: 7,
    rating: 4.5,
    reviews: 141,
    amenities: ["Coffee", "Fast WiFi", "Power outlets"],
    images: [
      img("1495474472287-4d71bcdd2085"),
      img("1453614512568-c4024d13c247"),
      img("1554118811-1e0d58224f24"),
      img("1517248135467-4c7edcad34c4"),
    ],
    description:
      "Serious espresso, small marble tables, and a back room that stays quiet until lunch. Best for two-hour focus sprints.",
    wifiMbps: 120,
    noise: "Lively",
    seats: 14,
    openHours: "08:00 – 17:00",
    host: "Nomad",
    mx: 66,
    my: 44,
  },
  {
    id: "st-oberholz",
    name: "St. Oberholz",
    type: "Treehouse pick",
    city: "Berlin, Germany",
    country: "Germany",
    neighborhood: "Mitte",
    price: 16,
    rating: 4.7,
    reviews: 489,
    amenities: ["Fast WiFi", "Power outlets", "Coffee", "Meeting rooms", "24/7 access"],
    images: [
      img("1497366811353-6870744d04b2"),
      img("1556761175-b413da4baf72"),
      img("1521737604893-d14cc237f11d"),
      img("1497215728101-856f4ea42174"),
    ],
    description:
      "The original laptop café, now half coworking floor. Big windows onto Rosenthaler Platz and the best people-watching in Mitte.",
    wifiMbps: 400,
    noise: "Lively",
    seats: 90,
    openHours: "24 hours",
    host: "Oberholz",
    mx: 24,
    my: 68,
  },
  {
    id: "kraftwerk-studio",
    name: "Kraftwerk Studio",
    type: "Studio",
    city: "Berlin, Germany",
    country: "Germany",
    neighborhood: "Kreuzberg",
    price: 12,
    rating: 4.6,
    reviews: 77,
    amenities: ["Quiet zones", "Standing desks", "Fast WiFi", "Phone booths"],
    images: [
      img("1503387762-592deb58ef4e"),
      img("1600607687939-ce8a6c25118c"),
      img("1531973576160-7125cd663d86"),
      img("1519389950473-47ba0277781c"),
    ],
    description:
      "A converted power substation with twelve desks, absolute silence and a rule: no calls on the main floor.",
    wifiMbps: 250,
    noise: "Silent",
    seats: 12,
    openHours: "09:00 – 19:00",
    host: "Lena Vogt",
    mx: 56,
    my: 78,
  },
  {
    id: "outpost-ubud",
    name: "Outpost Ubud",
    type: "Coworking space",
    city: "Bali, Indonesia",
    country: "Indonesia",
    neighborhood: "Ubud",
    price: 11,
    rating: 4.8,
    reviews: 356,
    amenities: ["Fast WiFi", "Outdoor", "Coffee", "Meeting rooms", "24/7 access"],
    images: [
      img("1537996194471-e657df975ab4"),
      img("1470071459604-3b5ec3a7fe05"),
      img("1524758631624-e2822e304c36"),
      img("1600585154340-be6161a56a0c"),
    ],
    description:
      "Open-air desks over a rice terrace, with an air-conditioned quiet room for the afternoon heat. Fibre backed by generator.",
    wifiMbps: 200,
    noise: "Low hum",
    seats: 65,
    openHours: "24 hours",
    host: "Outpost",
    mx: 18,
    my: 34,
  },
  {
    id: "casa-tabacalera",
    name: "Casa Tabacalera",
    type: "Treehouse pick",
    city: "Mexico City, Mexico",
    country: "Mexico",
    neighborhood: "Roma Norte",
    price: 9,
    rating: 4.7,
    reviews: 198,
    amenities: ["Coffee", "Fast WiFi", "Outdoor", "Power outlets", "Quiet zones"],
    images: [
      img("1518105779142-d975f22f1b0a"),
      img("1559925393-8be0ec4767c8"),
      img("1462826303086-329426d1aef5"),
      img("1453614512568-c4024d13c247"),
    ],
    description:
      "A 1920s townhouse with a courtyard full of jacaranda shade. Desks upstairs, café downstairs, jazz after 6pm.",
    wifiMbps: 180,
    noise: "Low hum",
    seats: 38,
    openHours: "08:00 – 21:00",
    host: "Ana Lucía",
    mx: 48,
    my: 18,
  },
  {
    id: "midori-desk",
    name: "Midori Desk",
    type: "Coworking space",
    city: "Tokyo, Japan",
    country: "Japan",
    neighborhood: "Nakameguro",
    price: 20,
    rating: 4.9,
    reviews: 92,
    amenities: ["Quiet zones", "Fast WiFi", "Phone booths", "Standing desks", "24/7 access"],
    images: [
      img("1540959733332-eab4deabeeaf"),
      img("1497215728101-856f4ea42174"),
      img("1521737604893-d14cc237f11d"),
      img("1503387762-592deb58ef4e"),
    ],
    description:
      "Sixteen desks facing the canal. Shoes off, whispers only, matcha included with every booking.",
    wifiMbps: 900,
    noise: "Silent",
    seats: 16,
    openHours: "24 hours",
    host: "Kenji Sato",
    mx: 72,
    my: 72,
  },
  {
    id: "the-riverside-room",
    name: "The Riverside Room",
    type: "Work-friendly café",
    city: "Lisbon, Portugal",
    country: "Portugal",
    neighborhood: "Belém",
    price: 5,
    rating: 4.4,
    reviews: 51,
    amenities: ["Coffee", "Outdoor", "Power outlets"],
    images: [
      img("1501339847302-ac426a4a7cbb"),
      img("1554118811-1e0d58224f24"),
      img("1495474472287-4d71bcdd2085"),
      img("1517248135467-4c7edcad34c4"),
    ],
    description:
      "Cheap coffee, river breeze and a terrace that empties after the tourist buses leave at four.",
    wifiMbps: 60,
    noise: "Lively",
    seats: 22,
    openHours: "08:00 – 18:00",
    host: "Café Belém",
    mx: 14,
    my: 82,
  },
];

export const getSpace = (id: string) => SPACES.find((s) => s.id === id);

export interface Booking {
  id: string;
  spaceId: string;
  date: string;
  slot: string;
  seats: number;
  total: number;
  status: "Upcoming" | "Completed" | "Cancelled";
}

export const SEED_BOOKINGS: Booking[] = [
  {
    id: "TH-4821",
    spaceId: "second-home-lisboa",
    date: "2026-08-26",
    slot: "Full day · 09:00 – 18:00",
    seats: 1,
    total: 18,
    status: "Upcoming",
  },
  {
    id: "TH-4790",
    spaceId: "heden-graca",
    date: "2026-08-28",
    slot: "Morning · 09:00 – 13:00",
    seats: 2,
    total: 18,
    status: "Upcoming",
  },
  {
    id: "TH-4655",
    spaceId: "the-folks-cafe",
    date: "2026-08-12",
    slot: "Afternoon · 13:00 – 18:00",
    seats: 1,
    total: 8,
    status: "Completed",
  },
  {
    id: "TH-4610",
    spaceId: "st-oberholz",
    date: "2026-07-30",
    slot: "Full day · 09:00 – 18:00",
    seats: 1,
    total: 16,
    status: "Completed",
  },
  {
    id: "TH-4502",
    spaceId: "nomad-coffee-lab",
    date: "2026-07-14",
    slot: "Morning · 08:00 – 12:00",
    seats: 1,
    total: 7,
    status: "Cancelled",
  },
];

export const FOCUS_WEEK = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.5 },
  { day: "Wed", hours: 4 },
  { day: "Thu", hours: 8 },
  { day: "Fri", hours: 5.5 },
  { day: "Sat", hours: 2 },
  { day: "Sun", hours: 0 },
];

export const REVIEWS = [
  {
    name: "Priya N.",
    role: "Product designer · Bengaluru",
    text: "I planned three weeks in Lisbon around Treehouse. Every space I booked had the wifi speed it promised — that alone was worth it.",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    space: "Second Home Lisboa",
    date: "2026-08-18",
  },
  {
    name: "Tom H.",
    role: "Backend engineer · Berlin",
    text: "The noise rating is the killer feature. I filter to Silent, book a phone booth, and my standups stop being embarrassing.",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    space: "Heden Graça",
    date: "2026-08-12",
  },
  {
    name: "Sofia M.",
    role: "Freelance writer · Mexico City",
    text: "Booking a café desk for five euros for the afternoon feels absurd in the best way. No more buying three coffees out of guilt.",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    space: "Casa Tabacalera",
    date: "2026-08-05",
  },
  {
    name: "Lena V.",
    role: "Designer · Barcelona",
    text: "Atico Bailen’s rooftop alone is worth the day pass. I had calls in the meeting room and deep work in the hot desk area.",
    avatar: "https://i.pravatar.cc/120?img=9",
    rating: 5,
    space: "Aticco Bailèn",
    date: "2026-07-28",
  },
  {
    name: "Kenji S.",
    role: "Founder · Tokyo",
    text: "Midori Desk feels like the calmest place in Nakameguro. Consistent speed, great light, and the standing desks actually work.",
    avatar: "https://i.pravatar.cc/120?img=53",
    rating: 4,
    space: "Midori Desk",
    date: "2026-07-20",
  },
  {
    name: "Ana L.",
    role: "Marketing · Mexico City",
    text: "Treehouse removed the guesswork from café hunting. I trusted the reviews, booked instantly, and worked better.",
    avatar: "https://i.pravatar.cc/120?img=25",
    rating: 5,
    space: "Casa Tabacalera",
    date: "2026-07-14",
  },
];

export const SLOTS = [
  { id: "morning", label: "Morning", time: "09:00 – 13:00", factor: 0.55 },
  { id: "afternoon", label: "Afternoon", time: "13:00 – 18:00", factor: 0.6 },
  { id: "full", label: "Full day", time: "09:00 – 18:00", factor: 1 },
  { id: "evening", label: "Evening", time: "18:00 – 22:00", factor: 0.45 },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-find-the-perfect-coworking-space",
    title: "How to find the perfect coworking space for deep focus",
    excerpt:
      "A practical guide to choosing a workspace that matches your work style, from noise levels to coffee quality.",
    content:
      "Finding the right coworking space isn't just about aesthetics. Start by identifying your ideal noise level — silent for deep focus, low hum for collaboration. Check wifi speeds, power outlet density, and whether the space offers phone booths or meeting rooms. Visit during your actual working hours to test the vibe. Finally, read recent reviews from other remote workers to catch any hidden issues.",
    author: "Marta Ribeiro",
    date: "2026-08-20",
    readTime: "5 min read",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "remote-work-mistakes-to-avoid",
    title: "7 remote work mistakes to avoid in your first month",
    excerpt:
      "From irregular hours to ignoring ergonomics, here are the pitfalls new remote workers should watch out for.",
    content:
      "Your first month of remote work can set the tone for your entire career. Avoid working from bed, maintain a consistent schedule, invest in a good chair, and set clear boundaries with housemates. Don't skip lunch breaks, and make sure you have a dedicated workspace. Finally, prioritize communication with your team — absence of visibility can hurt your career growth.",
    author: "Tom H.",
    date: "2026-08-15",
    readTime: "4 min read",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "best-cafes-for-remote-work-in-lisbon",
    title: "The best cafés for remote work in Lisbon",
    excerpt:
      "Our top picks for cafés with fast wifi, great coffee, and a productive atmosphere in Lisbon.",
    content:
      "Lisbon has become a remote work hub, and its café scene is part of the reason. The Folks Café in Alfama offers filter coffee on tap and outlets under every seat. Estufa Botânica in Príncipe Real is a greenhouse café with the quietest terrace in the neighborhood. For a riverside breeze, try The Riverside Room in Belém — just avoid the afternoon tourist rush.",
    author: "João Aguiar",
    date: "2026-08-10",
    readTime: "6 min read",
    category: "City guides",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-to-stay-productive-while-traveling",
    title: "How to stay productive while traveling",
    excerpt:
      "Tips and routines for remote workers who want to explore the world without sacrificing output.",
    content:
      "Traveling while working requires structure. Stick to your core hours, book workspaces in advance, and keep a portable toolkit — noise-cancelling headphones, a compact keyboard, and a universal adapter. Use time-blocking to separate work from exploration, and always have a backup internet plan. The goal is to work hard and explore hard.",
    author: "Sofia M.",
    date: "2026-08-05",
    readTime: "5 min read",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "coworking-vs-cafe-which-is-right-for-you",
    title: "Coworking vs café: which is right for you?",
    excerpt:
      "Compare the benefits of dedicated coworking spaces and cafés to decide where you work best.",
    content:
      "Coworking spaces offer reliable wifi, ergonomic seating, meeting rooms, and a professional community. Cafés provide atmosphere, caffeine, and a change of scenery, but can be noisy and have limited seating. If you need consistency and focus, choose coworking. If you thrive on ambient energy and short work sessions, cafés are ideal. Many remote workers use both depending on the day.",
    author: "Lena Vogt",
    date: "2026-07-28",
    readTime: "4 min read",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "the-ultimate-packing-list-for-digital-nomads",
    title: "The ultimate packing list for digital nomads",
    excerpt: "Everything you need to pack for a life on the road without the baggage.",
    content:
      "Pack light but smart. Start with a durable backpack, noise-cancelling headphones, a compact laptop stand, and a portable charger. Bring a universal adapter, a few essential cables, and minimal clothing that mixes and matches. Don't forget a reusable water bottle and a compact notebook. The goal is to carry only what you truly need and buy or borrow the rest locally.",
    author: "Kenji Sato",
    date: "2026-07-20",
    readTime: "3 min read",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  },
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const BLOG_CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];
