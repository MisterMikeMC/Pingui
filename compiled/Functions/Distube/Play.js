"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
let Play = (Pingui, interaction, Song) => {
    let guildMember = interaction.member;
    try {
        if (!guildMember.voice.channel)
            return "Error2";
        if (interaction.guild.me.voice.channel &&
            guildMember.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return "Error3";
        Pingui.distube.play(guildMember.voice.channel, Song, {
            interaction,
            textChannel: interaction.channel,
            member: guildMember,
        });
        return "Serching";
    }
    catch (error) {
        console.error(error);
        return "Error1";
    }
};
exports.Play = Play;
