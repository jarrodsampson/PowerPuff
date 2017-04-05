import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import FanArt from './FanArt.js';

class FanArtList extends Component {

    render () {
        var fanArtList = this.props.data.map(function(fanArt) {
            //console.log(fanArt);
            return (
                    <FanArt
                        image={fanArt.image}
                        description={fanArt.description}
                        key={fanArt.image}
                    />
            );
        }, this);
        return (
            <div className="fanArtList">
                <OwlCarousel slideSpeed={300} items={4} autoPlay={true} singleItem={false}>
                    {fanArtList}
                </OwlCarousel>
            </div>
        );
    }

}

export default FanArtList;