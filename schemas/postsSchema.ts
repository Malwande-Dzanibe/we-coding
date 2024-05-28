const postsSchema = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bait",
      title: "Bait",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "challenge",
      title: "Challenge",
      type: "code",
      options: {
        language: "javascript",
      },
    },
    {
      name: "afterFirstChallenge",
      title: "AfterFirstChallenge",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "challenge2",
      title: "Challenge2",
      type: "code",
      options: {
        language: "javascript",
      },
    },
    {
      name: "outro",
      title: "Ountro",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default postsSchema;
