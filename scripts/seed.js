const db = require('../server/db');
const { User } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      firstName: 'Depak',
      lastName: 'Borhara',
      email: 'depak@depak.com',
      currentCity: 'New York City',
      favoriteCities: [
        'Plano, Texas',
        'New Orleans, Louisiana',
        'Orlando, Florida',
      ],
      vacationCities: ['Madrid, Spain', 'Tokyo, Japan'],
      password: '123',
    }),
    User.create({
      firstName: 'Adel',
      lastName: 'Jabbar',
      email: 'adel@adel.com',
      currentCity: 'Frankfurt',
      favoriteCities: [
        'San Franciso, California',
        'Nashville, Tennessee',
        'London, England',
      ],
      vacationCities: ['Staten Island, New York', 'Paris, France'],
      password: '456',
    }),
    User.create({
      firstName: 'Manami',
      lastName: 'Ueda',
      email: 'manami@manami.com',
      currentCity: 'Hawaii',
      favoriteCities: [
        'Osaka, Japan',
        'Columbus, Ohio',
        'Dallas, Texas',
      ],
      vacationCities: ['Staten Island, New York', 'Paris, France'],
      password: '456',
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
