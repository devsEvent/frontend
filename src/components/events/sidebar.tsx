import CostFilter from "./costFilter";
import LocationFilter from "./locationFilter";
import EventTypeFilter from "./eventTypeFilter";
import FilterCollpaseExpand from "./filterCollpaseExpand";

import "../../styles/eventsSidebar.scss";

interface Props {
  DEFAULTCOSTMAX: number;
  resetHandler: () => void;
}

function Sidebar({ DEFAULTCOSTMAX, resetHandler }: Props) {
  return (
    <aside className="events__sidebar sidebar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="filter_header">
          <p>فیلتر</p>
          <button
            className="filter_reset"
            type="reset"
            onClick={() => {
              resetHandler();
            }}
          >
            ریست
          </button>
        </div>

        <FilterCollpaseExpand title="قیمت">
          <CostFilter DEFAULTCOSTMAX={DEFAULTCOSTMAX} />
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
