import { MessageEmbed } from "discord.js";
import { Queue, Song } from "distube";
import { EventDistube } from "../interfaces";
import { Util } from "../Data/Emojis.json";
import Pingui from "../Client";
export const distubeevent: EventDistube = {
  name: "addSong",
  run: (Pingui, queue: Queue, song: Song): void => {
    queue.textChannel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("Añadida a la Queue.")
          .setDescription(
            `${Util.Yes} | Se añadio a la lista de reproducción: **${song.name}** - \`${song.formattedDuration}\``
          )
          .setColor("#009900"),
      ],
    });
  },
};
