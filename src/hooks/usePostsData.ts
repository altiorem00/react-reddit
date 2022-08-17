import { useEffect, useState } from 'react';
import axios from 'axios';

export interface IPostsData {
    author?: string,
    url?: string,
    title?: string,
    preview?: string,
    created?: number,
}

export function usePostsData() {
  const [data, setData] = useState<Array<IPostsData>>();
  useEffect(() => {
    axios.get('https://www.reddit.com/top.json?raw_json=1&t=week')
      .then((res) => {
        const postsData = res.data.data.children.map((post: {data: any}) => ({
          author: post.data.author,
          url: post.data.url,
          title: post.data.title,
          preview: post.data.preview ? post.data.preview.images[0].source.url : 'http://www.pdvg.it/wp-content/uploads/2019/02/Reddit.png',
          created: post.data.created * 1000,
        }));
        setData(postsData);
      })
      .catch(console.log);
  }, []);
  return [data || []];
}
