const db = require('../config/db.config.js');

const Order = db.orders;

//post a order

exports.create = (req, res) => {
    // Save to MYSQL database
    Order.create({
        order_number: req.body.order_number,
        order_date: req.body.order_date,
        shipped_date: req.body.shipped_date,
        status: req.body.status
    }).then(order => {
        console.log('order' + order);
        // res.status(200).send("successfully created"+order);
        log(chalk.blue("success:  created order with ID :: " + req.body.id));
    }).catch((err) => res.send(err));
};
//FETCH all orders
exports.findAll = (req, res) => {
    Order.findAll().then(orders => {
        orders
    });
};
//Find order by ID
exports.findById = (req, res) => {
    Order.findById(req.params.orderId).then(order => {
        res.send(order);
    });
};
//Update order

exports.update = (req, res) => {
    const uiid = req.params.orderId;
    Order.update({
        order_number: req.body.order_number,
            order_date: req.body.order_date,
            shipped_date: req.body.shipped_date,
            status: req.body.status
    }, {
        where: {
            id: req.params.orderId
        }
    }).then(() => {
        res.status(200).send("updated successfully a order with id =" + uiid);
    });
};

//Delete a order by ID 

exports.delete = (req, res) => {
    const uiid = req.params.orderId;
    Order.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send("Deleted successfully a order with id=" + uiid);
    });
};