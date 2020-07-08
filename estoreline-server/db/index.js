import mysql from "mysql";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yuvraj@24",
  database: "EStoreLine",
});

connection.connect((err) => {
  if (err) {
    console.log("MySQL Connection failed ", err);
  } else {
    console.log("MySQL Connected");
  }
});

export default connection;
