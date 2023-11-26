const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log(' ✅ Conectado exitosamente con WhatsApp! ✅');
});

const fs = require('fs');

//MENU

// Comando para enviar una imagen con pie de imagen como menú
client.on('message', async (message) => {
    if (message.body === '.menu') {
        const chat = await message.getChat();

        try {
            const media = MessageMedia.fromFilePath('menu.jpg'); 
            const caption = '╭┈⊰𝑴𝑫 | 𝑭𝑺𝑶𝑪𝑰𝑬𝑻𝒀 - 𝑩𝑶𝑻「🤖」⊰✦\n┊✨𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇𝙀𝙎:✨\n┊\n┊➣.𝙢𝙚𝙣𝙪\n┊✨(𝙋𝘼𝙍𝘼 𝙈𝙊𝙎𝙏𝙍𝘼𝙍 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙐 𝙓𝘿)✨\n┊\n┊➣.𝙞𝙣𝙛𝙤𝙗𝙤𝙩\n┊✨(𝙋𝘼𝙍𝘼 𝙈𝙊𝙎𝙏𝙍𝘼𝙍 𝙇𝘼 𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏)✨\n┊\n┊➣.𝙥𝙞𝙣𝙜\n┊✨(𝙍𝙀𝘾𝙊𝙉𝙀𝘾𝙏𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏)✨\n┊\n┊➣.𝙝𝙤𝙧𝙣𝙮𝙢𝙚𝙣𝙪\n┊✨(𝙈𝙐𝙀𝙎𝙏𝙍𝘼 𝙀𝙇 𝙈𝙀𝙉𝙐 𝙃𝙊𝙍𝙉𝙔)✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦\n╭┈⊰✨𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊𝙎✨\n┊\n┊➣.𝙧𝙚𝙫𝙞𝙫𝙞𝙧\n┊✨(𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝘼𝙍 𝘼 𝙏𝙊𝘿𝙊 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊)✨\n┊\n┊➣.𝙬𝙚𝙡𝙘𝙤𝙢𝙚\n┊✨(𝘿𝘼 𝙐𝙉𝘼 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝘼 𝘼 𝙇𝙊𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊)✨\n┊\n┊➣.𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠\n┊✨(𝘼𝘾𝙏𝙄𝙑𝘼 𝙀𝙇 𝘿𝙀𝙏𝙀𝘾𝙏𝙊𝙍 𝘿𝙀 𝙀𝙉𝙇𝘼𝘾𝙀𝙎)✨\n┊\n┊➣.𝙖𝙙𝙙\n┊✨(𝘼𝙉̃𝘼𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊)✨\n┊\n┊➣.𝙠𝙞𝙘𝙠\n┊✨(𝙀𝘾𝙃𝘼 𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼)✨\n┊\n┊➣.𝙤𝙥𝙚𝙣\n┊✨(𝘼𝘽𝙍𝙀 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙋𝘼𝙍𝘼 𝙏𝙊𝘿𝙊 𝙀𝙇 𝙈𝙐𝙉𝘿𝙊)✨\n┊\n┊➣.𝙘𝙡𝙤𝙨𝙚\n┊✨(𝘾𝙄𝙀𝙍𝙍𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙋𝘼𝙍𝘼 𝘼𝘿𝙈𝙄𝙉𝙎)✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦\n╭┈⊰✨𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎✨\n┊\n┊➣.𝙨𝙩𝙞𝙘𝙠𝙚𝙧 [𝙄𝙈𝘼𝙂𝙀𝙉 𝘼𝘿𝙅𝙐𝙉𝙏𝘼]\n┊✨(𝘾𝙊𝙉𝙑𝙄𝙀𝙍𝙏𝙀 𝙏𝙐 𝙄𝙈𝘼𝙂𝙀𝙉 𝙀𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍)✨\n┊\n┊➣.𝙥𝙣𝙜\n┊✨(𝘾𝙊𝙉𝙑𝙄𝙀𝙍𝙏𝙀 𝙏𝙐 𝙄𝙈𝘼𝙂𝙀𝙉 𝙀𝙉 𝙋𝙉𝙂)✨\n┊\n┊➣.𝙟𝙥𝙜\n┊✨(𝘾𝙊𝙉𝙑𝙄𝙀𝙍𝙏𝙀 𝙏𝙐 𝙄𝙈𝘼𝙂𝙀𝙉 𝙀𝙉 𝙅𝙋𝙂)✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦\n╭┈⊰✨𝙎𝙄𝙎𝙏𝙀𝙈𝘼 𝙍𝙋𝙂✨\n┊\n┊➣.𝙢𝙖𝙧𝙠𝙚𝙩𝙥𝙡𝙖𝙘𝙚\n┊✨(𝙏𝙄𝙀𝙉𝘿𝘼 𝘿𝙀 𝙊𝘽𝙅𝙀𝙏𝙊𝙎)✨\n┊\n┊➣.𝙫𝙚𝙣𝙙𝙚𝙧 (𝙣𝙖𝙢𝙚 𝙙𝙚𝙡 𝙤𝙗𝙟𝙚𝙩𝙤)\n┊✨(𝙑𝙀𝙉𝘿𝙀𝙍 𝙊𝘽𝙅𝙀𝙏𝙊)✨\n┊\n┊➣.𝙘𝙤𝙢𝙥𝙧𝙖𝙧 (𝙣𝙖𝙢𝙚 𝙙𝙚𝙡 𝙤𝙗𝙟𝙚𝙩𝙤)\n┊✨(𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙊𝘽𝙅𝙀𝙏𝙊𝙎)✨\n┊\n┊➣.𝙬𝙤𝙧𝙠\n┊✨(𝙏𝙍𝘼𝘽𝘼𝙅𝘼 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙎𝙀𝙂𝙐𝙄𝙍 𝙊𝙍𝙊 𝙋𝙊𝘽𝙍𝙀)✨\n┊\n┊➣.𝙙𝙖𝙞𝙡𝙮\n┊✨(𝙊𝘽𝙏𝙀𝙉 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝘿𝙄𝘼𝙍𝙄𝘼)✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦\n╔══════════════\n║ 𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n║https://chat.whatsapp.com/EgUMQvA4ooK1dNZIUGIGDS\n╚══════════════\n╔══════════════\n║ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝘾\n║https://chat.whatsapp.com/Jy6QQCrbIvrE4mEqc5MzdL\n╚══════════════\n©️𝐅𝐒𝐎𝐂𝐈𝐄𝐓𝐘.𝐁𝐎𝐓 𝐃𝐄𝐑𝐄𝐂𝐇𝐎𝐒 𝐑𝐄𝐒𝐄𝐑𝐕𝐀𝐃𝐎𝐒';
            await chat.sendMessage(media, { caption });
        } catch (error) {
            message.reply(`Error al enviar el menú: ${error.message}`);
        }
    }
});

