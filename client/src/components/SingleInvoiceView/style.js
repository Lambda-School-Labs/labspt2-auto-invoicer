
export default theme => ({
  paper: {
    width: "95%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    margin: "20px auto",
    border: "1px solid #eff7f2"
  },
  appbar: {
    backgroundColor: "#eff7f2",
    position: "static"
  },
  table: {
    minWidth: 1000,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      minWidth: 0,
    }
  },
  tablecell: {
    fontSize: 30,
    align: "center"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableWrapper: {
    overflowX: "auto"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    fontSize: 25,
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: 40
    }
  },
  headerTitle: {
    fontSize: 35,
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontSize: 50
    }
  }
});
