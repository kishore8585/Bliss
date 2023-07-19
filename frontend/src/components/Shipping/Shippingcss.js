import styled from "styled-components";

export const ShippingContainer=styled.div`
    display:flex;
    height:100%;
`;

export const ShipLeft=styled.div`
        background-color:white;
        width:100%;
        min-height:717px;
        padding-right:100px;
        .logo{
            text-align:center;
            ul{
                
                display:flex;
                margin-left:235px;
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
               padding:15px 10px;
               .con{
                color:grey;
                padding-right:20px;
               }
            }
            .shipto{
                display:flex;
                justify-content:space-between;
                padding:10px 15px;
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
            border:1px solid #E3E3E3;
            border-radius:5px;
            margin-left:80px;
            margin-top:20px;
            justify-content:space-between;
            padding:15px 10px;  
            .ch{
                display:flex;
                // padding:20px 10px;
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

`;
export const ShipRight=styled.div`
    background-color:#8cd0e3;
    padding-left:50px;
    padding-right:150px;
    padding-top:40px;
    width:1150px;
   
    margin-right:-8px;
    .data{
        display:flex;
        gap:40px;
        // margin-left:100px;
        margin-top:20px;
        // padding-top:80px;
        margin-bottom:20px;
        padding-bottom:15px;
        justify-content:space-between;
        // border-bottom:1px solid #E3E3E3;
        align-items:center;
        .data1{
            display:flex;
            // gap:50px;
            justify-content:space-between;
            p{
                font-weight:600;
                font-size:14px;
                margin:20px 10px
            }
            .data2{
                img{
                    height:70px;
                    width:70px;
                    border-radius:10px;
                    position:absolute;
                }
                span{
                    position:relative;
                    color:black;
                    background-color:white;
                    border-radius:10px;
                    height:18px;
                    width:11px;
                    padding:3px 5px;
                    margin-top:-15px;
                    margin-left:60px;
                }
            }
        }
        
        
        span{
            margin:25px 10px;
            font-weight:600;
            font-size:15px;
        }
    }
    .div1{
        border-top:1px solid #E3E3E3
    }
    .cal{
        display:flex;
        justify-content:space-between;
        padding:15px 10px;
        font-size:15px;
  
    }
    .form{
        border-top: 1px solid #E3E3E3;
        border-bottom: 1px solid #E3E3E3;
        padding:15px 0;

        input{
            height:40px;
            width:250px;
            border:1px solid #E3E3E3;
            border-radius:5px;
        }
        button{
            padding:12px 40px;
            border-radius:5px;
            background:#70a6b6;
            margin-left:10px;
            cursor:pointer;
        }
    }
`;

