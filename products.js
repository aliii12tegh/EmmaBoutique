// Product data
const productsList = [
  {
    id: 1,
    name: 'Veste de tailleur cintrée',
    price: 250,
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
      { name: 'أخضر باستيل', hex: '#A1B7A7', image: 'product_1/veste.jpg' },
      { name: 'بيج فاتح', hex: '#D1C7B7', image: 'product_1/virtual-try-on-result(3).png' },
      { name: 'أخضر ليموني', hex: '#DDF7A1', image: 'product_1/virtual-try-on-result(5).png' },
      { name: 'رمادي', hex: '#9E9E9E', image: 'product_1/virtual-try-on-result(27).png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'طراز جديد',
    badgeColor: 'secondary',
    availability: 'متوفر حالياً',
    availabilityColor: 'primary'
  },
  {
    id: 2,
    name: 'Sweat à capuche et pantalon assorti',
    price: 350,
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
      { name: 'أخضر زمردي', hex: '#0B4738', image: 'product_2/virtual-try-on-result(6).png' },
      { name: 'أصفر ذهبي', hex: '#CBA135', image: 'product_2/virtual-try-on-result(8).png' },
      { name: 'أزرق داكن', hex: '#1C2E4A', image: 'product_2/virtual-try-on-result(30).png' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'الأكثر طلباً',
    badgeColor: 'primary',
    availability: 'مخزون محدود',
    availabilityColor: 'error'
  },
  {
    id: 3,
    name: 'Pantalon large à taille élastique',
    price: 230,
    currency: 'DH',
    description: 'سروال عريض ومريح بتصميم عصري يناسب إطلالتك اليومية.',
    mainImage: 'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png',
    images: [
      'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png',
      'product_3/Gemini_Generated_Image_jrku8kjrku8kjrku.png',
      'product_3/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png',
      'product_3/WhatsApp Image 2026-03-29 at 15.05.07.jpeg',
      'product_3/virtual-try-on-result(26).png'
    ],
    colors: [
      { name: 'تشكيلة 1', hex: '#1C1C1C', image: 'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png' },
      { name: 'تشكيلة 2', hex: '#D7CCC8', image: 'product_3/Gemini_Generated_Image_jrku8kjrku8kjrku.png' },
      { name: 'تشكيلة 3', hex: '#BCAAA4', image: 'product_3/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png' },
      { name: 'تشكيلة 4', hex: '#D2B48C', image: 'product_3/WhatsApp Image 2026-03-29 at 15.05.07.jpeg' },
      { name: 'تشكيلة 5', hex: '#8F9779', image: 'product_3/virtual-try-on-result(26).png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'حصري',
    badgeColor: 'secondary',
    availability: 'متوفر',
    availabilityColor: 'primary'
  },
  {
    id: 4,
    name: 'Chemisier à motifs jacquard',
    price: 220,
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
      { name: 'أبيض', hex: '#FFFFFF', image: 'product_4/WhatsApp Image 2026-03-29 at 14.47.04.jpeg' },
      { name: 'أزرق', hex: '#5b92e5', image: 'product_4/virtual-try-on-result(22).png' },
      { name: 'أخضر', hex: '#8F9779', image: 'product_4/virtual-try-on-result(23).png' },
      { name: 'وردي', hex: '#E6B0AA', image: 'product_4/virtual-try-on-result(24).png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'جديد',
    badgeColor: 'secondary',
    availability: 'متوفر',
    availabilityColor: 'primary'
  },
  {
    id: 5,
    name: 'Ensemble jupe et chemisier à lavallière',
    price: 400,
    currency: 'DH',
    description: 'طقم أنيق جداً مكون من تنورة وقميص لحضور المناسبات بإطلالة راقية.',
    mainImage: 'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
    images: [
      'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
      'product_5/virtual-try-on-result(17).png'
    ],
    colors: [
      { name: 'بيج', hex: '#F5F5DC', image: 'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg' },
      { name: 'أزرق فاتح', hex: '#ADD8E6', image: 'product_5/virtual-try-on-result(17).png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
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
