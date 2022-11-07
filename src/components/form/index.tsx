import { FormFieldComponentMap } from '@react-forms/components/form-fields/typedefs/form-field-component-map';
import { FormFieldConfig, FormFieldReactComponent, getHTMLNameForFormField } from '@react-forms/components/form-fields/typedefs/form-field-config';
import * as React from 'react';

export interface FormConfig {
	title: string;
	fields: FormFieldConfig[];
}

/**
 * render a form, based on the config passed
 * 
 * @param props form config
 * @returns a rendered form
 */
export function Form(props: FormConfig): JSX.Element {
	function submit(event): boolean {
		return false;
	}

	const fieldsToRender: JSX.Element[] = props.fields.map(
		(config: FormFieldConfig): JSX.Element => {
			const Component: FormFieldReactComponent = FormFieldComponentMap[config.type];
			return <Component key={getHTMLNameForFormField(config)} {...config}/>
		}
	)

	return (
		<div className="form">
			<h3>{props.title}</h3>
			<form onSubmit={submit}>
				{fieldsToRender}
				<input type="submit" value="Submit"/>
			</form>
		</div>
	)
}
