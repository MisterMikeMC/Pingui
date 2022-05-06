import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Modal, TextInputComponent, showModal } from "discord-modals";
export default new SlashCommandStructure({
  name: "tts",
  description: "Envia un mensaje de texto en voz.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    let ModalSay = new Modal()
      .setCustomId("ttsModal")
      .setTitle("Que quieres que diga?")
      .addComponents(
        new TextInputComponent()
          .setCustomId("ttsInput")
          .setLabel("Mensaje")
          .setRequired(true)
          .setPlaceholder("Hola.")
          .setMinLength(1)
          .setStyle("SHORT")
      );
    showModal(ModalSay, {
      client: Pingui,
      interaction: interaction,
    });
  },
});
