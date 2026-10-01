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
  },
  {
    title: "Tit for Tat",
    topic: "Game theory",
    text: "In 1980, the political scientist Robert Axelrod invited experts to submit computer programs for a tournament based on the prisoner's dilemma, played again and again. The winner was the simplest entry, called Tit for Tat, sent in by Anatol Rapoport. It cooperated on the first move and then simply copied whatever the other player had done on the previous move. The result showed that being friendly, but also firm, can be a successful strategy when people expect to meet again."
  },
  {
    title: "The Anchor",
    topic: "Behavioural economics",
    text: "In 1974, the psychologists Daniel Kahneman and Amos Tversky spun a wheel of fortune in front of volunteers. The wheel was secretly arranged to stop on either ten or sixty five. Then they asked each person to guess what percentage of African countries are members of the United Nations. People who had seen the higher number gave much higher guesses. This effect, called anchoring, shows that even a random number can influence our judgement."
  },
  {
    title: "From Looms to Cars",
    topic: "Company stories",
    text: "Toyota began as a company that made weaving machines. In 1926, Sakichi Toyoda founded Toyoda Automatic Loom Works, and his machines were famous for stopping automatically when a thread broke. His son Kiichiro later started a car department, which became a separate company in 1937. The new name, Toyota, is said to have been chosen because it was easier to pronounce and looked luckier when written in Japanese. The idea of stopping work at the first sign of a problem is still part of the company's famous production system."
  },
  {
    title: "The First Scanned Item",
    topic: "Business history",
    text: "On the twenty sixth of June 1974, a cashier at a supermarket in Troy, Ohio, scanned a pack of chewing gum, and the till beeped. It was the first time a product had been sold using a barcode. The idea had been developed over several years, and it made shops faster and helped them to track their stock. The pack of Wrigley's Juicy Fruit gum is now kept in a museum in Washington, as an object of historic importance."
  },
  {
    title: "Black Monday",
    topic: "Markets and stocks",
    text: "On the nineteenth of October 1987, stock markets around the world fell dramatically. In New York, the Dow Jones index dropped by more than twenty two percent in a single day, the largest one day percentage fall in its history. Nobody has found a single cause. Computer driven trading programs and panic selling are among the explanations. The market recovered over the following years, and central banks learned to act quickly in later crises."
  },
  {
    title: "Two Steves and a Garage",
    topic: "Company stories",
    text: "Apple was founded on the first of April 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne. Their first product was the Apple I, a computer that Wozniak had designed and that was sold as a circuit board, without a case, keyboard or screen. Wayne drew the first logo and wrote the partnership agreement, but he sold his ten percent share back to the others in less than two weeks, for eight hundred dollars. The company went on to become one of the most valuable in the world."
  },
  {
    title: "The Market for Lemons",
    topic: "Supply and demand",
    text: "In 1970, the economist George Akerlof wrote a paper about used cars, which Americans call lemons when they are faulty. A seller knows the true condition of the car, but a buyer does not. Because buyers cannot tell good cars from bad ones, they offer only an average price. That price is too low for the owners of good cars, who then take them off the market. Akerlof received a Nobel Prize in 2001 for showing how such uncertainty can damage a market."
  },
  {
    title: "The Pin Factory",
    topic: "Economics",
    text: "In 1776, Adam Smith began his book The Wealth of Nations with a story about a pin factory. He wrote that a worker doing every job alone could hardly make twenty pins in a day. But when the work was divided into about eighteen small tasks, ten workers could make some forty eight thousand pins daily. This idea, called the division of labour, explains why specialisation makes people and nations more productive than they would be if everyone tried to do everything."
  },
  {
    title: "The Decoy",
    topic: "Behavioural economics",
    text: "The psychologist Dan Ariely described a subscription offer that The Economist once made. Web only cost fifty nine dollars, print only cost one hundred twenty five, and print plus web also cost one hundred twenty five. Nobody should choose print only, since the bundle has the same price and includes more. Yet when students saw all three options, most picked the bundle. When the print only option was removed, many more chose the cheaper web subscription. The decoy changed the choice without ever being chosen."
  },
  {
    title: "The Buttonwood Agreement",
    topic: "Business history",
    text: "In 1792, twenty four stockbrokers met on Wall Street in New York and signed an agreement known as the Buttonwood Agreement. They promised to trade shares only with each other and to charge fixed commissions. The name comes from a buttonwood tree that, according to tradition, stood nearby. This small agreement is regarded as the start of the New York Stock Exchange, which is now one of the biggest markets in the world."
  },
  {
    title: "The Name Amazon",
    topic: "Company stories",
    text: "Amazon was founded in 1994 by Jeff Bezos, who left a job on Wall Street to start an online business in Washington state. He first called it Cadabra, as in abracadabra, but changed the name after a lawyer misheard it as cadaver. He chose Amazon, after the biggest river in the world, to suggest enormous size. The website began selling books in 1995, and the company has since grown to sell almost everything, from groceries to computing services for other businesses."
  },
  {
    title: "A Coffee House Called Lloyd's",
    topic: "Business history",
    text: "In about 1688, Edward Lloyd opened a coffee house near the River Thames in London. It became popular with sailors, merchants and ship owners, who shared news about voyages. Some of them began to agree, over a cup of coffee, to insure ships and their cargoes against loss. Over time, this informal group became Lloyd's of London, one of the best known insurance markets in the world. It still carries the name of a man who simply sold coffee."
  },
  {
    title: "The Price Freeze of 1971",
    topic: "Inflation",
    text: "In August 1971, American President Richard Nixon surprised the country by freezing wages and prices for ninety days. He hoped to stop inflation without raising unemployment. At first, the policy was popular, and prices stabilised. But when the controls were loosened, prices jumped, and shortages appeared in some markets. Most economists now believe that price controls tend to hide inflation for a while rather than cure it, because the underlying causes of rising prices remain in place."
  },
  {
    title: "Credit Scores",
    topic: "Banking and finance",
    text: "When you ask for a loan, a lender wants to know whether you will pay it back. Since 1989, many American lenders have used a score created by the company Fair Isaac, known as the FICO score. It is a number between three hundred and eight hundred fifty that summarises your history of borrowing and repaying. A higher number means a lower risk. The score lets banks decide in minutes, instead of studying each person's life."
  },
  {
    title: "Made in Germany",
    topic: "Trade",
    text: "In 1887, Britain passed a law requiring foreign goods to carry a mark showing where they were made. The aim was to help British customers to spot cheap German products, which were often poorly made at the time. The label Made in Germany was meant as a warning. Within a few decades, however, German factories were producing excellent goods, and the same words became a sign of quality. The story shows how a label can completely change its meaning."
  },
  {
    title: "The Brothers and the Salesman",
    topic: "Company stories",
    text: "Richard and Maurice McDonald opened a small restaurant in California in 1940. In 1948, they redesigned it as a fast kitchen with a short menu, using a system in which every worker did one simple task. A milkshake machine salesman, Ray Kroc, was amazed by the speed and began selling franchises for the brothers in 1955. In 1961, he bought the company from them for 2.7 million dollars, and he built it into the biggest restaurant chain in the world."
  },
  {
    title: "The Penny Black",
    topic: "Business history",
    text: "In 1840, Britain introduced the world's first adhesive postage stamp, the Penny Black. Before then, the person who received a letter usually paid for it, and the price depended on the distance. Rowland Hill, a reformer, argued that the sender should pay a low fixed price. The stamp showed a portrait of Queen Victoria. Mail grew quickly once postage was cheap, and many other countries soon copied the idea."
  },
  {
    title: "Menu Costs",
    topic: "Inflation",
    text: "Economists use the term menu costs for the small expenses that firms pay whenever they change their prices. The name comes from restaurants, which have to print new menus. Other businesses must update price tags, catalogues and websites. Because of these costs, many firms avoid changing prices too often, even when their own costs have moved. This is one reason why prices in the economy do not adjust instantly, and why inflation can take time to spread from one part of the economy to another."
  },
  {
    title: "A Diamond Is Forever",
    topic: "Marketing",
    text: "Diamonds are not as rare as many people think. For much of the twentieth century, the company De Beers controlled most of the world's supply and carefully limited how many stones reached the market, which kept prices high. In 1947, it also launched the advertising slogan A diamond is forever, which linked diamond rings with lasting love. The campaign was so successful that giving a diamond ring became a standard custom in many countries."
  },
  {
    title: "Elastic and Inelastic",
    topic: "Supply and demand",
    text: "Economists use the word elasticity to describe how much demand changes when the price changes. Salt is a good example of inelastic demand: if the price doubled, most people would still buy about the same amount, because it is cheap and has no easy substitute. A particular brand of cereal is different. If its price rises, many shoppers will simply choose another brand. Businesses study elasticity to decide whether raising a price will bring in more money or less."
  },
  {
    title: "A Tax for War",
    topic: "Taxes and government",
    text: "Income tax was first introduced in Britain in 1799 by Prime Minister William Pitt the Younger, who needed money to pay for the war against Napoleon's France. It was meant to be a temporary measure, and it was cancelled when the war ended in 1816. It was brought back in 1842, and it has been part of British life ever since. Many countries followed, and today income tax is one of the largest sources of government money."
  },
  {
    title: "From a Garage to a Googol",
    topic: "Company stories",
    text: "Google was started in 1998 by two students, Larry Page and Sergey Brin, who had met at Stanford University. The name comes from googol, the mathematical term for a one followed by a hundred zeros. It reflected their goal of organising an enormous amount of information. The company's first office was a rented garage in Menlo Park, California. Its success came from a clever idea: ranking web pages by how many other pages link to them."
  },
  {
    title: "Loans for the Poorest",
    topic: "Banking and finance",
    text: "In 1976, the economist Muhammad Yunus lent twenty seven dollars from his own pocket to a group of villagers in Bangladesh. Banks had refused to lend to poor people, but Yunus found that they paid back their small loans very reliably. He founded the Grameen Bank, which made tiny loans, mostly to women, so that they could start small businesses. The idea, called microfinance, spread around the world, and Yunus won the Nobel Peace Prize in 2006."
  },
  {
    title: "The Suez Shortcut",
    topic: "Trade",
    text: "The Suez Canal opened in 1869, linking the Mediterranean Sea to the Red Sea across Egypt. Before that, ships sailing from Europe to Asia had to travel around Africa. The new route saved thousands of miles and made trade with India and East Asia faster and cheaper. It was built by a French company led by Ferdinand de Lesseps. In 2021, a single ship got stuck there and blocked the canal for nearly a week, which disrupted shipping around the world."
  },
  {
    title: "A Broken Laser Pointer",
    topic: "Technology and business",
    text: "Pierre Omidyar, a programmer, started an auction website in 1995, which later became eBay. The first item sold was a broken laser pointer, which fetched fourteen dollars and eighty three cents. Omidyar wrote to the buyer to check that he understood that it was broken. The buyer replied that he collected broken laser pointers. The story is a reminder that almost anything can find a buyer when enough people can see it."
  },
  {
    title: "Ice Cream on the Beach",
    topic: "Game theory",
    text: "In 1929, the economist Harold Hotelling asked a simple question: where should two ice cream sellers place their stands on a long beach? Customers would be best served if the sellers stood a quarter and three quarters of the way along. But each seller gains by moving towards the middle to take more customers. In the end, both stand side by side in the centre. The idea helps to explain why rival shops, and even political parties, often look so similar."
  },
  {
    title: "The Gini Coefficient",
    topic: "Economics",
    text: "In 1912, the Italian statistician Corrado Gini suggested a single number to describe how unequally income is shared in a country. The Gini coefficient runs from zero to one. If everybody earned exactly the same, it would be zero. If one person earned everything, it would be one. Countries in northern Europe tend to have lower values, while some countries in Africa and Latin America have higher ones. The number is easy to compare but hides many details."
  },
  {
    title: "The Original Dow Twelve",
    topic: "Markets and stocks",
    text: "In 1896, the journalist Charles Dow created an index of twelve American companies to show how the stock market was doing. The Dow Jones Industrial Average has been updated many times since. It now lists thirty companies, which are chosen by a committee. General Electric, one of the original twelve, was the last of them still in the index when it was removed in 2018. The list shows how the economy changes, as companies rise, fall, merge and vanish."
  },
  {
    title: "The Dried Fish Exporter",
    topic: "Company stories",
    text: "Samsung is now famous for phones, televisions and computer chips, but it started very differently. In 1938, Lee Byung-chul founded a small trading company in the Korean city of Daegu. It exported dried fish, fruit and vegetables to China, and it also made noodles. The word Samsung means three stars in Korean. Over the next decades, the company moved into sugar, textiles and insurance, and in 1969 it began to make electronics."
  },
  {
    title: "Losses Hurt More",
    topic: "Behavioural economics",
    text: "Studies by Daniel Kahneman and Amos Tversky found that people dislike losing something roughly twice as much as they enjoy gaining something of the same value. This is called loss aversion. It explains why many people refuse a coin toss in which they could lose one hundred dollars, unless they could win about two hundred. Kahneman received the Nobel Prize in Economics in 2002. Tversky had died in 1996, and the prize is not given after death."
  },
  {
    title: "The Theory of Games",
    topic: "Game theory",
    text: "The mathematician John von Neumann and the economist Oskar Morgenstern published a book called Theory of Games and Economic Behavior in 1944. They showed that many economic situations can be studied as games, in which each person's best choice depends on what the others choose. At first, the book was difficult and had limited influence. Over the following decades, however, game theory spread through economics, politics and biology, and it now has several Nobel Prizes to its name."
  },
  {
    title: "The Dot-Com Bubble",
    topic: "Markets and stocks",
    text: "In the late 1990s, investors rushed to buy shares in internet companies, many of which had never made a profit. The Nasdaq index, which is full of technology firms, peaked in March 2000. Then it began to fall, and by October 2002, it had lost about three quarters of its value. Many internet companies disappeared, but some survived and became giants, such as Amazon. The episode is remembered as an example of a speculative bubble."
  },
  {
    title: "Too Many Jams",
    topic: "Behavioural economics",
    text: "In a famous experiment in 2000, researchers set up a tasting table in a supermarket. On some days, it displayed twenty four kinds of jam, and on others only six. The large display attracted more people, but those who saw the smaller one were much more likely to buy a jar. Some psychologists call this the paradox of choice. Later studies found mixed results, but the idea remains popular, because too many choices can sometimes feel overwhelming."
  },
  {
    title: "Shells as Money",
    topic: "History of money",
    text: "Long before coins existed, many societies used shells as money. Cowrie shells, which come from warm ocean waters, were used for thousands of years in parts of Africa, Asia and the Pacific. They were small, hard to forge and easy to count, which are all useful qualities in a currency. In ancient China, the written symbol for a shell became part of many words connected with value, such as buying and selling. In parts of West Africa, cowries were still used for trade well into the nineteenth century."
  },
  {
    title: "Insuring Your Savings",
    topic: "Banking and finance",
    text: "In the early 1930s, thousands of American banks failed, and people who lost their savings never got them back. In response, Congress created the Federal Deposit Insurance Corporation in 1933, and it began insuring deposits in 1934. If an insured bank failed, savers would get their money back up to a limit. Bank runs became far less common, because customers no longer needed to rush to withdraw cash at the first rumour of trouble."
  },
  {
    title: "Repealing the Corn Laws",
    topic: "Trade",
    text: "For decades, Britain taxed imported grain, which kept bread expensive and protected landowners. In 1846, Prime Minister Robert Peel persuaded Parliament to repeal the Corn Laws, despite fierce opposition in his own party. Campaigners for free trade, such as Richard Cobden, had argued that cheap food would help workers and manufacturers. The repeal is often seen as the moment Britain committed to free trade, which it supported for most of the next eighty years."
  },
  {
    title: "Surge Pricing",
    topic: "Supply and demand",
    text: "Ride-hailing apps such as Uber raise their prices when many people want a ride at the same time, a practice called surge pricing. The higher price does two things. It encourages more drivers to head to the busy area, which increases supply, and it persuades some passengers to wait or choose another way to travel, which reduces demand. Many riders dislike the higher fares, but economists point out that the price rise helps the market to find a balance."
  },
  {
    title: "Madam C. J. Walker",
    topic: "Entrepreneurs",
    text: "Madam C. J. Walker was born Sarah Breedlove in 1867 in Louisiana, to parents who had been enslaved. She worked as a washerwoman before she developed hair care products for Black women. She sold them door to door, trained thousands of saleswomen and built a large company. She is widely described as one of the first American women to become a self made millionaire. She also gave generously to schools and charities."
  },
  {
    title: "Tellers and Machines",
    topic: "Labour and work",
    text: "When cash machines spread in the United States from the 1970s, many people predicted that bank tellers would vanish. In fact, the number of tellers continued to rise for several decades. Cash machines made each branch cheaper to run, so banks opened more branches, and tellers shifted from counting cash to selling services. The example is used by economists to show that technology often changes jobs rather than simply destroying them."
  },
  {
    title: "Why Airlines Overbook",
    topic: "Everyday economics",
    text: "Airlines often sell more seats than the plane really has. They do this because on most flights, a few passengers do not turn up, and an empty seat earns nothing. If too many passengers do arrive, the airline offers money or a later flight to volunteers who give up their seats. Using past data, airlines calculate how many extra tickets they can sell. When the calculation is right, everyone gains, but it can be annoying when it goes wrong."
  },
  {
    title: "The Machine That Ran on Water",
    topic: "Economics",
    text: "In 1949, the economist Bill Phillips built a strange machine at the London School of Economics to show how an economy works. It used pipes, tanks and coloured water to represent money flowing between businesses, households and the government. If you changed taxes, the water levels rose or fell. About a dozen of these machines were built, and some were used in universities and central banks. One is still on display at the Science Museum in London."
  },
  {
    title: "The Moving Assembly Line",
    topic: "Business history",
    text: "In 1913, Henry Ford's factory in Michigan introduced a moving assembly line for making cars. Instead of workers walking around a stationary car, the car moved past workers who each did one small task. The time needed to build a Model T chassis fell from more than twelve hours to about an hour and a half. Lower costs let Ford cut prices, and the Model T became affordable for millions of families."
  },
  {
    title: "The First Spam",
    topic: "Technology and business",
    text: "In May 1978, a marketing manager at the Digital Equipment Corporation, Gary Thuerk, sent an advertisement to several hundred users of an early computer network, the ARPANET. Many of them were angry, and the network's managers complained. Yet the company reportedly made some sales. It is generally regarded as the first spam email. Today, a large share of all email that is sent is junk, which is why filters are needed."
  },
  {
    title: "The Beard Tax",
    topic: "Taxes and government",
    text: "In 1698, the Russian tsar Peter the Great introduced a tax on beards. He had visited Western Europe, where men were mostly clean shaven, and he wanted Russia to look modern. Men who kept their beards had to pay and carry a small token to prove it. The tax was a way to raise money and to change fashion at the same time. It lasted for many decades."
  },
  {
    title: "Why Savings Lose Value",
    topic: "Inflation",
    text: "Inflation quietly reduces the value of money that sits in a drawer. A handy trick called the rule of seventy two can show how quickly. Divide seventy two by the inflation rate, and you get the approximate number of years it takes for the buying power of money to halve. At three percent inflation, that takes about twenty four years. At nine percent, it takes only eight. This is why savers look for interest rates that are higher than the rate of inflation."
  },
  {
    title: "The Broken Window",
    topic: "Opportunity cost",
    text: "In 1850, the French writer Frederic Bastiat told a story about a boy who breaks a shopkeeper's window. Some people say it is good news, because the glass maker will earn money by fixing it. Bastiat answered that the shopkeeper would have spent the same money on something else, such as new shoes. We see the glass maker's work, but we do not see what was lost. This is called the broken window fallacy, and it is a lesson in opportunity cost."
  },
  {
    title: "The Glue That Did Not Stick",
    topic: "Company stories",
    text: "In 1968, a scientist at the company 3M, Spencer Silver, was trying to develop a very strong glue. Instead, he made one that was weak and could be peeled off easily. For years, nobody knew what to do with it. In 1974, his colleague Art Fry, annoyed that paper bookmarks kept falling out of his hymn book, remembered the glue. Post-it Notes went on sale across the United States in 1980, and they are now sold in almost every country."
  },
  {
    title: "The Textbook",
    topic: "Famous economists",
    text: "In 1948, the American economist Paul Samuelson published a textbook simply called Economics. It was written for university students, but it became so popular that it was translated into dozens of languages and sold millions of copies over many editions. Generations of students learned the subject from it. Samuelson himself won the Nobel Prize in 1970, and he was the first American to receive the economics prize."
  },
  {
    title: "The Shrinking Denarius",
    topic: "History of money",
    text: "The denarius was the main Roman silver coin, and for a long time it was almost pure silver. In 64 AD, the emperor Nero reduced the amount of silver in it, so that the empire could make more coins from the same metal. Later emperors did the same, again and again. By the third century, the denarius contained only a small amount of silver, and prices across the empire rose sharply. Historians often see this as an early example of how a government can damage its own currency."
  },
  {
    title: "The Biggest Flop",
    topic: "Marketing",
    text: "In April 1985, the Coca-Cola Company replaced its famous drink with a sweeter recipe called New Coke. Taste tests had shown that people liked it. But when customers learned that the original was gone, they were furious, and the company received thousands of angry calls and letters. After just seventy nine days, the old recipe came back as Coca-Cola Classic. Many people now see the story as a lesson that a brand matters as much as taste."
  },
  {
    title: "Fifty-Seven Varieties",
    topic: "Entrepreneurs",
    text: "Henry John Heinz, who founded the food company Heinz, started using the slogan 57 varieties in 1896. In fact, the company already sold more than sixty products at the time. Heinz chose the number fifty seven because he thought it looked lucky and would stick in people's minds. The number is still printed on the company's ketchup bottles today, more than a century later, which shows how powerful a simple, memorable number can be."
  },
  {
    title: "Cutting the Corner",
    topic: "Trade",
    text: "Before the Panama Canal opened in 1914, a ship travelling from New York to San Francisco had to sail all the way around the southern tip of South America. The canal shortened that voyage by about eight thousand miles. It took ten years to build and cost many lives, but it changed world trade by cutting the time and the cost of moving goods between the Atlantic and Pacific oceans."
  },
  {
    title: "The Bag Tax",
    topic: "Taxes and government",
    text: "In 2002, Ireland introduced a charge of fifteen cents on every plastic shopping bag. Shoppers were not forbidden to use them, but they now had to pay. Within a few months, bag use fell by more than ninety percent, and people started bringing their own. The charge was a simple example of using prices to change behaviour. Many other countries later made similar rules, and Ireland later raised the charge."
  },
  {
    title: "The Dollar Auction",
    topic: "Game theory",
    text: "In 1971, the economist Martin Shubik invented a simple game. A dollar is sold to the highest bidder, but the second highest bidder must also pay what they offered, and they get nothing. Bidding often rises past one dollar, because each person wants to avoid being the loser. Players can end up paying far more than the prize is worth. The game is used to explain how arms races, price wars and other conflicts can get out of control."
  },
  {
    title: "The Nobel Prize in Economics",
    topic: "Economics",
    text: "Alfred Nobel did not create a prize for economics. It was added in 1968, when the Swedish central bank gave money to create the Prize in Economic Sciences in Memory of Alfred Nobel. It was first awarded in 1969 to Ragnar Frisch and Jan Tinbergen. Since then, it has gone to economists who studied topics such as markets, poverty, trade and the way people make decisions, and it is announced every October."
  },
  {
    title: "Guns or Butter",
    topic: "Opportunity cost",
    text: "Economists often illustrate scarcity with a choice between guns and butter. A country with limited workers and materials can produce military equipment, or it can produce consumer goods, or some mix of the two. Each extra gun means less butter. The line showing all possible combinations is called the production possibilities frontier. It shows that choices are never free: more of one good always costs some of another. The same idea applies to a family deciding how to spend a monthly budget."
  },
  {
    title: "Limited Liability",
    topic: "Business history",
    text: "Until the middle of the nineteenth century, people who invested in a company in Britain could lose everything they owned if it failed. In 1855, Parliament passed a law that limited the risk of shareholders to the money they had invested. This made investing much less frightening, and ordinary people began to buy shares in new businesses such as railways and factories. Many historians think that limited liability was one of the key ideas that powered modern capitalism."
  },
  {
    title: "Plastic Money",
    topic: "History of money",
    text: "The first general-purpose charge card was the Diners Club card, which appeared in New York in 1950. At first, it was accepted by only a small number of restaurants, and its early members numbered only a few hundred. Customers paid the bill later, and the company earned a fee from each restaurant. In the following decades, banks created cards that let people borrow as well as pay. Today, billions of cards are in use, although in many countries cash is used less than ever."
  },
  {
    title: "The Hammer Thrower",
    topic: "Marketing",
    text: "On the twenty second of January 1984, during the Super Bowl broadcast, viewers saw an advertisement for the Apple Macintosh computer. It showed a young woman running into a dull hall and throwing a hammer at a giant screen. It was directed by Ridley Scott, who also made the film Blade Runner, and it was shown only once on national television. The commercial is still remembered as one of the greatest of all time."
  },
  {
    title: "The Camera That Beat Its Maker",
    topic: "Technology and business",
    text: "In 1975, a young engineer at Kodak, Steven Sasson, built the first digital camera. It weighed about eight pounds, took twenty three seconds to record a black and white picture, and saved it on a cassette tape. Kodak's managers worried that digital photos would harm its profitable film business, so the company moved slowly. Other firms took over the market, and Kodak went bankrupt in 2012. It is a classic case of a company that invented its own challenger."
  },
  {
    title: "The Youngest Winner",
    topic: "Famous economists",
    text: "Kenneth Arrow won the Nobel Prize in Economics in 1972, when he was fifty one years old, which still makes him the youngest person ever to win it. Among other work, he showed that there is no perfect way to turn everyone's preferences into one group decision, a result known as Arrow's impossibility theorem. It helps to explain why voting systems are always imperfect. He lived until 2017, and he stayed active in research for most of his life."
  },
  {
    title: "The Euro Arrives",
    topic: "Currencies",
    text: "The euro was launched in 1999 as an accounting currency, used by banks and in electronic payments. On the first of January 2002, euro notes and coins reached the public in twelve European countries. People had to swap their old money, and shop prices were shown in two currencies for a while. The euro is now used by about twenty countries, and it is one of the most widely used currencies in the world."
  },
  {
    title: "The Value of Waiting",
    topic: "Everyday economics",
    text: "Would you prefer a hundred dollars today or a hundred and ten dollars in a year? Most people take the money now, even though waiting would pay ten percent. Economists call this time preference. Money today can be spent, saved or invested, and the future is uncertain. This is also why banks pay interest on savings: it is a reward for waiting, and a price for borrowing."
  },
  {
    title: "Play Well",
    topic: "Company stories",
    text: "The Danish carpenter Ole Kirk Christiansen began making wooden toys in 1932 in the small town of Billund. In 1934, he called his company Lego, from the Danish words leg godt, which mean play well. He began making plastic bricks in 1949, and in 1958 the company patented the design with tubes inside that lets bricks clip together firmly. Bricks made then still fit with bricks made today, which is one reason why the toy has been so popular for so long."
  },
  {
    title: "The Oil Cartel",
    topic: "Supply and demand",
    text: "OPEC, the Organization of the Petroleum Exporting Countries, was founded in Baghdad in 1960 by five countries: Iran, Iraq, Kuwait, Saudi Arabia and Venezuela. Its members wanted to coordinate their oil policies and gain more control over prices. By agreeing how much oil each member would produce, the group can influence supply. Because oil is so important to the world economy, a decision made by OPEC ministers can change the price of fuel in almost every country."
  },
  {
    title: "Bogle's Folly",
    topic: "Banking and finance",
    text: "In 1976, the investor John Bogle launched the first index fund for ordinary savers. Instead of paying experts to choose shares, the fund simply bought a small piece of every company in a big index and charged very low fees. Many people in finance laughed at the idea and called it Bogle's Folly. But over time, index funds beat most expert managed funds, and today they hold trillions of dollars."
  },
  {
    title: "The Shopping Basket",
    topic: "Inflation",
    text: "How do we measure inflation? Statisticians choose a basket of goods and services that typical households buy, such as bread, rent, petrol and haircuts. Then they record the prices every month. If the same basket costs three percent more than it did a year ago, the annual rate of inflation is three percent. The basket is updated from time to time, because people change what they buy. Hardly anybody buys film for cameras anymore, but streaming services have joined the list."
  },
  {
    title: "Breaking the Looms",
    topic: "Labour and work",
    text: "In 1811, groups of English textile workers began to smash the machines that were taking their jobs. They were called Luddites, after a legendary figure named Ned Ludd. They did not hate technology itself. They were angry because factory owners used machines to cut wages and to hire unskilled workers. The government sent thousands of soldiers to stop them. Today, the word Luddite describes anyone who resists new technology."
  },
  {
    title: "Monkeys and Darts",
    topic: "Markets and stocks",
    text: "In his 1973 book A Random Walk Down Wall Street, the economist Burton Malkiel argued that a blindfolded monkey throwing darts at a list of shares could do as well as expert investors. He did not mean it literally. His point was that share prices already reflect the available information, so beating the market consistently is extremely hard. His book helped to make index investing popular with ordinary savers."
  },
  {
    title: "Why Prices End in Ninety Nine",
    topic: "Behavioural economics",
    text: "Many shops set prices such as 9.99 instead of 10. Customers know that it is only one cent less, yet it seems to be noticeably cheaper. Researchers believe that people tend to focus on the first digit they read, so 9.99 is felt as nine dollars and something, rather than almost ten. This is called charm pricing. It costs sellers nothing to use, and it has been popular for more than a century."
  },
  {
    title: "A Farm and a Village",
    topic: "Company stories",
    text: "IKEA was founded in 1943 by Ingvar Kamprad, who was only seventeen years old. He started by selling pens, wallets and picture frames by mail from his family's farm in Sweden. The name combines his initials, I and K, with the first letters of Elmtaryd, the farm, and Agunnaryd, the nearby village. The company became famous for flat packages that customers carry home and build themselves, which saves money on transport and storage and keeps the prices low."
  },
  {
    title: "The Hanseatic League",
    topic: "Trade",
    text: "In the Middle Ages, merchants from northern German cities such as Lubeck and Hamburg formed an alliance known as the Hanseatic League. They agreed to protect each other's ships, share market privileges and fight pirates. At its peak, the League controlled much of the trade in the Baltic and North Sea, selling timber, fish, grain and furs. It lasted for hundreds of years, and the old word Hansa still appears in the names of some cities and airlines."
  },
  {
    title: "Starting With Five Thousand Dollars",
    topic: "Entrepreneurs",
    text: "In 2000, Sara Blakely used five thousand dollars of her own savings to start a company. She had cut the feet off a pair of tights to wear under white trousers, and she realised that other women might want something similar. She wrote her own patent application and visited shops to explain her product, which she called Spanx. In 2012, a business magazine named her the youngest self made female billionaire."
  },
  {
    title: "The Box That Changed Shipping",
    topic: "Business history",
    text: "Before the 1950s, cargo was loaded onto ships piece by piece, which was slow and expensive. In 1956, the American businessman Malcolm McLean sent a ship carrying fifty eight metal containers from New Jersey to Texas. Standard containers could be lifted by crane and moved directly onto trains and trucks. The cost of loading a ton of cargo fell dramatically, and global trade became much cheaper. Today, most manufactured goods travel around the world in containers."
  },
  {
    title: "The First Online Advert",
    topic: "Marketing",
    text: "In October 1994, the magazine HotWired put a small rectangular banner at the top of its website, with the words: have you ever clicked your mouse right here? You will. It was paid for by the telephone company AT&T and is widely seen as the first banner advertisement. A large share of the people who saw it clicked on it, which was new and exciting. Today, online advertising is worth hundreds of billions of dollars a year."
  },
  {
    title: "The Bank of the Medici",
    topic: "Banking and finance",
    text: "In 1397, Giovanni di Bicci de' Medici founded a bank in Florence, Italy. Over the next century, it grew into one of the most powerful banks in Europe, with branches in cities such as Rome, Venice, Geneva and London. The bank helped merchants and the Church to move money across borders using paper bills instead of heavy coins. The profits made the Medici family rich and influential, and they became patrons of artists and builders in Florence."
  },
  {
    title: "The Permanent Plateau",
    topic: "Famous economists",
    text: "In October 1929, the famous American economist Irving Fisher said that stock prices had reached what looked like a permanently high plateau. A few days later, the market crashed. Fisher lost much of his own fortune, and his reputation suffered. He later made important contributions to the study of debt and deflation. His story is a reminder that even the best experts can sometimes be badly wrong about the future."
  },
  {
    title: "Bitcoin Pizza Day",
    topic: "History of money",
    text: "Bitcoin was created in 2009 by a person or group using the name Satoshi Nakamoto. On the twenty second of May 2010, a programmer named Laszlo Hanyecz paid ten thousand bitcoins for two pizzas, which is often seen as the first real purchase made with the currency. At the time, those coins were worth about forty dollars. Years later, the same number of coins was worth hundreds of millions of dollars, and the day is now celebrated by fans as Bitcoin Pizza Day."
  },
  {
    title: "The Eighty Twenty Rule",
    topic: "Economics",
    text: "In 1896, the Italian economist Vilfredo Pareto noticed that about eighty percent of the land in Italy was owned by about twenty percent of the people. He found similar patterns in other countries. Later, managers noticed that a similar imbalance appears in business: roughly eighty percent of sales may come from twenty percent of customers. The pattern is not an exact law, but the Pareto principle reminds us that a few things often matter much more than the rest."
  },
  {
    title: "Giving Up the Currency",
    topic: "Currencies",
    text: "In 2000, Ecuador, a country in South America, replaced its own currency, the sucre, with the US dollar. The change followed a severe economic crisis in which prices rose sharply and the sucre lost much of its value. Adopting the dollar ended the rapid inflation, but the country gave up control of its own monetary policy. Ecuador is not alone: a few other countries, including Panama and El Salvador, also use the dollar."
  },
  {
    title: "Eight Hours for Everything",
    topic: "Labour and work",
    text: "In 1817, the Welsh social reformer Robert Owen came up with a slogan: eight hours labour, eight hours recreation, eight hours rest. At that time, many factory workers laboured for twelve hours or more, six days a week. Workers' movements around the world took up the demand for an eight hour day over the following century. It slowly became law in many countries, and it is the reason why a standard working day is what it is today."
  },
  {
    title: "The Tragedy of the Commons",
    topic: "Game theory",
    text: "In 1968, the biologist Garrett Hardin described a field that all villagers can use for grazing. Each farmer gains by adding one more cow, but when everyone does this, the grass disappears and everybody loses. This is called the tragedy of the commons. Later, the economist Elinor Ostrom showed that real communities often avoid the tragedy by making their own rules. In 2009, she became the first woman to win the Nobel Prize in Economics."
  },
  {
    title: "The Beauty Contest",
    topic: "Markets and stocks",
    text: "In 1936, John Maynard Keynes compared the stock market to a newspaper beauty contest. Readers had to choose the six prettiest faces from a hundred photographs, and the winner was the person whose choices matched the most popular ones. A clever contestant, Keynes said, would not pick the face he liked best, but the face that others would pick. Investors, too, often try to guess what other investors will do, instead of judging the real value of a company."
  },
  {
    title: "The Salt March",
    topic: "Taxes and government",
    text: "In 1930, the British government in India held a monopoly on salt, which meant that Indians had to buy it from the government and pay a tax, even though salt could be gathered from the sea. Mahatma Gandhi led a march of about two hundred forty miles to the coast at Dandi, and picked up a lump of natural salt as a protest. Thousands joined him. The protest drew world attention to the Indian independence movement."
  },
  {
    title: "Why Popcorn Costs So Much",
    topic: "Everyday economics",
    text: "A cinema ticket may cost ten dollars, but a small bucket of popcorn can cost nearly as much, even though it contains only a few cents of corn. Cinemas can charge such prices because customers who are already inside have few alternatives. Cinemas also keep a larger part of the money from snacks than from tickets, since much of the ticket price goes to the film studio. Snacks, therefore, are a major source of profit."
  },
  {
    title: "My Mug",
    topic: "Behavioural economics",
    text: "In a famous experiment, researchers gave coffee mugs to half of a group of students. They then asked the owners how much they would sell the mug for, and asked the others how much they would pay. The owners wanted roughly twice as much as the buyers were willing to pay. This is called the endowment effect: simply owning something makes us value it more. It helps to explain why people often hold on to things they would never buy again."
  },
  {
    title: "A Weekend Job",
    topic: "Opportunity cost",
    text: "Imagine a student who is offered a weekend job paying ten dollars an hour. If she works for eight hours, she earns eighty dollars. But the real cost of the job also includes what she gives up, such as time to study, rest or meet friends. If she values those things at more than eighty dollars, then taking the job is a poor choice, even though it earns money. Opportunity cost helps us to compare things that are hard to measure."
  },
  {
    title: "What Counts as Hyperinflation",
    topic: "Inflation",
    text: "Economists use the word hyperinflation for extreme cases of rising prices. The usual definition comes from the economist Phillip Cagan, who in 1956 suggested that hyperinflation begins when prices rise by more than fifty percent in a single month. At that rate, something that costs one dollar today would cost more than a hundred dollars in a year. Such cases are rare, but they have happened in many places, almost always when a government printed money to pay bills that it could not cover with taxes."
  },
  {
    title: "Moore's Law",
    topic: "Technology and business",
    text: "In 1965, Gordon Moore, who later helped to found Intel, noticed that the number of components on a computer chip was doubling every year. In 1975, he changed the forecast to a doubling about every two years. The prediction, known as Moore's law, held true for decades, which is why computers became smaller, faster and cheaper. Companies in the industry used it as a planning guide, and it became a kind of target that they set for themselves."
  },
  {
    title: "The Toilet Paper Panic",
    topic: "Supply and demand",
    text: "In March 2020, shoppers in many countries rushed to buy toilet paper as the pandemic began, and shelves emptied within hours. Factories were actually producing plenty of it. The problem was that demand suddenly jumped as people stocked up for weeks at home, and delivery systems could not keep pace. Once the panic ended, shops slowly refilled. The episode showed how fear can make demand rise faster than supply, even for the most ordinary products."
  },
  {
    title: "Who Invented VAT?",
    topic: "Taxes and government",
    text: "Value added tax, or VAT, is charged at each stage when goods are made and sold, but businesses can claim back what they paid earlier, so the tax finally falls on the customer. A French tax official, Maurice Laure, is credited with introducing it in 1954. It proved very effective at raising money and difficult to avoid. Today, more than one hundred sixty countries use VAT or a similar sales tax."
  },
  {
    title: "Europe's First Banknotes",
    topic: "History of money",
    text: "The first banknotes in Europe were issued in Sweden in 1661 by a private bank called Stockholms Banco. At that time, Sweden used heavy copper coins, and some of them were so large that carrying them around was a real burden. Paper notes that could be exchanged for coins were far easier to handle. The experiment ended badly, though. The bank printed more notes than it could pay out, and it collapsed a few years later. Its founder, Johan Palmstruch, was even sentenced to death, although he was later pardoned."
  },
  {
    title: "Work Fills the Time",
    topic: "Everyday economics",
    text: "In 1955, the British writer Cyril Northcote Parkinson published a humorous article in The Economist which began: work expands so as to fill the time available for its completion. He argued that officials create work for each other, and that organisations tend to grow whether or not there is more to do. Anyone who has spent a whole week on a task that could have taken two days will recognise the idea, which is now called Parkinson's law."
  },
  {
    title: "The Colonel",
    topic: "Entrepreneurs",
    text: "Harland Sanders began selling fried chicken to travellers at a petrol station in Corbin, Kentucky, in the 1930s. He later opened a motel and restaurant, but when a new highway took customers away, he had to close. In his early sixties, he started travelling the country to offer his recipe to other restaurants, in return for a payment on every chicken sold. That was the beginning of Kentucky Fried Chicken, which now has restaurants in more than a hundred countries."
  },
  {
    title: "The Cost of Holding Cash",
    topic: "Opportunity cost",
    text: "Keeping money in a drawer is not free. The opportunity cost of holding cash is the interest it could have earned in a savings account. When interest rates are high, the cost of holding cash is large, so people keep less of it at home. When rates are close to zero, the cost is small. The same logic explains why companies try to put their spare cash to work rather than leave it idle in a bank account."
  },
  {
    title: "Thirty-Five Dollars for a Swoosh",
    topic: "Company stories",
    text: "In 1964, the athlete Phil Knight and his coach Bill Bowerman founded a company called Blue Ribbon Sports to import running shoes from Japan. In 1971, they decided to make shoes under their own name and chose Nike, after the Greek goddess of victory. Knight asked a design student, Carolyn Davidson, to create a logo, and he paid her thirty five dollars. The curved shape, now called the Swoosh, is one of the best known symbols in the world."
  },
  {
    title: "A Toy With Your Burger",
    topic: "Marketing",
    text: "McDonald's launched the Happy Meal across the United States in 1979. It was a box that contained a burger, fries, a drink and a small toy, aimed at children. The idea came from a manager in Guatemala and an advertising executive in the United States, who had each developed similar ideas. Parents were pleased with the simple package, and children asked for it by name. The Happy Meal is now sold around the world."
  },
  {
    title: "The Tariff That Hurt Everyone",
    topic: "Trade",
    text: "In 1930, the United States passed the Smoot-Hawley Tariff Act, which raised taxes on more than twenty thousand imported goods. The aim was to protect American farmers and factories during the Great Depression. Other countries answered with tariffs of their own, and world trade fell sharply in the following years. Many economists believe that the law made the downturn worse. It is often used as a warning about what can happen when countries raise barriers to trade."
  },
  {
    title: "Why QWERTY?",
    topic: "Technology and business",
    text: "The keyboard layout we use today, with the letters QWERTY across the top row, comes from a typewriter designed by Christopher Latham Sholes in the 1870s. It was sold by the Remington company, which also made guns and sewing machines. It is often said that the letters were arranged to stop the typebars from jamming. Even though other layouts exist, QWERTY stayed, because millions of people had learned it, and changing would have been costly."
  },
  {
    title: "A Currency Tied to the Dollar",
    topic: "Currencies",
    text: "Since 1983, the Hong Kong dollar has been linked to the US dollar at a rate that is allowed to move only within a narrow range. The authorities defend the link by buying and selling currency, so one US dollar stays at about seven point eight Hong Kong dollars. A fixed rate gives traders certainty, but it also means that Hong Kong cannot set interest rates independently. The system has survived several financial crises."
  },
  {
    title: "The Ultimatum Game",
    topic: "Game theory",
    text: "In the ultimatum game, one player is given some money and must offer part of it to a second player. If the second player accepts, both keep their shares. If the second player refuses, nobody gets anything. A purely logical receiver should accept any offer above zero. In experiments around the world, however, people often reject offers that feel unfair, such as less than a fifth of the total. Fairness, it seems, matters as well as money."
  },
  {
    title: "The Invisible Hand",
    topic: "Economics",
    text: "The invisible hand is one of the most famous phrases in economics, and it is often linked to Adam Smith. Yet in The Wealth of Nations he used it only once. He argued that a merchant who pursues his own gain is often led, as if by an invisible hand, to help society, without having planned to do so. The baker bakes bread to earn a living, not out of kindness, and yet the town gets its bread."
  },
  {
    title: "Why Black Friday Is Called Black",
    topic: "Supply and demand",
    text: "The day after Thanksgiving in the United States is known as Black Friday, and shops offer large discounts. A popular story says that the name refers to retailers moving from losses, written in red ink, into profits, written in black. In fact, the name was used in the 1960s by police officers in Philadelphia, who dreaded the crowds and traffic on that day. Retailers later gave it a more cheerful meaning. Today, it is one of the busiest shopping days of the year."
  },
  {
    title: "The South Sea Bubble",
    topic: "Markets and stocks",
    text: "In 1720, the South Sea Company in Britain promised huge profits from trade with South America. Its share price rose several times over in a few months, as thousands of people rushed to invest. Then confidence collapsed, and the price crashed. Many people were ruined, including some wealthy and famous ones. Isaac Newton is reported to have lost a great deal of money. The story is still used as a warning about following the crowd."
  },
  {
    title: "Hunger Without Shortage",
    topic: "Famous economists",
    text: "The economist Amartya Sen won the Nobel Prize in 1998, partly for his study of famines. He argued that famines do not always happen because there is too little food. Sometimes the food is available, but some people cannot afford it, or have lost their jobs and income. His work on the Bengal famine of 1943 supported this view. It changed the way governments and aid agencies think about preventing hunger."
  },
  {
    title: "The First Cash Machine",
    topic: "Business history",
    text: "The first cash machine was installed outside a Barclays bank in Enfield, north London, on the twenty seventh of June 1967. It was invented by a team led by John Shepherd-Barron, who said that the idea came to him while he was in the bath. Customers used paper vouchers and a secret number, instead of a plastic card. A well known actor from a British television comedy withdrew the first banknotes. Today, millions of such machines exist around the world."
  },
  {
    title: "A Bank for a War",
    topic: "Banking and finance",
    text: "The Bank of England was founded in 1694, because the English government urgently needed money for a war with France. A group of merchants offered to lend the government one point two million pounds. In return, they were allowed to form a bank, which could issue notes. Over the next centuries, the Bank of England became the government's banker and finally the country's central bank, which sets interest rates and protects the stability of the financial system."
  },
  {
    title: "A Hundred Trillion Dollars",
    topic: "Inflation",
    text: "In 2009, the central bank of Zimbabwe issued a banknote worth one hundred trillion Zimbabwe dollars. That sounds like a fortune, but the note was worth very little in real terms. At the worst point, prices in the country were doubling roughly every day, and shops changed their prices several times a day. Eventually, Zimbabwe gave up its own currency, and people began to use US dollars and other foreign currencies instead. Today, the old notes are sold to collectors as souvenirs."
  },
  {
    title: "The Power of Defaults",
    topic: "Behavioural economics",
    text: "In Austria, almost everyone is counted as an organ donor, while in Germany only about twelve percent of people are. The two countries are similar in many ways. The difference lies in the default. In Austria, you are automatically a donor unless you opt out. In Germany, you become one only if you sign up. Because most people stick with the default option, this small change in the form has a huge effect on how many organs are available."
  },
  {
    title: "Ford and the Weekend",
    topic: "Labour and work",
    text: "In 1926, Henry Ford announced that his factories would operate five days a week, with forty hours of work, instead of six. Many other employers thought this was crazy. Ford believed that workers would be more productive when they were rested, and that people with free time would buy more cars and travel. Other companies slowly followed, and the two day weekend became a normal part of life in many countries."
  },
  {
    title: "The Window Tax",
    topic: "Taxes and government",
    text: "In 1696, England introduced a window tax. Houses with more windows paid more, because the government thought that windows showed wealth. Owners soon found a way to avoid it by blocking up windows with bricks, and some of those bricked up windows can still be seen on old buildings today. The tax was unpopular, and many people said that it taxed light and fresh air. It was finally abolished in 1851."
  },
  {
    title: "The Wheelbarrow of Marks",
    topic: "Inflation",
    text: "In 1923, Germany suffered one of history's most famous inflations. Prices rose so fast that people carried money in wheelbarrows and baskets to buy bread. Some workers were paid every day so that they could spend their wages before they lost value. In November 1923, one US dollar was worth around four trillion marks. The crisis ended when Germany introduced a new currency, the Rentenmark, which was strictly limited in quantity and was exchanged for one trillion of the old marks."
  },
  {
    title: "Twenty-Five Cents an Hour",
    topic: "Labour and work",
    text: "In 1938, the United States passed the Fair Labor Standards Act, which set the first national minimum wage at twenty five cents an hour. The law also limited the working week and required extra pay for overtime, and it restricted child labour. Supporters said it would protect workers from very low pay. Critics feared it would destroy jobs. Economists still argue about how large the effects of minimum wages really are."
  },
  {
    title: "Second Price Auctions",
    topic: "Game theory",
    text: "In a sealed bid auction, the highest bidder normally pays their own bid. In 1961, the economist William Vickrey studied a different rule: the highest bidder wins but pays only the second highest bid. Under this rule, the best strategy is simply to bid exactly what the item is worth to you, so nobody has to play guessing games. Vickrey won the Nobel Prize in 1996, and similar auctions are now used to sell advertising space on the internet."
  },
  {
    title: "Naming the Silk Road",
    topic: "Trade",
    text: "For centuries, merchants carried silk, spices and ideas between China and the Mediterranean along a network of overland routes. The routes began to flourish more than two thousand years ago. Yet the name Silk Road is quite new. It was coined in 1877 by a German geographer, Ferdinand von Richthofen. Traders rarely travelled the whole distance themselves. Goods passed from merchant to merchant, rising in price at every stage along the way."
  },
  {
    title: "The Pound's Long Life",
    topic: "History of money",
    text: "The British pound is often described as the oldest currency still in use. Its story begins more than a thousand years ago, when Anglo-Saxon kings made silver pennies, and a pound originally meant the value of one pound weight of silver. For centuries, one pound was divided into twenty shillings, and each shilling into twelve pence. That awkward system lasted until Decimal Day, on the fifteenth of February 1971, when the pound was divided into one hundred new pence instead."
  },
  {
    title: "Rent Control in New York",
    topic: "Supply and demand",
    text: "New York City introduced rent control in 1943, as a wartime measure to protect tenants from sharp increases. Many economists argue that holding rents below the market level can reduce the supply of apartments, because landlords have less reason to build or maintain them. Supporters reply that it protects families from being forced out of their neighbourhoods. The debate shows how a price limit can help some people while creating problems for others."
  },
  {
    title: "A Whaling Ship Coffee Chain",
    topic: "Company stories",
    text: "The first Starbucks opened in Seattle in 1971, and at first it sold only coffee beans and equipment, not drinks. The founders named it after Starbuck, a character in the novel Moby-Dick. The company grew slowly until Howard Schultz, who joined in 1982, was inspired by the coffee bars of Italy. He later bought the company and turned it into a place where people could sit and drink coffee. Today it has tens of thousands of shops around the world."
  },
  {
    title: "The Day of Two Noons",
    topic: "Business history",
    text: "Before 1883, every town in North America set its clocks by the sun, which made railway timetables a nightmare. On the eighteenth of November 1883, the railway companies introduced standard time zones. At noon, clocks in many cities were reset, so some people experienced two noons that day. The change was made by private companies, not by the government, and it became law only in 1918. It is a good example of business solving a problem before politicians did."
  },
  {
    title: "One Price for Everyone",
    topic: "Marketing",
    text: "In the nineteenth century, shopkeepers usually bargained with each customer, and the price depended on how rich the buyer looked. The American merchant John Wanamaker is often credited with introducing fixed prices with price tags in his Philadelphia store in the 1860s. Customers liked knowing that everybody paid the same, and it saved time. A shop that is sure of its prices can also train staff more easily. The practice quickly spread to other stores."
  },
  {
    title: "Time Is Money",
    topic: "Opportunity cost",
    text: "The saying that time is money is often connected with Benjamin Franklin, who wrote it in 1748 in an essay called Advice to a Young Tradesman. He pointed out that a worker who spends half a day relaxing has not really spent only the money on his pleasures, because he has also given up the wages he could have earned. In other words, Franklin described opportunity cost more than a century before economists gave it that name."
  },
  {
    title: "Five Thousand Prototypes",
    topic: "Entrepreneurs",
    text: "James Dyson was frustrated that his vacuum cleaner lost suction as its bag filled with dust. He had an idea for a machine that used spinning air, rather than a bag, to separate the dust. It took him five years and 5,127 prototypes to get it right. Big manufacturers were not interested, so he started his own company. His bagless vacuum cleaner went on sale in the 1990s, and it made him one of Britain's richest people."
  },
  {
    title: "A Boy and His Shares",
    topic: "Markets and stocks",
    text: "The famous investor Warren Buffett bought his first shares when he was only eleven years old. In 1942, he used his savings to buy shares in a company called Cities Service, paying about thirty eight dollars for each one. He later said that starting early was one of the best things he ever did. He went on to run the company Berkshire Hathaway, and he became one of the richest people in the world."
  },
  {
    title: "Black Wednesday",
    topic: "Currencies",
    text: "On the sixteenth of September 1992, the British government was forced to take the pound out of a European exchange rate system, after investors sold huge amounts of pounds. The government had raised interest rates twice in a single day in a failed attempt to defend the currency. The investor George Soros is said to have made about a billion dollars by betting against the pound. The day became known as Black Wednesday."
  },
  {
    title: "Measuring a Nation",
    topic: "Economics",
    text: "In the 1930s, the economist Simon Kuznets created the first national income accounts for the United States, which led to the figure we now call gross domestic product, or GDP. GDP adds up the value of everything produced in a country in a year. Kuznets himself warned that it should not be used as a measure of welfare. It leaves out housework, leisure and damage to the environment. Even so, it remains the most widely quoted measure of an economy."
  },
  {
    title: "The Day Lehman Fell",
    topic: "Banking and finance",
    text: "On the fifteenth of September 2008, the American investment bank Lehman Brothers filed for bankruptcy. It had been founded in 1850 and had survived the Great Depression and two world wars. But it had borrowed heavily and invested in mortgage related products that lost value. Its failure was the largest bankruptcy in American history, and it shook confidence in banks across the world, helping to trigger a global financial crisis."
  },
  {
    title: "Nudge",
    topic: "Behavioural economics",
    text: "In 2008, the economist Richard Thaler and the legal scholar Cass Sunstein published a book called Nudge. A nudge is a small change in how choices are presented that guides people toward a better decision, without forbidding anything. Placing healthy food at eye level in a canteen is an example. Governments and companies now use nudges to encourage saving, healthy eating and paying taxes on time. Thaler won the Nobel Prize in Economics in 2017."
  },
  {
    title: "In the Long Run",
    topic: "Famous economists",
    text: "In 1923, John Maynard Keynes wrote that in the long run we are all dead. He did not mean that long term thinking is pointless. He was criticising economists who said that economies would eventually fix themselves, which was little comfort to people who were unemployed now. Keynes argued that governments should act during a downturn by spending more. His ideas shaped economic policy for decades, especially after the Great Depression."
  },
  {
    title: "The Spreadsheet That Sold Computers",
    topic: "Technology and business",
    text: "In 1979, two men, Dan Bricklin and Bob Frankston, released VisiCalc, the first spreadsheet program for personal computers. Before it, accountants had to recalculate columns of numbers by hand when one figure changed. VisiCalc did it instantly. Many businesses bought an Apple II computer just to run it, so the program is often called the first killer application. It showed that software could be the reason to buy a machine."
  },
  {
    title: "Student Discounts",
    topic: "Everyday economics",
    text: "Cinemas, museums and train companies often offer discounts to students and older people. They are not simply being generous. Economists call this price discrimination. Students tend to have less money, and they are more likely to stay away if the price is high. By charging them less, a business gains customers that it would otherwise lose, while still charging the full price to those who are willing to pay it. Both sides can benefit."
  }
];
