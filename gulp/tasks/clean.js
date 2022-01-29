import del from "del";

import path from "../config/path.js";

const clean = () => {
  return del(path.root);
};

export default clean;
