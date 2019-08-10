import { styled } from "styletron-react";
import Link from "next/link";

// statically styled component
// export const StyledLink = styled("a", {
//   cursor: "pointer",
//   marginRight: "15px"
// });

export const Heading = styled("header", {
  background: "url(/static/images/txture.png) #222",
  background: "url(/static/images/dark_stripes.png) #222",
  position: "relative",
  padding: "2em",
  width: "100%",
  minHeight: "100px",
  color: "#ddd",
  borderBottom: "1px solid #ccc"
  // @include boxshadow(0 4px 8px rgba(0,0,0,0.3));
});

export const Group = styled("hgroup", {
  textShadow: "1px 1px 0 #000",
  // @include transition(all, 0.5s);
  ":hover": {
    textShadow: "0 0 4px #555"
  }
});

export const StyledLink = styled("span", {
  padding: "0 25px 0 0",
  marginRight: "25px",
  color: "red"
});
