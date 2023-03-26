import { css } from "@linaria/core";
import { PropsWithChildren, useCallback } from "react";
import Scaffold from "@/components/Scaffold";
import useTheme from "@/hooks/use-theme";
import { yearsFromBirthday } from "@/utils/utils";

export default function About() {
	const theme = useTheme();

	// ACCented Text, written shortly so it's easier to use
	const Act = useCallback(
		({ children }: PropsWithChildren<{}>) => {
			return (
				// TODO: lighten accent
				<span style={{ color: theme.accent, fontWeight: "500" }}>
					{" "}
					{children}
				</span>
			);
		},
		[theme],
	);

	return (
		<Scaffold headerText={["About", "Me"]} buttonLink="/projects">
			<p className={styles.text}>
				Hi, I&lsquo;m <Act>Nishant Singh</Act>, {yearsFromBirthday()} years old and second year student at <Act>IIIT Bhopal</Act> persuing B.Tech in Information Technology. <br />
				I bring a distinctive blend of technical proficiency skills to the table as a seasoned <Act>DevOps Engineer</Act> and <Act>Backend Developer</Act> <br />
				<br />
				In the past, I worked on <Act>The Renal Project</Act> as a <Act>DevOps Engineer</Act>, where I was in charge of setting up CI/CD pipelines and creating
				and maintaining infrastructure. Additionally, I&lsquo;ve worked at <Act>WebKnot Technologies</Act> as a <Act>Backend developer</Act>, where I worked on
				building and maintaining web applications. <br />
				<br />
				I am well-versed in a variety of programming languages, including C, C++, Go, JavaScript, TypeScript, Python, Solidity, Dart and Kotlin <br />
				Various tools and technologies, including Docker, Kubernetes, Terraform and Ansible, are also things I&lsquo;m familiar with. <br />
				<br />
				I am eager to continue my professional growth and take on new challenges in the field of DevOps, Backend Development, Flutter Development or Blockchain technology <br />
			</p>
		</Scaffold>
	);
}

const styles = {
	text: css`
		font-size: 22px;
		font-family: Inter;
		line-height: 1.5;
		color: #e9e9e9;
	`,
};
