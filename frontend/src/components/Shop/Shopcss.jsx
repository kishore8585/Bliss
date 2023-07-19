import styled from "styled-components";

export const ShopMainContainer = styled.section`
    max-width: 1600px;
    height: auto;
    margin: 0 auto;
    marin-top: 30px;
    background: linear-gradient(to bottom, #8cd0e3 0, #f08ccd 100%);
    position: realtive;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:993px){
        flex-direction: column;
    }

    @media (max-width:600px){
        font-size: 50%;
    }
`;

export const ShopContainer = styled.div`
  .shopcompontent {
    padding: 45px 63px 0px 55px;
    text-align: center;

    .shopdiv {
      max-width: 575px;
      position: relative;
      a {
        img {
          width: 100%;
        }
      }
      .headingshop {
        width: 100%;
        position: relative;
        min-height: 107px;

        .contentshop {
          width: 86%;
          background-color: #fff;
          padding: 13px 38px 24px;
          margin: 0 auto;
          top: -40px;
          position: relative;

          h4 {
            font-size: 1.8rem;
            line-height: 22px;
          }

          p {
            font-size: 1.6rem;
            line-height: 19px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;
