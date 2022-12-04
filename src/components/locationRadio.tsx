import { useContext } from "react";
import { EventsFilterContext } from "../modules/FilterContext";

function LocationRadio({ title }: { title: string }) {
  const { locationFilter, locationHandler } = useContext(EventsFilterContext);

  return (
    <button className="btn radio">
      <input
        type="radio"
        id={title}
        value={title}
        name={"location_filter"}
        checked={locationFilter === title}
        onChange={() => {
          locationHandler(title);
        }}
      />
      <label htmlFor={title}>{title}</label>
    </button>
  );
}

export default LocationRadio;
