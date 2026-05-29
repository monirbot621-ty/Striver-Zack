const fs = require("fs");
const path = require("path");

module.exports = async ({ api, event, config, statePath }) => {
  try {

    if (!event || event.type !== "message") return;

    const body = event.body || "";

    // =========================
    // LOAD STATE
    // =========================
    let state = {};

    if (fs.existsSync(statePath)) {
      state = JSON.parse(fs.readFileSync(statePath));
    }

    // =========================
    // OFFLINE MODE CHECK
    // =========================
    if (
      state.botOffline &&
      event.senderID !== config.adminUID
    ) {
      return;
    }

    // =========================
    // UNSEND CACHE SYSTEM
    // =========================
    if (event.body) {
      const cachePath = path.join(
        __dirname,
        "../database/unsendCache.json"
      );

      let cache = {};

      if (fs.existsSync(cachePath)) {
        cache = JSON.parse(fs.readFileSync(cachePath));
      }

      cache[event.messageID] = {
        body: event.body,
        senderID: event.senderID,
        senderName: event.senderName || "User",
        time: Date.now()
      };

      fs.writeFileSync(
        cachePath,
        JSON.stringify(cache, null, 2)
      );
    }

    // =========================
    // PREFIX CHECK
    // =========================
    if (!body.startsWith(config.prefix)) return;

    const args = body
      .slice(config.prefix.length)
      .trim()
      .split(" ");

    const commandName = args.shift().toLowerCase();

    const commandsPath = path.join(
      __dirname,
      "../scripts"
    );

    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {

      const command = require(
        path.join(commandsPath, file)
      );

      const match =
        command.name === commandName ||
        (command.aliases &&
          command.aliases.includes(commandName));

      if (!match) continue;

      // =========================
      // ADMIN CHECK
      // =========================
      if (
        command.admin &&
        event.senderID !== config.adminUID
      ) {
        return api.sendMessage(
          `╭━━━〔 🚫 𝘼𝙘𝙘𝙚𝙨𝙨 𝘿𝙚𝙣𝙞𝙚𝙙 🚫 〕━━━⬣

⚠️ এই command শুধু boss ব্যবহার করতে পারবে 🙂🖤

╰━━━━━━━━━━━━━━⬣`,
          event.threadID
        );
      }

      // =========================
      // RUN COMMAND (SAFE)
      // =========================
      try {
        command.run({
          api,
          event,
          args,
          config,
          statePath
        });
      } catch (err) {
        console.log("❌ Command Error:", err);
      }

    }

  } catch (err) {
    console.log("❌ Message Handler Error:", err);
  }
};
