import { MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Ping, Util } from "../../../Data/Emojis.json";
import mongoose from "mongoose";
export default new SlashCommandStructure({
  name: "información",
  description: "Sub SlashCommands de Información.",
  options: [
    {
      name: "ping",
      description: "Muestra el ping de Pingui-san.",
      type: "SUB_COMMAND",
    },
  ],
  run: async ({ Pingui, interaction }): Promise<void> => {
    if (interaction.options.getSubcommand() === "ping") {
      let EmojiPing1 = Ping.Ping1;
      let EmojiPing2 = Ping.Ping2;
      let EmojiPing3 = Ping.Ping3;
      let EmojiPing4 = Ping.Ping4;
      let EmojiPing5 = Ping.Ping5;
      let PingEmojiFinal1;
      let PingEmojiFinal2;
      let PingEmojiFinal3;
      let PingResponse = Date.now() - interaction.createdTimestamp;
      let PingApi = Pingui.ws.ping;
      let PreDate = Date.now();
      let PingMongoDB = await new Promise((r, j): void => {
        mongoose.connection.db
          .admin()
          .ping((err, result): void =>
            err || !result ? j(err || result) : r(Date.now() - PreDate)
          );
      });
      let Color;
      if (PingResponse <= 60) {
        PingEmojiFinal1 = EmojiPing5;
      } else if (PingResponse >= 61 && PingResponse <= 100) {
        PingEmojiFinal1 = EmojiPing4;
      } else if (PingResponse >= 101 && PingResponse <= 150) {
        PingEmojiFinal1 = EmojiPing3;
      } else if (PingResponse >= 151 && PingResponse <= 200) {
        PingEmojiFinal1 = EmojiPing2;
      } else if (PingResponse >= 201) {
        PingEmojiFinal1 = EmojiPing1;
      } else if (PingResponse < 0) {
        PingEmojiFinal1 = EmojiPing1;
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
      if (PingApi <= 60) {
        PingEmojiFinal2 = EmojiPing5;
        Color = "#2BFF00";
      } else if (PingApi >= 61 && PingApi <= 100) {
        PingEmojiFinal2 = EmojiPing4;
        Color = "#FFF300";
      } else if (PingApi >= 101 && PingApi <= 150) {
        PingEmojiFinal2 = EmojiPing3;
        Color = "#FF9B00";
      } else if (PingApi >= 151 && PingApi <= 200) {
        PingEmojiFinal2 = EmojiPing2;
        Color = "0xFF0000";
      } else if (PingApi >= 201) {
        PingEmojiFinal2 = EmojiPing1;
        Color = "#930000";
      } else if (PingResponse < 0) {
        PingEmojiFinal2 = EmojiPing1;
        Color = "#930000";
      }
      interaction.reply({
        embeds: [
          new MessageEmbed()
            .setTitle("¡Ping de Pingui!")
            .addFields(
              {
                name: `${Util.WindL} \`Ping de Respuesta:\` ${Util.WindR}`,
                value: `> ¡**__${PingResponse}__** ms! ${PingEmojiFinal1}`,
                inline: false,
              },
              {
                name: `${Util.WindL} \`Ping de la API:\` ${Util.WindR}`,
                value: `> ¡**__${PingApi}__** ms! ${PingEmojiFinal2}`,
                inline: false,
              },
              {
                name: `${Util.WindL} \`Ping de MongoDB:\` ${Util.WindR}`,
                value: `> ¡**__${PingMongoDB}__** ms! ${PingEmojiFinal3}`,
                inline: false,
              },
              {
                name: `${Util.WindL} Ram usada: ${Util.WindR}`,
                value: `> **__${(
                  process.memoryUsage().heapUsed /
                  1024 /
                  1024
                ).toFixed(2)}__** MB`,
                inline: false,
              }
            )
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
