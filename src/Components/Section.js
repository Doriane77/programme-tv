import React from "react";
import data from "../data.json";

function Section (){
    console.log(data);
    return(
    <div className="section"> 

        {data.map(elem =>{
            return (
            <div className="box">
                <div className="col1">
                    <div className="time"><h3>{elem.time}</h3></div>
                    <div className="images"><img src={elem.image} alt={elem.title} /></div>
                </div>
                <div className="col2">
                    <div className="title"><h2>{elem.title}</h2></div>
                    <div className="type"><h4>{elem.type}</h4></div>
                    <div className="col3">
                        <div className="durer"><h3>{elem.duration}</h3></div>
                        <div className="direct">{elem.direct && <li>Direct</li>}</div>
                        <div className="inedit">{elem.isUnseen && <li>Inédit</li>}</div>
                    </div>
                </div>
                
            </div>
                
            );
            
        })}
    </div>
    );
};

export default Section;