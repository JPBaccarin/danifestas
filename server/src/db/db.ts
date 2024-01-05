// src/db/db.ts
import { createPool, Pool, PoolConnection } from 'mysql2';

const pool: Pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'danifestas',
  connectionLimit: 10,
});

export const getConnection = (callback: (connection: PoolConnection) => void) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Erro ao obter conexão do pool:', err);
    } else {
      callback(connection);
    }
  });
};

export const query = (sql: string, values?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

export default pool;
