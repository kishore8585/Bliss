import styled from "styled-components";

export const BrightContainer = styled.section`
    max-width: 1600px;
    background-color: #ffe7cd;
    margin: 0 auto;
    padding-top:30px;
    overflow-x: hidden;
    padding-bottom: 30px;
`;

export const BrightHeadings = styled.div`
    text-align: center;
    padding-bottom: 22px;

    h2{
        font-size: 2.5rem;
        line-height: 2.8rem;
        padding-bottom: 7px;
    }

    p{
        font-size: 1.6rem;
        line-height: 1.9rem;
        padding: 0 1rem;
    }
`;

export const BrightList = styled.div`
    ul{ 
        display: flex;
        
        .brightcontainer{
            width: 25%;
            margin: 10px;
        a{
            color: #000;
        }

        li{
            width: 100%;
            .brightimg{
                text-align: center;
                padding-bottom: 21px;

                img{
                    border-radius: 50%;
                }
            }

            .brightcontent{
                text-align: center;
                height: 61px;
                margin-bottom: 21px;

                h3{
                    font-size:2rem;
                    line-height: 17px;
                    font-weight: 600;
                    padding-bottom:10px;
                }

                p{
                    font-size: 1.4rem;
                    line-height: 17px;
                }
            }

            .brightbtn{
                margin: 0 auto;
                padding: 1rem 3rem;
                color: #fff;
            }
        }
        }
    }

    @media (min-width:1050px){
        ul{
            .brightcontainer{
                width: 25%;
            }
        }
    }

    @media (max-width: 1130px){
        ul{
            flex-wrap: wrap;
            justify-content: center;
            .brightcontainer{
                width: 33.33%;
                margin: 10px;

                
            }
        }
    }

    @media (max-width: 850px){
        ul{
            .brightcontainer{
                width: 50%;
                margin: 10px;
            }
        }
    }

    @media (max-width: 500px){
        font-size: 100%;
        ul{
            .brightcontainer{
                width: 100%;  
            }
        }
    }
`;