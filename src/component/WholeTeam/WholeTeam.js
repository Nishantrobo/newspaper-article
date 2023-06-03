import React from 'react';
import Trainer from './Trainer';
import styles from './WholeTeam.module.css'
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'a1',
    description: "b1",
    image : "https://images.pexels.com/photos/4057766/pexels-photo-4057766.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "a2",
    description: 'b2',
    image: 'https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: "a3",
    description: 'b3',
    image: 'https://images.pexels.com/photos/16972034/pexels-photo-16972034/free-photo-of-old-tennis-court.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: "a4",
    description: 'b4',
    image: 'https://images.pexels.com/photos/4160060/pexels-photo-4160060.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'a5',
    description: 'b5',
    image: 'https://images.pexels.com/photos/9598028/pexels-photo-9598028.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'a6',
    description: 'b6',
    image: 'https://images.pexels.com/photos/15886904/pexels-photo-15886904/free-photo-of-stone-historic-building-with-columns.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'a7',
    description: 'b7',
    image: 'https://images.pexels.com/photos/15866577/pexels-photo-15866577/free-photo-of-retro-car-near-tree-on-river-bank.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: "a8",
    description: 'b8',
    image: 'https://images.pexels.com/photos/15868942/pexels-photo-15868942/free-photo-of-old-neglected-truck.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'a9',
    description: 'b9',
    image: 'https://images.pexels.com/photos/15825701/pexels-photo-15825701/free-photo-of-retro-doors-to-old-historic-building.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'a10',
    description: 'b10',
    image: 'https://images.pexels.com/photos/15850547/pexels-photo-15850547/free-photo-of-interior-design-of-traditional-old-church.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'a11',
    description: 'b11',
    image: 'https://images.pexels.com/photos/15850550/pexels-photo-15850550/free-photo-of-old-vintage-book-in-dark.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'a12',
    description: 'b12',
    image: 'https://images.pexels.com/photos/15826639/pexels-photo-15826639/free-photo-of-narrow-street-through-old-city.jpeg?auto=compress&cs=tinysrgb&w=400',
  }
];

const WholeTeam = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.WholeTeamMain}>
    <div className={styles.cardist}>
      {data.map((card, index) => (
        <Trainer key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
    <button className={styles.cardbtn} onClick={()=>navigate("/#Trainer")} >Go Back Home</button>
    </div>
  );
};

export default WholeTeam;