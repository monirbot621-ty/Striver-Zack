// scripts/nia.js

module.exports = {
  name: "nia",
  aliases: ["bot"],

  run({ api, event }) {

    api.sendMessage(

`╭━━━〔 🤖 𝙉𝙞𝙖 𝘽𝙤𝙩 🤖 〕━━━⬣

🌸 Name : Nia
⚡ Version : 1.0

💻 Type : Messenger Bot
🖤 Owner : Striver Zack 🙂

✨ আমি আপনাদের সাহায্য করার জন্য তৈরি 💖

🐸 Available Features :

💌 Commands System
🔒 Admin Control
🟢 Online / Offline Mode
⚡ Fast Reply System

🌟 Thanks for using Nia 🙂🤍

╰━━━━━━━━━━━━━━⬣`,

      event.threadID
    );

  }
};
