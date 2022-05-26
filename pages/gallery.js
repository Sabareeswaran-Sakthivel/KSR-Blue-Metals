import styles from "../styles/Gallery.module.css";

function Gallery() {
  return (
    <div>
      {/* <> */}
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_1.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_3.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_5.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_7.jpg" />
        </div>
      </div>
      {/* </> */}

      <h1 className={styles.h1}>Quarry</h1>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_10.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_11.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_12.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_13.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_15.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_17.jpg" />
        </div>
      </div>

      <h1 className={styles.h1}>Crusher</h1>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_18.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_19.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_21.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_22.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_23.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_24.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_25.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_27.jpg" />
        </div>

        <div className={styles.image}>
          <img className={styles.img} src="/assets/images/image_28.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
