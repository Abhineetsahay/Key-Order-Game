export const CorrectNestedTags = [
  {
    tag: "nav",
    children: [
      {
        tag: "header",
        children: [
          {
            tag: "div",
            children: [
              {
                tag: "main",
                children: [
                  {
                    tag: "section",
                    children: [
                      {
                        tag: "article",
                        children: [
                          {
                            tag: "p",
                            children: [
                              { tag: "span", content: "Correct Answer" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const FirstInCorrectNestedTags = [
  {
    tag: "header",
    children: [
      {
        tag: "article",
        children: [
          {
            tag: "main",
            children: [
              {
                tag: "section",
                children: [
                  {
                    tag: "div",
                    children: [
                      {
                        tag: "p",
                        children: [
                          { tag: "span", content: "InCorrect Answer" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const SecondInCorrectNestedTags = [
  {
    tag: "main",
    children: [
      {
        tag: "nav",
        children: [
          {
            tag: "section",
            children: [
              {
                tag: "header",
                children: [
                  {
                    tag: "div",
                    children: [
                      {
                        tag: "p",
                        children: [
                          { tag: "span", content: "InCorrect Answer" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const ThirdInCorrectNestedTags = [
  {
    tag: "section",
    children: [
      {
        tag: "article",
        children: [
          {
            tag: "div",
            children: [
              {
                tag: "nav",
                children: [
                  {
                    tag: "header",
                    children: [
                      {
                        tag: "p",
                        children: [
                          { tag: "span", content: "InCorrect Answer" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const FourthInCorrectNestedTags = [
  {
    tag: "p",
    children: [
      {
        tag: "span",
        children: [
          {
            tag: "nav",
            children: [
              {
                tag: "section",
                children: [
                  {
                    tag: "article",
                    children: [
                      {
                        tag: "header",
                        children: [{ tag: "div", content: "InCorrect Answer" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
