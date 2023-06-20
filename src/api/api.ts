export const getPosts = () => fetch('https://dummyjson.com/comments?limit=5').then(res => res.json());
