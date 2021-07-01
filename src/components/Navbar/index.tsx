import useTranslation from 'next-translate/useTranslation';
import Router, {useRouter} from 'next/router';
import { 
    Container,
    Item
} from './styles';
import navbarRoutes from './routes';

const Navbar = () => {
    const {t} = useTranslation();
    const {pathname} = useRouter();

    const onChangeRoute = (route) => {
        Router.push(route);
    }

    return (
        <Container>
            {navbarRoutes.map((r) => (
                <Item 
                    key={'navbar-item-' + r.label}
                    onClick={() => onChangeRoute(r.routes[0])}
                   isCurrent={r.routes.find(_r => _r  === pathname) !== undefined} >{t(r.label)}</Item>
            ))}
        </Container>
    )
}

export default Navbar;