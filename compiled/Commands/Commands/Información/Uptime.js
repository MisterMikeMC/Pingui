"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const Emojis_json_1 = require("../../../Data/Emojis.json");
exports.command = {
    name: "uptime",
    aliases: ["online-time"],
    description: "Revisa cuanto tiempo lleva Pingui en linea.",
    cooldown: {
        name: "UptimeCooldown_",
        time: "10s",
    },
    onlyOwner: false,
    maintenance: false,
    run: async (Komi, message, args) => {
        const Semanas = Math.round(Komi.uptime / 1000 / 60 / 60 / 24 / 7);
        const Dias = Math.round(Komi.uptime / 1000 / 60 / 60 / 24);
        const Horas = Math.round(Komi.uptime / 1000 / 60 / 60);
        const Minutos = Math.round(Komi.uptime / 1000 / 60);
        message.reply({
            embeds: [
                new discord_js_1.MessageEmbed()
                    .setTitle("¡Uptime!")
                    .setDescription(`${Emojis_json_1.Util.Arrow} Llevo en linea: \`${Semanas | 0} W\` \`${Dias | 0} D\` \`${Horas | 0} H\` \`${Minutos | 0} M\`.`)
                    .setColor("#00FCFF"),
            ],
        });
    },
};
