import styled from "styled-components";

export const LMContainer = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    background-color: #d4deff;
    padding: 0 20px;

    .divcontainer{
        marign: 0 auto;
        display: flex;
        padding: 40px 0;
    }

    @media (max-width:993px){
        .divcontainer{
            flex-direction: column-reverse;
        }
    }
`;

export const LMContent = styled.div`
    width: 50%;
    margin: auto;

    .contentcontainer{

        h2{
            text-align: center;
            font-family: CeraStencilPRO;
            font-size: 3rem;
            font-weifht: 500;
            colorL #fff;
            margin-bottom: 0.5rem;
        }

        p{
            font-size: 1.6rem;
            max-width: 68.9%;
            text-align: center;
            margin: 0 auto;
            padding-bottom: 21px;
        }

        .lmbuttonholder{
            a{
                margin: 14px auto;
            }
        }
    }

    @media (max-width: 993px){
        .contentcontainer{
            width: 100%;
            p{
                max-width: 100%;
            }
        }
    }

    @media (max-width: 500px){
        .contentcontainer{
            width: 100%;
            h2{
                font-size: 2rem;
            }
            p{
                max-width: 100%;
                font-size: 1.3rem;
            }
        }
    }
`;

export const LMImage = styled.div`
    width: 50%;
    margin: auto;
    img{
        width: 100%;
    }
`;