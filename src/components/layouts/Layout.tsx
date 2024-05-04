import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import Navbar from "./Navbar";
import MenuSidebar from "./MenuSidebar";
import { Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import ManageFresh from "../../pages/ManageFresh";
import { HiChartPie, HiOutlineShoppingCart } from "react-icons/hi";
import OrderingPage from "../../pages/OrderingPage";
import PrepareMarerialPage from "../../pages/PrepareMarerialPage";
import TestPage from "../../pages/TestPage";
import { RouteList } from "./types";
import Todos from "../../pages/Todos";
import { current } from "@reduxjs/toolkit";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = (props): JSX.Element => {
  const routes: RouteList[] = [
    {
      name: "Dashboard",
      href: "/",
      element: ManageFresh(),
      icon: HiChartPie,
      current: true,
    },
    {
      name: "Ordering",
      href: "",
      element: null,
      icon: HiOutlineShoppingCart,
      current: false,
      children: [
        {
          name: "Ordering",
          href: "/ordering/order",
          element: OrderingPage(),
          current: false,
        },
        {
          name: "Prepare Marerial",
          href: "/ordering/Prepare",
          element: PrepareMarerialPage(),
          current: false,
        }
      ],
    },
    {
      name: "Test",
      href: "",
      element: null,
      icon: HiOutlineShoppingCart,
      current: false,
      children: [
        {
          name: "test",
          href: "/test/todo",
          element: TestPage(),
          current: false,
        },
        {
          name: "test2",
          href: "/test/todo2",
          element: Todos(),
          current: false,
        },
      ],
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="tw-relative tw-z-40 xl:tw-hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="tw-transition-opacity tw-ease-linear tw-duration-300"
              enterFrom="tw-opacity-0"
              enterTo="tw-opacity-100"
              leave="tw-transition-opacity tw-ease-linear tw-duration-300"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <div className="tw-fixed tw-inset-0 tw-bg-gray-600 tw-bg-opacity-75" />
            </Transition.Child>

            <div className="tw-fixed tw-inset-0 tw-flex tw-z-40">
              <Transition.Child
                as={Fragment}
                enter="tw-transition tw-ease-in-out tw-duration-300 tw-transform"
                enterFrom="tw--translate-x-full"
                enterTo="tw-translate-x-0"
                leave="tw-transition tw-ease-in-out tw-duration-300 tw-transform"
                leaveFrom="tw-translate-x-0"
                leaveTo="tw--translate-x-full"
              >
                <Dialog.Panel className="tw-relative tw-flex-1 tw-flex tw-flex-col tw-max-w-xs tw-w-full tw-pt-5 tw-pb-4 tw-bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="tw-ease-in-out tw-duration-300"
                    enterFrom="tw-opacity-0"
                    enterTo="tw-opacity-100"
                    leave="tw-ease-in-out tw-duration-300"
                    leaveFrom="tw-opacity-100"
                    leaveTo="tw-opacity-0"
                  >
                    <div className="tw-absolute tw-top-0 tw-right-0 tw--mr-12 tw-pt-2">
                      <button
                        type="button"
                        className="tw-ml-1 tw-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="tw-sr-only">Close sidebar</span>
                        <MdClose
                          className="tw-h-6 tw-w-6 tw-text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="tw-flex tw-items-center tw-px-4">
                    <Logo />
                  </div>
                  <div className="tw-mt-5 tw-flex-1 tw-h-0 tw-overflow-y-auto">
                    <nav className="tw-px-2 tw-space-y-1">
                      <MenuSidebar routes={routes} />
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="tw-flex-shrink-0 tw-w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="tw-hidden xl:tw-flex xl:tw-w-64 xl:tw-flex-col xl:tw-fixed xl:tw-inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="tw-flex-1 tw-flex tw-flex-col tw-min-h-0 tw-bg-gray-800">
            <div className="tw-flex tw-items-center tw-h-16 tw-flex-shrink-0 tw-px-5 tw-bg-gray-900">
              <Logo />
            </div>
            <div className="tw-flex-1 tw-flex tw-flex-col tw-overflow-y-auto">
              <nav className="tw-flex-1 tw-px-2 tw-py-4 tw-space-y-1">
                <MenuSidebar routes={routes} />
              </nav>
            </div>
          </div>
        </div>
        <div className="xl:tw-pl-64 tw-flex tw-flex-col">
          <Navbar setSidebarOpen={() => setSidebarOpen(true)}></Navbar>
          {props.children}
          <Routes>
            {routes.map((route, indexRoute) => {
              return (
                <Route
                  key={indexRoute}
                  path={route.href}
                  element={route.element}
                />
              );
            })}
            {routes.map((route) => {
              const Routers = route.children?.map(
                (routerChildren, indexRouterChildren) => (
                  <Route
                    key={indexRouterChildren}
                    path={routerChildren.href}
                    element={routerChildren.element}
                  />
                )
              );

              return Routers;
            })}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Layout;
