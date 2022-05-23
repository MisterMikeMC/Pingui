import { Event } from "../interfaces";
import { Util } from "../Data/Emojis.json";
import { ModalSubmitInteraction } from "discord-modals";
import { MessageEmbed, TextBasedChannel } from "discord.js";
export const event: Event = {
  name: "modalSubmit",
  run: async (
    Pingui,
    interactionModal: ModalSubmitInteraction
  ): Promise<void> => {
    if (interactionModal.customId === "sayModal") {
      const sayInput = interactionModal.getTextInputValue("sayInput");
      interactionModal.reply({
        content: `${sayInput}`,
      });
    } else if (interactionModal.customId === "suggestModal") {
      const suggestInput = interactionModal.getTextInputValue("suggestInput");
      await interactionModal.deferReply({ ephemeral: true });
      await interactionModal.followUp({
        content: `${Util.Yes} | Sugerencia enviada con éxito.`,
      });
      (Pingui.channels.resolve("933368144049889331") as TextBasedChannel)
        .send({
          embeds: [
            new MessageEmbed()
              .setAuthor({
                name: `${interactionModal.user.tag}`,
                iconURL: interactionModal.user.displayAvatarURL({
                  dynamic: true,
                }),
              })
              .setTitle("Sugerencia:")
              .setDescription(`> *${suggestInput}*`)
              .setColor("RANDOM")
              .setFooter({
                text: `Powered by ${
                  Pingui.users.resolve("437308398845952001").tag
                }`,
                iconURL: Pingui.users
                  .resolve("437308398845952001")
                  .displayAvatarURL({
                    dynamic: true,
                  }),
              })
              .setTimestamp(),
          ],
        })
        .then((msg): void => {
          msg.react(`${Util.Yes}`);
          msg.react(`${Util.No}`);
        });
    }
  },
};
