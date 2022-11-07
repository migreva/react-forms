import { Form, FormConfig } from '@react-forms/components/form';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';

/**
 * a form config, with some basic inputs
 */
const basicFormConfig: FormConfig = {
	title: 'Basic Form',
	fields: [
		{
			type: 'text',
			label: 'Name',
			onChange: (newValue: string, error?: string): void => {
				console.log('new name value', newValue);
			}
		},
		{
			type: 'phone',
			label: 'Phone',
			onChange: (newValue: string, error?: string): void => {
				console.log('new phone value', newValue);
			}
		}
	]
}

function App(): JSX.Element {
	return <div className="app-container">
		<h1>Forms Exploration</h1>
		<Form {...basicFormConfig}/>
	</div>
}


export function initApp(): void {
	const rootHTMLElement: HTMLDivElement = document.createElement('div');
	document.body.appendChild(rootHTMLElement);
	const root: Root = createRoot(rootHTMLElement);
	root.render(App());
}
