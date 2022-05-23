"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_modals_1 = require("discord-modals");
const SlashCommand_1 = require("../../../interfaces/SlashCommand");
exports.default = new SlashCommand_1.SlashCommandStructure({
    name: "play",
    description: "Reproduce una canción.",
    run: ({ Pingui, interaction }) => {
        let ModalPlaySong = new discord_modals_1.Modal()
            .setCustomId("playMusicModal")
            .setTitle("Canción a reproducir.")
            .addComponents(new discord_modals_1.TextInputComponent()
            .setCustomId("songInput")
            .setLabel("Canción:")
            .setRequired(true)
            .setPlaceholder("Canción a reproducir.")
            .setStyle("SHORT"));
        (0, discord_modals_1.showModal)(ModalPlaySong, {
            client: Pingui,
            interaction: interaction,
        });
    },
});
