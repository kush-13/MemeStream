const dbUrl = 'mongodb+srv://username:password@cluster0.9gkpk.mongodb.net/meme?retryWrites=true&w=majority';
const localdbUrl = "mongodb://localhost:27017/meme"
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
module.exports.dbUrl = localdbUrl;
module.exports.dbOptions = dbOptions;
