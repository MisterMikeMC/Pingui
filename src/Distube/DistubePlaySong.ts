import { MessageEmbed } from "discord.js";
import { Queue, Song } from "distube";
import { EventDistube } from "../interfaces";
import { Music } from "../Data/Emojis.json";
export const distubeevent: EventDistube = {
  name: "playSong",
  run: (_Pingui, queue: Queue, song: Song): void => {
    queue.textChannel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("¡Reproduciendo!")
          .setDescription(
            `${Music.Playing} | Reproduciendo ahora: **${song.name}** - \`${song.formattedDuration}\``
          )
          .setColor("#5500ff"),
      ],
    });
  },
};
