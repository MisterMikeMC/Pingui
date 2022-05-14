import { Queue } from "distube";
import { EventDistube } from "../interfaces";
export const distubeevent: EventDistube = {
    name: "empty",
    run: (_Pingui, queue: Queue): void => {
        queue.textChannel.send({
            content: "El canal esta vacío, me retiro.",
        });
    }
}