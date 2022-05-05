import { MessageEmbed } from "discord.js";
import { Command } from "../../../interfaces";
import { Ping } from "../../../Data/Emojis.json";
import mongoose from "mongoose";
export const command: Command = {
  name: "ping",
  aliases: ["latency"],
  description: "Muestra el ping de Pingui-san.",
  cooldown: {
    name: "PingCooldown_",
    time: "10s",
  },
  onlyOwner: false,
  maintenance: false,
  run: async (Pingui, message, args) => {
    let EmojiPing1 = Ping.Ping1;
    let EmojiPing2 = Ping.Ping2;
    let EmojiPing3 = Ping.Ping3;
    let EmojiPing4 = Ping.Ping4;
    let EmojiPing5 = Ping.Ping5;
    let PingRespuesta = Date.now() - message.createdTimestamp;
    let PingApi = Pingui.ws.ping;
    let PreDate = Date.now();
    let PingMongoDB = await new Promise((r, j): void => {
      mongoose.connection.db
        .admin()
        .ping((err, result): void =>
          err || !result ? j(err || result) : r(Date.now() - PreDate)
        );
    });
    let PingEmojiFinal1;
    let PingEmojiFinal2;
    let PingEmojiFinal3;
    let Color;
    if (PingRespuesta <= 60) {
      PingEmojiFinal1 = EmojiPing5;
    } else if (PingRespuesta >= 61 && PingRespuesta <= 100) {
      PingEmojiFinal1 = EmojiPing4;
    } else if (PingRespuesta >= 101 && PingRespuesta <= 150) {
      PingEmojiFinal1 = EmojiPing3;
    } else if (PingRespuesta >= 151 && PingRespuesta <= 200) {
      PingEmojiFinal1 = EmojiPing2;
    } else if (PingRespuesta >= 201) {
      PingEmojiFinal1 = EmojiPing1;
    }
    if (PingApi <= 60) {
      PingEmojiFinal2 = EmojiPing5;
      Color = "0x2BFF00";
    } else if (PingApi >= 61 && PingApi <= 100) {
      PingEmojiFinal2 = EmojiPing4;
      Color = "0xFFF300";
    } else if (PingApi >= 101 && PingApi <= 150) {
      PingEmojiFinal2 = EmojiPing3;
      Color = "0xFF9B00";
    } else if (PingApi >= 151 && PingApi <= 200) {
      PingEmojiFinal2 = EmojiPing2;
      Color = "0xFF0000";
    } else if (PingApi >= 201) {
      PingEmojiFinal2 = EmojiPing1;
      Color = "0x930000";
    }
    if (PingMongoDB <= 60) {
      PingEmojiFinal3 = EmojiPing5;
    } else if (PingMongoDB >= 61 && PingMongoDB <= 100) {
      PingEmojiFinal3 = EmojiPing4;
    } else if (PingMongoDB >= 101 && PingMongoDB <= 150) {
      PingEmojiFinal3 = EmojiPing3;
    } else if (PingMongoDB >= 151 && PingMongoDB <= 200) {
      PingEmojiFinal3 = EmojiPing2;
    } else if (PingMongoDB >= 201) {
      PingEmojiFinal3 = EmojiPing1;
    }
    message.reply({
      embeds: [
        new MessageEmbed()
          .setTitle("¡Ping de Pingui!")
          .addFields(
            {
              name: `\`Ping de Respuesta:\``,
              value: `> ¡**__${PingRespuesta}__** ms! ${PingEmojiFinal1}`,
              inline: false,
            },
            {
              name: `\`Ping de la API:\``,
              value: `> ¡**__${PingApi}__** ms! ${PingEmojiFinal2}`,
              inline: false,
            },
            {
              name: `\`Ping de MongoDB:\``,
              value: `> ¡**__${PingMongoDB}__** ms! ${PingEmojiFinal3}`,
              inline: false,
            },
            {
              name: `\`Ram usada:\``,
              value: `> **__${(
                process.memoryUsage().heapUsed /
                1024 /
                1024
              ).toFixed(2)}__** MB`,
              inline: false,
            }
          )
          .setFooter({
            text: `Comando hecho por ${message.author.tag}`,
            iconURL: message.author.displayAvatarURL({
              dynamic: true,
            }),
          })
          .setColor(Color)
          .setTimestamp(),
      ],
    });
  },
};
