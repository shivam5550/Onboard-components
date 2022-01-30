import react from "react";
import styles from "./metaverse.module.css"
import clsx from "clsx";
import { PaintBrushHousehold } from "phosphor-react";

const Metaverse = ({className}:any) => {
    return (
      <>
        <div className={clsx(styles.mainDiv, className)}>
          <h1 className={styles.heading}>Create Exclusive NFTs for your audience </h1>
          <h1 className={styles.the}>for as low as <span className={styles.inr}>INR 99</span></h1>
          <p className={styles.join}>First-of-its-kind platform that delivers ideation to execution of NFT projects for</p>
          <p className={styles.join}>Creators, based on their audience, analytics and requirements.</p>          
          <hr className={styles.Hr}/>
          <h1 className={styles.approach}>Our Approach </h1>
          <div className={clsx(styles.contentIcons)}>
          <i className={styles.circle}>
          <span><i className="ph-headset-bold"></i></span>
          </i>
          <i className={styles.circle}>
          <span><i className="ph-lightbulb-bold"></i></span>
          </i>
          <i className={styles.circle}>
          <span><i className="ph-paint-brush-household-bold"></i></span>
          </i>
          <i className={styles.circle}>
          <span><i className="ph-rocket-launch-bold"></i></span>
          </i>
          </div>
          <div className={clsx(styles.contents)}>
          <p className={styles.content}>
          <h3 className={styles.chat}>Let's Chat</h3>
          <li>We sit down with you and talk about all your metaverse dreams to help bring them to life.</li>
          </p>
          <p className={styles.content}>
          <h3 className={styles.ideation}>Ideation</h3>
          <li>Through strategy calls and lots of color discussions, we can together ideate and better understand your needs.</li>
          </p>
          <p className={styles.content}>
          <h3 className={styles.creation}>Creation</h3>
          <li>Our talented NFT artists will create a one-of-a-kind artwork for your collection.</li>
          </p>
          <p className={styles.content}>
          <h3 className={styles.launch}>Launch Day!</h3>
          <li>We’ll launch and help market your NFT on HyprClub. Eevn after the launch, we’ll be there to provide you support.</li>
          </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Metaverse;