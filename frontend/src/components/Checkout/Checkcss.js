import styled from "styled-components";

export const CartContainer=styled.div`
    padding-top:30px;
    text-align:center;
    background:white;
    h1{
        font-size:30px;
    }
`
export const Count=styled.div`
    display:flex;
    padding: 15px 40px;
    align-items:center;
    border:1px solid #E3E3E3;
    font-size:14px;
    margin:0 50px;
    gap:30px;
    span{
        font-size:22px;
        padding-top:5px;
    }
`;
export const Product=styled.div`
        padding-top:20px;
        table{
            margin:0 auto;
            padding:10px 30px;
            .ln1{
                border-bottom:1px solid black;
                padding:10px 250px;
                font-size:17px;
                font-weight:100;
            }
            .ln{
                border-bottom:1px solid black;
                padding:10px 80px;
                font-size:17px;
                font-weight:100;
            }
            .data{
                margin:30px 5px;
                display:flex;
                img{
                    height:150px;
                    width:150px;
                }
                p{
                    padding:55px 0;
                    font-size:15px;
                    font-weight:bolder;
                }
            }
            .price{
                font-size:15px;
            }
        }
        .hrline{
            width:1050px;
            margin:0 auto;
        }
`

export const Total=styled.div`
        display:flex;
        padding:15px 0;
        max-width:1050px;
        margin-left:250px;
        img{
            height:150px;
        }
        .insid{
            margin-left:120px;
            margin-top:18px;
        }
        // justify-content:space-between;
        h6{
            font-size:16px;
            margin-left:250px;
            padding:5px 0;
        }
        p{
            font-size:15px;
            padding:5px 0;
            margin-left:95px;
        }
        button{
            margin-left:225px;
            margin-top:20px;
            padding:10px 45px;
        }
`