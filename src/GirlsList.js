import React, { Component } from 'react';

import Girl from './Girls.js';

class GirlsList extends Component {

    showGirlDetail (i) {
        this.props.onShowGirlDetail(i);
        //console.log("follow", i);
    }

    render () {
        var girlsList = this.props.data.map(function(girl) {
            //console.log(girl);
            return (
                <Girl
                    name={girl.name}
                    role={girl.role}
                    image={girl.image}
                    description={girl.description}
                    video={girl.video}
                    key={girl.name}
                    onClick={this.showGirlDetail.bind(this, girl)}
                />
            );
        }, this);
        return (
            <div className="girlsList">
                {girlsList}
            </div>
        );
    }

}

export default GirlsList;