import { Event } from "../interfaces";
import { RandomPositionOfArray } from "../Functions";
export const event: Event = {
  name: "ready",
  run: (Pingui): void => {
    setInterval((): void => {
      let Status = [
        { name: `Mencioname por ayuda.`, type: 1 },
        { name: `En desarrollo.`, type: 1 },
      ];
      let RefreshStatus = (status: object[]): void => {
        Pingui.user.setPresence({
          status: "online",
          activities: [RandomPositionOfArray(status)],
        });
      };
      RefreshStatus(Status);
    }, 15000);
    console.log(`${Pingui.user.username} is ready.`);
  },
};
