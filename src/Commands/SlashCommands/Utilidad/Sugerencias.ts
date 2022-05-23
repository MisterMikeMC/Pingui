import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Modal, TextInputComponent, showModal } from "discord-modals";
export default new SlashCommandStructure({
  name: "sugerencias",
  description: "Has una sugerencia para el servidor.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    let ModalSay = new Modal()
      .setCustomId("suggestModal")
      .setTitle("¿Que sugerencia deseas aportar al servidor?")
      .addComponents(
        new TextInputComponent()
          .setCustomId("suggestInput")
          .setLabel("Sugerencia:")
          .setRequired(true)
          .setPlaceholder("Añadir a un bot.")
          .setMinLength(1)
          .setStyle("LONG")
      );
    await showModal(ModalSay, {
      client: Pingui,
      interaction: interaction,
    });
  },
});
