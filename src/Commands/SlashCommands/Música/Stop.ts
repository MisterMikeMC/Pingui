import { SlashCommandStructure } from "../../../interfaces/SlashCommand";
import { Util } from "../../../Data/Emojis.json";
import { Stop } from "../../../Functions";
import { Queue } from "distube";
export default new SlashCommandStructure({
  name: "stop",
  description: "Deten la lista de reproducción.",
  run: async ({ Pingui, interaction }): Promise<void> => {
    await interaction.deferReply();
    let Queue = Pingui.distube.getQueue(interaction) as Queue;
    let response = Stop(Queue);
    if (response === "Error1") {
      interaction.editReply(`${Util.No} | No hay ninguna canción en la cola.`);
    } else if (response === "Stopped") {
      interaction.editReply(`${Util.Yes} | Deteniendo la canción.`);
    }
  },
});
