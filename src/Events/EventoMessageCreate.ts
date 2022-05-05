import { Event, Command } from "../interfaces";
import { Message } from "discord.js";
export const event: Event = {
  name: "messageCreate",
  run: async (Pingui, message: Message): Promise<Message<boolean>> => {
    /* Declaraciones */
    let Prefix = "p!";
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
