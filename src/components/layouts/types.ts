import { IconType } from "react-icons";

export interface RouteList {
  name: string;
  href: string;
  element: JSX.Element | null;
  icon: IconType;
  current: boolean;
  children?: RouteChildren[];
}

export interface RouteChildren {
  name: string;
  href: string;
  element: JSX.Element;
  current: boolean;
}
