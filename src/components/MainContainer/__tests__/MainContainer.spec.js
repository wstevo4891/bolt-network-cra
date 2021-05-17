import React from "react";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react'

import MainContainer from "../MainContainer";

const mockStore = configureStore([thunk]);

describe("<MainContainer />", () => {
  let element, store;

  const renderComponent = () => render(
    <Provider store={store}>
      <MainContainer>
        <p>Hello World</p>
      </MainContainer>
    </Provider>
  );

  beforeEach(() => {
    store = mockStore({
      slideLength: {
        value: null,
      },
    });
  });

  describe("when slideLength is null", () => {
    it("should not render", () => {
      renderComponent();
      element = screen.queryByTestId("main-container");
      expect(element).toBeNull();
    });
  });

  describe("when slideLength is defined", () => {
    it("should render", () => {
      store = mockStore({
        slideLength: {
          value: 6,
        },
      });
      renderComponent();
      element = screen.getByTestId("main-container");
      expect(element).not.toBeNull();
    });
  });
});
