import styled from "styled-components";

export const HeaderNav = styled.nav`
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const SearchNav = styled.div`
  display: flex;
  padding: 1rem 3rem 0 3rem;
  gap: 2rem;

    .navlog{
        background-color:white;
        padding:10px 10px;
        
        position:absolute;
        // margin-top:30px;
        z-index:3;
        p{
          padding:10px 10px;
          font-size:13px;
        }
    }
    
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.3rem;
      position:relative;

      span {
        font-size: 3.2rem;
        cursor:pointer;
      }
     
      
      &:hover {
        color: yellow;
      }

      b{
        @media (max-width:992px){
            display: none;

        }
      }
    }

  .location{
    @media (max-width:992px){
        display:none;
    }
  }
}
  .menuBar{
    display:none;
    font-size: 3.2rem;
    color: #fff;  
    cursor:pointer;
    @media (max-width:992px){
        display:flex;
        &:hover{
          color:yellow;
        }


    }
    }
  }
`;

export const NavLogoHolder = styled.div`
  display: flex;
  padding-top:0.7rem;
  align-items: center;

  @media (max-width:992px){
    align-items: center;
  }

  img {
    width: 101px;
    height: 35px;
  }
`;

export const NavBagIcon = styled.div`
  display: flex;
`;

export const NavDivDisplay = styled.div`
  
`;

export const NavContent = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  @media (max-width: 992px){
    padding:0.5rem 0;
  }


  a {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    position: relative;
    }


    @media (max-width: 992px){
        display: none;
    }
  }

  span {
    color: #fff;
    font-size: 1.6rem;
    padding: 0 2rem;

    @media (max-width: 992px){
        display: none;
    }
  }

`;

export const Tooglebut=styled.div`
display:none;
@media (max-width:992px){
    display:block;
    
  background-color: #8cd0e3;
  // padding-top:20px;
  padding-right:15px;
  p {
    cursor:pointer;
    dislplay:flex;
    align-items:center;
    border-bottom:1px solid #ffff;
    padding:3rem 4rem;
    font-size: 2rem;
    color: white;
    margin-left:15px;
  }

}

`;

// export const Navlogin=styled.div`
//     visibility:hidden;

// `;