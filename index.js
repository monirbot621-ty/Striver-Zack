const fs = require("fs");
const path = require("path");
const login = require("fca-unofficial");

const config = require("./config.json");

// Load app state (Facebook login session)
let appState = {};

if (fs.existsSync("./appstate.json")) {
  appState = require("./appstate.json");
}

// Start bot
login({ appState }, (err, api) => {
  if (err) return console.log(err);

  console.log("🤖 Nia Bot is Online...");

  // Listen messages
  api.listenMqtt(async (err, event) => {
    if (err) return console.log(err);

    if (!event) return;
    if (event.type !== "message") return;

    // Load message event handler
    const messageHandler = require("./events/message");

    messageHandler({
      api,
      event,
      config,
      statePath: path.join(__dirname, "database/state.json")
    });

  });

});
