export interface Question {
  id: number;
  text: string;
  level: 'perception' | 'connection' | 'reflection' | 'wildcard';
}

export const questions: Question[] = [
  // Level 1: Perception (1-30)
  { id: 1, text: "What do you think my major is?", level: "perception" },
  { id: 2, text: "Do you think I've ever been in love?", level: "perception" },
  { id: 3, text: "Do you think I've ever had my heart broken?", level: "perception" },
  { id: 4, text: "Do you think I've ever been fired?", level: "perception" },
  { id: 5, text: "Do you think I was popular in high school?", level: "perception" },
  { id: 6, text: "What do you think I will prefer? Hot Cheetos or onion rings?", level: "perception" },
  { id: 7, text: "Do you think I like being a couch potato?", level: "perception" },
  { id: 8, text: "Do you think I am an extrovert?", level: "perception" },
  { id: 9, text: "Do you think I have a sibling? Older or younger?", level: "perception" },
  { id: 10, text: "Where do you think I grew up?", level: "perception" },
  { id: 11, text: "Do you think I am mainly cooking or getting takeout?", level: "perception" },
  { id: 12, text: "What do you think I have been binge-watching lately?", level: "perception" },
  { id: 13, text: "Do you think I hate waking up early?", level: "perception" },
  { id: 14, text: "What is the nicest thing you can remember doing for a friend?", level: "perception" },
  { id: 15, text: "What type of social situation makes you feel the most awkward?", level: "perception" },
  { id: 16, text: "Who do you think is my favorite idol?", level: "perception" },
  { id: 17, text: "When do I usually have dinner?", level: "perception" },
  { id: 18, text: "Do you think I like wearing red?", level: "perception" },
  { id: 19, text: "What do you think is my favorite dish?", level: "perception" },
  { id: 20, text: "Do you think I'm in Greek life?", level: "perception" },
  { id: 21, text: "Do you know what my dream career is?", level: "perception" },
  { id: 22, text: "Do you know where my dream vacation is?", level: "perception" },
  { id: 23, text: "Do you think I used to be bullied in school?", level: "perception" },
  { id: 24, text: "Do you think I am a talkative person?", level: "perception" },
  { id: 25, text: "Do you think I am a cold fish?", level: "perception" },
  { id: 26, text: "What do you think my favorite Starbucks drink is?", level: "perception" },
  { id: 27, text: "Do you think I love reading books?", level: "perception" },
  { id: 28, text: "When do you think I most usually like to stay alone?", level: "perception" },
  { id: 29, text: "Which part of a house do you think is my favorite place?", level: "perception" },
  { id: 30, text: "Do you think I like playing video games?", level: "perception" },

  // Level 2: Connection (31-60)
  { id: 31, text: "How likely do you think I will change my career?", level: "connection" },
  { id: 32, text: "What was your first impression of me?", level: "connection" },
  { id: 33, text: "What is the last thing you lied about?", level: "connection" },
  { id: 34, text: "What have you been hiding all those years?", level: "connection" },
  { id: 35, text: "What is your weirdest thinking?", level: "connection" },
  { id: 36, text: "What is the last thing you lied to your mom about?", level: "connection" },
  { id: 37, text: "What's the biggest mistake you've made?", level: "connection" },
  { id: 38, text: "What is the worst pain you have ever been in?", level: "connection" },
  { id: 39, text: "What are you still trying to prove to yourself?", level: "connection" },
  { id: 40, text: "What is your most defining personality?", level: "connection" },
  { id: 41, text: "What is the hardest part about dating you?", level: "connection" },
  { id: 42, text: "What is the best thing about your father or mother?", level: "connection" },
  { id: 43, text: "What is the favorite lyric you can't stop thinking about in your head?", level: "connection" },
  { id: 44, text: "Are you lying to yourself about anything?", level: "connection" },
  { id: 45, text: "What animal that you want to raise?", level: "connection" },
  { id: 46, text: "What would you feel best to fully accept in this current status?", level: "connection" },
  { id: 47, text: "When was the last time you felt lucky to be you?", level: "connection" },
  { id: 48, text: "What is the adjective that best describes you in the past and now?", level: "connection" },
  { id: 49, text: "What would your younger self not believe about your life today?", level: "connection" },
  { id: 50, text: "Which part of your family that you want to keep or let go of?", level: "connection" },
  { id: 51, text: "What is your favorite memory from your childhood?", level: "connection" },
  { id: 52, text: "How long does it take to be friends with you?", level: "connection" },
  { id: 53, text: "What takes someone from a friend to a best friend for you?", level: "connection" },
  { id: 54, text: "What question are you trying to answer in your life right now?", level: "connection" },
  { id: 55, text: "What would you tell your younger self?", level: "connection" },
  { id: 56, text: "What is your most regretful action?", level: "connection" },
  { id: 57, text: "When was the last time you cried?", level: "connection" },
  { id: 58, text: "What are you better at than most people you know?", level: "connection" },
  { id: 59, text: "Who do you want to talk to when you feel lonely?", level: "connection" },
  { id: 60, text: "What is the hardest part of being abroad?", level: "connection" },

  // Level 3: Reflection (61-90)
  { id: 61, text: "What do you want to change in your personality right now?", level: "reflection" },
  { id: 62, text: "Who do you want to say sorry or thank the most?", level: "reflection" },
  { id: 63, text: "If you made a playlist for me, what 5 songs would be on it?", level: "reflection" },
  { id: 64, text: "What about me surprised you?", level: "reflection" },
  { id: 65, text: "What do you think my superpower is?", level: "reflection" },
  { id: 66, text: "Do you think we have some similarities or differences?", level: "reflection" },
  { id: 67, text: "Who do you think can be my right partner?", level: "reflection" },
  { id: 68, text: "What do I need to read as soon as I have time?", level: "reflection" },
  { id: 69, text: "Where am I most qualified to give advice?", level: "reflection" },
  { id: 70, text: "What did you learn about yourself while playing this game?", level: "reflection" },
  { id: 71, text: "What question were you most afraid to answer?", level: "reflection" },
  { id: 72, text: "Why's \"sorority\" still important to college life", level: "reflection" },
  { id: 73, text: "What would be the perfect gift for me?", level: "reflection" },
  { id: 74, text: "What part of yourself do you see in me?", level: "reflection" },
  { id: 75, text: "Based on what you learned about me, what would you suggest I would read?", level: "reflection" },
  { id: 76, text: "What would you remember about me when we're no longer in contact?", level: "reflection" },
  { id: 77, text: "From what I've heard about me, what Netflix film do you recommend me to watch?", level: "reflection" },
  { id: 78, text: "What can I help you with?", level: "reflection" },
  { id: 79, text: "How does Sigma Kappa continue to impact your life?", level: "reflection" },
  { id: 80, text: "Can you tolerate someone who used to hurt you)?", level: "reflection" },
  { id: 81, text: "What do I need to hear right now?", level: "reflection" },
  { id: 82, text: "Would you dare to do something out of your comfort zone next week?", level: "reflection" },
  { id: 83, text: "Do you think people come into your life for some reason?", level: "reflection" },
  { id: 84, text: "Why do you think we met?", level: "reflection" },
  { id: 85, text: "What do you think I fear the most?", level: "reflection" },
  { id: 86, text: "What is a lesson you will take away from your chat?", level: "reflection" },
  { id: 87, text: "What do you suggest I should let go of?", level: "reflection" },
  { id: 88, text: "Admit something", level: "reflection" },
  { id: 89, text: "What about me that you hardly understand?", level: "reflection" },
  { id: 90, text: "How would you describe me to a stranger?", level: "reflection" },

  // Wildcards (91-100)
  { id: 91, text: "Draw a picture together (60 seconds)", level: "wildcard" },
  { id: 92, text: "Tell a story together (1 minute)", level: "wildcard" },
  { id: 93, text: "Write a message to each other and give it to each other. Open it once you have left.", level: "wildcard" },
  { id: 94, text: "Take a selfie together", level: "wildcard" },
  { id: 95, text: "Create your own question on anything. Make it count!", level: "wildcard" },
  { id: 96, text: "Look into each other's eyes for 30 seconds. What did you notice?", level: "wildcard" },
  { id: 97, text: "Show your photo when you are a kid (in the nude)", level: "wildcard" },
  { id: 98, text: "Sing a favorite song", level: "wildcard" },
  { id: 99, text: "Tell the other person to close their eyes and to keep them closed (wait for 15 seconds and kiss them)", level: "wildcard" },
  { id: 100, text: "Write a note to your younger selves. After 1 minute, open and compare.", level: "wildcard" },
];

export const levelInfo = {
  perception: {
    title: "Level 1: Perception",
    description: "Self-reflection and understanding one's own thoughts and feelings",
    color: "coral"
  },
  connection: {
    title: "Level 2: Connection", 
    description: "Thought-provoking questions to foster deeper connection and empathy",
    color: "warm-pink"
  },
  reflection: {
    title: "Level 3: Reflection",
    description: "Reflect on the experience and insights gained during the game",
    color: "gold"
  },
  wildcard: {
    title: "Wildcards",
    description: "Fun actions to make the game more thrilling and engaging", 
    color: "deep-coral"
  }
};