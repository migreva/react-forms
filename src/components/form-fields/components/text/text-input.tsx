import * as React from 'react';
import { getHTMLNameForFormField, TextFormFieldConfig } from '@react-forms/components/form-fields/typedefs/form-field-config';

/**
 * a basic text input
 * 
 * @param props FormFieldConfig where type === 'text'
 * @returns an accessible input with which a user can edit text
 */
export function TextInput(props: TextFormFieldConfig): JSX.Element {
	const name: string = getHTMLNameForFormField(props);

	let [value, setValue] = React.useState('')
	React.useEffect((): void => {
		setValue(props.initialValue || '');
	}, []);

	function textChange(event: React.FormEvent<HTMLInputElement>): void {
		const newValue: string = event.currentTarget.value;
		setValue(newValue);
		props.onChange(newValue);
	}

	return (
		<div className="form-container">
			<label htmlFor={name}>{props.label}</label>
			<input type="text" id={name} name={name} value={value} onChange={textChange}/>
		</div>
	)
}
