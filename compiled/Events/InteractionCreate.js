"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
exports.event = {
    name: "interactionCreate",
    run: async (Pingui, interaction) => {
        if (interaction.isCommand()) {
            const SlashCommand = Pingui.slashcommands.get(interaction.commandName);
            if (SlashCommand) {
                SlashCommand.run({
                    args: interaction.options,
                    Pingui,
                    interaction: interaction,
                });
            }
            else {
                console.log(`Command ${interaction.commandName} not found.`);
            }
        }
    },
};
