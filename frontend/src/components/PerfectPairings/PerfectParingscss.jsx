import styled from "styled-components";

export const PerfectContainer = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 32px;
    padding-bottom: 70px;

    .lg{
        display: flex;
        justify-content: center;
    }

    .sm{
        display: none;
    }
    

    @media (max-width:800px){

        .lg{
            display: none;
        }

        .sm{
            display: block;

            .slick-dots {
                bottom: -34px;
            }

            .slick-arrow{
                z-index: 1;
            }

            .slick-next{
                right: 42px;
                color: black;
            }

            .slick-prev {
                left: 47px;
            }
        }
    }
`;

export const PerfectHeadings = styled.div`
    h2{
        font-size: 3rem;
        font-weight: 300;
        line-height: 34px;
        color: #000;
        margin-bottom: 0.5rem;
        text-align: center;
    }
`;

export const PerfectCard = styled.div`
    ,perfectimg{
        
        img{
            margin: 0 auto;
            height: 30vh;
            width: 30vh;
            display:flex;
            align-items:center;
        }
        
    }

    .perfectcontent{
        text-align: center;

        .perfecticon{
            padding-bottom: 13px;
    
            
            i{
                padding-right: 3px;
                color: #8cd0e3;
                font-size: 1.5rem;
            }
        }

        .pcontent{
            padding-bottom: 10px;
            h3{
                font-size: 1.6rem;
                line-height: 17px;
                font-weight: 600;
                padding-bottom: 10px;
            }

            p{
                font-size: 1.3rem;
                line-height: 15px;
                padding: 0 1rem;
            }
        }

        .perfectbtns{
            .span1{
                padding-bottom: 10px;
                p{
                    display: inline-block;
                    margin: 5px 5px;
                    border: 1px solid lightgrey;
                    padding: 0.5rem 0.5rem;
                    border-radius: 40%;
                }

                .yellow{
                    background-color: yellow;
                }
            }

            .button{
                margin: 0 auto;
            }
        }
    }

    @media (max-width: 800px){
        .perfectimg{
            img{
                margin: 0 auto;
            }
        }
    }
`;