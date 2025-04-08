import askshaya from "../../src/assets/Devs/DevMembers/akshaya.png";
import animesh from "../../src/assets/Devs/DevMembers/animesh.png";
import anurag from "../../src/assets/Devs/DevMembers/anurag.png";
import ashutosh from "../../src/assets/Devs/DevMembers/ashutosh.png";
import atharv from "../../src/assets/Devs/DevMembers/atharv.png";
import avi_image from "../../src/assets/Devs/DevMembers/avi_image.png";
import ayush from "../../src/assets/Devs/DevMembers/ayush.png";
import bhavesh from "../../src/assets/Devs/DevMembers/bhavesh.png";
import daksh from "../../src/assets/Devs/DevMembers/daksh.png";
import madhur from "../../src/assets/Devs/DevMembers/madhur.png";
import manas from "../../src/assets/Devs/DevMembers/manas.png";
import prathmesh from "../../src/assets/Devs/DevMembers/prathmesh.png";
import priyanshu from "../../src/assets/Devs/DevMembers/priyanshu.png";
import raza from "../../src/assets/Devs/DevMembers/raza.png";
import samyak from "../../src/assets/Devs/DevMembers/samyak.png";
import satyasheel from "../../src/assets/Devs/DevMembers/satyasheel.png";
import siddharth from "../../src/assets/Devs/DevMembers/siddharth.png";
import sitaram from "../../src/assets/Devs/DevMembers/sitaram.png";
import surya from "../../src/assets/Devs/DevMembers/surya.png";

import styles from "./devpage.module.scss";
import FloatIcon from "./UI/FloatIcon";
import OverlayBackBtn from "../Overlay/OverlayBackBtn/OverlayBackBtn";

import frontend from "../../src/assets/Verticals/frontend.svg";
import backend from "../../src/assets/Verticals/backend.svg";
import design from "../../src/assets/Verticals/ui-ux.svg";
import video from "../../src/assets/Verticals/video.svg";

