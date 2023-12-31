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
import "uu5g04-bricks";

const { mount, shallow, wait } = UU5.Test.Tools;

let origDateNow = Date.now;
beforeEach(() => {
  Date.now = () => new Date(1548411167098);
});
afterEach(() => {
  Date.now = origDateNow;
});

let firstDate = new Date(2019, 0, 1).getTime();
let lastDate = new Date(2019, 0, 31).getTime();

describe(`UU5.Bricks.Calendar interface function`, () => {
  it(`UU5.Bricks.Calendar getValue`, () => {
    const wrapper = mount(<UU5.Bricks.Calendar value={new Date(firstDate)} />);
    expect(wrapper.instance().getValue().getTime()).toEqual(firstDate);
    wrapper.unmount();
  });

  it(`UU5.Bricks.Calendar setValue`, () => {
    const wrapper = mount(<UU5.Bricks.Calendar />);
    expect(wrapper.instance().state.value).toBe(null);
    wrapper.instance().setValue(new Date(lastDate));
    expect(wrapper.instance().state.value.getTime()).toEqual(lastDate);
    wrapper.unmount();
  });

  it(`UU5.Bricks.Calendar setNext`, () => {
    const wrapper = mount(<UU5.Bricks.Calendar />);
    let oldMonth = wrapper.find(".uu5-bricks-calendar-head-cell-header").instance().innerHTML.match(/\w+/)[0];
    wrapper.instance().setNext();
    wrapper.update();
    let newMonth = wrapper.find(".uu5-bricks-calendar-head-cell-header").instance().innerHTML.match(/\w+/)[0];
    expect(oldMonth).not.toMatch(newMonth);
    wrapper.unmount();
  });

  it(`UU5.Bricks.Calendar setPrevious`, () => {
    const wrapper = mount(<UU5.Bricks.Calendar />);
    let oldMonth = wrapper.find(".uu5-bricks-calendar-head-cell-header").instance().innerHTML.match(/\w+/)[0];
    wrapper.instance().setPrevious();
    wrapper.update();
    let newMonth = wrapper.find(".uu5-bricks-calendar-head-cell-header").instance().innerHTML.match(/\w+/)[0];
    expect(oldMonth).not.toMatch(newMonth);
    wrapper.unmount();
  });
});
