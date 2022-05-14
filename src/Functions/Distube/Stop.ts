import { Queue } from "distube";
export let Stop = (Queue: Queue): string => {
  if (!Queue) {
    return "Error1";
  } else {
    Queue.stop();
    return "Stopped";
  }
};
