"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlashCommand_1 = require("../../../interfaces/SlashCommand");
const discord_modals_1 = require("discord-modals");
exports.default = new SlashCommand_1.SlashCommandStructure({
    name: "sugerencias",
    description: "Has una sugerencia para el servidor.",
    run: async ({ Pingui, interaction }) => {
        let ModalSay = new discord_modals_1.Modal()
            .setCustomId("suggestModal")
            .setTitle("¿Que sugerencia deseas aportar al servidor?")
            .addComponents(new discord_modals_1.TextInputComponent()
            .setCustomId("suggestInput")
            .setLabel("Sugerencia:")
            .setRequired(true)
            .setPlaceholder("Añadir a un bot.")
            .setMinLength(1)
            .setStyle("LONG"));
        await (0, discord_modals_1.showModal)(ModalSay, {
            client: Pingui,
            interaction: interaction,
        });
    },
});
