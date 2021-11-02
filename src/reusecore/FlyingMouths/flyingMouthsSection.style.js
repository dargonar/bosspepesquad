import styled from 'styled-components';

const FlyingMouthsSectionWrapper = styled.div`
#___gatsby{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    /*width: 100%;
    height:100%;*/
}

.bocas{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.bocas li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.bocas li:nth-child(1){
   left: 25%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 0s;
}


.bocas li:nth-child(2){
    left: 10%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 2s;
    animation-duration: 12s;
}

.bocas li:nth-child(3){
    left: 70%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 4s;
}

.bocas li:nth-child(4){
    left: 40%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 0s;
    animation-duration: 18s;
}

.bocas li:nth-child(5){
    left: 65%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 0s;
}

.bocas li:nth-child(6){
    left: 75%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 3s;
}

.bocas li:nth-child(7){
    left: 35%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 7s;
}

.bocas li:nth-child(8){
    left: 50%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 15s;
    animation-duration: 45s;
}

.bocas li:nth-child(9){
    left: 20%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 2s;
    animation-duration: 35s;
}

.bocas li:nth-child(10){
    left: 85%;
    width: 1rem;
    height: 1rem;
   box-shadow: 
    /* row 1 */
    1rem 0rem 0 0 #111,    
    2rem 0rem 0 0 #111,
    3rem 0rem 0 0 #111,
   /* row 2 */
    0rem 1rem 0 0 #111,
    1rem 1rem 0 0 #cc0d1f,
    2rem 1rem 0 0 #cc0d1f,
    3rem 1rem 0 0 #cc0d1f,
    4rem 1rem 0 0 #111,
    5rem 1rem 0 0 #111,
    6rem 1rem 0 0 #111,
    7rem 1rem 0 0 #111,
    8rem 1rem 0 0 #111,
    9rem 1rem 0 0 #111,
    10rem 1rem 0 0 #111,
   /* row 3 */
    0rem 2rem 0 0 #111,
    1rem 2rem 0 0 #cc0d1f,
    2rem 2rem 0 0 #111,
    3rem 2rem 0 0 #cc0d1f,
    4rem 2rem 0 0 #cc0d1f,
    5rem 2rem 0 0 #cc0d1f,
    6rem 2rem 0 0 #cc0d1f,
    7rem 2rem 0 0 #cc0d1f,
    8rem 2rem 0 0 #cc0d1f,
    9rem 2rem 0 0 #cc0d1f,
    10rem 2rem 0 0 #111,
   /* row 4 */
    0rem 3rem 0 0 #111,
    1rem 3rem 0 0 #cc0d1f,
    2rem 3rem 0 0 #cc0d1f,
    3rem 3rem 0 0 #111,
    4rem 3rem 0 0 #111,
    5rem 3rem 0 0 #111,
    6rem 3rem 0 0 #111,
    7rem 3rem 0 0 #111,
    8rem 3rem 0 0 #111,
    9rem 3rem 0 0 #111,
    10rem 3rem 0 0 #111,
      /* row 5 */
    1rem 4rem 0 0 #111,
    2rem 4rem 0 0 #cc0d1f,
    3rem 4rem 0 0 #cc0d1f,
    4rem 4rem 0 0 #cc0d1f,
    5rem 4rem 0 0 #cc0d1f,
    6rem 4rem 0 0 #cc0d1f,
    7rem 4rem 0 0 #cc0d1f,
    8rem 4rem 0 0 #cc0d1f,
    9rem 4rem 0 0 #111,
      /* row 5 */
    2rem 5rem 0 0 #111,
    3rem 5rem 0 0 #111,
    4rem 5rem 0 0 #111,
    5rem 5rem 0 0 #111,
    6rem 5rem 0 0 #111,
    7rem 5rem 0 0 #111,
    8rem 5rem 0 0 #111,
    9rem 5rem 0 0 #111;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
    }

}
    
`

export default FlyingMouthsSectionWrapper;