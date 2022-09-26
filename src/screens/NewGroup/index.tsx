import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import React from 'react';
import { View } from 'react-native';

import * as Style from './styles';

const NewGroup: React.FC = () => {
  return (
    <Style.Container>
      <Header showBackButton />
      <Style.Content>
        <Style.Icon />
        <Highlight
          title='Nova Turma'
          subTitle='Crie a turma para adicionar as pessoas'
        />
        <Input
          placeholder='Nome da turma'
        />
        <Button
          title='Criar'
          style={{
            marginTop: 20,
          }}
        />
      </Style.Content>
    </Style.Container>
  );
}

export default NewGroup;