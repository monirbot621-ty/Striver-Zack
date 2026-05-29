// scripts/offline.js

const fs = require("fs");

module.exports = {
  name: "offline",
  admin: true,

  run({ api, event, statePath }) {

    let state = {};

    // Load previous state
    if (fs.existsSync(statePath)) {

      state = JSON.parse(
        fs.readFileSync(statePath)
      );

    }

    // Enable offline mode
    state.botOffline = true;

    // Save state
    fs.writeFileSync(
      statePath,
      JSON.stringify(state, null, 2)
    );

    api.sendMessage(

`╭━━━〔 🌑 𝙉𝙞𝙖 𝙊𝙛𝙛𝙡𝙞𝙣𝙚 🌑 〕━━━⬣

😴 Nia এখন offline এ যাচ্ছে...

💤 Boss এর অনুমতি ছাড়া
আমি আর reply দিবো না 🙂🖤

╰━━━━━━━━━━━━━━⬣`,

      event.threadID
    );

  }
};
