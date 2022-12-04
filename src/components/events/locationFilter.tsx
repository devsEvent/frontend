import LocationRadio from "../../components/locationRadio";

function LocationFilter() {
  const locations = [
    "همه جای ایران",
    "تهران",
    "اصفهان",
    "یزد",
    "کاشان",
    "اردبیل",
    "کرج",
    "زاهدان",
    "ساری",
    "ابادان",
    "مریوان",
    "سقز",
    "سنندج",
    "شهرکرد",
  ];

  return (
    <div className="location_container">
      {locations.map((item, index) => (
        <LocationRadio title={item} key={index} />
      ))}
    </div>
  );
}

export default LocationFilter;
