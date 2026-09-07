// ══════════════════════════════════════════════════════════════
// Simon 口语课 1-7 — 学习材料库（数据文件 · 本地"数据库"）
//
// 来源：IELTS-Simon's video course（讲师 Simon Corcoran，前雅思考官）
//   F:/ielts__/口语/Simon口语课1-7/ 下的 worksheet PDF（lesson 2-7；目录无 lesson 1）
//
// 用途：把 Simon 的高质量示范 + 方法要点结构化保存，供后续
//       做成"口语学习任务/练习"时直接取用（人物/地点/物品/事件/活动/P1）。
//
// 结构说明：
//   SIMON_LESSONS
//     .meta         课程与文件说明
//     .method       全课程反复强调的方法原则（原文要点）
//     .lessons[]    每课一节
//        .lessonNo / .part / .category / .title / .worksheet
//        .exercises[] 每题练习块
//           .cue        题目主句（如 Describe a person...）
//           .points[]   You should say 要点
//           .sample     Simon 的示范全文（模板字符串，保留原文）
//           .highlights[] Simon 标注/点名的"考官会注意的好词"（有出处才收）
//           .notes[]     该题方法/练习说明
//        .tips[]      该课补充资料（官网链接等）
//
// ⚠ 保真声明：sample 与 notes 逐字摘自 worksheet。PDF 里用粗体/颜色
//   标出的高亮词在纯文本层不可见，因此 highlights 只收录 worksheet 文字
//   层明确点名的条目，其余好词需对照原 PDF 彩色版。
// ══════════════════════════════════════════════════════════════

