import React, { Component} from 'react';
import './tour.scss'

export default class Tour extends Component {
    
    state = {
        showTourInfo: false
    }

    togleTourInfo = () => {
        this.setState({
            showTourInfo: !this.state.showTourInfo
        })
    }
    
    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { removeTour} = this.props;
        return(
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} alt=""/>
                    <span className='btn-close' onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        <span onClick={this.togleTourInfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>       
                    </h5>
                    { this.state.showTourInfo ? <p>{info}</p> : null }
                </div>
            </article>
        )
    }
}