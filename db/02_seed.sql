INSERT INTO classes (
    name,
    job,
    origin,
    primary_weapon,
    secondary_weapon,
    difficulty,
    mobility,
    range,
    image_url
) VALUES

-- WARRIOR
('Hero', ARRAY['Warrior'], 'Explorer',
ARRAY['One-Handed Sword','Two-Handed Sword','One-Handed Axe','Two-Handed Axe'],
ARRAY['Medallion','Shield'], 1,2,1,
'https://g.nexonstatic.com/media/4pafumjw/250723-ms-classesjobs-update-hero-395x400-v3.png'),

('Paladin', ARRAY['Warrior'], 'Explorer',
ARRAY['One-Handed Sword','Two-Handed Sword','One-Handed Blunt Weapon','Two-Handed Blunt Weapon'],
ARRAY['Rosary','Shield'], 1,2,1,
'https://g.nexonstatic.com/media/aqafsfti/250723-ms-classesjobs-update-paladin-395x400-1.png'),

('Dark Knight', ARRAY['Warrior'], 'Explorer',
ARRAY['Spear','Polearm'],
ARRAY['Iron Chain'], 1,2,2,
'https://g.nexonstatic.com/media/nj0p23o4/250723-darkknight-classesjobs-update-hero-395x400-v3.png'),

('Dawn Warrior', ARRAY['Warrior'], 'Cygnus Knight',
ARRAY['One-Handed Sword','Two-Handed Sword'],
ARRAY['Jewel','Shield'], 1,3,2,
'https://g.nexonstatic.com/media/v55pmg2e/250723-ms-classesjobs-update-dawnwarrior-395x400.png'),

('Mihile', ARRAY['Warrior'], 'Cygnus Knight',
ARRAY['One-Handed Sword'],
ARRAY['Soul Shield'], 1,1,1,
'https://g.nexonstatic.com/media/la0pujdg/250723-ms-classesjobs-update-mihile-395x400.png'),

('Blaster', ARRAY['Warrior'], 'Resistance',
ARRAY['Arm Cannon'],
ARRAY['Charge'], 5,5,1,
'https://g.nexonstatic.com/media/aptnlxb0/250723-blaster-classesjobs-update-hero-395x400-v3.png'),

('Demon Slayer', ARRAY['Warrior'], 'Demon',
ARRAY['One-Handed Blunt Weapon','One-Handed Axe'],
ARRAY['Demon Aegis'], 2,3,1,
'https://g.nexonstatic.com/media/hdehx1ot/250723-ms-classesjobs-update-demonslayer-395x400.png'),

('Demon Avenger', ARRAY['Warrior'], 'Demon',
ARRAY['Desperado'],
ARRAY['Demon Aegis'], 5,3,1,
'https://g.nexonstatic.com/media/cavepo1g/250723-ms-classesjobs-update-demonavenger-395x400.png'),

('Aran', ARRAY['Warrior'], 'Hero',
ARRAY['Polearm'],
ARRAY['Mass'], 3,3,2,
'https://g.nexonstatic.com/media/hkal24bb/aran_img_v255.png'),

('Kaiser', ARRAY['Warrior'], 'Nova',
ARRAY['Two-Handed Sword'],
ARRAY['Dragon Essence'], 2,3,2,
'https://g.nexonstatic.com/media/m0dpbnxt/250723-ms-classesjobs-update-kaiser-395x400.png'),

('Adele', ARRAY['Warrior'], 'Flora',
ARRAY['Bladecaster'],
ARRAY['Bladebinder'], 4,4,3,
'https://g.nexonstatic.com/media/0fsdazqq/250723-ms-classesjobs-update-adele-395x400.png'),

('Zero', ARRAY['Warrior'], 'Transcendent',
ARRAY['Alpha - Long Sword'],
ARRAY['Beta - Heavy Sword'], 4,4,2,
'https://g.nexonstatic.com/media/r3xip5kb/250723-ms-classesjobs-update-zero-395x400.png'),

