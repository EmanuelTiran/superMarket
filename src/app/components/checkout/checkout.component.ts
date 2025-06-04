import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  customerInfo = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  isSubmitting = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  onSubmit(): void {
    if (this.isValidForm()) {
      this.isSubmitting = true;
      
      // Simulate order processing
      setTimeout(() => {
        alert('הזמנה בוצעה בהצלחה!');
        this.cartService.clearCart();
        this.router.navigate(['/products']);
        this.isSubmitting = false;
      }, 2000);
    }
  }

  public isValidForm(): boolean {
    return !!(
      this.customerInfo.name &&
      this.customerInfo.email &&
      this.customerInfo.phone &&
      this.customerInfo.address &&
      this.cartItems.length > 0
    );
  }
}