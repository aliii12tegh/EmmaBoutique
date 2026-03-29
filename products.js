// Product data
const productsList = [
  {
    id: 1,
    name: 'Veste de tailleur cintrée',
    price: 249,
    currency: 'DH',
    description: 'سترة عصرية أنيقة ومريحة بجودة فاخرة، مثالية للمناسبات والإطلالة اليومية.',
    mainImage: 'product_1/veste.jpg',
    images: [
      'product_1/veste.jpg',
      'product_1/virtual-try-on-result(3).png',
      'product_1/virtual-try-on-result(5).png',
      'product_1/virtual-try-on-result(27).png'
    ],
    colors: [
      { name: 'أخضر فاتح', hex: '#8FAF8B', image: 'product_1/veste.jpg' },
      { name: 'بيج', hex: '#C8BAA7', image: 'product_1/virtual-try-on-result(27).png' }
    ],
    sizes: ['Standard'],
    badge: 'طراز جديد',
    badgeColor: 'secondary',
    availability: 'متوفر حالياً',
    availabilityColor: 'primary'
  },
  {
    id: 2,
    name: 'Sweat à capuche et pantalon assorti',
    price: 349,
    currency: 'DH',
    description: 'طقم كاجوال فائق الجودة، مريح وأنيق في نفس الوقت.',
    mainImage: 'product_2/Untitled design(1).png',
    images: [
      'product_2/Untitled design(1).png',
      'product_2/virtual-try-on-result(14).png',
      'product_2/virtual-try-on-result(6).png',
      'product_2/virtual-try-on-result(8).png',
      'product_2/virtual-try-on-result(30).png'
    ],
    colors: [
      { name: 'بنفسجي', hex: '#A98BB5', image: 'product_2/Untitled design(1).png' },
      { name: 'أخضر ليموني', hex: '#D4E157', image: 'product_2/virtual-try-on-result(14).png' },
      { name: 'أزرق فاتح', hex: '#7BA3C7', image: 'product_2/virtual-try-on-result(6).png' }
    ],
    sizes: ['Standard'],
    badge: 'الأكثر طلباً',
    badgeColor: 'primary',
    availability: 'مخزون محدود',
    availabilityColor: 'error'
  },
  {
    id: 3,
    name: 'Pantalon large à taille élastique',
    price: 229,
    currency: 'DH',
    description: 'سروال عريض ومريح بتصميم عصري يناسب إطلالتك اليومية.',
    mainImage: 'product_3/virtual-try-on-result(26).png',
    images: [
      'product_3/virtual-try-on-result(26).png',
      'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png',
      'product_3/Gemini_Generated_Image_jrku8kjrku8kjrku.png',
      'product_3/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png',
      'product_3/WhatsApp Image 2026-03-29 at 15.05.07.jpeg',
      'product_3/black-pantalon.png'
    ],
    colors: [
      { name: 'كحلي', hex: '#1E2A4A', image: 'product_3/virtual-try-on-result(26).png' },
      { name: 'أزرق فاتح', hex: '#A8C4E0', image: 'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png' },
      { name: 'بيج', hex: '#B8A99A', image: 'product_3/Gemini_Generated_Image_jrku8kjrku8kjrku.png' },
      { name: 'أبيض كريمي', hex: '#EDE8DF', image: 'product_3/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png' },
      { name: 'أسود', hex: '#1C1C1C', image: 'product_3/black-pantalon.png' }
    ],
    sizes: ['Standard'],
    badge: 'حصري',
    badgeColor: 'secondary',
    availability: 'متوفر',
    availabilityColor: 'primary'
  },
  {
    id: 4,
    name: 'Chemisier à motifs jacquard',
    price: 219,
    currency: 'DH',
    description: 'قميص أنيق ونعوم متوفر بعدة ألوان رائعة.',
    mainImage: 'product_4/WhatsApp Image 2026-03-29 at 14.47.04.jpeg',
    images: [
      'product_4/WhatsApp Image 2026-03-29 at 14.47.04.jpeg',
      'product_4/WhatsApp Image 2026-03-29 at 14.51.19 (1).jpeg',
      'product_4/WhatsApp Image 2026-03-29 at 14.51.19.jpeg',
      'product_4/virtual-try-on-result(22).png',
      'product_4/virtual-try-on-result(23).png',
      'product_4/virtual-try-on-result(24).png'
    ],
    colors: [
      { name: 'أخضر فاتح', hex: '#8FAF8B', image: 'product_4/WhatsApp Image 2026-03-29 at 14.47.04.jpeg' },
      { name: 'أصفر', hex: '#EED98B', image: 'product_4/WhatsApp Image 2026-03-29 at 14.51.19 (1).jpeg' },
      { name: 'أسود', hex: '#2C2C2C', image: 'product_4/WhatsApp Image 2026-03-29 at 14.51.19.jpeg' }
    ],
    sizes: ['Standard'],
    badge: 'جديد',
    badgeColor: 'secondary',
    availability: 'متوفر',
    availabilityColor: 'primary'
  },
  {
    id: 5,
    name: 'Ensemble jupe et chemisier à lavallière',
    price: 399,
    currency: 'DH',
    description: 'طقم أنيق جداً مكون من تنورة وقميص لحضور المناسبات بإطلالة راقية.',
    mainImage: 'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
    images: [
      'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
      'product_5/virtual-try-on-result(17).png'
    ],
    colors: [
      { name: 'بني قهوي', hex: '#6B4A3A', image: 'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg' }
    ],
    sizes: ['Standard'],
    badge: 'عرض خاص',
    badgeColor: 'primary',
    availability: 'متوفر',
    availabilityColor: 'primary'
  }
];

// Helper to get product by ID
function getProductById(id) {
  return productsList.find(p => p.id == id);
}
