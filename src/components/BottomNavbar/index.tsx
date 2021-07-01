import useTranslation from 'next-translate/useTranslation';
import Router, {useRouter} from 'next/router';
import { BottomNavigationAction } from '@material-ui/core';
import { 
    StyledBottomNavigation,
    Label 
} from './styles';
import navbarRoutes from '../Navbar/routes';

const BottomNavbar = () => {
    const {t} = useTranslation();
    const {pathname} = useRouter();
    const shouldRender = navbarRoutes.find(r => r.routes.find(_r => _r  === pathname));

    if(!shouldRender) {
        return null;
    }

    const handleChange = (event, newValue) => {
        Router.push(newValue);
    };

    return (
        <StyledBottomNavigation 
            value={pathname} 
            onChange={handleChange}
            showLabels={true} >
            {navbarRoutes.map((r) => (
                <BottomNavigationAction 
                    key={'bottom-navbar-' + r.label} 
                    label={<Label>{t(r.label)}</Label>} 
                    value={r.routes[0]} 
                    icon={<i className={r.icon} />} />
            ))}
        </StyledBottomNavigation>
    )
}

export default BottomNavbar;