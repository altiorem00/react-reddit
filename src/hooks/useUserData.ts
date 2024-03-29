import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
  name?: string,
  iconImg?: string
}

export function useUserData() {
  const token = useContext(tokenContext);
  const [data, setData] = useState<IUserData>();
  useEffect(() => {
    if (token && token.length && token !== 'undefined') {
      axios.get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
        headers: { Authorization: `bearer ${token}` },
      })
        .then((res) => {
          const userData = res.data;
          setData({ name: userData.name, iconImg: userData.icon_img });
        })
        .catch(console.log);
    }
  }, [token]);
  return [data];
}
