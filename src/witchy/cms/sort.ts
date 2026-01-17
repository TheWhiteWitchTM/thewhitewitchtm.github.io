import {Post} from "./types"

export function sortPostsNewest(posts: Post[]) {
		posts.sort((a, b) =>
		+new Date(b.metadata.date) - +new Date(a.metadata.date)
	)
}

export function sortPostsOldest(posts: Post[]) {
	posts.sort((a, b) =>
		+new Date(b.metadata.date).getMilliseconds() - +new Date(a.metadata.date)
	)
}
