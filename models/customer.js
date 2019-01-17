
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        customer_number:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey:true
        },
        first_name: {
            type: Sequelize.STRING,
            required:true
        },
        last_name: {
            type: Sequelize.STRING,
            required: true
        },
        phone:{
            type:Sequelize.STRING,
            required: true
        },
        username:{
            type:Sequelize.STRING,
            required: true
        }
    });

     Customer.associate = function (models) {
         Customer.hasMany(models.Order, { foreignKey: 'customer_number' })
     };
    return Customer;
}