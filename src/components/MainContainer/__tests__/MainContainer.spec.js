import React from "react";
import { shallow, mount } from "enzyme";

import MainContainer from "../MainContainer";

global.innerWidth = 1450;

describe("<MainContainer />", () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      children: [],
      setSlideLength: jest.fn(),
      slideLength: null,
    };
  });

  describe("with default props", () => {
    beforeEach(() => {
      wrapper = shallow(<MainContainer {...props} />);
    });

    it("should not render", () => {
      expect(wrapper.exists("#main-container")).toBe(false);
    });

    it("should call setSlideLength", () => {
      expect(props.setSlideLength).toHaveBeenCalled();
    });
  });

  describe("when slideLength is defined", () => {
    beforeEach(() => {
      wrapper = shallow(<MainContainer {...props} slideLength={6} />);
    });

    it("should render", () => {
      expect(wrapper.exists("#main-container")).toBe(true);
    });

    it("should not call setSlideLength", () => {
      expect(props.setSlideLength).not.toHaveBeenCalled();
    });

    it("should match inline snapshot", () => {
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          id="main-container"
        />
      `);
    });
  });

  describe('when window size changes', () => {
    it('should call setSlideLength', () => {
      mount(<MainContainer {...props} slideLength={6} />);
      global.innerWidth = 500
      global.dispatchEvent(new Event('resize'))

      expect(props.setSlideLength).toHaveBeenCalled();
    })
  })
});
