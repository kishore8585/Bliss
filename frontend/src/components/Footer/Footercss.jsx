import styled from "styled-components";

export const FooterContainer = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
`;

export const FooterLeft = styled.div`
    padding-top: 26px;
    width: 75%;
    background-color: #73d2e6;
    transition: 1s;
    
    .leftcontainer{
        display: flex;
        justify-content: space-around;

        h3{
            color: white;
            font-size: 2rem;
            line-height: 22px;
            padding-bottom: 13px;
        }

        a{
            color: white;
            font-size: 1.5rem;
        }

        a:hover{
            color: #000;
        }

        .footerlogo{
            img{
                width:100%;
                max-width: 80px;
                padding-top: 4px;
            }
        }

        .footercom{
            h3{
                font-size: 2rem;
                line-height: 22px;
            }
        }

        .footerdry{
            .dry1{
                padding-bottom: 21px;
            }

            .footerfun,.companyicon{
                .funul{
                    padding-bottom: 20px;
                    li{
                        background-color: #fff;
                        margin-right: 10px;
                        display: inline-block;
                        border-radius: 50%;
                        
                        
                        a{
                            font-size: 0;
                            width: 34px;
                            height: 34px;
                            display: block;    
                            color: transparent;     
                        }

                        .insta,.youtube,.tiktok{
                            // background-size: 59%;
                            background-position: center;
                            background-repeat: no-repeat;
                               
                        }

                        .insta{
                            background-image: url("https://cdn.shopify.com/s/files/1/0702/9017/8333/files/IG_Icon_3x_489a17ea-3252-4165-a9af-39eab18e5b83.png?v=1677555274");
                            background-size: 100% ;
                            
                        }

                        .youtube{
                            background-image: url("https://cdn.shopify.com/s/files/1/0702/9017/8333/files/YT_Icon_3x_d592299d-007b-4eeb-a0f4-e070a910f23e.png?v=1677555274");
                            background-size: 100% ;
                        }

                        .pintrest{
                            background-image: url('https://cdn.shopify.com/s/files/1/0702/9017/8333/files/Pinterest_Icon_3x_d086b6e0-0fda-40d4-9d89-8d965fc8ad17.png?v=1677555274');
                            background-size: 100% ;
                        }

                       
                    }

                    li:hover{
                        background-color: yellow;
                    }

                    
                }

                .copyrights{
                    color: #fff;
                    padding: 12px 0;
                    font-size: 1.6rem;
                    line-height: normal;
                }
            }
        }
    }

    @media (max-width: 993px){
        width: 100%;
        padding: 0 20px 20px 20px;
        .companydiv{

            .transfooterleft{
                transition: 1s;
            }

            .lefttext{
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                padding: 12px 0;
                border-bottom: 1px solid #fff;

                h3,i{
                    font-size: 1.7rem;
                    line-height: 19px;
                }

                i{
                    padding-right: 10px;
                }
            }

            .companyicon{
                .funul{
                    padding-bottom: 20px;
                    li{
                        background-color: #fff;
                        margin-right: 10px;
                        display: inline-block;
                        border-radius: 50%;
                        
                        
                        a{
                            font-size: 0;
                            width: 34px;
                            height: 34px;
                            display: block;    
                            color: transparent;     
                        }

                        .insta,.youtube,.tiktok{
                            // background-size: 59%;
                            background-position: center;
                            background-repeat: no-repeat;
                               
                        }

                        .insta{
                            background-image: url("https://cdn.shopify.com/s/files/1/0702/9017/8333/files/IG_Icon_3x_489a17ea-3252-4165-a9af-39eab18e5b83.png?v=1677555274");
                            background-size: 100% ;
                        }

                        .youtube{
                            background-image: url("https://cdn.shopify.com/s/files/1/0702/9017/8333/files/YT_Icon_3x_d592299d-007b-4eeb-a0f4-e070a910f23e.png?v=1677555274");
                            background-size: 100% ;
                        }

                        .pintrest{
                            background-image: url('https://cdn.shopify.com/s/files/1/0702/9017/8333/files/Pinterest_Icon_3x_d086b6e0-0fda-40d4-9d89-8d965fc8ad17.png?v=1677555274');
                            background-size: 100% ;
                        }

                    }

                    li:hover{
                        background-color: yellow;
                    }

                    
                }

            }

            .copyrights{
                color: #fff;
                padding: 12px 0;
                font-size: 1.6rem;
                line-height: normal;
                text-align: center;
            }

            .content{
                ul{
                    border-bottom: 1px solid #fff;  
                    padding-top: 20px;
                    li{
                        padding-bottom: 15px;
                        a{
                            color: #fff;
                            font-size: 1.8rem;
                            padding-left: 10px;
                        }

                        a:hover{
                            color: #000;
                        }
                    }
                }
            }
        }

        .companyicon{
            padding-top: 28px;
            text-align: center;
            img{
                width: 100%;
                max-width: 80px;
                padding-bottom: 34px;
            }
        }
    }
`;

export const FooterRight = styled.div`
    width: 25%;
    background-color:#f5ea77;
    padding-top: 55px;

    .rightcontainer{
        text-align: center;

        h2{
            padding-bottom: 11px;
            font-size: 2rem;
            font-weight: 500;
        }

        p{
            font-size: 1.3rem;
            line-height: 21px;
            padding-bottom: 21px;
        }

        .rightsubmit{
                width: 80%;
                margin: 0 auto;
            input{
                width: 100%;
                outline: none;
                margin-bottom: 18px; 
                border: 1px solid lightgrey;
                height: 48px;
                text-align: center;
            }

            .button{
                margin: 0 auto;
                padding: 0.5rem 0;
                width: 100%;
                max-width: 100%;
            }
        }
    }

    @media (max-width:993px){
        width:100%;

        .rightcontainer{
            h2{
                font-size: 2.5rem;
            }

            p{
                font-size: 1.8rem;
            }
        }

        .rightsubmit{
            padding-bottom: 40px;
            max-width:400px;

            input{
                text-align: left !important;
                padding-left: 15px;
            }

            .button{
                padding: 1rem 0 !important;
            }
        }
    }
`;

export const FooterMobile = styled.section`

`;