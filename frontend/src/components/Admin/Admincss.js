import styled from "styled-components";

export const AdminContainer=styled.div`
    display:block;
    background:white;
    text-align:center;
    padding-top:80px;
    padding-bottom:80px;
    p{
        padding-top:15px;
        font-size:15px;
    }
`

export const AdminHead=styled.div`
    font-family: 'Poppins', sans-serif;
    color:black;
    font-size:20px;
`
export const Admininput=styled.div`
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        &.error{
            font-size:16px;
        }
    }
    input{
        text-align:left;
        margin-top:30px;
        width:400px;
        height:45px;
        // margin-left:550px;
        // margin-top:40px;
    }
    input::placeholder{
        font-size:17px;
    }
    .kishore{
        padding:9px 170px;
        margin-top:50px;
        background-color:#8cd0e3;
        border:0px;
        cursor:pointer;
        font-family: 'Poppins', sans-serif;
        font-size:18px;
        }
    .error{
            font-size:12px;
        }

`;