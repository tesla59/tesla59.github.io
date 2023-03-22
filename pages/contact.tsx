import styles from "../styles/Skel.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import OT from "../components/orange-text";
import SkelScaffold from "../components/skel-scaffold";

export default function Contact() {
  return (
    <SkelScaffold
      unaccentedText="Contact"
      accentedText="Me"
      toGo="/"
      isButtonRotated={true}
      isButtonLarge={true}
      child={ContactContent}
    />
  );
}

function ContactContent() {
  return (
    <motion.p
      className={`${styles.contentText}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      You can find me here <br />
      <Link href="https://github.com/tesla59/">
        <a>
          <OT>GitHub</OT>
        </a>
      </Link>
      <br />
      <Link href="mailto:talktonishantsingh.ns@gmail.com">
        <a>
          <OT>Email</OT>
        </a>
      </Link>
      <br />
      <Link href="https://www.linkedin.com/in/tesla59/">
        <a>
          <OT>LinkedIn</OT>
        </a>
      </Link>
      <br />
      <Link href="https://t.me/tesla59/">
        <a>
          <OT>Telegram</OT>
        </a>
      </Link>
      <br />
    </motion.p>
  );
}
