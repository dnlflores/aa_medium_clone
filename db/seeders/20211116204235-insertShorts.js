'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Shorts', [
      { title: 'First Story', content: 'This is my first story. I hope you like it.', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Test Story', content: 'This is a test story. I hope you know this is a test.', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Buddy Story', content: 'This is my buddy story. Daniel is my buddy!', userId: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Shorts', null, {});
  }
};
