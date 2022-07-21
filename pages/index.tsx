import Description from "../src/components/Description";
import ProfilePicture from "../src/components/ProfilePicture/index";
import SocialMedias from "../src/components/SocialMedias";
import styles from "../style/index.module.scss";

export default function Home() {
   return (
      <div className={styles.main}>
         <div className={styles.background}></div>
         <ProfilePicture />
         <Description />
         <SocialMedias />
      </div>
   )
}
