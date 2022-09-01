const orders = [
    {
        orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]
    },
    {
        orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
        ]
    },
    {
        orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]
    },
];

// GET THE LIST OF PRODUCTS FOR THE CUSTOMER ID 234 THAT WASN'T DELIVERED:
let clientId = orders.filter((client) => {
    if (client["customerId"] === "234" && client["delivered"] === false) {
        return client
    }
})
console.log("The products for the customer ID 234 that were not delivered are: ", clientId[0]["items"])


// CREATE NEW PROPERTY ON EACH ORDER WITH THE TOTAL PRICE OF ITEMS ORDERED:
let addTotalPrice = orders.forEach((order) => {
    let productsArray = order["items"]
    let total = 0
    for (let items of productsArray) {
        total =  total + items["price"]
    }
    order["Total"] = total;
})
console.log(orders)

// HAVE ALL ORDERS BEEN DELIVERED?
let beenDelivered = orders.every((order)=> order["delivered"] === false)
if (beenDelivered === false){
    console.log("No, not all orders were delivered :/")
}
else{
    console.log("All orders were delivered :)")
}

// HAVE ANY PRODUCTS WITH AN ID OF 123 BEEN SOLD?
let product123 = orders.forEach((order)=>{
    let productsArray = order["items"]
    for(let items in productsArray){
        if (productsArray[items]["productId"] === "123"){
            console.log(`Yes, the orderId: ${order["orderId"]}`)
        }
    }
})

