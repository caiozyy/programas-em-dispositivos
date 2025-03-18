import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const movieDetails = {
  title: "The Fantastic Four: First Steps",
  description:
    "Um grupo de astronautas passa por uma tempestade cósmica durante seu voo experimental. Ao retornar à Terra, os tripulantes descobrem que possuem novas e bizarras habilidades. Reed Richards pode esticar seu corpo. Sua noiva, Susan Storm, ganha a habilidade de se tornar invisível.",
  budget: 200000000,
  votes: 8500,
  duration: "150 min",
  releaseDate: "2025-06-25",
  image: "https://i0.wp.com/flixlandia.com.br/wp-content/uploads/2025/02/poster-quarteto-fantastico-e1738604111212.webp?fit=1024%2C576&ssl=1",
  cast: [
    { 
      id: "1", 
      name: "Mister Fantastic", 
      actor: "Pedro Pascal", 
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtI--Nu0-VMdnnPuP8OU464_pJqb2RHUow366pRilOePKq6RPo",
      bio: "Pedro Pascal é um ator chileno. Ele estudou Artes Cênicas nos Estados Unidos e iniciou a carreira no teatro. Na TV, ficou conhecido por seus personagens em 'The Last of Us' (2022), 'Game of Thrones' (2014), 'Narcos' (2015) e 'The Mandalorian' (2019).",
      gender: "Masculino",
      birthDate: "1975-04-2",
      birthPlace: "Santiago, Chile",
      movies: [
        { id: "1", title: "Game of Thrones", date: "2011-2019" },
        { id: "2", title: "Gladiador 2", date: "2024-11-14" },
        { id: "3", title: "The Last of Us", date: "Desde 2023-01-15" },
        { id: "4", title: "The Mandalorian & Grogu", date: "2026" }
      ]
    },
    { 
      id: "2", 
      name: "Invisible Woman", 
      actor: "Vanessa Kirb", 
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/631337_v9_bb.jpg",
      bio: "Vanessa Nuala Kirby é uma atriz britânica. É mais conhecida por interpretar Princesa Margaret entre 2016 a 2019 na série de televisão The Crown, da Netflix, papel que lhe rendeu o BAFTA de Melhor Atriz Coadjuvante em Televisão e uma indicação ao Emmy do Primetime de melhor atriz coadjuvante em série dramática.",
      gender: "Feminino",
      birthDate: "1988-04-18",
      birthPlace: "Wimbledon, Londres, Reino Unido",
      movies: [
        { id: "1", title: "Velozes & Furiosos: Hobbs & Shaw", date: "2019-08-01" },
        { id: "2", title: "Pieces of a Woman", date: "2021-01-07" }
      ]
    },
    { 
      id: "3", 
      name: "Human Torch", 
      actor: "Joseph Quinn", 
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUH83daQ_pCl_DjWX4SMYXKGnzjXgYyQW9Q1dnhSCEZWrarkSFGVAP807NotwRKnrYAQVvXMurXuSW6PKhZf3E9A",
      bio: "Joseph Anthony Francis Quinn é um ator britânico. Ele ficou conhecido pelo seu trabalho na série Stranger Things, no papel de Eddie Munson.",
      gender: "Masculino",
      birthDate: "1994-01-26",
      birthPlace: "Londres, Reino Unido",
      movies: [
        { id: "1", title: "Stranger Things", date: "Desde 2016-06-15" },
        { id: "2", title: "Um Lugar Silencioso: Dia Um", date: "2024-05-28" }
      ]
    },
    { 
      id: "4", 
      name: "The Thing", 
      actor: "Ebon Moss-Bachrach", 
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSkuSySaAGiyjUX0aORmeYxZMQe2gxGAP7eAugyfWJxpSozWfwtWwDWzooHQDIwq4xN7UPl_cp4fPXGdGHUrH1lLA",
      bio: "Ebon Moss-Bachrach é um ator norte-americano conhecido por seus papéis nas séries Marvel's The Punisher da Netflix, The Last Ship e The Bear, pelo qual venceu um Critics’ Choice e dois Emmy de Melhor Ator Coadjuvante em Série de Comédia.",
      gender: "Masculino",
      birthDate: "1977-03-19",
      birthPlace: "Nova Iorque, Nova York, EUA",
      movies: [
        { id: "1", title: "The Bear", date: "Desde 2022-05-23" },
        { id: "2", title: "Prenda a Respiração", date: "2024-09-12" }
      ]
    },
    { 
      id: "5", 
      name: "The Galactus", 
      actor: "Ralph Ineson", 
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVDiMZZ-joDum5OadVLfv3r6lVJ7s1nERypThjITJq8a-hqHFUtPRFGSxmHpSgTzFtzyZYbvHO3ncPy-RhYfItYA",
      bio: "Ralph Michael Ineson é um ator e narrador inglês. Conhecido por sua voz profunda e áspera com sotaque de Yorkshire, ele alcançou a fama como Chris Finch na sitcom The Office, da BBC.",
      gender: "Masculino",
      birthDate: "1969-12-15",
      birthPlace: "Leeds, Reino Unido",
      movies: [
        { id: "1", title: "Harry Potter e o Enigma do Príncipe", date: "2009-06-15" },
        { id: "2", title: "Nosferatu", date: "2024-12-25" }
      ]
    },
  ],
};


const MovieDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movieDetails.image }} style={styles.movieImage} />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{movieDetails.title}</Text>
        <Text style={styles.movieDescription}>{movieDetails.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>Orçamento: ${movieDetails.budget.toLocaleString()}</Text>
        <Text>Votos: {movieDetails.votes}</Text>
        <Text>Duração: {movieDetails.duration}</Text>
        <Text>Lançamento: {movieDetails.releaseDate}</Text>
      </View>

      <Text style={styles.sectionTitle}>Atores</Text>
      <FlatList
        data={movieDetails.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.actorItem} 
            onPress={() => navigation.navigate("ActorDetails", { actor: item })}
          >
            <Image source={{ uri: item.image }} style={styles.actorImage} />
            <View>
              <Text style={styles.actorName}>{item.name}</Text>
              <Text style={styles.actorCharacter}>{item.actor}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const ActorDetailsScreen = ({ route, navigation }) => {
  const { actor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: actor.image }} style={styles.actorImageLarge} />

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorBio}>{actor.bio}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text><Text style={styles.detailLabel}>Sexo:</Text> {actor.gender}</Text>
        <Text><Text style={styles.detailLabel}>Data de Nascimento:</Text> {actor.birthDate}</Text>
        <Text><Text style={styles.detailLabel}>Lugar de Nascimento:</Text> {actor.birthPlace}</Text>
      </View>

      <Text style={styles.sectionTitle}>🎬 Filmes</Text>
      <FlatList
        data={actor.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Ionicons name="film-outline" size={24} color="black" style={styles.movieIcon} />
            <View>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="ActorDetails" component={ActorDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieInfo: {
    padding: 10,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movieDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  detailLabel: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15,
  },
  actorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  actorImageLarge: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  actorInfo: {
    padding: 20,
  },
  actorName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actorBio: {
    fontSize: 14,
    marginTop: 10,
    color: "#444",
    textAlign: "justify",
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  movieIcon: {
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieDate: {
    fontSize: 14,
    color: "gray",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    alignSelf: "center",
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
});
