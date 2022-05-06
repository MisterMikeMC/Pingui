import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Modal, showModal, TextInputComponent } from 'discord-modals'
export default new SlashCommandStructure({
  name: "say",
  description: "Repito lo que me digas.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    let ModalSay = new Modal()
    .setCustomId("sayModal")
    .setTitle("Que quieres que diga?")
    .addComponents(
      new TextInputComponent()
        .setCustomId("sayInput")
        .setLabel("Mensaje")
        .setRequired(true)
        .setPlaceholder("Hola.")
        .setMinLength(1)
        .setStyle("LONG"),
    );
  showModal(ModalSay, {
    client: Pingui,
    interaction: interaction,
  });
  },
});
