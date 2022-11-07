import * as React from 'react';
import { getHTMLNameForFormField, NumberFormFieldConfig } from '@react-forms/components/form-fields/typedefs/form-field-config';

export function NumberInput(props: NumberFormFieldConfig): JSX.Element {
	const name: string = getHTMLNameForFormField(props);

	const [value, setValue] = React.useState(0);

	function numberChange(event: React.FormEvent<HTMLInputElement>): void {
		let newValue: number = event.currentTarget.value as unknown as number;

		if (props.min) {
			newValue = newValue < props.min ? value : newValue;
		}
		
		if (props.max) {
			newValue = newValue > props.max ? value : newValue;

		}

		setValue(newValue);
	}
	
	return (
		<div className="form-container">
			<label htmlFor={name}>{props.label}</label>
			<input type="number" id={name} name={name} value={value} onChange={numberChange}/>
		</div>
	)
}
