import Airtable from 'airtable';

// Fallback questions in case Airtable fails
const fallbackQuestions: Question[] = [
  { id: '1', text: "What do you think my major is?", level: "perception" },
  { id: '2', text: "Do you think I've ever been in love?", level: "perception" },
  { id: '3', text: "What was your first impression of me?", level: "connection" },
  { id: '4', text: "What do you want to change in your personality right now?", level: "reflection" },
  { id: '5', text: "Take a selfie together", level: "wildcard" },
];

// Initialize Airtable
const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export interface AirtableQuestion {
  id: string;
  fields: {
    Text: string;
    Level: 'perception' | 'connection' | 'reflection' | 'wildcard';
    Order?: number;
  };
}

export interface Question {
  id: string;
  text: string;
  level: 'perception' | 'connection' | 'reflection' | 'wildcard';
}

export const fetchQuestionsFromAirtable = async (): Promise<Question[]> => {
  try {
    // Debug: Check if environment variables are loaded
    console.log('Airtable API Key:', import.meta.env.VITE_AIRTABLE_API_KEY ? 'Present' : 'Missing');
    console.log('Airtable Base ID:', import.meta.env.VITE_AIRTABLE_BASE_ID ? 'Present' : 'Missing');
    
    if (!import.meta.env.VITE_AIRTABLE_API_KEY || !import.meta.env.VITE_AIRTABLE_BASE_ID) {
      throw new Error('Missing Airtable configuration. Please check your .env file.');
    }

    console.log('Fetching questions from Airtable...');
    const records = await base('Questions').select({
      view: 'Grid view',
      sort: [{ field: 'Order', direction: 'asc' }]
    }).all();

    console.log('Records fetched:', records.length);
    console.log('Sample record:', records[0]);

    return records.map((record) => {
      // Handle different possible field names
      const text = record.fields.Text || record.fields.text || record.fields.Question || record.fields.question;
      const level = record.fields.Level || record.fields.level || record.fields.Category || record.fields.category;
      
      if (!text || !level) {
        console.warn('Record missing required fields:', record);
        return null;
      }
      
      // Convert full level names to short names
      const levelMapping: { [key: string]: 'perception' | 'connection' | 'reflection' | 'wildcard' } = {
        'Level 1: Perception': 'perception',
        'Level 2: Connection': 'connection', 
        'Level 3: Reflection': 'reflection',
        'Wildcards': 'wildcard',
        // Also handle the short names in case they exist
        'perception': 'perception',
        'connection': 'connection',
        'reflection': 'reflection',
        'wildcard': 'wildcard'
      };
      
      const mappedLevel = levelMapping[level];
      if (!mappedLevel) {
        console.warn('Unknown level:', level, 'in record:', record);
        return null;
      }
      
      return {
        id: record.id,
        text: text,
        level: mappedLevel
      };
    }).filter(Boolean) as Question[];
  } catch (error) {
    console.error('Error fetching questions from Airtable:', error);
    console.log('Using fallback questions instead...');
    return fallbackQuestions;
  }
};

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
