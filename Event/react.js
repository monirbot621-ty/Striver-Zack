// events/react.js

module.exports = async ({ api, event }) => {
  try {

    const message = event.body || "";
    if (!message) return;

    const text = message.toLowerCase();

    let reaction = null;

    // =========================
    // English reactions
    // =========================
    if (text.includes("love")) reaction = "❤️";
    if (text.includes("like")) reaction = "👍";
    if (text.includes("dislike")) reaction = "👎";
    if (text.includes("wow")) reaction = "😮";
    if (text.includes("sad")) reaction = "😢";
    if (text.includes("cry")) reaction = "😭";
    if (text.includes("angry")) reaction = "😡";
    if (text.includes("happy")) reaction = "😊";
    if (text.includes("good")) reaction = "👌";
    if (text.includes("bad")) reaction = "👎";
    if (text.includes("nice")) reaction = "✨";
    if (text.includes("cool")) reaction = "😎";
    if (text.includes("ok")) reaction = "👌";
    if (text.includes("thanks")) reaction = "🙏";
    if (text.includes("sorry")) reaction = "🥺";
    if (text.includes("yes")) reaction = "✅";
    if (text.includes("no")) reaction = "❌";
    if (text.includes("bro")) reaction = "😄";
    if (text.includes("lol")) reaction = "😂";

    // =========================
    // Bangla reactions
    // =========================
    if (text.includes("ভালো")) reaction = "👍";
    if (text.includes("ভাল")) reaction = "👍";
    if (text.includes("ভালোবাসা")) reaction = "❤️";
    if (text.includes("ভালবাসা")) reaction = "❤️";
    if (text.includes("দুঃখ")) reaction = "😢";
    if (text.includes("কান্না")) reaction = "😭";
    if (text.includes("রাগ")) reaction = "😡";
    if (text.includes("খুশি")) reaction = "😊";
    if (text.includes("হাসি")) reaction = "😄";
    if (text.includes("ধন্যবাদ")) reaction = "🙏";
    if (text.includes("সরি")) reaction = "🥺";
    if (text.includes("ঠিক")) reaction = "👌";
    if (text.includes("না")) reaction = "❌";
    if (text.includes("হ্যাঁ")) reaction = "✅";
    if (text.includes("ভাই")) reaction = "😄";
    if (text.includes("কেমন")) reaction = "🙂";
    if (text.includes("শুভ")) reaction = "✨";

    if (!reaction) return;

    api.setMessageReaction(
      reaction,
      event.messageID,
      (err) => {}
    );

  } catch (err) {
    console.log("React error:", err);
  }
};
