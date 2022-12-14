import { CSSTransition } from "react-transition-group";

import CostFilter from "./costFilter";
import LocationFilter from "./locationFilter";
import EventTypeFilter from "./eventTypeFilter";
import MobileEventsFilterContainer from "./mobileEventsFilterContainer";

import "../../styles/responsiveFilterBloack.scss";

interface Props {
  DEFAULTCOSTMAX: number;
  resetHandler: () => void;
  isMobileFilterSectionCollapsed: boolean;
  SetMobileSectionFilterCollapsed: () => void;
}

function ResponsiveFilterBlock({
  resetHandler,
  DEFAULTCOSTMAX,
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
              <CostFilter mobile DEFAULTCOSTMAX={DEFAULTCOSTMAX} />
            </MobileEventsFilterContainer>

            <div className="content__buttons buttons">
              <button
                className="buttons__submit"
                onClick={() => {
                  SetMobileSectionFilterCollapsed();
                }}
              >
                تایید
              </button>

              <button
                className="buttons__reset"
                onClick={() => {
                  resetHandler();
                  SetMobileSectionFilterCollapsed();
                }}
              >
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
