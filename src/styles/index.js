import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0,
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: 895px;
    background: rgba(0,0,0,0.1);
    box-shandow: 0px 4px 4px rgbs(0,0,0,0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    aling-items: center;
    padding: 13px 25px;

    .title{
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #74B4EC;
        mix-blend-mode: normal;
    }
`;

export const Input = styled.input`
    padding: 8px 14px;
    width: 224px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;
    border: none;

    font-weigth: 700;
    font-size: 16px;
    line-height: 24px;
    color: #74B4EC;

    &::placeholder{
        font-weigth: 700;
        font-size: 16px;
        line-height: 24px;
        color: #74B4EC;
        font-weight: bold; 
    }

`;

export const Spacer = styled.div`
    width: 100px;
    margin: ${(props) => props.margin || "20px"};
`;

export const Flex = styled.div `
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    gap: ${(props) => props.gap || "15px" }
`;

export const Button = styled.button`
    width: 112px;
    heigth: 50px;
    background: #74B4EC;
    border-radius: 10px; 
    border: none;

    font-weigth: 500;
    font-size: 16px;
    line-heigth: 24px;
    color: #FBFBFB;
    cursor: pointer;

    &:houver{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
    
`;

export const Item = styled.li`
    padding: 12px 10px 12px 24px;
    width: 299px;
    height: 50px;
    background: ${(props) => (props.checked ? "#74B4EC" : "#FFFFFF")};
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: ${(props) => (props.checked ? "Line-through" : "")};
        color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
    }
    
    button{
        background: transparent;
        border: none;
        cursor: pointer;

        &:houver{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }

    i{
        font-size: 28px;
        color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
    }

`;