"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlashCommand_1 = require("../../../interfaces/SlashCommand");
const discord_modals_1 = require("discord-modals");
exports.default = new SlashCommand_1.SlashCommandStructure({
    name: "say",
    description: "Repito lo que me digas.",
    run: async ({ Pingui, interaction }) => {
        let ModalSay = new discord_modals_1.Modal()
            .setCustomId("sayModal")
            .setTitle("Que quieres que diga?")
            .addComponents(new discord_modals_1.TextInputComponent()
            .setCustomId("sayInput")
            .setLabel("Mensaje")
            .setRequired(true)
            .setPlaceholder("Hola.")
            .setMinLength(1)
            .setStyle("LONG"));
        await (0, discord_modals_1.showModal)(ModalSay, {
            client: Pingui,
            interaction: interaction,
        });
    },
});
