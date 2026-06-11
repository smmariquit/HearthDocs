// sidebars.js

module.exports = {
    docs: [
        {
            type: 'link',
            label: 'Website',
            href: 'https://hearthcraft.net/'
        },
        {
            type: 'link',
            label: 'Rules',
            href: 'https://hearthcraft.net/rules',
        },
        {
            type: 'link',
            label: 'Discord',
            href: 'https://discord.hearthcraft.net/',
        },
        {
            type: 'category',
            label: 'Other Links',
            collapsed: true,
            items: [
                  {
                     type: 'link',
                     label: 'Webstore',
                     href: 'https://store.hearthcraft.net/',
                  },
                  {
                     type: 'link',
                     label: 'Dynamic Map',
                     href: 'https://map.hearthcraft.net/',
                  },
                  {
                     type: 'link',
                     label: 'Subreddit',
                     href: 'https://reddit.com/r/HearthCraft/',
                  },
                  {
                     type: 'link',
                     label: 'Instagram',
                     href: 'https://instagram.com/HearthCraft/',
                  },
                  {
                     type: 'link',
                     label: 'Statistics',
                     href: 'https://calypso.hearthcraft.net/',
                  },
                  {
                     type: 'link',
                     label: 'Icon Pack',
                     href: 'http://cdn.moep.tv/files/Custom_Icons_Resource_Pack_small.zip',
                  },
                  {
                     type: 'link',
                     label: 'Trailer',
                     href: 'https://www.youtube.com/watch?v=tKJ4dBRGOsc',
                  },
                  {
                     type: 'link',
                     label: 'Voting',
                     href: 'https://hearthcraft.net/vote',
                  },
            ],
        },
        {
            type: 'category',
            label: 'Welcome',
            collapsed: false,
            items: [
                'intro',
            ],
        },
        {
            type: 'category',
            label: 'Plugins',
            collapsed: true,
            items: [
                {
                type: 'category',
                label: 'Core Features',
                collapsed: true,
                items: [
                    'plugins/GriefPrevention',
                 ]
                },
                {
                type: 'category',
                label: 'Lesser Features',
                collapsed: true,
                items: [
                    'plugins/AdvancedGift',
                 ]
                },
                {
                type: 'category',
                label: 'Quality of Life',
                collapsed: true,
                items: [
                    'plugins/BetterSleeping',
                 ]
                },
                {
                type: 'category',
                label: 'Back-end',
                collapsed: true,
                items: [
                    'plugins/AAC',
                 ]
                },
                {
                type: 'category',
                label: 'Chat & Interface',
                collapsed: true,
                items: [
                    'plugins/DeluxeTags',
                 ]
                },
            ],
        },
    ]
}
