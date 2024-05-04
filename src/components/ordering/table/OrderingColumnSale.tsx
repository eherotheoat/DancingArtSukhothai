import { FunctionComponent } from "react";
import { OrderingSale } from "../Types";

interface OrderingColumnSaleProps {
  saleItem: OrderingSale | null;
}

const OrderingColumnSale: FunctionComponent<OrderingColumnSaleProps> = (
  props
) => {
  // state
  const sale = props.saleItem
    ? props.saleItem
    : ({
        period: "-",
        qty1: 0,
        qty2: 0,
        qty3: 0,
        qty4: 0,
        ord: 0,
      } as OrderingSale);

  // style
  const styleColumnLeft =
    "tw-whitespace-nowrap tw-p-4 tw-text-sm tw-text-gray-500 tw-text-left tw-border tw-capitalize";
  const styleColumnRigth =
    "tw-whitespace-nowrap tw-p-4 tw-text-sm tw-text-gray-500 tw-text-right";
  return (
    <>
      <td colSpan={2} className={styleColumnLeft}>
        {sale.period}
      </td>
      <td colSpan={2} className={styleColumnRigth}>
        {sale.qty1}
      </td>
      <td colSpan={2} className={styleColumnRigth}>
        {sale.qty2}
      </td>
      <td colSpan={2} className={styleColumnRigth}>
        {sale.qty3}
      </td>
      <td colSpan={2} className={styleColumnRigth}>
        {sale.qty4}
      </td>
      <td className={styleColumnRigth}>{sale.suggest}</td>
      <td colSpan={2} className={styleColumnRigth}>
        <input
          type="number"
          name="first-name"
          className="tw-max-w-lg tw-block tw-w-full focus:tw-ring-blue-500 focus:tw-border-blue-500 
          sm:tw-max-w-xs sm:tw-text-sm tw-border-gray-300 tw-rounded-sm tw-text-right tw-shadow-sm tw-h-6"
          defaultValue={sale.ord}
        />
      </td>
    </>
  );
};

export default OrderingColumnSale;
