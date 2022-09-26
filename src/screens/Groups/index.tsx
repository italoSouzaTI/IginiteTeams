import { useState } from 'react';
import { FlatList } from 'react-native';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import React from 'react';


import * as Style from './styles';

const Groups: React.FC = () => {
    const [groups, setGroups] = useState<string[]>([]);
    return (
        <Style.Container>
            <Header />
            <Highlight
                title='Turmas'
                subTitle='Jogue com sua turma'
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Que tal cadastrar a primeira turma?'
                    />
                )}
            />
            <Button
                title='Criar nova turma'
            />

        </Style.Container>
    );
}

export default Groups;