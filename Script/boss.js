// scripts/boss.js

module.exports = {
name: "boss",

run({ api, event }) {
api.sendMessage(
`╭━━━〔 👑 𝘽𝙤𝙨𝙨 𝙄𝙣𝙛𝙤 👑 〕━━━⬣

🌸 Name : Striver Zack (Onto) 🙂✨

🎭 পেশায় তিনি একজন নাট্যকার
💻 এবং একজন programmer 🐸

🌟 নতুন কিছু create করা
এবং সকলকে বিনোদন দেওয়াই
তার life line 🙂🤍

🤲 সবাই আমার boss এর জন্য
দোয়া করবেন 💖

🔗 Boss :
https://www.facebook.com/profile.php?id=61572053975146

╰━━━━━━━━━━━━━━⬣`,
event.threadID
);
}
};
