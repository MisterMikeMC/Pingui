import { GuildMember, Interaction } from "discord.js";
import Client from "../../Client";
export let Play = (
  Pingui: Client,
  interaction: Interaction,
  Song: String
): string => {
  let guildMember = interaction.member as GuildMember;
  try {
    if (!guildMember.voice.channel) return "Error2";
    if (
      interaction.guild.me.voice.channel &&
      guildMember.voice.channel.id !== interaction.guild.me.voice.channel.id
    )
      return "Error3";
    Pingui.distube.play(guildMember.voice.channel, Song, {
      interaction,
      textChannel: interaction.channel,
      member: guildMember,
    });
    return "Serching";
  } catch (error) {
    console.error(error);
    return "Error1";
  }
};
