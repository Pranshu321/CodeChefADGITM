import React from 'react'
import styles from "../../styles/Depart.module.css";
import Image from 'next/image';
import MngtImg from "../../../public/images/department/management.png";
import TechImg from "../../../public/images/department/Technical.png";
import GraphicsImg from "../../../public/images/department/graphics.png";
import ContentImg from "../../../public/images/department/content.png";
import RingsImg from "../../../public/images/department/twoRings.png";
import Team_img from "../../../public/assets/team.png";
import AashiImg from "../../../public/images/Team/Core_Team/Aashi.jpg";
import KartikeyImg from "../../../public/images/Team/Core_Team/Kartikey.jpg";
import HitanshImg from "../../../public/images/Team/Core_Team/Hitansh.jpg";
import AnshImg from "../../../public/images/Team/Core_Team/Ansh.jpg";



const Depart_Lead = () => {
  return (
    <>
    <div className={styles.department}>
        <p className={styles.heading}>Our Department</p>
        <div className={styles.main}>
            <div className={styles.card}>
            <Image
            className={styles.imgRing}
            src={RingsImg}
            alt="Picture of the author"
            width={220}
            height={220}
            />
                <div className={styles.depImg}>
                <Image
            className={styles.img}
            src={MngtImg}
            alt="Picture of the author"
            width={90}
            height={90}
            />
                </div>
          
            <p className={styles.sub_heading}>MANAGEMENT</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.imgRing}
            src={RingsImg}
            alt="Picture of the author"
            width={220}
            height={220}
            />
                <div className={styles.depImg}>
                <Image
            className={styles.img}
            src={TechImg}
            alt="Picture of the author"
            width={90}
            height={90}
            />
                </div>
          
            <p className={styles.sub_heading}>TECH</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.imgRing}
            src={RingsImg}
            alt="Picture of the author"
            width={220}
            height={220}
            />
                <div className={styles.depImg}>
                <Image
            className={styles.img}
            src={GraphicsImg}
            alt="Picture of the author"
            width={90}
            height={90}
            />
                </div>
          
            <p className={styles.sub_heading}>GRAPHICS</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.imgRing}
            src={RingsImg}
            alt="Picture of the author"
            width={220}
            height={220}
            />
                <div className={styles.depImg}>
                <Image
            className={styles.img}
            src={ContentImg}
            alt="Picture of the author"
            width={90}
            height={90}
            />
                </div>
          
            <p className={styles.sub_heading}>CONTENT</p>
            </div>
        </div>
    </div>

    {/* Leadership Team */}
    <div className={styles.leadership}>
     <p className={styles.heading}>Our Leadership Team</p>
     
        <div className={styles.bg}>
          
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={KartikeyImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Kartikey Gupta</p>
                <p className={styles.designation}>President</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={AashiImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Aashi Aggarwal</p>
                <p className={styles.designation}>Vice President</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={HitanshImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Hitansh Gupta</p>
                <p className={styles.designation}>General Secretary</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={AnshImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Ansh Sachdeva</p>
                <p className={styles.designation}>Media Outreach Head</p>
            </div>
                </div>
          
        </div>
     </div>
    
    </>
    )
}

export default Depart_Lead