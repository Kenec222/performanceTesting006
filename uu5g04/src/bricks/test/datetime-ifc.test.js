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

describe(`UU5.Bricks.DateTime interface testing`, () => {
  it("getFormat()", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        id={"uuID01"}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
      />
    );
    expect(wrapper).toMatchSnapshot();
    const returnValue = wrapper.instance().getFormat();
    expect(returnValue).toEqual("mm.dd.y HH:MM:SS T Z (w/52)");
  });

  it("setFormat()", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime id={"uuID01"} value={new Date(2017, 2, 10, 13, 20, 15, 356)} country="en-us" />
    );
    const mockFunc = jest.fn();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().getFormat()).toBeNull();
    const returnValue = wrapper.instance().setFormat("dd.mm.y HH:MM:SS", mockFunc);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(mockFunc).toBeCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(returnValue === wrapper.instance()).toBe(true);
    expect(wrapper.instance().getFormat()).not.toBeNull();
    expect(wrapper.instance().getFormat()).toMatch(/dd.mm.y HH:MM:SS/);
  });

  //country="en-us

  it("getCountry()", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        country={"en-us"}
        id={"uuID01"}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
      />
    );
    expect(wrapper.instance().getCountry()).toMatch(/en-us/);
    expect(wrapper).toMatchSnapshot();
  });

  it("setCountry(country, setStateCallBack)", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        id={"uuID01"}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
      />
    );
    const mockFunc = jest.fn();
    expect(wrapper.instance().getCountry()).toBe(UU5.Common.Tools.getLanguage());
    expect(wrapper).toMatchSnapshot();
    const returnValue = wrapper.instance().setCountry("en-us", mockFunc);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(mockFunc).toBeCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(returnValue === wrapper.instance()).toBe(true);
    expect(wrapper.instance().getCountry()).not.toBeNull();
    expect(wrapper.instance().getCountry()).toMatch(/en-us/);
  });

  it("getTimeZone() default value is undefined", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        id={"uuID01"}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
        language={"en-us"}
      />
    );
    expect(wrapper.instance().getTimeZone()).toBe(undefined);
    expect(wrapper).toMatchSnapshot();
  });

  it("getTimeZone()", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        id={"uuID01"}
        timeZone={-12.0}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
        language={"en-us"}
      />
    );
    expect(wrapper.instance().getTimeZone()).toBe(-12.0);
    expect(wrapper).toMatchSnapshot();
  });

  it("setTimeZone(timeZone,setStateCallBack)", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime
        id={"uuID01"}
        value={new Date(2017, 2, 10, 13, 20, 15, 356)}
        format="mm.dd.y HH:MM:SS T Z (w/52)"
        language={"en-us"}
      />
    );
    const mockFunc = jest.fn();
    const returnValue = wrapper.instance().setTimeZone(12.0, mockFunc);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(mockFunc).toBeCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(returnValue === wrapper.instance()).toBe(true);
    expect(wrapper.instance().getTimeZone()).toBe(12.0);
  });

  it("setOptions(opt,setStateCallBack)", () => {
    const wrapper = shallow(
      <UU5.Bricks.DateTime id={"uuID01"} value={new Date(2017, 2, 10, 13, 20, 15, 356)} country="cs-cz" /> // requires NodeJS >= 13.x
    );
    const mockFunc = jest.fn();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().getFormat()).toBeNull();
    expect(wrapper.instance().getCountry()).toBe("cs-cz");
    const returnValue = wrapper.instance().setOptions(
      {
        format: "mm.dd.y HH:MM:SS",
        country: "en-us",
        timeZone: 5.0,
      },
      mockFunc
    );
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().getFormat()).not.toBeNull();
    expect(wrapper.instance().getCountry()).not.toBeNull();
    expect(wrapper.instance().getTimeZone()).not.toBeNull();
    expect(wrapper.instance().getFormat()).toMatch(/mm.dd.y HH:MM:SS/);
    expect(wrapper.instance().getCountry()).toMatch(/en-us/);
    expect(wrapper.instance().getTimeZone()).toBe(5.0);
    expect(mockFunc).toBeCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(returnValue === wrapper.instance()).toBe(true);
  });
});
