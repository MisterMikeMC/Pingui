import { Event } from "../interfaces";
import { Util } from "../Data/Emojis.json";
import { Play } from "../Functions";
export const event: Event = {
  name: "modalSubmit",
  run: async (Pingui, interactionModal): Promise<void> => {
    if (interactionModal.customId === "sayModal") {
      const sayInput = interactionModal.getTextInputValue("sayInput");
      interactionModal.reply(`${sayInput}`);
    } else if (interactionModal.customId === "playMusicModal") {
      const Song = interactionModal.getTextInputValue("songInput");
      let Response = await Play(Pingui, interactionModal, Song);
      if (Response === "Error1") {
        interactionModal.reply(`${Util.No} | Hubo un error inesperado.`);
      }
      if (Response === "Error2") {
        interactionModal.reply(
          `${Util.No} | Debes de estar en un canal de voz.`
        );
      }
      if (Response === "Error3") {
        interactionModal.reply(
          `${Util.No} | Debes de estár en el mismo canal que yo.`
        );
      }
      if (Response === "Serching") {
        interactionModal.reply(`🔎 | Añadiendo...`);
      }
      setTimeout((): void => {
        interactionModal.deleteReply();
      }, 5000);
    }
  },
};
