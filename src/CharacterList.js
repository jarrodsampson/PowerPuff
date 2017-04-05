import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import Character from './Character.js';

class CharacterList extends Component {

    render () {
        var characterList = this.props.data.map(function(character) {
            //console.log(fanArt);
            return (
                <Character
                    image={character.image}
                    description={character.description}
                    key={character.image}
                />
            );
        }, this);
        return (
            <div className="characterList">
                <OwlCarousel slideSpeed={300} items={4} autoPlay={true} singleItem={false}>
                    {characterList}
                </OwlCarousel>
            </div>
        );
    }

}

export default CharacterList;