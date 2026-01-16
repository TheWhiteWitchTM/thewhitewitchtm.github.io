import PageMDX from "./posts/page.mdx"

export default function Page() {
	return (
		<div className={"w-full justify-center justify-items-center"}>
			<div className={"min-w-1/2 max-w-1/3 flex flex-col gap-3 m-3 p-3"}>
				<article className="prose prose-slate lg:prose-lg mx-auto">
					<PageMDX/>
				</article>
			</div>
		</div>
	)
}