"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
exports.event = {
    name: "ready",
    run: (Pingui) => {
        let Status = [
            { name: `En desarrollo.`, type: 1 },
        ];
        let StatusIndex = 0;
        setInterval(() => {
            let RefreshStatus = (status) => {
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
