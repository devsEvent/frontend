interface Props {
  maxCost: number;
  DEFAULTCOSTMAX: number;
  MaxCostHandler: (e: any) => void;
  sepratedMaxCost: string | undefined;
}

function CostFilter({ DEFAULTCOSTMAX, MaxCostHandler, maxCost, sepratedMaxCost }: Props) {
  return (
    <div className="cost_container">
      <input
        type="range"
        min="0"
        max="1000000"
        defaultValue={DEFAULTCOSTMAX}
        onChange={MaxCostHandler}
        style={{
          background: `linear-gradient(90deg, #8D56C3 ${(maxCost * 100) / 1000000}%, #8D56C380 ${
            (maxCost * 100) / 1000000
          }%)`,
        }}
      />
      <div className="cost_count">{maxCost === 0 ? "رایگان" : `حداکثر تا ${sepratedMaxCost} تومان`}</div>
    </div>
  );
}

export default CostFilter;
