import Client from "../Client";
import { ClientEvents } from "discord.js";
interface Run {
  (Pingui: Client, ...args: any[]);
}

export interface Event {
  name: keyof ClientEvents | "modalSubmit";
  run: Run;
}
