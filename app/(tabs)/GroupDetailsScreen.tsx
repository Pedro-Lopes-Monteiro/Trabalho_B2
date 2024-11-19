import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout'; // Caminho correto para o arquivo de tipos

// Tipando as props do componente
type Props = {
  route: RouteProp<RootStackParamList, 'GroupDetails'>;
};

const GroupDetailsScreen: React.FC<Props> = ({ route }) => {
  // Acesso ao parâmetro da rota
  const { groupName, projectDescription, detailedDescription, members } = route.params.group;

  return (
    <View>
      <Text>Group Name: {groupName}</Text>
      <Text>Project Description: {projectDescription}</Text>
      <Text>Detailed Description: {detailedDescription}</Text>
      <Text>Members: {members.join(', ')}</Text>
    </View>
  );
};

export default GroupDetailsScreen;
