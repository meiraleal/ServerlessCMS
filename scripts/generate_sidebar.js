const util = require('util');

const topics = {
  'Visa and Legal Matters': [
    'Get background check for student visa while in Brazil',
    'Applying for Digital Nomad visa while in Brazil (US and NON-US)',
    'Extending Tourist Visa for 90 more days',
    'Filing a 60-day notice for 60 more days in Brazil',
    'Applying for residence permit while in Brazil',
    'Setting up MigranteWeb 2.0 while in Brazil',
    'How to Get Docs Translated for Visa Stuff',
    'Recommended Visa Help',
  ],
  'Practical Matters': [
    'CPF',
    'How to get a Brazilian Phone Number + Data Plan (e-sim)',
    'How to send Pix payments without a Brazilian account',
    'How to get a Brazilian bank account (including Pix)',
    'ATMs to use with foreign cards',
    'Payment with international cards',
  ],
  'Safety and Health': [
    'How to avoid getting robbed',
    'If you are getting robbed',
    'When to be worried?',
    'What to do if you get pickpocketed/robbed',
    'How to get medical treatment',
    'Where to Get a Yellow Fever Vaccine',
  ],
  'Accommodation and Logistics': [
    'How to store bags (storage unit)',
    'How to find a long-term apartment (12+ months) and set up utilities',
    'How to find a coworking space',
    'How to get packages shipped to Brazil',
    'Best places to work',
  ],
  'Weekend Trips': [
    'Ilha Grande',
    'Paraty',
    'Buzios',
    'São Thomè',
    'Vila Velha',
  ],
  'Services and Recommendations': [
    'Recommended Salons + Barber Shops',
    'Recommended House Cleaners',
    'Where to print flyers/business materials',
    'Recommended hang gliding companies/contacts',
  ],
  'Cultural and Social Activities': [
    'Carnaval Tips',
    'How to Volunteer',
    'São Paulo Whatsapp',
    'Trip to Buenos Aires',
  ],
  'Technology and Driving': [
    'How to get Brazilian applications from Google Play Store',
    "How to get a Brazilian driver's license (if you have an existing foreign license)",
  ],
};

function urlFormat(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const topicsData = [];

for (const [topic, subTopics] of Object.entries(topics)) {
  const topicUrl = urlFormat(topic);
  const items = subTopics.map((subTopic) => {
    const subTopicUrl = urlFormat(subTopic);
    return {
      document: `rio/${topicUrl}/${subTopicUrl}.mdx`,
      type: 'doc',
      label: subTopic,
    };
  });

  topicsData.push({
    label: topic,
    items,
    type: 'category',
  });
}

console.log(JSON.stringify(topicsData));
