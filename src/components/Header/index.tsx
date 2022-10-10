import React from 'react';
import { useNavigation } from '@react-navigation/native'
import LogoImg from '@assets/logo.png'

import * as Style from './styles';
type Props = {
    showBackButton?: boolean,
}

const Header: React.FC<Props> = ({
    showBackButton = false
}) => {
    const navigation = useNavigation()
    function handleGoBack () {
        navigation.navigate('Groups')
    }
    return (
        <Style.Container>
            {showBackButton && (
                <Style.BackButton
                    onPress={handleGoBack}
                >
                    <Style.BackIcon />
                </Style.BackButton>
            )
            }
            <Style.Logo source={LogoImg} />
        </Style.Container>
    );
}

export default Header;