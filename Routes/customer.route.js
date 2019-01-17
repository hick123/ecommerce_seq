module.exports =function(app){
    const customers =require ('../Controller/customer.controller.js');

    //Create a new customer
    app.post('/api/customers',customers.create);

    //Retrieve all customers

    app.get('/api/customers', customers.findAll);

    //Retrieve a single Customer by Id 

    app.get('/api/customers/:customerId',customers.findById);

    //Update a customer with ID
    app.put('/api/customers/:customerId', customers.update);

    //Delete  a customer with Id 
    app.delete('/api/customers', customers.delete);
}