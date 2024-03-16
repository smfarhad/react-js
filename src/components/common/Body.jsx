import Flight from "../Flight"
import CheckboxList from "../FlightListPage/CheckboxList"

export default function Body() {
    const stopsList=['Non Stop','One Stop','Multi Stop'];
    const cabinList=['Economy','Premium Economy','Business','Premium Business','First Class','Premium First'];
    const airlineList=['Emirates','US Bangla','Vistara','Flydubai','SriLankan','Air India','Biman Bangladesh'];
    return(
        <div className="container mb-3">
            <div className="row">
            <div className="col-3">
                <div className="sideBar">
                    <CheckboxList name={'Number of Stops'} list={stopsList}/>
                    <CheckboxList name={'Cabin Type'} list={cabinList}/>
                    <CheckboxList name={'Air Carrier'} list={airlineList.sort()}/>
                </div>
            </div>
            <div className="col-9">
                <Flight flightNo="1" imgSrc='/src/assets/images/1-200x200.jpg' ticketAble={true} />
                <Flight flightNo="2" imgSrc='/src/assets/images/2-200x200.jpg' ticketAble={true } />
                <Flight flightNo="3" imgSrc='/src/assets/images/3-200x200.jpg' ticketAble={false} />
                <Flight flightNo="4" imgSrc='/src/assets/images/4-200x200.jpg' ticketAble={false} />
                <Flight flightNo="5" imgSrc='/src/assets/images/5-200x200.jpg' ticketAble={true} />
                <Flight/>
            </div>
            </div>
        </div>
    )
}