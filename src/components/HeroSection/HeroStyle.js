import styled from "styled-components";
// eslint-disable-next-line 
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  
  border-radius: 45% 5% 45% ;
    margin-top: 5px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='500' height='500' preserveAspectRatio='none' viewBox='0 0 500 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1031%26quot%3b)' fill='none'%3e%3cpath d='M250 645.96C357 657.66 474.06 625.7 543.18 543.18 608.97 464.61 582.11 352.48 581.57 250 581.02 148.44 608.02 35.43 540.12-40.12 470.49-117.61 353.8-127.64 250-118.9 155.17-110.94 76.4-57.9 4.89 4.89-73.54 73.78-172.25 145.65-170.14 250-168.06 353.67-60.93 414.32 14.55 485.45 86.39 553.18 151.84 635.25 250 645.96' fill='rgba(145%2c 94%2c 255%2c 1)'%3e%3c/path%3e%3cpath d='M250 506.21C319.23 513.78 394.98 493.1 439.71 439.71 482.28 388.86 464.9 316.31 464.54 250 464.19 184.29 481.66 111.16 437.73 62.27 392.67 12.14 317.17 5.65 250 11.3 188.64 16.45 137.67 50.77 91.4 91.4 40.65 135.97-23.22 182.48-21.85 250-20.51 317.08 48.81 356.33 97.65 402.35 144.14 446.17 186.49 499.28 250 506.21' fill='rgba(79%2c 0%2c 251%2c 1)'%3e%3c/path%3e%3cpath d='M250 366.46C281.47 369.9 315.9 360.5 336.23 336.23 355.58 313.12 347.68 280.14 347.52 250 347.36 220.13 355.3 186.89 335.33 164.67 314.85 141.88 280.53 138.93 250 141.5 222.11 143.84 198.94 159.44 177.91 177.91 154.84 198.17 125.81 219.31 126.43 250 127.04 280.49 158.55 298.33 180.75 319.25 201.88 339.17 221.13 363.31 250 366.46' fill='rgba(67%2c 0%2c 212%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1031'%3e%3crect width='500' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");    
    width:350px;

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 230px;
    max-height: 380px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 42px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%, GREEN);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
