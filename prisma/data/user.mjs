export const middleUserData = {
  name: 'id1-creater1',
  email: 'hoge1@example.com',
  // 1作目-1章-1ページ-1セクション
  dynamics: {
    create: {
      title: 'id1',
      overview: 'hogehoge1',
      published: true,
      chapters: {
        create: {
          title: 'id1-dynamic1-chapter1',
          order: 1,
          pages: {
            create: {
              title: 'id1-dynamic1-chapter1-page1',
              order: 1,
              sections: {
                create: {
                  name: 'id1-dynamic1-chapter1-page1-section1',
                  order: 1,
                  frameColor: { connect: { name: 'red' } },
                  text: '',
                  textColor: { connect: { name: 'orenge' } },
                  textSize: 6,
                  type: { connect: { name: 'monologue' } },
                  position: undefined,
                  animation: undefined,
                  image: undefined,
                  font: { connect: { name: 'monologueFont' } },
                  term: {
                    create: {
                      name: 'id1-user1-section1-term1',
                      text: 'hoge1',
                      order: 1,
                      imageId: null,
                    },
                  },
                },
              },
              terms: {
                create: {
                  name: 'id1-user1-page1-term1',
                  text: 'hoge1',
                  order: 1,
                  imageId: null,
                },
              },
            },
          },
          terms: {
            create: {
              name: 'id1-user1-chapter1-term1',
              text: 'hoge1',
              order: 1,
              imageId: null,
            },
          },
        },
      },
      tags: {
        create: {
          tag: {
            create: {
              name: 'id1-user1-dynamic1-tag1',
            },
          },
        },
      },
      terms: {
        create: {
          name: 'id1-user1-dynamic1-term1',
          text: 'hoge1',
          order: 1,
          imageId: null,
        },
      },
    },
  },
  folders: {
    create: {
      name: 'id1-user1-folder1',
      parentId: null,
    },
  },
}

const dynamic1Chapter1Page1section1Terms = [
  {
    name: 'id2-user2-section1',
    text: 'section1-term1',
    order: 2,
  },
  {
    name: 'id3-user2-section1',
    text: 'section1-term2',
    order: 3,
  },
  {
    name: 'id4-user2-section1',
    text: 'section1-term3',
    order: 4,
  },
  {
    name: 'id5-user2-section1',
    text: 'section1-term4',
    order: 5,
  },
  {
    name: 'id6-user2-section1',
    text: 'section1-term5',
    order: 6,
  },
  {
    name: 'id7-user2-section1',
    text: 'section1-term6',
    order: 7,
  },
  {
    name: 'id8-user2-section1',
    text: 'section1-term7',
    order: 8,
  },
  {
    name: 'id9-user2-section1',
    text: 'section1-term8',
    order: 9,
  },
  {
    name: 'id10-user2-section1',
    text: 'section1-term9',
    order: 1,
  },
]

const dynamic1Chapter1Page1section1Term = {
  name: 'id11-user2-section2',
  text: 'section2-term1',
  order: 1,
}

