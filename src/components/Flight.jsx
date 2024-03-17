// Static Image Call
//import flightImage from '../assets/images/1-200x200.jpg'
import Button from './common/button/Button';
import { PropTypes } from 'prop-types';
import IsTicketable from './IsTicketable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
Flight.propTypes = {
  flightData: PropTypes.object.isRequired
};

const planeFlight = '/src/assets/images/plane-flight.png';
export default function Flight({flightData}){
  const routes = flightData.legs; 
  const firstRoute = routes[0];
  const firstSegment = firstRoute.segmentDetails[0];
  const lastSegment = firstRoute.segmentDetails[firstRoute.segmentDetails.length-1];
  const origin = firstSegment.origin; 
  const destination = lastSegment.destination; 
  const prices = flightData.priceBreakDownWithMarkup;
  const netTotalPrice = prices.totalFare;
  //const destination = lastSegment.destination;
  console.log('s');
  console.log(netTotalPrice.netTotalGrossFareAmount);
  
  console.log('e'); 
  console.log(flightData); 
  return (
    <div className='mb-3' data-flgiht={flightData.id}>
      <div className="card col-12 mb-12">
        <div className="card-header">
          <div className="row">
            <div className="col-12">
               <p>{origin.dateTime}</p>
               <p>{origin.airport} <span><img src={planeFlight} alt=">" /></span> {destination.airport}</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-9 left-section">
              <div>
                <p>Pellentesque vel nisl diam. Sed massa massa, placerat fficitur.  conubia nostra, per inceptos himenaeos.    Duis at aliquam lacus. Phasellus malesuada enim tempor gravida mollis.</p>
                <p>Vestibulum sed nulla consequat, fringilla urna vel,  lobortis interdum turpis.  Sed imperdiet vestibulum viverra.   vitae efficitur tortor ultrices.</p>
                <div>
                  <IsTicketable name='isTicketAble' isTrue={true}/> &nbsp;  
                  <IsTicketable name='Refundable' isTrue={!flightData.nonRefundable}/>
                </div>
              </div>
            </div>
            <div className="col-3 right-section">   
              <div className='text-center right-section-ctn'>
                  <div> BDT {netTotalPrice.netTotalFareAmount}</div>
                  <div> BDT {netTotalPrice.netTotalGrossFareAmount}</div>
                  <Button name="Book Now"/> &nbsp;
                  <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Flight.defaultProps = {
  flightData:{}
};
