import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

const validMimeType = ['image/png', 'image/jpg', 'image/jpeg'];

export const saveImagesToStorage = (destination: string) => {
  return {
    storage: diskStorage({
      destination: `./uploads/${destination}`,
      filename: (req, file, callback) => {
        const fileExtension: string = path.extname(file.originalname);
        const filename: string = uuidv4() + fileExtension;
        callback(null, filename);
      },
    }),
    fileFilter: (req, file, callback) => {
      const allowedMimeTypes = validMimeType;
      allowedMimeTypes.includes(file.mimetype)
        ? callback(null, true)
        : callback(null, false);
    },
  };
};

export const removeFile = (fullFilePath: string) => {
  try {
    fs.unlinkSync(fullFilePath);
  } catch (e) {
    console.error(new Date(), e);
  }
};