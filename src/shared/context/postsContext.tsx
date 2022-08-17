import React from 'react';
import { IPostsData, usePostsData } from '../../hooks/usePostsData';

export const postsContext = React.createContext<Array<IPostsData>>([]);

export function PostsContextProvider({ children }: {children: React.ReactNode}) {
  const [data] = usePostsData();
  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  );
}
