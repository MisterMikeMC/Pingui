import { MessageEmbed } from "discord.js";
import { Queue, Song } from "distube";
import { Util } from "../Data/Emojis.json";
import { EventDistube } from "../interfaces";
export const distubeevent: EventDistube = {
  name: "finish",
  run: (_Pingui, queue: Queue, _song: Song): void => {
    queue.textChannel.send({
      embeds: [
        new MessageEmbed()
          .setTitle("¡Lista de reproducción finalizada!")
          .setDescription(
            `${Util.Yes} | Se finalizó la lista de reproducción!.`
          )
          .setColor("#009900"),
      ],
    });
  },
};
