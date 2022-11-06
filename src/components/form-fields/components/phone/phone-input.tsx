import { FormFieldConfig, getHTMLNameForFormField } from '@react-forms/components/form-fields/typedefs/form-field-config';
import { AsYouType } from 'libphonenumber-js';
import * as React from 'react';

export function PhoneInput(props: FormFieldConfig): JSX.Element {
	const name: string = getHTMLNameForFormField(props);

	let [value, setValue] = React.useState('');
	let [renderedValue, setRenderedValue] = React.useState('');
	React.useEffect((): void => {
		setValue(props.initialValue || '');
	}, []);

	function inputChange(event: React.FormEvent<HTMLInputElement>): void {
		// filter out non-numbers from the 
		const parsedValue: string = event.currentTarget.value.replace(/\D/g, '');
		const parsedPhoneNumber: AsYouType = new AsYouType('US');
		parsedPhoneNumber.input(parsedValue);
		const renderedValue: string = parsedPhoneNumber.getNumberValue() || '';
		console.log(parsedValue, renderedValue)
		setValue(parsedValue);
		setRenderedValue(renderedValue);
		props.onChange(parsedValue);
	}

	return (
		<div>
			<label htmlFor={name}>{props.label}</label>
			<input type="text" name={name} value={renderedValue} onChange={inputChange}/>
		</div>
	);
}
