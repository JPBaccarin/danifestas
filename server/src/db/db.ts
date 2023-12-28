// src/db.ts

import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "danifestas",
  connectionLimit: 10,
});

export default pool;
