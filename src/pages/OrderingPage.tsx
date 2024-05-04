import Content from "../components/layouts/Content";
import OrderingType from "../components/ordering/OrderingType";
import OrderingTable from "../components/ordering/table/OrderigTable";
import OrderingSearch from "../components/ordering/table/OrderingSearch";
import { OrderingAll } from "../components/ordering/Types";
import { GroupProduct, PeriodAll } from "../constants/odering";

const OrderingPage = () => {
  const mockData: OrderingAll = [
    {
      productName: "Item 001",
      productCode: "6200015",
      rank: "A7/10",
      retail: 12,
      gp: "32%",
      sales: [
        {
          period: "period1",
          qty1: 10,
          qty2: 10,
          qty3: 10,
          qty4: 10,
          suggest: 10,
          ord: 10,
        },
        {
          period: "period2",
          qty1: 20,
          qty2: 20,
          qty3: 20,
          qty4: 20,
          suggest: 20,
          ord: 20,
        },
        {
          period: "period3",
          qty1: 30,
          qty2: 30,
          qty3: 30,
          qty4: 30,
          suggest: 30,
          ord: 30,
        },
      ],
    },
    {
      productName: "Item 002",
      productCode: "6200015",
      rank: "A7/10",
      retail: 12,
      gp: "32%",
      sales: [
        {
          period: "period1",
          qty1: 10,
          qty2: 10,
          qty3: 10,
          qty4: 10,
          suggest: 10,
          ord: 10,
        },
      ],
    },
    {
      productName: "Item 003",
      productCode: "6200015",
      rank: "A7/10",
      retail: 12,
      gp: "32%",
      sales: [],
    },
  ];

  return (
    <Content title="สั่งสินค้า">
      <div className="tw-grid tw-grid-cols-2 tw-gap-4">
        <OrderingType types={GroupProduct} />
        <OrderingType types={PeriodAll} />
      </div>

      <div className="tw-mt-6">
        <OrderingSearch />
      </div>
      <div className="tw-mt-6 tw-flex tw-flex-col">
        <div className="tw--my-2 tw--mx-4 tw-overflow-x-auto sm:tw--mx-6 lg:tw--mx-8">
          <div className="tw-inline-block tw-min-w-full tw-py-2 tw-align-middle md:tw-px-6 lg:tw-px-8">
            <div className="tw-overflow-hidden tw-shadow tw-ring-1 tw-ring-black tw-ring-opacity-5 md:tw-rounded-lg">
              {/* Table */}
              <OrderingTable list={mockData} />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default OrderingPage;
