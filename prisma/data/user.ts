export const usersWithDynamicsData = [
  {
    name: 'id1-hoge1',
    email: 'hoge1@example.com',
    // 1作目-1章-1ページ-1セクション
    dynamics: {
      create: [{
        title: 'id1',
        overview: 'hogehoge1',
        publisd: true,
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
                    position: null,
                    bubble: null,
                    image: null,
                    font: { connect: { name: 'serif' } },
                    term: null,
                  }]
                },
              }]
            },
            terms: null,
          }]
        },
        terms: null,
      }]
    },
    folders: {
      create: [{
        name: 'id1-user1',
      }],
    },
    images: {
      create: [{
        name: 'id1-user1-dynamic1.png',
        folders: null,
      }]
    },
    terms: {
        name: 'id1-user1-dynamic1',
        text: 'hoge1',
        userId: 1,
        order: 1,
        dynamicId: null,
        chapterId: null,
        sectionId: null,
        imageId: null,
    },
    include: {
      dynamics: {
        include: {
          chapters: {
            include: {
              pages: true
            }
          }
        }
      },
      folders: true,
      images: true,
      terms: true,
    },
  },
  // 作品複数
  {
    name: 'id2-hoge2',
    email: 'hoge2@example.com',
    // n作目-n章-nページ-nセクション
    dynamics: {
      create: [
        {
          title: 'id2-user1-dynamic1',
          overview: 'hogehoge2',
          publisd: true,
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
                            bubble: null,
                            image: null,
                            font: { connect: { name: 'sans-serif' } },
                            term: null,
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
                            image: null,
                            font: { connect: { name: 'sans-serif' } },
                            term: null,
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
                            image: null,
                            font: { connect: { name: 'fantasy' } },
                            term: null,
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
                            image: null,
                            font: { connect: { name: 'monospace' } },
                            term: null,
                          },
                          {
                            order: 5,
                            frameColor: '#000000',
                            text: 'id6-dynamic1-chapter1-page1-section5',
                            textColor: '#FFFFFF',
                            textSize: 12,
                            type: { connect: { name: 'image' } },
                            position: { connect: { name: 'left' } },
                            bubble: null,
                            image: null,
                            font: null,
                            term: null,
                          },
                          {
                            order: 6,
                            frameColor: '#000000',
                            text: 'id7-dynamic1-chapter1-page1-section6',
                            textColor: '#FFFFFF',
                            textSize: 12,
                            type: { connect: { name: 'image' } },
                            position: { connect: { name: 'senter' } },
                            bubble: null,
                            image: null,
                            font: null,
                            term: null,
                          },
                          {
                            order: 7,
                            frameColor: '#000000',
                            text: 'id8-dynamic1-chapter1-page1-section7',
                            textColor: '#FFFFFF',
                            textSize: 12,
                            type: { connect: { name: 'image' } },
                            position: { connect: { name: 'right' } },
                            bubble: null,
                            image: null,
                            font: null,
                            term: null,
                          },
                          {
                            order: 8,
                            frameColor: '#000000',
                            text: 'id9-dynamic1-chapter1-page1-section8',
                            textColor: '#FFFFFF',
                            textSize: 12,
                            type: { connect: { name: 'bubble' } },
                            position: { connect: { name: 'right' } },
                            bubble: null,
                            image: null,
                            font: null,
                            term: null,
                          },
                          {
                            order: 9,
                            frameColor: '#000000',
                            text: 'id10-dynamic1-chapter1-page1-section9',
                            textColor: '#FFFFFF',
                            textSize: 12,
                            type: { connect: { name: 'image' } },
                            position: { connect: { name: 'senter' } },
                            bubble: null,
                            image: null,
                            font: null,
                            term: null,
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
                          types: { connect: { name: 'image' } },
                          positions: { connect: { name: 'senter' } },
                          bubbles: null,
                          images: null,
                          fonts: null,
                          terms: null,
                        }]
                      },
                    },
                    {
                      title: 'id4-dynamic1-chapter1-page3',
                      order: 3,
                      sections: null,
                    },
                    {
                      title: 'id5-dynamic1-chapter1-page4',
                      order: 4,
                      sections: null,
                    },
                    {
                      title: 'id6-dynamic1-chapter1-page5',
                      order: 5,
                      sections: null,
                    },
                    {
                      title: 'id7-dynamic1-chapter1-page6',
                      order: 6,
                      sections: null,
                    },
                    {
                      title: 'id8-dynamic1-chapter1-page7',
                      order: 7,
                      sections: null,
                    },
                    {
                      title: 'id9-dynamic1-chapter1-page8',
                      order: 8,
                      sections: null,
                    },
                    {
                      title: 'id10-dynamic1-chapter1-page9',
                      order: 9,
                      sections: null,
                    },
                  ]
                },
                terms: null,
              },
              {
                title: 'id3-dynamic1-chapter2',
                order: 2,
                pages: {
                  create: [{
                    title: 'id11-dynamic1-chapter2-page1',
                    order: 1,
                    sections: null,
                  }]
                },
                terms:null,
              },
              {
                title: 'id4-dynamic1-chapter3',
                order: 3,
                pages: null,
                terms:null,
              },
              {
                title: 'id5-dynamic1-chapter4',
                order: 4,
                pages: null,
                terms:null,
              },
              {
                title: 'id6-dynamic1-chapter5',
                order: 5,
                pages: null,
                terms:null,
              },
              {
                title: 'id7-dynamic1-chapter6',
                order: 6,
                pages: null,
                terms:null,
              },
              {
                title: 'id8-dynamic1-chapter7',
                order: 7,
                pages: null,
                terms:null,
              },
              {
                title: 'id9-dynamic1-chapter8',
                order: 8,
                pages: null,
                terms:null,
              },
              {
                title: 'id10-dynamic1-chapter9',
                order: 9,
                pages: null,
                terms:null,
              },
            ]
          },
          terms: null,
        },
        {
          title: 'id3-user1-dynamic2',
          overview: 'hogehoge3',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id4-user1-dynamic3',
          overview: 'hogehoge4',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id5-user1-dynamic4',
          overview: 'hogehoge5',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id6-user1-dynamic5',
          overview: 'hogehoge6',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id7-user1-dynamic6',
          overview: 'hogehoge7',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id8-user1-dynamic7',
          overview: 'hogehoge8',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id9-user1-dynamic8',
          overview: 'hogehoge9',
          publisd: true,
          chapters: null,
          terms: null,
        },
        {
          title: 'id10-user1-dynamic9',
          overview: 'hogehoge10',
          publisd: true,
          chapters: null,
          terms: null,
        },
      ]
    },
    folders: {
      create: [
        {
          name: 'id2-user2-parent1',
          children: {
            create: [{
              name: 'id11-user2-parent1-child1',
              children: {
                create: [
                  {
                    name: 'id21-user2-parent1-child1-grandchild1',
                  },
                  {
                    name: 'id22-user2-parent1-child1-grandchild2',
                  },
                  {
                    name: 'id23-user2-parent1-child1-grandchild3',
                  },
                  {
                    name: 'id24-user2-parent1-child1-grandchild4',
                  },
                  {
                    name: 'id25-user2-parent1-child1-grandchild5',
                  },
                  {
                    name: 'id26-user2-parent1-child1-grandchild6',
                  },
                  {
                    name: 'id27-user2-parent1-child1-grandchild7',
                  },
                  {
                    name: 'id28-user2-parent1-child1-grandchild8',
                  },
                  {
                    name: 'id29-user2-parent1-child1-grandchild9',
                  },
                ]
              }
            }]
          }
        },
        {
          name: 'id3-user2-parent2',
          children: {
            create: [
              {
                name: 'id12-user2-parent2-child1',
                children: {
                  create: [{
                    name: 'id3-user2-parent1-child1-grandchild1',
                  }]
                }
              },
              {
                name: 'id13-user2-parent2-child2',
              },
              {
                name: 'id14-user2-parent2-child3',
              },
              {
                name: 'id15-user2-parent2-child4',
              },
              {
                name: 'id16-user2-parent2-child5',
              },
              {
                name: 'id17-user2-parent2-child6',
              },
              {
                name: 'id18-user2-parent2-child7',
              },
              {
                name: 'id19-user2-parent2-child8',
              },
              {
                name: 'id20-user2-parent2-child9',
              },
            ]
          }
        },
        {
          name: 'id4-user2-parent3',
        },
        {
          name: 'id5-user2-parent4',
        },
        {
          name: 'id6-user2-parent5',
        },
        {
          name: 'id7-user2-parent6',
        },
        {
          name: 'id8-user2-parent7',
        },
        {
          name: 'id9-user2-parent8',
        },
        {
          name: 'id10-user2-parent9',
        },
      ],
    },
    images: {
      create: [
        {
          name: 'id2-user2-dynamic1.png',
        },
        {
          name: 'id3-user2-dynamic1.png',
        },
        {
          name: 'id4-user2-dynamic1.png',
        },
        {
          name: 'id5-user2-dynamic1.png',
        },
        {
          name: 'id6-user2-dynamic1.png',
        },
        {
          name: 'id7-user2-dynamic1.png',
        },
        {
          name: 'id8-user2-dynamic1.png',
        },
        {
          name: 'id9-user2-dynamic1.png',
        },
        {
          name: 'id10-user2-dynamic1.png',
        },
        {
          name: 'id11-user2-chapter1.png',
        },
        {
          name: 'id12-user2-chapter1.png',
        },
        {
          name: 'id13-user2-chapter1.png',
        },
        {
          name: 'id14-user2-chapter1.png',
        },
        {
          name: 'id15-user2-chapter1.png',
        },
        {
          name: 'id16-user2-chapter1.png',
        },
        {
          name: 'id17-user2-chapter1.png',
        },
        {
          name: 'id18-user2-chapter1.png',
        },
        {
          name: 'id19-user2-chapter1.png',
        },
        {
          name: 'id20-user2-section0.png',
        },
        {
          name: 'id21-user2-dynamic0.png',
        },
        {
          name: 'id22-user2-chapter0.png',
        },
        {
          name: 'id23-user2-root1.png',
        },
        {
          name: 'id24-user2-parent1.png',
        },
        {
          name: 'id25-user2-child1.png',
        },
        {
          name: 'id26-user2-grandchild1.png',
        },
      ]
    },
    terms: {
      create: [
        {
          name: 'id2-user2-dynamic1',
          text: 'dynamic1-term1',
          userId: 2,
          order: 1,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id3-user2-dynamic2',
          text: 'dynamic1-term2',
          userId: 2,
          order: 2,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id4-user2-dynamic3',
          text: 'dynamic1-term3',
          userId: 2,
          order: 3,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id5-user2-dynamic4',
          text: 'dynamic1-term4',
          userId: 2,
          order: 4,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id6-user2-dynamic5',
          text: 'dynamic1-term5',
          userId: 2,
          order: 5,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id7-user2-dynamic6',
          text: 'dynamic1-term6',
          userId: 2,
          order: 6,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id8-user2-dynamic7',
          text: 'dynamic1-term7',
          userId: 2,
          order: 7,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id9-user2-dynamic8',
          text: 'dynamic1-term8',
          userId: 2,
          order: 8,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id10-user2-dynamic9',
          text: 'dynamic1-term9',
          userId: 2,
          order: 9,
          dynamicId: 2,
          chapterId: null,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id11-user2-chapter1',
          text: 'chapter1-term1',
          userId: 2,
          order: 1,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 25,
        },
        {
          name: 'id12-user2-chapter2',
          text: 'chapter1-term2',
          userId: 2,
          order: 2,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id13-user2-chapter3',
          text: 'chapter1-term3',
          userId: 2,
          order: 3,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id14-user2-chapter4',
          text: 'chapter1-term4',
          userId: 2,
          order: 4,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id15-user2-chapter5',
          text: 'chapter1-term5',
          userId: 2,
          order: 5,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id16-user2-chapter6',
          text: 'chapter1-term6',
          userId: 2,
          order: 6,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id17-user2-chapter7',
          text: 'chapter1-term7',
          userId: 2,
          order: 7,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id18-user2-chapter8',
          text: 'chapter1-term8',
          userId: 2,
          order: 8,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id19-user2-chapter9',
          text: 'chapter1-term9',
          userId: 2,
          order: 9,
          dynamicId: null,
          chapterId: 2,
          sectionId: null,
          imageId: 2,
        },
        {
          name: 'id20-user2-section1',
          text: 'section1-term1',
          userId: 2,
          order: 1,
          dynamicId: null,
          chapterId: null,
          sectionId: 2,
          imageId: 2,
        },
        {
          name: 'id21-user2-dynamic0',
          text: 'dynamic0-term1',
          userId: 2,
          order: 1,
          dynamicId: null,
          chapterId: null,
          sectionId: 2,
          imageId: 26,
        },
        {
          name: 'id22-user2-chapter0',
          text: 'chapter0-term1',
          userId: 2,
          order: 1,
          dynamicId: null,
          chapterId: null,
          sectionId: 2,
          imageId: 26,
        },
      ]
    },
    include: {
      dynamics: {
        include: {
          chapters: {
            include: {
              pages: true
            }
          }
        }
      },
      folders: {
        include: {
          children: true,
        },
      },
      images: true,
      terms: true,
    },
  },
  // 非公開作品
  {
    name: 'id3-hoge3',
    email: 'hoge3@example.com',
    dynamics: {
      create: [{
        title: 'id11',
        overview: 'hogehoge1',
        publisd: false,
        chapters: null,
      }]
    },
    include: {
      dynamics: true,
      impressions: true,
    },
  },
]

export const usersWithOptionsData = [
  // 感想1件、お気に入り1件（非公開）
  {
    name: 'id4-hoge4',
    email: 'hoge4@example.com',
  },
  // 感想1件（非公開）、お気に入りn件
  {
    name: 'id4-hoge4',
    email: 'hoge4@example.com',
  },
  // 感想n件、お気に入り1件
  {
    name: 'id4-hoge4',
    email: 'hoge4@example.com',
  },
]