('Hayato', ARRAY['Warrior'], 'Sengoku',
ARRAY['Katana'],
ARRAY['Kodachi'], 4,4,2,
'https://g.nexonstatic.com/media/3bffgtnw/250723-ms-classesjobs-update-hayato-395x400.png'),

('Ren', ARRAY['Warrior'], 'Anima',
ARRAY['Sword'],
ARRAY['Imugi Gem'], 2,3,2,
'https://g.nexonstatic.com/media/arupsnjr/251105_ms_ren_characterthumbnail_fullcolor_395x400.png'),

-- MAGICIAN
('Arch Mage (Fire/Poison)', ARRAY['Magician'], 'Explorer',
ARRAY['Wand','Staff'],
ARRAY['Shield','Magic Book'], 3,2,5,
'https://g.nexonstatic.com/media/0jpdpc15/250723-archmage-fp-classesjobs-update-hero-395x400-v3.png'),

('Arch Mage (Ice/Lightning)', ARRAY['Magician'], 'Explorer',
ARRAY['Wand','Staff'],
ARRAY['Shield','Magic Book'], 2,3,5,
'https://g.nexonstatic.com/media/qmjnda4i/250723-ms-classesjobs-update-arch-mage-il-395x400.png'),

('Bishop', ARRAY['Magician'], 'Explorer',
ARRAY['Wand','Staff'],
ARRAY['Shield','Magic Book'], 3,2,5,
'https://g.nexonstatic.com/media/45cloohi/250723-bishop-classesjobs-update-hero-395x400-v3.png'),

('Blaze Wizard', ARRAY['Magician'], 'Cygnus Knight',
ARRAY['Wand','Staff'],
ARRAY['Shield','Jewel'], 3,3,3,
'https://g.nexonstatic.com/media/we5jh5l4/250723-ms-classesjobs-update-blazewizard-395x400.png'),

('Battle Mage', ARRAY['Magician'], 'Resistance',
ARRAY['Staff'],
ARRAY['Shield','Magic Marble'], 3,3,2,
'https://g.nexonstatic.com/media/vvyljn5l/250723-battlemage-classesjobs-update-hero-395x400-v3.png'),

('Evan', ARRAY['Magician'], 'Hero',
ARRAY['Wand','Staff'],
ARRAY['Shield','Document'], 5,4,4,
'https://g.nexonstatic.com/media/p2emhutl/250723-evan-classesjobs-update-hero-395x400-v3.png'),

('Luminous', ARRAY['Magician'], 'Hero',
ARRAY['Shining Rod'],
ARRAY['Orb'], 2,2,5,
'https://g.nexonstatic.com/media/iilk5gyo/250723-luminous-classesjobs-update-hero-395x400-v3.png'),

('Illium', ARRAY['Magician'], 'Flora',
ARRAY['Lucent Gauntlet'],
ARRAY['Lucent Wings'], 3,4,5,
'https://g.nexonstatic.com/media/1bqggkuh/250723-illium-classesjobs-update-hero-395x400-v3.png'),

('Lara', ARRAY['Magician'], 'Anima',
ARRAY['Wand'],
ARRAY['Ornament'], 3,2,4,
'https://g.nexonstatic.com/media/ygpapiow/250723-lara-classesjobs-update-hero-395x400-v3.png'),

('Kinesis', ARRAY['Magician'], 'Friends World',
ARRAY['Psy-limiter'],
ARRAY['Chess Piece'], 3,3,4,
'https://g.nexonstatic.com/media/epvffyxd/250723-ms-classesjobs-update-kinesis-395x400.png'),

('Kanna', ARRAY['Magician'], 'Sengoku',
ARRAY['Fan'],
ARRAY['Fan'], 4,2,4,
'https://g.nexonstatic.com/media/51emhjfm/250723-ms-classesjobs-update-kanna-395x400.png'),

