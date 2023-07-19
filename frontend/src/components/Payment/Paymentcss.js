import styled from "styled-components";

export const PaymentCont=styled.div`
        display:flex;
        height:100%;
`;

export const PayLeft=styled.div`
    background-color:white;
        width:100%;
        min-height:717px;
        padding-right:100px;
        margin-right:20px;
        .logo{
            text-align:center;
            ul{
                
                display:flex;
                margin-left:315px;
                align-items:center;
                margin-top:10px;
                li{
                    font-size:12px;
                    margin:10px 8px; 
                    font-family: 'Inter', sans-serif;
                }
                span{
                    margin-top:3px;
                }
            }
            img{
                height:60px;
                width:188px;
                margin-top:40px;
            }
        }
        .details{
            border:1px solid #E3E3E3;
            font-size:15px;
            margin-left:80px;
            margin-top:50px;
            max-width:800px;
            font-family: Lato, sans-serif;
            border-radius:5px;
            .contact{
                display:flex;
                // justify-content:space-between;
                gap:50px;
               padding:15px 10px;
               .con{
                color:grey;
               }
            }
            .shipto{
                display:flex;
                justify-content:space-between;
                padding:15px 15px;
                // align-items:center;
                .sh{
                    color:grey;
                    // padding-right:40px;
                    margin-right:20px;
                }
            }
            .hr{
                width:750px;
                margin:0 auto;
                color:#E3E3E3;
            }
        }
        .standard{
            display:flex;
            justify-content:space-between;
            padding:15px 10px;  
            .ch{
                display:flex;
                p{
                    margin-left:10px;
                    font-size:18px;
                }
            }
            p{
                font-size:18px;
            }
        }
        .ship{
            margin-left:80px;
            margin-top:20px;
            display:flex;
            justify-content:space-between;
            .bh{
                display:flex;
                align-items:center;
                p{
                    margin-left:-15px;
                    font-size:15px;
                    margin-top:-2px;
                }
            }
            button{
                padding:15px 10px;
                border-radius:5px;
                background-color:#8cd0e3;
                cursor:pointer;
                font-weight:500;
                border:0px;
            }
        }
        .footer{
            display:flex;
            margin-top:130px;
            padding-top:15px;
            padding-left:50px;
            margin-left:80px;
            gap:25px;
            font-size:13px;
            border-top:1px solid #E3E3E3;
        }
    .method{
        width:700px;
        padding:10px 40px;
        margin-left:40px;
        margin-top:20px;
        span{
            font-family: 'Inter', sans-serif;
            font-weight:500;
            font-size:20px;
        }
        p{
            font-size:13px;
            margin-top:10px;
            color:dark grey;
        }
    }
    form{
        .payon{
            margin-top:20px;
            margin-right:20px;
            display:flex;
            align-items:center;
            border:1px solid #E3E3E3;
            justify-content:space-between;
            gap:500px;
            padding:13px 20px;
            border-radius:5px;
            cursor: pointer;
            margin-left:80px;
            label{
                font-size:16px;
                // width:10px;
            }
        }
        button{
            margin-left:745px;
            margin-top:50px;
            padding:10px 40px;
            cursor:pointer;
        }
    }

`;

export const PayRight=styled.div`
        background-color:#8cd0e3;
        padding-left:80px;
        padding-right:150px;
        width:550px;
        margin-top:-10px;
        margin-left:-30px;
        margin-right:-8px;
        padding-top:50px;
        .totalcal{
            border-top:1px solid #E3E3E3;
            border-bottom:1px solid #E3E3E3;
            width:350px;
            .cal{
                padding-top:15px;
                padding-bottom:15px;
                p{
                    font-size:14px;
                    font-weight:700;
                }
            }
        }
        .data{
            display:flex;
            justify-content:space-between;
            margin-bottom:35px;
            width:350px;
            align-items:center;
            .des{
                display:flex;
                
                .des1{
                    img{
                        position:absolute;
                    }
                    span{
                        position:relative;
                        background-color:white;
                        margin-left:62px;
                        padding:2px 3px;
                        border-radius:5px;
                    }
                }
            }
            img{
                height:70px;
                width:70px;
                border-radius:10px;
            }
            p{
                font-weight:700;
                font-size:13px;
                margin-top:14px;
                margin-left:12px;
            }
            span{
                margin:25px 10px;
                font-weight:600;
                font-size:14px;
            }
        }
        .cal{
            display:flex;
            justify-content:space-between;
            gap:50px;
            padding-top:15px;
            padding-bottom:15px;
            font-weight:600;
            font-size:14px;
            span{
                padding-left:10px;
            }
        }
        .kish{
            display:flex;
            justify-content:space-between;
            padding-top:15px;
            padding-bottom:15px;
            font-weight:600;
            font-size:14px;
            span{
                margin-left:50px;
             
            }
        }
       

`;
