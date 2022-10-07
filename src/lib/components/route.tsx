import { useContext } from "react";
import { LocationContext } from "./router";

interface RouteProps {
  path: string;
  component: React.ReactElement;
};

const Route = ({ path, component }: RouteProps) => {
  const {location: currentLocation } = useContext(LocationContext);

  if (currentLocation !== path) return <></>;
  return component;
};

export default Route;