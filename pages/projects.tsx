import styles from "../styles/Skel.module.css";
import OT from "../components/orange-text";
import ProjectItem from "../components/project-item";
import Link from "next/link";
import { motion } from "framer-motion";
import SkelScaffold from "../components/skel-scaffold";

export default function Projects() {
  return (
    <SkelScaffold
      unaccentedText="My"
      accentedText="Projects"
      toGo="/contact"
      child={ProjectsContent}
    />
  );
}

function ProjectsContent() {
  return (
    <>
      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Some of my projects are:
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: "relative" }}
        className={styles.contentDiv}
      >
        <div className={styles.projectsHolder}>
          <ProjectItem
            name="Shell.js"
            link="https://github.com/tesla59/shell.js"
            description="Bash-like Shell in JavaScript"
            language="Node"
            languageColor="#f1e05a"
          />
          <ProjectItem
            name="CAdvisor for ARM"
            link="https://github.com/tesla59/cadvisor-arm64"
            description="Dockerfile for CAdvisor Compiled on ARM Architecture"
            language="Dockerfile"
            languageColor="#384d54"
          />
          <ProjectItem
            name="Hydra Kernel"
            link="https://github.com/tesla59/hydra_kernel"
            description="Hydra kernel source for Redmi Note 7 Pro (violet)"
            language="C"
            languageColor="#384d54"
          />
          <ProjectItem
            name="Data Structures in Go"
            link="https://github.com/tesla59/Data-Structures-In-Go"
            description="Data Structures implemented in Go"
            language="Go"
            languageColor="#00ADD8"
          />
          <ProjectItem
            name="Discord PDF Generator"
            link="https://github.com/tesla59/PDFBanaLeBro"
            description="A Discord Bot to generate PDFs"
            language="Go"
            languageColor="#00ADD8"
          />
          <ProjectItem
            name="Confession Portal"
            link="https://github.com/tesla59/928VE980-back"
            description="Backend for a confession portal"
            language="Go"
            languageColor="#00ADD8"
          />
        </div>
        <div className={styles.bottomFade}/>
      </motion.div>

      <motion.p
        className={styles.contentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        There&lsquo;s more on my{" "}
        <Link href="https://github.com/tesla59" passHref>
          <a>
            <OT>GitHub</OT>
          </a>
        </Link>{" "}
        account.
      </motion.p>
      <div className={styles.bottomFade}/>
    </>
  );
}
