/**
 * Copyright (C) 2019 Unicorn a.s.
 *
 * This program is free software; you can use it under the terms of the UAF Open License v01 or
 * any later version. The text of the license is available in the file LICENSE or at www.unicorn.com.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See LICENSE for more details.
 *
 * You may contact Unicorn a.s. at address: V Kapslovne 2767/2, Praha 3, Czech Republic or
 * at the email: info@unicorn.com.
 */

//@@viewOn:imports
import * as UU5 from "uu5g04";
import ns from "./bricks-ns.js";
import Null from "./null.js";
import Css from "./internal/css.js";
//@@viewOff:imports

const QRCodeGenerator = UU5.Common.Component.lazy ? UU5.Common.Component.lazy(() => import("qrcode.react")) : Null;
const EditationComponent = UU5.Common.Component.lazy(async () => {
  await SystemJS.import("uu5g04-forms");
  await SystemJS.import("uu5g04-bricks-editable");
  return import("./internal/q-r-code-editable.js");
});

export const QRCode = UU5.Common.VisualComponent.create({
  displayName: "QRCode", // for backward compatibility (test snapshots)
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.EditableMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.name("QRCode"),
    classNames: {
      main:
        ns.css("q-r-code") +
        " " +
        Css.css(`
        display: inline-block;
      `),
    },
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    value: UU5.PropTypes.string.isRequired,
    size: UU5.PropTypes.number,
    correction: UU5.PropTypes.oneOf(["low", "medium", "quartile", "high"]),
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      value: undefined,
      size: 128,
      correction: "low",
    };
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  onBeforeForceEndEditation_() {
    return this._editableTabs ? this._editableTabs.getPropsToSave() : undefined;
  },

  getEditablePropsValues_(propsArray) {
    let props = this.getEditablePropsValuesDefault(propsArray);

    return props;
  },
  //@@viewOff:overriding

  //@@viewOn:private
  _renderEditationMode() {
    return (
      <UU5.Common.Suspense fallback="">
        <EditationComponent component={this} ref_={this._registerEditableComponent} />
      </UU5.Common.Suspense>
    );
  },

  _registerEditableComponent(tabs) {
    this._editableTabs = tabs;
  },

  _getCorrectionLevel() {
    switch (this.props.correction) {
      case "low":
        return "L";
      case "medium":
        return "M";
      case "quartile":
        return "Q";
      case "high":
        return "H";
      default:
        return "L";
    }
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <span {...this.getMainAttrs()}>
        <UU5.Common.Suspense fallback="">
          <QRCodeGenerator
            value={this.props.value}
            level={this._getCorrectionLevel()}
            size={this.props.size}
            renderAs="svg"
          />
          {this.state.editation ? this._renderEditationMode() : null}
        </UU5.Common.Suspense>
      </span>
    );
  },
  //@@viewOff:render
});

export default QRCode;
