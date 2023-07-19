import styled from "styled-components";

export const Showcontainer=styled.div`
    display:block;
    background:white;
    text-align:center;
    padding-top:60px;
    h1{
        font-size:30px;
    }
    padding-bottom:80px;
    table{
        // margin-left:600px;
        margin: 0 auto;
        padding-top:20px;
        th{
            // padding:0px 100px;
            height:50px;
            width:300px;
            border:1px solid black;
            font-size:15px;
        }
        td{
            font-size:15px;
            padding:15px 20px;
            border-bottom:1px solid #E3E3E3;
        }
        button{
            padding:5px 10px;
            cursor:pointer;
            margin:2px 5px;
        }
    }
    form{
        input{
            height:30px;
            width:350px;
            margin:5px 0px;
        }
        button{
            padding:5px 10px;
        }
    }
`