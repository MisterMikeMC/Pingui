"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlashCommand_1 = require("../../../interfaces/SlashCommand");
const Emojis_json_1 = require("../../../Data/Emojis.json");
const Functions_1 = require("../../../Functions");
exports.default = new SlashCommand_1.SlashCommandStructure({
    name: "stop",
    description: "Deten la lista de reproducción.",
    run: async ({ Pingui, interaction }) => {
        await interaction.deferReply();
        let Queue = Pingui.distube.getQueue(interaction);
        let response = (0, Functions_1.Stop)(Queue);
        if (response === "Error1") {
            interaction.editReply(`${Emojis_json_1.Util.No} | No hay ninguna canción en la cola.`);
        }
        else if (response === "Stopped") {
            interaction.editReply(`${Emojis_json_1.Util.Yes} | Deteniendo la canción.`);
        }
    },
});
