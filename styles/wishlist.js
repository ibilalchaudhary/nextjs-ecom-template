import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  cardEven: {
    alignContent: "center",
    maxWidth: "47.5vw",
    margin: [["1.5vw", "1vw", 0, "1.5vw"], "!important"]
  },
  cardOdd: {
    alignContent: "center",
    maxWidth: "47.5vw",
    margin: [["1.5vw", "1.5vw", 0, "1vw"], "!important"]
  },
  "@media (min-width: 769px) and (orientation: landscape)": {
    cardEven: {
      maxWidth: "26.625‬vh",
      margin: [["1vh", "0.5vh", 0, "1vh"], "!important"]
    },
    cardOdd: {
      maxWidth: "26.625‬vh",
      margin: [["1vh", "1vh", 0, "0.5vh"], "!important"]
    },
    subheading: {
      marginLeft: "1vh"
    },
    grid: {
      padding: [[0, 0, "1vh", 0], "!important"]
    }
  },
  "@media (max-width: 768px) and (orientation: portrait)": {
    cardEven: {
      maxWidth: "47.5vw",
      margin: [["1.5vw", "1vw", 0, "1.5vw"], "!important"]
    },
    subheading: {
      marginLeft: "2vw"
    },
    cardOdd: {
      maxWidth: "47.5vw",
      margin: [["1.5vw", "1.5vw", 0, "1vw"], "!important"]
    },
    grid: {
      padding: [[0, 0, "1vw", 0], "!important"]
    }
  },
  //===============================================================
  subheading: {
    textAlign: "left",
    fontSize: 13,
    marginLeft: "2vw"
  },
  title: {
    textAlign: "center",
    fontStyle: "bold",
    fontSize: 14
  },
  body: {
    fontSize: 12
  },
  price: {
    textAlign: "center",
    fontSize: 14
  },
  grid: {
    padding: [[0, 0, "1vw", 0]],
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "#f1f3f6"
  },
  bodyContainer: {
    height: "93vh",
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  cardAction: {
    justifyContent: "center"
  }
}));
