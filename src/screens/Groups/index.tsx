import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import Header from '@components/Header';
import Button from '@components/Button';
import Loading from '@components/Loading';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';

import { groupsGetAll } from '@storage/group/groupGetAll';


import * as Style from './styles';


const Groups: React.FC = () => {
    const navigation = useNavigation();
    const [groups, setGroups] = useState<string[]>([]);
    const [isLoading, setIsloading] = useState(true);

    function handleNewGroup () {
        navigation.navigate('NewGroup')
    }

    async function fetchGroups () {
        try {
            setIsloading(true);
            const data = await groupsGetAll();
            setGroups(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false);
        }
    }

    function handleOpenGroup (group: string) {
        navigation.navigate('Players', { group })
    }

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []));

    return (
        <Style.Container>
            <Header />
            <Highlight
                title='Turmas'
                subTitle='Jogue com sua turma'
            />
            {
                isLoading ?
                    <Loading />
                    :
                    <FlatList
                        data={groups}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <GroupCard
                                title={item}
                                onPress={() => handleOpenGroup(item)}
                            />
                        )}
                        contentContainerStyle={groups.length === 0 && { flex: 1 }}
                        ListEmptyComponent={() => (
                            <ListEmpty
                                message='Que tal cadastrar a primeira turma?'
                            />
                        )}
                    />
            }
            <Button
                onPress={handleNewGroup}
                title='Criar nova turma'
            />
        </Style.Container>
    );
}

export default Groups;