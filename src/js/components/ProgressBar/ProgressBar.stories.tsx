import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import ProgressBar from "./ProgressBar";

const stories = storiesOf("ProgressBar", module);

const sizeOptions = {
  xsmall: "xsmall",
  small: "small",
  default: null,
  large: "large",
  xlarge: "xlarge"
};

stories.add("Default", () => <ProgressBar progress={33} />);

stories.add(
  "Vertical Bars",
  () => {
    const size = select("size", sizeOptions);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: 100 + "px" }}
          isVertical={true}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: 150 + "px" }}
          isVertical={true}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: 200 + "px" }}
          isVertical={true}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: 250 + "px" }}
          isVertical={true}
        />
      </div>
    );
  },
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 500, leading: false }
    }
  }
);

stories.add(
  "Progress Colors",
  () => {
    const size = select("size", sizeOptions);

    return (
      <div>
        <h4>Neutral</h4>
        <ProgressBar progress={33} color="neutral" size={size} />
        <br />
        <h4>Negative</h4>
        <ProgressBar progress={66} color="negative" size={size} />
        <br />
        <h4>Highlight</h4>
        <ProgressBar progress={66} color="highlight" size={size} />
        <br />
        <h4>Default Color</h4>
        <ProgressBar progress={100} size={size} />
        <br />
      </div>
    );
  },
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 500, leading: false }
    }
  }
);
