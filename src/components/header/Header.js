import React from "react";
import { useMediaPredicate } from "react-media-hook";
import * as ui from "./styles";
import Search from "../search/Search";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { useLocation } from "react-router-dom";

export default function Header(props) {
    const isMobile = useMediaPredicate("(max-width: 900px)");

    return (
        <ui.StyledHeader>
            <ui.H1>
                <ui.StyledLink to="/">
                    indie<ui.PrimarySpan>Tube</ui.PrimarySpan>
                </ui.StyledLink>
            </ui.H1>
            {useLocation().pathname === "/" && (
                <Search
                    searchQuery={props.searchQuery}
                    onSearchChange={(event) =>
                        props.handleSearchQueryChange(event.target.value)
                    }
                    onSearchSubmit={props.handleSearchQuerySubmit}
                    nonIndieCount={props.nonIndieCount}
                />
            )}

            {isMobile ? (
                <HamburgerMenu />
            ) : (
                <ui.Nav>
                    <ui.NavList>
                        <ui.NavItem>
                            <ui.StyledLink to="/">Search</ui.StyledLink>
                        </ui.NavItem>
                        <ui.NavItem>
                            <ui.StyledLink to="/About">About</ui.StyledLink>
                        </ui.NavItem>
                        <ui.NavItem>
                            <ui.StyledLink to="/Filter">Filter</ui.StyledLink>
                        </ui.NavItem>
                    </ui.NavList>
                </ui.Nav>
            )}
        </ui.StyledHeader>
    );
}
