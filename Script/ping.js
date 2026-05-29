// scripts/ping.js

module.exports = {
  name: "ping",

  run({ api, event }) {

    const start = Date.now();

    api.sendMessage(
      "🏓 Pinging...",
      event.threadID,
      () => {

        const end = Date.now();

        api.sendMessage(

`╭━━━〔 🏓 𝙋𝙤𝙣𝙜 🏓 〕━━━⬣

⚡ Speed : ${end - start}ms

💖 Nia is running smoothly 🙂✨

╰━━━━━━━━━━━━━━⬣`,

          event.threadID
        );

      }
    );

  }
};
