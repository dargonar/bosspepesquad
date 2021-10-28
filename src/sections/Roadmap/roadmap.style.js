import styled from 'styled-components'; 

const RoadmapSectionWrapper = styled.div`
   padding: 95px 0 50px 0;
      
   
   .fetures-icon-block{
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        position: relative;

        img{
            display: block;
            margin: 0 auto;
        }
        
   }
    .fetures-block{
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: flex-start;

        .fetures-icon-block{
            background: #2f2478; 
            border-radius: 50%;
            box-shadow: 0 0 15px ${props => props.theme.primaryColor};;
            &:before{
                position: absolute;
                display: inline-block;
                top: -3px;
                right: 0px;
                height: 70px;
                width: 70px;
                content: '';
                border-radius: 50%;
                z-index: -1;
                opacity: 0;
                transition: all 0.3s linear;
            }
            img{
                display:none;
            }
        } 
        &:hover{
            .fetures-icon-block{
                &:before{
                    opacity: 1;
                    right: -10px;
                }
            }
        } 
        .fetures-text-block{
            padding-left:60px;
            display:flex;
            flex-direction:column;
            justify-content: flex-start;
            
        }
        
        h3{
            font-size: 22px; 
            margin-bottom: 15px;
            font-weight: 600;
            line-height: 30px;
        }
        p{
            margin: 0 0 50px 0;
            font-weight: 300;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 80px 0 0px 0;
    }
    @media only screen and (max-width: 760px) {
        padding: 80px 0 50px 0;
    }
    @media only screen and (max-width: 568px) {
        .fetures-block{
            text-align: center;
        }
        .fetures-icon-block{
            margin: 0 auto 25px auto;
        }
    }
    
`

export default RoadmapSectionWrapper;