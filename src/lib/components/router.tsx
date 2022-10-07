import React, { createContext, SetStateAction, useEffect, useState } from "react";

export const LocationContext = createContext<{
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
}>({
  location: window.location.pathname, 
  setLocation: () => {}
});

const Router = ({ children }: React.PropsWithChildren) => {
  const [ location, setLocation ] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setTimeout(location, 0);
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, [window.location.pathname]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default Router;