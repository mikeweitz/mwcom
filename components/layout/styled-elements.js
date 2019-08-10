import { styled } from "styletron-react";

// statically styled component
export const Title = styled("h1", {
  color: "red",
  fontSize: "82px"
});

// dynamically styled component
export const SubTitle = styled("h2", ({ $size }) => ({
  color: "blue",
  fontSize: `${$size}px`
}));
