// Static Image Call
//import flightImage from '../assets/images/1-200x200.jpg'
import Button from "./common/button/Button";
import { PropTypes } from "prop-types";
import IsTicketable from "./IsTicketable";
import ShwoFareTray from "./ShowFareTray";

Flight.propTypes = {
  flightData: PropTypes.object.isRequired,
};

const planeFlight = "/src/assets/images/plane-flight.png";
export default function Flight({ flightData }) {
  const routes = flightData.legs;
  const firstRoute = routes[0];
  const firstSegment = firstRoute.segmentDetails[0];
  const lastSegment =
    firstRoute.segmentDetails[firstRoute.segmentDetails.length - 1];
  const origin = firstSegment.origin;
  const destination = lastSegment.destination;
  const prices = flightData.priceBreakDownWithMarkup;
  const netTotalPrice = prices.totalFare;
  //const destination = lastSegment.destination;
  console.log("s");
  console.log(netTotalPrice.netTotalGrossFareAmount);

  console.log("e");
  console.log(flightData);

  return (
    <div className="mb-3" data-flgiht={flightData.id}>
      <div className="card col-12 mb-12">
        <div className="card-body">
          <div className="row">
            <div className="col-9 left-section">
            <div className="itinerary-header">
              <p>{origin.dateTime}</p>
              <p>
                {origin.airport}{" "}
                <span>
                  <img src={planeFlight} alt=">" />
                </span>{" "}
                {destination.airport}
              </p>
            </div>
              <div>
                <p>
                  Pellentesque vel nisl diam. Sed massa massa, placerat
                  fficitur. conubia nostra, per inceptos himenaeos. Duis at
                  aliquam lacus. Phasellus malesuada enim tempor gravida mollis.
                </p>
                <p>
                  Vestibulum sed nulla consequat, fringilla urna vel, lobortis
                  interdum turpis. Sed imperdiet vestibulum viverra. vitae
                  efficitur tortor ultrices.
                </p>
                <div>
                  <IsTicketable name="isTicketAble" isTrue={true} /> &nbsp;
                  <IsTicketable
                    name="Refundable"
                    isTrue={!flightData.nonRefundable}
                  />
                </div>
              </div>
            </div>
            <div className="col-3 right-section">
              <div className="right-section-ctn">
                <div className="net-gross-commission text-center mb-3">
                    <div> 5.00 % Discount</div>
                    <div> BDT {netTotalPrice.netTotalGrossFareAmount}</div>
                    <div className="text-danger"> <del>BDT {netTotalPrice.netTotalGrossFareAmount}</del></div>
                </div>
                <div className="boonNowFareTray text-center">
                      <Button name="Book Now"/> &nbsp;
                      <ShwoFareTray/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Flight.defaultProps = {
  flightData: {},
};
