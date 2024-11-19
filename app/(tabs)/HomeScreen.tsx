import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, TouchableOpacity, StyleSheet, View, ActivityIndicator } from "react-native";
import { supabase } from "../supabaseClient";

type Grupo = {
  id: string;
  nome: string;
  descricao: string;
};

type Avaliacao = {
  grupo_id: string;
  pontuacao: number;
  feedback: string;
};

export default function HomeScreen({ navigation }: any) {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<{ [key: string]: Avaliacao }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroups();
  }, []);

  async function fetchGroups() {
    try {
      const { data: gruposData, error: gruposError } = await supabase.from("grupos").select("*");
      if (gruposError) throw gruposError;

      const { data: avaliacoesData, error: avaliacoesError } = await supabase.from("avaliacoes").select("*");
      if (avaliacoesError) throw avaliacoesError;

      const avaliacoesMap: { [key: string]: Avaliacao } = {};
      avaliacoesData.forEach((avaliacao: Avaliacao) => {
        avaliacoesMap[avaliacao.grupo_id] = avaliacao;
      });

      setGrupos(gruposData);
      setAvaliacoes(avaliacoesMap);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  const renderGroup = ({ item }: { item: Grupo }) => (
    <TouchableOpacity onPress={() => navigation.navigate("GroupDetails", { groupId: item.id })}>
      <View style={styles.card}>
        <Text style={styles.groupName}>{item.nome}</Text>
        <Text style={styles.groupDescription}>{item.descricao}</Text>
        {avaliacoes[item.id] && (
          <View style={styles.evaluationContainer}>
            <Text style={styles.evaluationScore}>Nota: {avaliacoes[item.id].pontuacao}/10</Text>
            <Text style={styles.evaluationFeedback}>{avaliacoes[item.id].feedback}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={grupos}
        renderItem={renderGroup}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // fundo cinza claro
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // fundo neutro
  },
  card: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000000", 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  groupName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333", // cor de texto mais suave
    marginBottom: 6,
  },
  groupDescription: {
    fontSize: 16,
    color: "#666666", // cor neutra para a descrição
    marginBottom: 12,
  },
  evaluationContainer: {
    marginTop: 15,
    backgroundColor: "#E0E0E0", // fundo leve para avaliações
    padding: 15,
    borderRadius: 6,
  },
  evaluationScore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50", // verde para pontuação
  },
  evaluationFeedback: {
    fontSize: 14,
    color: "#333333", // cor neutra para o feedback
    marginTop: 4,
  },
});
