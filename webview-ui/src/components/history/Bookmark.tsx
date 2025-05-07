const BookmarkOutline = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
			<g transform="scale(0.87, 0.97)">
				<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
			</g>
		</svg>
	)
}

const BookmarkFilled = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
			<g transform="scale(0.87, 0.97)">
				<path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
			</g>
		</svg>
	)
}

export const BookmarkIcon = ({ isSet }: { isSet: boolean }) => {
	const color = isSet ? "var(--vscode-button-background)" : "var(--vscode-descriptionForeground)"
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "3px",
				fontSize: "11px",
				color,
			}}>
			{isSet ? <BookmarkFilled /> : <BookmarkOutline />}
		</div>
	)
}
