
export interface FileNode   {
    id : Number;
    text : string;
    //text : string;
    author : string;
    //comments : FileNode[];
    children?: FileNode[];
  }
  
  export const commentData: FileNode = {
    id: 1,
    text: "Example comment here.",
    author: "John",
    children: [
      {
        id: 11,
        text: "Example comment here.",
        author: "Stve",
        children: [
          {
            id: 111,
            text: "Another example comment text.",
            author: "Rachel",
            children: [
              {
                id: 1112,
                text: "Another example comment text.",
                author: "Junior",
                children: []
              },
              {
                id: 1113,
                text: "Another example comment text.",
                author: "Gerrard",
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 12,
        text: "Example comment here 2.",
        author: "Ronaldo",
        children: []
      }
    ]
  }