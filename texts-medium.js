// texts-medium.js - medium typing texts, a few minutes each (3 new ones every day).
//
// The app sorts every text into Short (up to 120 words), Medium (121-220 words) or
// Long (more than 220 words) by counting its words, so a text always lands in the
// right group, whichever of the three text files it is in.
//
// HOW TO ADD YOUR OWN: copy one block { ... }, paste it before the last line ");",
// and change it. Titles must be unique across all three files. Plain keyboard
// characters only. Inside a text, a double quote must be written \" like this.
// The daily texts are taken in order from this list, so neighbouring texts have
// different topics.

TEXTS.push(
  {
    title: "The First Department Store",
    topic: "Business history",
    text: "In 1852, a Parisian shopkeeper named Aristide Boucicaut and his wife Marguerite took over a shop called Le Bon Marche and turned it into something new. Instead of a small shop where customers bargained over every item, they created a large store with many departments, fixed prices clearly marked on every product, and the right to return goods. Customers were free to walk around and look without any obligation to buy. The store ran sales, offered home delivery and printed catalogues. It grew into a magnificent building that attracted crowds from all over the city. The novelist Emile Zola used it as a model for his 1883 novel about the birth of modern shopping. Department stores soon appeared in London, New York and other cities, and many of their ideas, such as browsing, seasonal sales and clear prices, are still at the heart of shopping today."
  },
  {
    title: "Lego's Comeback",
    topic: "Company stories",
    text: "In 2003, Lego was in serious trouble. For years, the company had tried to grow by adding theme parks, clothing, video games and thousands of new, highly specialised pieces. Sales were falling, costs were out of control and it was losing large amounts of money. In 2004, a young manager named Jorgen Vig Knudstorp became chief executive. He sold the theme parks, cut the number of different pieces drastically and refocused the company on its core idea: the brick and the creative play it allows. Lego also began listening closely to its adult fans, who had been designing their own models for years. Licensed sets based on films, which had begun with Star Wars in 1999, became a reliable source of income. The recovery was remarkable. Within a decade, Lego had become one of the largest and most profitable toy companies in the world, and in 2014 The Lego Movie turned its little figures into film stars."
  },
  {
    title: "What Is a Recession?",
    topic: "Economics",
    text: "A recession is a period when an economy shrinks instead of growing. Businesses produce less, people lose their jobs, and incomes fall. A popular rule of thumb says that a country is in recession when its gross domestic product falls for two quarters in a row, that is, for six months. In the United States, however, recessions are officially dated by a committee of economists at the National Bureau of Economic Research, which looks at many measures, including employment, income and spending. Recessions can be caused by many things, such as a financial crisis, a sudden rise in oil prices, a pandemic or high interest rates. Most last less than a year or two, although their effects on unemployment can last much longer. A very deep and long recession is called a depression, and the worst in modern history was the Great Depression, which began in 1929."
  },
  {
    title: "Britain and the Gold Standard",
    topic: "History of money",
    text: "Under a gold standard, a country promises that its paper money can be exchanged for a fixed amount of gold. Britain adopted the system formally in 1821, and by the 1870s many other countries had followed. Because each currency was tied to gold, exchange rates between them hardly moved, which made international trade and lending easier. But the system had a serious drawback. A government could only create more money if it had more gold, so it could not easily respond to a recession. When the First World War began in 1914, most countries suspended the gold standard to pay for the fighting. Britain returned to it in 1925, at the old pre-war rate, which made British exports expensive and hurt industry. In 1931, during the Great Depression, Britain left the gold standard for good, and countries that left early tended to recover sooner than those that held on. The United States stopped exchanging gold for dollars at home in 1933. After the Second World War, a weaker version survived through the Bretton Woods system, until it ended in 1971."
  },
  {
    title: "Why Concert Tickets Sell Out",
    topic: "Supply and demand",
    text: "When a famous band announces a tour, tickets often sell out within minutes, and then appear on resale websites for several times the original price. If demand is so high, why do bands not simply charge more? There are several reasons. Some artists worry that very high prices would look greedy and harm their relationship with fans. Others want young or less wealthy fans to be able to attend. But keeping the price below what the market would bear creates a shortage, and shortages invite other ways of deciding who gets a ticket: speed, luck, and resellers who use software to buy tickets in bulk. Some organisers now try different solutions, such as tickets tied to the buyer's name, official resale platforms with price limits, or prices that change with demand. Each solution has its own problems, and the debate shows how difficult it is to be both fair and efficient at the same time."
  },
  {
    title: "The Deal That Made Microsoft",
    topic: "Company stories",
    text: "In 1980, the computer giant IBM was preparing its first personal computer, and it needed an operating system, the basic software that controls the machine. It turned to a small company called Microsoft, founded in 1975 by Bill Gates and Paul Allen. Microsoft did not have a suitable system of its own, so it bought one from another small firm, Seattle Computer Products, adapted it, and offered it to IBM as MS-DOS. The crucial detail was in the contract. Microsoft licensed the software to IBM instead of selling it outright, which meant that it remained free to sell the same system to other computer makers. When the IBM PC appeared in 1981 and became a success, many other companies built cheaper computers that worked the same way, and almost all of them needed MS-DOS. IBM made the machines, but Microsoft collected a fee on most of them. That arrangement turned a small software firm into one of the most valuable companies in the world."
  },
  {
    title: "The Video Shop That Said No",
    topic: "Company stories",
    text: "In 2000, the founders of a small company called Netflix travelled to Dallas to meet the managers of Blockbuster, the biggest video rental chain in the world. Netflix at the time rented DVDs by post, and it was losing money. According to Netflix co-founder Marc Randolph, they offered to sell their company to Blockbuster for fifty million dollars, and the offer was politely turned down. Blockbuster had thousands of stores and earned a lot of money, including from fees charged when customers returned films late. Netflix kept growing, first with its subscription service by post and later, from 2007, by streaming films over the internet. Blockbuster tried to respond, but it was too late. It filed for bankruptcy in 2010, while Netflix became one of the largest entertainment companies in the world. Today, only a single Blockbuster store remains open, in the town of Bend, Oregon, where it attracts tourists."
  },
  {
    title: "Better Than Average",
    topic: "Behavioural economics",
    text: "In a famous study published in 1981, the psychologist Ola Svenson asked students to rate their own driving skill compared with the other people in the room. Most of the American students placed themselves among the better half of drivers, which is impossible, since only half of any group can be above the middle. Similar results appear in many areas. Most people believe they are more honest, more intelligent and better at their jobs than average. This tendency is called overconfidence, and it has real economic effects. Overconfident investors trade too often and earn lower returns. Many new businesses fail partly because their founders overestimate their chances, although overconfidence may also be one reason why people start businesses at all. Managers who are too sure of themselves pay too much when they buy other companies. One useful defence is to look at how often similar projects have succeeded in the past, rather than trusting our own feeling that this time will be different."
  },
  {
    title: "Strawberries in Winter",
    topic: "Supply and demand",
    text: "In many supermarkets, strawberries are available all year round, but their price changes with the seasons. In early summer, when local farms are harvesting large quantities, supply is plentiful and prices fall. In winter, strawberries must be grown in heated greenhouses or flown in from warmer countries far away, which costs much more, so the price rises. Demand changes too. People buy more fresh fruit in warm weather, and some buy special treats for holidays. The combination of shifting supply and shifting demand explains why the same fruit can cost twice as much in one month as in another. Shoppers who pay attention to the seasons can save money by buying produce when it is plentiful, and some freeze or preserve it for later. The pattern is a small, everyday example of how prices carry information: a high price is a signal that something is currently scarce or costly to produce."
  },
  {
    title: "Music on the Move",
    topic: "Company stories",
    text: "In 1979, the Japanese company Sony launched a small cassette player with lightweight headphones. It was called the Walkman. According to the company, the idea came from Sony co-founder Masaru Ibuka, who wanted to listen to music on long flights, and his partner Akio Morita pushed it into production. Some people inside the company doubted that anyone would want a tape player that could not record. They were wrong. For the first time, people could carry their own music everywhere, walking down the street or riding a train, with their own private soundtrack. The Walkman sold in enormous numbers and became a symbol of the 1980s. Sony later made versions for compact discs and digital music, and hundreds of millions of Walkman products were sold over the years. The idea of personal, portable music paved the way for later devices, such as MP3 players and smartphones. Its success also showed how a product can create a habit that people did not know they wanted."
  },
  {
    title: "Coins With a Hole",
    topic: "History of money",
    text: "For about two thousand years, the most common coin in China was a round piece of bronze with a square hole in the middle. The design became standard after China was unified in 221 BC, and it lasted, with many changes in detail, until the early twentieth century. The hole was very practical. People could thread coins onto a cord, and a string of a thousand coins worked as a larger unit of money, a little like a banknote today. Because each coin had a low value, buying something expensive meant carrying heavy strings of them, which is one reason why Chinese merchants later began to use paper money. The round shape and the square hole were also said to reflect an old idea that the heavens were round and the earth was square. Coins with holes are still made in some countries today, including Japan, where the five yen and fifty yen coins have a hole in the centre."
  },
  {
    title: "Following the Herd",
    topic: "Behavioural economics",
    text: "When people are unsure what to do, they often look at what others are doing. If a restaurant is full and the one next door is empty, most of us choose the full one, assuming that the crowd knows something. This is often sensible, but it can also go badly wrong. If everybody copies everybody else, a whole crowd can follow a mistake, with nobody checking the original information. Economists call this herding. It helps to explain why share prices sometimes rise far above any reasonable value during a bubble, and then fall just as dramatically when the mood changes. It also plays a role in bank runs, when depositors rush to withdraw money because they see others doing the same, which can bring down even a healthy bank. Herding is not always irrational, since each person may be acting sensibly on what they see. The problem is that the crowd as a whole can end up far from the truth."
  },
  {
    title: "The Price Revolution",
    topic: "Inflation",
    text: "In the sixteenth century, Spanish ships brought enormous quantities of silver from the Americas to Europe. Over the following decades, prices across Europe rose steadily, and by the end of the century many goods cost several times as much as they had at the beginning. Historians call this the Price Revolution. By modern standards, the yearly rate was modest, perhaps one or two percent, but it lasted for generations, and people at the time found it baffling. Some blamed greedy merchants, others blamed bad harvests. In 1568, the French thinker Jean Bodin argued that the main cause was the flood of new gold and silver. It was one of the first clear statements of the idea that when the quantity of money grows faster than the quantity of goods, prices rise. Economists today think that a growing population also played a part, but Bodin's insight became one of the foundations of monetary economics."
  },
  {
    title: "Shares and Dividends",
    topic: "Banking and finance",
    text: "When you buy a share in a company, you become one of its owners, even if your piece is tiny. Shareholders have a right to a part of the company's profits and usually a vote on important decisions, such as electing the board of directors. Companies can share their profits with their owners in two main ways. They can pay dividends, which are regular cash payments for each share, or they can keep the profits and reinvest them in the business, hoping that the company will grow and its share price will rise. Many young, fast growing companies pay no dividends at all, while older, stable companies often pay generous ones. Shareholders face more risk than lenders: if the company fails, they are paid last and often receive nothing. In return, they share in the gains when a company does well. Over long periods, a broad mix of shares has historically earned more than savings accounts or bonds, although with much bigger ups and downs."
  },
  {
    title: "The Fall of Nokia",
    topic: "Company stories",
    text: "In 2007, Nokia was the biggest mobile phone maker in the world, selling roughly four in every ten phones. Its handsets were tough, cheap to run and famous for their long battery life. That same year, Apple launched the iPhone, and in 2008 the first phones using Google's Android software appeared. These new smartphones were built around touch screens and app stores, and they treated the phone as a pocket computer. Nokia had made clever smartphones of its own, but its software was hard for outside developers to work with, and its huge organisation was slow to change direction. In 2011, its new chief executive, Stephen Elop, wrote a famous memo comparing the company to a man standing on a burning oil platform. Nokia chose to use Microsoft's Windows Phone software, but customers and app makers had already moved on. In 2014, Nokia sold its phone business to Microsoft. The company survived by focusing on telecommunications networks, a less visible but still important business."
  },
  {
    title: "Goods Nobody Can Own",
    topic: "Economics",
    text: "Some goods are hard to sell in a normal market. Street lighting, national defence and clean air benefit everyone in an area, and it is difficult to stop people who have not paid from enjoying them. Economists call these public goods. They have two features: one person's use does not reduce what is left for others, and nobody can easily be excluded. Because people can benefit without paying, many will try to be free riders, and private companies may find it impossible to make a profit. For this reason, public goods are usually paid for by taxes. Lighthouses were long used as the classic example, until the economist Ronald Coase showed in 1974 that many British lighthouses had in fact been funded privately, through fees charged to ships in nearby ports. His study reminded economists that clever arrangements can sometimes solve problems that theory says only governments can handle."
  },
  {
    title: "A Guide for Hungry Drivers",
    topic: "Company stories",
    text: "In 1900, the French tyre makers Andre and Edouard Michelin published a small red guidebook for motorists. At the time, there were only a few thousand cars in France, and the brothers wanted to encourage people to drive more, because more driving meant more worn out tyres. The first guide was given away for free, and it listed useful information such as maps, petrol stations, mechanics, and places to eat and sleep. According to the company's own history, the brothers started charging for it in 1920, after noticing that free copies were being used to prop up workbenches. In 1926, the guide began awarding a star to restaurants of high quality, and in the 1930s it introduced the system of one, two and three stars. Today, a Michelin star is one of the most famous honours a chef can receive, all thanks to a clever piece of marketing by a tyre company."
  },
  {
    title: "Meeting Without a Plan",
    topic: "Game theory",
    text: "Suppose you must meet a stranger in New York tomorrow, but you cannot contact each other to agree on a time and place. Where would you go? In his 1960 book The Strategy of Conflict, the economist Thomas Schelling described asking people this question. Many chose the same answer: Grand Central Station, at noon. Schelling called such natural meeting points focal points. People can coordinate surprisingly well without talking, because they think about what the other person is likely to think. Focal points help to explain many social conventions, such as meeting at round numbers or splitting a bill evenly. Schelling used the idea to study negotiation and conflict, and showed why clear, simple boundaries tend to be more stable than complicated ones: everybody can see them. He shared the Nobel Prize in Economics in 2005 for his work on conflict and cooperation."
  },
  {
    title: "The Catalogue Revolution",
    topic: "Business history",
    text: "In the nineteenth century, families on American farms had few shops nearby, and the local general store often charged high prices. In 1872, Aaron Montgomery Ward began a business that sold goods by mail, starting with a single printed sheet listing his products. Customers could order from home and receive their goods by post or rail. The idea was a huge success, and in the 1890s a rival, Sears, Roebuck and Company, produced a catalogue that grew to hundreds of pages, selling everything from clothes and tools to bicycles and stoves. People called it the wish book. From 1908, Sears even sold complete houses by mail, delivered as numbered pieces with instructions, and tens of thousands were built. The catalogue changed rural life by bringing city goods and city prices to remote places, in much the same way as online shopping does today."
  },
  {
    title: "Trade Deficits Explained",
    topic: "Trade",
    text: "A country has a trade deficit when it buys more goods and services from abroad than it sells. The United States has run a trade deficit for decades, while countries such as Germany and China have often had surpluses. Many people think a deficit is a sign of weakness, as if the country were losing a competition. Economists are more cautious. A trade deficit means that foreigners receive more of a country's money than they spend on its exports, and they usually invest the difference back in that country, by buying its shares, bonds or property. A deficit can be a sign of a strong economy that attracts investment, or of a country that saves too little and borrows from abroad to consume. What matters is whether the borrowed money is used well. A family that borrows to build a business is in a different position from one that borrows to pay for holidays, even if their debts are the same."
  },
  {
    title: "The Multiplier",
    topic: "Economics",
    text: "When a government spends money, the effect on the economy can be larger than the original amount. Suppose the government pays a builder to repair a bridge. The builder pays workers, who spend part of their wages in shops. The shop owners then spend part of that extra income, and so on. Each round is smaller than the last, because some money is saved, paid in taxes or spent on imports, but together the rounds add up to more than the first payment. This idea, called the multiplier, was developed by the economist Richard Kahn in 1931 and made famous by John Maynard Keynes a few years later. It is one reason why governments often increase spending during recessions. How large the multiplier really is remains one of the most debated questions in economics. It depends on many things, including whether people are confident, how much they save, and whether the central bank raises interest rates at the same time."
  },
  {
    title: "Railway Mania",
    topic: "Business history",
    text: "In the 1840s, Britain was gripped by excitement about railways. New lines promised to connect towns, carry goods quickly and make their investors rich. Share prices rose, newspapers were full of advertisements for new railway companies, and Parliament approved hundreds of new lines in just a few years. Thousands of ordinary people put their savings into railway shares, often paying for them partly on credit. Many of the proposed lines were badly planned or duplicated others, and some were never built at all. When interest rates rose in 1847, the bubble burst, share prices collapsed and many investors were ruined. George Hudson, a businessman celebrated as the Railway King, was later disgraced when it emerged that he had paid dividends out of new capital rather than profits. Yet the mania also left Britain with thousands of miles of railway, which served the country for generations. Bubbles can destroy wealth and still leave useful things behind."
  },
  {
    title: "Keynes the Investor",
    topic: "Famous economists",
    text: "John Maynard Keynes is best known for his theories about unemployment and government spending, but he was also an active investor. For about twenty five years, from the early 1920s until his death in 1946, he managed part of the investment fund of King's College, Cambridge. His early attempts were not always successful. He lost heavily speculating on currencies in 1920, and the crash of 1929 hit his own savings hard. Over time, he changed his approach. Instead of trying to predict the ups and downs of the whole market, he concentrated on a smaller number of companies that he understood well and held their shares for long periods. Later studies of the college's records found that, over his time in charge, the fund did considerably better than the British stock market as a whole. A famous saying often linked to him warns that markets can stay irrational longer than an investor can stay solvent, although there is no proof that he ever said it."
  },
  {
    title: "Why Exchange Rates Move",
    topic: "Currencies",
    text: "An exchange rate is simply the price of one currency in terms of another, and like other prices, it is set by supply and demand. If foreigners want to buy more British goods, shares or property, they need pounds, so demand for the pound rises and so does its price. Many things can shift that demand. Higher interest rates in a country attract savers from abroad, which tends to strengthen its currency. Strong economic growth and political stability usually help too, while high inflation tends to weaken a currency over time, because each unit buys less. Expectations matter enormously: if traders believe that a currency will fall, they sell it, and their selling can make the fall happen. Every day, currencies worth trillions of dollars are traded, which makes the foreign exchange market the largest financial market in the world. For travellers, importers and exporters, these movements can change prices and profits quickly and unexpectedly."
  },
  {
    title: "The Stag Hunt",
    topic: "Game theory",
    text: "In 1755, the French philosopher Jean-Jacques Rousseau described a group of hunters who could work together to catch a stag. A stag would feed everyone well, but only if every hunter stayed at his post. If one hunter noticed a hare running past and chased it, he would surely catch a small meal for himself, but the stag would escape and the others would go hungry. Game theorists use this story to describe a coordination problem. Unlike the prisoner's dilemma, nobody gains by abandoning the group if everyone else cooperates: the stag is the best outcome for all. The difficulty is trust. If you suspect that others will chase hares, chasing a hare yourself is the safe choice. The stag hunt helps to explain why cooperation often depends on confidence that others will cooperate too, and why small signals of trust, such as promises, contracts and reputations, can be so valuable."
  },
  {
    title: "The Great Tea Race",
    topic: "Trade",
    text: "In the nineteenth century, the first tea of the new season from China fetched high prices in London, so merchants hired the fastest sailing ships they could find. These sleek ships were called clippers, and their voyages became famous races. In 1866, several clippers left the Chinese port of Fuzhou within days of each other, and after about three months at sea, two of them, Taeping and Ariel, arrived in London on the same tide. Newspapers followed the race eagerly, and people placed bets on the winner. The most famous clipper of all, the Cutty Sark, was launched in 1869, but in the very same year the Suez Canal opened, and steamships could now take a much shorter route to Asia that sailing ships could not easily use. Within a few years, steam had taken over the tea trade. The Cutty Sark survives and can be visited in Greenwich, London, as a reminder of the age of sail."
  },
  {
    title: "Newton at the Mint",
    topic: "History of money",
    text: "Isaac Newton is famous for his work on gravity and light, but he also spent the last thirty years of his life at the Royal Mint in London. He became Warden in 1696 and Master in 1699. At that time, England's silver coins were in a terrible state. Many had been clipped, which means that dishonest people trimmed small pieces of silver from the edges and melted them down. Others were simply forged. The government ordered a great recoinage, and new coins were made with patterned edges, so that any clipping would be easy to spot. Newton took his job very seriously. He interviewed suspects, collected evidence and pursued forgers through the courts. His most famous opponent was William Chaloner, a clever counterfeiter who had even tried to accuse the Mint itself of making bad coins. Newton gathered enough evidence to convict him, and Chaloner was hanged in 1699. Newton remained at the Mint until his death in 1727."
  },
  {
    title: "How Banks Create Money",
    topic: "Banking and finance",
    text: "Many people imagine that banks simply lend out money that savers have deposited. In reality, most money in a modern economy is created by banks when they make loans. When a bank lends you money to buy a car, it does not hand over coins from a vault. It simply adds the amount to your account, creating a new deposit, which you can spend. That new deposit is money, just like the deposits that already existed. When the loan is paid back, the money disappears again. In 2014, the Bank of England published an article explaining this process, and it surprised many readers. Banks cannot create money without limit, however. They must be confident that borrowers will repay, they must hold enough capital to absorb losses, and they are affected by the interest rates set by the central bank. If banks lend too freely, they can fuel a bubble and then a crisis, which is why they are closely regulated."
  },
  {
    title: "Money in Different Pockets",
    topic: "Behavioural economics",
    text: "In theory, money is money, wherever it comes from. In practice, people treat it differently depending on how they think about it. The economist Richard Thaler called this mental accounting. Many people keep separate mental budgets for food, entertainment and savings, and they may refuse to buy a new jacket because the clothing budget is used up, even though they have plenty of money overall. People also treat windfalls differently from wages. A tax refund or a prize is often spent freely, while the same amount earned through work would be saved. Some people keep money in a savings account earning little interest while paying much higher interest on a credit card, because the savings feel reserved for something special. Mental accounting can be useful, since budgets help us to control spending. But it can also lead to choices that cost money, and recognising it can help us to see all our money as part of a single picture."
  },
  {
    title: "Water in a Drought",
    topic: "Supply and demand",
    text: "During a long drought, a town's water supply can fall far below what residents normally use. There are two broad ways to deal with this. The first is to keep prices the same and introduce rules, such as bans on watering gardens or washing cars, with fines for those who break them. The second is to raise the price of water, perhaps with higher prices for people who use a lot, so that households decide for themselves where to save. Economists often prefer the price approach, because people know best which uses matter most to them. A family might happily give up a green lawn but keep its long showers. Critics reply that higher prices hit poorer families hardest, and that a basic amount of water should be affordable for everyone. Many towns therefore combine the two, with a cheap price for the first amount of water each household uses and much higher prices above it."
  },
  {
    title: "Japan's Long Deflation",
    topic: "Inflation",
    text: "At the end of 1989, Japan's stock market reached a record high, and land prices in Tokyo were so extreme that the grounds of the Imperial Palace were said to be worth as much as all the land in California. Then the bubble burst. Share prices and property values fell for years, and banks were left with enormous bad loans. Companies and households concentrated on paying down debts rather than spending, and economic growth stayed weak through the 1990s, which became known as Japan's lost decade. From the late 1990s, consumer prices in Japan fell gently for much of the next fifteen years. The falls were small, often less than one percent a year, but they made people and firms cautious. Why buy today if prices might be lower next year? The Bank of Japan cut interest rates to zero and later bought huge amounts of government bonds to push money into the economy. Japan's experience is studied carefully by other central banks, which are keen to avoid a similar trap."
  },
  {
    title: "The Garage in Palo Alto",
    topic: "Company stories",
    text: "In 1939, two young engineers, Bill Hewlett and David Packard, started a company in a small rented garage in Palo Alto, California, with about five hundred dollars. They tossed a coin to decide whose name would come first, and Hewlett won. Their first product was an audio oscillator, an instrument for testing sound equipment. One of their first big customers was Walt Disney's studio, which bought eight of them to help produce the sound for the film Fantasia. Hewlett-Packard grew into one of the largest electronics companies in the world, making calculators, computers and printers. The founders also became known for an informal style of management, with open offices and managers who walked around talking to their staff. The garage is now an official California historical landmark, described as the birthplace of Silicon Valley, the region that later produced companies such as Apple, Google and Intel. Hewlett and Packard remained close friends and business partners for the rest of their lives."
  },
  {
    title: "What Moves a Share Price",
    topic: "Markets and stocks",
    text: "A share price reflects what investors believe a company will earn in the future, not just what it earns today. That is why prices often move sharply when companies announce their results. If profits are higher than expected, the price usually rises. If they are lower, it falls, even if the company is still making money. Interest rates matter too. When rates rise, future profits are worth less in today's money, and safer investments such as bonds become more attractive, so share prices often fall. General news about the economy, new competitors, changes in regulation and even rumours can all move prices. In the short term, moods of optimism and fear can push prices far from any sensible value. Over longer periods, however, share prices tend to follow the profits that companies actually make. This is why many investors try to ignore daily movements and focus on the long run."
  },
  {
    title: "Small Teams, Big Prices",
    topic: "Company stories",
    text: "In April 2012, Facebook bought Instagram, a photo sharing app, for about one billion dollars. Instagram had been launched less than two years earlier and had just thirteen employees. In 2014, Facebook paid around nineteen billion dollars for the messaging service WhatsApp, which had about fifty five staff. To many people, these prices seemed absurd for companies so small. But they illustrate an important feature of digital businesses. Software can be copied at almost no cost, so a tiny team can serve hundreds of millions of users. What Facebook was buying was not offices or machines, but users, and the chance that these young apps might one day compete with it. Instagram grew to more than a billion users, and WhatsApp became one of the most widely used messaging services in the world. The deals are now often discussed by regulators, who ask whether large companies buy small rivals to stop them from becoming a threat."
  },
  {
    title: "Saying Yes Means Saying No",
    topic: "Opportunity cost",
    text: "Every time you agree to do something, you are also choosing not to do something else, even if you do not notice it. Accepting an extra project at work might mean less time for your family. Spending an evening scrolling on your phone might mean an hour less sleep, or a book you never read. Economists call the value of the best alternative you give up the opportunity cost, and it is a useful way to think about time as well as money. Time is the one resource that everybody receives in exactly the same amount each day, and it cannot be saved for later. Some people find it helpful to ask a simple question before agreeing to a new commitment: what will I stop doing to make room for this? If the answer is something you value more, saying no may be the better choice. The idea is not to calculate every minute, but to make sure that the choices you make by accident are as good as the ones you make on purpose."
  },
  {
    title: "What Is a Bond?",
    topic: "Banking and finance",
    text: "A bond is a loan that you can buy and sell. When a government or a company needs to borrow money, it can issue bonds. Each bond promises to pay the holder a fixed amount of interest at regular intervals, called the coupon, and to repay the original amount on a set date in the future. Investors who buy bonds are lending money to the issuer. Bonds are usually seen as safer than shares, because the payments are fixed and bondholders are paid before shareholders if a company fails. But they are not without risk. If interest rates in the economy rise, older bonds with lower coupons become less attractive, and their prices fall. If the issuer gets into trouble, it may fail to pay. Government bonds from stable countries are considered among the safest investments in the world, and their interest rates influence the cost of mortgages, business loans and many other kinds of borrowing."
  },
  {
    title: "Bulls and Bears",
    topic: "Markets and stocks",
    text: "On financial markets, a bull is someone who expects prices to rise, and a bear is someone who expects them to fall. A long period of rising prices is called a bull market, and a fall of twenty percent or more from a recent peak is often described as a bear market. Nobody is completely sure where the terms come from. One popular explanation is that a bull attacks by thrusting its horns upward, while a bear swipes its paws downward. Another links bears to an old proverb about selling the bear's skin before catching the bear, which described traders who sold shares they did not yet own. In 1989, the artist Arturo Di Modica placed a large bronze statue of a charging bull in the financial district of New York without permission. It became so popular that the city allowed it to stay, and it is now one of the most photographed symbols of Wall Street."
  },
  {
    title: "The Swiss Franc Shock",
    topic: "Currencies",
    text: "In 2011, investors worried about the crisis in the euro area rushed to buy Swiss francs, which they saw as a safe place for their money. The franc rose so much that Swiss exporters and tourism businesses struggled to compete. The Swiss National Bank responded by setting a limit: one euro would never be worth less than one point two francs, and the bank promised to create as many francs as necessary to defend that level. For more than three years, it worked. Then, on the fifteenth of January 2015, the bank suddenly abandoned the limit without warning. Within minutes, the franc jumped by around thirty percent against the euro at one point, before settling at a smaller gain. Currency traders and some brokers suffered huge losses, and Swiss share prices fell sharply. The episode showed how quickly a currency can move when a promise from a central bank is withdrawn."
  },
  {
    title: "Friedman and Money",
    topic: "Famous economists",
    text: "Milton Friedman was one of the most influential economists of the twentieth century. In 1963, together with Anna Schwartz, he published A Monetary History of the United States, a long study of money and the economy over almost a century. Their most famous conclusion was that the American central bank had made the Great Depression much worse by allowing the amount of money in the economy to shrink sharply in the early 1930s. Friedman summed up one of his central ideas in a famous phrase: inflation is always and everywhere a monetary phenomenon, meaning that lasting inflation happens when money grows faster than the economy. He was also a gifted communicator who wrote newspaper columns and presented a popular television series, Free to Choose, defending free markets. He won the Nobel Prize in Economics in 1976. Many of his ideas were later challenged or refined, but they shaped the way central banks think about money to this day."
  },
  {
    title: "Pieces of Eight",
    topic: "History of money",
    text: "Pirate stories often mention pieces of eight, and they were real coins. The Spanish silver dollar was worth eight reales, which is where the name comes from. Most of the silver came from mines in the Americas, especially the great silver mountain at Potosi, in what is now Bolivia, and from Mexico. Spanish ships carried the coins across the Atlantic to Europe and across the Pacific to Manila, where Chinese merchants exchanged them for silk and porcelain. As a result, the Spanish dollar became one of the first truly global currencies, trusted on several continents because its weight and silver content were reliable. In the British colonies of North America, which had few coins of their own, it was used everywhere, and the new United States based its own dollar on it. Spanish coins remained legal tender in the United States until 1857. People sometimes cut the coins into eight pieces to make change, which is said to be the origin of the old American expression two bits for a quarter dollar."
  },
  {
    title: "Three Kinds of Unemployment",
    topic: "Labour and work",
    text: "Economists usually distinguish between three kinds of unemployment. Frictional unemployment is the short time people spend between jobs, for example after moving to a new city or leaving one job to look for a better one. Some of it is unavoidable and even healthy, because it helps people to find work that suits them. Structural unemployment happens when the skills workers have no longer match the jobs available, perhaps because an industry has declined or a technology has replaced a type of work. It can last a long time, and it often requires retraining or moving to another area. Cyclical unemployment rises during recessions, when businesses cut back because demand has fallen across the economy, and falls again when the economy recovers. Each kind needs a different response. Better job search services help with the first, education and training with the second, and policies that support demand with the third."
  },
  {
    title: "Mercantilism",
    topic: "Trade",
    text: "From the sixteenth to the eighteenth century, many European governments followed a set of ideas now called mercantilism. They believed that a nation's wealth was measured by the gold and silver it held, and that the best way to gain more was to export as much as possible and import as little as possible. Governments supported domestic industries, granted monopolies to trading companies, restricted imports with high taxes, and used colonies as sources of cheap raw materials. In France, Jean-Baptiste Colbert, the finance minister of King Louis the Fourteenth, became famous for such policies. In 1776, Adam Smith attacked mercantilism in The Wealth of Nations. He argued that a nation's wealth lies not in its stock of gold, but in the goods and services its people can produce and consume, and that trade benefits both sides. Although economists today mostly agree with Smith, mercantilist ideas still appear in political debates about trade."
  },
  {
    title: "The Hidden Cost of University",
    topic: "Opportunity cost",
    text: "When people calculate the cost of going to university, they usually add up the tuition fees, books and rent. Economists add something else: the money a student could have earned by working instead. For three or four years, that lost income can be larger than the fees themselves. Rent is a slightly different case, because a student would need somewhere to live anyway, so only the extra cost of living away from home really belongs on the list. Once all the opportunity costs are counted, university looks much more expensive than the price list suggests. Yet studies in many countries find that, on average, graduates earn considerably more over their working lives than people without a degree, so for most students the investment still pays off. The point is not that university is a bad choice. It is that a good decision compares all the real costs, including the hidden ones, with all the benefits, including those that are not about money."
  },
  {
    title: "The Great Inflation",
    topic: "Inflation",
    text: "In the 1970s, prices in many rich countries rose faster than at any time since the Second World War. Oil prices jumped in 1973 and again in 1979, but the problem had started earlier, partly because governments and central banks had allowed demand to grow too quickly. Workers expected prices to keep rising, so they asked for higher wages, and firms raised prices to pay them. In the United States, inflation was above thirteen percent in 1979. That year, Paul Volcker became chairman of the Federal Reserve, and he decided to stop inflation even at a high cost. Interest rates rose to around twenty percent. Borrowing became very expensive, the economy fell into a deep recession and unemployment climbed above ten percent. Angry builders mailed pieces of wood to the central bank in protest. But by 1983, inflation had fallen to around three percent. Many economists believe that this painful episode convinced the public that the central bank was serious, which helped to keep inflation low in the decades that followed."
  },
  {
    title: "It Depends How You Say It",
    topic: "Behavioural economics",
    text: "In 1981, Amos Tversky and Daniel Kahneman asked people to imagine that a rare disease was expected to kill six hundred people, and to choose between two programmes. When the choice was described in terms of lives saved, most people preferred a programme that would certainly save two hundred people over a gamble. When exactly the same options were described in terms of deaths, saying that four hundred people would certainly die, most people chose the gamble instead. The facts had not changed, only the words. This effect is called framing, and it appears in many everyday situations. A yoghurt described as ninety percent fat free sounds healthier than one described as containing ten percent fat. An operation with a ninety percent survival rate sounds safer than one with a ten percent death rate. Knowing about framing can help us to ask how a choice would look if it were described the other way round."
  },
  {
    title: "The Pig Cycle",
    topic: "Supply and demand",
    text: "In the early twentieth century, economists noticed a strange pattern in the price of pigs. When prices were high, farmers decided to raise more pigs. But pigs take months to grow, so by the time the extra animals reached the market, there were too many of them, and prices fell. Disappointed farmers then raised fewer pigs, and when this smaller supply reached the market, prices rose again. The cycle repeated itself over and over. In 1934, the economist Nicholas Kaldor called the idea behind it the cobweb theorem, because the up and down path of prices and quantities looks like a spider's web when it is drawn on a chart. The same pattern can appear in any market where producers must decide long before they can sell, such as coffee, wine or even the number of students who train for a particular profession. Better information about future supply helps to calm such cycles."
  },
  {
    title: "Signals and Degrees",
    topic: "Game theory",
    text: "Employers cannot see how hard working or capable a job applicant really is. In 1973, the economist Michael Spence suggested that education can act as a signal. Completing a difficult degree is easier for people who are already capable and determined, so the degree tells employers something about the applicant, even if some of what was studied is never used at work. Spence showed that signals work when they are costly to fake. A peacock's enormous tail works in a similar way in nature: only a healthy bird can afford to grow one. Signalling helps to explain many behaviours, such as companies offering long warranties to show that their products are reliable. Spence shared the Nobel Prize in Economics in 2001 with George Akerlof and Joseph Stiglitz, for their work on markets in which one side knows more than the other."
  },
  {
    title: "Walt Disney's Early Failures",
    topic: "Entrepreneurs",
    text: "Walt Disney is remembered as one of the most successful entertainers in history, but his early career was full of setbacks. In the early 1920s, he started a small animation studio in Kansas City called Laugh-O-Gram. It produced short cartoons, but it could not earn enough money, and in 1923 it went bankrupt. Disney moved to Hollywood with very little money and started again with his brother Roy. They had success with a character called Oswald the Lucky Rabbit, but in 1928 Disney discovered that the rights to Oswald belonged to the distributor, who also hired away most of his animators. On the train journey home, according to the company's story, Disney came up with a new character. That character was Mickey Mouse, who appeared in the cartoon Steamboat Willie later that year, one of the first cartoons with synchronised sound. Disney had learned a hard lesson about owning the rights to his own creations, and he never made that mistake again."
  },
  {
    title: "The Sweets in the Film",
    topic: "Marketing",
    text: "In the 1982 film E.T. the Extra-Terrestrial, a boy lures a friendly alien out of hiding with a trail of small, colourful sweets. The filmmakers had first approached the company Mars about using its famous chocolate sweets, but the company declined. Instead, the film used Reese's Pieces, made by the Hershey company, which agreed to promote the film in return. The film became one of the most successful of all time, and sales of Reese's Pieces jumped sharply in the weeks after it came out. The story is often told as one of the clearest early examples of product placement, the practice of arranging for brands to appear in films and television programmes. Since then, product placement has become a large business. Cars, phones, drinks and computers appear in films not by accident, but because brand owners know that audiences notice what their heroes use."
  },
  {
    title: "Pollution and Prices",
    topic: "Economics",
    text: "When a factory pollutes a river, people living downstream suffer, but the factory does not pay for the damage. Economists call this an externality: a cost or benefit that falls on someone outside the transaction. Because the polluter does not pay the full cost, it produces more pollution than it would if it did. In 1920, the British economist Arthur Pigou suggested a solution: tax the activity by an amount equal to the damage it causes. Such charges are now called Pigouvian taxes, and carbon taxes follow the same logic. Externalities can also be positive. A person who gets vaccinated protects not only themselves but also the people around them, and a beekeeper's bees pollinate the neighbours' fruit trees. Because such benefits are not rewarded, people may do too little of these good things, which is why governments sometimes subsidise them instead."
  },
  {
    title: "The Typewriter and the Office",
    topic: "Business history",
    text: "The first commercially successful typewriter went on sale in 1874, made by the gun maker E. Remington and Sons from a design by Christopher Latham Sholes and his partners. At first, it sold slowly, but by the end of the century typewriters were changing the way offices worked. Letters and reports could be produced quickly, neatly and in several copies, using carbon paper. Typing became a skill that could be learned in a few months, and it opened a new kind of work to women, who were often trained at new typing schools. In the late nineteenth century, the word typewriter could mean both the machine and the person who operated it. By 1900, most typists in the United States were women, and office work became one of the main routes for women into paid employment. Typewriters remained essential for about a century, until personal computers gradually replaced them in the 1980s and 1990s."
  },
  {
    title: "Hayek and Scattered Knowledge",
    topic: "Famous economists",
    text: "In 1945, the Austrian born economist Friedrich Hayek published an essay called The Use of Knowledge in Society. He argued that the most important economic knowledge is not found in any textbook or government office. It is scattered among millions of people, in the form of local details: a shopkeeper knows that a product is suddenly popular, a farmer knows that his field is too wet to plant. No central planner could ever collect all this information. Prices, Hayek wrote, solve the problem. When something becomes scarce, its price rises, and people everywhere respond by using less of it or producing more, even though they have no idea why it became scarce. The price signal passes on just the information that matters. Hayek used this argument to criticise central planning, and his ideas strongly influenced later economists and politicians. He shared the Nobel Prize in Economics in 1974 with the Swedish economist Gunnar Myrdal, whose views were very different from his own."
  },
  {
    title: "Paying Not to Go to the Gym",
    topic: "Behavioural economics",
    text: "In 2006, the economists Stefano DellaVigna and Ulrike Malmendier studied the records of thousands of members of American gyms. They found that many people who chose a monthly membership went so rarely that they paid far more per visit than if they had simply bought passes for ten visits at a time. When people sign up, they are optimistic about their future selves. They imagine that they will exercise several times a week, and a monthly fee looks like a bargain. In reality, busy days, tiredness and bad weather get in the way. Many also delay cancelling, even when they no longer go. Economists call this present bias: we give too much weight to how we feel today and too little to our plans for later. Businesses understand this well, which is why many offer long contracts that renew automatically. Knowing about present bias can help us to choose contracts that suit the person we really are, not the person we hope to be."
  },
  {
    title: "When Prices Fall",
    topic: "Inflation",
    text: "Falling prices sound like good news, but they can be dangerous. Between 1929 and 1933, prices in the United States fell by about a quarter. At first glance, that made goods cheaper. But wages and company profits fell too, while debts stayed exactly the same. A farmer who had borrowed money when wheat was expensive now had to sell much more wheat to pay back the same loan. Many could not, and banks that had lent to them failed. In 1933, the economist Irving Fisher described this as a debt deflation spiral: as people struggle to repay debts, they sell goods and cut spending, which pushes prices down further and makes the real burden of debt even heavier. Falling prices also encourage people to delay purchases, since things will be cheaper tomorrow, and that weak demand pushes prices down again. This experience is the main reason why modern central banks aim for a small positive rate of inflation, rather than zero."
  },
  {
    title: "Network Effects",
    topic: "Technology and business",
    text: "A telephone is useless if you are the only person who owns one. With two telephones, one connection is possible. With a thousand, there are hundreds of thousands of possible connections. The more people use a network, the more valuable it becomes for everyone. Economists call this a network effect. It explains the success of telephones, email, social media and online marketplaces, where buyers go because there are many sellers, and sellers go because there are many buyers. Network effects often lead to a situation where the winner takes all: once one network becomes the biggest, it is very hard for a rival to compete, even with a better product, because people do not want to leave their friends or customers behind. This is good for users in some ways, since everyone can connect, but it can also give the largest companies enormous power, which is why such businesses attract so much attention from regulators."
  },
  {
    title: "Thinking at the Margin",
    topic: "Economics",
    text: "Economists often say that good decisions are made at the margin. That means asking not whether something is good in general, but whether one more unit of it is worth its cost. Water is a good example. The first glass of water on a hot day is extremely valuable, the fifth is pleasant, and the twentieth may be worth nothing at all. A restaurant deciding whether to stay open for one extra hour should not look at its average profit per hour, but at the extra money that hour would bring in compared with the extra costs of staff and electricity. A student deciding whether to study for one more hour before an exam should compare the likely improvement in marks with the value of sleep. Thinking at the margin helps to explain why people often stop before reaching extremes, and why a price can change behaviour even when it seems small: it changes the balance of that last, marginal choice."
  },
  {
    title: "A Book to Settle Arguments",
    topic: "Company stories",
    text: "In 1951, Sir Hugh Beaver, the managing director of the Guinness brewery, went on a shooting trip in Ireland and got into an argument about which game bird was the fastest in Europe. Nobody could find a reference book with the answer. Beaver realised that similar arguments must happen every night in pubs, and that a book of facts and records could settle them. He asked two twin brothers, Norris and Ross McWhirter, who ran a fact finding agency in London, to compile it. The first Guinness Book of Records was published in 1955 and became a best seller in Britain almost immediately. It was a clever piece of marketing for the brewery, but it soon became a famous brand of its own. The book has been updated every year since, it has been translated into many languages, and it is now known as Guinness World Records. Its pages became a challenge too, as people around the world began attempting strange new records just to appear in it."
  },
  {
    title: "Who Does the Dishes?",
    topic: "Opportunity cost",
    text: "Imagine two flatmates, Sam and Alex. Sam can cook a meal in thirty minutes and wash the dishes in twenty. Alex is slower at both, needing sixty minutes to cook and thirty to wash up. Sam is better at both jobs, so should Sam do everything? Economics says no. What matters is the opportunity cost. For Sam, cooking one meal takes as long as washing up one and a half times. For Alex, one meal takes as long as washing up twice. Sam gives up less washing up to cook, so Sam has a comparative advantage in cooking, while Alex has a comparative advantage in washing up. If Sam does all the cooking and Alex does all the washing up, the two of them finish the week's chores sooner than if each did a share of both tasks. This is the same logic that David Ricardo used in 1817 to explain trade between countries, and it works just as well in a small kitchen."
  },
  {
    title: "Not All Your Eggs in One Basket",
    topic: "Markets and stocks",
    text: "The old advice not to put all your eggs in one basket was turned into a precise theory in 1952 by the American economist Harry Markowitz. He showed that investors should not judge each investment on its own, but look at how investments behave together. If you own shares in an umbrella maker and an ice cream company, a rainy summer hurts one and helps the other, so the combination is less risky than either share alone. By combining investments that do not always move together, an investor can reduce risk without necessarily giving up return. This idea is called diversification. It explains why financial advisers recommend spreading money across many companies, industries, countries and types of investment. Markowitz shared the Nobel Prize in Economics in 1990. Diversification cannot remove all risk, since in a deep crisis almost everything can fall at once, but it protects investors from the collapse of any single company."
  },
  {
    title: "The Domesday Book",
    topic: "Taxes and government",
    text: "In 1085, almost twenty years after conquering England, King William the First ordered a great survey of his new kingdom. His officials travelled across the country, asking who owned each piece of land, how many people lived there, and how many ploughs, mills, animals and fishponds it had. The main purpose was to find out how much tax could be raised, and who owed it. The results were written up in 1086 in a huge record that became known as the Domesday Book. The name compared it to the Day of Judgement, because, like that final judgement, there was no appeal against what it said. It covered thousands of places across most of England. The original volumes still survive, kept at the National Archives in London, and historians use them as an extraordinary snapshot of life in England more than nine hundred years ago."
  },
  {
    title: "The Most Popular Vehicle in History",
    topic: "Entrepreneurs",
    text: "After the Second World War, Japan was poor, petrol was scarce and few people could afford cars. In 1946, a mechanic named Soichiro Honda began fitting small engines to bicycles, which he sold to people who needed cheap transport. He founded the Honda Motor Company in 1948. Ten years later, in 1958, Honda launched the Super Cub, a light motorcycle that was reliable, cheap to run and easy to ride, with a step-through frame that made it simple to get on and off. It became the best selling motor vehicle in history, with more than one hundred million built by 2017. In the United States, Honda advertised it with the slogan you meet the nicest people on a Honda, which helped to change the image of motorcycles from dangerous machines into friendly everyday transport. Honda went on to become one of the largest makers of cars and engines in the world."
  },
  {
    title: "How Prices Find Their Level",
    topic: "Supply and demand",
    text: "Imagine a market where many farmers sell apples. If the price is too high, buyers walk away and sellers are left with unsold fruit, so some sellers lower their prices to attract customers. If the price is too low, apples disappear quickly, queues form, and sellers realise that they could charge more. Over time, the price moves toward the level where the amount people want to buy equals the amount sellers want to sell. Economists call this the equilibrium price. Nobody plans it or announces it. It emerges from thousands of small decisions by buyers and sellers, each reacting to what they see. When something changes, such as a bad harvest that reduces supply, or a health report that makes apples more popular, the price moves to a new equilibrium. This simple process, repeated in millions of markets, coordinates an enormous amount of economic activity without anyone being in charge."
  },
  {
    title: "The Sticks That Burned Parliament",
    topic: "History of money",
    text: "For hundreds of years, the English government recorded debts and tax payments on wooden tally sticks. An official cut notches into a stick of hazel wood, with different sizes of notch for different amounts of money. Then the stick was split down its length, so that both halves showed the same notches. The person who paid kept one half, and the Exchequer kept the other. Because the two halves had to fit together perfectly, it was very hard to cheat. The system was used from the twelfth century until 1826, when it was finally abolished. That left the government with a huge pile of old sticks. In October 1834, workers were told to burn them in the furnaces under the House of Lords. They burned too many, too quickly, and the fire spread. Most of the old Palace of Westminster was destroyed. The building that stands there today, with its famous clock tower, was built to replace it. A simple accounting tool had brought down the home of Parliament."
  },
  {
    title: "Why Wages Differ",
    topic: "Labour and work",
    text: "Why does a surgeon earn more than a shop assistant, and a famous footballer more than a nurse? Economists point to several reasons. Some jobs require long and expensive training, and higher pay compensates people for those years. Some skills are rare, and when demand is high and supply is low, the price of that skill rises, just like the price of anything else. Dangerous or unpleasant jobs often pay extra to persuade people to do them. A top footballer earns a fortune not because football is more useful than nursing, but because millions of fans pay to watch a small number of top players, so each of them brings in enormous revenue. Wages also depend on things that have little to do with skill, such as where a person lives, whether workers are organised in unions, and discrimination. Studying wage differences helps economists to understand both how labour markets work and where they may be unfair."
  },
  {
    title: "Insurance and Large Numbers",
    topic: "Banking and finance",
    text: "Nobody knows whether their own house will catch fire this year. But an insurance company covering a million houses can predict, quite accurately, how many fires there will be in total. This is the law of large numbers, which the Swiss mathematician Jacob Bernoulli described in a book published in 1713. The more cases you combine, the closer the actual results come to the average you expect. Insurance works by turning one person's uncertain and possibly ruinous loss into a small, predictable payment shared by many people. Each customer pays a premium, and the money from all of them covers the losses of the unlucky few. Insurers face their own problems, however. People who know they are at high risk are more likely to buy insurance, and people who are insured may become a little less careful. Economists call these problems adverse selection and moral hazard, and insurers use excesses, checks and careful pricing to manage them."
  },
  {
    title: "Why the Dollar Rules",
    topic: "Currencies",
    text: "The US dollar plays a special role in the world economy. Much of the world's trade is priced in dollars, including oil, and central banks around the world hold more of their reserves in dollars than in any other currency. Many international loans are also made in dollars. This position dates back to the end of the Second World War, when the Bretton Woods agreement placed the dollar at the centre of the international system. Even after the link to gold ended in 1971, the dollar stayed on top, because the United States has a large economy, deep financial markets and a long record of paying its debts. The dollar's role brings advantages, such as cheaper borrowing for the American government. It also means that decisions by the American central bank affect interest rates and economies all over the world. Other currencies, such as the euro and the Chinese yuan, play growing roles, but none has replaced the dollar."
  },
  {
    title: "The Game of Chicken",
    topic: "Game theory",
    text: "In the game of chicken, two drivers race toward each other on a narrow road. The first to swerve is the chicken and loses face. If neither swerves, both crash. If both swerve, nobody wins much, but nobody is hurt. Each driver would like the other to give way, and the danger is that both are too proud to do so. In 1959, the philosopher Bertrand Russell compared the nuclear standoff between the superpowers to this deadly game. Game theorists use chicken to study brinkmanship, the strategy of pushing a dangerous situation close to the edge in the hope that the other side will back down first. Strangely, appearing reckless can be an advantage: a driver who visibly throws the steering wheel out of the window forces the other to swerve. The same logic appears in strikes, trade disputes and political arguments over government budgets."
  },
  {
    title: "The Queen's Potter",
    topic: "Marketing",
    text: "In the 1760s, the English potter Josiah Wedgwood received an order for a tea set from Queen Charlotte, the wife of King George the Third. Wedgwood was delighted, and he made the most of it. With the queen's permission, he called his cream coloured pottery Queen's Ware, and he advertised it widely, knowing that many people would want to buy what royalty used. Wedgwood was one of the first great marketers. He opened elegant showrooms in London, sent salesmen around the country with samples, printed illustrated catalogues and offered customers free delivery and the chance to return goods they did not like. He also sold his products to royal families abroad, and used their names to impress wealthy customers at home. Today, celebrities and influencers on social media do much the same thing, but the basic idea of using famous customers to sell products is more than two hundred and fifty years old."
  },
  {
    title: "The World Trade Organization",
    topic: "Trade",
    text: "After the Second World War, many countries wanted to avoid repeating the trade wars of the 1930s. In 1947, they signed the General Agreement on Tariffs and Trade, which set rules for lowering tariffs step by step through rounds of negotiations. In 1995, it was replaced by a new body, the World Trade Organization, based in Geneva. The WTO now has more than one hundred and sixty members, covering most of world trade. Its basic principles include treating all trading partners equally and not raising agreed tariffs. One of its most important roles is settling disputes: when a member believes that another has broken the rules, it can bring a case, and if it wins it may be allowed to respond with tariffs of its own. Critics argue that the organisation has been too slow to reach new agreements, and its dispute system has been weakened in recent years, but it remains the main forum for global trade rules."
  },
  {
    title: "The Price of Free Apps",
    topic: "Opportunity cost",
    text: "Many of the most popular apps and websites cost nothing to download. But economists like to point out that free products still have a price. Often, you pay with your attention, because the company earns money by showing you advertisements. You may also pay with information about yourself, which helps the company to target those advertisements more precisely. And you pay with time, the hours spent scrolling that could have gone into something else. None of this means that free services are bad. Many are genuinely useful, and they would be unaffordable for many people if they cost money. But understanding how a business makes its money helps you to see its incentives. If a service earns more when you stay longer, it has a reason to design features that keep you watching. A popular saying sums this up: if you are not paying for the product, you may be the product. Thinking about the hidden price helps you to decide how much of your time and data a free service is really worth."
  },
  {
    title: "The World's Oldest Companies",
    topic: "Business history",
    text: "Which businesses have survived the longest? For more than fourteen centuries, a Japanese company called Kongo Gumi built and repaired Buddhist temples. It was founded in 578 and run by the same family for generations, until it ran into financial trouble and was taken over by a larger construction company in 2006. In Sweden, the mining company Stora Kopparberg could point to a share document dated 1288, which makes it one of the oldest companies in the world. The Italian gun maker Beretta has been owned by the same family since the sixteenth century. Japan has an unusually large number of very old firms, many of them small inns, sweet makers and craft businesses. Researchers who study them often find similar habits: they focus on one craft, avoid large debts, keep strong family traditions, and care more about surviving than about growing fast."
  },
  {
    title: "What Economics Is About",
    topic: "Economics",
    text: "Many people think economics is about money, but economists usually describe it more broadly. In 1932, the British economist Lionel Robbins defined it as the science that studies how people use scarce means that have alternative uses. The key words are scarce and alternative. Time, land, materials and attention are limited, and each can be used in different ways. A field can grow wheat or hold houses. An hour can be spent working, resting or learning. Because we cannot have everything, we must choose, and every choice means giving something up. Economics studies how individuals, businesses and governments make these choices, and what happens when millions of choices interact in markets. This is why economists study topics that seem far from money, such as how families divide housework or how traffic jams form. Wherever there are limited means and competing ends, there is economics."
  },
  {
    title: "The Marshmallow Test",
    topic: "Behavioural economics",
    text: "In the late 1960s and early 1970s, the psychologist Walter Mischel ran a series of experiments with young children at a nursery school at Stanford University. Each child was offered a treat, such as a marshmallow, and told that if they could wait alone for a while without eating it, they would receive two. Some children ate the treat almost immediately, while others found clever ways to distract themselves, such as covering their eyes or singing. Years later, follow up studies suggested that children who had waited longer tended to do better at school. The experiment became famous as evidence that self control in childhood predicts success. Later research, with larger and more varied groups of children, found a much weaker link once family background was taken into account. Children from homes where promises were not always kept had good reason to take the treat in front of them. The test remains a fascinating, if more complicated, study of patience."
  },
  {
    title: "A Company With an Army",
    topic: "Business history",
    text: "In 1600, Queen Elizabeth I granted a charter to a group of London merchants, giving them the sole right to English trade with the East Indies. The East India Company began by trading spices, cotton cloth, silk and later tea. Over time, it became far more than a trading business. It built forts, raised its own army and, after winning the Battle of Plassey in 1757, it began to rule large parts of India directly, collecting taxes and making laws. At its height, its private army was larger than the British army itself. The company's rule caused great suffering, including famines made worse by its policies. After a major rebellion in 1857, the British government took control of India from the company the following year, and the company was finally dissolved in 1874. It is often studied as an extreme example of what can happen when a business gains the powers of a state."
  },
  {
    title: "The Magic of Compound Interest",
    topic: "Banking and finance",
    text: "Suppose you save one thousand dollars at an interest rate of seven percent a year. After one year, you have one thousand and seventy dollars. In the second year, you earn interest not only on your original money but also on the seventy dollars you earned the year before. This is compound interest: interest on interest. At first, the effect seems small, but over long periods it becomes powerful. At seven percent a year, money roughly doubles in about ten years, so one thousand dollars becomes about two thousand after ten years, four thousand after twenty, and eight thousand after thirty, without adding a single extra dollar. This is why starting to save early makes such a difference. A person who saves a modest amount from the age of twenty five can end up with more than someone who saves twice as much from the age of forty five. The same force works in reverse for debts, which can grow alarmingly if they are left unpaid."
  },
  {
    title: "Joan Robinson",
    topic: "Famous economists",
    text: "Joan Robinson was one of the leading economists of the twentieth century, and one of very few women in the field at the time. She worked at Cambridge University in England, where she was part of the circle around John Maynard Keynes. In 1933, she published The Economics of Imperfect Competition, a study of markets that are neither perfectly competitive nor complete monopolies, which describes most real markets. In the same book, she introduced the word monopsony, for a market with only one buyer, such as a town where a single large employer hires most of the workers. That idea is still used today in debates about wages. Robinson was known for her sharp mind and her sharp tongue, and she challenged many accepted ideas throughout her career. Many economists believed that she deserved a Nobel Prize, but she never received one before her death in 1983."
  },
  {
    title: "The Economics of a Coffee Shop",
    topic: "Everyday economics",
    text: "A cup of coffee in a city cafe might cost three or four dollars, yet the coffee beans in it cost only a small part of that. Where does the rest of the money go? A large share pays for staff, who must be paid even during quiet hours. Another large share goes on rent, which can be very high in busy streets where many customers walk past. There are also costs for milk, cups, electricity, machines, insurance, cleaning and taxes. Many independent cafes make only a small profit, and many close within a few years. Coffee shops use several tricks to improve their numbers. They sell food and snacks, which often earn more than drinks. They encourage customers to choose larger sizes, which cost the shop little extra. Some offer loyalty cards to bring people back. When you buy a coffee, you are paying less for the drink itself than for a place, a service and a few minutes of comfort."
  },
  {
    title: "Who Wins and Who Loses",
    topic: "Inflation",
    text: "Inflation does not hurt everyone equally. People who have borrowed money often gain, because the money they pay back is worth less than the money they borrowed. A family with a large fixed rate mortgage, for example, finds that its monthly payment becomes easier to afford as wages and prices rise. Savers usually lose, unless the interest they earn is higher than the rate of inflation. People on fixed incomes, such as some pensioners, can also suffer, because their payments buy less every year. Workers lose if their wages rise more slowly than prices, which often happens when inflation jumps suddenly. Governments with large debts may quietly benefit, since inflation reduces the real value of what they owe. Unexpected inflation causes the most trouble, because people cannot plan for it. When everyone expects the same steady rate, wages, interest rates and contracts can be adjusted in advance. This is one reason why central banks try to keep inflation low and predictable, rather than simply as low as possible."
  },
  {
    title: "A Town Built on Chocolate",
    topic: "Company stories",
    text: "Milton Hershey failed in business several times before he succeeded with caramels in Pennsylvania. In 1900, he sold his caramel company for a million dollars and decided to focus on milk chocolate, which at the time was a luxury made mostly in Europe. He wanted to produce it cheaply enough for ordinary people. Hershey built a huge factory in the countryside, close to dairy farms that could supply fresh milk, and around it he built a whole town for his workers, with houses, schools, parks and public transport. The town was later named Hershey. In 1909, he and his wife Catherine founded a school for orphan boys, and after her death he gave most of his fortune to it. The school, which now helps many children from poor families, still controls a large share of the chocolate company today. Hershey's milk chocolate bar, first sold in 1900, made the company famous across the United States, and visitors still come to the town to see where it is made."
  },
  {
    title: "Strong Currency, Weak Currency",
    topic: "Currencies",
    text: "When people hear that their country's currency is strong, they often think it is good news, and for some people it is. A strong currency makes holidays abroad and imported goods cheaper. But it also makes a country's exports more expensive for foreign buyers, which can hurt manufacturers and farmers who sell abroad, as well as tourist businesses at home. A weak currency has the opposite effects. Exporters gain, because their goods become cheaper abroad, while imports, including fuel and food, become more expensive, which can push up inflation. Countries sometimes accuse each other of keeping their currencies artificially weak to gain an advantage in trade. Neither strong nor weak is good in itself. What matters is how the exchange rate affects the different groups in an economy, and whether it moves gradually or suddenly, since sudden changes are much harder for businesses and households to adjust to."
  },
  {
    title: "Selling the Airwaves",
    topic: "Game theory",
    text: "Mobile phones, radio and television all need slices of the radio spectrum, and governments decide who may use them. For decades, many governments gave out these licences through lengthy hearings or even lotteries. In 1994, the United States began selling them in auctions designed with the help of economists, including Paul Milgrom and Robert Wilson. The design was tricky, because licences in neighbouring regions can be worth more together than separately, so bidders need to bid on many at once. The economists created auctions in which all the licences were sold at the same time, over many rounds, so that bidders could adjust their plans as prices rose. The auctions raised billions of dollars for the government and put the licences in the hands of the companies that valued them most. Similar designs were copied around the world, and in 2020 Milgrom and Wilson won the Nobel Prize in Economics for improving auction theory and inventing new auction formats."
  },
  {
    title: "Circuit Breakers",
    topic: "Markets and stocks",
    text: "After the stock market crash of October 1987, when American shares fell by more than twenty percent in a single day, regulators looked for ways to slow down panic. One of their solutions was the circuit breaker. If prices fall by a certain percentage within one day, trading is paused for a short time, or stopped for the rest of the day. The pause gives investors time to think, gather information and calm down, instead of simply reacting to the selling of others. The name comes from the electrical device that cuts the power when a circuit is overloaded. Circuit breakers have rarely been triggered in the United States, but in March 2020, when the pandemic shook markets, they halted trading several times within a few weeks. Many stock exchanges around the world use similar rules. Critics argue that pauses can sometimes increase panic, as traders rush to sell before a halt, but most exchanges consider them a useful safety valve."
  },
  {
    title: "Refill, Reuse, Recycle",
    topic: "Entrepreneurs",
    text: "In 1976, Anita Roddick opened a small shop in Brighton, England, selling skin and hair care products made with natural ingredients. She had little money, so she sold her products in cheap plastic bottles and offered to refill them for customers who brought them back, partly to save costs. The shop's walls were painted dark green, it is said, to hide patches of damp. These practical choices became part of the brand's identity. The Body Shop campaigned against testing cosmetics on animals and promoted trade with small producers in poorer countries, long before such ideas were common in business. The company grew rapidly through franchising and opened shops in dozens of countries. Roddick showed that a business could build a loyal following by standing for something beyond its products. The company was sold to the French cosmetics group L'Oreal in 2006, and it has changed owners several times since."
  },
  {
    title: "The Four Ps",
    topic: "Marketing",
    text: "In 1960, the American marketing professor E. Jerome McCarthy summed up the main decisions a business must make about a product with four words beginning with P. Product: what exactly are we selling, and what needs does it meet? Price: how much will customers pay, and how does our price compare with rivals? Place: where and how will customers buy it, in shops, online or by post? Promotion: how will customers find out about it, through advertising, reviews or word of mouth? The four Ps became one of the most famous ideas in marketing, taught to business students all over the world. Later writers added more Ps, such as people and process, especially for service businesses like restaurants and hotels. Critics say that the framework looks at things from the seller's point of view rather than the customer's. Even so, it remains a simple checklist that helps businesses to think about all the parts of bringing a product to market."
  },
  {
    title: "Money by Text Message",
    topic: "History of money",
    text: "In 2007, the Kenyan mobile phone company Safaricom launched a service called M-Pesa. Pesa means money in Swahili. The idea was simple. Customers could pay cash into their phone account at a small shop that acted as an agent, then send money to another person by text message. The receiver could collect the cash at any agent in the country. At the time, most Kenyans did not have a bank account, and sending money to relatives in distant villages was slow, expensive and risky. M-Pesa spread with astonishing speed, and within a few years it was used by most adults in the country. People used it to pay bills, receive wages, buy goods and save small amounts safely. Researchers have argued that access to mobile money helped many households to cope better with sudden problems, such as illness or a bad harvest. The service later expanded to other countries, and it is often cited as an example of a poorer country leapfrogging older technology."
  },
  {
    title: "Women in Wartime Factories",
    topic: "Labour and work",
    text: "During the Second World War, millions of men left their jobs to join the armed forces, just as factories needed more workers than ever to produce aircraft, ships and weapons. Governments in Britain and the United States encouraged women to fill the gap. In the United States, millions of women entered the workforce, many of them in jobs that had been considered suitable only for men, such as welding and riveting. A poster of a confident woman in a work shirt rolling up her sleeve, under the words We Can Do It, later became a famous symbol of that era, and such workers came to be known as Rosie the Riveter. When the war ended, many women were pushed out of factory jobs to make way for returning soldiers. But the experience changed attitudes about women's work, and over the following decades the share of women in paid employment rose steadily in most rich countries."
  },
  {
    title: "Who Really Pays a Tax?",
    topic: "Taxes and government",
    text: "When a government puts a tax on a product, the law says who must hand the money over, but that is not necessarily who pays it in the end. Suppose a new tax of one dollar is charged on every packet of cigarettes, collected from the sellers. If smokers are very attached to their habit and keep buying almost the same amount, sellers can raise their prices by nearly the whole dollar, and the smokers end up paying most of the tax. If customers can easily switch to something else, sellers cannot raise prices much and must absorb more of the tax themselves. Economists call this question tax incidence. The general rule is that the side of the market that is less able to change its behaviour ends up bearing more of the tax. This is why debates about who pays for taxes on companies, fuel or housing are so complicated: the answer depends on how people react, not on who writes the cheque."
  },
  {
    title: "The Rise of Shenzhen",
    topic: "Trade",
    text: "In 1980, the Chinese government chose Shenzhen, then a small town next to Hong Kong, to become one of its first special economic zones. In these zones, foreign companies were allowed to invest, build factories and trade with fewer restrictions than in the rest of the country. Shenzhen was close to Hong Kong's port and its money, and it attracted workers from all over China. The results were dramatic. Factories making clothes, toys and later electronics sprang up, and the town grew into a city of more than ten million people within a few decades. Today, Shenzhen is home to major technology companies and is known for innovation as much as for manufacturing. Its success encouraged China to open more of its economy to trade and investment, a change that transformed the country and helped to lift hundreds of millions of people out of poverty."
  },
  {
    title: "When Price Limits Backfire",
    topic: "Supply and demand",
    text: "In the 1970s, the United States government controlled the price of petrol. The aim was to protect drivers from rising costs during a period of high inflation and oil shocks. But when supply fell in 1973 and again in 1979, the controlled price could not rise to balance the market. Instead of paying with money, people paid with their time. Long queues formed at petrol stations, some stations ran dry, and several states introduced rationing systems, such as allowing cars with odd or even number plates to buy fuel only on certain days. Many economists argue that the controls made the shortages worse, because the low price gave drivers no reason to use less fuel and gave suppliers no reason to deliver more to the areas that needed it most. When the controls were removed in 1981, the queues disappeared. The episode is often used to show that a price kept artificially low does not make a scarce good less scarce."
  },
  {
    title: "The Printing Press",
    topic: "Technology and business",
    text: "Before the middle of the fifteenth century, books in Europe were copied by hand, usually by monks or professional scribes. A single book could take months to produce, and only churches, universities and the very rich could afford them. Around 1450, Johannes Gutenberg, a goldsmith in the German city of Mainz, developed a printing press with movable metal type. Each letter was cast separately and could be arranged into lines, printed, and then reused. His famous Bible was printed in the 1450s. The technology spread quickly across Europe, and by 1500 printers in hundreds of towns had produced millions of books. Prices fell dramatically, more people learned to read, and new ideas in science, religion and politics travelled faster than ever. Economists see the printing press as one of the great examples of a technology that lowered the cost of spreading information and, in doing so, transformed society."
  }
);
