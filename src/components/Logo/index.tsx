import Router from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {
    Row,
    Icon,
    Name 
} from './styles';

const Logo = () => {
    const {t} = useTranslation();
    const handleClick = () => {
        Router.push('/');
    }

    return (
        <Row onClick={handleClick}>
            <Icon className='fad fa-house' />
            <Name>{t('common:app')}</Name>
        </Row>
    )
}

export default Logo;