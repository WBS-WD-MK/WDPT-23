import express from 'express';
import upload from './utils/multerConfig.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use('/files', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.post('/file-upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({
    location: `http://localhost:${port}/files/${req.file.filename}`,
  });
});
app.listen(port, () => {
  console.log(`server up on ${port}`);
});
