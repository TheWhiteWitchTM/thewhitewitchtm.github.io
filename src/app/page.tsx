import PageMDX from "./posts/page.mdx"
import Intro from "@/witchy/home/intro";

export default function Page() {
	return (
		<div className={"w-full justify-center justify-items-center"}>
			<div className={"min-w-1/2 max-w-1/3 flex flex-col gap-3 m-3 p-3"}>
				<Intro
					videoid="fCpwgxUQp9E"
					title="🧙‍♀️ The White Witch™ Welcome Vision"
					autoplay={true}
					muted={false}
					loop={false}
				/>
			</div>
		</div>
	)
}