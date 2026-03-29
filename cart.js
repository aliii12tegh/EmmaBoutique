// cart.js
// Handles localStorage interaction for the shopping cart and updates cart badges

class CartManager {
    constructor() {
        this.cart = this.getCart();
    }

    getCart() {
        const storedCart = localStorage.getItem('emma_cart');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    saveCart() {
        localStorage.setItem('emma_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }

    addItem(product, size, color) {
        // Look for existing item with same id, size and color
        const existingItemIndex = this.cart.findIndex(item => 
            item.id == product.id && item.size === size && item.color === color
        );

        if (existingItemIndex > -1) {
            this.cart[existingItemIndex].quantity += 1;
        } else {
            this.cart.push({
                ...product,
                size: size,
                color: color,
                quantity: 1
            });
        }

        this.saveCart();
    }

    removeItem(index) {
        this.cart.splice(index, 1);
        this.saveCart();
    }

    updateQuantity(index, newQuantity) {
        if(newQuantity < 1) return;
        this.cart[index].quantity = newQuantity;
        this.saveCart();
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getTotalItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    getSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartUI() {
        // Update all elements with class 'cart-badge'
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getTotalItemCount();
        
        badges.forEach(badge => {
            badge.innerText = count;
            if (count > 0) {
                badge.style.display = 'flex';
                // Add a little pop animation
                badge.classList.remove('scale-100');
                badge.classList.add('scale-125');
                setTimeout(() => {
                    badge.classList.remove('scale-125');
                    badge.classList.add('scale-100');
                }, 200);
            } else {
                badge.style.display = 'none';
            }
        });
    }
}

// Global instance
const cartManager = new CartManager();

// Call this on load to set initial state
document.addEventListener('DOMContentLoaded', () => {
    cartManager.updateCartUI();
});
