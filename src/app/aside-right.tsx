import {Github, Mailbox, Twitter, Youtube} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {GhostButton} from "@/witchy/ui/GhostButton";
import Link from "next/link";

export default function AsideRight() {
	return (
		<div className={"sticky top-14 flex flex-col gap-2"}>
			<GhostButton>
				<Link
					href={"https://www.youtube.com/@TheWhiteWitchTM"}
					target={"_blank"}
				>
					<Youtube/>
				</Link>
			</GhostButton>
				<GhostButton>
					<Link
						href={"https://x.com/thewhitewitchtm"}
						target={"_blank"}>
					<Twitter/>
					</Link>
				</GhostButton>
				<GhostButton>
					<Link
						href={"https://github.com/TheWhiteWitchTM"}
						target={"_blank"}
					>
						<Github/>
					</Link>
				</GhostButton>
				<Separator/>
				<GhostButton>
					<Link href={"mailto://thewhitewitchtm@gmail.com"}>
						<Mailbox/>
					</Link>
				</GhostButton>
		</div>
	)
}