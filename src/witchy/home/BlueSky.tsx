import { forwardRef } from "react";

export const BluSsky = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
	({ className, ...props }, ref) => {
		return (
			<svg
				ref={ref}
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M12 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6Z" />
				<path d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" />
				<path d="M8 12c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.4 0 2.6-.7 3.5-1.8" />
				<path d="M16 12c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.4 0-2.6-.7-3.5-1.8" />
			</svg>
		);
	}
);