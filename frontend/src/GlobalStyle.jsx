import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-family: 'Itim', cursive;
        font-family: 'Work Sans', sans-serif;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }

    body{
        background: linear-gradient(to bottom,rgba(247,235,97,.47) 0,rgba(240,140,205,.47) 50%,rgba(115,210,230,.47) 100%);
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    .swiper-pagination{
        bottom: var(--swiper-pagination-bottom,20px) !important;
    }

    .button{
        display: block;
        color: #fff;
        background:#8cd0e3;
        padding: 1rem 0;
        text-transform: uppercase;
        line-height: 2;
        transition: all 0.5s;
        border: none;
        font-size: 1.5rem; 
        max-width: 200px;
        text-align: center;
    }

    .button:hover{
        background:#948ad3;
        cursor: pointer;
    }

    .shop{
        margin: 0 auto;
        position: relative;
        bottom: 60px;
    }

    .slick-arrow{
        background-color: #8cd0e3 !important;
        border-radius: 60%;
        width: 21px;
        height: 21px;
    }

    .slick-next {
        top: 50.5%;
    }

    .mobileFooter{
        display: none;
    }

    @media (max-width:992px){
       html{ 
        font-size: 50%;
       }

       .webFooter{
            display: none !important;
       }

       .mobileFooter{
            display: block;
       }
    }

    @media (max-width: 600px){
        .slick-dots li{
            margin: 0 2px;
        }
    }

    @media (max-width: 400px){
        .button{
            max-width: 150px;
        }
    }
    
    .slick-dots{
        bottom: 20px;
    }
    .jr{
        font-size:15px;
        font-style:italic;
        font-weight:100;
        // margin-top:300px;
    }
    .hu{
        font-size:18px;
        font-style:italic;
    }
    .nh{
        font-size:30px;
        margin-top:10px;
    }
    .bh{
        display:flex;
        gap:20px;
    }
    .button1{
        background-color:#8cd0e3;
        border:0px;
        padding:10px 90px;
        font-size:18px;
        font-weight:600;
        cursor:pointer;
    }
    .nj{
        width:10px;
        height:10px;
    }
    .bm{
        margin-top:13px;
        font-size:13px;
    }
    .bestsellers{
        position:absolute;
        z-index:2;
        margin-left:250px;
        max-width:1000px;
        display:flex;
        width:100%;
        justify-content:center;
        background-color:white;
        img{
            height:150px;
            width:150px;
        }
        #alignnam{
            font-size:20px;
        }
        animation: rotateX 0.6s ease-out;
        transform-origin: top center;
        @keyframes rotateX {
            0% {
              transform: rotateX(-90deg);
            }
            100% {
              transform: rotateX(0deg);
            }}
        div{
            align-content:center;
            padding:30px 20px
        }
    }
    .skincare{
        position:absolute;
        z-index:2;
        margin-left:250px;
        padding:30px 10px;
        max-width:1000px;
        display:flex;
        width:100%;
        justify-content:center;
        background-color:white;
        gap:50px;
        img{
            height:150px;
            width:150px;
        }
        animation: rotateX 0.6s ease-out;
        transform-origin: top center;
        @keyframes rotateX {
            0% {
              transform: rotateX(-90deg);
            }
            100% {
              transform: rotateX(0deg);
            }}

    }
    .first{
        font-size:13px;
        font-weight:600;
    }

`;
