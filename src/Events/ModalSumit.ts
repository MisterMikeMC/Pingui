import { Event } from "../interfaces";
export const event: Event = {
  name: "modalSubmit",
  run: async (Pingui, interactionModal): Promise<void> => {
    console.log("Modal Submit");
  },
};
