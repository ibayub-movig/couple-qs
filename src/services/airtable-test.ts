import Airtable from 'airtable';

// Test function to verify Airtable connection
export const testAirtableConnection = async () => {
  try {
    console.log('🔍 Testing Airtable connection...');
    console.log('API Key:', import.meta.env.VITE_AIRTABLE_API_KEY ? '✅ Present' : '❌ Missing');
    console.log('Base ID:', import.meta.env.VITE_AIRTABLE_BASE_ID ? '✅ Present' : '❌ Missing');
    
    const base = new Airtable({
      apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
    }).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

    // Try to get table info first
    console.log('📋 Testing table access...');
    const tables = await base.tables();
    console.log('✅ Tables found:', tables.map(t => t.name));
    
    // Try to get a single record
    console.log('📝 Testing record access...');
    const records = await base('Questions').select({
      maxRecords: 1
    }).firstPage();
    
    console.log('✅ Records accessible:', records.length);
    if (records.length > 0) {
      console.log('📄 Sample record fields:', Object.keys(records[0].fields));
    }
    
    return { success: true, tables: tables.map(t => t.name), recordCount: records.length };
  } catch (error) {
    console.error('❌ Airtable test failed:', error);
    return { success: false, error: error.message };
  }
};
