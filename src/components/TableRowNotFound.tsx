import { FunctionComponent } from "react";

interface TableRowNotFoundProps {
  totalColumn: number;
}

const TableRowNotFound: FunctionComponent<TableRowNotFoundProps> = (props) => {
  const totalColumn = props.totalColumn;
  return (
    <tr>
      <td
        colSpan={totalColumn}
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"
      >
        Data not found
      </td>
    </tr>
  );
};

export default TableRowNotFound;
