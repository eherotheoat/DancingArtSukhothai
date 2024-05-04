import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiOutlineSelector } from "react-icons/hi";
import { Fragment, FunctionComponent, useState } from "react";

interface OrderingTypeProps {
  types: { id: number; name: string }[];
}

const OrderingType: FunctionComponent<OrderingTypeProps> = (props) => {
  const typeAll = props.types;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const [selected, setSelected] = useState(typeAll[0]);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="tw-relative">
              <Listbox.Button className="tw-bg-white tw-relative tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-pl-3 tw-pr-10 tw-py-2 tw-text-left tw-cursor-default focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 focus:tw-border-blue-500 sm:tw-text-sm">
                <span className="tw-block tw-truncate">{selected.name}</span>
                <span className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 tw-pointer-events-none">
                  <HiOutlineSelector
                    className="tw-h-5 tw-w-5 tw-text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="tw-transition tw-ease-in tw-duration-100"
                leaveFrom="tw-opacity-100"
                leaveTo="tw-opacity-0"
              >
                <Listbox.Options className="tw-p-1 tw-absolute tw-z-10 tw-mt-1 tw-w-full tw-bg-white tw-shadow-lg tw-max-h-60 tw-rounded-md tw-text-base tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-overflow-auto focus:tw-outline-none sm:tw-text-sm">
                  {typeAll.map((type) => (
                    <Listbox.Option
                      key={type.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "tw-text-white tw-bg-blue-600"
                            : "tw-text-gray-900",
                          "tw-cursor-default tw-select-none tw-relative tw-py-2 tw-pl-3 tw-pr-9"
                        )
                      }
                      value={type}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "tw-font-semibold" : "tw-font-normal",
                              "tw-block truncate"
                            )}
                          >
                            {type.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "tw-text-white" : "tw-text-blue-600",
                                "tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4"
                              )}
                            >
                              <HiCheck
                                className="tw-h-5 tw-w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default OrderingType;
