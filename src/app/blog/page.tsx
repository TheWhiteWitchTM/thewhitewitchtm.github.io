import Post1 from "./posts/post_1.mdx"

export default function Page() {
	return (
		<div className={"w-full justify-center justify-items-center"}>
			<div className={"min-w-1/2 max-w-1/3 flex flex-col gap-3 m-3 p-3"}>
				<article className="w-full prose prose-slate lg:prose-lg">
					<Post1/>
				</article>
				<article className="prose prose-slate lg:prose-lg">
					<Post1/>
				</article>
				<article className="prose prose-slate lg:prose-lg">
					<Post1/>
				</article>
				<article className="prose prose-slate lg:prose-lg">
					<Post1/>
				</article>
			</div>
		</div>

	)
}