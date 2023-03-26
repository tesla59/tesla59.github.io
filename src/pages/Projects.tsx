import Project from "@/components/Project";
import Scaffold from "@/components/Scaffold";

export default function Projects() {
	return (
		<Scaffold headerText={["My", "Projects"]} buttonLink="/contact">
			<div className="flex">
				<Project
					name="Shell.js"
					link="https://github.com/tesla59/shell.js"
					description="Bash-like Shell in JavaScript"
					language="Node"
					languageColor="#f1e05a"
				/>
				<Project
					name="CAdvisor for ARM"
					link="https://github.com/tesla59/cadvisor-arm64"
					description="Dockerfile for CAdvisor Compiled on ARM Architecture"
					language="Dockerfile"
					languageColor="#384d54"
				/>
				<Project
					name="Hydra Kernel"
					link="https://github.com/tesla59/hydra_kernel"
					description="Hydra kernel source for Redmi Note 7 Pro (violet)"
					language="C"
					languageColor="#384d54"
				/>
			</div>
			<div className="flex">
			<Project
					name="Data Structures in Go"
					link="https://github.com/tesla59/Data-Structures-In-Go"
					description="Data Structures implemented in Go"
					language="Go"
					languageColor="#00ADD8"
				/>
				<Project
					name="Discord PDF Generator"
					link="https://github.com/tesla59/PDFBanaLeBro"
					description="A Discord Bot to generate PDFs"
					language="Go"
					languageColor="#00ADD8"
				/>
				<Project
					name="Confession Portal"
					link="https://github.com/tesla59/928VE980-back"
					description="Backend for a confession portal"
					language="Go"
					languageColor="#00ADD8"
				/>
			</div>
		</Scaffold>
	);
}
