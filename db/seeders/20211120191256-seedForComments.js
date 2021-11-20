'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
    content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. It was… uh… porno. Yeah, that's it.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Now, now. Perfectly symmetrical violence never solved anything.
    That's the ONLY thing about being a slave.
    Enough about your promiscuous mother, Hermes! We have bigger problems.`,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I'm sure those windmills will keep them cool. Fry! Quit doing the right thing, you jerk! Does anybody else feel jealous and aroused and worried? That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Soothe us with sweet lies. We don't have a brig. Uh, is the puppy mechanical in any way? Then throw her in the laundry room, which will hereafter be referred to as "the brig".
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `A true inspiration for the children. Why did you bring us here? Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Fetal stemcells, aren't those controversial? They're like sex, except I'm having them! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `It must be wonderful. Too much work. Let's burn it and say we dumped it in the sewer. Yes, except the Dave Matthews Band doesn't rock. Daddy Bender, we're hungry. I suppose I could part with 'one' and still be feared…
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! You're going back for the Countess, aren't you? Why yes! Thanks for noticing. You seem malnourished. Are you suffering from intestinal parasites?
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Does anybody else feel jealous and aroused and worried? Good news, everyone! There's a report on TV with some very bad news! It's okay, Bender. I like cooking too. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. No! Don't jump! We'll need to have a look inside you with this camera.
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Hey, you add a one and two zeros to that or we walk! It's toe-tappingly tragic! Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I feel like I was mauled by Jesus. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. And when we woke up, we had these bodies. Shinier than yours, meatbag. These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
    {
    content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. It was… uh… porno. Yeah, that's it.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Now, now. Perfectly symmetrical violence never solved anything.
    That's the ONLY thing about being a slave.
    Enough about your promiscuous mother, Hermes! We have bigger problems.`,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I'm sure those windmills will keep them cool. Fry! Quit doing the right thing, you jerk! Does anybody else feel jealous and aroused and worried? That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Soothe us with sweet lies. We don't have a brig. Uh, is the puppy mechanical in any way? Then throw her in the laundry room, which will hereafter be referred to as "the brig".
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `A true inspiration for the children. Why did you bring us here? Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Fetal stemcells, aren't those controversial? They're like sex, except I'm having them! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `It must be wonderful. Too much work. Let's burn it and say we dumped it in the sewer. Yes, except the Dave Matthews Band doesn't rock. Daddy Bender, we're hungry. I suppose I could part with 'one' and still be feared…
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! You're going back for the Countess, aren't you? Why yes! Thanks for noticing. You seem malnourished. Are you suffering from intestinal parasites?
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Does anybody else feel jealous and aroused and worried? Good news, everyone! There's a report on TV with some very bad news! It's okay, Bender. I like cooking too. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. No! Don't jump! We'll need to have a look inside you with this camera.
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Hey, you add a one and two zeros to that or we walk! It's toe-tappingly tragic! Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I feel like I was mauled by Jesus. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. And when we woke up, we had these bodies. Shinier than yours, meatbag. These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
    {
    content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. It was… uh… porno. Yeah, that's it.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Now, now. Perfectly symmetrical violence never solved anything.
    That's the ONLY thing about being a slave.
    Enough about your promiscuous mother, Hermes! We have bigger problems.`,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I'm sure those windmills will keep them cool. Fry! Quit doing the right thing, you jerk! Does anybody else feel jealous and aroused and worried? That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Soothe us with sweet lies. We don't have a brig. Uh, is the puppy mechanical in any way? Then throw her in the laundry room, which will hereafter be referred to as "the brig".
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `A true inspiration for the children. Why did you bring us here? Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Fetal stemcells, aren't those controversial? They're like sex, except I'm having them! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `It must be wonderful. Too much work. Let's burn it and say we dumped it in the sewer. Yes, except the Dave Matthews Band doesn't rock. Daddy Bender, we're hungry. I suppose I could part with 'one' and still be feared…
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! You're going back for the Countess, aren't you? Why yes! Thanks for noticing. You seem malnourished. Are you suffering from intestinal parasites?
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Does anybody else feel jealous and aroused and worried? Good news, everyone! There's a report on TV with some very bad news! It's okay, Bender. I like cooking too. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. No! Don't jump! We'll need to have a look inside you with this camera.
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Hey, you add a one and two zeros to that or we walk! It's toe-tappingly tragic! Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I feel like I was mauled by Jesus. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. And when we woke up, we had these bodies. Shinier than yours, meatbag. These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
    {
    content: `You can see how I lived before I met you. Stop it, stop it. It's fine. I will 'destroy' you! Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars. No, of course not. It was… uh… porno. Yeah, that's it.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Now, now. Perfectly symmetrical violence never solved anything.
    That's the ONLY thing about being a slave.
    Enough about your promiscuous mother, Hermes! We have bigger problems.`,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I'm sure those windmills will keep them cool. Fry! Quit doing the right thing, you jerk! Does anybody else feel jealous and aroused and worried? That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Soothe us with sweet lies. We don't have a brig. Uh, is the puppy mechanical in any way? Then throw her in the laundry room, which will hereafter be referred to as "the brig".
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `A true inspiration for the children. Why did you bring us here? Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Fetal stemcells, aren't those controversial? They're like sex, except I'm having them! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `It must be wonderful. Too much work. Let's burn it and say we dumped it in the sewer. Yes, except the Dave Matthews Band doesn't rock. Daddy Bender, we're hungry. I suppose I could part with 'one' and still be feared…
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! You're going back for the Countess, aren't you? Why yes! Thanks for noticing. You seem malnourished. Are you suffering from intestinal parasites?
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Does anybody else feel jealous and aroused and worried? Good news, everyone! There's a report on TV with some very bad news! It's okay, Bender. I like cooking too. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. No! Don't jump! We'll need to have a look inside you with this camera.
    `,
    userId: 2,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `Hey, you add a one and two zeros to that or we walk! It's toe-tappingly tragic! Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.
    `,
    userId: 3,
    shortId: Math.floor(Math.random() * 13) + 4,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    content: `I feel like I was mauled by Jesus. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. And when we woke up, we had these bodies. Shinier than yours, meatbag. These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are.
    `,
    userId: 1,
    shortId: Math.floor(Math.random() * 13) + 4,
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
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
