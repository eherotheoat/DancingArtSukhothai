import { FunctionComponent } from "react";
import { WiDayCloudy } from "react-icons/wi";

interface OrderingColumnWeatherProps {}

const OrderingColumnWeather: FunctionComponent<
  OrderingColumnWeatherProps
> = () => {
  return (
    <div className="tw-flex tw-flex-row tw-justify-center">
      <WiDayCloudy className="tw-w-4 tw-h-4 tw-text-orange-600" />
      <span className="tw-pl-2">38/32</span>
    </div>
  );
};

export default OrderingColumnWeather;
