import React from "react";
import styles from "./getStarted.module.css";
import clsx from "clsx";
import { PaintBrushHousehold } from "phosphor-react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStarted = ({ className }: any) => {
  return (
    <>
      <div className={clsx(styles.mainDiv, className)}>
        <h1 className={styles.heading}>Get started on your journey to</h1>
        <h1 className={styles.the}>
          the <span className={styles.inr}>metaverse.</span>
        </h1>
        <p className={styles.join}>
          Join HyprClub's exclusive creator network today.
        </p>
        <div className={styles.NameEmail}>
          <form className={styles.Form}>
            <label>NAME</label>
            <input type="text" className={styles.Input} />
          </form>
          <form className={styles.Form}>
            <label>EMAIL ADDRESS</label>
            <input type="text" className={styles.Input} />
          </form>
        </div>
        <div className={styles.afterName}>
          <form className={styles.Form2}>
            <label>INSTAGRAM USERNAME</label>
            <input type="text" className={styles.Input} />
          </form>
          <div className={styles.content}>
            <p>Select the one you identify with:</p>
            <div>
              <label className={clsx("d-flex align-items-center mb-1")}>
                <input
                  className={styles.readioInput}
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <span className={styles.readioLables}>
                  I am ready with my NFT(s) and want to launch.
                </span>
                <br />
              </label>
            </div>
            <div>
              <label className={clsx("d-flex align-items-center mb-1")}>
                <input
                  className={styles.readioInput}
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                />
                <span className={styles.readioLables}>
                  I want to launch my NFT(s) but would appreciate some help.
                </span>
                <br />
              </label>
            </div>
          </div>
          <Link to="#">
            <button className={styles.up}>
              {" "}
              <span className={styles.uptxt}>Get Started</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
