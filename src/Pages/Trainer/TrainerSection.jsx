import React, { useState } from "react";
import CoachCard from "../../component/CoachCard/CoachCard";
import styles from "./TrainerSection.module.css";
import { useNavigate } from "react-router-dom";

export default function TrainerSection() {
const navigate = useNavigate()


function handleClick(){
  navigate("/Team")
}

  const productData = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/8627841/pexels-photo-8627841.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "article7",
      profession: "news",
    },
    {
      id: 2,
      image:
      "https://images.pexels.com/photos/8627842/pexels-photo-8627842.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "article 8",
      profession: "news2",
    },
    {
      id: 3,
      image:
      "https://images.pexels.com/photos/4052192/pexels-photo-4052192.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "article 9",
      profession: "newd3",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/4065404/pexels-photo-4065404.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "article 10",
      profession: "news 4",
    },
  ];

  return (

    <div id="Trainer" className={styles.main}>
      <h1 className={styles.cardsHeading}>Meet our Team</h1>
      <div className={styles.mainTrainer}>
        {productData.map((info) => (
          <CoachCard
          key={info.id}
            image={info.image}
            name={info.name}
            profession={info.profession}
          />
        ))}
      </div>
      <div className={styles.btnDiv}>
      <button onClick={handleClick} className={styles.wholeTeamBtn}>See Whole Team</button> 

      </div>

    </div>
  );
}
