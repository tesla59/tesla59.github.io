import { css } from "@linaria/core";
import { Link } from "react-router-dom";
import Scaffold from "@/components/Scaffold";
import { contact } from "@/utils/constants";

export default function Contact() {
	return (
		<Scaffold headerText={["Contact", "Me"]} buttonLink="/" rotatedButton>
			<p className={styles.text}>
				You can reach me on {" "}
				<Link className={styles.link} to={contact.telegram}>
					Telegram
				</Link>
				.
				<br />
				<br />
				An{" "}
				<Link className={styles.link} to={`mailto:${contact.email}`}>
					email
				</Link>{" "}
				works as well.
				<br />
				<br />
				You can find me on {" "}
				<Link className={styles.link} to={contact.linkedin}>
					LinkedIn
				</Link>{" "}
				where you can checkout my resume.
				<br />
				<br />
				You can find my work on
				<Link className={styles.link} to={contact.github}>
					GitHub
				</Link>
			</p>
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: 22px;
		line-height: 1.5;
	`,
	link: css`
		color: rgb(234, 154, 100);
		text-decoration: underline;
		font-weight: 500;
	`,
};
