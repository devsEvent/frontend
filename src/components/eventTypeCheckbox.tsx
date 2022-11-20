function EventTypeCheckbox({ title }: { title: string }) {
  return (
    <button className="btn checkbox">
      <input type="checkbox" id={title} value={title} name={"event_type_filter"} className="checkBox" />
      <label htmlFor={title}>{title}</label>
    </button>
  );
}

export default EventTypeCheckbox;
