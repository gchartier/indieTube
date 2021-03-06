import styled from "styled-components";

export const SubHeading = styled.h2`
    font-size: 1.5rem;
    ${(props) => props.isCenter && "text-align: center;"}
    color: ${(props) => props.theme.primaryYellow};
`;

export const AboutContainer = styled.div`
    padding: 2rem;
    background-color: ${(props) => props.theme.bgColorSecondary};
    overflow-y: scroll;
`;
