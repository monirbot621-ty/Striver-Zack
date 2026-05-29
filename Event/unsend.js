// events/unsend.js

const fs = require("fs");
const path = require("path");

module.exports = async ({ api, event }) => {
  try {

    if (event.type !== "message_unsend") return;

    const cachePath = path.join(
      __dirname,
      "../database/unsendCache.json"
    );

    let cache = {};

    if (fs.existsSync(cachePath)) {
      cache = JSON.parse(
        fs.readFileSync(cachePath)
      );
    }

    const old = cache[event.messageID];

    if (!old) {
      return api.sendMessage(
        "⚠️ Unsend message data পাওয়া যায়নি 🙂",
        event.threadID
      );
    }

    const name = old.senderName || "User";

    api.sendMessage(

`[ 👀 Hey guys ]

${name} একটি message delete করেছে 😏

📩 Deleted Message:
"${old.body}"

😏 লাভ নেই... আমি সব দেখি!

╰━━━━━━━━━━━━━━⬣`,

      event.threadID
    );

  } catch (err) {
    console.log("Unsend error:", err);
  }
};
