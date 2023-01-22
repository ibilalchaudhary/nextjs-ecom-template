import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  pageContainer: {
    backgroundColor: "#f1f3f6",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative"
  },
  emptyCart: {
    height: "100%",
    width: "100%"
  },
  bodyContainer: {
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0
  },
  ListContainer: {
    height: "80vh",
    width: "100%",
    padding: 0,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },

  BottomBtnContainerBtn: {
    height: "100%",
    width: "48%",
    borderRadius: "0.5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonFont: {
    fontSize: "0.875rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em"
  },
  totalLabel: {
    fontSize: "0.7rem",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    fontWeight: 500,
    lineHeight: 1.5,
    textTransform: "uppercase",
    color: "#666",
    marginRight: "0.2rem"
  },
  subItemLeft: {
    height: "100%",
    width: "50%",
    padding: 0,
    backgroundColor: "#fff",
    borderRadius: "0.5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  subItemLeftInner: {
    // height: "calc(100% - 2vh)",
    width: "100%",
    backgroundColor: "#fff"
  },

  subItemRight: {
    height: "100%",
    width: "46%",
    padding: 0,
    //margin: [["4vh", 0], "!important"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  subItemRightInnerTop: {
    height: "65%",
    width: "100%",
    borderRadius: "0.5vh",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  subItemRightInnerTopTop: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "80%",
    fontSize: "large",
    fontWeight: 500,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  subItemRightInnerTopcenter: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "80%",
    fontSize: "large",
    fontWeight: 600,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em"
  },
  subItemRightInnerTopButtom: {
    width: "80%",
    margin: [["12%", 0], "!important"],
    display: "flex",
    alignItems: "center"
  },
  subItemRightInnerTopButtomLeft: {
    fontSize: "large",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "75%"
  },
  subItemRightInnerTopButtomRigth: {
    fontSize: "small",
    textDecoration: "underline",
    color: "#666",
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em",
    width: "25%"
  },
  subItemRightInnerBottom: {
    display: "flex",
    width: "100%",
    height: "25%",
    justifyContent: "space-between"
  },
  subItemRightInnerBottomBtn: {
    borderRadius: "0.5vh",
    minWidth: ["30%", "!important"],
    height: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  subItemRightInnerBottomBtnBtw: {
    borderRadius: "0.5vh",
    height: "100%",
    width: "30%",
    backgroundColor: "#fff",
    color: "grey",
    display: "flex",
    fontSize: "large",
    fontWeight: 600,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em",
    alignItems: "center",
    justifyContent: "center"
  },
  subItemRightInnerBottomBtnBlack: {
    borderRadius: "0.5vh",
    height: "100%",
    width: "30%",
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Item: {
    height: "28vh",
    width: "94vw",
    padding: 0,
    margin: [["4vh", "3vw"], "!important"],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  BottomBtnContainer: {
    height: "9vh",
    width: "92vw",
    margin: [["2vh", "4vw"], "!important"],
    display: "flex",
    justifyContent: "space-between"
  },
  "@media (min-width: 769px) and (orientation: landscape)": {
    Item: {
      width: "52.25vh",
      height: "28vh",
      margin: [["4vh", "2vh"], "!important"]
    },
    BottomBtnContainer: {
      width: "52.25vh",
      margin: [["2vh", "2vh"], "!important"]
    }
  },
  "@media (max-width: 768px) and (orientation: portrait)": {
    Item: {
      width: "92vw",
      height: "28vh",
      padding: 0,
      margin: [["4vh", "4vw"], "!important"]
    },
    BottomBtnContainer: {
      width: "92vw",
      margin: [["2vh", "4vw"], "!important"]
    }
  }
}));
