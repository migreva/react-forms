import { FormFieldConfig, getHTMLNameForFormField, PhoneFormFieldConfig } from '@react-forms/components/form-fields/typedefs/form-field-config';
import { AsYouType } from 'libphonenumber-js';
import * as React from 'react';

/**
 * render a phone number input, with nice formatting
 * 
 * @param props FormFieldConfig where type === 'phone'
 * @returns an accessible input with which a user can edit a phone numebr
 */
export function PhoneInput(props: PhoneFormFieldConfig): JSX.Element {
	const name: string = getHTMLNameForFormField(props);

	let [value, setValue] = React.useState('');
	let [renderedValue, setRenderedValue] = React.useState('');
	React.useEffect((): void => {
		setValue(props.initialValue || '');
	}, []);

	function inputChange(event: React.FormEvent<HTMLInputElement>): void {
		// filter out non-numbers from the input
		const parsedValue: string = event.currentTarget.value.replace(/\D/g, '');

		// get an AsYouTYpe input, and get the formatted number
		const parsedPhoneNumber: AsYouType = new AsYouType('US');
		parsedPhoneNumber.input(parsedValue);
		const renderedValue: string = parsedPhoneNumber.getNumberValue() || '';

		// set the raw value, and the rendered value, and trigger the onChange listener
		setValue(parsedValue);
		setRenderedValue(renderedValue);
		props.onChange(parsedValue);
	}

	return (
		<div>
			<label htmlFor={name}>{props.label}</label>
			<input type="text" id={name} name={name} value={renderedValue} onChange={inputChange}/>
		</div>
	);
}
