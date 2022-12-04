import { useContext } from "react";

import { EventsFilterContext } from "../modules/FilterContext";

function EventTypeCheckbox({ title }: { title: string }) {
  const { typeHandler } = useContext(EventsFilterContext);

  return (
    <button className="btn checkbox">
      <input
        type="checkbox"
        id={title}
        value={title}
        name={"event_type_filter"}
        className="checkBox"
        onChange={typeHandler}
        defaultChecked
      />
      <label htmlFor={title}>{title}</label>
    </button>
  );
}

export default EventTypeCheckbox;
