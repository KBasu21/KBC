// Questions data
const questions = [
    { question: "Which Greek philosopher is credited with developing the concept of the 'Theory of Forms'?", options: ["Socrates", "Plato", "Aristotle", "Pythagoras"], answer: "Plato" },
    { question: "In the Bhagavad Gita, who is described as the eternal soul that cannot be destroyed?", options: ["Arjuna", "Lord Krishna", "Karna", "Bhishma"], answer: "Lord Krishna" },
    { question: "Which Roman emperor is famous for his brutal persecution of Christians and is associated with the Great Fire of Rome in 64 AD?", options: ["Julius Caesar", "Caligula", "Nero", "Augustus"], answer: "Nero" },
    { question: "In Indian mythology, which demon was defeated by Lord Vishnu in his Varaha avatar?", options: ["Hiranyakashipu", "Hiranyaksha", "Ravana", "Mahishasura"], answer: "Hiranyaksha" },
    { question: "Which Indian king is considered the first emperor of the Maurya dynasty?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], answer: "Chandragupta Maurya" },
    { question: "Who is the Greek god of the sky and thunder, and the king of the gods?", options: ["Zeus", "Apollo", "Ares", "Poseidon"], answer: "Zeus" },
    { question: "Which scientist is credited with the discovery of the circulation of blood in the human body?", options: ["Andreas Vesalius", "William Harvey", "Rene Descartes", "Avicenna"], answer: "William Harvey" },
    { question: "Which country won the first Olympic Games in 1896?", options: ["France", "Germany", "United States", "Greece"], answer: "Greece" },
    { question: "Which element is known as the 'lightest metal' and is used in rechargeable batteries?", options: ["Lithium", "Sodium", "Aluminum", "Magnesium"], answer: "Lithium" },
    { question: "Who was the first woman to win a Nobel Prize in Physics?", options: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Lise Meitner"], answer: "Marie Curie" },
    { question: "Which ancient civilization is believed to have first used the concept of zero?", options: ["Ancient Egyptians", "Ancient Greeks", "Indus Valley Civilization", "Maya Civilization"], answer: "Indus Valley Civilization" },
    { question: "Who was the first emperor of the Roman Empire?", options: ["Augustus", "Nerva", "Trajan", "Julius Caesar"], answer: "Augustus" },
    { question: "Which element is most abundant in the Earth crust?", options: ["Oxygen", "Silicon", "Aluminum", "Iron"], answer: "Oxygen" },
    { question: "In the Mahabharata, who was the teacher of the Pandavas before Dronacharya?", options: ["Kripacharya", "Bhishma", "Veda Vyasa", "Parashurama"], answer: "Parashurama" },
    { question: "Which economic system is based on private ownership and the free market?", options: ["Socialism", "Communism", "Capitalism", "Feudalism"], answer: "Capitalism" },
    { question: "Who is known as the father of modern economics?", options: ["John Maynard Keynes", "Adam Smith", "Karl Marx", "Milton Friedman"], answer: "Adam Smith" },
    { question: "In Greek mythology, which creature is part lion, part goat, and part serpent?", options: ["Minotaur", "Hydra", "Chimera", "Cerberus"], answer: "Chimera" },
    { question: "Who was the first cricketer to score 400 runs in a single Test match inning?", options: ["Brian Lara", "Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis"], answer: "Brian Lara" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Greece", "United States"], answer: "Brazil" },
    { question: "Who was the first female cricketer to score a double century in One-Day Internationals?", options: ["Mithali Raj", "Ellyse Perry", "Stafanie Taylor", "Charlotte Edwards"], answer: "Mithali Raj" },
    { question: "Which famous battle did Napoleon Bonaparte lose in 1815, marking the end of his reign?", options: ["Battle of Leipzig", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Austerlitz"], answer: "Battle of Waterloo" },
    { question: "Who is the god of war in Norse mythology?", options: ["Odin", "Thor", "Loki", "Tyr"], answer: "Thor" },
    { question: "In Indian mythology, who is the father of Lord Ganesha?", options: ["Lord Shiva", "Lord Vishnu", "Lord Brahma", "Lord Indra"], answer: "Lord Shiva" },
    { question: "Which river is considered the longest in Africa?", options: ["Nile", "Congo", "Zambezi", "Orange"], answer: "Nile" },
    { question: "Which YouTube video became the first to reach 10 billion views?", options: ["'Despacito' by Luis Fonsi", "'Shape of You' by Ed Sheeran", "'Baby Shark' by Pinkfong", "'See You Again' by Wiz Khalifa"], answer: "'Baby Shark' by Pinkfong" },
    { question: "Which football club has the most UEFA Europa League trophies?", options: ["Chelsea", "Sevilla", "Liverpool", "Juventus"], answer: "Sevilla" },
    { question: "Which was the first country to host the FIFA World Cup?", options: ["Italy", "France", "Brazil", "Uruguay"], answer: "Uruguay" },
    { question: "Which Indian cricketer is known as the 'Master Blaster'?", options: ["Virat Kohli", "Sachin Tendulkar", "Kapil Dev", "MS Dhoni"], answer: "Sachin Tendulkar" },
    { question: "Who was the first cricket player to be given the ICC Player of the Year award?", options: ["Shane Warne", "Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar"], answer: "Ricky Ponting" },
    { question: "In the Mahabharata, who is considered the greatest archer of all time?", options: ["Arjuna", "Karna", "Bhima", "Drona"], answer: "Arjuna" },
    { question: "Which of the following is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: "Skin" },
    { question: "What is the name of the process by which plants convert light energy into chemical energy?", options: ["Photosynthesis", "Respiration", "Transpiration", "Germination"], answer: "Photosynthesis" },
    { question: "What is the genetic disorder caused by the absence of a certain enzyme and leads to the accumulation of a fatty substance in the brain?", options: ["Down Syndrome", "Tay-Sachs Disease", "Cystic Fibrosis", "Hemophilia"], answer: "Tay-Sachs Disease" },
    { question: "Who was the last Mughal emperor of India?", options: ["Shah Alam II", "Akbar II", "Bahadur Shah Zafar", "Jahangir"], answer: "Bahadur Shah Zafar" },
    { question: "The Battle of Plassey (1757) was fought between which two groups?", options: ["Marathas and the British", "Nadir Shah and the Mughals", "British East India Company and the Nawab of Bengal", "Sikhs and Mughals"], answer: "British East India Company and the Nawab of Bengal" },
    { question: "Who was the first ruler of the Maurya dynasty?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], answer: "Chandragupta Maurya" },
    { question: "In Greek mythology, who is the god of the underworld?", options: ["Apollo", "Hades", "Poseidon", "Hermes"], answer: "Hades" },
    { question: "According to the Ramayana, who was the mother of Lord Rama?", options: ["Kaikeyi", "Sumitra", "Kausalya", "Mandodari"], answer: "Kausalya" },
    { question: "In the Mahabharata, who was the charioteer of Arjuna during the Kurukshetra War?", options: ["Lord Krishna", "Karna", "Bhishma", "Dronacharya"], answer: "Lord Krishna" },
    { question: "Which Hindu god is commonly depicted with an elephant head?", options: ["Vishnu", "Brahma", "Shiva", "Ganesha"], answer: "Ganesha" },
    { question: "In which country did the legend of 'Robin Hood' originate?", options: ["France", "Germany", "England", "Ireland"], answer: "England" },
    { question: "In the Greek myth, who was turned into a spider after being defeated by Athena in a weaving contest?", options: ["Medusa", "Arachne", "Hera", "Persephone"], answer: "Arachne" },
    { question: "What is the term used for the study of the production, distribution, and consumption of goods and services?", options: ["Sociology", "Economics", "Geography", "Political Science"], answer: "Economics" },
    { question: "In which year did India adopt its current economic policy of liberalization, privatization, and globalization (LPG)?", options: ["1989", "1991", "1995", "2000"], answer: "1991" },
    { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "Which country has the highest number of volcanoes?", options: ["United States", "Japan", "Indonesia", "Iceland"], answer: "Indonesia" },
    { question: "Which YouTube video became the first to reach 1 billion views?", options: ['"Despacito" by Luis Fonsi', '"Gangnam Style" by Psy', '"Shape of You" by Ed Sheeran', '"See You Again" by Wiz Khalifa'], answer: '"Gangnam Style" by Psy' },
    { question: "Who was the first Indian YouTuber to reach 10 million subscribers?", options: ["BB Ki Vines", "Ashcharyaa", "Amit Bhadana", "Technical Guruji"], answer: "BB Ki Vines" },
    { question: "Who holds the record for the most centuries in Test cricket?", options: ["Ricky Ponting", "Brian Lara", "Sachin Tendulkar", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Who is known as the 'Father of Indian Cricket'?", options: ["Kapil Dev", "Sunil Gavaskar", "Lala Amarnath", "C.K. Nayudu"], answer: "C.K. Nayudu" },
    { question: "Which cricketer has the most wickets in One-Day Internationals?", options: ["Shane Warne", "Muttiah Muralitharan", "Wasim Akram", "James Anderson"], answer: "Muttiah Muralitharan" },
    { question: "Which country won the 2018 FIFA World Cup?", options: ["Germany", "Brazil", "France", "Argentina"], answer: "France" },
    { question: "Who has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Ronaldinho"], answer: "Lionel Messi" },
    { question: "Which football club has won the most UEFA Champions League titles?", options: ["Barcelona", "AC Milan", "Real Madrid", "Liverpool"], answer: "Real Madrid" },
    { question: "Who was the teacher of the Pandavas and Kauravas in the Mahabharata?", options: ["Lord Krishna", "Dronacharya", "Bhishma", "Veda Vyasa"], answer: "Dronacharya" },
    { question: "Who was the mother of the Kauravas in the Mahabharata?", options: ["Kunti", "Gandhari", "Draupadi", "Subhadra"], answer: "Gandhari" },
    { question: "What is the national flower of India?", options: ["Rose", "Lotus", "Jasmine", "Lily"], answer: "Lotus" },
    { question: "Who developed the theory of general relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
    { question: "What is the currency of Japan?", options: ["Won", "Peso", "Yen", "Ringgit"], answer: "Yen" },
    { question: "Which ancient Greek mathematician is known as the 'Father of Geometry'?", options: ["Archimedes", "Euclid", "Pythagoras", "Thales"], answer: "Euclid" },
    { question: "In Indian history, the Third Battle of Panipat was fought between which two powers?", options: ["Marathas and British", "Marathas and Afghans", "Mughals and British", "Rajputs and Afghans"], answer: "Marathas and Afghans" },
    { question: "Which philosopher is credited with the quote 'I think, therefore I am'?", options: ["Plato", "Descartes", "Aristotle", "Socrates"], answer: "Descartes" },
    { question: "Which Mughal emperor commissioned the construction of the Taj Mahal?", options: ["Babur", "Jahangir", "Akbar", "Shah Jahan"], answer: "Shah Jahan" },
    { question: "In quantum mechanics, the Heisenberg Uncertainty Principle is associated with what property?", options: ["Position and momentum", "Mass and energy", "Charge and spin", "Time and space"], answer: "Position and momentum" },
    { question: "Which Roman structure is considered one of the greatest works of architecture and engineering in history?", options: ["Pantheon", "Colosseum", "Hadrian's Wall", "Roman Forum"], answer: "Colosseum" },
    { question: "Who was the founder of the Rashtrakuta dynasty?", options: ["Dantidurga", "Amoghavarsha", "Krishna I", "Govinda III"], answer: "Dantidurga" },
    { question: "Which European power established the first trading post in India?", options: ["British", "Portuguese", "Dutch", "French"], answer: "Portuguese" },
    { question: "In astrophysics, a black hole is defined by which surface?", options: ["Event horizon", "Accretion disk", "Photon sphere", "Singularity"], answer: "Event horizon" },
    { question: "Which book is considered the earliest written account of medicine?", options: ["Ebers Papyrus", "Sushruta Samhita", "The Canon of Medicine", "De Materia Medica"], answer: "Ebers Papyrus" },
    { question: "Which mathematical conjecture deals with prime numbers and their gaps?", options: ["Goldbach Conjecture", "Twin Prime Conjecture", "Fermat's Last Theorem", "Riemann Hypothesis"], answer: "Twin Prime Conjecture" },
    { question: "Who was the famous Chinese traveler who visited India during the Gupta period?", options: ["Marco Polo", "Fa-Hien", "Xuanzang", "Ibn Battuta"], answer: "Fa-Hien" },
    { question: "Which chemical element was the first to be artificially created?", options: ["Technetium", "Plutonium", "Uranium", "Neptunium"], answer: "Technetium" },
    { question: "In economics, what does the term 'Giffen good' refer to?", options: ["Luxury good", "Inferior good", "Veblen good", "Substitute good"], answer: "Inferior goodB" },
    { question: "Which Persian ruler invaded India in 1739 and sacked Delhi?", options: ["Nadir Shah", "Babur", "Humayun", "Alauddin Khilji"], answer: "Nadir Shah" },
    { question: "Which famous library of antiquity was located in Egypt?", options: ["Library of Alexandria", "Library of Pergamum", "Vatican Library", "Imperial Library of Constantinople"], answer: "Library of Alexandria" },
    { question: "In genetics, what term describes a genetic cross involving two traits?", options: ["Monohybrid cross", "Dihybrid cross", "Test cross", "Back cross"], answer: "Dihybrid cross" },
    { question: "Which physicist is associated with the development of quantum electrodynamics?", options: ["Niels Bohr", "Richard Feynman", "Erwin Schrödinger", "Paul Dirac"], answer: "Richard Feynman" },
    { question: "Which Hindu scripture is known as the 'Song of God'?", options: ["Vedas", "Upanishads", "Bhagavad Gita", "Ramayana"], answer: "Bhagavad Gita" },
    { question: "Which famous treaty ended the Thirty Years' War in 1648?", options: ["Treaty of Westphalia", "Treaty of Versailles", "Treaty of Utrecht", "Treaty of Tordesillas"], answer: "Treaty of Westphalia" },
    { question: "In Greek mythology, who was condemned to hold up the sky for eternity?", options: ["Atlas", "Prometheus", "Sisyphus", "Orion"], answer: "Atlas" },
    { question: "Which famous battle is considered the turning point in Napoleon's campaign in Russia?", options: ["Battle of Borodino", "Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar"], answer: "Battle of Borodino" },
    { question: "Which particle is known as the 'God particle'?", options: ["Photon", "Electron", "Higgs boson", "Quark"], answer: "Higgs boson" },
    { question: "Which Renaissance artist painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Michelangelo" },
    { question: "Which empire was founded by Cyrus the Great?", options: ["Macedonian Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"], answer: "Persian Empire" },
    { question: "Which Mughal ruler is credited with introducing the Mansabdari system?", options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"], answer: "Akbar" },
    { question: "In which field is the Abel Prize awarded?", options: ["Physics", "Mathematics", "Medicine", "Economics"], answer: "Mathematics" },
    { question: "Which city was known as Byzantium before being renamed Constantinople?", options: ["Athens", "Rome", "Istanbul", "Alexandria"], answer: "Istanbul" },
    { question: "Which scientist is known for discovering the law of elasticity?", options: ["Isaac Newton", "Robert Hooke", "James Clerk Maxwell", "Charles Darwin"], answer: "Robert Hooke" },
    { question: "Which is the oldest known epic poem in human history?", options: ["The Iliad", "The Odyssey", "The Epic of Gilgamesh", "Beowulf"], answer: "The Epic of Gilgamesh" },
    { question: "Which ancient mathematical text contains the earliest known use of the concept of zero as a number?", options: ["Rhind Papyrus", "Sulba Sutras", "Bakhshali Manuscript", "Plimpton 322"], answer: "Bakhshali Manuscript" },
    { question: "Who was the ruler of the Vijayanagara Empire during its greatest expansion?", options: ["Krishnadevaraya", "Harihara I", "Bukka Raya I", "Achyuta Deva Raya"], answer: "Krishnadevaraya" },
    { question: "Which 20th-century philosopher is known for his work on the philosophy of language and the concept of 'language games'?", options: ["Jean-Paul Sartre", "Ludwig Wittgenstein", "Michel Foucault", "Jacques Derrida"], answer: "Ludwig Wittgenstein" },
    { question: "Which Greek historian is known as the 'Father of History'?", options: ["Herodotus", "Thucydides", "Xenophon", "Polybius"], answer: "Herodotus" },
    { question: "Which treaty marked the formal end of World War I?", options: ["Treaty of Versailles", "Treaty of Brest-Litovsk", "Treaty of Trianon", "Treaty of Saint-Germain"], answer: "Treaty of Versailles" },
    { question: "Which ruler is associated with the construction of the Great Wall of China?", options: ["Kublai Khan", "Qin Shi Huang", "Han Wudi", "Tang Taizong"], answer: "Qin Shi Huang" },
    { question: "Which famous polymath wrote 'De Revolutionibus Orbium Coelestium'?", options: ["Galileo Galilei", "Johannes Kepler", "Nicolaus Copernicus", "Tycho Brahe"], answer: "Nicolaus Copernicus" },
    { question: "Which empire's downfall began with the Battle of Plassey in 1757?", options: ["Mughal Empire", "Maratha Empire", "British Empire", "Nawab of Bengal"], answer: "Nawab of BengalD" },
    { question: "In mathematics, what is the name of the unsolved problem concerning the distribution of prime numbers?", options: ["Poincaré Conjecture", "Riemann Hypothesis", "Goldbach Conjecture", "Fermat's Last Theorem"], answer: "Riemann Hypothesis" },
    { question: "Which ancient city was buried under volcanic ash from the eruption of Mount Vesuvius?", options: ["Pompeii", "Carthage", "Delphi", "Sparta"], answer: "Pompeii" },
    { question: "Who is considered the founder of modern political science?", options: ["Plato", "Aristotle", "Niccolò Machiavelli", "John Locke"], answer: "Niccolò Machiavelli" },
    { question: "Which physicist developed the theory of blackbody radiation and quantum theory?", options: ["Albert Einstein", "Niels Bohr", "Max Planck", "Werner Heisenberg"], answer: "Max Planck" },
    { question: "In astronomy, what is the term for a system where multiple stars orbit a common center of mass?", options: ["Binary star", "Ternary system", "Quasar", "Globular cluster"], answer: "Binary star" },
    { question: "Who was the chief architect of the Indian Constitution?", options: ["Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel", "Mahatma Gandhi"], answer: "B.R. Ambedkar" },
    { question: "Which ancient civilization built the Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: "Inca" },
    { question: "Which poet wrote 'The Waste Land', one of the most important modernist works?", options: ["T.S. Eliot", "Ezra Pound", "W.B. Yeats", "Robert Frost"], answer: "T.S. Eliot" },
    { question: "Which empire did Genghis Khan found?", options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Roman Empire"], answer: "Mongol Empire" },
    { question: "Which Indian scientist is credited with pioneering research on radio waves?", options: ["C.V. Raman", "Homi Bhabha", "Jagadish Chandra Bose", "Vikram Sarabhai"], answer: "Jagadish Chandra Bose" },
    { question: "Which theorem in physics states that energy cannot be created or destroyed?", options: ["Second Law of Thermodynamics", "Law of Conservation of Energy", "Law of Conservation of Mass", "Planck's Law"], answer: "Law of Conservation of Energy" },
    { question: "Who was the last pharaoh of ancient Egypt?", options: ["Tutankhamun", "Cleopatra VII", "Ramses II", "Akhenaten"], answer: "Cleopatra VII" },
    { question: "Which famous equation relates energy and mass?", options: ["F=ma", "E=mc^2", "V=IR", "P=VI"], answer: "E=mc^2" },
    { question: "In classical mechanics, which quantity is defined as mass times velocity?", options: ["Force", "Energy", "Momentum", "Power"], answer: "Momentum" },
    { question: "Which Mughal emperor established Din-i Ilahi?", options: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"], answer: "Akbar" },
    { question: "Which famous novel begins with the line 'Call me Ishmael'?", options: ["Moby-Dick", "Pride and Prejudice", "The Great Gatsby", "To Kill a Mockingbird"], answer: "Moby-Dick" },
    { question: "Who invented the printing press?", options: ["Johannes Gutenberg", "Leonardo da Vinci", "Thomas Edison", "Nikola Tesla"], answer: "Johannes Gutenberg" },
    { question: "Which Indian state was annexed by the British under the Doctrine of Lapse?", options: ["Awadh", "Punjab", "Mysore", "Jhansi"], answer: "Jhansi" },
    { question: "Who wrote 'A Brief History of Time'?", options: ["Stephen Hawking", "Carl Sagan", "Richard Feynman", "Neil deGrasse Tyson"], answer: "Stephen Hawking" },
    { question: "Which economic concept is used to describe the decrease in marginal utility as consumption increases?", options: ["Law of Supply", "Law of Diminishing Marginal Utility", "Law of Demand", "Law of Diminishing Returns"], answer: "Law of Diminishing Marginal Utility" },
    { question: "Which battle in 331 BC marked the decisive victory of Alexander the Great over Darius III?", options: ["Battle of Issus", "Battle of Gaugamela", "Battle of Marathon", "Battle of Granicus"], answer: "Battle of Gaugamela" },
    { question: "Which dynasty built the Khajuraho temples?", options: ["Maurya", "Chola", "Chandela", "Gupta"], answer: "Chandela" },
    { question: "Which Indian mathematician wrote 'Aryabhatiya'?", options: ["Brahmagupta", "Aryabhata", "Bhaskara I", "Varahamihira"], answer: "Aryabhata" },
    { question: "Who is credited with the development of calculus independently of Newton?", options: ["Leibniz", "Descartes", "Euler", "Fermat"], answer: "Leibniz" },
    { question: "Which medieval Islamic scholar is known for his work in optics?", options: ["Al-Kindi", "Al-Farabi", "Alhazen", "Al-Razi"], answer: "Alhazen" },
    { question: "Which physicist is known for his uncertainty principle?", options: ["Erwin Schrödinger", "Werner Heisenberg", "Niels Bohr", "Max Born"], answer: "Werner Heisenberg" },
    { question: "Which battle was fought between Prussia and Austria in 1866?", options: ["Battle of Leipzig", "Battle of Jena", "Battle of Königgrätz", "Battle of Austerlitz"], answer: "Battle of Königgrätz" },
    { question: "Who was the first emperor of unified Germany?", options: ["Frederick the Great", "Otto von Bismarck", "Wilhelm I", "Franz Joseph"], answer: "Wilhelm I" },
    { question: "Which philosopher is known for his theory of social contract and 'Leviathan'?", options: ["John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau", "Montesquieu"], answer: "Thomas Hobbes" },
    { question: "Which treaty ended the Thirty Years' War in Europe?", options: ["Treaty of Westphalia", "Treaty of Utrecht", "Treaty of Paris", "Treaty of Verdun"], answer: "Treaty of Westphalia" },
    { question: "In probability theory, what is the name of the distribution describing the number of events in a fixed interval?", options: ["Normal distribution", "Poisson distribution", "Binomial distribution", "Exponential distribution"], answer: "Poisson distribution" },
    { question: "Which explorer discovered the sea route to India?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "John Cabot"], answer: "Vasco da Gama" },
    { question: "Who developed the field equations of general relativity?", options: ["Einstein", "Schwarzschild", "Hawking", "Newton"], answer: "Einstein" },
    { question: "In Indian philosophy, which school is known for dualism?", options: ["Advaita Vedanta", "Dvaita Vedanta", "Samkhya", "Nyaya"], answer: "Dvaita Vedanta" },
    { question: "Which architect designed the dome of St. Peter's Basilica?", options: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Raphael"], answer: "Michelangelo" },
    { question: "Which German composer wrote the opera 'The Ring of the Nibelung'?", options: ["Beethoven", "Mozart", "Wagner", "Bach"], answer: "Wagner" },
    { question: "Who wrote 'Das Kapital'?", options: ["Karl Marx", "Friedrich Engels", "Adam Smith", "David Ricardo"], answer: "Karl Marx" },
    { question: "Which famous ancient city was located near the Euphrates River?", options: ["Babylon", "Nineveh", "Ur", "Thebes"], answer: "Babylon" },
    { question: "Which Roman structure was used for gladiatorial contests?", options: ["Pantheon", "Colosseum", "Circus Maximus", "Forum"], answer: "Colosseum" },
    { question: "Which is the longest epic poem in the world?", options: ["Iliad", "Mahabharata", "Ramayana", "Aeneid"], answer: "Mahabharata" },
    { question: "Which scientist is known for his contributions to electromagnetism and inventing the dynamo?", options: ["Faraday", "Tesla", "Edison", "Volta"], answer: "Faraday" },
    { question: "Which Mughal emperor built the Red Fort in Delhi?", options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], answer: "Shah Jahan" },
    { question: "Which space mission first landed humans on the moon?", options: ["Apollo 11", "Apollo 13", "Gemini 8", "Vostok 1"], answer: "Apollo 11" },
    { question: "Who wrote 'The Social Contract'?", options: ["Voltaire", "Rousseau", "Montesquieu", "Locke"], answer: "Rousseau" },
    { question: "Which scientist is known for his work on the double-helix structure of DNA?", options: ["Watson and Crick", "Franklin", "Mendel", "Avery"], answer: "Watson and Crick" },
    { question: "Which Renaissance artist painted the Sistine Chapel ceiling?", options: ["Da Vinci", "Michelangelo", "Raphael", "Titian"], answer: "Michelangelo" },
    { question: "Which kingdom was founded by Maharaja Ranjit Singh?", options: ["Maratha Empire", "Kingdom of Mysore", "Sikh Empire", "Gwalior State"], answer: "Sikh Empire" },
    { question: "Which war poet wrote 'Dulce et Decorum Est'?", options: ["Wilfred Owen", "Siegfried Sassoon", "Rupert Brooke", "John McCrae"], answer: "Wilfred Owen" },
    { question: "Which language family does Tamil belong to?", options: ["Indo-European", "Dravidian", "Sino-Tibetan", "Austroasiatic"], answer: "Dravidian" },
    { question: "Which U.S. president issued the Emancipation Proclamation?", options: ["George Washington", "Abraham Lincoln", "Franklin D. Roosevelt", "Theodore Roosevelt"], answer: "Abraham Lincoln" },
    { question: "Which art movement is associated with Van Gogh?", options: ["Impressionism", "Post-Impressionism", "Cubism", "Surrealism"], answer: "Post-Impressionism" },
    { question: "Which treaty formed the European Union?", options: ["Treaty of Rome", "Treaty of Maastricht", "Treaty of Lisbon", "Treaty of Nice"], answer: "Treaty of Maastricht" },
    { question: "Which mathematician is known for formulating the laws of planetary motion?", options: ["Galileo", "Newton", "Kepler", "Copernicus"], answer: "Kepler" },
    { question: "Which ancient kingdom was ruled by Ashoka?", options: ["Chola", "Maurya", "Gupta", "Satavahana"], answer: "Maurya" },
    { question: "Which molecule is responsible for carrying oxygen in the blood?", options: ["Hemoglobin", "Myoglobin", "Collagen", "Keratin"], answer: "Hemoglobin" },
    { question: "Which economist is associated with Keynesian economics?", options: ["Adam Smith", "Karl Marx", "Milton Friedman", "John Maynard Keynes"], answer: "John Maynard Keynes" },
    { question: "Which element is represented by the symbol 'Pb'?", options: ["Platinum", "Potassium", "Lead", "Phosphorus"], answer: "Lead" },
    { question: "Which British general surrendered at Yorktown, ending the American Revolutionary War?", options: ["Cornwallis", "Clinton", "Burgoyne", "Howe"], answer: "Cornwallis" },
    { question: "Which astronomical event is described by the term 'supernova'?", options: ["Star formation", "Star explosion", "Black hole creation", "Comet impact"], answer: "Star explosion" },
    { question: "Which philosopher proposed the idea of the 'categorical imperative'?", options: ["Kant", "Hegel", "Nietzsche", "Spinoza"], answer: "Kant" },
    { question: "Which natural disaster is measured using the Richter scale?", options: ["Hurricanes", "Tsunamis", "Earthquakes", "Volcanoes"], answer: "Earthquakes" },
    { question: "Which Italian explorer reached the Americas in 1492?", options: ["Marco Polo", "Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan"], answer: "Christopher Columbus" },
    { question: "Which particle is responsible for giving mass to other particles?", options: ["Photon", "Electron", "Higgs boson", "Neutron"], answer: "Higgs boson" },
    { question: "Which Asian river is known as the 'Yellow River'?", options: ["Yangtze", "Mekong", "Huang He", "Ganges"], answer: "Huang He" },
    { question: "Which French revolutionaries stormed the Bastille?", options: ["Jacobins", "Girondins", "Sans-culottes", "Montagnards"], answer: "Sans-culottes" },
    { question: "Which type of rock is formed from magma or lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Fossiliferous"], answer: "IgneousC" },
    { question: "Which field of study focuses on the structure of the universe?", options: ["Biology", "Cosmology", "Geology", "Astronomy"], answer: "Cosmology" },
    { question: "Which famous scientist discovered the electron?", options: ["Thomson", "Rutherford", "Bohr", "Planck"], answer: "Thomson" },
    { question: "Which city was the capital of the Byzantine Empire?", options: ["Athens", "Rome", "Constantinople", "Carthage"], answer: "Constantinople" },
    { question: "Which ancient Greek historian is known as the 'Father of History'?", options: ["Thucydides", "Herodotus", "Xenophon", "Plutarch"], answer: "Herodotus" },
    { question: "Which branch of mathematics deals with the study of vector spaces and linear transformations?", options: ["Algebra", "Calculus", "Topology", "Linear Algebra"], answer: "Linear Algebra" },
    { question: "Which ancient Chinese text is attributed to Sun Tzu?", options: ["Dao De Jing", "The Art of War", "Analects", "I Ching"], answer: "The Art of War" },
    { question: "Which Roman emperor famously converted to Christianity and issued the Edict of Milan?", options: ["Nero", "Constantine", "Augustus", "Marcus Aurelius"], answer: "Constantine" },
    { question: "Which particle physicist proposed the existence of quarks?", options: ["Richard Feynman", "Murray Gell-Mann", "Paul Dirac", "Erwin Schrödinger"], answer: "Murray Gell-Mann" },
    { question: "Which Egyptian pharaoh attempted to introduce monotheism?", options: ["Ramses II", "Akhenaten", "Tutankhamun", "Cleopatra"], answer: "Akhenaten" },
    { question: "Which French philosopher is known for the quote 'I think, therefore I am'?", options: ["Jean-Paul Sartre", "Descartes", "Voltaire", "Montesquieu"], answer: "Descartes" },
    { question: "Which Nobel Prize-winning scientist discovered the radioactive elements polonium and radium?", options: ["Marie Curie", "Henri Becquerel", "Pierre Curie", "Enrico Fermi"], answer: "Marie Curie" },
    { question: "Which medieval conflict is known as the War of the Roses?", options: ["Hundred Years' War", "Thirty Years' War", "Wars of the Roses", "English Civil War"], answer: "Wars of the Roses" },
    { question: "Which Indian mathematician developed the concept of zero as a number?", options: ["Aryabhata", "Brahmagupta", "Bhaskara II", "Varahamihira"], answer: "Brahmagupta" },
    { question: "Which space probe was the first to reach interstellar space?", options: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"], answer: "Voyager 1" },
    { question: "Which Renaissance figure is credited with inventing the movable type printing press?", options: ["Johannes Gutenberg", "Leonardo da Vinci", "Niccolò Machiavelli", "Michelangelo"], answer: "Johannes Gutenberg" },
    { question: "Which British monarch was in power during the American Revolution?", options: ["George III", "George II", "Elizabeth I", "Charles II"], answer: "George III" },
    { question: "Which chemical element is named after the scientist who discovered X-rays?", options: ["Curium", "Rutherfordium", "Meitnerium", "Roentgenium"], answer: "Roentgenium" },
    { question: "Which ancient civilization developed the cuneiform script?", options: ["Egyptians", "Sumerians", "Phoenicians", "Minoans"], answer: "Sumerians" },
    { question: "Which famous algorithm is used to find the greatest common divisor (GCD)?", options: ["Dijkstra's Algorithm", "Euclid's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm"], answer: "Euclid's Algorithm" },
    { question: "Which book by Thomas Hobbes outlines the concept of an absolute sovereign?", options: ["The Republic", "The Leviathan", "The Prince", "The Social Contract"], answer: "The Leviathan" },
    { question: "Which Italian scientist improved the telescope and supported the Copernican theory?", options: ["Galileo Galilei", "Nicolaus Copernicus", "Tycho Brahe", "Johannes Kepler"], answer: "Galileo Galilei" },
    { question: "Which Indian king is associated with the construction of the Iron Pillar in Delhi?", options: ["Ashoka", "Chandragupta II", "Harsha", "Samudragupta"], answer: "Chandragupta II" },
    { question: "Which mathematical theorem states that no integer solutions exist for the equation \( a^n + b^n = c^n \) for \( n > 2 \)?", options: ["Pythagorean Theorem", "Fermat's Last Theorem", "Euler's Theorem", "Lagrange's Theorem"], answer: "Fermat's Last Theorem" },
    { question: "Which 20th-century physicist proposed the theory of black hole evaporation?", options: ["Stephen Hawking", "Roger Penrose", "Richard Feynman", "Subrahmanyan Chandrasekhar"], answer: "Stephen Hawking" },
    { question: "Which German philosopher wrote 'Being and Time'?", options: ["Kant", "Hegel", "Heidegger", "Nietzsche"], answer: "Heidegger" },
    { question: "Which empire was founded by Genghis Khan?", options: ["Ottoman Empire", "Mongol Empire", "Safavid Empire", "Mughal Empire"], answer: "Mongol Empire" },
    { question: "Which famous treaty ended the American Revolutionary War?", options: ["Treaty of Ghent", "Treaty of Tordesillas", "Treaty of Paris", "Treaty of Versailles"], answer: "Treaty of Paris" },
    { question: "Which ancient Greek philosopher founded the Lyceum?", options: ["Plato", "Socrates", "Aristotle", "Epicurus"], answer: "Aristotle" },
    { question: "Which Russian writer penned 'The Brothers Karamazov'?", options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"], answer: "Fyodor Dostoevsky" },
    { question: "Which subatomic particle was discovered by James Chadwick?", options: ["Electron", "Proton", "Neutron", "Photon"], answer: "Neutron" },
    { question: "Which city was known as Byzantium before becoming Constantinople?", options: ["Antioch", "Rome", "Alexandria", "Istanbul"], answer: "Istanbul" },
    { question: "Which branch of philosophy focuses on the nature of knowledge?", options: ["Ethics", "Epistemology", "Metaphysics", "Logic"], answer: "Epistemology" },
    { question: "Which Italian explorer served under Kublai Khan and wrote about his travels?", options: ["Marco Polo", "Amerigo Vespucci", "Ferdinand Magellan", "John Cabot"], answer: "Marco Polo" },
    { question: "Which Indian classical text is a treatise on statecraft, economic policy, and military strategy?", options: ["Arthashastra", "Manusmriti", "Bhagavad Gita", "Vedas"], answer: "Arthashastra" },
    { question: "Which civilization built the famous city of Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: "Inca" },
    { question: "Which chemical law states that equal volumes of gases contain the same number of molecules?", options: ["Boyle's Law", "Avogadro's Law", "Charles' Law", "Dalton's Law"], answer: "Avogadro's Law" },
    { question: "Which German mathematician formulated the concept of a set?", options: ["Leibniz", "Cantor", "Hilbert", "Gauss"], answer: "Cantor" },
    { question: "Which medieval traveler documented his journeys in the 'Rihla'?", options: ["Marco Polo", "Ibn Battuta", "Zheng He", "Christopher Columbus"], answer: "Ibn Battuta" },
    { question: "Which Roman legal code is considered the foundation of many modern legal systems?", options: ["Code of Justinian", "Hammurabi's Code", "Napoleonic Code", "Twelve Tables"], answer: "Code of Justinian" },
    { question: "Which branch of computer science studies algorithms that can learn from data?", options: ["Cryptography", "Machine Learning", "Networks", "Databases"], answer: "Machine Learning" },
    { question: "Which river is the longest in South America?", options: ["Amazon", "Paraná", "Orinoco", "Madeira"], answer: "Amazon" },
    { question: "Which German philosopher wrote 'Critique of Pure Reason'?", options: ["Kant", "Hegel", "Nietzsche", "Schopenhauer"], answer: "Kant" }
];

// Prize amounts
const prizes = [
    1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000,
    160000, 320000, 640000, 1250000, 2500000, 5000000, 7500000, 
    10000000, 75000000
];

let currentQuestionIndex = 0;
let currentPrize = 0;
let timer;
let selectedOption = null;

// DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const currentPrizeElement = document.getElementById("current-prize");
const nextPrizeElement = document.getElementById("next-prize");
const timerElement = document.getElementById("timer");
const popupElement = document.getElementById("popup");
const popupMessageElement = document.getElementById("popup-message");

// Randomize the questions array
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to highlight the selected option
function highlightSelectedOption(button) {
    const allButtons = optionsElement.querySelectorAll("button");
    allButtons.forEach(btn => btn.style.backgroundColor = ""); // Reset background color for all options
    button.style.backgroundColor = "lightblue"; // Set background color for selected option
}

// Load the first question
function loadQuestion() {
    if (currentQuestionIndex >= prizes.length) {
        showPopup(`Congratulations! You've won ₹${currentPrize}!`);
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = ""; // Clear previous options

    // Render options
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectOption(button, option);
        optionsElement.appendChild(button);
    });

    selectedOption = null; // Reset selected option for the new question
    currentPrizeElement.textContent = currentPrize;
    nextPrizeElement.textContent = prizes[currentQuestionIndex] || "0";
    startTimer();
}

// Timer logic
function startTimer() {
    let timeRemaining = 60;
    timerElement.textContent = timeRemaining;

    clearInterval(timer);
    timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            showPopup(`Time's up! You won ₹${currentPrize}.`);
        }
    }, 1000);
}

// Handle option selection
function selectOption(button, option) {
    selectedOption = option;
    highlightSelectedOption(button); // Highlight the selected option
}

// Handle submission
function submitAnswer() {
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        // Update prize
        currentPrize = prizes[currentQuestionIndex];

        // Move to the next question
        currentQuestionIndex++;

        // Check if there are more questions, otherwise show the win message
        if (currentQuestionIndex < prizes.length) {
            loadQuestion();
        } else {
            showPopup(`Congratulations! You've won ₹${currentPrize}!`);
        }
    } else {
        // End game on wrong answer
        showPopup(`You lost! You won ₹${currentPrize}.`);
    }
}

// Show popup
function showPopup(message) {
    popupMessageElement.textContent = message;
    popupElement.classList.remove("hidden");
}

// Restart game
function restartGame() {
    currentQuestionIndex = 0;
    currentPrize = 0;
    popupElement.classList.add("hidden");
    shuffleQuestions(questions); // Shuffle questions on restart
    loadQuestion();
}

// Start the game
shuffleQuestions(questions); // Randomize questions before starting
loadQuestion();
