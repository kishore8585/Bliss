import styled from "styled-components";

export const Infocontainer=styled.div`
        display:flex;
        height:100%;
`


export const LeftCont=styled.div`
        // border:1px solid black;
        padding-top:50px;
        // padding-right:250px;
        width:950px;
        // height:100%
        // margin-left:120px;
        // margin-right:-100px;
        .logo{
            text-align:center;
            ul{
                margin-left:270px;
            }
        }
        .pay{
            height:130px;
            width:450px;
        }
        img{
            height:60px;
            width:188px;
        }
        ul{
            font-size:14px;
            list-style-type:none;
            display:flex;
            
            li{
                margin:0 5px;
            }
            span{
                margin-top:3px;
                font-size:12px;
                color:#737373;
                font-weight:lighter;
            }
        }
        .contact{
            display:flex;
            justify-content:space-between;
            align-items:center;
            h3{
                font-weight:600;
                font-size:25px;
            }
            .acc{
                font-weight:light;
            }
        }
        .email{
            height:40px;
            width:540px;
            border:1px solid #E3E3E3;
            border-radius:5px;
            margin-bottom:20px;
        }
        .name{
            display:flex;
            margin-bottom:20px;
            gap:20px;
            input{
                height:40px;
                width:505px;
                border:1px solid #E3E3E3;
                border-radius:5px;
            }
        }
        .cont{
            margin:0 auto;
            max-width:500px;
        }
        .opt{
            height:40px;
            width:540px;
            border:1px solid #E3E3E3;
            border-radius:5px;
        }
        .sele{
            display:block;
        }
        .city{
            display:flex;
            gap:10px;
            input{
                height:40px;
                width:250px;
                border:1px solid #E3E3E3;
                border-radius:5px;
            }
        }
        .ship{
            display:flex;
            justify-content:space-between;
            margin-top:20px;
            gap:20px;
            button{
                padding:15px 30px;
                background-color:#8cd0e3;
                border-radius:5px;
                font-weight:600;
                cursor:pointer;
            }
            .bh{
                span{
                    font-size:10px;
                }
                display:flex;
                gap:2px;
                align-items:center; 
            }
        }
        .addres{
            font-size:20px;
            font-weight:600;
            letter-spacing:1px;
        }
        .nw{
            left:0;
        }
        .footer{
            margin-left:110px;
            li{
                margin-left:30px;
            }
        }
`

export const RightCont=styled.div`
        background-color:#8cd0e3;
        padding-left:50px;
        padding-right:150px;
        width:450px;
        margin-top:-10px;
        margin-right:-8px;
        .display{
            display:block;
            border-bottom: 1px solid #E3E3E3;
        
        }
        .data{
            display:flex;
            // gap:30px;
            justify-content:space-between;
            // margin-left:100px;
            margin-top:30px;
            margin-bottom:25px;
            div{
                display:flex;
                gap:20px;
                .img1{
                    img{
                        height:70px;
                        width:70px;
                        border-radius:10px;
                        position:relative;
                    }
                    span{
                        position:absolute;
                        color:black;
                        background-color:white;
                        border-radius:10px;
                        height:18px;
                        width:11px;
                        padding:2px 5px;
                        margin-top:-10px;
                        margin-left:55px;
                    }
                }
            }
            p{
                font-weight:400;
                margin:25px 10px
            }
            span{
              margin-top:25px;
                font-weight:600;
            }
        }
        .cal{
            display:flex;
            justify-content:space-between;
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

`