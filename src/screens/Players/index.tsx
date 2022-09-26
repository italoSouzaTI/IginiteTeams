import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ButtonIcon from '@components/ButtonIcon';
import React from 'react';
import { View } from 'react-native';

import * as Style from './styles';
import Input from '@components/Input';

const Players: React.FC = () => {
    return (
        <Style.Container>
            <Header showBackButton />
            <Highlight
                title='Nome da turma'
                subTitle='adicione a galera e separe os times'
            />
            <Style.Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon="add"
                />
            </Style.Form>
        </Style.Container>
    );
}

export default Players;