const dynamic1Chapter1Page1Sections = [
  {
    name: 'id2-dynamic1-chapter1-page1-section1',
    order: 1,
    frameColor: { connect: { name: 'yellow' } },
    text: 'モノローグ',
    textColor: { connect: { name: 'light-green' } },
    textSize: 8,
    type: { connect: { name: 'monologue' } },
    position: undefined,
    animation: { connect: { name: 'fade-in' } },
    image: undefined,
    font: { connect: { name: 'monologueFont' } },
    term: { create: dynamic1Chapter1Page1section1Terms },
  },
  {
    name: 'id3-dynamic1-chapter1-page1-section2',
    order: 2,
    frameColor: { connect: { name: 'light-blue' } },
    text: 'なんか喋ってます',
    textColor: { connect: { name: 'blue' } },
    textSize: 10,
    type: { connect: { name: 'line-bubble' } },
    position: { connect: { name: 'left' } },
    animation: { connect: { name: 'fade-out' } },
    image: undefined,
    font: { connect: { name: 'lineFont' } },
    term: { create: dynamic1Chapter1Page1section1Term },
  },
  {
    name: 'id4-dynamic1-chapter1-page1-section3',
    order: 3,
    frameColor: { connect: { name: 'default' } },
    text: 'なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。なんか喋ってます。',
    textColor: { connect: { name: 'dark-blue' } },
    textSize: 12,
    type: { connect: { name: 'line-bubble' } },
    position: { connect: { name: 'right' } },
    animation: { connect: { name: 'up-slide' } },
    image: undefined,
    font: { connect: { name: 'gagFont' } },
  },
  {
    name: 'id5-dynamic1-chapter1-page1-section4',
    order: 4,
    frameColor: { connect: { name: 'pink' } },
    text: 'なんか考えてます',
    textColor: { connect: { name: 'purple' } },
    textSize: 14,
    type: { connect: { name: 'thought-bubble' } },
    position: { connect: { name: 'left' } },
    animation: { connect: { name: 'left-slide' } },
    image: undefined,
    font: { connect: { name: 'horrorFont' } },
  },
  {
    name: 'id6-dynamic1-chapter1-page1-section5',
    order: 5,
    frameColor: { connect: { name: 'default' } },
    text: 'なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。なんか考えてます。',
    textColor: { connect: { name: 'red-purple' } },
    textSize: 16,
    type: { connect: { name: 'thought-bubble' } },
    position: { connect: { name: 'right' } },
    animation: { connect: { name: 'right-slide' } },
    image: undefined,
    font: { connect: { name: 'cuteFont' } },
  },
  {
    name: 'id7-dynamic1-chapter1-page1-section6',
    order: 6,
    frameColor: undefined,
    text: 'なんか叫んでます',
    textColor: undefined,
    textSize: 18,
    type: { connect: { name: 'shout-bubble' } },
    position: { connect: { name: 'left' } },
    animation: { connect: { name: 'down-slide' } },
    image: undefined,
    font: { connect: { name: 'lineFont' } },
  },
  {
    name: 'id8-dynamic1-chapter1-page1-section7',
    order: 7,
    textColor: undefined,
    text: 'なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。なんか叫んでます。',
    textColor: undefined,
    textSize: 20,
    type: { connect: { name: 'shout-bubble' } },
    position: { connect: { name: 'right' } },
    animation: { connect: { name: 'vibrate' } },
    image: undefined,
    font: { connect: { name: 'lineFont' } },
  },
  {
    name: 'id9-dynamic1-chapter1-page1-section8',
    order: 8,
    textColor: undefined,
    text: undefined,
    textColor: undefined,
    textSize: 22,
    type: { connect: { name: 'image' } },
    position: undefined,
    animation: { connect: { name: 'vibrate' } },
    image: undefined,
    font: undefined,
  },
  {
    name: 'id10-dynamic1-chapter1-page1-section9',
    order: 9,
    textColor: undefined,
    text: undefined,
    textColor: undefined,
    textSize: 24,
    type: { connect: { name: 'monologue' } },
    position: undefined,
    animation: undefined,
    image: undefined,
    font: undefined,
  },
]

const dynamic1Chapter1Page1Section = {
  name: 'id11-dynamic2-chapter1-page1-section1',
  order: 1,
  frameColor: undefined,
  text: undefined,
  textColor: undefined,
  textSize: 36,
  type: { connect: { name: 'monologue' } },
  position: undefined,
  animation: undefined,
  image: undefined,
  font: undefined,
}

const dynamic1Chapter1Page1Terms = [
  {
    name: 'id12-user2-page1',
    text: 'page1-term1',
    order: 2,
  },
  {
    name: 'id13-user2-page1',
    text: 'page1-term2',
    order: 1,
  },
  {
    name: 'id14-user2-page1',
    text: 'page1-term3',
    order: 3,
  },
  {
    name: 'id15-user2-page1',
    text: 'page1-term4',
    order: 4,
  },
  {
    name: 'id16-user2-page1',
    text: 'page1-term5',
    order: 5,
  },
  {
    name: 'id17-user2-page1',
    text: 'page1-term6',
    order: 6,
  },
  {
    name: 'id18-user2-page1',
    text: 'page1-term7',
    order: 7,
  },
  {
    name: 'id19-user2-page1',
    text: 'page1-term8',
    order: 8,
  },
  {
    name: 'id20-user2-page1',
    text: 'page1-term9',
    order: 9,
  },
]

