//Install express server
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const uuidv1 = require('uuid/v1');
const fs = require('fs');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/SonetClient'));
app.use('/images', express.static(__dirname + '/dist/images')); 

// default options for file uploading
app.use(fileUpload());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/SonetClient/index.html'));
});

app.post('/upload', function (req, res) {
    if (!req.files || !req.files.file) {
        return res.status(400).json({'err': 'No files were uploaded.'});
    }

     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let file = req.files.file;

    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif') {
        return res.status(400).json({'err': 'Unsupport image format.'});
    }

    const dir = path.join(__dirname + '/dist/images');
    const fileName = uuidv1() + file.name.substring(file.name.lastIndexOf('.'));
    const filePath = dir + '/' + fileName;

    // Use the mv() method to place the file somewhere on your server
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    file.mv(filePath, function (err) {
        if (err) return res.status(500).send(err);
        const ret = {path: '/images/' + fileName};
        return res.json(ret);
    });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);