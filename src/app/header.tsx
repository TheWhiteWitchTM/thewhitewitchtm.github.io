import React from "react";
import Image from "next/image";
import {ThemeToggle} from "@/witchy/theme-toggle";


export function Header() {

	return(
		<div className={"sticky top-0 w-full bg-background overflow-hidden"}>
			<div className={"grid grid-cols-[auto_1fr]"}>
				<div>
					<Image
						src="/logo.jpg"
						alt="TheWhiteWitchTM Logo"
						width={100}
						height={100}
					/>
				</div>
				<div>
					<div className={"grid grid-cols-[1fr_auto]"}>
						<div>
							🧙‍♀️𝕿𝖍𝖊 𝖂𝖍𝖎𝖙𝖊 𝖂𝖎𝖙𝖈𝖍™✨
						</div>
						<div>
							<ThemeToggle/>
						</div>
					</div>
					<code>
						Welcome to my Blog!
					</code>
				</div>
				</div>
			</div>
	)
}