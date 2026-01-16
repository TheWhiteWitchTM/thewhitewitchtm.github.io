import YouTubePlayer from "@/witchy/ui/YouTubePlayer";

export default function Page() {
	return (
		<div className={"w-full justify-center justify-items-center"}>
			<div className={"min-w-1/2 max-w-1/3 flex flex-col gap-3 m-3 p-3"}>
				<YouTubePlayer
					urlOrId="https://youtu.be/fCpwgxUQp9E?si=W6o7djtFPHNHKfx2"
					title="🧙‍♀️ The White Witch™ Welcome Vision"
					autoplay={true}
					muted={false}
					loop={false}
				/>
			</div>
		</div>
	)
}