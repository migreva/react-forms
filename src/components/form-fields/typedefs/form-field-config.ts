
export type FormFieldType = 'text';
export type FormFieldReactComponent = (props: FormFieldConfig) => JSX.Element;

interface BaseFormFieldConfig<T> {
	/**
	 * specify the type of the form field
	 */
	type: FormFieldType;

	/**
	 * a callback required for every form input, gets called when 
	 * the form field changes
	 * 
	 * @param newValue the new value that has been changed
	 * @param error an optional error, if the field is in error
	 * @returns void
	 */
	onChange: (newValue: T, error?: string) => void;

	/**
	 * an optional intial value
	 */
	initialValue?: T;
}

export interface TextFormFieldConfig extends BaseFormFieldConfig<string> {
	type: 'text';
	label: string;
}

export type FormFieldConfig = TextFormFieldConfig;


/**
 * given a form config, return a re-useable string that can be used as its label
 * 
 * @param formConfig the form field config in question
 * @returns a string, which should be rendered as the input label
 */
export function getHTMLNameForFormField(formConfig: FormFieldConfig): string {
	return formConfig.label.toLowerCase().replace(/\s+/g, '-');
}
