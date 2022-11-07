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
		const fieldConfig: FormFieldConfig = {
			type: fieldType,
			label: `Test field for ${fieldType}`,
			onChange: () => {},
		};
		const changeSpy = jest.spyOn(fieldConfig, 'onChange');

		function initFormFieldTest(): void {
			render(<Component {...fieldConfig}/>)
		}

		test(`label rendering for: ${fieldType}`, async (): Promise<void> => {
			initFormFieldTest();
			await screen.findByLabelText(fieldConfig.label);
		});

		test(`basic input change detection`, async (): Promise<void> => {
			const user = userEvent.setup();
			initFormFieldTest();
			// trigger some input
			const inputNode = await screen.findByLabelText(fieldConfig.label);
			await user.click(inputNode);
			await userEvent.keyboard('test text');

			// ensure the change spy was called
			expect(changeSpy).toHaveBeenCalled();
		});
	}
)
