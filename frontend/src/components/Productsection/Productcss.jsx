import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  gap: 20px;
  padding: 50px;
  margin:0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    overflow-x: hidden;
    margin: 0 auto;
    // align-items:center;
  }
`;

export const Leftcont = styled.div`
  margin: 0 auto;
  // width:100%;
  max-width: 900px;
  // margin-top:-150px;
  margin-left: 150px;

  img {
    height: 515px;
    width: 600px;
  }

  @media (max-width: 992px) {
    margin-left: 30px;

    img {
      height: 500px;
      width: 500px;
    }
  }
`;

export const Rightcont = styled.div`
  // position:absolute;
  margin-right: 250px;
  // margin-top:80px;
  width: 600px;

  i {
    font-size: 20px;
    letter-spacing: 3px;
    color: rgba(59, 130, 246, 0.5);
  }

  .nh {
    font-family: 'Archer Pro', serif;
    letter-spacing: 2px;
    // font-weight:400;
  }

  .description {
    margin: 10px 0px;
    padding: 10px 0px;

    h3 {
      font-family: 'Work Sans', sans-serif;
      font-size: 2rem;
    }

    p {
      font-size: 13px;
    }

    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;

    .descripthead {
      span {
        font-family: 'Work Sans', sans-serif;
        font-size: 2rem;
        font-weight: 500;
      }

      display: flex;
      justify-content: space-between;
    }

    .para {
      p {
        padding: 5px;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 992px) {
    margin-right: 500px;

    .descript {
      margin-right: 300px;
    }
  }
`;

export const Count = styled.div`
  display: flex;
  border: 2px solid black;
  align-items: center;
  font-size: 15px;
  padding: 0px 10px;
  gap: 10px;

  span {
    font-size: 25px;
    padding-top: 5px;
  }
`;

export const Result = styled.div`
  background-color: white;
  padding-top: 30px;
  padding-bottom: 100px;

  .container {
    display: flex;
    // margin:149px 50px;
    // margin:40px 0;
    background-color: #fee9cc;
    align-content: center;
    max-width: 1000px;
    margin: 0 auto;

    .leftcont {
      padding-left: 40px;
      padding-top: 50px;

      h1 {
        font-size: 20px;
        font-family: 'Work Sans', sans-serif;
        padding: 10px 0;
      }

      h4 {
        font-size: 17px;
        font-family: 'Work Sans', sans-serif;
        padding: 10px 0;
      }

      p {
        font-size: 15px;
        padding: 10px 0;
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;
      width: 100%;
      max-width: 900px;
      align-items: center;
    }
  }

  // justify-content:space-evenly;
  .leftcont {
    width: 500px;
  }

  .photo {
    img {
      height: 451px;
      width: 520px;
    }
  }
`;
