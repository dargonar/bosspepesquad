import styled from 'styled-components';

const ComingSoonItemWrapper = styled.div`
    padding: 100px 0 110px 0;
    .sefty-text{
        font-weight: 300;
        margin-bottom: 80px;
        margin-top: 0;
        font-size: 28px;
        font-weight: 400; 
    }
    .sefty__block__wrap{
        display: flex;
        flex-wrap: wrap;
    }
    .sefty__block{
        flex-basis: 50%;
    }
    .sefty__block.right{
        margin-top: 50px;
    }
    .sefty__block__inner { 
        box-shadow: 0px 0px 30px ${props => props.theme.shadowColor};
        padding: 11%;
        margin: 15px;
        border-radius: 4%;
        position: relative;
        h3{
            margin-bottom: 20px; 
            font-weight: 400;
        }
        p{
            font-size: 28px;
            font-weight: 300;
        }

        img{
            height: 50px; 
            margin-bottom: 25px
        }
        a{
            position: absolute;
            right: 15%;
            bottom: 16%;
            width: 30px;
            transition: all 0.8s cubic-bezier(0.3,0.8,0.2,1) 0s;
            img{
                margin: 0;
                width: 30px;
                height: auto;
            }
        }
        &:hover{
            a{
                right: 10%;
            }
        }
    }
    .sefty__block__inner+.sefty__block__inner{
        margin-top: 30px;
    }
    .section-title{
        h2{
            margin-bottom: 42px;
        }
    }
    @media only screen and (max-width: 1024px) {
        .sefty__block__inner { 
            a{
                bottom: 8%;
            }
        }
    }
    @media only screen and (max-width: 912px) {
         padding: 60px 0 0 0;
        .sefty__block__inner{
            padding: 8%;
            img{
                height: 45px;
                margin-bottom: 6px;
            }
            h3{
                margin-bottom: 0px;
            }
            a{
                display: block;
                bottom: 0;
                right: 0;
                position: relative;
            }
            &:hover{
                a{
                    right: -10%;
                }
            }
        }
        .sefty-text{
            margin-bottom: 40px;
        }
     }
     @media only screen and (max-width: 760px) {
        .sefty__block__wrap{
            margin-bottom: 60px;
        }
     }
     @media only screen and (max-width: 568px) {
        padding: 60px 0 40px 0;
         .section-title,
        .sefty-content-wrap{
            text-align: center;
        }
        .section-title{
            img{
                display: none;
            }
            h4{
                width: 100%;
            }
        }
        
     }
     @media only screen and (max-width: 480px) {
        .sefty__block{
            flex-basis: 100%;
            &.right{
                margin-top: 10px;
            }
        }
        .sefty__block__inner{
            padding: 30px;
        }
     }
   

`

export default ComingSoonItemWrapper;