('Lynn', ARRAY['Magician'], 'Jianghu',
ARRAY['Memorial Staff'],
ARRAY['Shield','Leaf'], 2,3,3,
'https://g.nexonstatic.com/media/atknl4wc/lynn.png'),

('Sia', ARRAY['Magician'], 'Shine',
ARRAY['Celestial Light'],
ARRAY['Compass'], 3,3,3,
'https://g.nexonstatic.com/media/birlhe2b/250521_siaastelleassetsforclasses-jobs_characterimage_fullcolor_395x400.png'),

-- BOWMAN
('Bow Master', ARRAY['Bowman'], 'Explorer',
ARRAY['Bow'],
ARRAY['Arrow Fletching'], 1,3,5,
'https://g.nexonstatic.com/media/s4ajvnic/250723-bowmaster-classesjobs-update-hero-395x400-v3.png'),

('Marksman', ARRAY['Bowman'], 'Explorer',
ARRAY['Crossbow'],
ARRAY['Bow Thimble'], 1,2,5,
'https://g.nexonstatic.com/media/yezdotno/250723-ms-classesjobs-update-marksman-395x400.png'),

('Pathfinder', ARRAY['Bowman'], 'Explorer',
ARRAY['Ancient Bow'],
ARRAY['Relic'], 2,4,4,
'https://g.nexonstatic.com/media/nfcodzmd/250723-ms-classesjobs-update-pathfinder-395x400.png'),

('Wind Archer', ARRAY['Bowman'], 'Cygnus Knight',
ARRAY['Bow'],
ARRAY['Jewel'], 1,3,4,
'https://g.nexonstatic.com/media/ycibs04r/250723-ms-classesjobs-update-windarcher-395x400.png'),

('Wild Hunter', ARRAY['Bowman'], 'Resistance',
ARRAY['Crossbow'],
ARRAY['Arrowhead'], 3,3,4,
'https://g.nexonstatic.com/media/5l0obqxk/250723-ms-classesjobs-update-wildhunter-395x400.png'),

('Mercedes', ARRAY['Bowman'], 'Hero',
ARRAY['Dual Bowguns'],
ARRAY['Magic Arrow'], 4,4,4,
'https://g.nexonstatic.com/media/3fjflb3k/250723-ms-classesjobs-update-mercedes-395x400.png'),

('Kain', ARRAY['Bowman'], 'Nova',
ARRAY['Whispershot'],
ARRAY['Weapon Belt'], 4,5,4,
'https://g.nexonstatic.com/media/rqbpe0sr/250723-ms-classesjobs-update-kain-395x400.png'),

-- THIEF
('Night Lord', ARRAY['Thief'], 'Explorer',
ARRAY['Claw'],
ARRAY['Charm'], 2,3,4,
'https://g.nexonstatic.com/media/zzdcsdjw/250723-ms-classesjobs-update-nightlord-395x400.png'),

('Shadower', ARRAY['Thief'], 'Explorer',
ARRAY['Dagger'],
ARRAY['Dagger Scabbard','Shield'], 4,4,2,
'https://g.nexonstatic.com/media/btnbb150/250723-ms-classesjobs-update-shadower-395x400.png'),

('Dual Blade', ARRAY['Thief'], 'Explorer',
ARRAY['Dagger'],
ARRAY['Katara'], 2,4,2,
'https://g.nexonstatic.com/media/cu2pwlq4/250723-ms-classesjobs-update-dualblade-395x400.png'),

('Night Walker', ARRAY['Thief'], 'Cygnus Knight',
ARRAY['Claw'],
ARRAY['Jewel'], 2,4,3,
'https://g.nexonstatic.com/media/bg0plmja/250723-ms-classesjobs-update-nightwalker-395x400.png'),

