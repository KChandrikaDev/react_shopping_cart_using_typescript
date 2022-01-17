import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Main from "./Main";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Suspense
      fallback={
        <div
          style={{
            marginTop: "200px",
            fontSize: "24px",
            fontWeight: "300px",
          }}
          className=" text-center text-primary"
        >
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
