import { useState } from "react";

// FIXME: 브라우저에서 한번 느리게 이동됨
const useRouter = () => {
  const [ state, setState ] = useState({});
  const [ title, setTitle] = useState('');
  const [ url, setUrl ] = useState('');
  
  const push = (_url: string) => {
    setUrl(_url);
    history.pushState(state, title, url);
  };

  return { push };
};

export default useRouter;