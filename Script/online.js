// scripts/online.js

const fs = require("fs");

module.exports = {
name: "online",
admin: true,

run({ api, event, statePath, config }) {

if (event.senderID !== config.adminUID) {
  return api.sendMessage(

`╭━━━〔 🚫 𝘼𝙘𝙘𝙚𝙨𝙨 𝘿𝙚𝙣𝙞𝙚𝙙 🚫 〕━━━⬣

⚠️ এই command শুধু boss ব্যবহার করতে পারবে 🙂🖤

╰━━━━━━━━━━━━━━⬣`,
event.threadID
);
}

const state = {
  botOffline: false
};

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
