// ══════════════════════════════════════════════════════════════
// IELTS 口语题库 — Part 1 问答 / Part 3 讨论 话题组（答题队列用）
// 每组 = 一次「一题一录」会话（约 4 题，逐题短录音 → 批量评分）
//   SPEAKING_PART1_TOPICS → P1 面试短问答（日常/自我话题）
//   SPEAKING_PART3_TOPICS → P3 抽象讨论（观点/原因/比较/设想式）
// 每道题单句 10-20 词，便于逐题录音 + 单次 DeepSeek 调用
// ══════════════════════════════════════════════════════════════

const SPEAKING_PART1_TOPICS = [
  {
    id: 'hometown', name: '家乡', icon: '🏠', en: 'Hometown',
    questions: [
      'Where is your hometown?',
      'Do you like living there? Why or why not?',
      'What is your hometown most famous for?',
      'Would you like to keep living there in the future?'
    ]
  },
  {
    id: 'work-study', name: '工作/学习', icon: '💼', en: 'Work or Study',
    questions: [
      'Do you work or are you a student?',
      'What do you like most about your work or studies?',
      'Is there anything you find difficult about it?',
      'What kind of job would you like to have in the future?'
    ]
  },
  {
    id: 'hobbies', name: '兴趣爱好', icon: '🎮', en: 'Hobbies & Free Time',
    questions: [
      'What do you usually do in your free time?',
      'Is there a hobby you would like to take up?',
      'Do you prefer relaxing at home or going out?',
      'Did you have different hobbies when you were a child?'
    ]
  },
  {
    id: 'food', name: '食物', icon: '🍜', en: 'Food',
    questions: [
      'What kind of food do you like to eat?',
      'Do you prefer eating at home or eating out?',
      'Is there any food you disliked as a child but like now?',
      'How has your taste in food changed over the years?'
    ]
  },
  {
    id: 'transport', name: '交通', icon: '🚇', en: 'Transport',
    questions: [
      'How do you usually travel around your city?',
      'What is the best way to get around your hometown?',
      'Do you think public transport in your city is convenient?',
      'How could transport in your area be improved?'
    ]
  },
  {
    id: 'weather', name: '天气', icon: '🌦️', en: 'Weather',
    questions: [
      'What is the weather usually like where you live?',
      'Which season do you enjoy most, and why?',
      'Has the weather affected a plan you once had?',
      'Do you think the weather is harder to predict than before?'
    ]
  }
];

const SPEAKING_PART3_TOPICS = [
  {
    id: 'technology', name: '科技与生活', icon: '📱', en: 'Technology',
    questions: [
      'Do you think technology has made people more or less productive?',
      'Why do some people refuse to use modern technology?',
      'What problems can arise when people rely too much on their phones?',
      'Do you think younger and older generations use technology very differently?'
    ]
  },
  {
    id: 'cities', name: '城市与乡村', icon: '🏙️', en: 'Cities & Countryside',
    questions: [
      'Why are more and more people choosing to live in big cities?',
      'What are the downsides of living in a very crowded city?',
      'Do you think living in the countryside is healthier than living in a city?',
      'How might the places people live change in the next fifty years?'
    ]
  },
  {
    id: 'education', name: '教育', icon: '🎓', en: 'Education',
    questions: [
      'Do you think exams are a fair way to measure a student\'s ability?',
      'Why do some students lose interest in learning at school?',
      'Is learning practical skills more valuable than academic knowledge?',
      'How do you think education will change in the future?'
    ]
  },
  {
    id: 'environment', name: '环境', icon: '🌱', en: 'Environment',
    questions: [
      'Who do you think is most responsible for protecting the environment?',
      'Why do so many people say they care about the environment but act differently?',
      'Is it realistic to expect individuals to change their habits for the planet?',
      'What do you think governments should do about plastic waste?'
    ]
  },
  {
    id: 'social-media', name: '社交媒体', icon: '📢', en: 'Social Media',
    questions: [
      'Why do you think social media has become so popular?',
      'Do you believe what people post on social media is reliable?',
      'What effect does social media have on young people\'s confidence?',
      'Could people live happily without social media today?'
    ]
  },
  {
    id: 'work-life', name: '工作与生活平衡', icon: '⚖️', en: 'Work–life Balance',
    questions: [
      'Is it common for people in your country to work long hours?',
      'Why do some people find it hard to switch off from work?',
      'Do you think working from home helps or hurts work–life balance?',
      'Should companies do more to help employees avoid burnout?'
    ]
  }
];
