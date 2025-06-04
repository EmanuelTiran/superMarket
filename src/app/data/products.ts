import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'לחם לבן',
    price: 5.90,
    image: 'assets/images/products/bread.jpg',
    icone: '🍞',
    category: 'מאפיה',
    description: 'לחם לבן טרי ורך',
    inStock: true
  },
  {
    id: 2,
    name: 'חלב 3%',
    price: 6.50,
    image: 'assets/images/products/milk.jpg',
    icone: '🥛',
    category: 'חלבי',
    description: 'חלב טרי 3% שומן',
    inStock: true
  },
  {
    id: 3,
    name: 'עגבניות',
    price: 8.90,
    image: 'assets/images/products/tomatoes.jpg',
    icone: '🍅',
    category: 'ירקות',
    description: 'עגבניות טריות לקילו',
    inStock: true
  },
  {
    id: 4,
    name: 'תפוחי אדמה',
    price: 4.90,
    image: 'assets/images/products/potatoes.jpg',
    icone: '🥔',
    category: 'ירקות',
    description: 'תפוחי אדמה טריים לקילו',
    inStock: true
  },
  {
    id: 5,
    name: 'בננות',
    price: 7.90,
    image: 'assets/images/products/bananas.jpg',
    icone: '🍌',
    category: 'פירות',
    description: 'בננות טריות לקילו',
    inStock: true
  },
  {
    id: 6,
    name: 'גבינה צהובה',
    price: 12.90,
    image: 'assets/images/products/cheese.jpg',
    icone: '🧀',
    category: 'חלבי',
    description: 'גבינה צהובה איכותית',
    inStock: false
  }
];