import styled from 'styled-components';

export const Wrapper = styled.section`
    position: relative;
    background: linear-gradient(to right,#fb637e 0,#5e549b 100%);
    width: 100%;
    height: 40px;
    max-width: 160rem;
    margin: 0 auto;
`;

export const OfferDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-family: 'Archer A','Archer B';
        color: #fff;
        font-size: 1.5rem;
    }
    @media(max-width:992px){
        p{
            font-size:12px;
                    }
    }
`;

export const OfferIcon = styled.span`
    color:#fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    position: absolute;
    right:20px;

    @media (max-width:600px){
        padding-left: 10px;
        padding-top: 15px;
    }

`;