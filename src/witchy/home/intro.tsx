'use client';

import { useState } from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';
import { X } from 'lucide-react';

interface IntroProps {
	videoid: string;
	title?: string;
	autoplay?: boolean;
	muted?: boolean;
	loop?: boolean;
}

export default function Intro({
	                              videoid,
	                              title = '🧙‍♀️ The White Witch™ Realm Awakening',
	                              autoplay = true,
	                              muted = true,  // Default to true for reliability
	                              loop = false,
                              }: IntroProps) {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return null;
	}

	const playerParams = [
		autoplay ? 'autoplay=1' : '',
		muted ? 'mute=1' : '',  // Mute by default to allow autoplay
		loop ? 'loop=1' : '',
		loop ? `playlist=${videoid}` : '',
		'controls=1',
		'modestbranding=1',
		'rel=0',
		'showinfo=0',
	].filter(Boolean).join('&');

	return (
		<div className="relative w-full max-w-5xl mx-auto my-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-gradient-to-b from-background/80 to-black/40 backdrop-blur-sm">
			{/* Close button */}
			<button
				onClick={() => setIsVisible(false)}
				className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white/90 hover:bg-black/80 hover:text-white transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
				aria-label="Close intro video"
			>
				<X className="h-6 w-6" />
			</button>

			{/* Force 16:9 aspect ratio – this fixes scaling/quarter-view issues */}
			<div
				className="relative w-full overflow-hidden"
				style={{ aspectRatio: '16 / 9' }}  // Modern CSS – works in all current browsers
			>
				{/* Fallback padding trick for older browsers if needed */}
				<div className="absolute inset-0">
					<YouTubeEmbed
						videoid={videoid}
						params={playerParams}
						title={title}
						playlabel={`Play ${title}`}
						// No width/height props → let CSS handle full scaling
					/>
				</div>
			</div>

			{/* Bottom gradient overlay */}
			<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex items-end justify-center pb-6">
				<p className="text-white/80 text-sm md:text-base font-medium tracking-wide drop-shadow-md">
					{title}
				</p>
			</div>
		</div>
	);
}