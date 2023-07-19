import styled from "styled-components";

export const WinterContainer = styled.div`
  width:100%;
  max-width: 160rem;
  margin: 0 auto;
  background-color: #f3f8fe;
  padding-top: 3rem;
  padding-right: 4rem;
  padding-left: 4rem;
  position: relative;
`;

export const WinterHead = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h3{
    font-size: 2.7rem;
    line-height: 3rem;
    font-weight: 400;
  }

  p{
    font-size: 1.3rem;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  margin-bottom: 45px;
  height:560px;
  .contentcontainer{
    padding: 10px 21px 10px;
    
  }

  .card-img{
    img{
      width: 100%;
      height: 300px;
      

      // @media (max-width: 500px){
      //   max-height: 220px;
      // }
    }
  }


  .card-ratings{
    text-align: center;
    
    i{
      padding: 1px;
      color: #8cd0e3;
      font-size: 1.3rem;
      padding-bottom: 10px;
    }
  }

  .card-contents{
    margin-bottom: 2.1rem;
    tex-align: center;

    h3{
      font-size:1.6rem;
      line-height:1.7rem;
      text-align: center;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p{
      font-size: 1.4rem;
      text-align: center;
      marign-bottom: 10px;
      height: 32px;
    }
  }

  .ctcontainer{
    height: 3.6rem;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 10px;
    span{
      background-color:#F7EB61;
      padding: 10px 12px;
      border-radius: 40%;
      font-size: 1rem;
    }
  }

  .button{
    padding: 1rem 2.7rem !important;
    max-width: 170px;
    margin: auto;
  }
    
  
`;