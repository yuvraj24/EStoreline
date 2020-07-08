import db from "../db/index.js";

export const getProductFilters = (req, res) => {
  let mFilterArray = [];
  getCategory(mFilterArray, res);
};

const getCategory = (mFilterArray, res) => {
  let query = "SELECT * FROM Category";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      let data = {
        Category: result,
      };
      mFilterArray.push(data);
      getColor(mFilterArray, res);
    }
  });
};

const getColor = (mFilterArray, res) => {
  let query = "SELECT * FROM Color";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      let data = {
        Color: result,
      };
      mFilterArray.push(data);
      getSize(mFilterArray, res);
    }
  });
};

const getSize = (mFilterArray, res) => {
  let query = "SELECT * FROM Size";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      let data = {
        Size: result,
      };
      mFilterArray.push(data);
      getBrand(mFilterArray, res);
    }
  });
};

const getBrand = (mFilterArray, res) => {
  let query = "SELECT * FROM Brand";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      let data = {
        Brand: result,
      };
      mFilterArray.push(data);
      res.send(mFilterArray);
    }
  });
};