// ...


//ADD
// Comando para añadir un participante al grupo



// Comando para expulsar a un participante del grupo


//BIENVENIDA
client.on('group_join', async (notification) => {
	const chat = await notification.getChat();
	const newMember = notification.who;
    const media = MessageMedia.fromFilePath('menu.jpg'); 
    const caption = '╭┈⊰𝑴𝑫 | 𝑭𝑺𝑶𝑪𝑰𝑬𝑻𝒀 - 𝑩𝑶𝑻「🤖」⊰┈ ✦ \n┊ \n┊➣ 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 @${newMember.id.user} \n┊𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝘼 𝙇𝙀𝙀𝙍 𝙇𝘼𝙎 𝙉𝙊𝙍𝙈𝘼𝙎 \n┊𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 \n┊ \n┊➣ 𝙋𝙐𝙀𝘿𝙀𝙎 𝙐𝙎𝘼𝙍 .𝙢𝙚𝙣𝙪 \n┊𝙋𝘼𝙍𝘼 𝙑𝙀𝙍 𝙀𝙇 𝙈𝙀𝙉𝙐 \n┊𝘿𝙀𝙇 𝘽𝙊𝙏 \n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦ \n╭┈⊰ ✨𝙇𝙄𝙉𝙆𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎✨ ⊰┈ ✦ \n┊ \n┊➣ 𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇: \n┊✨https://chat.whatsapp.com/EgUMQvA4ooK1dNZIUGIGDS✨ \n┊ \n┊ \n┊➣ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝘾: \n┊✨https://chat.whatsapp.com/Jy6QQCrbIvrE4mEqc5MzdL✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦';
    const userMention = '@${newMember}';
	chat.sendMessage(media, { caption });
  });

//SALIDA
client.on('group_leave', async (notification) => {
    const chat = await notification.getChat();
    const leftMember = notification.who;
    const media = MessageMedia.fromFilePath('menu.jpg'); 

    const farewellMessage = '¡Adiós ${leftMember.id.user}';

    chat.sendMessage(media, farewellMessage);
});





client.on('message', async (message) => {
    if (message.body === '.ping') {
        const chat = await message.getChat();

        try {
            const media = MessageMedia.fromFilePath('menu.jpg'); 
            const caption = '╭┈⊰𝑴𝑫 | 𝑭𝑺𝑶𝑪𝑰𝑬𝑻𝒀 - 𝑩𝑶𝑻「🤖」⊰┈ ✦\n┊\n┊\n┊➣✨𝘽𝙊𝙏 𝘾𝙊𝙉𝙀𝘾𝙏𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊✨\n┊\n┊➣ 𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇:\n┊✨https://chat.whatsapp.com/EgUMQvA4ooK1dNZIUGIGDS✨\n┊\n┊n┊➣ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝘾:\n┊✨https://chat.whatsapp.com/Jy6QQCrbIvrE4mEqc5MzdL✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦';
            await chat.sendMessage(media, { caption });
        } catch (error) {
            message.reply(`Error al enviar el menú: ${error.message}`);
        }
    }
});




client.on('message', message => {
	if(message.body === '.infobot') {
		message.reply('╭┈⊰𝑴𝑫 | 𝑭𝑺𝑶𝑪𝑰𝑬𝑻𝒀 - 𝑩𝑶𝑻「🤖」⊰┈ ✦\n┊\n┊\n┊➣✨𝘽𝙊𝙏 𝘾𝙊𝙉𝙀𝘾𝙏𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊✨\n┊\n┊➣ 𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇:\n┊✨https://chat.whatsapp.com/EgUMQvA4ooK1dNZIUGIGDS✨\n┊\n┊n┊➣ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝘾:\n┊✨https://chat.whatsapp.com/Jy6QQCrbIvrE4mEqc5MzdL✨\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦');
	}
});





// .REVIVIR
// Mention everyone
// Mention everyone
client.on('message', async (msg) => {
    if(msg.body === '!everyone') {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
});







client.initialize();