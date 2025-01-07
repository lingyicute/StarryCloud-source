import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    logo: {
        width: "80px",
        height: "80px",
        [theme.breakpoints.up("sm")]: {
            width: "120px",
            height: "120px",
        },
        [theme.breakpoints.up("md")]: {
            width: "160px",
            height: "160px",
        },
        [theme.breakpoints.up("lg")]: {
            width: "200px",
            height: "200px",
        },
        animation: "$fadeInOut 1.5s ease-in-out infinite",
    },
    "@keyframes fadeInOut": {
        "0%": {
            opacity: 0.4,
        },
        "50%": {
            opacity: 1,
        },
        "100%": {
            opacity: 0.4,
        },
    },
}));

function PageLoading() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img
                src="/static/img/cloudreve.svg"
                alt="Loading..."
                className={classes.logo}
            />
        </div>
    );
}

export default PageLoading;
