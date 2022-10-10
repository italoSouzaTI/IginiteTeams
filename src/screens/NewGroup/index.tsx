import React, { useState } from 'react';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';
import { useNavigation } from '@react-navigation/native'

import Input from '@components/Input';
import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';

import { groupCreate } from '@storage/group/groupCreate';

import * as Style from './styles';


const NewGroup: React.FC = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');


  async function handleNew () {
    try {

      if (group.trim().length === 0) {
        Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }
      await groupCreate(group);
      navigation.navigate('Players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possivel criar um novo grupo')
        console.log(error)
      }
    }
  }

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
          onChangeText={setGroup}
        />
        <Button
          onPress={handleNew}
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