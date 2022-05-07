import React from "react";
//import image1 from '../assets/image1.jpg'
//import image2 from '../assets/image2.jpg'
//import image3 from '../assets/image3.jpg'
import image1 from "../assests/image1.jpg";
import image2 from "../assests/image2.jpg";
import image3 from "../assests/image3.jpg";
import image4 from "../assests/image4.jpg";
import image5 from "../assests/image5.jpg";
import image6 from "../assests/image6.jpg";

const Destinations = () => {
  const goTosearch = () => {
    window.location.href = "/search";
  };
  return (
    <section className="destinations">
      <h3>Now available in 10+ countries!</h3>
      <br></br>
      <br></br>
      <div className="grid">
        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="destination-1"
          />
          <h3>Fly to Jaipur</h3>
          <p className="desc">
            This incredible sight, one of the seven natural wonders of the
            world, is in the U.S. state of Arizona. It's one of those beautiful
            places for which photos or video just don't do it justice-its sheer
            size and scope is hard to comprehend. With geology formed over the
            past two billion years, yes billion, the 277 mile-long canyon itself
            is believed to have been started around five to six million years
            ago.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            }
            alt="destination-1"
          />
          <h3>Fly to UAE</h3>
          <p className="desc">
            The tourist industry of the United Arab Emirates is the most
            successful among the Gulf nations, and have long enjoyed status as
            the leading tourist nation of the GCC.The country is also the major
            tourist force in the Arab world Home to the opulent Burj Khalifa,
            Dubai is leading the list of the best places to visit in UAE with
            family. This city showcases a multitude of moods with a sandy coast,
            world-class cuisine, shopping malls, and amusement parks. The
            Marina, Dubai Mall, Wild Wadi Water Park are some places to visit in
            Dubai.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            }
            alt="destination-2"
          />
          <h3>Europe Trips</h3>
          <p className="desc">
            It is the third most populated continent in the world. Bordered by
            the Atlantic Ocean on the west, Arctic Ocean on the north, Ural
            mountains in the east, and the Mediterranean Sea to the South, a
            visit to the European continent is visually magnificent and
            historically significant.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1586500038052-b831efc02314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            alt="destination-3"
          />
          <h3>Maldives Special</h3>
          <p className="desc">
            Maldives is a popular destination amongst tourists, especially from
            India. Tourism in Maldives offers variety of sightseeing and
            entertainment options. ... Discover Maldives tourism places and stay
            in good hotels close to the main Maldives tourist spots.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1606094092594-93c09d76b721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            alt="destination-1"
          />
          <h3>Fly to Masai Mara</h3>
          <p className="desc">
            Kenya's Masai Mara is an incredible bio-diverse area and a popular
            safari destination. It's an opportunity to see the "big five"
            animals (lion, leopard, rhinoceros, elephant, and Cape buffalo) all
            during one trip or, if you're lucky, during one afternoon
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={image5}
            alt="destination-1"
          />
          <h3>Fly to Rome</h3>
          <p className="desc">
            The Eternal City is more like a giant, living museum. Visitors are
            immersed in and surrounded by thousands of years of history. It's a
            relatively compact city, and a three-day itinerary gets you to the
            minimum number of must-see places. These must-see sites for any
            visitor include the Colosseum and adjacent Roman Forum; the
            Pantheon; and Vatican City, a separate country in the middle of
            central Rome.
          </p>
        </div>
        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1576175798179-9e7079284ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1958&q=80"
            }
            alt="destination-1"
          />
          <h3>Fly to Arizona</h3>
          <p className="desc">
            This incredible sight, one of the seven natural wonders of the
            world, is in the U.S. state of Arizona. It's one of those beautiful
            places for which photos or video just don't do it justice-its sheer
            size and scope is hard to comprehend. With geology formed over the
            past two billion years, yes billion, the 277 mile-long canyon itself
            is believed to have been started around five to six million years
            ago.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1585232375940-efe465f8547f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            }
            alt="destination-1"
          />
          <h3>Climb the Eiffel Tower</h3>
          <p className="desc">
            Paris has a place on pretty much every traveler's bucket list. It is
            known as the most romantic city in the world, and is home to some
            world famous sights that are constantly shown in travel magazines,
            movies, and other works of art. Paris, the capital of France, has a
            population of over two million people and is one of Europe's
            most-visited cities.There are two major international airports in
            Paris, Orly Airport and Charles de Gaulle Airport, the latter of
            which is the second busiest airport in all of Europe. There are also
            plenty of buses and trains passing through Paris, making it a
            convenient stop on a European budget backpacking trip.
          </p>
        </div>

        <div>
          <img
            className="countryImg"
            onClick={goTosearch}
            src={
              "https://images.unsplash.com/photo-1610280866089-1d0df72edead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            }
            alt="destination-1"
          />
          <h3>Fly to Berlin </h3>
          <p className="desc">
            If you're only ever able to make a single trip to Germany, you'll
            want to spend at least a few days in Berlin. The country's capital
            is undoubtedly one of the most dynamic and vibrant cities in Europe,
            as popular for its superb dining experiences as it is for its
            shopping and entertainment. Berlin is also considered one of
            Europe's top cultural destinations, home to numerous excellent art
            galleries and museums just waiting to be explored. Some of the best
            of which are located on Museum Island, a must-see destination that
            alone can take days to explore. And after these attractions have
            closed, fun things to do at night include enjoying concerts by the
            renowned Berlin Philharmonic Orchestra, perhaps taking in a
            performance by Berlin Opera, or simply wandering the
            always-interesting avenues and boulevards in the Mitte District,
            where you'll find famous landmarks such as the Brandenburg Gate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
