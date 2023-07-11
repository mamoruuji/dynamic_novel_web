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
        create: [{
          title: 'id1-dynamic1-chapter1',
          order: 1,
          pages: {
            create: [{
              title: 'id1-dynamic1-chapter1-page1',
              order: 1,
              sections: {
                create: [{
                  order: 1,
                  frameColor: '#000000',
                  text: 'id1-dynamic1-chapter1-page1-section1',
                  textColor: '#FFFFFF',
                  textSize: 12,
                  type: { connect: { name: 'text' } },
                  position: undefined,
                  bubble: undefined,
                  image: undefined,
                  font: { connect: { name: 'serif' } },
                }],
              },
            }],
          },
        }],
      },
    },
  },
  folders: {
    create: {
      name: 'id1-user1',
    },
  },
  images: {
    create: {
      name: 'id1-user1-dynamic1.png',
    },
  },
  terms: {
    create: {
      name: 'id1-user1-dynamic1',
      text: 'hoge1',
      order: 1,
    },
  },
}

export const heavyUserData = {
  name: 'id2-creater2',
  email: 'hoge2@example.com',
  // n作目-n章-nページ-nセクション
  dynamics: {
    create: [
      {
        title: 'id2-dynamic1',
        overview: 'hogehoge2',
        published: true,
        chapters: {
          create: [
            {
              title: 'id2-dynamic1-chapter1',
              order: 1,
              pages: {
                create: [
                  {
                    title: 'id2-dynamic1-chapter1-page1',
                    order: 1,
                    sections: {
                      create: [
                        {
                          order: 1,
                          frameColor: '#000000',
                          text: 'id2-dynamic1-chapter1-page1-section1',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'text' } },
                          position: { connect: { name: 'left' } },
                          bubble: undefined,
                          image: undefined,
                          font: { connect: { name: 'sans-serif' } },
                        },
                        {
                          order: 2,
                          frameColor: '#000000',
                          text: 'id3-dynamic1-chapter1-page1-section2',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'bubble' } },
                          position: { connect: { name: 'left' } },
                          bubble: { connect: { name: 'talk' } },
                          image: undefined,
                          font: { connect: { name: 'sans-serif' } },
                        },
                        {
                          order: 3,
                          frameColor: '#000000',
                          text: 'id4-dynamic1-chapter1-page1-section3',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'bubble' } },
                          position: { connect: { name: 'senter' } },
                          bubble: { connect: { name: 'shout' } },
                          image: undefined,
                          font: { connect: { name: 'fantasy' } },
                        },
                        {
                          order: 4,
                          frameColor: '#000000',
                          text: 'id5-dynamic1-chapter1-page1-section4',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'bubble' } },
                          position: { connect: { name: 'right' } },
                          bubble: { connect: { name: 'think' } },
                          image: undefined,
                          font: { connect: { name: 'monospace' } },
                        },
                        {
                          order: 5,
                          frameColor: '#000000',
                          text: 'id6-dynamic1-chapter1-page1-section5',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'image' } },
                          position: { connect: { name: 'left' } },
                          bubble: undefined,
                          image: undefined,
                          font: undefined,
                        },
                        {
                          order: 6,
                          frameColor: '#000000',
                          text: 'id7-dynamic1-chapter1-page1-section6',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'image' } },
                          position: { connect: { name: 'senter' } },
                          bubble: undefined,
                          image: undefined,
                          font: undefined,
                        },
                        {
                          order: 7,
                          frameColor: '#000000',
                          text: 'id8-dynamic1-chapter1-page1-section7',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'image' } },
                          position: { connect: { name: 'right' } },
                          bubble: undefined,
                          image: undefined,
                          font: undefined,
                        },
                        {
                          order: 8,
                          frameColor: '#000000',
                          text: 'id9-dynamic1-chapter1-page1-section8',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'bubble' } },
                          position: { connect: { name: 'right' } },
                          bubble: undefined,
                          image: undefined,
                          font: undefined,
                        },
                        {
                          order: 9,
                          frameColor: '#000000',
                          text: 'id10-dynamic1-chapter1-page1-section9',
                          textColor: '#FFFFFF',
                          textSize: 12,
                          type: { connect: { name: 'image' } },
                          position: { connect: { name: 'senter' } },
                          bubble: undefined,
                          image: undefined,
                          font: undefined,
                        },
                      ]
                    },
                  },
                  {
                    title: 'id3-dynamic1-chapter1-page2',
                    order: 2,
                    sections: {
                      create: [{
                        order: 1,
                        frameColor: '#000000',
                        text: 'id11-dynamic2-chapter1-page1-section1',
                        textColor: '#FFFFFF',
                        textSize: 12,
                        type: { connect: { name: 'image' } },
                        position: { connect: { name: 'senter' } },
                        bubble: undefined,
                        image: undefined,
                        font: undefined,
                      }],
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
              },
            },
            {
              title: 'id3-dynamic1-chapter2',
              order: 2,
              pages: {
                create: [{
                  title: 'id11-dynamic1-chapter2-page1',
                  order: 1,
                }]
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
        },
      },
      {
        title: 'id3-dynamic2',
        overview: 'hogehoge3',
        published: true,
        chapters: {
          create: [{
            title: 'id11-dynamic2-chapter1',
            order: 1,
          }],
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
    ],
  },
  folders: {
    create: [
      {
        name: 'id2-parent1',
      },
      {
        name: 'id3-parent2',
      },
      {
        name: 'id4-parent3',
      },
      {
        name: 'id5-parent4',
      },
      {
        name: 'id6-parent5',
      },
      {
        name: 'id7-parent6',
      },
      {
        name: 'id8-parent7',
      },
      {
        name: 'id9-parent8',
      },
      {
        name: 'id10-parent9',
      },
      {
        name: 'id11-parent1-child1',
      },
      {
        name: 'id12-parent1-child2',
      },
      {
        name: 'id13-parent1-child3',
      },
      {
        name: 'id14-parent1-child4',
      },
      {
        name: 'id15-parent1-child5',
      },
      {
        name: 'id16-parent1-child6',
      },
      {
        name: 'id17-parent1-child7',
      },
      {
        name: 'id18-parent1-child8',
      },
      {
        name: 'id19-parent1-child8',
      },
      {
        name: 'id20-parent1-child9',
      },
      {
        name: 'id21-parent2-child1',
      },
      {
        name: 'id22-child1-grandchild1',
      },
      {
        name: 'id23-child1-grandchild2',
      },
      {
        name: 'id24-child1-grandchild3',
      },
      {
        name: 'id25-child1-grandchild4',
      },
      {
        name: 'id26-child1-grandchild5',
      },
      {
        name: 'id27-child1-grandchild6',
      },
      {
        name: 'id28-child1-grandchild7',
      },
      {
        name: 'id29-child1-grandchild8',
      },
      {
        name: 'id30-child1-grandchild9',
      },
      {
        name: 'id31-child2-grandchild1',
      },
    ],
  },
  images: {
    create: [
      {
        name: 'id2-dynamic1.png',
      },
      {
        name: 'id3-dynamic1.png',
      },
      {
        name: 'id4-dynamic1.png',
      },
      {
        name: 'id5-dynamic1.png',
      },
      {
        name: 'id6-dynamic1.png',
      },
      {
        name: 'id7-dynamic1.png',
      },
      {
        name: 'id8-dynamic1.png',
      },
      {
        name: 'id9-dynamic1.png',
      },
      {
        name: 'id10-dynamic1.png',
      },
      {
        name: 'id11-chapter1.png',
      },
      {
        name: 'id12-chapter1.png',
      },
      {
        name: 'id13-chapter1.png',
      },
      {
        name: 'id14-chapter1.png',
      },
      {
        name: 'id15-chapter1.png',
      },
      {
        name: 'id16-chapter1.png',
      },
      {
        name: 'id17-chapter1.png',
      },
      {
        name: 'id18-chapter1.png',
      },
      {
        name: 'id19-chapter1.png',
      },
      {
        name: 'id20-section0.png',
      },
      {
        name: 'id21-dynamic0.png',
      },
      {
        name: 'id22-chapter0.png',
      },
      {
        name: 'id23-root1.png',
      },
      {
        name: 'id24-parent1.png',
      },
      {
        name: 'id25-child1.png',
      },
      {
        name: 'id26-grandchild1.png',
      },
    ],
  },
  terms: {
    create: [
      {
        name: 'id2-dynamic1',
        text: 'dynamic1-term1',
        order: 1,
      },
      {
        name: 'id3-dynamic2',
        text: 'dynamic1-term2',
        order: 2,
      },
      {
        name: 'id4-dynamic3',
        text: 'dynamic1-term3',
        order: 3,
      },
      {
        name: 'id5-dynamic4',
        text: 'dynamic1-term4',
        order: 4,
      },
      {
        name: 'id6-dynamic5',
        text: 'dynamic1-term5',
        order: 5,
      },
      {
        name: 'id7-dynamic6',
        text: 'dynamic1-term6',
        order: 6,
      },
      {
        name: 'id8-dynamic7',
        text: 'dynamic1-term7',
        order: 7,
      },
      {
        name: 'id9-dynamic8',
        text: 'dynamic1-term8',
        order: 8,
      },
      {
        name: 'id10-dynamic9',
        text: 'dynamic1-term9',
        order: 9,
      },
      {
        name: 'id11-chapter1',
        text: 'chapter1-term1',
        order: 1,
      },
      {
        name: 'id12-chapter2',
        text: 'chapter1-term2',
        order: 2,
      },
      {
        name: 'id13-chapter3',
        text: 'chapter1-term3',
        order: 3,
      },
      {
        name: 'id14-chapter4',
        text: 'chapter1-term4',
        order: 4,
      },
      {
        name: 'id15-chapter5',
        text: 'chapter1-term5',
        order: 5,
      },
      {
        name: 'id16-chapter6',
        text: 'chapter1-term6',
        order: 6,
      },
      {
        name: 'id17-chapter7',
        text: 'chapter1-term7',
        order: 7,
      },
      {
        name: 'id18-chapter8',
        text: 'chapter1-term8',
        order: 8,
      },
      {
        name: 'id19-chapter9',
        text: 'chapter1-term9',
        order: 9,
      },
      {
        name: 'id20-dynamic0',
        text: 'dynamic0-term1',
        order: 1,
      },
      {
        name: 'id21-chapter0',
        text: 'chapter0-term1',
        order: 1,
      },
      {
        name: 'id22-section0',
        text: 'section1-term1',
        order: 1,
      },
    ],
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
