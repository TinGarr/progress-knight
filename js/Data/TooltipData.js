const tooltips = {
    "Beggar": "Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.",
    "Farmer": "Plow the fields and grow the crops. It's not much but it's honest work.",
    "Fisherman": "Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.",
    "Miner": "Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.",
    "Blacksmith": "Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.",
    "Merchant": "Travel from town to town, bartering fine goods. The job pays decently well and is a lot less manually-intensive.",

    "Squire": "Carry around your knight's shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.",
    "Footman": "Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.",
    "Veteran footman": "More experienced and useful than the average footman, take out the enemy forces in battle with your might. The pay is not that bad.",
    "Knight": "Slash and pierce through enemy soldiers with ease, while covered in steel from head to toe. A decently paying and very respectable job.",
    "Veteran knight": "Utilising your unmatched combat ability, slaugher enemies effortlessly. Most footmen in the military would never be able to acquire such a well paying job like this.",
    "Elite knight": "Obliterate squadrons of enemy soldiers in one go with extraordinary proficiency, while equipped with the finest gear. Such a feared unit on the battlefield is paid extremely well.",
    "Holy knight": "Collapse entire armies in mere seconds with your magically imbued blade. The handful of elite knights who attain this level of power are showered with coins.",
    "Legendary knight": "Feared worldwide, obliterate entire nations in a blink of an eye. Roughly every century, only one holy knight is worthy of receiving such an esteemed title.",

    "Student": "Study the theory of mana and practice basic spells. There is minor pay to cover living costs, however, this is a necessary stage in becoming a mage.",
    "Apprentice mage": "Under the supervision of a mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.",
    "Mage": "Turn the tides of battle through casting intermediate spells and mentor other apprentices. The pay for this particular job is extremely high.",
    "Wizard": "Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.",
    "Master wizard": "Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that a master wizard has enough destructive power to wipe an empire off the map.",
    "Chairman": "Spend your days administrating The Arcane Association and investigate the concepts of true immortality. The chairman receives ludicrous amounts of pay daily.",

    //The Order of Discovery
    "Junior Caretaker": "A low-level administrator of the ancient Order of Discovery has offered you a job. Cleaning shit-stained chamber pots and mopping kitchen floors isn't glamorous work, but it gives you the rare chance to peruse the Order's world-class library of exotic books. Who cares if touching the books is an offense worthy of expulsion?",
    "Lead Caretaker": "Witty placeholder, my name is.",
    "Freshman": "I tip the tools, and inform the fools.",
    "Sophomore": "Rhyming is crime-ing, and feature delay is not the way.",
    "Junior": "Try as I do, these temporary tooltips are poo.",
    "Senior": "Forget me not, for this author shall not.",
    "Probation": "A tooltip a day, keeps the passionate fan at bay.",

    //Nobility
    "Baronet": "A tooltip, a thought. Helpful, I am not.",
    "Baron": "The finest $3 pizza modern food science can conceive",
    "Vice Count": "Because Viscount sounds gross.",
    "Count": "Are these placeholder tooltips infuriating?",
    "Duke": "Good.",
    "Grand Duke": "The nobility cares not for your tooltip desires. ",
    "Arch Duke": "Even grander than the most grand Grand Duke your granddad could....Grand.",
    "Lord": "Oh lord, please let Gottmilk write the real tooltips already. These are too painful to endure.",
    "High Lord": "Is it April 20th?",
    "King": "Now to find yourself a nice Queen. Or two. Or three.",
    "High King": "Even higher. Even nobler.",
    "Emperor of Mankind": "Go outside.",

    "Concentration": "Improve your learning speed through practising intense concentration activities.",
    "Productivity": "Learn to procrastinate less at work and receive more job experience per day.",
    "Bargaining": "Study the tricks of the trade and persuasive skills to lower any type of expense.",
    "Meditation": "Fill your mind with peace and tranquility to tap into greater happiness from within.",

    "Strength": "Condition your body and strength through harsh training. Stronger individuals are paid more in the military.",
    "Battle tactics": "Create and revise battle strategies, improving experience gained in the military.",
    "Muscle memory": "Strengthen your neurons through habit and repetition, improving strength gains throughout the body.",

    // Magic
    "Mana control": "Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user.",
    "Immortality": "Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?",
    "Time warping": "Bend space and time through forbidden techniques, resulting in a faster gamespeed.",
    "Super immortality": "Through harnessing ancient, forbidden techniques, lengthen your lifespan drastically beyond comprehension.",

    // Mind
    "Novel Knowledge": "A mind needs training. Your time spent absorbing new ideas and worldviews has increased your ability to assimilate new ideas and make connections between seemingly unrelated concepts.",
    "Unusual Insight": "Your training in the more mundane affairs of the non-magical world have developed your critical analysis skills. As you gain knowledge, magical concepts which seemed inscrutable and mysterious are becoming more relatable to the physical world around you.",
    "Trade Psychology": "Writers pour their souls into the written word. Your extensive reading combined with your countless years spent interacting with people have lent you unparalleled insight into the way mankind views the positive and the negative events of this world. An ethical scholar would refrain from abusing this knowledge for financial gain.",
    "Flow": "Intense bouts of concentration warp your perception of time",

    // Dark Magic
    "Dark influence": "Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease.",
    "Evil control": "Tame the raging and growing evil within you, improving evil gain in-between rebirths.",
    "Intimidation": "Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts.",
    "Demon training": "A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly.",
    "Blood meditation": "Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.",
    "Demon's wealth": "Through the means of dark magic, multiply the raw matter of the coins you receive from your job.",

    //Housing Tooltips
    "Homeless": "Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.",
    "Tent": "A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.",
    "Wooden hut": "Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn't very pleasant.",
    "Cottage": "Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.",
    "House": "A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.",
    "Large house": "Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.",
    "Small Manor": "Your rising status has granted you access to a small countryside manor. With the manor comes two hundred acres of farmland and the associated serfs, grain mill, and a small river for irrigation. The attendant tells you of a beautiful hollow in some nearby woods where you can relax and meditate.",
    "Small palace": "A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.",
    "Grand palace": "A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.",

    //Item Tooltips
    "Rag Clothing": "After weeks of freezing on the streets, you're making enough money to buy some cheap clothes. They're not much, but they'll keep you warm enough to focus.",
    "Book": "A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.",
    "Basic Farm Tools": "A set of rusty iron tools to help loosen soil, shape wood, and attach things. Where did you even find this junk?",
    "Cheap Fishing Rod": "You found this cracked fishing rod partially buried by the shore. It needs some major TLC, but it'll help you reel in bigger fish.",
    "Dumbbells": "Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before. ",
    "Miner's Lantern": "After weeks of feeling your way through pitch black tunnels, bandaging scraped hands, and getting smacked in the face by your fellow miner's pickaxes, you have the bright idea to purchase a lantern. Hopefully some light will help illuminate additional mineral deposits and geological phenomena.",
    "Crappy Anvil": "You're pretty sure this lumpy hunk of iron used to be someone's chamber pot.",
    "Pack Horse": "This sweet chestnut horse will haul you and your trade goods to distant cities where your novel fabrics and knick knacks will fetch a tidy profit.",
    "Small Shop": "Your first shop. This cozy storefront lies on the main street of a medium-sized walled town. Commoners, nobles, and military patrols all pass along this street, so at the very least people will know your store exists.",
    "Weapon Outlet": "A busy military means a busy weapons store. One of the liuetenants who frequents your small shop recently let slip that a long military campaign is imminent. Naturally, a savy merchant such as yourself sees the business opportunity provided by war.",
    "Personal squire": "Assists you in completing day to day activities, giving you more time to be productive at work.",
    "Steel longsword": "A fine blade used to slay enemies even quicker in combat and therefore gain more experience.",
    "Butler": "Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.",
    "Sapphire charm": "Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.",
    "Study desk": "A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.",
    "Library": "Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.",
    "Small Field": "After a pitched battle between bickering barons, your fellow farmer lost his leg and two eldest sons. With a wife and small children to take care of, he says he'll entrust his land to you in exchange for using the proceeds to take care of his family.",
    "Ox-driven Plow": "With your newfound land and tools, you've become relatively wealthy. For a peasant farmer, at least. Tale of your achievements has reached the ears of the local lord, who has granted permission for you to rent one of his oxen plow teams and associated gear.",
    "Livestock-derived Fertilizer": "It's poo.",
}