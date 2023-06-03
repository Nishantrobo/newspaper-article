import React from "react";
import styles from "./PricingSection.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { VscCheck } from "react-icons/vsc";

const showAlert = () => {
  alert("Thankyou for choosing us");
};

function PricingSection() {
  return (
    <>
      <div id="pricing" className={styles.wholePage}>
        <div className={styles.container}>
          <div className={styles.dailyPlans} id="daily">
            <div className={styles.header}>
              <h3>Day Pass</h3>

              <h1>$20</h1>

              <h4>/Pass</h4>
            </div>
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  1 Day Pass
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  Free Article Access 
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  24 Hour Accces
                </li>
              </ul>
            </div>
            <button className={styles.btn1} onClick={showAlert}>
              Get Started
            </button>
          </div>

          <div className={styles.monthlyPlans} id="monthly">
            <div className={styles.header}>
              <h3>Week to Week </h3>
              <span>
                <h1>$30</h1>
              </span>
              <h3>/week</h3>
            </div>
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  $30 Joining Fee
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  No Contract
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  Free Article access
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  Can download articles offline
                </li>
                <br></br>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  can share article anywhere
                </li>
                <br></br>
              </ul>
            </div>
            <div className={styles.btnDiv}>
              <button className={styles.btn} onClick={showAlert}>
                Get Started
              </button>
            </div>
          </div>

          <div className={styles.membership} id="heading">
            <div>
              <h4>
                <u>Membership</u>
              </h4>
            </div>

            <div className={styles.memberHeading}>
              <h2 className={styles.membershiph2}>From Punch Pass to weekly or monthly</h2>
              <p>
                On this webiste ,we offer a wide range of membership with options to
                suit every budget. Everything from One Day Pass, Punch Pass to
                weekly or mnonthly prepaid memberships. What's more, we
                won't tie you in a long term Conatract, giving you a greater
                flexibilty.
              </p>
            </div>

            <div className={styles.header2}>
              <h2>Each plan included</h2>
              <ul className={styles.priceSectionList}>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  The best article on Global Brands{" "}
                </li>
                <br></br>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  You can download any articles .
                </li>
                <br></br>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  Two safe payment method
                </li>
                <br></br>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  Best article in the price of subscription{" "}
                </li>
                <br></br>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  No long-term contract,period
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection;