import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './css/animate.css';
import './css/lightbox.min.css';
import './css/main.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';

import GirlsList from './GirlsList.js';
import GameList from './GameList.js';
import CommunityList from './CommunityList.js';
import FanArtList from './FanArtList.js';
import CharacterList from './CharacterList.js';

import $ from 'jquery';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            communityArray: [],
            girls: [],
            games: [],
            characters: [],
            fanart: [],
            childVisible: false,
            details: {}
        };

        this.showGirlDetail = this.showGirlDetail.bind(this);
    }

    loadCommentsFromServer () {

        $.when(
            $.get("//www.reddit.com/r/powerpuffgirls/new.json?limit=10"),
            $.get("/data/girls.json"),
            $.get("/data/games.json"),
            $.get("/data/characters.json"),
            $.get("/data/fanart.json")

        ).then(function(community, girls, games, characters, fanart) {
            this.setState({
                communityArray: community[0].data.children,
                girls: girls[0],
                games: games[0],
                characters: characters[0],
                fanart: fanart[0]
            });
            console.log(community[0].data.children);
            console.log(girls[0]);
            console.log(games[0]);
            console.log(characters[0]);
            console.log(fanart[0]);
        }.bind(this));

    }

    componentDidMount () {
        this.loadCommentsFromServer();
    }

    showGirlDetail (i) {
        console.log("Back", i);
        this.setState({ childVisible: true, details: i});

        //Materialize.toast('Learn About ' + i.name + "!", 4000);
        $('html,body').animate({scrollTop: $("#girlDetailSnap").offset().top}, 1000);
    }

  render() {
    return (
      <div className="App">
        <div className="mainBanner"></div>

          <div className="container">


              <div className="row scrollspy" id="story">

                  <div className="wow fadeInLeft col s12 center-align">
                      <h1>The Story</h1>

                      <p>The Powerpuff Girls is an American animated television series created by animator Craig McCracken for Cartoon Network. The show centers on Blossom, Bubbles, and Buttercup, three girls with superpowers, as well as their father, the brainy scientist Professor Utonium, who all live in the fictional city of Townsville, USA. The girls are frequently called upon by the town's childlike and naive mayor to help fight nearby criminals using their powers.</p>
                  </div>
              </div>
          </div>


          <div className="videoMain">

              <video id="self1" className="html5-video player" width="100%" loop autoPlay muted>
                  <source src="media/mainVid.mp4" width="100%" type="video/mp4">
                  </source>
              </video>

          </div>

          <div className="townBg">
              <div className="container">

                  <div className="row wow bounceInRight scrollspy" id="girls">
                      <div className="col s12 center-align">
                          <h1>The Girls</h1>

                          <div className="col l12 m12 s12 theGirlsBox">
                            <GirlsList data={this.state.girls} onShowGirlDetail={this.showGirlDetail} />
                          </div>

                          <div className="col s12 spacer-small" id="girlDetailSnap"></div>
                      </div>
                  </div>
              </div>

              { this.state.childVisible ?

                  <ReactCSSTransitionGroup transitionEnterTimeout={3000} transitionLeaveTimeout={3000} transitionName="example">
                      <div className="col s12 center-align girlDetailBox fade">
                          <div className="videoMain2">

                              <video id="self2" src={"media/" + this.state.details.video} className="html5-video player" width="100%" loop autoPlay muted>
                              </video>

                              <div className="aboveGirl">
                                  <div className="center-align text">
                                      <h2>{this.state.details.name}</h2>
                                      <p><em>{this.state.details.role}</em></p>
                                      <p>{this.state.details.description}</p>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </ReactCSSTransitionGroup>

                  : null }
          </div>

          <div className="center-align scrollspy charactersBg" id="characters">
              <div className="col s12 spacer-small"></div>
              <h1>The Characters</h1>
              <CharacterList data={this.state.characters} />
              <div className="col s12 spacer-small"></div>
          </div>
          



          <div className="parallax-container">
              <div className="parallax"><img src="images/para1.jpg" alt="Banner" /></div>
          </div>

          <div className="fusionBg">
              <div className="container">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="history">
                  <div className="col s12 spacer-small"></div>
                      <h1>History</h1>
                      <p>The Powerpuff Girls series debut on November 18, 1998, was the highest rated premiere in Cartoon Network's history at the time. During its run, the series consistently scored the highest rating for an original series each week for the network across a wide range of demographics—from young children to adults.</p>

                      <p>The show's last original run episode was on March 25, 2005; in all, six seasons were made. Cartoon Network had offered to give McCracken and Savino a seventh season of the series, but they believed the series had run its course.</p>
                      <p>
                          <a id="history" className="waves-effect waves-light btn modal-trigger pink lighten-2 " href="#moreHistory">Learn More</a>

                      </p>
                      <p>
                        <a id="game" className="waves-effect waves-light btn modal-trigger pink lighten-2" href="#gameModal">Games</a>
                      </p>
                  </div>

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

          <div className="parallax-container">
              <div className="parallax"><img src="images/artbay.png" alt="Artist" /></div>
          </div>

          <div className="communityBanner">
              <div className="container">
                  <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
                      <div className="col s12 spacer-small"></div>
                      <h1>The Community</h1>

                      <CommunityList data={this.state.communityArray} />

                  </div>

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>


          <div className="center-align fanArtBg" id="art">
              <div className="col s12 spacer-small"></div>
              <h1>Fan Art</h1>
              <FanArtList data={this.state.fanart} />

          </div>

          <div id="moreHistory" className="modal">
              <div className="modal-content">
                  <h4 className="center-align">More History</h4>
                  <p className="indent">
                      In 1991, Craig McCracken, then a student in the character animation program of CalArts, created 'The Whoopass Girls' as a drawing of three girls on a small sheet of orange construction paper. The following year he included them as the main characters of his short film Whoopass Stew! The Whoopass Girls in: A Sticky Situation.This short, along with a few of McCracken's No Neck Joe shorts, was selected to be shown at Spike and Mike's Sick and Twisted Festival of Animation in 1994. While working on Dexter's Laboratory, McCracken submitted his work to Hanna-Barbera's innovative What a Cartoon! Show shorts program, which was eventually produced for Cartoon Network as "The Powerpuff Girls in: Meat Fuzzy Lumpkins" as part of World Premiere Toons."Meat Fuzzy Lumpkins" first aired in 1995, and was followed by a second short, "Crime 101," a year later.
                  </p>
                  <p className="indent">
                      Announcer Ernie Anderson, the narrator of the pilot episodes, died of cancer in 1997 before the show premiered, and he was
                      Powerpuff girls movie The movie\'s DVD cover.
                      replaced by Tom Kenny for the remainder of the series.The show's animation director was McCracken's former classmate Genndy Tartakovsky (Dexter's Laboratory, Samurai Jack), who also directed many episodes himself. All of the original episodes (except the WAC shorts with the first one being animated at Animal House in Japan and the Second being animated at Fil Cartoons in the Philippines) were hand-drawn and produced at Rough Draft Studios in South Korea. The Powerpuff Girls series debut on November 18, 1998 was the highest rated premiere in Cartoon Network's history at the time.
                  </p>

                  <p className="indent">
                      The series consistently scored the highest rating each week for the network across a wide range of demographics—from young children to adults. In October 2000, Cartoon Network credited the Powerpuff Girls for its Friday night prime time ratings win among cable networks. By the end of 2000, merchandising based on The Powerpuff Girls encompassed a whole variety of products, including T-shirts, toys, video games, lunchboxes, and dishware. Concerning the Powerpuff Girls success, Craig McCracken has stated, "I thought it would get on Cartoon Network and college kids would watch it and there would be a few random T-shirts out there in the rave scene or in record shops. But I had no idea that it would take off to this extent."In August 2008, McCracken revealed on his DeviantArt account, as had been announced in that year's Comic Con, that he was working with Cartoon Network on a new half-hour Powerpuff Girls special to celebrate the series' 10-year anniversary. The special, titled "The Powerpuff Girls Rule!!!," aired on the Pan-Euro Cartoon Network on November 29, 2008, on the Powerpuff Girls Birthday Marathon, and in the United States on January 19, 2009, as part of its 10th anniversary marathon. Unlike previous episodes in the series, the anniversary special was animated using Adobe Flash at Cartoon Network Studios.
                  </p>
              </div>
              <div className="modal-footer">
                  <a className=" modal-action modal-close waves-effect waves-green btn-flat">Got It!</a>
              </div>
          </div>



          <div id="gameModal" className="modal bottom-sheet">
              <div className="modal-content center-align row">
                  <h4>Games Released</h4>
                  <div className="col l12 m12 s12">
                      <GameList data={this.state.games} />
                  </div>
              </div>
              <div className="modal-footer">
                  <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Done</a>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
