const fs = require('fs');

function writeInAFile() {
    let data = "Hello world";

    fs.writeFile('message.txt', data, (error) => {
        if (error) throw error;
        console.log('The file has been saved!');
    });
}

function readFromAFile() {
    fs.readFile(__dirname+'/message.txt', 'utf8', (error, data) => {
        if (error) throw error;
        console.log(data);
    });
};

function listFilesInADirectory() {
    fs.readdir(__dirname+'/doesnotexist', (error, files) => {
        if (error) throw error;
        files.forEach((file) => {
            console.log(file);
        });
    })
}

function createADirectory() {
    fs.mkdir(__dirname+'/demoDir', { recursive: true }, (error) => {
        if(error) throw error;
    });
}

//writeInAFile();
//readFromAFile();
// listFilesInADirectory();
createADirectory();