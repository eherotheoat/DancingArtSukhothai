import { useState } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../helper";
import { Disclosure } from "@headlessui/react";
import { RouteList } from "./types";

interface routesProps {
  routes: RouteList[];
}

const MenuSidebar: React.FC<routesProps> = (props): JSX.Element => {
  const [navigation, setNavigation] = useState(props.routes);

  const handleSetCurrentMenu = (key: number, keySub: number | null) => {
    setNavigation((preNavigation) => {
      const newNavigation = preNavigation.map((thing, index) => {
        const isKeyMatch = key === index;
        thing.current = isKeyMatch ? true : false;
        if (typeof keySub === "number" && isKeyMatch) {
          thing.children = thing.children?.map(
            (childrenThing, indexChildren) => {
              childrenThing.current = indexChildren === keySub;
              return childrenThing;
            }
          );
        } else {
          thing.children = thing.children?.map((childrenThing) => {
            childrenThing.current = false;
            return childrenThing;
          });
        }
        return thing;
      });
      return newNavigation;
    });
  };

  return (
    <>
      {navigation.map((item, index) =>
        !item.children ? (
          <div key={item.name}>
            <NavLink
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "tw-bg-gray-900 tw-text-white"
                  : "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white",
                "tw-group tw-flex tw-items-center tw-px-2 tw-py-2 tw-text-sm tw-font-medium tw-rounded-md hover:tw-bg-gray-700 hover:tw-text-white"
              )}
              style={{ textDecoration: "none" }}
              onClick={() => handleSetCurrentMenu(index, null)}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "tw-text-gray-500"
                    : "tw-text-gray-400 group-hover:tw-text-gray-500",
                  "tw-mr-4 tw-flex-shrink-0 tw-h-6 tw-w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          </div>
        ) : (
          <Disclosure as="div" key={item.name} className="tw-space-y-1">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classNames(
                    "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white",
                    "tw-group tw-w-full tw-flex tw-items-center tw-pl-2 tw-pr-1 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-500"
                  )}
                >
                  <item.icon
                    className="tw-mr-3 tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-gray-400 group-hover:tw-text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="tw-flex-1">{item.name}</span>
                  <svg
                    className={classNames(
                      open
                        ? "tw-text-gray-400 tw-rotate-90"
                        : "tw-text-gray-300",
                      "tw-ml-3 tw-flex-shrink-0 tw-h-5 tw-w-5 tw-transform group-hover:tw-text-gray-400 tw-transition-colors tw-ease-in-out tw-duration-150"
                    )}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="tw-space-y-1">
                  {item.children?.map((subItem, indexSubItem) => (
                    <NavLink
                      key={subItem.name}
                      to={subItem.href}
                      className={classNames(
                        open && subItem.current
                          ? "tw-bg-gray-900 tw-text-white"
                          : "tw-text-gray-300 hover:tw-bg-gray-700 hover:tw-text-white",
                        "tw-group w-full tw-flex tw-items-center tw-pl-11 tw-pr-2 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-300 tw-rounded-md hover:tw-text-white hover:tw-bg-gray-700"
                      )}
                      style={{ textDecoration: "none" }}
                      onClick={() => handleSetCurrentMenu(index, indexSubItem)}
                    >
                      {subItem.name} {subItem.current}
                    </NavLink>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
      )}
    </>
  );
};

export default MenuSidebar;
