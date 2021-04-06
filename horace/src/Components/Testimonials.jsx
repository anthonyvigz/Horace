import React, { useEffect, useState } from "react";
import "../Styling/testimonials.scss"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const [next, setNext] = useState(0)
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const nextTestimonial = (event) => {

    if (next < 2) {
      setNext(next + 1)
    } else {
      setNext(0)
    }
  }

  return <div className="testimonials">
      {next === 0 &&
            <div data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out" className="textBio">
                <h3>
                April, 2021
                </h3>
                <p>
                My father frequently stated his wish that Horace Stoneham 
                be inducted into the Baseball Hall of Fame. Dad regarded Mr. 
                Stoneham very highly and felt he was a true baseball pioneer 
                who was fair minded, kind, and articulate about his passion for 
                the game and all of its players. 
                </p>
                <p>
                As an owner, Mr. Stoneham had the courage of signing my father and 
                other African American and Latino players during a time in our history 
                when it was not popular to do so. Dad felt Mr. Stoneham was forward 
                thinking, ahead of his time and most assuredly deserving of Induction.
                </p>
                <p>
                It concerned and frustrated Dad that Horace Stoneham hadn’t been 
                inducted into the Baseball Hall of Fame with the other great club 
                owners during my father’s lifetime. It was an event he had long hoped 
                to witness.

                </p>
                <h2>
                <span>- From Monte Irvin's daughter, </span> Patricia Irvin Gordon
                </h2>
             </div>
        }
        {next === 1 && 
        <div data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out" className="textBio">
            <h3>
            September 10, 2014
            </h3>
            <h4 id="idelson">
            Mr. Jeff Idelson<br/>
            President<br/>
            Baseball Hall of Fame<br/>
            25 Main Street<br/>
            Cooperstown, New York 13326<br/>
            </h4>
            <p>
              Dear Jeff:
              </p>
              <p>
              I want to thank you for another wonderful weekend in Cooperstown this past July. It
              is always an honor to be with you and the other members of the Hall.
              I understand from Larry Baer that there is an opportunity for you to select Mr.
              Horace Stoneham for the upcoming Hall of Fame Golden Era Ballot. I urge you to
              do so for a kind man who opened many doors for the players coming from Latin
              America, the Caribbean and Japan. 
            </p>
            <p>
            For me and many of my teammates, including Ruben Gomez, Ray Noble, Hank
            Thompson and many others, Mr. Stoneham provided support during a time when
            players of color were not always welcome to play along side white players. 
            </p>
            <p>
            Mr. Stoneham was genuine and sincere in the relationships he formed with us. He
            would always personally travel to Puerto Rico to sign the contracts of his Puerto
            Rican players, which did not go unnoticed and was greatly appreciated. I will be
            forever grateful to Mr. Stoneham for providing me with the chance to play in the
            major leagues. He also helped me purchase my very first house in my hometown of
            Carolina, Puerto Rico. 
            </p>
            <p>
            Mr. Stoneham was genuine and sincere in the relationships he formed with us. He
            would always personally travel to Puerto Rico to sign the contracts of his Puerto
            Rican players, which did not go unnoticed and was greatly appreciated. I will be
            forever grateful to Mr. Stoneham for providing me with the chance to play in the
            major leagues. He also helped me purchase my very first house in my hometown of
            Carolina, Puerto Rico. 
            </p>
            <p>
            Without Mr. Stoneham’s acceptance of me as a Puerto Rican man, recognition of
            my talent and providing me with the opportunity to play for the San Francisco
            Giants, I would not be in the Hall of Fame today. Mr. Stoneham should also be in
            the Hall of Fame. He gave me the opportunity to contribute to the best game in the
            world. 
            </p>
            <h2>
            <span>- Thank you for your time and consideration, </span> Orlando Cepeda
            </h2>
         </div>
        }
        {next === 2 && 
         <div data-aos="fade-in"
         data-aos-duration="2000"
         data-aos-easing="ease-in-out" className="textBio">
             <h3>
             September 8, 2014
             </h3>
             <h4 id="idelson">
             Mr. Jeff Idelson<br/>
             President<br/>
             Baseball Hall of Fame<br/>
             25 Main Street<br/>
             Cooperstown, New York 13326<br/>
             </h4>
             <p>
               Dear Jeff:
               </p>
               <p>
               I hope this note finds you well. I’m writing to ask that you consider Mr. Horace
              Stoneham for the upcoming Hall of Fame Golden Era Ballot. He was a smart man
              who was kind to the media and very loyal to his players.
</p>
             <p>
             In 1958, Mr. Stoneham gave me and my teammate and friend, Orlando Cepeda, the
opportunity to play for the San Francisco Giants. He also made it possible for me to
share the outfield with my brothers Mateo (Matty) and Jesus in the early 1960s – still
one of my fondest memories. As some of Major League Baseball’s first Latin
American players to integrate the game, Mr. Stoneham made it fairly easy for us to
adapt to the American culture by having the foresight to hire several scouts who
spoke Spanish and who could easily communicate with us.
             </p>
             <p>
             Please put Mr. Stoneham on the ballot. He was a good owner to all of the players
who came to our ball club. He was at the forefront of integrating baseball after
Jackie Robinson, and a pioneer in promoting baseball in my native homeland of the
Dominican Republic.
             </p>
             <h2>
             <span>- Thank you for your time and consideration, </span> Felipe Alou
             </h2>
          </div>
        }
        <i onClick={() => nextTestimonial()} class="fas fa-arrow-right"></i>
        </div>

}
