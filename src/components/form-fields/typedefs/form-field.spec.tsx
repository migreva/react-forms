/**
 * @jest-environment jsdom
 */
import { FormFieldComponentMap } from '@react-forms/components/form-fields/typedefs/form-field-component-map';
import { FormFieldConfig, FormFieldReactComponent, FormFieldType } from '@react-forms/components/form-fields/typedefs/form-field-config';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';


Object.keys(FormFieldComponentMap).forEach(
	(fieldType: FormFieldType): void => {
		const Component: FormFieldReactComponent = FormFieldComponentMap[fieldType];

		test(`label rendering for: ${fieldType}`, async (): Promise<void> => {
			const fieldConfig: FormFieldConfig = {
				type: fieldType,
				label: `Test field for ${fieldType}`,
				onChange: () => {},
			};

			const changeSpy = jest.spyOn(fieldConfig, 'onChange');

			const user = userEvent.setup()
			render(<Component {...fieldConfig}/>)
			const inputNode = await screen.findByLabelText(fieldConfig.label);

			// trigger some input
			await user.click(inputNode);
			await userEvent.keyboard('test text');
			expect(changeSpy).toHaveBeenCalled();
		});
	}
)