const dynamic1Chapter1Page1Term = {
  name: 'id21-user2-page2',
  text: 'page2-term1',
  order: 1,
}

const dynamic1Chapter1Pages = [
  {
    title: 'id2-dynamic1-chapter1-page1',
    order: 1,
    sections: {
      create: dynamic1Chapter1Page1Sections,
    },
    terms: {
      create: dynamic1Chapter1Page1Terms,
    },
  },
  {
    title: 'id3-dynamic1-chapter1-page2',
    order: 2,
    sections: {
      create: dynamic1Chapter1Page1Section,
    },
    terms: {
      create: dynamic1Chapter1Page1Term,
    },
  },
  {
    title: 'id4-dynamic1-chapter1-page3',
    order: 3,
  },
  {
    title: 'id5-dynamic1-chapter1-page4',
    order: 4,
  },
  {
    title: 'id6-dynamic1-chapter1-page5',
    order: 5,
  },
  {
    title: 'id7-dynamic1-chapter1-page6',
    order: 6,
  },
  {
    title: 'id8-dynamic1-chapter1-page7',
    order: 7,
  },
  {
    title: 'id9-dynamic1-chapter1-page8',
    order: 8,
  },
  {
    title: 'id10-dynamic1-chapter1-page9',
    order: 9,
  },
]

const dynamic1chapter1Terms = [
  {
    name: 'id22-user2-chapter1',
    text: 'chapter1-term1',
    order: 9,
  },
  {
    name: 'id23-user2-chapter1',
    text: 'chapter1-term2',
    order: 2,
  },
  {
    name: 'id24-user2-chapter1',
    text: 'chapter1-term3',
    order: 3,
  },
  {
    name: 'id25-user2-chapter1',
    text: 'chapter1-term4',
    order: 4,
  },
  {
    name: 'id26-user2-chapter1',
    text: 'chapter1-term5',
    order: 7,
  },
  {
    name: 'id27-user2-chapter1',
    text: 'chapter1-term6',
    order: 6,
  },
  {
    name: 'id28-user2-chapter1',
    text: 'chapter1-term7',
    order: 5,
  },
  {
    name: 'id29-user2-chapter1',
    text: 'chapter1-term8',
    order: 8,
  },
  {
    name: 'id30-user2-chapter1',
    text: 'chapter1-term9',
    order: 1,
  },
]

const dynamic1chapter1Term = {
  name: 'id31-user2-chapter2',
  text: 'chapter2-term1',
  order: 1,
}

const dynamic1Chapters = [
  {
    title: 'id2-dynamic1-chapter1',
    order: 1,
    pages: {
      create: dynamic1Chapter1Pages,
    },
    terms: {
      create: dynamic1chapter1Terms,
    },
  },
  {
    title: 'id3-dynamic1-chapter2',
    order: 2,
    pages: {
      create: {
        title: 'id11-dynamic1-chapter2-page1',
        order: 1,
      },
    },
    terms: {
      create: dynamic1chapter1Term,
    },
  },
  {
    title: 'id4-dynamic1-chapter3',
    order: 3,
  },
  {
    title: 'id5-dynamic1-chapter4',
    order: 4,
  },
  {
    title: 'id6-dynamic1-chapter5',
    order: 5,
  },
  {
    title: 'id7-dynamic1-chapter6',
    order: 6,
  },
  {
    title: 'id8-dynamic1-chapter7',
    order: 7,
  },
  {
    title: 'id9-dynamic1-chapter8',
    order: 8,
  },
  {
    title: 'id10-dynamic1-chapter9',
    order: 9,
  },
]

