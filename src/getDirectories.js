import { lstatSync, readdirSync } from "fs";
import { join } from "path";

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => {
  const path = join(__dirname, source);
  return readdirSync(path)
    .map(name => join(path, name))
    .filter(isDirectory);
};

export default getDirectories;
