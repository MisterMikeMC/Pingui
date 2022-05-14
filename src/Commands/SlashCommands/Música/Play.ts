import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Modal, TextInputComponent, showModal } from "discord-modals";
export default new SlashCommandStructure({
  name: "play",
  description: "Reproduce una canción.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    let ModalSay = new Modal()
      .setCustomId("playMusicModal")
      .setTitle("Canción a agregar a la queue.")
      .addComponents(
        new TextInputComponent()
          .setCustomId("songInput")
          .setLabel("Canción:")
          .setRequired(true)
          .setPlaceholder("URL o nombre de la canción.")
          .setStyle("SHORT")
      );
      await showModal(ModalSay, {
        client: Pingui,
        interaction: interaction,
      }).catch((): any => null);
  },
});
