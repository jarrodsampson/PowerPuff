import React, { Component } from 'react';


class Games extends Component {

    render () {
        return (
            <div className="col l4 m12 s12">
                <p>{this.props.title}</p>
                <p>
                    <a href={this.props.link} target="_blank">
                        <img className="maxWidth" src={"images/" + this.props.image} alt={this.props.title} />
                    </a>
                </p>
                <p>{this.props.description}</p>
            </div>
        );
    }

}

export default Games;