import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "fixed",
    top: "50%",
    bottom: "50%",
    left: "0",
    transform: "translateY(-50%)",
    width: "200px",
    height: "200px",
    backgroundColor: "lightblue",
    border: "1px solid gray",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    zIndex: "999",
  },
}));

const Boxi = () => {
  const classes = useStyles();
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setTopPosition(scrollTop + window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={classes.box} />;
  //style={{ top: topPosition }} />;
};

export default Boxi;