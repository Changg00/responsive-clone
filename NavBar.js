import React, {Component} from 'react'

class NavBar extends Component{
    constructor(){
        super()

        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState( (prevState) => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return(
            <header>
                <div className="nav-container">
                    <img className="logo" alt="logo" src = "https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
                    <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`} id="mainNav">
                    <ul className="nav text-uppercase ml-auto">
                        <ul className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                        </ul>
                        <ul className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                        </ul>
                        <ul className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </ul>
                        <ul className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                        </ul>
                        <ul className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </ul>
                    </ul>
                    </nav>
                </div>
        </header>
        )
    }
}
export default NavBar