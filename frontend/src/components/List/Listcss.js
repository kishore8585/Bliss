import styled from "styled-components";

export const Listcontainer=styled.div`
    background-color:#ffff;
    display:flex;
    justify-content:space-around;
    background-color: #f3f8fe;
    padding-top:60px;
    padding-bottom:50px;
    width:100%;
    // max-width:1500px;
    flex-wrap:wrap;
    gap:35px;
    row-gap:50px;
`;

export const ListCard=styled.div`
        display:block;
        width:280px;
        background-color:white;
        // align-items:center;
        
        
        :hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        img{
            height:220px;
            width:250px;
            margin-left:18px;
        }
        .name{
            font-size:15px;
            margin-top:10px;
            text-align:center;
            font-family: Archer Pro,sans-serif;

        }
        .price{
            text-align:center;
            font-size:15px;
            margin-top:3px;
            // font-style:italic;
            font-weight:bold;
        }
        button{
            margin:5px auto;
            padding:10px 20px;
        }
        .card-ratings{
            text-align: center;
            margin-top:10px;
            i{
              padding: 1px;
              color: #8cd0e3;
              font-size: 1.3rem;
              padding-bottom: 10px;
            }
          }
`;