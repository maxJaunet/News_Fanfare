import 'dotenv/config';
import multer from 'multer';

// const CONNECTION_URL = process.env.MONGO_URL;
// const connection = mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });



// export const storage = new GridFsStorage({
//     db: connection,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-${file.originalname}`
//     };
//   }
// });

// const uploadFile = multer({ storage: storage }).single("imgFile");
// export const upload = util.promisify(uploadFile);


export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

export const upload = multer({storage: storage});

