import React, { Component } from 'react';

class Character extends Component {

    render () {
        return (
            <div>
                <a href={"images/characters/" + this.props.image} data-title={this.props.description} data-lightbox="characters">
                    <img src={"images/characters/" + this.props.image} alt="Characters" />
                    <div className="titleIt">
                        <p>{this.props.description}</p>
                    </div>
                </a>
            </div>
        );
    }

}

export default Character;