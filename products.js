// Product data
const productsList = [
  {
    id: 1,
    name: 'Veste de tailleur cintrée',
    price: 250,
    currency: 'DH',
    description: 'سترة عصرية أنيقة ومريحة بجودة فاخرة، مثالية للمناسبات والإطلالة اليومية.',
    mainImage: 'Veste de tailleur cintrée/veste.jpg',
    images: [
      'Veste de tailleur cintrée/veste.jpg',
      'Veste de tailleur cintrée/virtual-try-on-result(3).png',
      'Veste de tailleur cintrée/virtual-try-on-result(5).png',
      'Veste de tailleur cintrée/virtual-try-on-result(27).png'
    ],
    colors: [
      { name: 'أخضر باستيل', hex: '#A1B7A7', image: 'Veste de tailleur cintrée/veste.jpg' },
      { name: 'بيج فاتح', hex: '#D1C7B7', image: 'Veste de tailleur cintrée/virtual-try-on-result(3).png' },
      { name: 'أخضر ليموني', hex: '#DDF7A1', image: 'Veste de tailleur cintrée/virtual-try-on-result(5).png' },
      { name: 'رمادي', hex: '#9E9E9E', image: 'Veste de tailleur cintrée/virtual-try-on-result(27).png' }
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
    mainImage: 'Sweat à capuche et pantalon assorti/Untitled design(1).png',
    images: [
      'Sweat à capuche et pantalon assorti/Untitled design(1).png',
      'Sweat à capuche et pantalon assorti/virtual-try-on-result(14).png',
      'Sweat à capuche et pantalon assorti/virtual-try-on-result(6).png',
      'Sweat à capuche et pantalon assorti/virtual-try-on-result(8).png',
      'Sweat à capuche et pantalon assorti/virtual-try-on-result(30).png'
    ],
    colors: [
      { name: 'أخضر زمردي', hex: '#0B4738', image: 'Sweat à capuche et pantalon assorti/virtual-try-on-result(6).png' },
      { name: 'أصفر ذهبي', hex: '#CBA135', image: 'Sweat à capuche et pantalon assorti/virtual-try-on-result(8).png' },
      { name: 'أزرق داكن', hex: '#1C2E4A', image: 'Sweat à capuche et pantalon assorti/virtual-try-on-result(30).png' }
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
    mainImage: 'Pantalon large à taille élastique/Gemini_Generated_Image_fgjc29fgjc29fgjc.png',
    images: [
      'Pantalon large à taille élastique/Gemini_Generated_Image_fgjc29fgjc29fgjc.png',
      'Pantalon large à taille élastique/Gemini_Generated_Image_jrku8kjrku8kjrku.png',
      'Pantalon large à taille élastique/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png',
      'Pantalon large à taille élastique/WhatsApp Image 2026-03-29 at 15.05.07.jpeg',
      'Pantalon large à taille élastique/virtual-try-on-result(26).png'
    ],
    colors: [
      { name: 'تشكيلة 1', hex: '#1C1C1C', image: 'Pantalon large à taille élastique/Gemini_Generated_Image_fgjc29fgjc29fgjc.png' },
      { name: 'تشكيلة 2', hex: '#D7CCC8', image: 'Pantalon large à taille élastique/Gemini_Generated_Image_jrku8kjrku8kjrku.png' },
      { name: 'تشكيلة 3', hex: '#BCAAA4', image: 'Pantalon large à taille élastique/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png' },
      { name: 'تشكيلة 4', hex: '#D2B48C', image: 'Pantalon large à taille élastique/WhatsApp Image 2026-03-29 at 15.05.07.jpeg' },
      { name: 'تشكيلة 5', hex: '#8F9779', image: 'Pantalon large à taille élastique/virtual-try-on-result(26).png' }
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
    mainImage: 'Chemisier à motifs jacquard/WhatsApp Image 2026-03-29 at 14.47.04.jpeg',
    images: [
      'Chemisier à motifs jacquard/WhatsApp Image 2026-03-29 at 14.47.04.jpeg',
      'Chemisier à motifs jacquard/WhatsApp Image 2026-03-29 at 14.51.19 (1).jpeg',
      'Chemisier à motifs jacquard/WhatsApp Image 2026-03-29 at 14.51.19.jpeg',
      'Chemisier à motifs jacquard/virtual-try-on-result(22).png',
      'Chemisier à motifs jacquard/virtual-try-on-result(23).png',
      'Chemisier à motifs jacquard/virtual-try-on-result(24).png'
    ],
    colors: [
      { name: 'أبيض', hex: '#FFFFFF', image: 'Chemisier à motifs jacquard/WhatsApp Image 2026-03-29 at 14.47.04.jpeg' },
      { name: 'أزرق', hex: '#5b92e5', image: 'Chemisier à motifs jacquard/virtual-try-on-result(22).png' },
      { name: 'أخضر', hex: '#8F9779', image: 'Chemisier à motifs jacquard/virtual-try-on-result(23).png' },
      { name: 'وردي', hex: '#E6B0AA', image: 'Chemisier à motifs jacquard/virtual-try-on-result(24).png' }
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
    mainImage: 'Ensemble jupe et chemisier à lavallière/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
    images: [
      'Ensemble jupe et chemisier à lavallière/WhatsApp Image 2026-03-29 at 14.37.26.jpeg',
      'Ensemble jupe et chemisier à lavallière/virtual-try-on-result(17).png'
    ],
    colors: [
      { name: 'بيج', hex: '#F5F5DC', image: 'Ensemble jupe et chemisier à lavallière/WhatsApp Image 2026-03-29 at 14.37.26.jpeg' },
      { name: 'أزرق فاتح', hex: '#ADD8E6', image: 'Ensemble jupe et chemisier à lavallière/virtual-try-on-result(17).png' }
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
