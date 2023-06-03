import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div id="about" className={Styles.Main}>
      <div className={Styles.AboutUs}>
        <div className={Styles.Video1}>
          <iframe
            width="360"
            height="515"
            src="https://www.youtube.com/embed/4n1U8sHvIyA"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className={Styles.ContainerHeading}>
          <h1 className={Styles.aboutHeading}>About Us</h1>
          <p>
            Through our 7-day programme we offer you some useful life questions and curated articles 
            to think about. We also offer you some answers on these questions
            but we encourage you to learn more about it yourself. You can read
            it all at once but we advise you to read and think about your life
            for the next 7 days. It may become the most valuable week of your
            life! It can be very valuable in your life. So take some time and
            invest one week in your life and future!
          </p>
          <button className={Styles.button}>Learn More</button>
        </div>
      </div>
   
        <div className={Styles.AboutUs}>
          <div>
            <h1 className={Styles.aboutHeading}>Why Choose Us ?</h1>
            <ul className={Styles.listContainer}>
              <li>
                <strong className={Styles.strong}>
                  Consultation with  subject expert
                </strong>
                <p>
                 on subscribing this article you can get hand curated articles on many topics whether it may be on latest news or be it any books.
                 you can read any article within 200 words and also you can fact check any article by our unique system .
                </p>
              </li>
              <li>
                <strong className={Styles.strong}> other features</strong>
                <p>
                on subscribing this article you can get hand curated articles on many topics whether it may be on latest news or be it any books.
                 you can read any article within 200 words and also you can fact check any article by our unique system .
                </p>
              </li>
            </ul>
          </div>

          <div className={Styles.Video2}>
            <iframe
              width="360"
              height="515"
              src="https://youtube.com/embed/Ju0WT32Czcg"
              title="YouTube video player"
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    
    
  );
}