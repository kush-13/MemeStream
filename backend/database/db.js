const mongoose = require('mongoose');
const config = require(__dirname + '/config.js');
const validator = require(__dirname+'/../validator/url.validator.js')


// connecting db 
mongoose.connect(config.dbUrl, config.dbOptions);
const conn = mongoose.connection;


// listener on db events
conn.on('open', ()=>{console.log('DB SUCESSFULLY CONNECTED !!');});
conn.on('error', console.error.bind(console, 'connection error:'));


//create meme schema
const memeSchema = new mongoose.Schema({
        name:{type: String, 
            required: true, 
            message: "Invalid Name"},
        url : {type: String, 
            required: true, 
            message: "Url Required "}, 
        caption: {type: String, 
            required: true, 
            message: "Caption Required"}
});


//create meme Model from memeSchema
const meme = mongoose.model('meme', memeSchema);


//Indexing meme collection based on _id
meme.createIndexes({_id:-1}, (err)=>{
    console.log(err);
});


// get latest 100 memes in sorted Order newest -> oldest
module.exports.getMemes = function(){
    return meme.find().sort({_id:-1}).limit(100).lean().then((memes)=>{
        memes.forEach((singleMeme)=>{
            singleMeme.id = singleMeme._id;
            delete singleMeme._id;
            delete singleMeme.__v;
        })

        return memes;

    }).catch((reason)=>{
        console.log(reason);
        return []
    })

};


//put new meme into the database
module.exports.put = function(data){

    if (validator(data.url) == false){
        return {id:-1, error: "Invalid Url"}
    }

    const newMeme = new meme({
        name : data.name,
        url: data.url, 
        caption: data.caption
    });

    return newMeme.save().then((doc)=>{
        return {id: doc._id}
    }).catch((reason)=>{
        return {id:-1, error: reason}
    });
    
};


// get meme with the specific id
module.exports.getMemeById = function(memeId){
    return meme.findById(memeId).lean().then((doc)=>{
        doc.id = doc._id;
        delete doc._id;
        delete doc.__v;

        return doc
    }).catch((reason)=>{
        return {error: true}
    });
}


//update meme
module.exports.updateMeme = null;
