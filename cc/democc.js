const {
  beforeSaveHook,
  afterSaveHook,
  beforeDeleteHook,
  afterDeleteHook,
} = require("@openinc/parse-server-opendash");

const init = async (name) => {
  console.log("Sebbel lügt über " + name);
  await beforeSaveHook("OD3_Share", async (request) => {
    console.log("OD3_Share beforeSaveHook");
    console.log(JSON.stringify(request.object));
    console.log(JSON.stringify(request.user));
    console.log(JSON.stringify(request));
  });
};

module.exports = { init };
