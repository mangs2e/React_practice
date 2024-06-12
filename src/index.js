import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//react-dom 라이브러리는 반드시 필요! -> HTML의 DOM 노드를 JSX로 바꿔줌

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//ReactDOM.render(화면에 표시할 JSX, 리액프 애플리케이션이 들어갈 HTML)
root.render(<App />, document.getElementById("root"));
