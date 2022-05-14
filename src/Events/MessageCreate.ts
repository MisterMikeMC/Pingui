import { Event, Command } from "../interfaces";
import { Message } from "discord.js";
export const event: Event = {
  name: "messageCreate",
  run: async (Pingui, message: Message): Promise<void> => {
    /* Declaraciones */
    let Prefix = "p!";
    /* Auto respuestas */
    if (!message.author.bot && message.guild) {
      if (
        (message.content.startsWith("wlc") ||
          message.content.startsWith("welcome")) &&
        message.author.id === "437308398845952001"
      ) {
        let mention = message.mentions.users.first();
        message
          .reply({
            content: `Demosle la bienvenida a ${
              mention ? mention : "Usuario"
            } al servidor!`,
            allowedMentions: {
              repliedUser: true,
            },
          })
          .then((msg): void => {
            message.delete();
            msg.react("<a:DripWelcome1:948564660649590815>");
            msg.react("<a:DripWelcome2:948564721018224741>");
            msg.react("<:kannaloves:966521484455596052>");
          });
      }
    }
    /* Command Handler */
    if (
      !message.author.bot &&
      message.guild &&
      message.content.startsWith(Prefix)
    ) {
      const args: string[] = message.content
        .slice(Prefix.length)
        .trim()
        .split(/ +/g);
      const Command: string = args.shift().toLowerCase();
      let ExecuteCommand: Command =
        Pingui.commands.get(Command) || Pingui.aliases.get(Command);
      if (ExecuteCommand) {
        (ExecuteCommand as Command).run(Pingui, message, args);
      }
    }
  },
};
