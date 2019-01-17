module.exports = function (app) {
    const orders = require('../Controller/order.controller.js');

    //Create a new order
    app.post('/api/orders', orders.create);

    //Retrieve all orders

    app.get('/api/orders', orders.findAll);

    //Retrieve a single order by Id 

    app.get('/api/orders/:orderId', orders.findById);

    //Update a order with ID
    app.put('/api/orders/:orderId', orders.update);

    //Delete  a order with Id 
    app.delete('/api/orders', orders.delete);
}