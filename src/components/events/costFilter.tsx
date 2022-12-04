import { useContext } from "react";

import { NumSeparate } from "../../modules/numberSeparate";
import { EventsFilterContext } from "../../modules/FilterContext";

interface Props {
  mobile?: boolean;
  DEFAULTCOSTMAX: number;
}

function CostFilter({ DEFAULTCOSTMAX, mobile }: Props) {
  const { MaxCostHandler, maxCostFilterHandler, maxCost } = useContext(EventsFilterContext);

  const endPressHandler = (e: any) => {
    maxCostFilterHandler(e.target.value);
  };
  return (
    <div className="cost_container">
      <input
        type="range"
        min="0"
        max="1000000"
        onChange={MaxCostHandler}
        onMouseUp={endPressHandler}
        onTouchEnd={endPressHandler}
        defaultValue={DEFAULTCOSTMAX}
        style={{
          background: `linear-gradient(90deg, ${mobile ? "#da9e03" : "#8d56c3"} ${(maxCost * 100) / 1000000}%, ${
            mobile ? "#da9e0380" : "#8D56C380"
          } ${(maxCost * 100) / 1000000}%)`,
        }}
      />
      <div className="cost_count">{maxCost === 0 ? "رایگان" : `حداکثر تا ${NumSeparate(maxCost)} تومان`}</div>
    </div>
  );
}

export default CostFilter;
