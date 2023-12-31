/**
 * Copyright (C) 2021 Unicorn a.s.
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License at
 * <https://gnu.org/licenses/> for more details.
 *
 * You may obtain additional information at <https://unicorn.com> or contact Unicorn a.s. at address: V Kapslovne 2767/2,
 * Praha 3, Czech Republic or at the email: info@unicorn.com.
 */

import UU5 from "uu5g04";

const defaults = {
  labelColWidth: "xs12 s5",
  inputColWidth: "xs12 s7",
};

export const FormContext = UU5.Common.Context.create();

export class Context {
  static withContext(Component) {
    // disable context for jest tests - enzyme doesn't support React 16.3 Context API
    if (!UU5.Common.Context.create || process.env.NODE_ENV === "test") return Component;
    let forwardRef = UU5.Common.Reference.forward((props, ref) => {
      return (
        <FormContext.Consumer>
          {({ readOnly, values, labelColWidth, inputColWidth, labelAlignment }) => {
            let value = props.value;
            if (values && value === undefined) {
              value = values[props.name || props.id];
            }

            if (props.readOnly !== undefined) {
              readOnly = props.readOnly;
            }

            if (
              props.labelColWidth &&
              UU5.Forms.InputMixin.statics["UU5.Forms.InputMixin"].defaults.labelColWidth !== props.labelColWidth
            ) {
              labelColWidth = props.labelColWidth;
            }

            if (
              props.inputColWidth &&
              UU5.Forms.InputMixin.statics["UU5.Forms.InputMixin"].defaults.inputColWidth !== props.inputColWidth
            ) {
              inputColWidth = props.inputColWidth;
            }

            if (props.labelAlignment !== undefined) {
              labelAlignment = props.labelAlignment;
            }

            return (
              <Component
                {...props}
                ref={ref}
                readOnly={readOnly}
                value={value}
                labelColWidth={labelColWidth || defaults.labelColWidth}
                inputColWidth={
                  inputColWidth || (Component.defaults && Component.defaults.inputColWidth) || defaults.inputColWidth
                }
                labelAlignment={labelAlignment}
                _hasFormContext={true}
              />
            );
          }}
        </FormContext.Consumer>
      );
    });

    forwardRef.isUu5PureComponent = true;
    forwardRef.displayName = `forwardRef(${Component.displayName || Component.name || "Component"})`;
    forwardRef.tagName = Component.tagName;

    return forwardRef;
  }
}

export default Context;
