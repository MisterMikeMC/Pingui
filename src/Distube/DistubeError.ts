import { MessageEmbed } from "discord.js";
import { EventDistube } from "../interfaces";
import { Util } from "../Data/Emojis.json";
export const distubeevent: EventDistube = {
  name: "error",
  run: (Pingui, channel, error): void => {
    channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("¡Error!")
          .setDescription(`${Util.No} | ${error}`)
          .setColor("#ff0000"),
      ],
    });
  },
};
