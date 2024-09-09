const person = {
  name: "John Doe",
  age: 30,
};

console.log(Object.entries(person));

import DOMPurify from "dompurify";
const dirtyHTML = "<h1 style='color:blue'>Some really useFul content </h1>";
const cleanHTML = DOMPurify.sanitize(dirtyHTML);

<div dangerouslySetInnerHtml={{ __html: cleanHTML }} />;

import ReactHtmlParser from "react-html-parser";
