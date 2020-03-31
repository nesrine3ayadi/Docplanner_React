import React, { Component } from 'react'
import './App.css';


const Sec1 = props => {

  
        return (
            <section id="section1" class="container">

                       <div>
                            <img src={props.description[0].src} alt={props.alt} />
                            <h1>{props.description[1].h1}</h1>
                            <div className="paragrahes">
                                    <p>{props.description[2].p}</p>
                                    <p>{props.description[2].p}</p>
                                     
                            </div>
                        </div>


                    
            </section>
        )
    
}
export default Sec1;