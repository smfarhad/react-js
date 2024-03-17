import flightJson from "../data/FlightData.json";
import Flight from "./Flight";
export default function FlightList() {
  // return JSON.stringify(flightJson, null, 2);
  const flightListData = flightJson.result;
  const flightList = flightListData.map((flight, index) => (
    <div key={index}>
      <Flight flightData={flight} />
    </div>
  ));

  return <>{flightList}</>;
}
