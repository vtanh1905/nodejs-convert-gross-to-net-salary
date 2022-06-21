import { QueryError } from "mysql2";
import Connection from "mysql2/typings/mysql/lib/Connection";

const mysql = require('mysql2');

// create the connection to database
export const connection : Connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error : QueryError | null) => {
  if(error) throw error;
  console.log("Database Connect Successfully");
  connection.end();
});
