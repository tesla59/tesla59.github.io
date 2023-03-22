import styles from "../styles/Skel.module.css";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import SkelScaffold from "../components/skel-scaffold";

export default function About() {
  return (
    <SkelScaffold
      unaccentedText="About"
      accentedText="Me"
      toGo="/projects"
      child={AboutContent}
    />
  );
}

function AboutContent() {
  return (
    <motion.p
      className={styles.contentText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Hi, I&lsquo;m <OT>Nishant Singh</OT>, second year student at <OT>IIIT Bhopal</OT> persuing B.Tech in Information Technology. <br />
      I bring a distinctive blend of technical proficiency skills to the table as a seasoned <OT>DevOps Engineer</OT> and <OT>Backend Developer</OT> <br />
      <br />
      In the past, I worked on <OT>The Renal Project</OT> as a <OT>DevOps Engineer</OT>, where I was in charge of setting up CI/CD pipelines and creating
      and maintaining infrastructure. Additionally, I&lsquo;ve worked at <OT>WebKnot Technologies</OT> as a <OT>Backend developer</OT>, where I worked on 
      building and maintaining web applications. <br />
      <br />
      I am well-versed in a variety of programming languages, including C, C++, Go, JavaScript, TypeScript, Python, Solidity, Dart and Kotlin <br />
      Various tools and technologies, including Docker, Kubernetes, Terraform and Ansible, are also things I&lsquo;m familiar with. <br />
      <br />
      I am eager to continue my professional growth and take on new challenges in the field of DevOps, Backend Development, Flutter Development or Blockchain technology <br />
    </motion.p>
  );
}
