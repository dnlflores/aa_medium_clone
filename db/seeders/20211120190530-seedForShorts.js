'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      

      Example:
      */
   return queryInterface.bulkInsert('Shorts', [
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'Futurama',
      content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. Yeah, that's it.`,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Shorts', null, {});
  }
};
