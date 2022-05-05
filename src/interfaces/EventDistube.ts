import Client from "../Client";
import { DisTubeEvents } from "distube";

interface Run {
  (Pingui: Client, ...args: any[]);
}

export interface EventDistube {
  name: keyof DisTubeEvents;
  run: Run;
}
