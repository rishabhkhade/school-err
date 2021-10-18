'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
			{
				name: "Rishabh",
				email: "rishabh@gmail.com",
				mobile_no: "9096915795",
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
