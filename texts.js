// texts.js - the typing texts.
//
// HOW TO ADD YOUR OWN TEXT
// Copy one block { ... }, paste it before the last line "];" and change it.
//   title: must be UNIQUE (the app uses it to remember which texts you finished)
//   topic: a short label such as "Inflation"
//   text:  60-100 words, one line, plain keyboard characters only
//          (straight quotes ' and ", normal hyphens -, no special symbols)
// Inside a text, an apostrophe ' is fine. A double quote must be written \"
// like this. Don't forget the comma after each block!
//
// The daily set of 5 texts is taken in order from this list, so the texts are
// arranged so that neighbours have different topics.

const TEXTS = [
  {
    title: "The First Coins",
    topic: "History of money",
    text: "Around 2,600 years ago, the kingdom of Lydia, in what is now Turkey, began making some of the world's first coins. They were made of electrum, a natural mix of gold and silver, and many were stamped with the image of a lion. The stamp showed that a ruler guaranteed the weight and value of each coin. Before this, traders had to weigh pieces of metal and argue about their purity. Stamped coins made trade much faster, and the idea soon spread to the Greek cities and far beyond."
  },
  {
    title: "The Prisoner's Dilemma",
    topic: "Game theory",
    text: "Two suspects are arrested and questioned in separate rooms. If both stay silent, each gets a short sentence. If one betrays the other, the betrayer goes free and the other gets a long sentence. If both betray, both get a medium sentence. Whatever the other person does, betraying looks like the better choice, yet two betrayers end up worse off than two silent partners. This puzzle was first studied in 1950 at the RAND Corporation and is now used to explain price wars and arms races."
  },
  {
    title: "From Paper Mill to Phones",
    topic: "Company stories",
    text: "Nokia, the company that once sold more mobile phones than anyone else, began in 1865 as a paper mill in Finland. Its name comes from the Nokianvirta river, near where a second mill was built. Over the following century, the company moved into rubber boots, car tyres and cables before it turned to electronics. By 1998 it was the world's biggest maker of mobile phones. The story shows how a business can change completely to survive for more than a hundred years."
  },
  {
    title: "The Cost of Choosing",
    topic: "Opportunity cost",
    text: "Economists say that the real cost of anything is what you give up to get it. This is called opportunity cost. Imagine you have one free evening. If you go to the cinema, the cost is not just the ticket. It is also the hour of study, the match on television or the time with friends that you gave up. The term is usually credited to the Austrian economist Friedrich von Wieser, who used it in the early 1900s. Every choice has a hidden price, even when no money changes hands."
  },
  {
    title: "The 1973 Oil Shock",
    topic: "Supply and demand",
    text: "In October 1973, several Arab oil-producing countries stopped selling oil to the United States and some other nations because of their support for Israel in a war. These countries also cut their total output. Supply dropped suddenly while demand stayed the same, so prices shot up. Within months, the price of a barrel of oil rose to about four times its earlier level. Drivers waited in long lines at petrol stations, and many countries began to look for ways to use less energy."
  },
  {
    title: "Hungary's Record Inflation",
    topic: "Inflation",
    text: "Inflation means that prices rise over time, so each unit of money buys less. Usually it is slow, but sometimes it runs out of control. After the Second World War, Hungary suffered the worst inflation ever recorded. In 1946, prices doubled about every 16 hours at the peak. People rushed to spend their wages the moment they were paid, because prices kept rising by the hour. The country finally ended the crisis by introducing a new currency, the forint, in August 1946."
  },
  {
    title: "Paper Money in China",
    topic: "History of money",
    text: "Paper money was invented in China. Around the year 1000, during the Song dynasty, merchants in the city of Chengdu began to use paper notes instead of heavy iron coins, which were awkward to carry. Later, the government took control and issued its own notes. When the Italian traveller Marco Polo visited China in the 1200s, he was amazed that people accepted pieces of paper as money. Most European countries did not use paper notes widely until hundreds of years later."
  },
  {
    title: "Nintendo's Card Game Roots",
    topic: "Company stories",
    text: "Nintendo is famous for video games, but the company is much older than any computer. It was founded in Kyoto, Japan, in 1889 by Fusajiro Yamauchi, who made playing cards called hanafuda. The cards became popular, and the business grew over the decades. It was only in the 1970s that the company began to make electronic games, and in 1983 it released the Famicom console in Japan. The story shows how a small traditional business can become a giant by changing with the times."
  },
  {
    title: "The Nash Equilibrium",
    topic: "Game theory",
    text: "In a game, a Nash equilibrium is a situation in which no player can do better by changing their own strategy while the others keep theirs. It is named after the American mathematician John Nash, who described the idea in 1950 when he was a young student at Princeton University. In 1994 he shared the Nobel Prize in Economics for this work. Today economists use the idea to study auctions, competition between firms and even traffic. Nash's life later inspired the film A Beautiful Mind."
  },
  {
    title: "Ford's Five Dollar Day",
    topic: "Business history",
    text: "In January 1914, Henry Ford announced that his factory workers would be paid five dollars for a day's work. This was about double the usual wage for factory work at the time. Many people thought it was foolish. But workers had been leaving the factory in huge numbers because the assembly line jobs were so repetitive. Higher pay made them stay, which saved the company money on training new staff. Ford also believed that well-paid workers would become customers for his cars."
  },
  {
    title: "There Is No Free Lunch",
    topic: "Opportunity cost",
    text: "In the 1800s, many American saloons offered a free lunch to customers who bought a drink. The food was often salty, so people became thirsty and bought more drinks. The lunch was never really free, because its cost was hidden in the price of the drinks. Later, economists such as Milton Friedman helped to make the saying \"there is no such thing as a free lunch\" famous. It reminds us that everything has a cost, even if someone else pays it."
  },
  {
    title: "The Diamond-Water Paradox",
    topic: "Supply and demand",
    text: "Water is essential for life, yet it costs very little. Diamonds are not needed to survive, yet they cost a fortune. The Scottish thinker Adam Smith pointed to this puzzle in his book The Wealth of Nations in 1776. Later economists explained it by looking at the value of one extra unit. Water is plentiful, so one more glass adds little, while diamonds are rare. In a desert, though, a glass of water could be worth more than a jewel."
  },
  {
    title: "The First Shareholders",
    topic: "Business history",
    text: "The Dutch East India Company was set up in 1602 to trade with Asia. To raise the huge amount of money it needed, it sold shares to ordinary people, and many citizens of the Dutch Republic bought them. These shares could be bought and sold in Amsterdam, which created one of the first stock markets in the world. The company became enormously wealthy, trading in spices, cloth and other goods, and it paid dividends to its investors for almost two hundred years."
  },
  {
    title: "The Landlord's Game",
    topic: "Economics",
    text: "The board game Monopoly has an unexpected history. Its ancestor was The Landlord's Game, which an American woman named Elizabeth Magie patented in 1904. She wanted to show how owning land could make some people rich while their tenants grew poorer. Her game had two sets of rules, one in which everyone gained and one in which only the biggest landowner won. In 1935, the company Parker Brothers began selling Monopoly, which grew out of versions of her game."
  },
  {
    title: "Comparative Advantage",
    topic: "Trade",
    text: "In 1817, the English economist David Ricardo explained why countries gain from trade even when one country is better at making everything. His famous example used wine from Portugal and cloth from England. Even if Portugal could make both goods more cheaply, it still pays for each country to focus on what it makes relatively best and then trade. This idea is called comparative advantage. It is the same reason a top lawyer might hire an assistant to type letters, even if the lawyer types faster."
  },
  {
    title: "The Big Mac Index",
    topic: "Currencies",
    text: "In 1986, the magazine The Economist invented a light-hearted way to check whether currencies are priced fairly. It compares the price of a Big Mac burger in different countries. The burger is made in almost the same way everywhere, so if it costs much more in one country, that country's currency may be overvalued. The idea is based on a theory called purchasing power parity. It was meant as a joke, but it became so popular that economists now study it seriously."
  },
  {
    title: "The Concorde Trap",
    topic: "Behavioural economics",
    text: "The Concorde was a supersonic passenger jet built by Britain and France. Early on, it became clear that it would cost far more than planned and might never earn back its costs. Yet both governments kept paying, because they had already spent so much. Economists now call this mistake the sunk cost fallacy, and sometimes the Concorde effect. The lesson is simple: money already spent is gone, so a good decision should look only at future costs and benefits. The jet flew until 2003."
  },
  {
    title: "Why Two Percent?",
    topic: "Inflation",
    text: "Many central banks, such as those in the United States and the euro area, aim for inflation of about two percent a year. This habit began in New Zealand, which in 1990 became the first country to give its central bank a formal inflation target. Some inflation is thought to be healthy, because it encourages people to spend and invest rather than hold cash, and it leaves room to cut interest rates when the economy is weak. Zero inflation can be risky, since falling prices may cause people to delay spending."
  },
  {
    title: "The End of the Gold Standard",
    topic: "History of money",
    text: "For much of the twentieth century, the US dollar was linked to gold. Under the Bretton Woods system, created in 1944, other countries fixed their currencies to the dollar, and the United States promised to exchange dollars for gold at 35 dollars an ounce. By 1971, however, more dollars were in circulation than the gold the US held could cover. In August of that year, President Richard Nixon suspended the exchange of dollars for gold. Since then, major currencies have not been backed by gold."
  },
  {
    title: "The Father of Accounting",
    topic: "Business history",
    text: "In 1494, an Italian monk and mathematician named Luca Pacioli published a book that explained double-entry bookkeeping. Merchants in Venice had already used the method for years. Every transaction is recorded twice, once as a debit in one account and once as a credit in another, so the totals must always match. If they do not, there is a mistake somewhere. Because of his book, Pacioli is often called the father of accounting, and the method is still used by almost every company today."
  }
];
