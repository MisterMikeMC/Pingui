"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const SlashCommand_1 = require("../../../interfaces/SlashCommand");
const Emojis_json_1 = require("../../../Data/Emojis.json");
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = new SlashCommand_1.SlashCommandStructure({
    name: "información",
    description: "Sub SlashCommands de Información.",
    options: [
        {
            name: "ping",
            description: "Muestra el ping de Pingui.",
            type: "SUB_COMMAND",
        },
    ],
    run: async ({ Pingui, interaction }) => {
        if (interaction.options.getSubcommand() === "ping") {
            let EmojiPing1 = Emojis_json_1.Ping.Ping1;
            let EmojiPing2 = Emojis_json_1.Ping.Ping2;
            let EmojiPing3 = Emojis_json_1.Ping.Ping3;
            let EmojiPing4 = Emojis_json_1.Ping.Ping4;
            let EmojiPing5 = Emojis_json_1.Ping.Ping5;
            let PingEmojiFinal1;
            let PingEmojiFinal2;
            let PingEmojiFinal3;
            let PingResponse = Date.now() - interaction.createdTimestamp;
            let PingApi = Pingui.ws.ping;
            let PreDate = Date.now();
            let PingMongoDB = await new Promise((r, j) => {
                mongoose_1.default.connection.db
                    .admin()
                    .ping((err, result) => err || !result ? j(err || result) : r(Date.now() - PreDate));
            });
            let Color;
            if (PingResponse <= 60) {
                PingEmojiFinal1 = EmojiPing5;
            }
            else if (PingResponse >= 61 && PingResponse <= 100) {
                PingEmojiFinal1 = EmojiPing4;
            }
            else if (PingResponse >= 101 && PingResponse <= 150) {
                PingEmojiFinal1 = EmojiPing3;
            }
            else if (PingResponse >= 151 && PingResponse <= 200) {
                PingEmojiFinal1 = EmojiPing2;
            }
            else if (PingResponse >= 201) {
                PingEmojiFinal1 = EmojiPing1;
            }
            else if (PingResponse < 0) {
                PingEmojiFinal1 = EmojiPing1;
            }
            if (PingMongoDB <= 60) {
                PingEmojiFinal3 = EmojiPing5;
            }
            else if (PingMongoDB >= 61 && PingMongoDB <= 100) {
                PingEmojiFinal3 = EmojiPing4;
            }
            else if (PingMongoDB >= 101 && PingMongoDB <= 150) {
                PingEmojiFinal3 = EmojiPing3;
            }
            else if (PingMongoDB >= 151 && PingMongoDB <= 200) {
                PingEmojiFinal3 = EmojiPing2;
            }
            else if (PingMongoDB >= 201) {
                PingEmojiFinal3 = EmojiPing1;
            }
            if (PingApi <= 60) {
                PingEmojiFinal2 = EmojiPing5;
                Color = "#2BFF00";
            }
            else if (PingApi >= 61 && PingApi <= 100) {
                PingEmojiFinal2 = EmojiPing4;
                Color = "#FFF300";
            }
            else if (PingApi >= 101 && PingApi <= 150) {
                PingEmojiFinal2 = EmojiPing3;
                Color = "#FF9B00";
            }
            else if (PingApi >= 151 && PingApi <= 200) {
                PingEmojiFinal2 = EmojiPing2;
                Color = "0xFF0000";
            }
            else if (PingApi >= 201) {
                PingEmojiFinal2 = EmojiPing1;
                Color = "#930000";
            }
            else if (PingResponse < 0) {
                PingEmojiFinal2 = EmojiPing1;
                Color = "#930000";
            }
            interaction.reply({
                embeds: [
                    new discord_js_1.MessageEmbed()
                        .setTitle("¡Ping de Pingui!")
                        .addFields({
                        name: `${Emojis_json_1.Util.WindL} \`Ping de Respuesta:\` ${Emojis_json_1.Util.WindR}`,
                        value: `> ¡**__${PingResponse}__** ms! ${PingEmojiFinal1}`,
                        inline: false,
                    }, {
                        name: `${Emojis_json_1.Util.WindL} \`Ping de la API:\` ${Emojis_json_1.Util.WindR}`,
                        value: `> ¡**__${PingApi}__** ms! ${PingEmojiFinal2}`,
                        inline: false,
                    }, {
                        name: `${Emojis_json_1.Util.WindL} \`Ping de MongoDB:\` ${Emojis_json_1.Util.WindR}`,
                        value: `> ¡**__${PingMongoDB}__** ms! ${PingEmojiFinal3}`,
                        inline: false,
                    }, {
                        name: `${Emojis_json_1.Util.WindL} Ram usada: ${Emojis_json_1.Util.WindR}`,
                        value: `> **__${(process.memoryUsage().heapUsed /
                            1024 /
                            1024).toFixed(2)}__** MB`,
                        inline: false,
                    })
                        .setFooter({
                        text: `Comando hecho por ${interaction.user.tag}`,
                        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
                    })
                        .setColor(Color)
                        .setTimestamp(),
                ],
            });
        }
    },
});
