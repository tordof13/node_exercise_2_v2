const express = require('express')
const app = express()

app.use(express.static('public'))

//greeting array
function greeter(){

    var greeting = ["Hei", "Hallo", "Bon giorno", "Ello"];
    var greet = greeting[Math.floor(Math.random()*4)];
    
    return greet;
}

//Get endpoint
app.get('/greet/:id', function (req,res){
    
    res.send(greeter() +" "+ req.params.id);
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
