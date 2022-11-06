import { TextInput } from '@react-forms/components/form-fields/components/text/text-input';
import { FormFieldReactComponent, FormFieldType } from '@react-forms/components/form-fields/typedefs/form-field-config';

export const FormFieldComponentMap: Record<FormFieldType, FormFieldReactComponent> = {
	text: TextInput,
}
