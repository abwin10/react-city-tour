import React, { Component } from 'react';
import Tour from '../Tour/Tour'
import './tours.scss'
import {tourData} from '../../tourData'

export default class Tours extends Component {

    state = {
        tours: tourData
    }

    removeTour = id => {
        const { tours } = this.state
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }

    render() {

        const { tours } = this.state;

        return(
            <section className='tours'>
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>))
                }
            </section>
        )
    }
}