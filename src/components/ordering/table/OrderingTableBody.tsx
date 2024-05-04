import { Fragment, FunctionComponent } from "react";
import { OrderingAll } from "../Types";
import TableRowNotFound from "../../TableRowNotFound";
import OrderingColumnSale from "./OrderingColumnSale";

interface OrderingTableBodyProps {
  list: OrderingAll;
}

const OrderingTableBody: FunctionComponent<OrderingTableBodyProps> = (
  props
) => {
  const listOrdering = props.list;

  // ---- Set element td and set map row sales ----
  const RowData = listOrdering.map((orderingItem, orderingIdx) => {
    let rowSalesFirst = <OrderingColumnSale saleItem={null} />;
    let rowSalesSecond;
    if (orderingItem.sales.length > 0) {
      rowSalesFirst = <OrderingColumnSale saleItem={orderingItem.sales[0]} />;

      if (orderingItem.sales.length > 1) {
        const sales = orderingItem.sales.slice(1);
        rowSalesSecond = (
          <>
            {sales.map((sale, saleIdx) => (
              <tr
                key={`${orderingIdx}-${saleIdx}`}
                className="tw-divide-x tw-divide-y tw-divide-gray-200"
              >
                <OrderingColumnSale saleItem={sale} />
              </tr>
            ))}
          </>
        );
      }
    }
    return (
      <Fragment key={orderingIdx}>
        <tr key={orderingIdx} className="tw-divide-x tw-divide-y tw-divide-gray-200">
          <td
            rowSpan={orderingItem.sales.length}
            className="tw-whitespace-nowrap tw-border-t tw-divide-y tw-p-4 tw-text-sm tw-font-medium tw-text-gray-900 tw-text-left"
          >
            <div className="tw-flex tw-flex-col">
              <div className="tw-font-bold tw-text-sm lg:tw-text-base tw-truncate tw-w-24 lg:tw-w-40 ">
                {orderingItem.productName}
              </div>
              <div className="tw-text-xs lg:tw-text-sm tw-text-green-600 tw-mt-2">
                {orderingItem.productCode}
              </div>

              <div className="tw-grid tw-grid-cols-1 tw-gap-1 lg:tw-grid-cols-2 tw-text-gray-500 tw-font-light tw-mt-2">
                <div className="tw-text-xs lg:tw-text-sm">Rank {orderingItem.rank}</div>
                <div className="tw-text-xs lg:tw-text-sm">
                  Retail {orderingItem.retail}
                </div>
              </div>
            </div>
          </td>
          {/* td sale */}
          {rowSalesFirst}
        </tr>
        {/* td sale */}
        {rowSalesSecond}
      </Fragment>
    );
  });

  return (
    <tbody className="bg-white">
      {listOrdering.length > 0 ? (
        RowData
      ) : (
        <TableRowNotFound totalColumn={14}></TableRowNotFound>
      )}
    </tbody>
  );
};

export default OrderingTableBody;
