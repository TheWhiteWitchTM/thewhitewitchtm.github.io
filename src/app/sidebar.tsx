import Image from "next/image";

export default function SideBar() {
	return (
		<div>
			<Image
				src="/logo.jpg"
				alt="TheWhiteWitchTM Logo"
				width={64}
				height={64}
			/>
		</div>
	)
}