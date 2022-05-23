"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
exports.event = {
    name: "messageCreate",
    run: async (Pingui, message) => {
        /* Declaraciones */
        let Prefix = "p!";
        /* Command Handler */
        if (!message.author.bot &&
            message.guild &&
            message.content.startsWith(Prefix)) {
            const args = message.content
                .slice(Prefix.length)
                .trim()
                .split(/ +/g);
            const Command = args.shift().toLowerCase();
            let ExecuteCommand = Pingui.commands.get(Command) || Pingui.aliases.get(Command);
            if (ExecuteCommand) {
                ExecuteCommand.run(Pingui, message, args);
            }
        }
    },
};
