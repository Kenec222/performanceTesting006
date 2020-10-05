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

import UU5 from "uu5g04";
import "uu5g04-bricks";

const { mount, shallow, wait } = UU5.Test.Tools;

const CONFIG = {
  mixins: [
    "UU5.Common.BaseMixin",
    "UU5.Common.ElementaryMixin",
    "UU5.Common.ContentMixin",
    "UU5.Common.NestingLevelMixin",
    "UU5.Common.PureRenderMixin",
  ],
  props: {},
  requiredProps: {
    parent: shallow(<UU5.Bricks.NavBar id="parentId" />).instance(),
    children: [
      <UU5.Bricks.NavBar.Nav id={"child01"}>
        <UU5.Bricks.NavBar.Nav.Item d={"child02"}>News</UU5.Bricks.NavBar.Nav.Item>
      </UU5.Bricks.NavBar.Nav>,
    ],
  },
  opt: {
    shallowOpt: {
      disableLifecycleMethods: false,
    },
  },
};

describe(`UU5.Bricks.NavBar.Header props`, () => {
  UU5.Test.Tools.testProperties(UU5.Bricks.NavBar.Header, CONFIG);
});

describe(`UU5.Bricks.NavBar.Header docKit example`, () => {
  it(`UU5.Bricks.NavBar.Header example01`, () => {
    const wrapper = shallow(
      <UU5.Bricks.NavBar id={"uuID"}>
        <UU5.Bricks.NavBar.Header id={"uuID2"} content="Header" />
      </UU5.Bricks.NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
