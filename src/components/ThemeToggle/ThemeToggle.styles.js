import styled from 'styled-components';

// Main clickable button container
export const SwitchButton = styled.button`
  background: none;
  border: 1px solid var(--primary-text);
  border-radius: 30px;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: 50px;   
  height: 25px;  
`;

// The background of the switch that changes color
export const SwitchTrack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme === 'light' ? '#87CEEB' : '#2B3964'};
  transition: background-color 0.4s ease;
`;


export const Thumb = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  
  background-color: ${props => (props.theme === 'light' ? '#FDB813' : '#2B3964')};
  
  box-shadow: ${props => props.theme === 'dark' ? 'inset 5px -4px 0 0 #FFFFFF' : 'none'};
  transform: ${props => props.theme === 'light' ? 'translateX(0)' : 'translateX(25px)'};

  
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
`;

export const Cloud = styled.div`
  position: absolute;
  top: 5px;
  right: -8px;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  box-shadow: 
    -5px 2px 0 -2px white, 
    4px 2px 0 0 white;
  opacity: ${props => props.theme === 'light' ? '1' : '0'};
  transition: opacity 0.4s ease;
`;

export const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: ${props => props.theme === 'dark' ? '1' : '0'};
  transition: opacity 0.4s ease;
`;