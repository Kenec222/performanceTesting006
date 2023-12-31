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

import React from "react";
import { PropTypes } from "uu5g05";
import Environment from "../environment/environment.js";

export const CallsMixin = {
  //@@viewOn:statics
  statics: {
    "UU5.Common.CallsMixin": {
      requiredMixins: ["UU5.Common.BaseMixin"],
      errors: {
        callsNotFound: "Property calls was not set.",
        staticsCallsNotFound: "Variable calls was not found in statics.",
        callNameNotFound: "Call key %s was not found in calls.",
        callNotFound: "Call %s was not found in calls.",
      },
    },
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    calls: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      calls: null,
    };
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    // initialize
    this.registerMixin("UU5.Common.CallsMixin");
    // state
    return {
      calls: null,
    };
  },

  UNSAFE_componentWillMount() {
    this._setCalls(this.props.calls);
  },

  UNSAFE_componentWillReceiveProps(nextProps) {
    this._setCalls(nextProps.calls);
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  hasUU5CommonCallsMixin() {
    return this.hasMixin("UU5.Common.CallsMixin");
  },

  getUU5CommonCallsMixinProps() {
    return {
      calls: this.getCalls(),
    };
  },

  getUU5CommonCallsMixinPropsToPass() {
    return this.getUU5CommonCallsMixinProps();
  },

  getCalls() {
    if (!this.state.calls) {
      this.showError("callsNotFound", null, { mixinName: "UU5.Common.CallsMixin" });
    }
    return this.state.calls;
  },

  setCalls(calls) {
    this._setCalls(calls);
    return this;
  },

  getCall(item, mixinName) {
    let callNames = mixinName
      ? this.constructor[mixinName]
        ? this.constructor[mixinName].calls
        : null
      : this.constructor.calls;

    let callName = callNames && callNames[item];
    let calls = this.getCalls();
    let call = null;

    if (!callNames) {
      this.showError("staticsCallsNotFound", null, {
        mixinName: "UU5.Common.CallsMixin",
        context: {
          constructor: this.constructor,
        },
      });
    } else if (!callName) {
      this.showError("callNameNotFound", item, {
        mixinName: "UU5.Common.CallsMixin",
        context: {
          calls: calls,
        },
      });
    } else {
      call = calls[callName];

      if (!call) {
        this.showError("callNotFound", callName, {
          mixinName: "UU5.Common.CallsMixin",
          context: {
            calls: calls,
          },
        });
      }
    }

    return call;
  },
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _setCalls(calls) {
    if (calls) {
      typeof calls === "string" && (calls = this.stringToObjectType(calls, "object", Environment.calls));

      this.setState({ calls: calls });
    }
    return this;
  },
  //@@viewOff:private
};

export default CallsMixin;
