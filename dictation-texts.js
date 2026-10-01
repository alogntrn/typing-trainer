// dictation-texts.js - the texts for the dictation trainer.
//
// Each text has a level ("easy", "medium" or "hard"), a title, and its sentences
// as a list. The voice reads one sentence at a time.
//
// HOW TO ADD YOUR OWN: copy one block, paste it before the last line "];", change it.
// Tips for good dictation sentences:
//  - End every sentence with . ? or !
//  - Titles must be unique.
//  - Write numbers as words (the voice says "nineteen ninety", you could type 1990 or
//    the words, so numbers can never be marked fairly).
//  - Avoid words that have two correct spellings (colour/color, travelled/traveled).
//  - Plain keyboard characters only: straight quotes ' and ", no special symbols.

const DICTATION_TEXTS = [

  // ---------- EASY: short sentences, everyday words ----------
  {
    level: "easy",
    title: "A Day at the Beach",
    sentences: [
      "We went to the beach on Saturday.",
      "The sun was hot and the sky was blue.",
      "My sister built a big sand castle.",
      "I swam in the sea with my dad.",
      "After lunch we ate ice cream.",
      "It was a wonderful day."
    ]
  },
  {
    level: "easy",
    title: "My Morning",
    sentences: [
      "I wake up at seven o'clock every day.",
      "First I brush my teeth and wash my face.",
      "Then I eat toast with butter and drink milk.",
      "My brother takes the bus to school.",
      "I like to walk with my friends.",
      "School starts at eight thirty."
    ]
  },
  {
    level: "easy",
    title: "The Little Dog",
    sentences: [
      "Max is a small brown dog.",
      "He lives with an old woman near the park.",
      "Every morning he runs after the ball.",
      "He is very fast, but he is also lazy.",
      "In the evening he sleeps by the fire."
    ]
  },
  {
    level: "easy",
    title: "At the Market",
    sentences: [
      "Anna goes to the market on Fridays.",
      "She buys fresh bread, red apples and cheese.",
      "The woman at the stall always smiles.",
      "Anna puts everything in her basket.",
      "Then she walks home in the rain."
    ]
  },
  {
    level: "easy",
    title: "A Rainy Day",
    sentences: [
      "It rained all day on Sunday.",
      "We stayed at home and played games.",
      "My mother made hot soup for dinner.",
      "Later we watched a funny film.",
      "I fell asleep on the sofa."
    ]
  },
  {
    level: "easy",
    title: "Our New Teacher",
    sentences: [
      "Our new teacher is called Mister Green.",
      "He comes from a small town in the north.",
      "He likes music, books and long walks.",
      "In class he tells us interesting stories.",
      "We all think he is very kind."
    ]
  },

  // ---------- MEDIUM: longer sentences, commas, more varied words ----------
  {
    level: "medium",
    title: "The Old Library",
    sentences: [
      "The old library at the end of our street opens every weekday morning at nine.",
      "Inside, thousands of books are arranged carefully on tall wooden shelves.",
      "The librarian, a quiet man with silver hair, knows exactly where everything is.",
      "On rainy afternoons, students gather at the long tables to study together.",
      "Some people visit only to enjoy the peace and the smell of old paper."
    ]
  },
  {
    level: "medium",
    title: "A Train Journey",
    sentences: [
      "We left the station early in the morning and found seats near the window.",
      "The train moved slowly through green fields, small villages and dark tunnels.",
      "A young woman across from us was reading a thick novel.",
      "After three hours, the conductor announced that we were arriving in the capital.",
      "Everyone stood up at once and reached for their luggage."
    ]
  },
  {
    level: "medium",
    title: "Learning a Language",
    sentences: [
      "Learning a new language takes patience, practice and a little courage.",
      "Beginners often feel embarrassed when they make mistakes, but mistakes are part of learning.",
      "It helps to listen to music, watch films and talk to native speakers.",
      "Even ten minutes of study every day will bring real progress.",
      "After a few months, you will be surprised by how much you understand."
    ]
  },
  {
    level: "medium",
    title: "The Weather Forecast",
    sentences: [
      "According to the forecast, tomorrow will begin with heavy fog in the valleys.",
      "By midday the fog should clear, and the sun will break through the clouds.",
      "Temperatures will rise to about fifteen degrees, which is warm for this time of year.",
      "However, a cold wind is expected from the north in the evening.",
      "Drivers are advised to check road conditions before they leave."
    ]
  },
  {
    level: "medium",
    title: "The Street Musician",
    sentences: [
      "Every Saturday a street musician plays the violin outside the town hall.",
      "People walking past often stop to listen, and some leave a few coins in his case.",
      "He says that he plays because music makes strangers smile at each other.",
      "Last winter, even the snow could not drive him away from his usual spot.",
      "Now the children on the street greet him like an old friend."
    ]
  },
  {
    level: "medium",
    title: "A Quiet Village",
    sentences: [
      "The village lies at the foot of a steep hill, far from any busy road.",
      "There is one shop, one church and a small school with only forty pupils.",
      "In summer, visitors come to walk along the river and pick wild berries.",
      "In winter, the villagers gather every Friday in the old inn to talk and play cards.",
      "Nobody there is in a hurry, and nobody seems to mind."
    ]
  },

  // ---------- HARD: long sentences, rare words, tricky spellings ----------
  {
    level: "hard",
    title: "The Committee's Decision",
    sentences: [
      "The committee's unprecedented decision surprised even its most experienced critics, who had confidently predicted a compromise.",
      "Although the proposal had been thoroughly discussed, several members still questioned whether it was genuinely necessary.",
      "Nevertheless, after a lengthy debate, the chairman declared that the vote would proceed without further delay.",
      "Consequently, the new regulations will be introduced gradually, beginning with those that affect small businesses.",
      "Whether they will succeed remains, of course, a matter of considerable uncertainty."
    ]
  },
  {
    level: "hard",
    title: "An Embarrassing Occurrence",
    sentences: [
      "It was embarrassing to admit that I had accidentally given the wrong address to the taxi driver.",
      "Apparently, the mistake had occurred because two streets nearby have almost identical names.",
      "Fortunately, the driver was patient, and he found the correct building without any argument.",
      "I said sorry several times, but he assured me that this kind of confusion happens far more often than people imagine.",
      "In the end, we both laughed, and he refused to accept a tip."
    ]
  },
  {
    level: "hard",
    title: "The Rhythm of the City",
    sentences: [
      "Visitors to the city often remark on its restless rhythm, which seems to accelerate toward the end of the working day.",
      "Pedestrians hurry across crowded intersections, while cyclists weave carefully between buses, taxis and delivery vans.",
      "Beneath the noise, however, there is a surprising sense of order, as if everyone had rehearsed their movements.",
      "Only in the early hours of the morning does the atmosphere become truly peaceful.",
      "Then the streets belong to street sweepers, bakers and the occasional stray cat."
    ]
  },
  {
    level: "hard",
    title: "A Scientist's Patience",
    sentences: [
      "Scientific discoveries rarely arrive suddenly; more often they are the result of years of careful, repetitive and occasionally tedious work.",
      "A researcher may repeat the same experiment hundreds of times before a pattern finally becomes clear.",
      "Critics sometimes dismiss such persistence as stubbornness, yet it is precisely this quality that separates reliable conclusions from lucky guesses.",
      "Moreover, a result that cannot be reproduced by independent colleagues is generally regarded with suspicion.",
      "Patience, therefore, is not merely a virtue in science but a basic requirement."
    ]
  },
  {
    level: "hard",
    title: "A Difficult Journey",
    sentences: [
      "The expedition set out at dawn, although the weather forecast had warned of unusually severe conditions.",
      "By noon, a fierce wind was driving sharp snow into their faces, and visibility had fallen to almost nothing.",
      "The leader, who had completed similar journeys before, insisted that they should neither panic nor separate.",
      "They sheltered behind a rocky ridge until the storm eventually weakened.",
      "Exhausted but unharmed, they reached the village long after midnight."
    ]
  },
  {
    level: "hard",
    title: "Privilege and Conscience",
    sentences: [
      "Having the privilege to choose one's own career is something many people take for granted.",
      "A person with a strong conscience, however, will often ask whether personal success is enough.",
      "Some decide to use their talents to serve others, accepting lower salaries in exchange for greater meaning.",
      "Others argue that financial independence is the surest way to help in the long term.",
      "Both views deserve respect, and neither is entirely free from difficulty."
    ]
  }
];
