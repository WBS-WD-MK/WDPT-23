import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});
const fileFilter = (req, file, cb) => {};

const upload = multer({ storage: storage });

export default upload;
