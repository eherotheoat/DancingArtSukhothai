import { Fragment, MouseEventHandler } from "react";
import { HiOutlineBell, HiOutlineMenu } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "../../helper";

interface NavbarProps {
  setSidebarOpen: MouseEventHandler;
}

const Navbar = (props: NavbarProps) => {
  const userNavigation = [
    { name: "Woraphon netnim", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "/auth/login/signOut" },
  ];
  return (
    <>
      <div className="tw-sticky tw-top-0 tw-z-10 tw-flex-shrink-0 tw-flex tw-h-16 tw-bg-white tw-shadow">
        <button
          type="button"
          className="tw-px-4 tw-border-r tw-border-gray-200 tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-blue-500 xl:tw-hidden"
          onClick={props.setSidebarOpen}
        >
          <HiOutlineMenu className="tw-h-6 tw-w-6" aria-hidden="true" />
        </button>
        <div className="tw-flex-1 tw-px-4 tw-flex tw-justify-between">
          <div className="tw-flex-1 tw-flex"></div>
          <div className="tw-ml-4 tw-flex tw-items-center xl:tw-ml-6">
            <button
              type="button"
              className="tw-bg-white tw-p-1 tw-rounded-full tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500"
            >
              <span className="tw-sr-only">View notifications</span>
              <HiOutlineBell className="tw-h-6 tw-w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="tw-ml-3 tw-relative">
              <div>
                <Menu.Button className="tw-max-w-xs tw-bg-white tw-flex tw-items-center tw-text-sm tw-rounded-full focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500">
                  <span className="tw-sr-only">Open user menu</span>
                  <img
                    className="tw-h-8 tw-w-8 tw-rounded-full"
                    // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" 
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="tw-transition tw-ease-out tw-duration-100"
                enterFrom="tw-transform tw-opacity-0 tw-scale-95"
                enterTo="tw-transform tw-opacity-100 tw-scale-100"
                leave="tw-transition tw-ease-in tw-duration-75"
                leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
                leaveTo="tw-transform tw-opacity-0 tw-scale-95"
              >
                <Menu.Items className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-48 tw-rounded-md tw-shadow-lg tw-py-1 tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }: any) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "tw-bg-gray-100" : "",
                            "tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
                          )}
                          style={{ textDecoration: "none" }}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