const teamMembers = {
  front: [
    {
      name: "Samyak Jain",
      image: samyak,
      group: "frontend",
      insta: "https://www.instagram.com/jain_samyak_12/",
      behance: "",
      github: "https://github.com/samyak-jain-12",
      linkedin: "https://www.linkedin.com/in/samyak-jain-bab61730b/",
    },
    {
      name: "Animesh Datta Jaiswal",
      image: animesh,
      group: "frontend",
      insta: "https://www.instagram.com/animeshani1/",
      behance: "",
      github: "https://github.com/Animeshdj",
      linkedin: "https://www.linkedin.com/in/animesh-datta-jaiswal-a3b15729a/",
    },
    {
      name: "Atharv Agarwal",
      image: atharv,
      group: "frontend",
      insta: "https://www.instagram.com/abe_par_tu_hai_kaun/",
      behance: "",
      github: "https://github.com/AtharvAgarwal20",
      linkedin: "https://www.linkedin.com/in/atharv-amit-agarwal/",
    },
    {
      name: "Manas Choudhary",
      image: manas,
      group: "backend",
      insta: "https://www.instagram.com/manaschoudhary_?igsh=YTQwZjQ0NmI0OA==",
      behance: "",
      github: "https://github.com/ManasChoudhary-01",
      linkedin: "https://www.linkedin.com/in/manas-choudhary-56374028b",
    },
  ],
  design: [
    {
      name: "Bhavesh Jangir",
      image: bhavesh,
      group: "design",
      insta: "",
      behance: "",
      github: "",
      linkedin: "https://www.linkedin.com/in/madhur-jain-a03260211?",
    },
    {
      name: "Madhur Jain",
      image: madhur,
      group: "design",
      insta: "",
      behance: "",
      github: "",
      linkedin: "https://www.linkedin.com/in/madhur-jain-a03260211?",
    },
    {
      name: "Satyasheel Singh",
      image: satyasheel,
      group: "backend",
      insta: "",
      behance: "",
      github: "",
      linkedin: "www.linkedin.com/in/satyasheel-singh-a82106290",
    },
  ],
  video: [
    {
      name: "Akshaya Shubh Agarwal",
      image: askshaya,
      group: "video",
      insta: "https://www.instagram.com/akshaya.kyu/",
      behance: "",
      github: "https://github.com/Akshaya1501",
      linkedin:
        "https://www.linkedin.com/in/akshaya-shubh-2b6a44288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Anurag",
      image: anurag,
      group: "video",
      insta:
        "https://www.instagram.com/_anurag.malhotra_?igsh=MWltNWJveWxnaXAwbQ==",
      behance: "",
      github: "",
      linkedin:
        "https://www.linkedin.com/in/anurag-malhotra-772969287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Prathmesh Chandra",
      image: prathmesh,
      group: "video",
      insta: "https://www.instagram.com/_prathmesh_chandra",
      behance: "",
      github: "",
      linkedin: "https://www.linkedin.com/in/prathmesh-chandra-b6b38a2b5/",
    },

    {
      name: "Priyanshu Narayan",
      image: priyanshu,
      group: "video",
      insta: "",
      behance: "",
      github: "",
      linkedin:
        "https://www.linkedin.com/in/priyanshu-narayan-559412275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Raza Hasnain",
      image: raza,
      group: "video",
      insta:
        "https://www.instagram.com/praja_pat3293?igsh=MTIxaDlrMGd0OWFtbQ==",
      behance: "",
      github: "",
      linkedin: "https://www.linkedin.com/in/razahasnain22/",
    },
    {
      name: "Sai Surya Vujuri",
      image: surya,
      group: "video",
      insta:
        "https://www.instagram.com/surya_ijk/profilecard/?igsh=Zm1ybTV0ZW9sdmlw",
      behance: "",
      github: "",
      linkedin:
        "https://www.linkedin.com/in/sai-surya-vujuri-826a452b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Siddharth Kakar",
      image: siddharth,
      group: "video",
      insta:
        "https://www.instagram.com/siddharthkakar?igsh=MXRpNzBudDA4bnM3cQ==",
      behance: "",
      github: "",
      linkedin: "https://www.linkedin.com/in/siddharth-kakar-a62881",
    },
    {
      name: "Sitaram prajapat",
      image: sitaram,
      group: "video",
      insta:
        "https://www.instagram.com/praja_pat3293?igsh=MTIxaDlrMGd0OWFtbQ==",
      behance: "",
      github: "",
      linkedin:
        "https://www.linkedin.com/in/sitaram-prajapat-208147294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  back: [
    {
      name: "Ashutosh Desai",
      image: ashutosh,
      group: "backend",
      insta: "https://www.instagram.com/ashutosh____1910?igsh=czNya244Mnp2MzVv",
      behance: "",
      github: "https://github.com/Ashutosh1910/",
      linkedin:
        "https://www.linkedin.com/in/ashutosh-desai-676820278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Avyakt Verma",
      image: avi_image,
      group: "backend",
      insta: "https://www.instagram.com/avyakt_1729?igsh=NnNocWd1Nmh5cmU1",
      behance: "",
      github: "https://github.com/Avyakt-ai",
      linkedin:
        "https://www.linkedin.com/in/avyakt-verma-89264727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ayush Gupta",
      image: ayush,
      group: "backend",
      insta: "https://www.instagram.com/madme.ig/",
      behance: "",
      github: "https://github.com/Ayush-gupta-dev",
      linkedin: "https://www.linkedin.com/in/ayush-gupta-dev/",
    },
    {
      name: "Daksh Jain",
      image: daksh,
      group: "backend",
      insta: "https://www.instagram.com/daksh__jain08/",
      behance: "",
      github: "https://github.com/Daksh-Jain08/",
      linkedin: "https://www.linkedin.com/in/daksh-jain-996b541b4/",
    },
  ],
};

const banners = [
  { name: "FRONTEND", img: frontend, className: styles.banner1 },
  { name: "UI/UX", img: design, className: styles.banner2 },
  { name: "VIDEO", img: video, className: styles.banner3 },
  { name: "BACKEND", img: backend, className: styles.banner4 },
];
const DevPage = () => {
  [isVerticalOpen, setIsVerticalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <OverlayBackBtn />
      <div className={styles.background}></div>
      {banners.map((banner, index) => (
        <FloatIcon
          key={index}
          className={`${banner.className} ${styles.banners}`}
        >
          <div>
            <img src={banner.img} alt={banner.name} />
          </div>
          <p>{banner.name}</p>
        </FloatIcon>
      ))}
    </div>
  );
};

export default DevPage;
