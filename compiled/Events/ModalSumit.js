"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const Emojis_json_1 = require("../Data/Emojis.json");
const discord_js_1 = require("discord.js");
exports.event = {
    name: "modalSubmit",
    run: async (Pingui, interactionModal) => {
        if (interactionModal.customId === "sayModal") {
            const sayInput = interactionModal.getTextInputValue("sayInput");
            interactionModal.reply({
                content: `${sayInput}`,
            });
        }
        else if (interactionModal.customId === "suggestModal") {
            const suggestInput = interactionModal.getTextInputValue("suggestInput");
            await interactionModal.deferReply({ ephemeral: true });
            await interactionModal.followUp({
                content: `${Emojis_json_1.Util.Yes} | Sugerencia enviada con éxito.`,
            });
            Pingui.channels.resolve("933368144049889331")
                .send({
                embeds: [
                    new discord_js_1.MessageEmbed()
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
                        text: `Powered by ${Pingui.users.resolve("437308398845952001").tag}`,
                        iconURL: Pingui.users
                            .resolve("437308398845952001")
                            .displayAvatarURL({
                            dynamic: true,
                        }),
                    })
                        .setTimestamp(),
                ],
            })
                .then((msg) => {
                msg.react(`${Emojis_json_1.Util.Yes}`);
                msg.react(`${Emojis_json_1.Util.No}`);
            });
        }
    },
};
