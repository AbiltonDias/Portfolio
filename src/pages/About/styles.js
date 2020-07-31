import styled from 'styled-components';

export const AboutSection = styled.div`
    position: relative;
    padding-top: 3rem;
    padding-bottom: 2rem;
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: (repeat(4,1fr));

    .description {
        text-align: justify;
        font-family: "Work Sans", sans-serif;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: .03rem;
        font-weight: 400;
        padding-bottom: 3rem;
        grid-column: 1/3;
        color: #eee;

        span{
            font-family: "Work Sans", sans-serif;
            font-weight: bold;
            color: #b456d7;
        }

    }

    h2.title__details{
        font-family: 'Righteous', cursive;
        color: #fff;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    h2.title__myInterests {
        grid-column: 2;
        grid-row: 4;
        font-family: 'Righteous', cursive;
        color: #fff;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
        position: relative;
        letter-spacing: 0.5px;
        margin-bottom: 25px;
    }

    .curriculum {
        grid-column: 1/3;
        position: relative;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a.cv:hover, a.cv:focus, a.cv:active{
        color: #fff;
        border-color: #b456d7;
        cursor: pointer;
    }

    a.cv:hover:before, a.cv:focus:before, a.cv:active:before{
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }

    a.cv{
        font-family: 'Righteous', cursive;
        font-weight: 400;
        margin: 1.5rem auto;
        text-align: center;
        width: 176px;
        height: 43.25px;
        border: 1px solid #eee;
        grid-column: 1/3;
        grid-row: 6;
        font-size: 16px;
        color: #fff;
        letter-spacing: 0.5px;
        font-weight: 500;
        background-color: transparent;
        display: inline-block;
        border-radius: 0px;
        vertical-align: middle;
        padding: 10px 22px;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        border: 1px solid #fff;
        -box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

        &:before {
            content: " ";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #b456d7;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
            border-radius: 0px;
            -webkit-transition-timing-function: ease-out;
        }

        svg{
            padding-left: .2rem;
        }
    }

`;
export const ListDetails = styled.div``;

export const ListMyInterests = styled.div``;
