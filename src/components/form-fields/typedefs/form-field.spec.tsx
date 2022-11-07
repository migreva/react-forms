/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import * as React from 'react';
import {render, screen} from '@testing-library/react'
import { FormFieldComponentMap } from '@react-forms/components/form-fields/typedefs/form-field-component-map';
import { FormFieldConfig, FormFieldReactComponent, FormFieldType } from '@react-forms/components/form-fields/typedefs/form-field-config';


Object.keys(FormFieldComponentMap).forEach(
	(fieldType: FormFieldType): void => {
		const Component: FormFieldReactComponent = FormFieldComponentMap[fieldType];

		test(`label rendering for: ${fieldType}`, (): void => {
			const fieldConfig: FormFieldConfig = {
				type: fieldType,
				label: `Test field for ${fieldType}`,
				onChange: () => {},
			};

			render(<Component {...fieldConfig}/>)
			screen.findByLabelText(fieldConfig.label.toLowerCase().replace(/\s+/g, '-'));
		});
	}
)
