import React, { Component } from 'react'
import './App.css';


export default class NavBar extends Component {

    render() {
        return (
            <nav>
                <ul className="main-menu">
                    {this.props.nav.map((element, index) => (
                        (element.subelement) ? (
                                <li className="dropdown"><a href={element.lien}>{element.title}</a>
                                    <ul className="submenu">
                                        {
                                            element.subelement.map((el, i) =>
                                                <li><a href={el.lien}>{el.title}</a></li>
                                            )}

                                    </ul>
                                </li>
                        ) :

                            (<li> <a   href={element.lien}>{element.title}</a></li>)

                    )

                    )}

                </ul>
            </nav>
        )
    }
}
