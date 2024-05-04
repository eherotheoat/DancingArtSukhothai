import { FunctionComponent } from "react";
import { OrderingAll } from "../Types";
import OrderingTableBody from "./OrderingTableBody";
import OrderingTableHead from "./OrderingTableHead";

interface OderingTableProps {
  list: OrderingAll;
}
const OrderingTable: FunctionComponent<OderingTableProps> = (props) => {
  return (
    <>
      <table className="tw-min-w-full tw-divide-y tw-divide-gray-300">
        <OrderingTableHead />
        <OrderingTableBody list={props.list} />
      </table>
    </>
  );
};
export default OrderingTable;
