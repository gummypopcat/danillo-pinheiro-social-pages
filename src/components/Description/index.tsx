import styles from "./Description.module.scss";
import {NextPage} from 'next';

const Description: NextPage = () => {
   return (
      <p className={styles.text}>
         Hi! I am a front-end developer and I do drawings as a hobby. I live on Brazil and I love to learn and try new things.
         Here you can see some of my social medias.
      </p>
   );
};

export default Description;
