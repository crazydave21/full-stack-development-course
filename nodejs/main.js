let fs = require('fs');
let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.post('/post', function(req, res) {
    if(!fs.existsSync('text.txt')) {
        fs.appendFile('text.txt', '', function(err) {
            if(err) throw err
            else res.send('"text.txt" created!');
        });
    }

    else res.send('File already exist!')
});

app.post('/update', function(req, res) {
    if(fs.existsSync('text.txt')) {
        fs.writeFile('text.txt', req.body.text, function(err) {
            if(err) throw err
            else res.send('Text updated!');
        });
    }
    else res.send('File not exist save first'); 
});

app.post('/read', function(req, res) {
    if(fs.existsSync('text.txt')) {
        fs.readFile('text.txt', 'utf8', function(err, data) {
            if(err) throw err;
            else res.send(data);
        });
    }
    else res.send('File not exist save first');
    
});

app.post('/delete', function(req, res) {
    if(fs.existsSync('text.txt')) {
        fs.unlink('text.txt', function(err) {
            if(err) throw err;
            else res.send('Delete successful!');
        });
    }
    else res.send('File not exist save first');
    
});

app.listen(8080);