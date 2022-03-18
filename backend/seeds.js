var mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
var Item = mongoose.model("Item");
var User = mongoose.model("User");

mongoose.connect("mongodb://127.0.0.1:27017");

// seed database with users
const seedUsers = async () => {
  for (let index = 0; index < 100; index++) {
    const user = new User({
      username: `user${index}`,
      email: `email${Math.random()}@gmail.com`,
    });

    await user.save().then((user) => {
      console.log(`User ${user.username} created`);
    });
  }
  console.log("Users seeding done");
  process.exit();
};
seedUsers();

// // seed database with items
// const seedItems = async () => {
//   for (let index = 0; index < 100; index++) {
//     const item = new Item({
//       title: `Item ${index}`,
//       description: `Item ${index} description`,
//     });
//     await item.save().then(
//       (result) => {
//         console.log(result);
//         console.log(`Item ${index} saved`);
//       },
//       () => {
//         console.log(`Item ${index} not saved`);
//       }
//     );
//   }
//   console.log("seed done");
//   process.exit();
// };

// seedItems();
