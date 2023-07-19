import styled from "styled-components";

export const Forgotcontainer=styled.div`
    display:block;
    background:white;
    text-align:center;
    padding-top:80px;
    padding-bottom:80px;
`;
export const Forgothead=styled.div`
    font-family: 'Poppins', sans-serif;
    color:black;
    font-size:20px;
    p{
        padding-top:20px;
        font-size:16px;
        font-weight:100;
    }
    @media (max-width:800px){

    }
`;
export const Forgotinput=styled.div`
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
`;

export const Forgotbutton=styled.button`
    padding:9px 170px;
    margin-top:40px;
    background-color:#8cd0e3;
    border:0px;
    cursor:pointer;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
`;
export const Forgotaccount=styled.div`
    font-size:16px;
    line-height:40px;
    font-weight:100;
    padding-top:30px;
`;