import EventTypeCheckbox from "../eventTypeCheckbox";

function EventTypeFilter() {
  return (
    <div className="type_container">
      <button className="btn checkbox">
        <input
          type="checkbox"
          id={"جشنواره"}
          value={"جشنواره"}
          name={"event_type_filter"}
          className="checkBox"
          defaultChecked
        />
        <label htmlFor={"جشنواره"}>جشنواره</label>
      </button>
      <EventTypeCheckbox title="رویداد" />
      <EventTypeCheckbox title="بوت کمپ آموزشی" />
      <EventTypeCheckbox title="دورهمی" />
   
    </div>
  );
}

export default EventTypeFilter;
