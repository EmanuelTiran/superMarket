import { Routes } from '@angular/router';

// ייבוא הקומפוננטים
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  // דף הבית - רשימת המוצרים
  {
    path: '',
    component: ProductListComponent,
    title: 'רשימת מוצרים - סופרמרקט'
  },
  
  // דף המוצרים (זהה לדף הבית)
  {
    path: 'products',
    component: ProductListComponent,
    title: 'רשימת מוצרים - סופרמרקט'
  },
  
  // עגלת קניות
  {
    path: 'cart',
    component: CartComponent,
    title: 'עגלת קניות - סופרמרקט'
  },
  
  // דף התשלום
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'ביצוע הזמנה - סופרמרקט'
  },
  
  // ניתוב לפי קטגוריה (אופציונלי - אם תרצה להוסיף בעתיד)
  {
    path: 'category/:categoryName',
    component: ProductListComponent,
    title: 'מוצרים לפי קטגוריה - סופרמרקט'
  },
  
  // ניתוב לפי מוצר ספציפי (אופציונלי - אם תרצה להוסיף דף מוצר יחיד)
  {
    path: 'product/:id',
    component: ProductListComponent, // או ProductDetailComponent אם תיצור אחד
    title: 'פרטי מוצר - סופרמרקט'
  },
  
  // Wildcard route - חייב להיות אחרון
  // מפנה לדף הבית עבור כל נתיב שלא קיים
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];