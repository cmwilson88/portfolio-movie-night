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
        {
          id: 321612,
          vote_average: 6.8,
          title: "Beauty and the Beast",
          poster_path: "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
          backdrop_path: "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
          overview: "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          release_date: "2017-03-16"
        },
        {
          id: 353486,
          vote_average: 5.5,
          title: "Jumanji: Welcome to the Jungle",
          poster_path: "/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
          backdrop_path: "/rz3TAyd5kmiJmozp3GUbYeB5Kep.jpg",
          overview: "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
          release_date: "2017-12-08"
        },
        {
          id: 8844,
          vote_average: 6.9,
          title: "Jumanji",
          poster_path: "/8wBKXZNod4frLZjAKSDuAcQ2dEU.jpg",
          backdrop_path: "/52lVqTDhIeNTjT7EiJuovXgw6iE.jpg",
          overview: "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
          release_date: "1995-12-15"
        },
        {
          id: 343668,
          vote_average: 7.1,
          title: "Kingsman: The Golden Circle",
          poster_path: "/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
          backdrop_path: "/uExPmkOHJySrbJyJDJylHDqaT58.jpg",
          overview: "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
          release_date: "2017-09-20"
        },
        {
          id: 281338,
          vote_average: 6.7,
          title: "War for the Planet of the Apes",
          poster_path: "/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
          backdrop_path: "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
          overview: "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
          release_date: "2017-07-11"
        },
        {
          id: 355547,
          vote_average: 4.5,
          title: "The Star",
          poster_path: "/zms2RpkqjAtCsbjndTG9gAGWvnx.jpg",
          backdrop_path: "/iJ5dkwIHQnq8dfmwSLh7dpETNhi.jpg",
          overview: "A small but brave donkey and his animal friends become the unsung heroes of the greatest story ever told, the first Christmas.",
          release_date: "2017-11-15"
        },
        {
          id: 245891,
          vote_average: 7,
          title: "John Wick",
          poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
          backdrop_path: "/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
          overview: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
          release_date: "2014-10-22"
        },
        {
          id: 347882,
          vote_average: 5.4,
          title: "Sleight",
          poster_path: "/wridRvGxDqGldhzAIh3IcZhHT5F.jpg",
          backdrop_path: "/2SEgJ0mHJ7TSdVDbkGU061tR33K.jpg",
          overview: "A young street magician is left to take care of his little sister after his mother's passing and turns to drug dealing in the Los Angeles party scene to keep a roof over their heads. When he gets into trouble with his supplier, his sister is kidnapped and he is forced to rely on both his sleight of hand and brilliant mind to save her.",
          release_date: "2017-04-28"
        },
        {
          id: 45054,
          vote_average: 5.8,
          title: "There Be Dragons",
          poster_path: "/dKgPtWZkHkTeYQRvLTsO0RBYaQZ.jpg",
          backdrop_path: "/z9Li6tsmVlu9Lntg6aToHqr2Utn.jpg",
          overview: "Arising out of the horror of the Spanish Civil War, a candidate for canonization is investigated by a journalist who discovers his own estranged father had a deep, dark and devastating connection to the saint's life.While researching the life of Josemaria Escriva, the controversial founder of Opus Dei, the young journalist Robert uncovers hidden stories of his estranged father Manolo, and is taken on a journey through the dark, terrible secrets of his family’s past.",
          release_date: "2011-03-25"
        },
        {
          id: 374720,
          vote_average: 7.5,
          title: "Dunkirk",
          poster_path: "/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg",
          backdrop_path: "/4yjJNAgXBmzxpS6sogj4ftwd270.jpg",
          overview: "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
          release_date: "2017-07-19"
        },
        {
          id: 284053,
          vote_average: 7.5,
          title: "Thor: Ragnarok",
          poster_path: "/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
          backdrop_path: "/5wNUJs23rT5rTBacNyf5h83AynM.jpg",
          overview: "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
          release_date: "2017-10-25"
        },
        {
          id: 371638,
          vote_average: 7.3,
          title: "The Disaster Artist",
          poster_path: "/uCH6FOFsDW6pfvbbmIIswuvuNtM.jpg",
          backdrop_path: "/bAI7aPHQcvSZXvt7L11kMJdS0Gm.jpg",
          overview: "An aspiring actor in Hollywood meets an enigmatic stranger by the name of Tommy Wiseau, the meeting leads the actor down a path nobody could have predicted; creating the worst movie ever made.",
          release_date: "2017-12-01"
        },
        {
          id: 177572,
          vote_average: 7.7,
          title: "Big Hero 6",
          poster_path: "/9gLu47Zw5ertuFTZaxXOvNfy78T.jpg",
          backdrop_path: "/2BXd0t9JdVqCp9sKf6kzMkr7QjB.jpg",
          overview: "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
          release_date: "2014-10-24"
        },
        {
          id: 419680,
          vote_average: 5.7,
          title: "Daddy's Home 2",
          poster_path: "/rF2IoKL0IFmumEXQFUuB8LajTYP.jpg",
          backdrop_path: "/lMDyuHzBhx3zNAv48vYzmgcJCCD.jpg",
          overview: "Brad and Dusty must deal with their intrusive fathers during the holidays.",
          release_date: "2017-11-09"
        },
        {
          id: 460793,
          vote_average: 6.7,
          title: "Olaf's Frozen Adventure",
          poster_path: "/47pLZ1gr63WaciDfHCpmoiXJlVr.jpg",
          backdrop_path: "/woCxv9kua5uqtRNaiWUBDzrgZnH.jpg",
          overview: "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
          release_date: "2017-10-27"
        }
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
    let index = Math.floor(Math.random() * this.state.movies.length);
    let animation = setInterval(() => {
      if(index === this.state.movies.length - 1) {
        index = 0;
      } else {
        ++index
      }
      this.animateRandom(index)
    }, 10);

    setTimeout(() => {
      clearInterval(animation);
      this.setState({
        displayMovie: randomMovie,
        displayPoster: this.state.movies[randomMovie].poster_path
      })

    }, 2000)    
    
  }
  animateRandom(index) {
      console.log('ran')
      this.setState({
        displayPoster: this.state.movies[index].poster_path
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