const db = require('../config/db.config.js');

const Customer = db.customers;

//post a customer

exports.create= (req, res)=>{
    // Save to MYSQL database
    Customer.create({
        first_name:req.body.first_name,
        last_name : req.body.last_name,
        phone:req.body.phone,
        username:req.body.username
    }).then(customer =>{
        console.log('customer'+customer);
        // res.status(200).send("successfully created"+customer);
         log(chalk.blue("success:  created order with ID :: " + req.body.id));
    }).catch((err) => res.send(err));
};
//FETCH all customers
exports.findAll= (req, res)=>{
    Customer.findAll().then(customers=>{
        res.send(customers);
    });
};
//Find customer by ID
exports.findById=(req,res)=>{
    Customer.findById(req.params.customerId).then(customer =>{
        res.send(customer);
    });
};
//Update customer

exports.update =(req,res) =>{
    const id =req.params.customerId;
    Customer.update({
        first_name: req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone,
        username : req.body.username
    }, {where:{id: req.params.customerId}}
    ).then(()=>{
        res.status(200).send("updated successfully a customer with id ="+id);
    });
};

//Delete a Customer by ID 

exports.delete=(req,res)=>{
    const id =req.params.customerId;
    Customer.destroy({
        where:{id:id}
    }).then(()=>{
        res.status(200).send("Deleted successfully a customer with id="+id);
    });
};