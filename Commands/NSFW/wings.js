const axios = require("axios");

module.exports = {
  name: "wings",
  alias: ["nsfwwings"],
  desc: "Hentai picture of waifu with wings",
  category: "Nsfw",
  usage: `wings`,
  react: "👹",
  start: async (Yaka, m, { prefix, NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff = await axios.get(`https://fantox-apis.vercel.app/wings`)
    let imgURL = buff.data.url


    let Button = [];
     
    let bmffg = {
      image: { url: imgURL },
      caption: `\n* Here What you are looking for 👀..*\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };

    await Yaka.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};