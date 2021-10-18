'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
				type: Sequelize.STRING(191),
				allowNull: false,
			},
      email: {
        type: Sequelize.STRING(600),
        allowNull: true,
      },
      mobile_no: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN(true),
        allowNull: true,
        defaultValue: '1'
      },
      profile_img: {
        type: Sequelize.STRING(666),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(600),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
  
    })  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
