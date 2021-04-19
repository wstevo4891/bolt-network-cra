import React from "react";
import { shallow } from "enzyme";

import NotFound from "../NotFound";

describe("<NotFound />", () => {
  it("should match inline snapshot", () => {
    const wrapper = shallow(<NotFound query="foo" />);

    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="search-results"
      >
        <DisplayContainer>
          <div
            className="row justify-content-center"
          >
            <div
              className="not-found"
            >
              <p
                className="not-found-query"
              >
                Your search for "
                foo
                " did not have any matches.
              </p>
              <p>
                Suggestions:
              </p>
              <ul>
                <li>
                  Try different keywords
                </li>
                <li>
                  Try using a movie title
                </li>
                <li>
                  Try a genre, like comedy, romance, action, or drama
                </li>
              </ul>
            </div>
          </div>
        </DisplayContainer>
      </div>
    `);
  });
});
