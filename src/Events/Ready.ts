import { Event } from "../interfaces";
export const event: Event = {
  name: "ready",
  run: (Pingui): void => {
    let Status = [
      { name: `En desarrollo.`, type: 1 },
    ];
    let StatusIndex = 0;
    setInterval((): void => {
      let RefreshStatus = (status: object[]): void => {
        Pingui.user.setPresence({
          status: "online",
          activities: [status[StatusIndex]],
        });
        StatusIndex = (StatusIndex + 1) % Status.length;
      };
      RefreshStatus(Status);
    }, 30000);
    console.log(`${Pingui.user.username} is ready.`);
  },
};
