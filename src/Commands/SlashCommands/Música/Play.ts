import { Modal, TextInputComponent, showModal } from "discord-modals";
import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
export default new SlashCommandStructure({
  name: "play",
  description: "Reproduce una canción.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    let ModalPlaySong = new Modal()
      .setCustomId("playMusicModal")
      .setTitle("Canción a reproducir.")
      .addComponents(
        new TextInputComponent()
          .setCustomId("songInput")
          .setLabel("Canción:")
          .setRequired(true)
          .setPlaceholder("Canción a reproducir.")
          .setStyle("SHORT")
      );
    showModal(ModalPlaySong, {
      client: Pingui,
      interaction: interaction,
    });
  },
});
