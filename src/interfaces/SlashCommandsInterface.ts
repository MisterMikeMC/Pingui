import Client from "../Client/index";
import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable,
} from "discord.js";

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}

interface RunOption {
  Pingui: Client;
  interaction: CommandInteraction;
  args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOption) => any;

export type CommandType = {
  userPermisions?: PermissionResolvable[];
  run: RunFunction;
} & ChatInputApplicationCommandData;
