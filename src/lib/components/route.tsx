import { useState } from "react";

interface RouteProps {
  path: string;
  component: React.ReactElement;
}

const Route = ({ path, component }: RouteProps) => {
  const [ currentPath, setCurrentPath ] = useState(path);
  window.onpopstate = () => setCurrentPath(window.location.pathname);

  if (currentPath !== path) return (<></>);
  else return component;
};

export default Route;