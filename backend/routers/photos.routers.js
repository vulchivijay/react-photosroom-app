let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    router = express.Router();

const { v4: uuidv4 } = require('uuid');

const DIR = './public/images/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
 }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

// Photos model
let Photos = require('../models/photosroom');

router.post('/addphoto', upload.single('imagePath'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const photos = new Photos({
    _id: new mongoose.Types.ObjectId(),
    imagePath: url + '/public/images/' + req.file.filename,
    description: req.body.description
  });
  photos.save().then(result => {
    res.status(201).json({
      message: "Photo uploaded successfully!",
      photoCreated: {
        _id: result._id,
        imagePath: result.imagePath,
        description: result.description
      }
    })
  }).catch(err => {
    console.log(err)
  })
})

router.get("/", (req, res, next) => {
  Photos.find().then(data => {
    res.status(200).json({
      message: "Photos list retrieved successfully!",
      photos: data
    });
  });
});

module.exports = router;