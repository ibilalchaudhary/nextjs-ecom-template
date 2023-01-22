import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(theme => ({
  pageContainer: {
    backgroundColor: "#f1f3f6",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative"
  },
  bodyContainer: {
    width: "100%",
    height: "83vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: '0.02857em'
  },
  detail: {
    width: "92%",
    height: "100%",
    position: "relative",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  spaceAccumodator: { height: "20vh" },
  carousel: {
    width: "45vh",
    height: "45vh"
  },
  addToCart: {
    position: "absolute",
    zIndex: 55,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  addToCartBtn: {
    borderRadius: "0.5vh !important",
    width: "92%",
    height: "80%"
  },

  carouselContainer: {
    borderRadius: "0.5vh",
    width: "100%",
    height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: [["2%", 0]],
    position: "relative"
  },
  imagesRowContainer: { width: "100%" },
  infoContainer: {
    width: "100%",
    margin: [["2%", 0]],
    // backgroundColor: "#747",
    display: "flex",
    justifyContent: "center"
  },
  infoContainerItemleft: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "0.5vh",
    fontWeight: 500
  },
  infoContainerItemleftTop: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "90%",
    fontSize: "large",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
  },
  infoContainerItemleftcenter: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "90%",
    fontSize: "large",
    margin: [["2%", 0], "!important"],
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em"
  },
  infoContainerItemleftButtom: {
    width: "90%",
    margin: [["2%", 0], "!important"],
    display: "flex",
    alignItems: "center"
  },
  infoContainerItemleftButtomLeft: {
    fontSize: "large",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  infoContainerItemleftButtomRigth: {
    fontSize: "small",
    textDecoration: "underline",
    color: "#666",
    textAlign: "right",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em",
    width: "25%"
  },
  infoContainerItemRight: {
    width: "50%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomRightRadius: "2vh",
    borderTopRightRadius: "2vh"
  },
  colorText: {
    color: "#666",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em"
  },
  infoContainerItemRightTop: {
    width: "90%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#666",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em"
  },
  infoContainerItemRightCenter: {
    width: "90%",
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainerItemRightBottom: {
    width: "90%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  moreInfoContainer: { width: "100%", flexDirection: "column" },
  sizeChartOpenerBtn: { margin: [["0.5vh", 0]] },
  sizeSelectedBtn: {
    width: "90%",
    height: "90%",
    borderRadius: "0.5vh",
    "& span": {
      display: "inline",
      letterSpacing: "0.00938em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      fontSize: "3vh",
      fontWeight: "bold",
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
    }
  },
  relatedItemsText: {
    margin: [["2%", 0, 0, 0]],
    color: "#666",
    fontWeight: "bold",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    letterSpacing: "0.00938em"
  },
  relatedItemText: {
    margin: [[0, "4%"]],
    fontSize: "small",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  relatedItemPrice: {
    margin: [[0, "4%"]],
    fontSize: "medium",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  relatedItemsContainer: {
    display: "flex",
    width: "100%",
    height: "25vh",
    // backgroundColor: "#fff555",
    borderRadius: "0.5vh",
    margin: [[0, 0, "2vh", 0]],
    overflowX: "scroll",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  descriptionContainer: {
    padding: "2vh",
    backgroundColor: "#fff",
    borderRadius: "0.5vh"
  },
  imagesRow: {
    height: "6.5vh",
    width: "100%",
    alignItems: "center",
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  itemImages: {
    borderRadius: "0.5vh",
    width: "100%"
    // height: "45vh"
  },
  relatedItem: {
    height: "25vh",
    minWidth: "15vh",
    maxWidth: "15vh",
    backgroundColor: "#fff",
    margin: [[0, "1vh"]],
    borderRadius: "0.5vh"
  },
  relatedItem0: {
    height: "25vh",
    minWidth: "15vh",
    maxWidth: "15vh",
    backgroundColor: "#fff",
    margin: [[0, "1vh", 0, 0]],
    borderRadius: "0.5vh"
  },
  relatedItemImages: {
    height: "15vh",
    width: "100%",
    borderRadius: "0.5vh"
  },
  imagesRowItem: {
    height: "6vh",
    borderRadius: "0.5vh",
    margin: [[0, "1vh"]]
  },
  imagesRowItemSelected: {
    height: "6vh",
    borderRadius: "0.5vh",
    margin: [[0, "0.5vh"]],
    border: [["thin", "solid", "#111"]]
  },
  clearArea: {
    backgroundColor: "#00000055",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3vh",
    width: "6vh",
    height: "6vh"
  },
  clearAreawoBG: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5vh",
    width: "6vh",
    height: "6vh"
  },
  wishlistContainer: {
    width: "6vh",
    height: "6vh",
    zIndex: 44,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "2%",
    top: "2%"
  },
  "@media (min-width: 769px) and (orientation: landscape)": {
    imagesRowItem: {
      margin: [[0, "0.5vh"]]
    },
    imagesRowItemSelected: {
      margin: [[0, "0.5vh"]]
    }
    //wishlistContainer: { right: "2vh" }
  },
  "@media (max-width: 768px) and (orientation: portrait)": {
    imagesRowItem: {
      margin: [[0, "0.5vh"]]
    },
    imagesRowItemSelected: {
      margin: [[0, "0.5vh"]]
    }
    // wishlistContainer: { right: "2vw" }
  }
}));
