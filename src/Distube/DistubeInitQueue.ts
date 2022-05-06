import { Queue, Song } from "distube";
import { EventDistube } from "../interfaces";
export const distubeevent: EventDistube = {
  name: "initQueue",
  run: (Pingui, queue: Queue, song: Song): void => {
    queue.autoplay = false;
    queue.volume = 85;
  },
};
