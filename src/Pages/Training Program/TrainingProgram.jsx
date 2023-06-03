import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import styles from './TrainingProgram.module.css'

export default function TrainingProgram() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      id: 1,
      image: "./images/wall2.jpg",
      heading: "heading1",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1438190/pexels-photo-1438190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      //https://c4.wallpaperflare.com/wallpaper/420/477/268/trees-palm-trees-girls-yoga-wallpaper-preview.jpg
      heading: "heading 2",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/13035736/pexels-photo-13035736.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "heading 3",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/13739930/pexels-photo-13739930.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "heading 4",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/9006566/pexels-photo-9006566.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "heading 5",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/8060237/pexels-photo-8060237.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "heading 6",
    }
  ];

  const data = productData.map((item,index) => (
    <Card key={item.id} index={index} image={item.image} heading={item.heading} />
  ));

  return (
    <div id="Program">
      <h1 className={styles.cardsHeading}>Articles</h1>
      <Carousel  showDots={true} responsive={responsive}>{data}</Carousel>
    </div>
  );
}
