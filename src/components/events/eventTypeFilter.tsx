import EventTypeCheckbox from "../eventTypeCheckbox";

function EventTypeFilter() {
  const eventTypes = ["جشنواره", "رویداد", "بوت کمپ آموزشی", "دورهمی"];
  return (
    <div className="type_container">
      {eventTypes.map((item, index) => (
        <EventTypeCheckbox title={item} key={index} />
      ))}
    </div>
  );
}

export default EventTypeFilter;
