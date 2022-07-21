import Description from "../src/components/Description";
import ProfilePicture from "../src/components/ProfilePicture/index";
import SocialMedias from "../src/components/SocialMedias";
import styles from "../style/index.module.scss";
import classNames from "classnames";

export default function Home() {
   return (
      <div className={classNames({
         [styles.main]: true,
         [styles.background]: true
      })}>
         <ProfilePicture />
         <Description />
         <SocialMedias />
      </div>
   )
}
