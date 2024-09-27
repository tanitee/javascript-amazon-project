import { addToCart, cart , loadFromStorage , removeFromCart } from "../../data/cart.js";

describe('test suite: addToCart',()=>{
    beforeEach(() => {
        spyOn(localStorage , 'setItem');
    })
    it('Add an existing product to the cart', ()=>{
        

        spyOn(localStorage , 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOptionId:'1'
            }]);
        

        });

        loadFromStorage();


        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId ).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify(
            [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
              }]
        ))
    })



    it('adds a new product to cart'  , ()=>{

        spyOn(localStorage , 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId ).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart' , JSON.stringify(
            [{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOptionId:'1'
              }]
        ))
    })

    
})

describe('test suite: remove from cart',() => {
    beforeEach(() =>{
        spyOn(localStorage , 'setItem');
    })

    it('removing product from the cart',() =>{
        
    })
})