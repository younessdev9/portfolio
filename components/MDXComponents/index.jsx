import {
  MyHeading1,
  MyHeading2,
  MyHeading3,
  MyParagraph,
  MyOl,
  MyUl,
  MyLink,
  HLight,
  Quote,
} from "./styles";
import CodeBlock from "../CodeBlock";

const components = {
  // eslint-disable-next-line react/display-name
  h1: (props) => <MyHeading1 {...props} />,
  // eslint-disable-next-line react/display-name
  h2: (props) => <MyHeading2 {...props} />,
  // eslint-disable-next-line react/display-name
  h3: (props) => <MyHeading3 {...props} />,
  // eslint-disable-next-line react/display-name
  p: (props) => <MyParagraph {...props} />,
  // eslint-disable-next-line react/display-name
  ol: (props) => <MyOl {...props} />,
  // eslint-disable-next-line react/display-name
  ul: (props) => <MyUl {...props} />,
  // eslint-disable-next-line react/display-name
  a: (props) => <MyLink target="_blank" {...props} />,
  // eslint-disable-next-line react/display-name
  Code: (props) => <CodeBlock {...props} />,
  // eslint-disable-next-line react/display-name
  HLight: (props) => <HLight {...props} />,
  // eslint-disable-next-line react/display-name
  Quote: (props) => <Quote {...props} />,
};

export default components;
