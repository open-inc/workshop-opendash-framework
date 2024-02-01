const {
  beforeSaveHook,
  afterSaveHook,
  beforeDeleteHook,
  afterDeleteHook,
} = require("@openinc/parse-server-opendash");

const init = async (name) => {
  console.log("Init Cloud Function " + name);

  Parse.Cloud.define("getProducts", async function (request) {
    const response = await fetch("https://api.predic8.de/shop/v2/products");
    const data = await response.json();
    return data.products;
  });

  Parse.Cloud.beforeFind("products", (req) => {});
};

module.exports = { init };
