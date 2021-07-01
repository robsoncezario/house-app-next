import {
    useState,
    useEffect 
} from 'react';
import { createPortal } from 'react-dom';

const Portal = ({
    children,
    element = 'div',
  }) => {
    const [container, setContainer] = useState<HTMLElement | null>();

    const handleUseEffect = () => {
        const el = document.createElement(element);
        document.body.appendChild(el)
        setContainer(el);
        
        return () => {
          document.body.removeChild(el)
        }
    }
  
    useEffect(handleUseEffect, [])
    
    return container ? createPortal(children, container) : null;
}

export default Portal;