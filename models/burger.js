<<<<<<< HEAD
module.exports = function(sequelize, DataType) {
	var burger = sequelize.define("burger", {
		burger_name: {
			type: DataType.STRING,
			len: [1, 100],
			allowNull: false
		},
		devoured: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	
	burger.associate = function(models) {
		burger.belongsTo(models.customer, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return burger;
}
=======
// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// Code that will call the ORM cuntions using burger specific input for the ORM
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger.js)
module.exports = burger;
>>>>>>> de6ebb82cbe70ec5cef74df0849013e049af00e2
