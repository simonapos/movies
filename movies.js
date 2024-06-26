let movies = [
  {
    title: "Airplane!",
    image: "images/airplane.jpg",
    year: "1980",
    description:
      "Ted Striker, a former pilot who has a fear of flying, finds himself burdened with the responsibility of landing a plane safely when most of the crew and passengers fall sick due to food poisoning.",
    genre: "Comedy",
  },
  {
    title: "The Shawshank Redemption",
    image: "images/shawshank.jpg",
    year: "1994",
    description:
      "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    genre: "Drama",
  },
  {
    title: "Kill Bill: Volume 1",
    image: "images/killbill.jpg",
    year: "2003",
    description:
      "A pregnant assassin, code-named The Bride, goes into a coma for four years after her ex-boss Bill brutally attacks her. When she wakes up, she sets out to seek revenge on him and his associates.",
    genre: "Action",
  },
  {
    title: "Snatch",
    image: "images/snatch.jpg",
    year: "2000",
    description:
      "In the underbelly of London, merciless gangsters, boxing promoters, amateur thieves and violent bookmakers try to retrieve a precious diamond stolen from an Antwerp jeweller.",
    genre: "Comedy",
  },
  {
    title: "The Shining",
    image: "images/shining.jpg",
    year: "1980",
    description:
      "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
    genre: "Horror",
  },
  {
    title: "The Matrix",
    image: "images/matrix.jpg",
    year: "1999",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    genre: "Action",
  },
  {
    title: "Dune: Part One",
    image: "images/dune.jpg",
    year: "2021",
    description:
      "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
    genre: "Sci-Fi",
  },
  {
    title: "Once Upon a Time... in Hollywood",
    image: "images/onceupon.jpg",
    year: "2019",
    description:
      "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. In their mission, they must tackle several twists and turns.",
    genre: "Drama",
  },
  {
    title: "The Silence of the Lambs",
    image: "images/silence.jpg",
    year: "1991",
    description:
      "Clarice Starling, an FBI trainee, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another murderer who has been claiming female victims.",
    genre: "Horror",
  },
  {
    title: "Interstellar",
    image: "images/interstellar.jpg",
    year: "2014",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    image: "images/darkknight.jpg",
    year: "2008",
    description:
      "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
    genre: "Action",
  },
  {
    title: "Clue",
    image: "images/clue.jpg",
    year: "1985",
    description:
      "Mr Boddy hosts a dinner party for six important guests. However, the night takes a drastic turn when Mr Boddy is found dead and the attendees are forced to investigate.",
    genre: "Comedy",
  },
  {
    title: "Whiplash",
    image: "images/whiplash.jpg",
    year: "2014",
    description:
      "Andrew enrols in a music conservatory to become a drummer. But he is mentored by Terence Fletcher, whose unconventional training methods push him beyond the boundaries of reason and sensibility.",
    genre: "Drama",
  },
  {
    title: "Midsommar",
    image: "images/midsommar.jpg",
    year: "2019",
    description:
      "Dani's psychological trauma affects her relationship with Christian, her lover. However, when they visit their friend's ancestral commune in an effort to mend things, it changes their lives forever.",
    genre: "Horror",
  },
  {
    title: "Jurassic Park",
    image: "images/jurassic.jpg",
    year: "1993",
    description:
      "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger.",
    genre: "Sci-Fi",
  },
  {
    title: "Inception",
    image: "images/inception.jpg",
    year: "2010",
    description:
      "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    genre: "Action",
  },
  {
    title: "Monty Python and the Holy Grail",
    image: "images/monty.jpg",
    year: "1975",
    description:
      "King Arthur and his knights are tasked by God to find the legendary Holy Grail. During their journey, they encounter various people and obstacles that hinder them on their quest.",
    genre: "Comedy",
  },
  {
    title: "Parasite",
    image: "images/parasite.jpg",
    year: "2019",
    description:
      "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
    genre: "Drama",
  },
  {
    title: "The Birds",
    image: "images/birds.jpg",
    year: "1963",
    description:
      "The film revolves around a rich San Francisco woman, who follows a potential boyfriend to a small town in Northern California, where birds of all kinds have suddenly begun a deadly attack on humans.",
    genre: "Horror",
  },
  {
    title: "2001: A Space Odyssey",
    image: "images/space.jpg",
    year: "1968",
    description:
      "Humanity discovers a mystifying, artificial object buried underneath the lunar surface. With the assistance of HAL 9000, an intelligent computer, mankind embarks on an interesting quest.",
    genre: "Sci-Fi",
  },
  {
    title: "Casino Royale",
    image: "images/casinoroyale.jpg",
    year: "2006",
    description:
      "James Bond must prevent Le Chiffre, a banker to the world's most dangerous criminal organisations, from winning a high stakes poker game. He is assisted by Vesper Lynd, a British Treasury agent.",
    genre: "Action",
  },
  {
    title: "Hot Fuzz",
    image: "images/hotfuzz.jpg",
    year: "2007",
    description:
      "Police officer Nicholas Angel is known to be the best across London. His seniors, who are jealous of his achievements, transfer him to a remote village where he encounters various challenges.",
    genre: "Comedy",
  },
  {
    title: "Oppenheimer",
    image: "images/openheimer.jpg",
    year: "2023",
    description:
      "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    genre: "Drama",
  },
  {
    title: "Scream",
    image: "images/scream.jpg",
    year: "1996",
    description:
      "When Sidney receives a mysterious phone call and finds that her friends are being killed, she suspects that a serial killer may be on the prowl, who is also linked to her mother's murder.",
    genre: "Horror",
  },
  {
    title: "Blade Runner",
    image: "images/blade.jpg",
    year: "1982",
    description:
      "Rick Deckard, an ex-policeman, becomes a special agent with a mission to exterminate a group of violent androids. As he starts getting deeper into his mission, he questions his own identity.",
    genre: "Sci-Fi",
  },
];

export default movies;
