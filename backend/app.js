const express = require("express");
const cors = require("cors");
const db = require(__dirname + '/database/db.js')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.get('/memes', (req, res)=>{
    // return latest 100 memes 
    db.getMemes().then((result)=>{
        res.send(result);

    }).catch((err)=>{
        res.send([]);
    })
});


app.post('/memes', (req, res)=>{
    let data = req.body;

    db.put(data).then((message)=>{
        // message = {id:__id__}
        res.send(message);

    }).catch((err)=>{
        res.send({id:-1, error: true});
    })
})


app.get('/memes/:id', (req, res)=>{
    // get Meme by id

    db.getMemeById(req.params.id).then((data)=>{
        if (data.error){
            res.sendStatus(404);
        }else{
            res.send(data);
        }

    }).catch((reason)=>{
        res.sendStatus(404);
    });
});


app.patch('/memes/:id', (req, res)=>{

    db.getMemeById(req.params.id).then((data)=>{
        if (data.error){
            res.sendStatus(404);
        }else{
            // update meme caption/url
            // TODO
            res.sendStatus(200);

        }

    }).catch((reason)=>{
        res.sendStatus(404);
    });

});


app.listen(8081, ()=>{
    console.log("server started !")
})
