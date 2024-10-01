import { access, appendFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';

export const createDirIfNotExists = async (dirPath) => {
  try {
    await access(dirPath);
    return `Directory ${dirPath} already exists.`;
  } catch (error) {
    await mkdir(dirPath, { recursive: true });
    return `Directory ${dirPath} created successfully.`;
  }
};

export const createFileWithMessage = async (message) => {
  try {
    const now = new Date();
    const dirName = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now
      .getDate()
      .toString()
      .padStart(2, '0')}`;
    const fileName = `${now.getHours().toString().padStart(2, '0')}-${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}.txt`;
    await createDirIfNotExists(dirName);
    const filePath = join(dirName, fileName);
    await appendFile(filePath, message + '\n');
    console.log('File created successfully!');
  } catch (error) {
    console.log(error);
  }
};

export const deleteFileByName = async (filePath) => {
  try {
    await access(filePath);
    await unlink(filePath);
    console.log('File deleted successfully!');
  } catch (error) {
    console.log('File not found.');
  }
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'create' && argument) {
  createFileWithMessage(argument);
} else if (command === 'delete' && argument) {
  deleteFileByName(argument);
} else {
  console.log(
    'Invalid command or missing argument. Use "create <message>" or "delete <fileName>".',
  );
}
