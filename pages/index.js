import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/Home.module.css";
import sliderMeta from "../data/sliderMeta";

export default function Home() {
  return (
    <>
      <Carousel infiniteLoop autoPlay autoFocus renderThumbs={()=> null} >
        {
          sliderMeta.map((image, index)=>{
            return(
              <div key={index}>
              <img width={"100vw"} height="400px" style={{objectFit: "cover"}} src={image.src} alt={image.alt} />
          </div>
            )
          })
        }
            </Carousel>
            <h2 className={styles.h2}>About KSR</h2>
      <div className={styles.div}>
        <img
          className={styles.img}
          src="https://kvtbluemetals.com/wp-content/uploads/2021/10/about-page-imagee-1-2.png"
        />
        <div className={styles.p}>
          <p>
          The KSR BLUE METAL Crushing plant is a ‘SANDVIK ’crushing plant, which
          includes jaw crusher, impact crusher or cone crusher, vertical shaft
          impact and centrally electric controlling system, etc. The designed
          capacity is 250t/h. To meet customer’s specific requirement for the
          stone crushing, we also cater the need of other construction material,
          such as manufactured sand (M SAND). We pay great attention to every
          stage, from products design, purchasing raw materials to
          manufacturing. We have adopted new technology, new technique and new
          materials to make sure the high quality is guaranteed.
          </p>
          <p>
          Our Crushing plant, KSR Blue Metal is using technology provided by
          SANDVIK UNIT Crusher,. Manufactured sand produced by equipments from
          our company has a superior quality compared with natural sand.The
          Aggregates are being tested at regular intervals and proved to meet
          the standards of IS – 383 -1970.
          </p>
          <p>
          Customer needs are met out as per time schedule, since our plant
          capacity is 250 M.T/Hour, and we own our vehicle fleet. The materials
          are supplied in conventional Unit of measurement i.e. Units’ or by
          weight, as we possess a weigh bridge within our plant premises.
            </p>
      
          <h2> What we do </h2>
          <p>We are engaged in manufacturing and supplying the finest quality of
          powder dust, M SAND, Gravel. We are committed to serve our valued clients with a
          qualitative range of products and so we make sure that these products
          are in compliance with the quality norms of the industry. Our clients
          can avail these products in different quantities as per their
          requirements.</p>
        </div>
      </div>
    </>
  );
}
