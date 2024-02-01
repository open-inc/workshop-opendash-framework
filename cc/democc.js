const {
  beforeSaveHook,
  afterSaveHook,
  beforeDeleteHook,
  afterDeleteHook,
} = require("@openinc/parse-server-opendash");

const init = async (name) => {
  console.log("Init Cloud Code " + name);
  await beforeSaveHook("OD3_Share", async (request) => {
    console.log(
      "-------________-------________-------________-------________-------________"
    );
    console.log("OD3_Share beforeSaveHook");
    console.log(JSON.stringify(request.object));
    console.log(JSON.stringify(request.user));
    console.log(JSON.stringify(request.master));
    if (request.object.get("key") == "test") {
      request.object.set("accepted", true);
    }
    console.log(
      "-------________-------________-------________-------________-------________"
    );
  });
};

module.exports = { init };