const SIMON_LESSONS = {
  meta: {
    course: "IELTS-Simon's video course",
    teacher: "Simon Corcoran（前雅思考官，ielts-simon.com）",
    folder: "F:/ielts__/口语/Simon口语课1-7/",
    files: [
      "Speaking, lessen 2 - Part 1 worksheet.pdf",
      "Speaking, lesson 3 - 'Describe a person' worksheet.pdf",
      "Speaking, lesson 4 - 'Describe a place' worksheet 2.pdf",
      "Speaking, lesson 5 - 'Describe an object' worksheet.pdf",
      "Speaking, lesson 6 - Describe an event worksheet.pdf",
      "Speaking, lesson 7 - Describe an activity worksheet.pdf"
    ],
    note: "目录无 lesson 1 文件；lesson 6 的同名『英译中』docx 为机器翻译、质量差，未收入本库。"
  },

  // 全课程反复强调的方法原则（做任务时的顶层规则）
  method: [
    "注意力放在「把题目答好 + 用好词/好内容」上，不纠结于背诵的连接短语。Examiners are not impressed by memorised linking phrases.",
    "示范里自然覆盖多种时态（过去/现在/现在完成/将来），但不是刻意『设计』句型——自然产出，语法别错即可。",
    "靠一个具体的例子/故事撑满 2 分钟，这是 Part 2 说不满的解决办法。",
    "示范不必真实，可以现编/改编，用来展示如何套用 theme(主题)素材。",
    "先自然说一遍（第一稿），再用提前备好的『theme 好词』回头改进（第二稿）。",
    "Less common 词（而非大词堆砌）最能打动考官，每类题只需积累少量精品词。"
  ],

  lessons: [
    // ───────────────────────── Lesson 2 · Part 1 ─────────────────────────
    {
      lessonNo: 2,
      part: "Part 1",
      examPart: "p1",
      category: "Q&A 示例",
      title: "Part 1 问答示例",
      worksheet: "Speaking, lessen 2 - Part 1 worksheet",
      exercises: [
        { cue: "Do you like sport?",
          sample: "No, I'm not really a sports fan. I like swimming, but I don't get much time to go these days because I'm too busy with work." },
        { cue: "Do you think it's better to watch sports or play them yourself?",
          sample: "It's much healthier to play sports than to watch them, but it can be fun to be a spectator and support a team or a particular athlete." },
        { cue: "Why do you think some sports are so popular?",
          sample: "Well, if I take football as an example, I think the fans like the feeling of winning and sharing an exciting experience with their friends and other fans." },
        { cue: "Do you think children should all have to do sports at school?",
          sample: "Yes, I think children should all be encouraged to try a variety of sports, firstly because they need the exercise, and secondly because children need to have fun." },
        { cue: "What's your favourite colour? Why?",
          sample: "My favourite colour is blue because it's the colour of the sky on a nice day." },
        { cue: "Do different colours have different meanings in your country?",
          sample: "Yes they do. For example, red is usually used to mean danger, and green is always the colour we use for anything related to the environment or nature." },
        { cue: "Do you think that colours can affect the way people feel?",
          sample: "Yes, colours do seem to affect our emotions. Bright colours like yellow or red can make us feel happier or more active, for example." },
        { cue: "Do you wear different coloured clothes now compared to when you were a child?",
          sample: "I can't really remember. I probably wore much more colourful clothes back then, because children usually like fun clothes rather than boring dark colours." }
      ],
      tips: [
        "更多 Part 1 练习见 worksheet 链接：官方 ielts.org 的 hometown/accommodation 题库，以及 ielts-simon.com 旧课程里的海量示例问答。"
      ]
    },

    // ───────────────────────── Lesson 3 · 人物 ─────────────────────────
    {
      lessonNo: 3,
      part: "Part 2",
      examPart: "p2",
      category: "person",
      categoryZh: "人物",
      title: "Describe a person",
      worksheet: "Speaking, lesson 3 - 'Describe a person' worksheet",
      exercises: [
        {
          cue: "Describe a person you know who does something well.",
          points: [
            "who this person is",
            "how you know this person",
            "what they do well",
            "and explain why you think this person is so good at doing this"
          ],
          sample:
`I'm going to describe a friend of mine called James. James is an actor by profession. He's in his thirties I think. He's tall, he's about my height, with dark hair and a friendly face; he's always smiling and he cheers me up whenever I see him.

I met James in… at university. He was my next-door neighbour in my hall of residence in the first year of university. So on that first day when we were moving in to our rooms, James introduced himself to me and we struck up a conversation, and got to know each other then, and we became good friends.

James, as I said, is an actor, and I think he's really good at that. He studied drama at university, where I met him, and since then he's been working in theatre, he's done some small independent films, and he's trying to get his break in television or in more popular, mainstream films. And I think he'll do it, because for me he seems… when I've been to see him in theatre productions or I've seen the short films that he's been in, he seems to be a really good actor to me.

Why I think he's good: well, I think it comes from his work ethic. He's a really hard worker, he's really persistent. He always said he wanted to be a successful actor; it's not an easy profession to become successful in, but he has persisted, he's really intense, he studies each role very carefully, he gets into character. I remember, for example, not being able to talk to him for about a week before one of his acting jobs because he was 'in character' - he didn't want to lose focus. So he's really intense, and that's what I think makes him a great actor, and why I think he'll be successful.`,
          highlights: [
            "struck up a conversation",
            "get his break in television (meaning 'get his first opportunity')",
            "mainstream films",
            "his work ethic",
            "he has persisted",
            "he's really intense",
            "he gets into character"
          ],
          notes: [
            "Simon：示范恰好 2 分钟，只是照着题上的四点往下讲，并用了『hard-working(勤奋)』theme 的好词 + 一个好例子。",
            "大量『内容』在场，但不用刻意加连接词——考官不被背诵的连接短语打动。",
            "没有特意想语法，但自然用出了过去/现在/现在完成/将来等时态且都用对。",
            "这是第一稿；下一步回到『hard-working』的 theme 词表改进（见 improveWith）。"
          ],
          improveWith: [
            "motivated", "determined to succeed", "he always sees things through",
            "he likes to challenge himself", "he has a magnetic personality"
          ]
        }
      ]
    },

    // ───────────────────────── Lesson 4 · 地点 ─────────────────────────
    {
      lessonNo: 4,
      part: "Part 2",
      examPart: "p2",
      category: "place",
      categoryZh: "地点",
      title: "Describe a place",
      worksheet: "Speaking, lesson 4 - 'Describe a place' worksheet 2",
      exercises: [
        {
          cue: "Describe a river, lake or sea which you like.",
          points: [
            "what the river, lake or sea is called",
            "where it is",
            "what the land near it is like",
            "and explain why you like this river, lake or sea"
          ],
          sample:
`I'm going to describe the best known river in England, the river Thames.

The river Thames is in the south of England, and it's famous because it flows right through the centre of London. It goes winding through all of the most iconic, famous tourist attractions and landmarks of the city. For example, it goes past the London Eye, the Houses of Parliament, with Big Ben, and it goes under Tower Bridge, probably the most famous bridge in London.

So the land around this river, or on either side of this river is hectic, thriving, city-centre London. It's right in the heart of the city, and of course it's a cosmopolitan mix of cultures, business, tourism all around. It's where everyone goes to do sightseeing in the centre of the capital, and it's got a lot of the history and heritage of London based around that area, in close proximity to the river itself.

The reason I like this river, the river Thames, is because it's such an iconic location. It's a great… it's a backdrop to these great landmarks of the city: the historic buildings and famous tourist sites in the city. And I've got good memories of being there on a New Year's Eve one year recently. In London, New Year's Eve celebrations are all focused on the river, with the river and some of the landmarks as the backdrop to a big fireworks show. And so the river's all lit up, and there's a spectacular fireworks display put on, and lots of tourists and local people all watch it there together. That was really an unforgettable experience, and the river was central to it.`,
          notes: [
            "大量『内容』，不纠结连接词；重点是把题答好：好想法 + 好词。",
            "没刻意用『特殊』句型，重点是答到点上，同时避免语法错误。",
            "最后一段讲了个故事(跨年烟花)——这帮他撑满了 2 分钟。"
          ]
        },
        {
          cue: "Describe a restaurant that you enjoyed going to.",
          points: [
            "where the restaurant was",
            "why you chose this restaurant",
            "what type of food you ate",
            "and explain why you enjoyed eating in this restaurant"
          ],
          sample:
`I'm going to describe a restaurant that I went to quite recently for the birthday party of a friend of mine.

The restaurant that we went to was right in the heart of London, overlooking the river Thames. It was quite near to Tower Bridge, the famous bridge in London, and we had a great view from our vantage point above the river; we had a great view of all the famous London landmarks in that area.

My friend chose the restaurant because of this location, because of the great backdrop; out of the window of the restaurant we could see all of these iconic places in London, and he thought it would be a good place to have a celebration, a place that would be memorable for everybody. But also, we'd heard that the food in this restaurant was delicious, and that the staff were warm and welcoming, and the service and the quality was all round really good.

The type of food that we ate there, well, it was a fusion restaurant I think they called it, which meant that there was a variety of food choices from all over the world. There were Mexican food choices, Mediterranean, Persian, but also hamburgers and pizzas, that kind of thing. I think I actually had a pizza with various toppings on it myself, and it was really nice - it was a fantastic meal.

The reason I enjoyed eating in this restaurant: Firstly, it was a great chance to get together with friends and chat about what we'd been up to, and catch up with some of my good friends. But also, the restaurant itself really did make the night special. The service was fantastic, the waiters and the staff really made us feel at home, they were thoughtful and attentive to all of our needs, and we were really surprised at the end when they brought us a cake to celebrate my friend's birthday.`,
          notes: [
            "这篇描述是编的（not true, invented）——说明可以套用 theme 想法，甚至改编为另一个问题准备的素材。",
            "注意他很自然地在说，句与句首尾常粘连——这是自然口语的正常现象，不必刻意一句一句断。"
          ]
        }
      ]
    },

    // ───────────────────────── Lesson 5 · 物品 ─────────────────────────
    {
      lessonNo: 5,
      part: "Part 2",
      examPart: "p2",
      category: "object",
      categoryZh: "物品",
      title: "Describe an object",
      worksheet: "Speaking, lesson 5 - 'Describe an object' worksheet",
      exercises: [
        {
          cue: "Describe something that you would like to own.",
          points: [
            "what it is",
            "where you have seen it",
            "what you would use it for",
            "and explain why you would like to own this object"
          ],
          sample:
`I'm going to talk about a watch that I would like to own. It's one of these new smartwatches, a new type of watch that has all the functions and features of a smart phone, of a mobile phone, but of course you wear it on your wrist, so it's even more portable.

And this is a new fashion accessory these days, a new gadget, that I've seen advertised everywhere: on billboards in the city centre, on TV adverts, and I've seen these watches in person, in 'real life', in various department stores that I've been to when out shopping. And I'm not sure which brand I would buy, but I've seen the various brands, and maybe the most famous one at the moment is the Apple Watch.

The reason I'd like one of these watches is because you can synchronise it with your computer and phone, and so you've got all your contacts, your photos and especially calendar notifications right there on your wrist, and you're carrying it round with you.

I think it would be particularly convenient for me to be able to organise my life using one of these watches, and check my appointments and work commitments at a glance, just looking at my wrist. I think it'd even be good maybe for health reasons, because apparently you can track your exercise goals, even things like the number of steps you're taking every day. So that might be quite interesting.

So the reason that I'd like one of these watches, as I said, would be the features and functions that I've just mentioned. I think these watches are really practical. It's just as good as a phone in terms of the technology, but it's even more portable; really they're the ultimate in portable devices. And I'm a fan of gadgets, and this one looks really stunning too. Those are the reasons why I think it would be nice to have one.`,
          notes: [
            "第三段他跳到了最后一点(为什么想要)，第四段又回头讲『怎么用』——顺序乱了但不影响回答质量。"
          ]
        },
        {
          cue: "Describe something old that you own which is special to you.",
          points: [
            "what this possession is",
            "how long you have had it",
            "where it came from",
            "and explain why this possession is special to you"
          ],
          sample:
`I'm going to describe an old wristwatch that I inherited from my grandfather. So it's a family heirloom, it's an antique watch, and it's really a simple, classic old watch with a leather strap, a white face, and a gold edge around it.

And I've had it for the last 10 years, I think it is, since my grandfather gave it to me. But it's been in the family for several generations before that.

In fact, I think it came originally from my great-grandfather, because his name is engraved on the back of the watch face. So perhaps it was a gift that he received from an employer, or a friend, or another family member. We're not really sure, but he had it originally, and then passed it down to my grandfather, and now it's obviously mine.

The reason it's special, then, is because of this sentimental value that this watch has. As I said, it's a family heirloom, it's probably the only antique, really old possession that I've got that reminds me of my grandfather, and it brings back happy memories.

For example, I remember when my grandfather was helping me to learn to tell the time when I was a child. Because his watch had such a simple, clear clock face, it was very easy for me to understand what he was talking about, when he showed me how the big hand was for the minutes, and the shorter, small hand on the watch was for the hours. So I remember him teaching me to tell the time, and testing me with different times to see if I understood.

I also like the watch's stylish, elegant design; it's very simple, it's just a classic, timeless look, and it's really durable and resilient; I think it's so well-made that I'll be able to hand it down to the next generation when I'm older.`,
          notes: [
            "又一篇编的故事，用来示范怎么用 theme 想法 + 准备好的例子。",
            "中间给了一个长长的例子/故事(爷爷教认表)，帮助撑满 2 分钟。",
            "依旧完全没纠结连接词——把注意力放在好想法、细节和词汇上。"
          ]
        }
      ]
    },

    // ───────────────────────── Lesson 6 · 事件 ─────────────────────────
    {
      lessonNo: 6,
      part: "Part 2",
      examPart: "p2",
      category: "event",
      categoryZh: "事件",
      title: "Describe an event",
      worksheet: "Speaking, lesson 6 - Describe an event worksheet",
      exercises: [
        {
          cue: "Describe a sports event that you enjoyed watching.",
          points: [
            "what event you watched",
            "where you were",
            "who you watched it with",
            "and explain why you enjoyed watching it"
          ],
          sample:
`I'm going to describe what I think was the most memorable event in recent years that I remember, which was the London 2012 Olympic Games. This was a spectacular festival of sport over the course of several weeks here in England, and I think it was a once-in-a-lifetime experience for us to have the Olympic Games in our own country.

I was unfortunately at home watching most of the Olympics on television. I didn't manage to go down to London to see any of the events in person, but I enjoyed them all on TV at home, in my own house, or sometimes with friends or family at their houses. And I do remember the events themselves, though, were in all different places across London, mainly at the Olympic Park area, in the main stadium or the various other smaller stadiums for the different events, like the swimming, the basketball etc., and I watched various of these different events when they were on television.

As I said, I was watching at home, usually on my own or with family or occasionally with friends. I remember, for example, watching the 100 metres sprint race, which is probably considered to be the most important or the most famous event in the Olympic Games; we often call it the "blue riband" event, and there was a lot of hype and anticipation surrounding the 100 metres at the London Olympics because everyone wanted to see whether Usain Bolt would win again, or whether anyone would be able to beat him.

So I enjoyed this event, the London Olympic Games, because I think it was an unforgettable experience to see it in my own country. There were some great performances and victories by the athletes, and I enjoyed every minute.`,
          notes: [
            "绿色高亮部分是例子/故事，帮他继续说下去并加入有趣细节。",
            "没有哪个回答是完美的——关键是尽量用上一些你提前备好的好词。"
          ]
        },
        {
          cue: "Describe a concert or musical event in your country.",
          points: [
            "who the musicians are",
            "where the concert is held",
            "what type of music is played",
            "and explain why people attend this musical event"
          ],
          sample:
`I'm going to describe a concert that I've actually been to, that takes place here in Manchester, where I live. The musicians who perform this concert are classical musicians; it's an orchestra called the Hallé orchestra, which is obviously made up of the conductor, the string instruments, like violins, the percussion, the woodwind instruments, the brass instruments etc.

And these musicians play in a concert hall, a venue called the Bridgewater Hall, here in Manchester, which is a purpose-built concert hall, by which I mean that it was designed specifically for music. The sound acoustics are really good in the concert room, and the lighting, the stage etc., they were all built specifically for music.

The type of music that you would expect from an orchestra would normally be classical music. But this particular concert, that I think they put on once a year, is a bit more popular or mainstream because the orchestra plays theme music from famous films, the soundtracks from films. And most of them are very popular, well-known Hollywood films like E.T., Indiana Jones, Jurassic Park, the James Bond films, that kind of thing.

And this is why people attend, because we all know, or most of us know, the music from those films, and it's amazing to hear a full orchestra playing these songs, these pieces of music in a live venue. The sound quality is fantastic, and to hear these pieces of music loud and live is really wonderful. I, for example, was particularly blown away by the E.T. soundtrack, which is a really emotional piece of music when you hear it, especially in a live venue like that.`,
          notes: [
            "这次他塞进了尽可能多的好词。",
            "他说漏了几句本想用的好短语，例如：the atmosphere was electric / it exceeded my expectations。",
            "这次内容够说满，不需要再讲一个长故事。"
          ]
        },
        {
          cue: "Describe a family celebration that you remember.",
          points: [
            "what you were celebrating",
            "who was present",
            "what you and your family did to make the celebration special",
            "and why you enjoyed the occasion"
          ],
          sample:
`I'm going to describe my sister's wedding day, which took place a few years ago in the town where I grew up. For my sister it was the biggest and most important day of her life.

I think there were around 100 people at the marriage ceremony, which was held in a church. Even more people came to the party, or the wedding reception as we call it, after the ceremony. Of course, most members of my family were there, as well as the groom's family and a collection of the bride and groom's friends and colleagues.

To make the celebration special, we did what families normally do. My mother made sure that the church and the reception venue were nicely decorated - there were flowers everywhere! Obviously we all dressed for the occasion, and there were bridesmaids, gifts, a huge wedding cake, and so on.

I enjoyed the occasion because it was great to see my sister so happy on her big day. The ceremony was perfect, and we all had a fantastic time at the reception. It's rare for me to see all of my family and friends together in one place, so that's probably what made the day so memorable for me.`,
          notes: [
            "这篇来自 Simon 博客，练习任务：试着用课上那些好词/短语去改进这段描述。"
          ]
        },
        {
          cue: "Describe a festival that is important in your country.",
          points: [
            "when the festival occurs",
            "what you do during it",
            "what you like or dislike about it",
            "and explain why this festival is important"
          ],
          notes: [
            "Simon 的建议：在 Wikipedia 上找本国节日的描述，把最好的部分摘下来、稍作改动，用来答题（示范见下方 Christmas 摘录）。",
            "练习：用这个思路（或你自己的节日想法）回答上面的题。"
          ],
          sourceMaterial:
`Christmas is an annual holiday that, in Christianity, commemorates the birth of Jesus Christ.

Popular customs of the holiday include gift-giving, music, an exchange of greeting cards, church celebrations, a special meal, and the display of various decorations; including Christmas trees, lights, nativity scenes, and holly. In addition, Father Christmas (known as Santa Claus in some areas) is a popular figure in many countries, associated with the bringing of gifts for children.

Over the Christmas period, people decorate their homes and exchange gifts. In some countries, children perform plays re-telling the events of the Nativity, or sing carols that reference the event. Christmas, along with Easter, is the period of highest annual church attendance.

A special Christmas family meal is an important part of the celebration for many, and what is served varies greatly from country to country. In England and countries influenced by its traditions, a standard Christmas meal includes turkey, potatoes, vegetables, sausages and gravy, followed by Christmas pudding, mince pies and fruit cake.`
        }
      ]
    },

    // ───────────────────────── Lesson 7 · 活动 ─────────────────────────
    {
      lessonNo: 7,
      part: "Part 2",
      examPart: "p2",
      category: "activity",
      categoryZh: "活动",
      title: "Describe an activity",
      worksheet: "Speaking, lesson 7 - Describe an activity worksheet",
      exercises: [
        {
          cue: "Describe something healthy you enjoy doing.",
          points: [
            "what you do",
            "where you do it",
            "who you do it with",
            "and explain why you think doing this is healthy"
          ],
          sample:
`I'm going to describe a really healthy activity that I do, currently, which is swimming. I used to swim a lot when I was younger, but I've recently taken it up again, and I go a couple of times a week now.

I go swimming in a gym that I joined, which has a nice swimming pool. I tried going to my local public pool, but it was too busy and you couldn't really swim up and down in lanes there. So, I found a gym that has a pool, and it's usually quite empty, and I can have a lane to myself and swim up and down.

As I said, I do this hobby or activity alone. I don't go there with anyone; it's a solitary sport really, and I'm doing it for my own health reasons. Obviously, of course, there are other people in the pool when I'm there; sometimes you have to share a lane with another person or a couple of people. But, basically, I'm in there, focused, on my own, concentrating on my own swimming stroke and technique, and trying to improve my endurance and stamina as well.

And the reason I think this is a healthy sport… well, I think it's widely accepted that swimming is really healthy. It's a good all-over body workout; it's great cardiovascular exercise; it's a low-impact sport, so you're not expected to get any injuries as you might do if you were running, where there's impact on the joints - with swimming you don't have that. So I think it's really good for the body, but it's also good for the mind. When I get into the swimming pool, as soon as I hit the water it clears my mind; I'm focused only on one thing, which is my stroke, my technique, the breathing - it makes you think about your breathing as well, which is good. And I think it rejuvenates and reinvigorates you to be in the water. It's a really relaxing experience.`
        },
        {
          cue: "Describe an indoor game that you enjoyed as a child.",
          points: [
            "what the game was",
            "where you played it",
            "who played this game with you",
            "and explain why you enjoyed it"
          ],
          sample:
`As a child I enjoyed playing chess. I think chess is probably the best known board game in the world. It's a game for two players, and the aim is to defeat the other player by taking his or her pieces and eventually trapping his King. This final move is called checkmate.

I remember that it was a classmate of mine at primary school who first taught me to play chess. He had a small, portable chess set, and once I knew how each piece moved, we started playing at break and lunch times; we played in our classroom or outside on the school playground. Later my parents bought me my own chess set as a birthday present so that I could play at home.

I taught my younger brother to play, and at some point I joined the school chess club. There I had the chance to hone my skills against some of the older pupils, and in my final year of primary school I made it onto the school team. There were five of us on the team, and we competed against children from other primary schools in the same town.

I liked playing chess because I enjoyed the challenge of thinking ahead and trying to outwit my opponent. I was probably seven or eight years old when I started playing, and it seemed like a very mysterious and intellectual game at that time. Also, although I loved winning, chess taught me to learn from my losses and to congratulate the person who had beaten me.`,
          notes: [
            "这篇来自 Simon 博客；note：结尾若能再加一个例子/故事会更好。"
          ]
        }
      ]
    }
  ]
};
