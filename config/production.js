module.exports = {
    
  log: {
      level: 'info',
      disabled: false,
  },

  cors: {
  origins: ['http://localhost:3000'],
  maxAge: 10800,
},

  database: {
      client: 'mysql2',
      host: 'localhost',
      port: 3306,
      name: 'habits',
      username: 'root',
      password: 'root',
  },
  pagination: {
      limit: 100,
      offset: 0,
  },
  auth: {
      argon: {
        saltLength: 16,
        hashLength: 32,
        timeCost: 6,
        memoryCost: 2 ** 17,
      },
      jwt: {
        secret: 'nenzeermoeilijkesecretdieikeenbeetjegarekkenmeteenonnodigelangeuitleg',
        expirationInterval: 60 * 60 * 1000, // ms (1 hour)
        issuer: 'habits',
        audience: 'habits',
      },
    },
};