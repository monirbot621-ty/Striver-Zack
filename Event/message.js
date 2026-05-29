const fs = require("fs");
const path = require("path");

module.exports = async ({
  api,
  event,
  config,
  statePath
}) => {

  const body = event.body || "";

  // Load state
  let state = {};

  if (fs.existsSync(statePath)) {
    state = JSON.parse(
      fs.readFileSync(statePath)
    );
  }

  // Offline mode check
  if (
    state.botOffline &&
    event.senderID !== config.adminUID
  ) {
    return;
  }

  // =========================
  // UNSEND CACHE SYSTEM ADD
  // =========================
  if (event.body) {

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

  // Prefix Check
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

    delete require.cache[
      require.resolve(
        path.join(commandsPath, file)
      )
    ];

    const command = require(
      path.join(commandsPath, file)
    );

    const match =
      command.name === commandName ||
      (
        command.aliases &&
        command.aliases.includes(commandName)
      );

    if (!match) continue;

    // Admin check
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

    command.run({
      api,
      event,
      args,
      config,
      statePath
    });

  }

};
