export default function SetSeatClass({name}){
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="seatClass" id={name}/>
            <label className="form-check-label" htmlFor={name} >
                {name}
            </label>
        </div>
    )
}