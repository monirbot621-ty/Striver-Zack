// scripts/help.js

module.exports = {
  name: "help",
  aliases: ["menu", "commands"],

  run({ api, event }) {

    api.sendMessage(

`╭━━━〔 📜 𝙉𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 📜 〕━━━⬣

🌸 Prefix : /

╭━━〔 🌍 Public Commands 🌍 〕━━⬣

💌 /help
➤ সকল command list দেখাবে 📖

🤖 /nia
➤ Bot সম্পর্কে জানাবে 🐸

👑 /boss
➤ Boss এর পরিচয় দেখাবে ✨

🏓 /ping
➤ Bot speed দেখাবে ⚡

╰━━━━━━━━━━━━━━⬣

╭━━〔 👑 Admin Commands 👑 〕━━⬣

🔒 /offline
➤ Bot বন্ধ করবে ⚠️

🟢 /online
➤ Bot আবার চালু করবে 💫

╰━━━━━━━━━━━━━━⬣`,

      event.threadID
    );

  }
};
