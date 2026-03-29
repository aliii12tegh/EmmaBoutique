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
      { name: 'اللون 1', hex: '#E9E4DE', image: 'product_1/veste.jpg' },
      { name: 'اللون 2', hex: '#AFAFAF', image: 'product_1/virtual-try-on-result(3).png' },
      { name: 'اللون 3', hex: '#ECEAE3', image: 'product_1/virtual-try-on-result(5).png' },
      { name: 'اللون 4', hex: '#BDADA3', image: 'product_1/virtual-try-on-result(27).png' }
    ],
    sizes: ['Standard'],
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
      { name: 'اللون 1', hex: '#EEEADF', image: 'product_2/Untitled design(1).png' },
      { name: 'اللون 2', hex: '#191610', image: 'product_2/virtual-try-on-result(14).png' },
      { name: 'اللون 3', hex: '#C9C8C4', image: 'product_2/virtual-try-on-result(6).png' },
      { name: 'اللون 4', hex: '#7B8FAB', image: 'product_2/virtual-try-on-result(8).png' },
      { name: 'اللون 5', hex: '#CECC9C', image: 'product_2/virtual-try-on-result(30).png' }
    ],
    sizes: ['Standard'],
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
      { name: 'اللون 1', hex: '#DBD4C9', image: 'product_3/Gemini_Generated_Image_fgjc29fgjc29fgjc.png' },
      { name: 'اللون 2', hex: '#B19F93', image: 'product_3/Gemini_Generated_Image_jrku8kjrku8kjrku.png' },
      { name: 'اللون 3', hex: '#D3CFC4', image: 'product_3/Gemini_Generated_Image_rv5rgrrv5rgrrv5r.png' },
      { name: 'اللون 4', hex: '#1B1D32', image: 'product_3/WhatsApp Image 2026-03-29 at 15.05.07.jpeg' },
      { name: 'اللون 5', hex: '#E4E4E6', image: 'product_3/virtual-try-on-result(26).png' }
    ],
    sizes: ['Standard'],
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
      { name: 'اللون 1', hex: '#A2ABA6', image: 'product_4/WhatsApp Image 2026-03-29 at 14.47.04.jpeg' },
      { name: 'اللون 2', hex: '#FBEDC6', image: 'product_4/WhatsApp Image 2026-03-29 at 14.51.19 (1).jpeg' },
      { name: 'اللون 3', hex: '#343237', image: 'product_4/WhatsApp Image 2026-03-29 at 14.51.19.jpeg' },
      { name: 'اللون 4', hex: '#DADEDE', image: 'product_4/virtual-try-on-result(22).png' },
      { name: 'اللون 5', hex: '#D8D8D8', image: 'product_4/virtual-try-on-result(23).png' },
      { name: 'اللون 6', hex: '#D8D8D8', image: 'product_4/virtual-try-on-result(24).png' }
    ],
    sizes: ['Standard'],
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
      { name: 'اللون 1', hex: '#604438', image: 'product_5/WhatsApp Image 2026-03-29 at 14.37.26.jpeg' },
      { name: 'اللون 2', hex: '#CBD0D1', image: 'product_5/virtual-try-on-result(17).png' }
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
