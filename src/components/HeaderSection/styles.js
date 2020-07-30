import styled from 'styled-components';

export const Title = styled.h1`
    position: relative;
    font-family: 'Rigthteous', cursive;
    color: #fff;
    font-size: 48px;
    line-height: 50px;
    text-align: center;
    padding-bottom: 20px;
    display: table;
    margin: 0 auto 30px auto;
    grid-column: 1/3;

    &:after{
        content: "";
        position: absolute;
        border-bottom: 1px solid #b456d7;
        width: 40px;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        display: table;
    }

    &:before{
        content: "";
        position: absolute;
        border-bottom: 1px solid #b456d7;
        width: 80px;
        bottom: 8px;
        left: 0;
        margin: 0 auto;
    }

    @media screen and(max-width: 576px){
            grid-column: 1;
            font-size: 34px;
            line-height: 40px;
        }

`;
export const TopSection = styled.div`
    background: #252A2E;
    box-shadow: 0 0 30px rgba(0,0,0,.2);
    border-radius: 5px;
    width: 60px;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.7rem auto 1 rem auto;
    grid-column: 1/3;

    @media screen and (max-width: 576px){
        grid-column: 1;
        margin: 1.5rem auto 1rem auto;
    }
`;
