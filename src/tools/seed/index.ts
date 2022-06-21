import { QueryError } from "mysql2";
import { connection } from "../mysql";

const query = `
  INSERT INTO Salary (VALUE)
  VALUES ("1000")
`

function seedQuery() {
  connection.connect((error : QueryError | null) => {
    if(error) throw error;
    connection.query(query, (err : QueryError | null) => {
      if (err) throw err;
      console.log("Seed Query Successfully");

      connection.end();
    })
  });
}

seedQuery();