const dynamic1Tags = [
  {
    tag: {
      create: {
        name: 'id2-user2-dynamic1-tag1',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id3-user2-dynamic1-tag2',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id4-user2-dynamic1-tag3',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id5-user2-dynamic1-tag4',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id6-user2-dynamic1-tag5',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id7-user2-dynamic1-tag6',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id8-user2-dynamic1-tag7',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id9-user2-dynamic1-tag8',
      },
    },
  },
  {
    tag: {
      create: {
        name: 'id10-user2-dynamic1-tag9',
      },
    },
  },
]

const dynamic1Terms = [
  {
    name: 'id42-user2-dynamic1',
    text: 'dynamic1-term1',
    order: 2,
  },
  {
    name: 'id43-user2-dynamic1',
    text: 'dynamic1-term2',
    order: 1,
  },
  {
    name: 'id44-user2-dynamic1',
    text: 'dynamic1-term3',
    order: 3,
  },
  {
    name: 'id45-user2-dynamic1',
    text: 'dynamic1-term4',
    order: 9,
  },
  {
    name: 'id46-user2-dynamic1',
    text: 'dynamic1-term5',
    order: 5,
  },
  {
    name: 'id47-user2-dynamic1',
    text: 'dynamic1-term6',
    order: 6,
  },
  {
    name: 'id48-user2-dynamic1',
    text: 'dynamic1-term7',
    order: 7,
  },
  {
    name: 'id49-user2-dynamic1',
    text: 'dynamic1-term8',
    order: 8,
  },
  {
    name: 'id50-user2-dynamic1',
    text: 'dynamic1-term9',
    order: 4,
  },
]

const dynamic1Term = {
  name: 'id51-user2-dynamic2',
  text: 'dynamic2-term1',
  order: 1,
}

const dynamics = [
  {
    title: 'id2-dynamic1',
    overview: 'hogehoge2',
    published: true,
    chapters: {
      create: dynamic1Chapters,
    },
    terms: {
      create: dynamic1Terms,
    },
    tags: {
      create: dynamic1Tags,
    },
  },
  {
    title: 'id3-dynamic2',
    overview: 'hogehoge3',
    published: true,
    chapters: {
      create: {
        title: 'id11-dynamic2-chapter1',
        order: 1,
      },
    },
    terms: {
      create: dynamic1Term,
    },
    tags: {
      create: {
        tag: {
          create: {
            name: 'id11-user2-dynamic2-tag11',
          },
        },
      },
    },
  },
  {
    title: 'id4-dynamic3',
    overview: 'hogehoge4',
    published: true,
  },
  {
    title: 'id5-dynamic4',
    overview: 'hogehoge5',
    published: true,
  },
  {
    title: 'id6-dynamic5',
    overview: 'hogehoge6',
    published: true,
  },
  {
    title: 'id7-dynamic6',
    overview: 'hogehoge7',
    published: true,
  },
  {
    title: 'id8-dynamic7',
    overview: 'hogehoge8',
    published: true,
  },
  {
    title: 'id9-dynamic8',
    overview: 'hogehoge9',
    published: true,
  },
  {
    title: 'id10-dynamic9',
    overview: 'hogehoge10',
    published: true,
  },
]

