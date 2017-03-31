import React, { Component } from 'react';

class FanArt extends Component {

    render () {
        return (
                <div>
                    <a href={"images/fanart/" + this.props.image} data-title={this.props.description} data-lightbox="fanart">
                        <img src={"images/fanart/" + this.props.image} alt="Fan Art" />
                        <div className="titleIt">
                            <p>{this.props.description}</p>
                        </div>
                    </a>
                </div>
        );
    }

}

export default FanArt;