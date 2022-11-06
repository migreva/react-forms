import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';

function App(): JSX.Element {
	return <div className="app-container">
		<h1>Forms Exploration</h1>
	</div>
}


export function initApp(): void {
	const rootHTMLElement: HTMLDivElement = document.createElement('div');
	document.body.appendChild(rootHTMLElement);
	const root: Root = createRoot(rootHTMLElement);
	root.render(App());
}
