const compareWordLength = (word1, word2) => {
  return word1.length > word2.length ? word1 : word2;
};

export const computeLongestWord = data => {
  debugger;
  if (!data) {
    return [];
  }

  // data are from https://jsonplaceholder.typicode.com/posts/
  // {
  // userId: 1,
  // id: 1,
  // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  // }

  return data.reduce((longestwordFinal, obj) => {
    const { title } = obj;
    const words = title.split(' ');
    const longestword = words.reduce((longestword, word) => compareWordLength(word, longestword), '');
    debugger;
    return compareWordLength(longestword, longestwordFinal);
  }, '');
};
