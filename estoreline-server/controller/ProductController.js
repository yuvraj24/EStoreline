import db from "../db/index.js";

export function getProductsForCategory(req, res) {
  let id = req.params.id;

  let query =
    "SELECT * FROM Product as prod" +
    " INNER JOIN Color as col ON prod.colorId = col.colorId " +
    " INNER JOIN Size ON prod.sizeId = Size.sizeId " +
    " INNER JOIN Image as img ON prod.imgId = img.imgId " +
    " INNER JOIN Brand as br ON prod.brandId = br.brandId WHERE categoryId =" +
    id;
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}
