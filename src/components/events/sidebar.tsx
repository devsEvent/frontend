import CostFilter from "./costFilter";
import LocationFilter from "./locationFilter";
import EventTypeFilter from "./eventTypeFilter";
import FilterCollpaseExpand from "./filterCollpaseExpand";

import "../../styles/eventsSidebar.scss";

interface Props {
  maxCost: number;
  DEFAULTCOSTMAX: number;
  MaxCostHandler: (e: any) => void;
  sepratedMaxCost: string | undefined;
  setMaxCost: (DEFAULTCOSTMAX: number) => void;
}

function Sidebar({ DEFAULTCOSTMAX, maxCost, setMaxCost, MaxCostHandler, sepratedMaxCost }: Props) {
  return (
    <aside className="events__sidebar sidebar">
      <form>
        <div className="filter_header">
          <h5>فیلتر</h5>
          <button
            className="filter_reset"
            type="reset"
            onClick={() => {
              setMaxCost(DEFAULTCOSTMAX);
            }}
          >
            ریست
          </button>
        </div>
        <FilterCollpaseExpand title="قیمت">
          <CostFilter
            maxCost={maxCost}
            MaxCostHandler={MaxCostHandler}
            DEFAULTCOSTMAX={DEFAULTCOSTMAX}
            sepratedMaxCost={sepratedMaxCost}
          />
        </FilterCollpaseExpand>
        <FilterCollpaseExpand title="مکان">
          <LocationFilter />
        </FilterCollpaseExpand>
        <FilterCollpaseExpand title="نوع مراسم">
          <EventTypeFilter />
          <a href="">دیدن همه</a>
        </FilterCollpaseExpand>
      </form>
    </aside>
  );
}

export default Sidebar;
