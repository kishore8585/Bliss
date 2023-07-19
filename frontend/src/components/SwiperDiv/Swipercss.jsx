import styled from "styled-components";

export const SwiperContainer = styled.section`
    width:100%;
    max-width: 160rem;
    margin: 0 auto;
    padding: 50px 2.15%;
    position: relative;
    background-color: #fff;
`;

export const SwiperSlider = styled.div`
    .content-holder{
        display : flex;
        align-items: center;
        background: linear-gradient(to right,#FFFFFF 0,#FFBA8B 30%);

        
        .image-holder{
            width: 45%;

            img{
                width:100%;
                padding: 3rem 2rem;
            }
        }

        .text-holder{
            padding: 7rem 6rem 7rem 6rem;
            width: 60%;
            h3{
                font-size: 2.4rem;
                text-align: left;
                margin-bottom: 1.6rem;
            }

            p {
                margin-bottom: 2.2rem;
                a{
                    font-size: 1.7rem;
                    
                }
            }
        }
    }

    #yellow{
        background: linear-gradient(#FFFFFF 0,#FFF49A 30%);
    }

    @media (max-width:992px){
        .content-holder{
            flex-direction: column;
            background: linear-gradient(#FFE4C9 0,#FF931C 100%);
        
            .image-holder{
                width: 75%;
            }

            .text-holder{

                h3{
                    text-align:center;
                }

                width:100%;
                text-align: center;
                a{
                    margin:0 auto;
                }
            }


        }


    }
`;