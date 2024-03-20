import { useState } from "react"


export default function SetPaxQty({name}){
    const [paxQty,setPaxQty] = useState(0);
    const deCrement = ()=>{
        if (paxQty>0) {
            setPaxQty(paxQty-1)
        }
    } 
    const inCrement = ()=>{
            setPaxQty(paxQty+1)
    }
    return(
        <div className="row">
                                <div className="col-6">{name}</div> 
                                <div className="col-6">
                                    <div className="input-group input-group-sm">
                                        <button className="col-4 btn btn-outline-secondary" onClick={deCrement} type="button">-</button>
                                        <input value={paxQty} type="text" className="col-4 form-control" placeholder={paxQty} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                        <button className="col-4 btn btn-outline-secondary" onClick={inCrement} type="button">+</button>
                                    </div>
                                </div>             
                                </div>
    )
}