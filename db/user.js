const Sequelize = require("sequelize") 
// const db = 

Const User = db.define("user", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    currentCity: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    favoriteCities: {
        type: Sequelize.ARRAY,
    },
    vacationCities: {
        type: Sequelize.ARRAY,
    }

})

module.exports = User