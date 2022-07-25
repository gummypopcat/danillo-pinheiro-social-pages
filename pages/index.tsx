import Description from "../src/components/Description";
import ProfilePicture from "../src/components/ProfilePicture/index";
import SocialMedias from "../src/components/SocialMedias";
import styles from "../style/index.module.scss";
import {NextPage} from 'next'; 

const Home: NextPage = () => {
   return (
      <div className={styles.main}>
         <div className={styles.background}></div>
         <ProfilePicture />
         <Description />
         <SocialMedias />
      </div>
   );
};

export default Home;
