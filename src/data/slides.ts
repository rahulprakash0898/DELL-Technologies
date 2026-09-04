import { SlideItem, CategoryItem } from '../types';

export const slidesData: SlideItem[] = [
  {
    id: 1,
    pdfPage: 1,
    category: 'hero',
    categoryName: 'Hero Overview',
    title: 'Dell Inspiron 14 Plus 2-in-1 Laptop',
    subtitle: 'Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel® Core™ Ultra processors',
    image: '/images/slides/dell-inspiron-14-hero-overview.png',
    badge: 'Copilot+ PC',
    price: '₹56,000*',
    originalPrice: '₹72,990',
    emi: '₹2,333/mo',
    features: [
      'New AI experiences',
      'Secure and reliable',
      'Built-in sustainability'
    ],
    intelBadge: 'Intel® Core™ Ultra',
    copilotLogo: true,
    description: 'Stunning performance that powers the newest AI experiences on a versatile 360° convertible design.'
  },
  {
    id: 2,
    pdfPage: 2,
    category: 'hero',
    categoryName: 'Hero Overview',
    title: 'Secure and Reliable Architecture',
    subtitle: 'Enterprise-grade security built directly into hardware and cloud sync',
    image: '/images/slides/dell-inspiron-14-security-architecture.png',
    badge: 'Enterprise Security',
    price: '₹56,000*',
    features: [
      'Hardware-level encryption',
      'Windows Hello biometric recognition',
      'Dell SafeBIOS detection'
    ],
    description: 'Stay confident with multi-layer defense from silicon to software.'
  },
  {
    id: 3,
    pdfPage: 3,
    category: 'hero',
    categoryName: 'Hero Overview',
    title: 'Next-Gen AI & Reliability',
    subtitle: 'Combining real-time neural processing with rugged military-grade build quality',
    image: '/images/slides/dell-inspiron-14-ai-reliability.png',
    badge: 'AI + Security',
    price: '₹56,000*',
    features: [
      '40+ TOPS NPU Performance',
      'MIL-STD 810H durability test passed',
      'All-day intelligent battery optimization'
    ],
    description: 'Empowering your daily work with intelligent background compute.'
  },
  {
    id: 4,
    pdfPage: 4,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'New AI Experiences',
    subtitle: 'Unlock incredible productivity with on-device Copilot+ intelligence',
    image: '/images/slides/dell-ai-experiences-copilot.png',
    badge: 'Copilot+ Powered',
    price: '₹56,000*',
    features: [
      'Live Captions & real-time translation',
      'Cocreator intelligent image generation',
      'Windows Studio Effects for crisp video calls'
    ],
    description: 'On-device neural processing ensures low latency and offline AI productivity.'
  },
  {
    id: 5,
    pdfPage: 5,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Personalized AI Assistant',
    subtitle: 'Copilot key for instant visual & textual problem solving',
    image: '/images/slides/dell-copilot-key-assistant.png',
    badge: 'Intel Core Ultra',
    price: '₹56,000*',
    features: [
      'Dedicated Copilot Key',
      'Smart battery distribution',
      'Automated background noise reduction'
    ],
    description: 'Experience seamless task automation without draining system resources.'
  },
  {
    id: 6,
    pdfPage: 6,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Sleek 14-inch 2-in-1 with Copilot+',
    subtitle: 'Powered by Intel® Core™ Ultra processors for peak multitasking performance',
    image: '/images/slides/dell-intel-core-ultra-processor.png',
    badge: 'Intel® Core™ Ultra',
    price: '₹56,000*',
    features: [
      'Integrated NPU acceleration',
      'QHD+ 16:10 touch display',
      'ComfortView Plus low blue light technology'
    ],
    description: 'Enjoy crisp visuals with ultra-slim bezels and rich color accuracy.'
  },
  {
    id: 7,
    pdfPage: 7,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Stunning Ultra Performance',
    subtitle: 'Powers the newest AI workloads effortlessly with hybrid CPU/GPU/NPU core layout',
    image: '/images/slides/dell-ultra-performance-architecture.png',
    badge: 'Core Ultra Tech',
    price: '₹56,000*',
    features: [
      'Up to 16 Cores / 22 Threads',
      'Intel Arc Graphics built-in',
      'LPDDR5x high-speed memory'
    ],
    description: 'Blazing speed for creative software, 4K rendering, and AI model execution.'
  },
  {
    id: 8,
    pdfPage: 8,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Newest AI Workflows',
    subtitle: 'Streamline creative editing, data analysis, and code generation',
    image: '/images/slides/dell-ai-creative-workflows.png',
    badge: 'Future-Ready',
    price: '₹56,000*',
    features: [
      'Seamless multi-app multitasking',
      'Low power neural processing',
      'ExpressCharge fast battery refill'
    ],
    description: 'Charge up to 80% in 60 minutes with ExpressCharge technology.'
  },
  {
    id: 9,
    pdfPage: 9,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Intelligent Thermal Engineering',
    subtitle: 'Whisper-quiet dual fans and ultra-thin copper heat pipes keep your system cool',
    image: '/images/slides/dell-thermal-cooling-system.png',
    badge: 'Smart Cooling',
    price: '₹56,000*',
    features: [
      'Adaptive Thermal Modes',
      'Ultra-thin fan blades',
      'Quiet operations under load'
    ],
    description: 'Maintains peak performance without distracting fan acoustics.'
  },
  {
    id: 10,
    pdfPage: 10,
    category: 'feature',
    categoryName: 'AI Experiences',
    title: 'Copilot+ Ecosystem Integration',
    subtitle: 'Collaborate with AI companion across all your office and creative apps',
    image: '/images/slides/dell-copilot-ecosystem-hub.png',
    badge: 'Copilot+ Hub',
    price: '₹56,000*',
    features: [
      'Instant context recall',
      'Natural voice command input',
      'Local privacy guard'
    ],
    description: 'Your data stays on device while AI transforms your everyday work.'
  },
  {
    id: 11,
    pdfPage: 11,
    category: 'feature',
    categoryName: 'Sustainability',
    title: 'Built-in Sustainability',
    subtitle: 'Crafted with recycled aluminum and ocean-bound plastics',
    image: '/images/slides/dell-sustainability-recycled-materials.png',
    badge: 'Eco-Conscious',
    price: '₹56,000*',
    features: [
      '100% recycled packaging materials',
      'ENERGY STAR® 8.0 certified',
      'EPEAT® Gold registered'
    ],
    description: 'Reducing carbon footprint without compromising durability or luxury feel.'
  },
  {
    id: 12,
    pdfPage: 12,
    category: 'feature',
    categoryName: 'Sustainability',
    title: 'Sustainable Innovation',
    subtitle: 'Low-emission manufacturing processes powered by renewable energy sources',
    image: '/images/slides/dell-sustainable-chassis-design.png',
    badge: 'Green Tech',
    price: '₹56,000*',
    features: [
      'Low carbon aluminum chassis',
      'Post-consumer recycled plastics',
      'Modular repairable component architecture'
    ],
    description: 'Dell progress towards net-zero carbon impact across product lifecycles.'
  },
  {
    id: 13,
    pdfPage: 13,
    category: 'feature',
    categoryName: 'Sustainability',
    title: 'Eco Packaging & Materials',
    subtitle: 'Zero single-use plastic packaging, shipped in 100% recycled fiber boxes',
    image: '/images/slides/dell-eco-packaging-zero-plastic.png',
    badge: 'Zero Plastic',
    price: '₹56,000*',
    features: [
      'FSC certified paper fibers',
      'Waterborne low VOC finishes',
      'Easily recyclable chassis design'
    ],
    description: 'Every component designed with end-of-life circularity in mind.'
  },
  {
    id: 14,
    pdfPage: 14,
    category: 'feature',
    categoryName: 'Sustainability',
    title: 'Energy Efficient Architecture',
    subtitle: 'Intelligent power distribution minimizes energy consumption dynamically',
    image: '/images/slides/dell-energy-efficient-architecture.png',
    badge: 'Energy Saver',
    price: '₹56,000*',
    features: [
      'Ultra low idle power states',
      'Eco-Mode battery profile',
      'Smart sensor screen dimming'
    ],
    description: 'Maximizes battery life while minimizing energy grid strain.'
  },
  {
    id: 15,
    pdfPage: 15,
    category: 'feature',
    categoryName: 'Sustainability',
    title: 'Sustainable Design Standard',
    subtitle: 'Setting the benchmark for premium sustainable laptop manufacturing',
    image: '/images/slides/dell-epeat-gold-sustainability-standard.png',
    badge: 'EPEAT Gold',
    price: '₹56,000*',
    features: [
      'Long lifespan components',
      'Dell Trade-In eligible',
      'Responsible recycling program'
    ],
    description: 'Designed for long term reliability and environmental stewardship.'
  },
  {
    id: 16,
    pdfPage: 16,
    category: 'feature',
    categoryName: 'Versatile Modes',
    title: 'Powered by Four Modes',
    subtitle: 'Versatile 360° hinge allows fluid transition for any work environment',
    image: '/images/slides/dell-four-versatile-modes-360.png',
    badge: '360° Convertible',
    price: '₹56,000*',
    features: [
      'Laptop Mode: Standard keyboard productivity',
      'Tent Mode: Ideal for touch navigation & recipe reading',
      'Stand Mode: Perfect for streaming & presentation display',
      'Tablet Mode: Seamless pen sketching & digital notes'
    ],
    modes: [
      { name: 'Laptop Mode', desc: 'Ergonomic typing with backlit keyboard', useCase: 'Work, Coding, Document Editing' },
      { name: 'Tent Mode', desc: 'Compact footprint for presentations & touch', useCase: 'Touch Navigation, Cooking, Presentations' },
      { name: 'Stand Mode', desc: 'Immersive screen viewing with minimal obstruction', useCase: 'Movie Streaming, Video Calls, Web Seminars' },
      { name: 'Tablet Mode', desc: '360 degree tilt for stylus drawing & reading', useCase: 'Stylus Drawing, Reading, Taking Notes' }
    ],
    description: 'One laptop, four distinct ways to work, watch, sketch, and play.'
  },
  {
    id: 17,
    pdfPage: 17,
    category: 'product',
    categoryName: 'Dell XPS 13',
    title: 'Dell XPS 13',
    subtitle: 'Iconic ultra-thin craftsmanship with edge-to-edge InfinityEdge glass screen',
    image: '/images/slides/dell-xps-13-infinityedge-showcase.png',
    badge: 'Premium XPS',
    price: '₹53,364',
    originalPrice: '₹68,990',
    emi: '₹2,224',
    features: [
      'Machined CNC Aluminum chassis',
      'Gorilla® Glass 3 palm rest',
      'FHD+ / OLED touch display options',
      'Zero-lattice keyboard with capacitive touch row'
    ],
    scanOffer: true,
    knowMore: true,
    description: 'Unmatched elegance with cutting-edge power in the thinnest XPS 13 chassis ever built.'
  },
  {
    id: 18,
    pdfPage: 18,
    category: 'product',
    categoryName: 'Dell XPS 13',
    title: 'Dell XPS 13 - Offer Brochure',
    subtitle: 'Scan the QR Code to download full specs & promotional details',
    image: '/images/slides/dell-xps-13-offer-brochure.png',
    badge: 'Special Brochure',
    price: '₹53,364',
    emi: '₹2,224',
    features: [
      'Exclusive corporate discounts',
      'Instant cashback on select bank cards',
      'Free 1-Year Accidental Damage Protection'
    ],
    scanOffer: true,
    knowMore: true,
    description: 'Scan or click KNOW MORE to download the official XPS promo catalog.'
  },
  {
    id: 19,
    pdfPage: 19,
    category: 'product',
    categoryName: 'Dell XPS 13',
    title: 'Dell XPS 13 Performance Suite',
    subtitle: 'Precision engineered audio, display, and silent typing experience',
    image: '/images/slides/dell-xps-13-performance-audio.png',
    badge: 'Flagship Laptop',
    price: '₹53,364',
    emi: '₹2,224',
    features: [
      'Quad speaker studio sound with Waves MaxxAudio',
      'Dual sensor HD webcam with temporal noise reduction',
      'Up to 18 hours battery life'
    ],
    knowMore: true,
    description: 'Engineered for creators and professionals on the move.'
  },
  {
    id: 20,
    pdfPage: 20,
    category: 'product',
    categoryName: 'Dell XPS 13',
    title: 'Dell XPS 13 Mobility',
    subtitle: 'Featherweight under 1.2 kg with ultra-thin profile',
    image: '/images/slides/dell-xps-13-ultra-portable-mobility.png',
    badge: 'Ultra-Portable',
    price: '₹53,364',
    emi: '₹2,224',
    features: [
      'Weight starting at just 1.19 kg',
      'Thunderbolt™ 4 dual high speed ports',
      'Seamless glass touchpad'
    ],
    description: 'Crafted for effortless mobility without sacrificing performance.'
  },
  {
    id: 21,
    pdfPage: 21,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell 6-in-1 USB-C Multiport Adapter',
    subtitle: 'Model DA305 - Ultimate compact connectivity hub',
    image: '/images/slides/dell-multiport-adapter-da305-6in1.png',
    badge: '80% OFF',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    savings: 'Save ₹8,000',
    features: [
      '1x HDMI 4K @ 60Hz',
      '1x DisplayPort',
      '1x USB-C (10Gbps + Pass-through Power)',
      '2x USB-A (10Gbps)',
      '1x Gigabit Ethernet RJ45'
    ],
    description: 'Expand your laptop into a full workstation with a single USB-C cable connection.'
  },
  {
    id: 22,
    pdfPage: 22,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell 6-in-1 Adapter DA305 Overview',
    subtitle: 'Retractable cable design for clutter-free travel',
    image: '/images/slides/dell-multiport-adapter-da305-overview.png',
    badge: 'Hot Deal',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    savings: 'Save 80%',
    features: [
      'Compact puck form factor',
      'Integrated hidden USB-C cable storage',
      'Supports 90W Pass-through Power Delivery'
    ],
    description: 'Original MRP ₹9,999 available at only ₹1,999 with Dell Laptop Purchase.'
  },
  {
    id: 23,
    pdfPage: 23,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell DA305 Bundle Offer',
    subtitle: 'Exclusive bundle pricing with Inspiron & XPS systems',
    image: '/images/slides/dell-multiport-adapter-da305-bundle.png',
    badge: 'Bundle Special',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    features: [
      'Plug-and-play driverless setup',
      'Compatible with Windows, Mac & ChromeOS',
      '3-Year Advanced Exchange Service Warranty'
    ],
    description: 'Claim your DA305 adapter for just ₹1,999 at checkout.'
  },
  {
    id: 24,
    pdfPage: 24,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell Pro 7-in-1 USB-C Travel Hub',
    subtitle: 'Model DA326 - Professional multi-display travel hub',
    image: '/images/slides/dell-travel-hub-da326-7in1.png',
    badge: '80% OFF',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    savings: 'Save ₹8,000',
    features: [
      '1x HDMI 2.0 (4K)',
      '1x VGA video port',
      '1x USB-C Pass-through PD 100W',
      '2x USB-A 3.2 Gen 2 ports',
      '1x SD & MicroSD card reader',
      '1x Gigabit Ethernet port'
    ],
    description: 'Pro-grade travel hub offering 7 essential ports at an unbelievable price.'
  },
  {
    id: 25,
    pdfPage: 25,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell Pro 7-in-1 Hub DA326 Features',
    subtitle: 'Seamless dual display output & high-speed memory card access',
    image: '/images/slides/dell-travel-hub-da326-features.png',
    badge: 'Pro Accessory',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    savings: 'Save ₹8,000',
    features: [
      'SuperSpeed 10Gbps data transfer speeds',
      'Aluminum premium exterior matches XPS styling',
      'Fast charge pass-through capability'
    ],
    description: 'Transform travel productivity with instant dual monitor connection.'
  },
  {
    id: 26,
    pdfPage: 26,
    category: 'accessories',
    categoryName: 'Accessories',
    title: 'Dell DA326 Travel Hub Deal',
    subtitle: 'Special add-on price of ₹1,999 (MRP ₹9,999)',
    image: '/images/slides/dell-travel-hub-da326-networking.png',
    badge: 'Limited Stock',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    features: [
      'Includes protective travel sleeve',
      'MAC address pass-through support',
      'PXE boot & Wake-on-LAN ready'
    ],
    description: 'Professional networking and display expansion at 80% discount.'
  },
  {
    id: 27,
    pdfPage: 27,
    category: 'offer',
    categoryName: 'Special Offers',
    title: 'Special Bundle Offer Preview',
    subtitle: 'Unlock premium JBL audio gear with your Dell purchase',
    image: '/images/slides/jbl-tune-770nc-headphones-preview.png',
    badge: 'Special Offer',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    features: [
      'JBL Tune 770NC Wireless Over-Ear Headphones',
      'Adaptive Noise Cancelling with Smart Ambient',
      'Bluetooth 5.3 with Multi-Point Connection'
    ],
    description: 'Get JBL Tune 770NC Noise-Cancelling Headphones worth ₹9,999 for just ₹1,999!'
  },
  {
    id: 28,
    pdfPage: 28,
    category: 'offer',
    categoryName: 'Special Offers',
    title: 'JBL Tune 770NC Headphones Deal',
    subtitle: 'Adaptive Noise Cancelling Headphones worth ₹9,999 at ₹1,999/-*',
    image: '/images/slides/jbl-tune-770nc-headphones-deal.png',
    badge: 'JBL Audio Offer',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    savings: 'Save ₹8,000',
    features: [
      'Up to 70 Hours total battery life',
      '5-Minute Speed Charge gives 3 hours playback',
      'Hands-free calls with VoiceAware',
      'Lightweight, comfortable & foldable design'
    ],
    description: 'Elevate your remote calls and immersive audio experience with JBL.'
  },
  {
    id: 29,
    pdfPage: 29,
    category: 'offer',
    categoryName: 'Special Offers',
    title: 'Dell RMN Special Offers Summary',
    subtitle: 'Complete list of bundle offers, pricing & warranty terms',
    image: '/images/slides/dell-rmn-special-offers-summary.png',
    badge: 'Final Offer',
    price: '₹1,999/-*',
    originalPrice: '₹9,999/-*',
    features: [
      'Dell Inspiron 14 Plus 2-in-1 starting at ₹56,000*',
      'Dell XPS 13 starting at ₹53,364 (EMI ₹2,224)',
      'Dell Multiport Adapter DA305 @ ₹1,999',
      'Dell Travel Hub DA326 @ ₹1,999',
      'JBL Tune 770NC Headphones @ ₹1,999'
    ],
    description: 'Dell Retail Media Network 2025 Special Promotion - Limited Period Offer.'
  }
];

export const categories: CategoryItem[] = [
  { id: 'all', name: 'All Slides (1-29)' },
  { id: 'hero', name: 'Inspiron 14 Plus 2-in-1' },
  { id: 'feature', name: 'AI & Sustainability' },
  { id: 'product', name: 'Dell XPS 13' },
  { id: 'accessories', name: 'Dell Accessories' },
  { id: 'offer', name: 'JBL Special Offer' }
];
