import { FunctionComponent } from "react";
import { FiFilter } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { ProductType } from "../../../constants/odering";
import OrderingType from "../OrderingType";
interface OrderingSeacrhProps {}

const OrderingSearch: FunctionComponent<OrderingSeacrhProps> = () => {
  return (
    <>
      <div className="tw-flex tw-flex-row">
        <div className="tw-max-w-lg tw-flex tw-rounded-md tw-shadow-sm">
          <span className="tw-inline-flex tw-items-center tw-px-3 tw-rounded-l-md tw-border tw-border-r-0 tw-border-gray-300 sm:tw-text-sm">
            <HiOutlineSearch />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="search"
            className="tw-flex-1 tw-block tw-w-full focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-min-w-0 tw-rounded-none tw-rounded-r-md sm:tw-text-sm tw-border-gray-300"
            placeholder="Search product name"
          />
        </div>
        <div className="tw-ml-2 tw-w-60">
          <OrderingType types={ProductType} />
        </div>
      </div>
    </>
  );
};

export default OrderingSearch;
