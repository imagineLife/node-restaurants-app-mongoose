exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://mretfaster:Jake8Snake6@ds053944.mlab.com:53944/restaurants';
exports.PORT = process.env.PORT || 8080;