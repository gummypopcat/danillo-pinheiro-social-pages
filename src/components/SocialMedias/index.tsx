import Link from "./Link";
import styles from './SocialMedias.module.scss';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function SocialMedias() {
      return (
         <>
            <div className={styles.socialMedias}>
               <Link href="https://twitter.com/gummypopcat">
                  <div className={styles.item}>
                     <BsTwitter className={styles.itemIcon} />
                     <p>Twitter</p>
                  </div>
               </Link>
               <Link href="https://github.com/gummypopcat">
                  <div className={styles.item}>
                     <BsGithub className={styles.itemIcon} />
                     <p>Github</p>
                  </div>
               </Link>
               <Link href="https://www.linkedin.com/in/danillo-pinheiro-54639623a/">
                  <div className={styles.item}>
                     <BsLinkedin className={styles.itemIcon} />
                     <p>Linkedin</p>
                  </div>
               </Link>
            </div>
         </>
      )
   }
