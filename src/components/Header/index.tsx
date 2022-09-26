import React from 'react';

import LogoImg from '@assets/logo.png'

import * as Style from './styles';
type Props = {
    showBackButton?: boolean,
}

const Header: React.FC<Props> = ({
    showBackButton = false
}) => {
    return (
        <Style.Container>
            {showBackButton && (
                <Style.BackButton>
                    <Style.BackIcon />
                </Style.BackButton>
            )
            }
            <Style.Logo source={LogoImg} />
        </Style.Container>
    );
}

export default Header;