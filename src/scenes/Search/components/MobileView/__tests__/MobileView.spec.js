import React from "react";
import { shallow } from "enzyme";

import MobileView from "../MobileView";

const GENRES = [{ title: "Action" }, { title: "Sci-Fi" }];

const MOVIES = [
  { title: "The Avengers" },
  { title: "Alien" },
  { title: "Avatar" },
];

const PEOPLE = [
  { name: "Ridley Scott" },
  { name: "James Cameron" },
  { name: "Joss Whedon" },
];

describe("<MobileView />", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      resultsProps: {
        name: "Search_Results",
        movies: MOVIES,
        slideLength: 6,
      },
      suggestionsProps: {
        data: {
          genres: GENRES,
          movies: MOVIES,
          people: PEOPLE,
          query: "foo",
        },
        handleClick: jest.fn(),
      },
    };
  });

  it("should match snapshot", () => {
    wrapper = shallow(<MobileView {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
