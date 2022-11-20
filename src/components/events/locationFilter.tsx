import LocationRadio from "../../components/locationRadio";

function LocationFilter() {
  return (
    <div className="location_container">
      <button className="btn radio">
        <input type="radio" id={"تهران"} value={"تهران"} name={"location_filter"} defaultChecked />
        <label htmlFor={"تهران"}>تهران</label>
      </button>
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
      <LocationRadio title="اصفهان" />
      <LocationRadio title="یزد" />
    </div>
  );
}

export default LocationFilter;
