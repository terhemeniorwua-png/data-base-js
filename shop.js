

const products = []
let cart = []


// CART CLASS

class Cart{
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity

        cart.push(this)
    }
    static addItem(product, quantity){
        let prod = products.find(prod => prod.name === product)
        if(!prod) return;
         if(prod.isAvailable != true || prod.stock === 0) {
            this.message = 'Sorry, The product is not available'
            return;
        } 

        new Cart(product, quantity)
    }
}


// CUSTOMER CLASS

class Customer{
    constructor(name, email){
        this.name = name
        this.email = email
        this.wallet= 0
        this.cart = 0
        this.orders= 0
    }
    deposit(amount){
        if(amount < 0) {
            this.message = "Amount can't be less than $0"
        } 
        this.wallet += amount
    }
    addToCart(product, quantity){
        
        if(quantity <= 0){
            this.message = `Invalid quantity`
            return;
        }

       if(quantity > product.stock) {
            this.message = `Sorry, the quantity inputed is more than available quantity`
            return;
        }
        this.cart += quantity
        Cart.addItem(product, quantity)
       
    }
    removeFromCart(product, quantity){
        if(!cart[product]){
            this.message = `Product not found`
            return };
        if(quantity <0 || quantity > cart[product]){
            this.message = `Out of range`
            return 
        };
        this.cart -= quantity
        cart[product] -= quantity
    }
    checkOut(){
        let totalPrice = 0;
        let order = 0;
        for(let i =0; i<cart.length; i++){
            for(let j = 0; j<products.length; j++){
                if(cart[i].product === products[j].name){
                    totalPrice += cart[i].quantity * products[j].price
                    products[j].stock -= cart[i].quantity
                    order += cart[i].quantity
                }
            }
        }
         if(this.wallet < totalPrice){
            this.message = `Insufficient funds, fund your wallet and try again`
            return;
         }
         this.wallet -= totalPrice
         this.orders = order
          this.cart = 0
         cart = []
        }
    
    viewOrders(name){
        if(name !== this.name){
            return `Not a customer? SingUp`
        }
        return this.orders
    }
    viewBalance(name){
        if(name === this.name){
            return `Your balance as of ${Date()} is ${this.wallet}`
        }
    }
  
}





// ONLINE SHOPPING CLASS

class Shopping{
    constructor(id, name, price, category, stock, rating){
        this.id = id
        this.name = name
        this.price = price
        this.category = category
        this.stock = stock
        this.rating = rating
        this.isAvailable()
        

        products.push(this)
    }
     updatePrice(newPrice){
        if(newPrice < 0){
            this.message = 'Price cannot be less than $0'
            return;
        }
        this.price = newPrice
    }
    restock(quantity){
         if(quantity < 0){
            this.message = 'Quantity cannot be less than $zero'
            return;
        }
        this.stock += quantity
    }
    // buy(quantity){
    //     if(this.stock == 0 || this.isAvailable != true){
    //     this.message = `Sorry, the product is out of stock`
    //     return;
    //    } else if(quantity < 0) {
    //     this.message = `Quantity cannot be less than zero`
    //     return;
    //    } else if(quantity > this.stock){
    //     this.message = `Quantity is more than available stock`
    //    }
    //     let price = this.price * quantity
    //     this.wallet -= price
    //     this.stock -= quantity

    // }
    isAvailable(){
        if(this.stock != 0){
            this.isAvailable = true;
            return
        }
        this.isAvailable = false
    }
    static displayProduct(product){
        let pdd = products.find(prod => product === prod.name)
        if(!pdd){
            return 'Product not found'
            
        }
        return pdd
    }

}






let pdd1 = new Shopping('100', 'Chair', 15000, 'Furniture', 50, 3)
let pdd2 = new Shopping('101', 'Television', 85000, 'Electric Appliance', 15, 12)
// pdd1.updatePrice(22000)
pdd1.restock(10)
//  console.log(Shopping.displayProduct('Television'))
// pdd2.displayProduct()

// pdd2.buy(1)



let cust1 = new Customer('John', 'john@gmail.com')
cust1.deposit(1800000)
cust1.addToCart('Chair', 45)
cust1.addToCart('Television', 5)
cust1.checkOut()
// console.log(cust1.viewOrders('John'))
// console.log(cust1.viewBalance('John'))
console.log(cust1)

console.log(cart)



console.log(products)


