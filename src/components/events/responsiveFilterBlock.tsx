import { CSSTransition } from "react-transition-group";

import CostFilter from "./costFilter";
import LocationFilter from "./locationFilter";
import EventTypeFilter from "./eventTypeFilter";
import MobileEventsFilterContainer from "./mobileEventsFilterContainer";

import "../../styles/responsiveFilterBloack.scss";

const DEFAULTCOSTMAX = 750000;

interface Props {
  maxCost: number;
  MaxCostHandler: (e: any) => void;
  sepratedMaxCost: string | undefined;
  isMobileFilterSectionCollapsed: boolean;
  SetMobileSectionFilterCollapsed: () => void;
}

function ResponsiveFilterBlock({
  maxCost,
  MaxCostHandler,
  sepratedMaxCost,
  isMobileFilterSectionCollapsed,
  SetMobileSectionFilterCollapsed,
}: Props) {
  return (
    <div className="events__mobileFilterBlock mobileFilterBlock">
      {!isMobileFilterSectionCollapsed && (
        <button className="mobileFilterBlock__closer" onClick={SetMobileSectionFilterCollapsed} />
      )}
      <CSSTransition in={!isMobileFilterSectionCollapsed} timeout={1000} classNames="mobileFilterSection" unmountOnExit>
        <div className="mobileFilterBlock__content content">
          <span className="content__closerBadge" onClick={SetMobileSectionFilterCollapsed} />
          <p className="content__header">فیلتر</p>
          <div className="filter_item" style={{ height: true ? "5rem" : "fit-content" }}>
            <MobileEventsFilterContainer title="مکان مراسم">
              <LocationFilter />
            </MobileEventsFilterContainer>
            <MobileEventsFilterContainer title="نوع مراسم">
              <EventTypeFilter />
            </MobileEventsFilterContainer>
            <MobileEventsFilterContainer title="محدوده قیمت">
              <CostFilter
                mobile
                maxCost={maxCost}
                MaxCostHandler={MaxCostHandler}
                DEFAULTCOSTMAX={DEFAULTCOSTMAX}
                sepratedMaxCost={sepratedMaxCost}
              />
            </MobileEventsFilterContainer>

            <div className="content__buttons buttons">
              <button className="buttons__submit">تایید</button>
              <button className="buttons__reset" onClick={SetMobileSectionFilterCollapsed}>
                لغو فیلتر
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ResponsiveFilterBlock;
