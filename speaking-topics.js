// ══════════════════════════════════════════════════════════════
// IELTS 口语题库 — 2026.9-12 换题季 Part 2 Cue Card
// 数据源：躺着学雅思《26.9-12口语新题》速览（新题题目名）
// 结构：SPEAKING_TOPIC_CATEGORIES → 4 分类 → topics[]
//   每道题：zh 中文题名 · date 出现日期 · cue 完整英文 Cue Card
// cue 首行即英文主句（Describe ...），后续为 You should say 展开
// ══════════════════════════════════════════════════════════════

const SPEAKING_TOPIC_CATEGORIES = [
  {
    id: 'people',
    name: '人物类',
    icon: '🧑',
    topics: [
      { zh: '教你新技能的人', date: '9.2',
        cue: 'Describe a person who taught you a new skill.\nYou should say:\n- Who this person is\n- What skill they taught you\n- How they taught you\n- And explain how you felt about learning this skill' },
      { zh: '学习并喜欢历史的人', date: '9.2',
        cue: 'Describe a person who enjoys learning about history.\nYou should say:\n- Who this person is\n- How you know them\n- What they like to learn about history\n- And explain why you think they enjoy history' },
      { zh: '尊敬的比你年长的人', date: '9.2',
        cue: 'Describe someone who is older than you that you admire.\nYou should say:\n- Who this person is\n- How you know them\n- What they have done\n- And explain why you admire them' },
      { zh: '有条理的人', date: '9.2',
        cue: 'Describe a person who is very organized.\nYou should say:\n- Who this person is\n- How you know them\n- How they stay organized\n- And explain why you think being organized is important' },
      { zh: '喜欢拍照的人', date: '9.2',
        cue: 'Describe a person who loves taking photos.\nYou should say:\n- Who this person is\n- How you know them\n- What kind of photos they like to take\n- And explain how you feel about their photos' },
      { zh: '擅长做手工的人', date: '9.2',
        cue: 'Describe a person who is good at making things by hand.\nYou should say:\n- Who this person is\n- How you know them\n- What kind of things they make\n- And explain why you admire this skill' },
      { zh: '快乐人士', date: '9.1',
        cue: 'Describe a happy person you know.\nYou should say:\n- Who this person is\n- How you know them\n- What makes them happy\n- And explain why you think they are always happy' },
      { zh: '本地名人', date: '8.31',
        cue: 'Describe a famous person in your local area.\nYou should say:\n- Who this person is\n- What they are famous for\n- How you know about them\n- And explain how you feel about this person' },
      { zh: '一见且想再见的人', date: '8.29',
        cue: 'Describe a person you met once and wanted to meet again.\nYou should say:\n- Who this person is\n- Where and when you met them\n- What you talked about\n- And explain why you wanted to meet them again' },
      { zh: '做困难的事情并成功的人', date: '8.29',
        cue: 'Describe a person who did something difficult and succeeded.\nYou should say:\n- Who this person is\n- What difficult thing they did\n- How they succeeded\n- And explain how you feel about their success' }
    ]
  },
  {
    id: 'things',
    name: '事物类',
    icon: '⌚',
    topics: [
      { zh: '小时候学到的新技能', date: '9.2',
        cue: 'Describe a new skill you learned as a child.\nYou should say:\n- What the skill was\n- When and where you learned it\n- Who taught you\n- And explain how it has helped you' },
      { zh: '印象深刻的课程', date: '9.1',
        cue: 'Describe a course or lesson that impressed you.\nYou should say:\n- What the course was\n- Where and when you took it\n- What you learned from it\n- And explain why it impressed you' },
      { zh: '送朋友的礼物', date: '8.31',
        cue: 'Describe a gift you gave to a friend.\nYou should say:\n- What the gift was\n- When and why you gave it\n- How your friend reacted\n- And explain how you felt about giving it' }
    ]
  },
  {
    id: 'places',
    name: '地点类',
    icon: '🏝️',
    topics: [
      { zh: '拥挤地方', date: '9.2',
        cue: 'Describe a crowded place you have been to.\nYou should say:\n- Where it was\n- When and why you went there\n- What it was like\n- And explain how you felt about the crowd' },
      { zh: '嘈杂地', date: '9.2',
        cue: 'Describe a noisy place you have been to.\nYou should say:\n- Where it was\n- When and why you went there\n- What the noise was like\n- And explain how you felt about it' },
      { zh: '喜欢的城市自然之地', date: '9.2',
        cue: 'Describe a natural place in a city that you like.\nYou should say:\n- Where it is\n- What it looks like\n- What you like to do there\n- And explain why you like this place' },
      { zh: '想再去一次的城市', date: '8.29',
        cue: 'Describe a city you would like to visit again.\nYou should say:\n- Which city it is\n- When you went there\n- What you did there\n- And explain why you want to visit it again' }
    ]
  },
  {
    id: 'events',
    name: '事件类',
    icon: '🏃',
    topics: [
      { zh: '浪费时间的活动', date: '9.2',
        cue: 'Describe an activity that you think was a waste of time.\nYou should say:\n- What the activity was\n- When and where you did it\n- Why you did it\n- And explain why you think it was a waste of time' },
      { zh: '购物服务', date: '9.2',
        cue: 'Describe a time you received good service while shopping.\nYou should say:\n- Where and when it happened\n- What you were buying\n- What the service was like\n- And explain how you felt about the service' },
      { zh: '攒钱买想要物品', date: '9.2',
        cue: 'Describe something you saved money to buy.\nYou should say:\n- What it was\n- Why you wanted it\n- How you saved the money\n- And explain how you felt when you finally bought it' },
      { zh: '听不感兴趣的话', date: '9.2',
        cue: 'Describe a time you had to listen to something you were not interested in.\nYou should say:\n- What it was about\n- When and where it happened\n- Why you had to listen\n- And explain how you felt about it' },
      { zh: '和朋友度过的愉快夜晚', date: '9.2',
        cue: 'Describe an enjoyable evening you spent with a friend.\nYou should say:\n- Who you were with\n- Where and when it was\n- What you did together\n- And explain why you enjoyed it' },
      { zh: '采访名人', date: '9.1',
        cue: 'Describe a time you interviewed a famous person (or would like to).\nYou should say:\n- Who the person was\n- When and where it happened\n- What you asked them\n- And explain how you felt about the interview' },
      { zh: '对结果开心的重要决定', date: '8.31',
        cue: 'Describe an important decision you made that you were happy with.\nYou should say:\n- What the decision was\n- When and why you made it\n- What happened as a result\n- And explain why you were happy with the result' },
      { zh: '改变重要决定', date: '8.31',
        cue: 'Describe a time you changed an important decision.\nYou should say:\n- What the original decision was\n- Why you changed it\n- What happened after you changed it\n- And explain how you felt about changing it' }
    ]
  }
];
