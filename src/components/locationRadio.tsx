function LocationRadio({ title }: { title: string }) {
  return (
    <button className="btn radio">
      <input type="radio" id={title} value={title} name={"location_filter"} />
      <label htmlFor={title}>{title}</label>
    </button>
  );
}

export default LocationRadio;
