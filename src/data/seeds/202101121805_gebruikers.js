const { tables } = require('..');
const Role = require('../../core/roles');

module.exports = {
    seed: async (knex) => {
        await knex(tables.gebruikers).delete();

        await knex(tables.gebruikers).insert([
            {
                id: '1706481d-ae5a-4bcf-9ee3-20e71746e19c',
                naam: 'admin',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$3TajseKeojlCL7eo16Tp5g$5YP6wd1ljl3KRJsPW/J2EVrfF5liFdi+2/TNquZb8wo',
                roles: JSON.stringify([Role.ADMIN, Role.GEBRUIKER]),
            },
            {
                id: '2529923f-1c94-4f0f-84d1-1444dc9c73e4',
                naam: 'Manu',
                wachtwoord: '$argon2id$v=19$m=131072,t=6,p=1$3TajseKeojlCL7eo16Tp5g$5YP6wd1ljl3KRJsPW/J2EVrfF5liFdi+2/TNquZb8wo',
                roles: JSON.stringify([Role.GEBRUIKER]),
            },
        ]);
    },
};