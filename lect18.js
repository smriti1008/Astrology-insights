const orderDetail ={
    orderId: 123,
    food: ["pizza", "biryani", "coke"],
    cost: 600,
    customer_name: "Smriti",
    customer_location: "Jankipuram",
    restaurant_location: "Engcollege",
}



function placeOrder(orderDetail, callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is recieved and order is placed");
        orderDetail.status = true;
        callback(orderDetail);
    },3000)
}

function preparingOrder(orderDetail, callback){
    console.log(`Your food prep started${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token;
        callback(orderDetail);
    },3000)
}


function pickUpOrder(orderDetail, callback){
    console.log(`Delivery boy is on the  way to pickup order ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("I have picked up your order");
        orderDetail.pickUp = true;
        callback(orderDetail);

    },3000)
}

function deliverOrder(orderDetail){
    console.log(`I am on my way ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Your order is delivered");
        orderDetail.delivery = true;
    },3000)
}

// placeOrder(preparingOrder(pickUpOrder));       wrong way to do callback

placeOrder(orderDetail, (orderDetail)=>{
    preparingOrder(orderDetail, (orderDetail)=>{
        pickUpOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
})