('Xenon', ARRAY['Thief','Pirate'], 'Resistance',
ARRAY['Whip Blade'],
ARRAY['Core Controller'], 3,3,2,
'https://g.nexonstatic.com/media/1kum24uf/250723-xenon-classesjobs-update-hero-395x400-v3.png'),

('Phantom', ARRAY['Thief'], 'Hero',
ARRAY['Cane'],
ARRAY['Card'], 3,3,2,
'https://g.nexonstatic.com/media/lq4jiu54/250723-ms-classesjobs-update-phantom-395x400.png'),

('Cadena', ARRAY['Thief'], 'Nova',
ARRAY['Chain'],
ARRAY['Warp Forge'], 5,5,2,
'https://g.nexonstatic.com/media/vpndkefu/250723-ms-classesjobs-update-cadena-395x400.png'),

('Khali', ARRAY['Thief'], 'Flora',
ARRAY['Chakram'],
ARRAY['Hex Seeker'], 4,5,2,
'https://g.nexonstatic.com/media/jr5pcqmb/250723-ms-classesjobs-update-khali-395x400.png'),

('Hoyoung', ARRAY['Thief'], 'Anima',
ARRAY['Ritual Fan'],
ARRAY['Fan Tassel'], 4,5,3,
'https://g.nexonstatic.com/media/ej0fnabc/250723-hoyoung-classesjobs-update-hero-395x400-v3.png'),

-- PIRATE
('Buccaneer', ARRAY['Pirate'], 'Explorer',
ARRAY['Knuckle'],
ARRAY['Wrist Band'], 1,4,2,
'https://g.nexonstatic.com/media/kdtlti0v/250723-buccaneer-classesjobs-update-hero-395x400-v3.png'),

('Corsair', ARRAY['Pirate'], 'Explorer',
ARRAY['Gun'],
ARRAY['Far Sight'], 3,3,5,
'https://g.nexonstatic.com/media/0gina3yz/250723-ms-classesjobs-update-corsair-395x400.png'),

('Cannoneer', ARRAY['Pirate'], 'Explorer',
ARRAY['Hand Cannon'],
ARRAY['Powder Keg'], 3,2,4,
'https://g.nexonstatic.com/media/vxnlbrip/250723-cannoneer-classesjobs-update-hero-395x400-v3.png'),

('Thunder Breaker', ARRAY['Pirate'], 'Cygnus Knight',
ARRAY['Knuckle'],
ARRAY['Jewel'], 1,5,2,
'https://g.nexonstatic.com/media/zrpjz2vj/250723-ms-classesjobs-update-thunderbreaker-395x400.png'),

('Mechanic', ARRAY['Pirate'], 'Resistance',
ARRAY['Gun'],
ARRAY['Magnum'], 2,2,4,
'https://g.nexonstatic.com/media/chhjslkv/250723-ms-classesjobs-update-mechanic-395x400.png'),

('Shade', ARRAY['Pirate'], 'Hero',
ARRAY['Knuckle'],
ARRAY['Fox Marble'], 2,4,2,
'https://g.nexonstatic.com/media/q53mch5s/shade_img_v255.png'),

('Angelic Buster', ARRAY['Pirate'], 'Nova',
ARRAY['Soul Shooter'],
ARRAY['Soul Ring'], 2,3,4,
'https://g.nexonstatic.com/media/a1tlju4f/angelic-buster-img-v251.png'),

('Ark', ARRAY['Pirate'], 'Flora',
ARRAY['Knuckle'],
ARRAY['Abyssal Path'], 4,5,2,
'https://g.nexonstatic.com/media/w0ihgus3/250723-ms-classesjobs-update-ark-395x400.png'),

('Mo Xuan', ARRAY['Pirate'], 'Jianghu',
ARRAY['Martial Brace'],
ARRAY['Brace Band'], 4,4,2,
'https://g.nexonstatic.com/media/bzvdaysw/mo-xuan-img.png')