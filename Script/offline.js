// scripts/offline.js

const fs = require("fs");

module.exports = {
name: "offline",
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
  botOffline: true
};

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
