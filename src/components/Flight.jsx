// Static Image Call
//import flightImage from '../assets/images/1-200x200.jpg'
import Button from './common/button/Button';
import { PropTypes } from 'prop-types';
import IsTicketable from './IsTicketable'
Flight.propTypes = {
  flightNo: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  ticketAble: PropTypes.bool.isRequired
};

const defaultImgSrc = '/src/assets/images/1-200x200.jpg';

export default function Flight({flightNo=0,imgSrc=defaultImgSrc,ticketAble=false}) {

  return (
    <div className="container mb-3">
      <div className="card col-12 mb-12">
        <div className="card-header">
          <h3>Flight list {flightNo}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <img src={imgSrc} alt="Flight Image" />
            </div>
            <div className="col-9">
              <div>
                <p>Pellentesque vel nisl diam. Sed massa massa, placerat eget auctor at, pharetra at tortor. Curabitur commodo nulla et purus lacinia fermentum. In porta lectus at lacus eleifend efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec consectetur, justo sit amet egestas pharetra, elit eros tincidunt magna, a vestibulum nulla mi id mi. Duis at aliquam lacus. Phasellus malesuada enim tempor gravida mollis.</p>
                <p>Vestibulum sed nulla consequat, fringilla urna vel, convallis velit. Maecenas sem velit, iaculis ut arcu a, luctus ornare mauris. Nulla velit mauris, euismod eget lorem sed, lobortis interdum turpis. Morbi vel ex vel nisi commodo semper. Quisque placerat sit amet odio blandit porttitor. Nunc scelerisque molestie mi, cursus condimentum sapien pretium et. Sed imperdiet vestibulum viverra. Cras eu elit lacus. Cras iaculis velit nec arcu porta, vitae efficitur tortor ultrices.</p>
                <div>
                   <IsTicketable isTrue={ticketAble}/>
                </div>
                <div>
                  <Button name="Book Now"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
