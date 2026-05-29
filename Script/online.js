// scripts/online.js

const fs = require("fs");

module.exports = {
  name: "online",
  admin: true,

  run({ api, event, statePath }) {

    let state = {};

    // Load previous state
    if (fs.existsSync(statePath)) {

      state = JSON.parse(
        fs.readFileSync(statePath)
      );

    }

    // Disable offline mode
    state.botOffline = false;

    // Save state
    fs.writeFileSync(
      statePath,
      JSON.stringify(state, null, 2)
    );

    api.sendMessage(

`╭━━━〔 🟢 𝙉𝙞𝙖 𝙊𝙣𝙡𝙞𝙣𝙚 🟢 〕━━━⬣

✨ Nia আবার online হয়েছে 🙂💖

⚡ এখন আবার আপনাদের সাহায্য করবো 🐸

╰━━━━━━━━━━━━━━⬣`,

      event.threadID
    );

  }
};
