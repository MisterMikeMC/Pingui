"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const mongoose_1 = require("mongoose");
const util_1 = require("util");
const path_1 = require("path");
const spotify_1 = require("@distube/spotify");
const soundcloud_1 = require("@distube/soundcloud");
const distube_1 = __importDefault(require("distube"));
const glob_1 = __importDefault(require("glob"));
const discord_modals_1 = __importDefault(require("discord-modals"));
const globPromise = (0, util_1.promisify)(glob_1.default);
class Pingui extends discord_js_1.Client {
    constructor() {
        super({
            intents: [
                "GUILDS",
                "GUILD_MEMBERS",
                "GUILD_BANS",
                "GUILD_EMOJIS_AND_STICKERS",
                "GUILD_WEBHOOKS",
                "GUILD_INVITES",
                "GUILD_VOICE_STATES",
                "GUILD_PRESENCES",
                "GUILD_MESSAGES",
                "GUILD_MESSAGE_REACTIONS",
                "GUILD_MESSAGE_TYPING",
                "DIRECT_MESSAGES",
            ],
            ws: {
                properties: {
                    $browser: "Discord Android",
                },
            },
            allowedMentions: {
                repliedUser: false,
            },
        });
        this.commands = new discord_js_1.Collection();
        this.aliases = new discord_js_1.Collection();
        this.slashcommands = new discord_js_1.Collection();
        this.events = new discord_js_1.Collection();
        this.distubeevent = new discord_js_1.Collection();
    }
    async start() {
        this.login(process.env.BOT_TOKEN);
        this.registerModules();
        (0, mongoose_1.connect)(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true,
        })
            .then(() => {
            console.log("Conectado a MongoDB ✅");
        })
            .catch((ErrorForConectionToDatabase) => {
            console.log(`Pingui no se pudo conectar a MongoDB ❌\nError: ${ErrorForConectionToDatabase}`);
        });
        /* Discord Modals */
        (0, discord_modals_1.default)(this);
        /* UnhandledRejection */
        process.on("unhandledRejection", (Error) => console.log(Error));
        /* Command Handler */
        const commandPath = (0, path_1.join)(__dirname, "..", "Commands", "Commands");
        (0, fs_1.readdirSync)(commandPath).forEach((Categories) => {
            const commands = (0, fs_1.readdirSync)(`${commandPath}/${Categories}`).filter((File) => File.endsWith(".ts"));
            for (const file of commands) {
                const { command } = require(`${commandPath}/${Categories}/${file}`);
                this.commands.set(command.name, command);
                if (command?.aliases.length !== 0) {
                    command.aliases.forEach((alias) => {
                        this.aliases.set(alias, command);
                    });
                }
            }
        });
        /* Event Handler */
        const EventPath = (0, path_1.join)(__dirname, "..", "Events");
        (0, fs_1.readdirSync)(EventPath).forEach(async (File) => {
            const { event } = await Promise.resolve().then(() => __importStar(require(`${EventPath}/${File}`)));
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });
        /* Distube Event Handler */
        const Options = {
            emitAddSongWhenCreatingQueue: false,
            emitAddListWhenCreatingQueue: false,
            emitNewSongOnly: true,
            leaveOnEmpty: true,
            emptyCooldown: 20000,
            leaveOnStop: false,
            nsfw: false,
            plugins: [
                new spotify_1.SpotifyPlugin({
                    emitEventsAfterFetching: true,
                }),
                new soundcloud_1.SoundCloudPlugin(),
            ],
        };
        this.distube = new distube_1.default(this, Options);
        const DistubeEventPath = (0, path_1.join)(__dirname, "..", "Distube");
        (0, fs_1.readdirSync)(DistubeEventPath).forEach(async (File) => {
            const { distubeevent } = await Promise.resolve().then(() => __importStar(require(`${DistubeEventPath}/${File}`)));
            this.distubeevent.set(distubeevent.name, distubeevent);
            this.distube.on(distubeevent.name, distubeevent.run.bind(null, this));
        });
    }
    /* Slash Command */
    async importFile(filePath) {
        return (await Promise.resolve().then(() => __importStar(require(filePath))))?.default;
    }
    async registerCommands({ commands, guildId, }) {
        this.application.commands.set(commands);
        console.log(`Se han registrado los SlashCommands de manera Global ✅`);
    }
    async registerModules() {
        const SlashCommands = [];
        const commandFiles = await globPromise(`${__dirname}/../Commands/SlashCommands/*/*{.ts,.js}`);
        commandFiles.forEach(async (filePath) => {
            const command = await this.importFile(filePath);
            if (!command.name)
                return;
            this.slashcommands.set(command.name, command);
            SlashCommands.push(command);
        });
        this.on("ready", () => {
            this.registerCommands({
                commands: SlashCommands,
                guildId: process.env.guildId,
            });
        });
    }
}
exports.default = Pingui;
