import { Event } from "../interfaces";
import { Util } from "../Data/Emojis.json";
import { Play } from "../Functions";
import { ModalSubmitInteraction } from "discord-modals";
import { Interaction } from "discord.js";
export const event: Event = {
  name: "modalSubmit",
  run: (Pingui, interactionModal: ModalSubmitInteraction): void => {
    if (interactionModal.customId === "sayModal") {
      const sayInput = interactionModal.getTextInputValue("sayInput");
      interactionModal.reply({
        content: `${sayInput}`,
      });
    } else if (interactionModal.customId === "playMusicModal") {
      const Song = interactionModal.getTextInputValue("songInput");
      let Response = Play(Pingui, interactionModal as Interaction, Song);
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
    }
  },
};
