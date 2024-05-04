import { FunctionComponent } from "react";
import OrderingColumnWeather from "./OrderingColumnWeather";

interface OrderingTableHeadProps {}

const OrderingTableHead: FunctionComponent<OrderingTableHeadProps> = () => {
  return (
    <thead className="tw-bg-gray-50">
      <tr className="tw-divide-x tw-divide-gray-200">
        <th
          rowSpan={3}
          className="tw-px-4 tw-py-1 tw-text-base tw-text-center tw-font-semibold tw-text-gray-900 tw-w-80 lg:tw-min-w-max"
        >
          Item
        </th>
        <th
          colSpan={2}
          className=" tw-px-4 tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        ></th>
        <th
          colSpan={8}
          className="tw-px-4 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-900 tw-text-center"
        >
          Result (Sales qty., write-off)
        </th>
        <th
          rowSpan={3}
          className=" tw-px-4 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-900 tw-w-6 lg:tw-w-24 tw-text-center"
        >
          Suggest
        </th>
        <th
          colSpan={2}
          className=" tw-px-4 tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-40 lg:tw-w-36 tw-text-center"
        >
          Ord
        </th>
      </tr>
      <tr className="tw-divide-x tw-divide-gray-200 tw-text-center">
        <th
          colSpan={2}
          className="tw-border tw-py-4 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          Weather
        </th>
        <th
          colSpan={2}
          className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          <OrderingColumnWeather />
        </th>
        <th
          colSpan={2}
          className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          <OrderingColumnWeather />
        </th>
        <th
          colSpan={2}
          className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          <OrderingColumnWeather />
        </th>
        <th
          colSpan={2}
          className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          <OrderingColumnWeather />
        </th>
        <th
          colSpan={2}
          className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900"
        >
          <OrderingColumnWeather />
        </th>
      </tr>
      <tr className="tw-divide-x tw-divide-gray-200 tw-text-center">
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          Index
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          Date
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          H
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          30/03
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          H
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          30/03
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          H
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          30/03
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          H
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-12">
          30/03
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-24">
          H
        </th>
        <th className="tw-border tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-900 tw-w-24">
          30/03
        </th>
      </tr>
    </thead>
  );
};

export default OrderingTableHead;
