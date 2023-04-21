import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0,
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }
`;

export const Container = styled.div`
    width: 414px;
    min-height: 895px;
    background: rgba(0,0,0,0.1);
    box-shandow: 0px 4px 4px rgbs(0,0,0,0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
`;

