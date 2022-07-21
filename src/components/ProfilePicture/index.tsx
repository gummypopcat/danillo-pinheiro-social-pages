import styles from "./ProfilePicture.module.scss"

export default function ProfilePicture() {
   return (
      <div className={styles.profile}>
         <img className={styles.profileImage} src="/profile-img.png" />
         <h1 className={styles.profileName}>Danillo Pinheiro</h1>
      </div>
   )
}
