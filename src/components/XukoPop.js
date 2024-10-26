import React from 'react';
import { Music, Shield, MessageSquare, Plus, Command, ChevronDown } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
    <Icon className="w-12 h-12 mb-4 text-indigo-400" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const CommandCategory = ({ title, icon, commands }) => (
  <div className="bg-white/5 p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-indigo-400">{icon} {title}</h3>
    <div className="text-left space-y-1 h-48 overflow-y-auto custom-scrollbar text-gray-300">
      {commands.map((cmd, index) => (
        <div key={index}>
          <span className="text-indigo-400">{cmd.name}</span> - {cmd.description}
        </div>
      ))}
    </div>
  </div>
);

const XukoPop = () => {
  const features = [
    {
      icon: Music,
      title: "Music Commands",
      description: "High-quality music playback with queue management, filters, and playlist support"
    },
    {
      icon: Shield,
      title: "Admin Tools",
      description: "Comprehensive moderation and server management capabilities"
    },
    {
      icon: MessageSquare,
      title: "General Commands",
      description: "Rich general commands, with much to offer"
    },
    {
      icon: Command,
      title: "100+ Commands",
      description: "Wide variety of utility and fun commands for all your server needs"
    }
  ];

  const commandCategories = {
    music: {
      title: "Music Commands",
      commands: [
        { name: "play", description: "Play a song (Spotify, YouTube)" },
        { name: "np", description: "Show now playing" },
        { name: "skip", description: "Skip current song" },
        { name: "clear", description: "Clear the queue" },
        { name: "loop", description: "Toggle loop mode" },
        { name: "lyrics", description: "Show song lyrics" },
        { name: "queue", description: "Display the queue" },
        { name: "leave", description: "Leave voice channel & stop" },
        { name: "resume", description: "Resume playback" },
        { name: "pause", description: "Pause playback" },
        { name: "remove", description: "Remove song from queue" },
        { name: "shuffle", description: "Shuffle the queue" },
        { name: "volume", description: "Adjust volume (0-200)" }
      ]
    },
    moderation: {
      title: "Moderation",
      commands: [
        { name: "ban", description: "Ban a user" },
        { name: "unban", description: "Unban a user" },
        { name: "kick", description: "Kick a user" },
        { name: "mute", description: "Mute a user" },
        { name: "warn", description: "Warn a user" },
        { name: "purge", description: "Delete multiple messages" },
        { name: "role", description: "Assign or remove a role" },
        { name: "autorole", description: "Set an autorole" },
        { name: "roelall", description: "Role all members" },
        { name: "vcsetup", description: "Sets up custom vc" },
        { name: "slogchannel", description: "Set the log channel" }
      ]
    },
    economy: {
      title: "Economy",
      commands: [
        { name: "balance", description: "Check your balance" },
        { name: "pay", description: "Pay another user" },
        { name: "daily", description: "Claim daily reward" },
        { name: "work", description: "Work for money" },
        { name: "slots", description: "Play slots" },
        { name: "crash", description: "Play crash gambling game" },
        { name: "coinflip", description: "Flip a coin" },
        { name: "blackjack", description: "Play blackjack" },
        { name: "rob", description: "Rob another user" },
        { name: "shop", description: "View available items" },
        { name: "inventory", description: "View your inventory" }
      ]
    },
    utility: {
      title: "Utility",
      commands: [
        { name: "ping", description: "Bot latency" },
        { name: "whois", description: "User info" },
        { name: "serverinfo", description: "Server info" },
        { name: "avatar", description: "User avatar" },
        { name: "banner", description: "User banner" },
        { name: "mc", description: "Server member count" },
        { name: "steal", description: "Add emoji to server" },
        { name: "afk", description: "Set an afk status" },
        { name: "changeprefix", description: "Change bot prefix" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-white">XukoPop</div>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1291583282751868959&permissions=8&integration_type=0&scope=bot" 
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Invite Bot
          </a>
        </nav>

        <div className="text-center mb-24">
          <div className="flex justify-center mb-8">
            <img 
              src={process.env.PUBLIC_URL + '/profile.png'}
              alt="XukoPop Bot"
              className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet XukoPop
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The all-in-one Discord bot for music, moderation, and more. Enhance your server with 100+ powerful commands.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1291583282751868959&permissions=8&integration_type=0&scope=bot" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Plus className="w-5 h-5" />
              Add to Discord
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Commands Preview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Command List</h2>
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 max-w-4xl mx-auto">
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: rgba(99, 102, 241, 0.5);
                border-radius: 20px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background-color: rgba(99, 102, 241, 0.8);
              }
            `}</style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(commandCategories).map((category, index) => (
                <CommandCategory key={index} {...category} />
              ))}
            </div>
            <div className="mt-6 text-sm text-gray-400">
              And many more commands including AutoMod, Logging, Fun, and NSFW categories!
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
            <a
              href="https://discord.com/oauth2/authorize?client_id=1291583282751868959&permissions=8&integration_type=0&scope=bot"
              className="px-8 py-3 bg-white text-indigo-900 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            © {new Date().getFullYear()} XukoPop Bot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default XukoPop;