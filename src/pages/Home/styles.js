import { createUseStyles } from "react-jss";

export const useNavBarStyles = createUseStyles({
    mainPageContainer: (isMenuOpen) => ({
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        position: isMenuOpen ? "fixed" : "",
        overflow: isMenuOpen ? "hidden" : "",
        overflowX: "hidden"
    }),
    NavBarContainer: {
        background: "#fff",
        width: "100%",
        height: "45px",
        position: "sticky"
    },
    navBar: {
        width: "100%",
        height: "45px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    navBarMenuTitleContainer: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "50px"
    },
    navBarInfoContainer: {
        marginRight: "80px",
        width: "300px",
        display: "flex",
        justifyContent: "space-evenly"
    },
    navBarLinkHome: {
        width: "100%"
    },
    burgerMenuIcon: {
        display: "inline-block",
        marginLeft: "37px",
        cursor: "pointer",
        color: "#5d5987"
    },
    sideModal: {
        background: "rgba(0, 0, 0, 0.301)",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 10
    },
    "@media screen and (max-width:500px)": {
        navBarMenuTitleContainer: {
            marginLeft: 0
        },
        navBarInfoContainer: {
            marginRight: 0
        }
    },
    "@media screen and (max-width:768px)": {
        navBarInfoContainer: {
            marginRight: 0
        }
    }
});

export const useBurgerMenuStyles = createUseStyles({
    burgerMenuContainer: {
        width: "230px",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        zIndex: 11,
        position: "absolute",
        overflow: "auto",
        "&::-webkit-scrollbar": {
            width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#5d5987",
            borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
        }
    },
    burgerMenuItem: {
        textDecoration: "none",
        color: "#1DD4CE",
        fontFamily: "unset",
        padding: "14px",
        "&:hover": {
            borderBottom: "0.5px solid #1DD4CE"
        }
    },
    componentContainer: {
        height: "85%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});

export const useBodyStyles = createUseStyles({
    bodyContainer: {
        background: "#1DD4CE",
        width: "110%",
        height: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    logo: {
        width: "411px",
        marginTop: "-200px",
        zIndex: 0,
        marginLeft: "-200px"
    },
    bodyDescription: {
        marginTop: "-177px",
        marginLeft: "-89px",
        fontWeight: "480",
        color: "#fff",
        letterSpacing: "0.20rem",
        fontSize: "14px",
        fontFamily: "unset",
        zIndex: 1
    },
    "@media screen and (max-height: 238px)": {
        logo: {
            marginTop: "-124px"
        }
    },
    "@media screen and (max-width: 375px)": {
        bodyDescription: {
            fontSize: "13px"
        }
    },
    "@media screen and (max-width: 768px)": {
        logo: {
            width: "300px",
            marginTop: "-122px",
            marginLeft: "-32px"
        },
        bodyDescription: {
            marginTop: "-128px",
            fontSize: "12px",
            marginLeft: "51px"
        },
        bodyContainer: {
            height: "62%"
        }
    },
});

export const useDescriptionStyles = createUseStyles({
    decriptionContainer: {
        width: "110%",
        background: "#fff",
        height: "49%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    usageInfoContainer: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    easyToUseIconContainer: {
        width: "200px",
        marginTop: "40px",
    },
    reactInfoText: {
        width: "219px",
        fontSize: "13px",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "2px",
        fontWeight: "400",
        marginLeft: "-40px"
    },
    easyToUseText: {
        width: "226px",
        fontSize: "13px",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "2px",
        fontWeight: "400",
        marginLeft: "-80px"
    },
    instalInfoContainer: {
        width: "10%",
        display: "flex",
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    installIconContainer: {
        width: "200px",
        display: "flex",
        justifyContent: "center",
    },
    reactInfoContainer: {
        width: "32%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "40px"
    },
    reactIconContainer: {
        marginTop: "-10px",
        marginRight: "-50px",
        width: "200px"
    },
    instalationCode: {
        padding: "13px",
        marginTop: "30px",
        color: "white",
        background: "#555273",
        fontSize: "13px",
        textAlign: "center",
        letterSpacing: "2px",
        fontWeight: "400",
    },
    icons: {
        width: "112px",
        height: "112px"
    },
    "@media screen and (max-width: 768px)": {
        decriptionContainer: {
            flexDirection: "column",
            height: "fit-content",
            alignItems: "center"
        },
        easyToUseIconContainer: {
            display: "flex",
            justifyContent: "center"
        },
        instalInfoContainer: {
            width: "fit-content",
            marginLeft: "-6px"
        },
        usageInfoContainer: {
            width: "fit-content"
        },
        reactInfoContainer: {
            width: "fit-content",
            marginLeft: "-23px"
        },
        easyToUseText: {
            marginLeft: "-33px"
        },
        reactIconContainer: {
            display: "flex",
            justifyContent: "center",
            marginRight: 0
        },
        reactInfoText: {
            marginLeft: 0
        }
    },
    "@media screen and (max-height: 396px)": {
        icons: {
            width: "40px",
            height: "40px"
        },
        easyToUseText: {
            fontSize: "11px",
            marginLeft: "-136px"
        },
        instalationCode: {
            padding: "10px",
            fontSize: "11px"
        },
        reactInfoText: {
            fontSize: "11px",
            marginLeft: "-104px"
        }
    }
});

export const useFooterStyles = createUseStyles({
    footerWrapper: {
        width: "110%",
        height: "20%",
        background: "#1DD4CE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footerLogoContainer: {
        width: "133px",
        height: "60px",
        display: "flex",
        marginTop: "-40px",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "-200px"
    },
    logo: {
        width: "130px",
    },
    footerText: {
        fontSize: "12px",
        color: "#555273",
        fontFamily: "serif",
        letterSpacing: "2px",
        fontWeight: "400",
        zIndex: 1,
        "&:hover": {
            color: "white"
        }
    },
    "@media screen and (max-width: 768px)": {
        footerLogoContainer: {
            marginLeft: "-51px"
        }
    }
});