const folders = [
  {
    name: 'id2-parent1',
    parentId: null,
  },
  {
    name: 'id3-parent2',
    parentId: null,
  },
  {
    name: 'id4-parent3',
    parentId: null,
  },
  {
    name: 'id5-parent4',
    parentId: null,
  },
  {
    name: 'id6-parent5',
    parentId: null,
  },
  {
    name: 'id7-parent6',
    parentId: null,
  },
  {
    name: 'id8-parent7',
    parentId: null,
  },
  {
    name: 'id9-parent8',
    parentId: null,
  },
  {
    name: 'id10-parent9',
    parentId: null,
  },
  {
    name: 'id11-parent1-child1',
    parentId: null,
  },
  {
    name: 'id12-parent1-child2',
    parentId: null,
  },
  {
    name: 'id13-parent1-child3',
    parentId: null,
  },
  {
    name: 'id14-parent1-child4',
    parentId: null,
  },
  {
    name: 'id15-parent1-child5',
    parentId: null,
  },
  {
    name: 'id16-parent1-child6',
    parentId: null,
  },
  {
    name: 'id17-parent1-child7',
    parentId: null,
  },
  {
    name: 'id18-parent1-child8',
    parentId: null,
  },
  {
    name: 'id19-parent1-child8',
    parentId: null,
  },
  {
    name: 'id20-parent1-child9',
    parentId: null,
  },
  {
    name: 'id21-parent2-child1',
    parentId: null,
  },
  {
    name: 'id22-child1-grandchild1',
    parentId: null,
  },
  {
    name: 'id23-child1-grandchild2',
    parentId: null,
  },
  {
    name: 'id24-child1-grandchild3',
    parentId: null,
  },
  {
    name: 'id25-child1-grandchild4',
    parentId: null,
  },
  {
    name: 'id26-child1-grandchild5',
    parentId: null,
  },
  {
    name: 'id27-child1-grandchild6',
    parentId: null,
  },
  {
    name: 'id28-child1-grandchild7',
    parentId: null,
  },
  {
    name: 'id29-child1-grandchild8',
    parentId: null,
  },
  {
    name: 'id30-child1-grandchild9',
    parentId: null,
  },
  {
    name: 'id31-child2-grandchild1',
    parentId: null,
  },
]

const images = [
  // termsofdynamic
  {
    name: 'id2-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id3-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id4-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id5-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id6-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id7-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id8-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id9-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id10-user2-terms-dynamic1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // termofdynamic
  {
    name: 'id11-user2-term-dynamic2.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // termsofchapters
  {
    name: 'id12-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id13-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id14-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id15-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id16-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id17-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id18-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id19-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id20-user2-terms-chapter1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // chapterofpage
  {
    name: 'id21-user2-term-chapter2.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // termsofpage
  {
    name: 'id22-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id23-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id24-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id25-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id26-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id27-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id28-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id29-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id30-user2-terms-page1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // termofpage
  {
    name: 'id31-user2-term-page2.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // termsofsection
  {
    name: 'id32-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id33-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id34-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id35-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id36-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id37-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id38-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id39-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id40-user2-terms-section1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id41-user2-term-section2.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  // section
  {
    name: 'id42-user2-icon.png',
    type: { connect: { name: 'icon' } },
    path: 'id2-creater2/',
  },
  {
    name: 'id43-user2-illustration.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'illustration' } },
  },
  // folder
  {
    name: 'id44-user2-root1.png',
    path: 'id2-creater2/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id45-user2-parent1.png',
    path: 'id2-creater2/parent/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id46-user2-child1.png',
    path: 'id2-creater2/parent/child/',
    type: { connect: { name: 'icon' } },
  },
  {
    name: 'id47-user2-grandchild1.png',
    path: 'id2-creater2/parent/child/grandchild',
    type: { connect: { name: 'icon' } },
  },
]

export const heavyUserData = {
  name: 'id2-creater2',
  email: 'hoge2@example.com',
  // n作目-n章-nページ-nセクション
  dynamics: {
    create: dynamics,
  },
  folders: {
    create: folders,
  },
  images: {
    create: images,
  },
}

export const lightUserData = {
  name: 'id3-creater3',
  email: 'hoge3@example.com',
  dynamics: {
    create: {
      title: 'id11',
      overview: 'hogehoge1',
      published: false,
      chapters: {
        create: [],
      },
    },
  },
}

export const readerUserData = [
  // 感想1件、お気に入り1件（非公開）
  {
    name: 'id4-reader',
    email: 'hoge4@example.com',
  },
  // 感想1件（非公開）、お気に入りn件
  {
    name: 'id5-reader',
    email: 'hoge5@example.com',
  },
  // 感想n件、お気に入り1件
  {
    name: 'id6-reader',
    email: 'hoge6@example.com',
  },
]
