import styled from "styled-components";

export const DContainer = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 0;
    text-align: center;
    button{
        margin-left:675px;
        padding:10px 30px;
        margin-bottom:20px;
    }
    .line-d{
        max-width: 90%;
        margin: 0 auto;
        border-top: 2px solid;
        border-bottom: 2px solid;
        border-color: #8cd0e3;
        margin-bottom:20px;
        padding: 10px 0;
        display: flex;
        justify-content: space-evenly;


        h3{
            font-size: 1.8rem;
            font-weght: 200;
            line-height: 22px;
            display: flex;
            align-items: center;
        }

        .ul-container{ 
            width: 75%;    
            text-align: center;
        
            ul{
            display: flex;
           

            li{
                width: 33.3%;
                display: flex;
                justify-content: center;

                img{
                    max-width: 100%;
                }

                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 12px;

                    .caps{
                        text-transform: uppercase;
                        margin-bottom: 2px;
                    }

                    p{
                        font-size: 1.3rem;
                        font-weight: 700;

                        
                    }
                }
            }
        }
    }

    @media (max-width:993px){
        flex-direction: column;
        align-items: center;

        h3{
            margin-bottom: 10px;
        }
    }

    @media (max-width:650px){
        .line-d{
            max-width: 98%;
            padding-bottom: 0;
        }
        .ul-container{
            ul{
                
                li{
                    flex-direction: column;
                    justify-content: flex-start;

                    

                    img{
                        width: 73px;
                        height: 37px;
                    }

                    div{
                        margin-top: 10px;
                        padding-left:0;

                        p{
                            font-size: 10px;
                            font-weight: 500;
                            text-align: left;
                        }
                    }
                }
            }
        }
    
  }
     


`;
