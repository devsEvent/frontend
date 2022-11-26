interface Props {
  mobile?: boolean;
  maxCost: number;
  DEFAULTCOSTMAX: number;
  MaxCostHandler: (e: any) => void;
  sepratedMaxCost: string | undefined;
}

function CostFilter({ DEFAULTCOSTMAX, MaxCostHandler, maxCost, sepratedMaxCost, mobile }: Props) {
  return (
    <div className="cost_container">
      <input
        type="range"
        min="0"
        max="1000000"
        defaultValue={DEFAULTCOSTMAX}
        onChange={MaxCostHandler}
        style={{
          background: `linear-gradient(90deg, ${mobile ? "#da9e03" : "#8d56c3"} ${(maxCost * 100) / 1000000}%, ${
            mobile ? "#da9e0380" : "#8D56C380"
          } ${(maxCost * 100) / 1000000}%)`,
        }}
      />
      <div className="cost_count">{maxCost === 0 ? "رایگان" : `حداکثر تا ${sepratedMaxCost} تومان`}</div>
    </div>
  );
}

export default CostFilter;
