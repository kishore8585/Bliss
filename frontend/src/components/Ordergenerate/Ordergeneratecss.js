import styled from "styled-components";

export const Container=styled.div`
    background-color:#ffff;
    img{
        height:60px;
        width:188px;
        margin-left:675px;
        margin-top:20px;
    }
    .orderno{
        display:flex;
        justify-content:space-between;
        margin:0 auto;
        width:1100px;
        div{
            display:flex;
            align-items:center;
            gap:10px;
            h4{
                font-size:18px;
            }

        }
    }
    button{
        padding:15px 50px;
        color: #black;
        background:#8cd0e3;
        margin-left:700px;
        margin-top:20px;
        cursor:pointer;
        font-size:15px;
        border-radius:5px;
        transition: all 0.5s;
        border: none;
        // font-size: 15px; 
        
        text-align: center;
    }
`;

export const Heading=styled.div`
    h1 {
        font-size: 40px;
        text-align: center;
        word-spacing:10px;
        // color:#79cee6;
        color:black;
        opacity:0.8;
        letter-spacing:2px;
        font-family: 'Itim', cursive;
        margin-top:40px;
    }  
    p{
        text-align:center;
        letter-spacing:2px;
        font-size:25px;
        font-weight:600;
        font-family: 'Work Sans', sans-serif;
        margin-top:50px;
    }
`;

export const Products=styled.table`
    margin:0px auto;
    margin-top:50px;
    border-bottom:1px solid BLACK;
    .head{
        .head1{
            padding:10px 250px;
            border-bottom:1px solid black;
            border-top:1px solid black;
            font-weight:600;
            font-family: 'Inter', sans-serif;

        }
        .head2{
            padding:10px 100px;
            border-top:1px solid black;
            border-bottom:1px solid black;
            font-weight:600;
            font-family: 'Inter', sans-serif;
 
        }
       
    }
    .prod{
        
           .prod1{
                display:flex;
                align-items:center;
                margin-bottom:10px;
                font-weight:600;
                img{
                    height:130px;
                    width:188px;
                    margin-left:-35px;
                    
                }
               
           }
           .quantity{
                text-align:center;
                font-weight:500;
                font-size:18px;

           }
           .price{
                text-align:center;
                font-weight:400;
           }

    }
    .tax{
        p{
            text-align:center;
            padding:20px 0px;
            font-weight:500;
            font-size:18px;
        }
    }
`;

export const Content=styled.div`
        margin:0 auto;
        max-width:1100px;
        .total{
            display:flex;
            gap:130px;
            margin-left:800px;
            p{
                font-weight:600;
                font-size:18px;
            }
        }
        .address{
            letter-spacing:0.5px;
            display:flex;
            gap:650px;
            .add{
                padding-left:8px;
                padding-right:8px;
                font-size:18px;
                p{
                    font-size:16px;
                    margin-top:-15px;
                }
            }
        }
        .mode{
            display:flex;
            align-items: center;
            font-size:18px;
            letter-spacing:0.5px;
            p{
                padding:0px 10px;
                font-size:17px;
            }
        }
`;

export const Cardcontainer=styled.div`
    
`;