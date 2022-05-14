import { Queue, Song } from "distube";
import { EventDistube } from "../interfaces";
export const distubeevent: EventDistube = {
  name: "initQueue",
  run: (_Pingui, queue: Queue, _song: Song): void => {
    queue.autoplay = false;
    queue.volume = 85;
  },
};
