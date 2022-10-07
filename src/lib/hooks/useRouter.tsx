import { useContext } from "react";
import { LocationContext } from "@/lib/components/router";

interface UseRouterProps {
  push: (url: string) => void;
}

const useRouter = (): UseRouterProps => {
  const { setLocation } = useContext(LocationContext);
  
  const push = (url: string) => {
    setLocation(url);
    history.pushState({}, document.title, url);
  };
  
  return { push };
};

export default useRouter;