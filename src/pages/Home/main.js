import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DescriptionContainer from "./description";
import { Routes } from "../../helper/routes";
import BurgerMenu from "./burgerMenu";
import NavBar from "./navBar";
import Body from "./body";
import Footer from "./footer";
import { useNavBarStyles } from "./styles";

const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const classes = useNavBarStyles(isMenuOpen);

    return (
        <div className={classes.mainPageContainer}>
            <Router basename='/easy-ui-web'>
                <Switch>
                    {Routes.map(({ route, component: Component }) => (
                        <Route exact path={route} className="route" key={route}>
                            <NavBar clicked={() => setIsMenuOpen(!isMenuOpen)} />
                            {isMenuOpen && (
                                <RenderBurgerMenu
                                    className={classes.sideModal}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                />
                            )}
                            <Component key={route} />
                        </Route>
                    ))}
                    <Route path="/">
                        <div className={classes.mainPageContainer}>
                            <NavBar clicked={() => setIsMenuOpen(!isMenuOpen)} />
                            {isMenuOpen && (
                                <RenderBurgerMenu
                                    className={classes.sideModal}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                />
                            )}
                            <Body />
                            <DescriptionContainer />
                            <Footer />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export const RenderBurgerMenu = ({ className, onClick }) => (
    <>
        <div className={className} onClick={onClick}></div>
        <BurgerMenu />
    </>
);

export default Main;
