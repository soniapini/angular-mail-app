var faker = require('faker');

var database = {
  messages: [],
  folders: [],
  customFolders: [],
  folderMessages: [],
  customFolderMessages: []
};

// POPOLA MESSAGGES
for (var i = 0; i < 15; i++) {
  database.messages.push({
    subject: faker.hacker.phrase(),
    from: faker.name.firstName(1) + '.' + faker.name.lastName(0) + '@nis.it',
    to: 'sonia.pini@nispro.it',
    body: faker.lorem.sentences(),
    date: faker.date.past(),
    inCustomFolder: false,
    folder: 0,
    customFolder: 0,
    id: i + 1
  });
}

// POPOLA FOLDERS
database.folders.push({
  "id": 1,
  "description": "Inbox"
});

database.folders.push(
  {
    "id": 2,
    "description": "Trash"
  });
database.folders.push(
  {
    "id": 3,
    "description": "Sent"
  });

// POPOLA CUSTOM FOLDERS
database.customFolders.push({
  "id": 1,
  "description": "Angular"
});
database.customFolders.push(
  {
    "id": 2,
    "description": "Typescript"
  });

for (var i = 0; i < 6; i++) {
  database.messages[i].inCustomFolder = true;
  database.messages[i].folder = 1;
}

for (var i = 6; i < 10; i++) {
  database.messages[i].inCustomFolder = true;
  database.messages[i].folder = 2;
}

for (var i = 10; i < 13; i++) {
  database.messages[i].inCustomFolder = true;
  database.messages[i].customFolder = 1;
}

for (var i = 13; i < 15; i++) {
  database.messages[i].inCustomFolder = true;
  database.messages[i].customFolder = 2;
}

console.log(JSON.stringify(database));
