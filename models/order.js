
module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {
        order_number:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey:true
        },
         order_date: {
                 type: Sequelize.DATE,
                 required: true
             },
         shipped_date: {
                 type: Sequelize.DATE,
                 required: true
             },
         status:{
             type:Sequelize.TEXT,
             required:true
         }
    });

    return Order;
}