import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts , loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { Car } from "../data/car.js";

async function loadPage(){
    //to handle error is async await , you use try ctach. put the code that can cause an error in the try and catch to display a message
    try{
        //throw 'error1'
        /*await let us write asynchronous code like normal code . its a shortcut for /////loadProductsFetch().then(() =>{})*/
    await loadProductsFetch();

    await new Promise((resolve, reject ) => {
            loadCart(() => {
                //reject('error3')
                resolve('value3');
            });
        })

    } catch (error) {
        console.error('errorrr');
    }
    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage()

/*Promise.all([
   loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) =>{
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*new Promise((resolve) => { 
    loadProducts(() =>{
        resolve('value1');
    });

}).then((value) => {
    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
    
   
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})*/

/*loadProducts(()=>{
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    })
    
});*/
