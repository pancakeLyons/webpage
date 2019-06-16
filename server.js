
const express = require('express');
const jason = require('./jason.json');
const photoAlbum = require('./photos.json');
const writing = require('./writing.json');

const app = express();// import express; webserver framework

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/photos', (req, res) => {
  res.render('photography', {
    pagetitle: 'Jason Lyons Photography',
    title: 'Photos',
    photos: photoAlbum.photoBooth
  });
});
app.get('/writing', (req, res) => {
  res.render('writing', {
    pagetitle: 'Jason Lyons Writing',
    title: 'Writing',
    writings: writing.allWriting
  });
});
app.get('/', (req, res) => {
  const j = jason.Jason;// .find(p => p.id === 'Jason');
  res.render('profile', {
    pagetitle: `${j.firstname} ${j.lastname}`,
    j,
  });
});

const server = app.listen(7000, () => { //run website on local port
  console.log(`Express running → PORT ${server.address().port}`);
});