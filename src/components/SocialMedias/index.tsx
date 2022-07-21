import Link from "./Link";
import styles from './SocialMedias.module.scss';

export default function SocialMedias() {
      return (
         <>
            <ul className={styles.socialMedias}>
               <Link href="https://www.youtube.com/">
                  <li className={styles.socialMediasItem}>
                     <img className={styles.socialMediasItemIcon} src="/twitter.svg" />
                     <p>Twitter</p>
                  </li>
               </Link>
               <Link href="https://www.youtube.com/">
                  <li className={styles.socialMediasItem}>
                     <img className={styles.socialMediasItemIcon} src="/github.svg" />
                     <p>Github</p>
                  </li>
               </Link>
            </ul>
         </>
      )
   }
