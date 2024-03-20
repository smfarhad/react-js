import SideBarWidget from "../FlightListPage/SideBarWidget";
import FlightList from "../FlightList";
import BootStrapTab from "../BootStrapTab";
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
        <div className="col-12">
          <BootStrapTab></BootStrapTab>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="sideBar">
            <SideBarWidget name={"Number of Stops"} list={stopsList} />
            <SideBarWidget name={"Cabin Type"} list={cabinList} />
            <SideBarWidget name={"Air Carrier"} list={airlineList.sort()} />
          </div>
        </div>
        <div className="col-9">
          <FlightList />
        </div>
      </div>
    </div>
  );
}
