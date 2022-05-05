import { CommandInteractionOptionResolver, Interaction } from "discord.js";
import { Event } from "../interfaces";
import { ExtendedInteraction } from "../interfaces/SlashCommandsInterface";
export const event: Event = {
  name: "interactionCreate",
  run: async (Pingui, interaction: Interaction): Promise<void> => {
    if (interaction.isCommand()) {
      const SlashCommand = Pingui.slashcommands.get(interaction.commandName);
      if (SlashCommand) {
        SlashCommand.run({
          args: interaction.options as CommandInteractionOptionResolver,
          Pingui,
          interaction: interaction as ExtendedInteraction,
        });
      } else {
        console.log(`Command ${interaction.commandName} not found.`);
      }
    }
  },
};
