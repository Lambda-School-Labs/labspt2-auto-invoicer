import React from "react";
import { render } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import InvoiceList from "../InvoiceList";

describe("<InvoiceList />", () => {
  it("renders Invoice List view", () => {
    render(
      <Router>
        <InvoiceList />
      </Router>
    );
  });
});
