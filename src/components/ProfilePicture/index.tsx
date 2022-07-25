import styles from "./ProfilePicture.module.scss";
import {NextPage} from 'next'; 

const ProfilePicture: NextPage = () => {
   return (
      <div className={styles.profile}>
         <img className={styles.profileImage} src='/images/profile-image.png' alt="Profile Image" />
         <h1 className={styles.profileName}>Danillo Pinheiro</h1>
      </div>
   );
};

export default ProfilePicture;

