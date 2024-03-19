import CheckboxList from "../FlightListPage/CheckboxList";
import FlightList from "../FlightList";
export default function Body() {
  const stopsList = ["Non Stop", "One Stop", "Multi Stop"];
  const cabinList = [
    "Economy",
    "Premium Economy",
    "Business",
    "Premium Business",
    "First Class",
    "Premium First",
  ];
  const airlineList = [
    "Emirates",
    "US Bangla",
    "Vistara",
    "Flydubai",
    "SriLankan",
    "Air India",
    "Biman Bangladesh",
  ];
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-3">
          <div className="sideBar">
            <CheckboxList name={"Number of Stops"} list={stopsList} />
            <CheckboxList name={"Cabin Type"} list={cabinList} />
            <CheckboxList name={"Air Carrier"} list={airlineList.sort()} />
          </div>
        </div>
        <div className="col-9">
          <FlightList />
        </div>
      </div>
    </div>
  );
}
