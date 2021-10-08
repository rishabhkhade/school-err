'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
			{
				email: "admin@gmail.com",
				password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10), null),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});

  }
};
