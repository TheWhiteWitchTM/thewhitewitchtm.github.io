import Link from "next/link";

export default function AsideLeft() {
	return (
		<div className={"sticky top-14 flex flex-col"}>
			<div className={"flex flex-row"}>
				<div className={"font-bold mt-1.5"}>
					✨Menu✨
				</div>
			</div>
			<div className={"flex flex-col mt-2 gap-1"}>
				<Link href={"/"}>
					🛖Home
				</Link>
				<Link href={"/blog"}>
					📖Blog
				</Link>
			</div>

		</div>
	)
}