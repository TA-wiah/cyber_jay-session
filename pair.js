const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: cyber_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SHADOW_REAPER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_cyber_Tech = cyber_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_cyber_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_cyber_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_cyber_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_cyber_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_cyber_Tech.sendMessage(Pair_Code_By_cyber_Tech.user.id, { text: '' + b64data });

               let SHADOW_REAPER_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃SHADOW-REAPER-MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 🤓 CYBER_JAY 🤓
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VafHRSWDzgTGeS2rGn3c
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?👉 https://t.me/billy 👈
                 🙅🏽‍♂️ https://wa.me/M2BKBKULFC5QP1 🙅🏽‍♂️
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

©*2025-to-date Cyber_Jay*
_________________________________________
_Don't Forget To Give A ⭐Star To My Repo_`
 await Pair_Code_By_cyber_Tech.sendMessage(Pair_Code_By_cyber_Tech.user.id,{text:SHADOW_REAPER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_cyber_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SHADOW_REAPER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SHADOW_REAPER_MD_PAIR_CODE()
});
module.exports = router
