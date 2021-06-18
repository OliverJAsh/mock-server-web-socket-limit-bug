const m = require("mockserver-client");
const r = m.mockServerClient("localhost", 1080);
const json = require("./FIXTURE.json");
r.mockWithCallback({ path: "/search" }, (request) => ({
  body: {
    type: "JSON",
    json,
  },
})).then(() => {
  console.log('done');
})