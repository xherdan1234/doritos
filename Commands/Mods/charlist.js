module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "🧝‍♀️",
  start: async (Yaka, m, { text, prefix, modStatus }) => {

    let txt = `\n                  ＢＯＴ ＣＨＡＲＡＣＴＥＲ ＬＩＳＴ
       ━━━━━━━━━━━━━━━━━━━━━━
       
   \n\n╠ • 0 - 𝐘𝐚𝐤𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yaka (Akuma)
       \n╠ ═════════════════════
     \n╠ • 1 - 𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Benimaru Shinmon
      \n╠ ══════════════════════
     \n╠ • 2 - 𝐏𝐨𝐰𝐞𝐫
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Power
       \n╠ ═════════════════════
     \n╠ • 3 - 𝐇𝐢𝐧𝐚𝐭𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hinata Hyuuga
       \n╠ ═════════════════════
     \n╠ • 4 - 𝐎𝐛𝐢𝐭𝐨
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Obito Uchiha
       \n╠ •════════════════════
     \n╠ • 5 - 𝐌𝐢𝐤𝐚𝐬𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mikasa Ackerman
       \n╠ ═════════════════════
     \n╠ • 6 - 𝐄𝐦𝐢𝐥𝐢𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Emilia
       \n╠ ═════════════════════
     \n╠ • 7 - 𝐀𝐲𝐚𝐧𝐞
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ayane Shirakawa
       \n╠ ═════════════════════
     \n╠ • 8 - 𝐘𝐨𝐭𝐬𝐮𝐛𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yotsuba
       \n╠ ═════════════════════
     \n╠ • 9 - 𝐌𝐚𝐢
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mai Shirakawa
       \n╠ ═════════════════════
     \n╠ • 10 - 𝐓𝐨𝐡𝐫𝐮
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Tohru Kobayashi
       \n╠ ═════════════════════
     \n╠ • 11 - 𝐌𝐚𝐫𝐢𝐧
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Marin Kitagawa
       \n╠ ═════════════════════
     \n╠ • 12 - 𝐑𝐞𝐦
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Rem
       \n╠ ═════════════════════
     \n╠ • 13 - 𝐌𝐚𝐤𝐢𝐦𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Makima
       \n╠ ═════════════════════
     \n╠ • 14 - 𝐍𝐞𝐳𝐮𝐤𝐨
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Nezuko 
       \n╠ ═════════════════════
     \n╠ • 15 - 𝐎𝐜𝐡𝐚𝐜𝐨
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ochako Uraraka
       \n╠ ═════════════════════
     \n╠ • 16 - 𝐀𝐪𝐮𝐚
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Aqua
       \n╠ ═════════════════════
     \n╠ • 17 - 𝐅𝐮𝐛𝐮𝐤𝐢
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Fubuki
       \n╠ ═════════════════════
     \n╠ • 18 - 𝐆𝐨𝐣𝐨
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Gojo Satoru
       \n╠ ═════════════════════
     \n╠ • 19 - 𝐇𝐚𝐲𝐚𝐬𝐞
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hayase Nagatoro
       \n╠ ═════════════════════
     \n╠ • 20 - 𝐈𝐭𝐚𝐜𝐡𝐢
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Itachi Uchiha
       \n╠ ═════════════════════
     \n╠ • 21 - 𝐒𝐡𝐨𝐤𝐨
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Shoko komi
       \n╠ ═════════════════════
     \n╠ • 22 - 𝐊𝐮𝐫𝐮𝐦𝐢
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Kurumi Tokisaki
       \n╠ ═════════════════════
     \n╠ • 23 - 𝐌𝐢𝐭𝐬𝐮𝐫𝐢
     \n╠ • 🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mitsuri kanroji
       \n╠━━━━━━━━━━━━━━━━━━━━━━
    \n\nUsage => *${prefix}setchar {number of character}*
    \nMore characters coming soon...`;

    let botLogos = [/*
    'https://cdn.dribbble.com/users/2400955/screenshots/10843457/media/4853cc6ddfdd1f5400ea40a608f10fef.jpg', 
      'https://wallpapercave.com/wp/wp5950608.png', 
      'https://wallpapercave.com/wp/wp11998979.jpg',
      'https://wallpapercave.com/wp/wp8526286.jpg',
      'https://wallpapercave.com/wp/wp2714940.jpg', 
      'https://wallpapercave.com/uwp/uwp2564410.jpeg', 
      'https://wallpapercave.com/uwp/uwp1074204.jpeg', 
      'https://i.pinimg.com/564x/a9/98/c8/a998c8653cd690080c2c2232355fadd2.jpg', 
      'https://wallpapercave.com/wp/wp9494921.png', 
      'https://wallpapercave.com/wp/wp8435260.png', 
      'https://wallpapercave.com/wp/wp7579400.jpg',  
      'https://wallpapercave.com/wp/wp10917529.jpg', 
      'https://wallpapercave.com/wp/wp1860711.png', 
      'https://images6.alphacoders.com/112/1126221.jpg', 
      'https://wallpapercave.com/wp/wp9269166.jpg', 
      'https://images6.alphacoders.com/919/919193.jpg', 
      'https://images8.alphacoders.com/790/790834.png', 
      'https://wallpapercave.com/wp/wp8354244.jpg', 
      'https://images5.alphacoders.com/124/1245177.jpg', 
      'https://wallpapercave.com/wp/wp8869413.png', 
      'https://wallpapercave.com/wp/wp8241464.jpg', 
      'https://images2.alphacoders.com/117/1172959.png', 
      'https://wallpapercave.com/wp/wp5894889.jpg', 
      'https://wallpapercave.com/wp/wp10959288.jpg' 
    */];

    //let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];

    let sections = []
    let chars = [/*'𝐘𝐚𝐤𝐚', '𝐁𝐞𝐧𝐢𝐦𝐚𝐫𝐮',
      '𝐏𝐨𝐰𝐞𝐫', '𝐇𝐢𝐧𝐚𝐭𝐚',
      '𝐎𝐛𝐢𝐭𝐨', '𝐌𝐢𝐤𝐚𝐬𝐚',
      '𝐄𝐦𝐢𝐥𝐢𝐚', '𝐀𝐲𝐚𝐧𝐞',
      '𝐘𝐨𝐭𝐬𝐮𝐛𝐚', '𝐌𝐚𝐢',
      '𝐓𝐨𝐡𝐫𝐮', '𝐌𝐚𝐫𝐢𝐧',
      '𝐑𝐞𝐦', '𝐌𝐚𝐤𝐢𝐦𝐚',
      '𝐍𝐞𝐳𝐮𝐤𝐨', '𝐎𝐜𝐡𝐚𝐜𝐨',
      '𝐀𝐪𝐮𝐚', '𝐅𝐮𝐛𝐮𝐤𝐢',
      '𝐆𝐨𝐣𝐨', '𝐇𝐚𝐲𝐚𝐬𝐞',
      '𝐈𝐭𝐚𝐜𝐡𝐢', '𝐒𝐡𝐨𝐤𝐨',
      '𝐊𝐮𝐫𝐮𝐦𝐢', '𝐌𝐢𝐭𝐬𝐮𝐫𝐢'*/
    ]
    let buttonDesc = [/*`🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yaka MD`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Benimaru Shinmon`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Power`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hinata Hyuuga`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Obito Uchiha`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mikasa Ackerman`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Emilia`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ayane Shirakawa`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Yotsuba`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mai Sakurajima`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Tohru Kobayashi`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Marin Kitagawa`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Rem`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Makima`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Nezuko Kamado`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Ochaco Uraraka`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Aqua`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Fubuki`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Gojo Satoru`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Hayase Nagatoro`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Itachi Uchiha`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Shoko Komi`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Kurumi Tokisaki`,
      `🔥 𝘾𝙝𝙖𝙣𝙜𝙚 𝘽𝙤𝙩 𝘾𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧 𝙩𝙤 Mitsuri Kanroji`
    */]
    let buttonTexts = [/*`${prefix}setchar 0`,
    `${prefix}setchar 1`,
    `${prefix}setchar 2`,
    `${prefix}setchar 3`,
    `${prefix}setchar 4`,
    `${prefix}setchar 5`,
    `${prefix}setchar 6`,
    `${prefix}setchar 7`,
    `${prefix}setchar 8`,
    `${prefix}setchar 9`,
    `${prefix}setchar 10`,
    `${prefix}setchar 11`,
    `${prefix}setchar 12`,
    `${prefix}setchar 13`,
    `${prefix}setchar 14`,
    `${prefix}setchar 15`,
    `${prefix}setchar 16`,
    `${prefix}setchar 17`,
    `${prefix}setchar 18`,
    `${prefix}setchar 19`,
    `${prefix}setchar 20`,
    `${prefix}setchar 21`,
    `${prefix}setchar 22`,
    `${prefix}setchar 23`*/
    ]

    /*for (let i = 0; i < chars.length; i++) {
      const list = {
        title: `${prefix}setchar ${i}`,
        rows: [

          {
            title: `${chars[i]}`,
            rowId: `${buttonTexts[i]}`,
            description: `${buttonDesc[i]}`
          }
        ]
      }
      sections.push(list)
    }*/


    /*let buttonMessage = {
      image: { url: botImage2 },
      text: txt,
      footer: `*${botName}*`,
      //buttonText: "Change Character",
      //sections,
    };*/

    await Yaka.sendMessage(m.from, {
        video:{ url: 'https://media.tenor.com/jWRFHjiNdkgAAAPo/anime-dance.mp4' },
        caption:txt, 
        gifPlayback: true
    },
        {quoted:m})
  },
};
