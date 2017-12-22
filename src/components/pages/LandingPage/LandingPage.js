import React, {Component} from 'react';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [
        {
          id: 155,
          title: 'The Dark Knight',
          poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
          overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
          release_date: '2008-07-16',
          vote_average: 8.3,
        },
        {
          id: 49026,
          title: 'The Dark Knight Rises',
          poster_path: '/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg',
          backdrop_path: '/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg',
          overview: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
          release_date: '2012-07-16',
          vote_average: 7.6,
        },
        {
          id: 157336,
          title: 'Interstellar',
          poster_path: '/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
          backdrop_path: '/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
          overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
          release_date: '2014-11-05',
          vote_average: 7.9,
        },
        {
          id: 346364,
          vote_average: 7.2,
          title: "It",
          poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
          backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
          overview: "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
          release_date: "2017-09-05"
        },
        {
          id: 181808,
          vote_average: 7.5,
          title: "Star Wars: The Last Jedi",
          poster_path: "/xGWVjewoXnJhvxKW619cMzppJDQ.jpg",
          backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
          overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
          release_date: "2017-12-13"
        },
        {
          id: 354912,
          vote_average: 7.5,
          title: "Coco",
          poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
          backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
          overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          release_date: "2017-10-27"
        },
        {
          id: 141052,
          vote_average: 6.6,
          title: "Justice League",
          poster_path: "/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",
          backdrop_path: "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
          overview: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry, and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
          release_date: "2017-11-15"
        },
        {
          id: 211672,
          vote_average: 6.4,
          title: "Minions",
          poster_path: "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
          backdrop_path: "/qLmdjn2fv0FV2Mh4NBzMArdA0Uu.jpg",
          overview: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
          release_date: "2015-06-17"
        },
      ],
      displayPoster: '/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
      displayMovie: '',
      randomizing: false
    }

    this.randomizePoster = this.randomizePoster.bind(this);
    this.animateRandom = this.animateRandom.bind(this);
  }

  randomizePoster() {
    let randomMovie = Math.floor(Math.random() * this.state.movies.length);
    let counter = 0
    let animation = setInterval(() => {
      if(counter === this.state.movies.length - 1) {
        counter = 0;
      } else {
        ++counter
      }
      this.animateRandom(counter)
    }, 100);

    setTimeout(() => {
      clearInterval(animation);
      this.setState({
        displayMovie: randomMovie,
        displayPoster: this.state.movies[randomMovie].poster_path
      })

    }, 2500)    
    
  }
  animateRandom(counter) {
      this.setState({
        displayPoster: this.state.movies[counter].poster_path
      })
    }
  
  render() {
    return (
      <section className="landing">

        {/* Landing page header */}
          <header className="header">
  
            <div className="header__text-box">
              <h1 className="heading-primary heading-primary--white heading-primary--main">Movie night</h1>
            </div>
  
            <a href="#landing-about" className="btn btn--large btn--secondary btn--animated">Learn More</a>
  
          </header>
  
          {/* Landing Page About Section */}
          <section id="landing-about" className="landing-about">
            <div className="u-text-center u-margin-bottom-med">
              <h2 className="heading-secondary">How it works</h2>
            </div>
            
            <div className="about">
              <div className="about__description">
                <p className="paragraph">
                  Own a lot of movies? 
                </p>
                <p className="paragraph">
                  Having trouble deciding what movie to watch? 
                </p>
                <p className="paragraph">
                  Or do you want an efficient way to see your collection without having an entire wall of movie cases?
                </p> 
              </div>
              <div className="about__composite">
                <div className="movie-tile u-margin-bottom-small">
                  <img className="movie-tile__poster" src={`https://image.tmdb.org/t/p/w500${this.state.displayPoster}`} />
                </div>

                <div className="btn btn--small btn--secondary" onClick={this.randomizePoster}>See it in action</div>
              </div>
            </div> 
          </section>
      </section>
    )
  }
}