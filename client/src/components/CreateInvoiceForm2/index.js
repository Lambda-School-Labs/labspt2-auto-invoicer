import React, { Component } from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import styled from "styled-components";

import InvoiceNumberInput from "./InvoiceNumberInput";
import DateIssue from "./DateIssue";
import DueDate from "./DueDate";
import InvoiceDescription from "./InvoiceDescription";
import UploadLogo from "./UploadLogo";
import BillTo from "./BillTo";
import InvoiceItemInput from "./InvoiceItemInput";
import InvoiceItemTableHead from "./InvoiceItemTableHead";
import InvoiceBalance from "./InvoiceBalance";
import InvoiceNotesTerms from "./InvoiceNotesTerms";

const StyledSection = styled.section`
  display: flex;
  buttonjustify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  height: 125px;
`;

const StyledAddress = styled.section`
  padding-top: 10px;
  padding-left: 10px;
  height: 475px;
`;

const StyledInvoiceItem = styled.section`
  padding-top: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  height: auto;
`;

const StyledInvoiceBalance = styled.section`
  padding-top: 25px;

  display: flex;
  justify-content: space-around;
`;

class CreateInvoiceForm2 extends Component {
  state = {
    invoiceNumber: "",
    invoiceDescription: "",
    selectedDate: new Date(),
    invoiceDueDate: new Date(),
    billToItems: [
      { address1: "", address2: "", city: "", state: "", zip: "", email: "" }
    ],
    invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }],
    invoiceBalanceItems: [
      {
        subtotal: "",
        discount: "",
        tax: "",
        shipping: "",
        total: "",
        amountPaid: ""
      }
    ],
    invoiceNotesTermsItems: [{ notes: "", terms: "" }]
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleInvoiceDueDateChange = date => {
    this.setState({ invoiceDueDate: date });
  };

  handleBillToItemsChange = event => {
    if (
      ["address1", "address2", "city", "state", "zip", "email"].includes(
        event.target.className
      )
    ) {
      const billToItems = [...this.state.billToItems];
      billToItems[event.target.dataset.id][
        event.target.className
      ] = event.target.value.toUpperCase();
      this.setState({ billToItems }, () => console.log("Bill To Items"));
    } else {
      this.setState({ [event.target.name]: event.target.value.toUpperCase() });
    }
  };

  handleInvoiceItemsInputChange = e => {
    if (["item", "quantity", "rate", "amount"].includes(e.target.className)) {
      const invoiceItems = [...this.state.invoiceItems];
      invoiceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceItems }, () => console.log("Invoice Items"));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addInvoiceItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      invoiceItems: [
        ...prevState.invoiceItems,
        { item: "", quantity: "", rate: "", amount: "" }
      ]
    }));
  };

  handleInvoiceBalanceItemsChange = e => {
    if (
      [
        "subtotal",
        "discount",
        "tax",
        "shipping",
        "total",
        "amountPaid"
      ].includes(e.target.className)
    ) {
      const invoiceBalanceItems = [...this.state.invoiceBalanceItems];
      invoiceBalanceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceBalanceItems }, () =>
        console.log("Invoice Balance Items")
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  handleInvoiceNotesTermsItemsChange = e => {
    if (["notes", "terms"].includes(e.target.className)) {
      const invoiceNotesTermsItems = [...this.state.invoiceNotesTermsItems];
      invoiceNotesTermsItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceNotesTermsItems }, () =>
        console.log("Invoice Notes & Terms items")
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  // handleClearForm = e => {
  //   e.preventDefault();
  //   this.setState({
  //     invoiceNumber: "",
  //     invoiceDescription: ""
  //   });
  // };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      // invoiceNumber: "",
      // invoiceDescription: ""
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Paper className={classes.paper}>
          <div className={classes.container}>
            <StyledSection>
              <Grid item xs={6}>
                <InvoiceNumberInput
                  onChangeHandler={this.handleInputChange("invoiceNumber")}
                  value={this.state.invoiceNumber}
                />
              </Grid>
              <Grid item xs={6}>
                <DateIssue
                  onChangeHandler={this.handleDateChange}
                  value={this.state.selectedDate}
                />
              </Grid>
              <Grid item xs={3}>
                <DueDate
                  onChangeHandler={this.handleInvoiceDueDateChange}
                  value={this.state.invoiceDueDate}
                />
              </Grid>
            </StyledSection>
            <StyledSection>
              <Grid item xs={9}>
                <InvoiceDescription
                  onChangeHandler={this.handleInputChange("invoiceDescription")}
                  value={this.state.invoiceDescription}
                />
              </Grid>
              <Grid item xs={3}>
                <UploadLogo />
              </Grid>
            </StyledSection>
            <StyledAddress>
              <Grid item xs={4}>
                <form
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleBillToItemsChange}
                >
                  <BillTo billToItems={this.state.billToItems} />
                </form>
              </Grid>
            </StyledAddress>
            <StyledInvoiceItem>
              <Grid item xs={12}>
                <form
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleInvoiceItemsInputChange}
                >
                  <InvoiceItemTableHead />
                  <InvoiceItemInput invoiceItems={this.state.invoiceItems} />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.addInvoiceItem}
                  >
                    Add Line Item +
                  </Button>
                </form>
              </Grid>
            </StyledInvoiceItem>
            <StyledInvoiceBalance>
              <Grid item xs={4}>
                <form
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleInvoiceNotesTermsItemsChange}
                >
                  <InvoiceNotesTerms
                    invoiceNotesTermsItems={this.state.invoiceNotesTermsItems}
                  />
                </form>
              </Grid>
              <Grid item xs={4}>
                <form
                  onSubmit={this.handleFormSubmit}
                  onChange={this.handleInvoiceBalanceItemsChange}
                >
                  <InvoiceBalance
                    invoiceBalanceItems={this.state.invoiceBalanceItems}
                  />
                </form>
              </Grid>
            </StyledInvoiceBalance>
            <Button
              onClick={this.handleFormSubmit}
              variant="contained"
              color="primary"
            >
              Generate
            </Button>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateInvoiceForm2);
