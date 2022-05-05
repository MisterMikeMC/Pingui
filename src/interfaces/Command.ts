import Client from "../Client";
import { Message } from "discord.js";

interface Run {
  (Pingui: Client, message: Message, args: string[]);
}

export interface Command {
  name: string;
  aliases: string[];
  description: string;
  cooldown: {
    name: string;
    time: string;
  };
  onlyOwner: boolean;
  maintenance: boolean;
  run: Run;
}
