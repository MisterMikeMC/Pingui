import { EventDistube } from "../interfaces";
export const distubeevent: EventDistube = {
  name: "error",
  run: (_Pingui, _channel, _error): void => null,
};

/*
{
  channel.send({
    embeds: [
      new MessageEmbed()
        .setTitle("¡Error!")
        .setDescription(`${Util.No} | ${error}`)
        .setColor("#ff0000"),
    ],
  });
}
*/
