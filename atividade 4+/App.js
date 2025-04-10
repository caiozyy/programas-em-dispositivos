import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, TextInput, Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';
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
      bio: "Pedro Pascal é um ator chileno. Ele estudou Artes Cênicas no Estados Unidos e iniciou a carreira no teatro. Na TV, ficou conhecido por seus personagens em 'The Last of Us' (2022), 'Game of Thrones' (2014), 'Narcos' (2015) e 'The Mandalorian' (2019).",
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
    }
  ]
};

const MovieDetailsScreen = ({ navigation }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Ação');
  const [selectedRating, setSelectedRating] = useState('5');
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(25);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movieDetails.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{movieDetails.title}</Text>
      <Text style={styles.movieDescription}>{movieDetails.description}</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Nome" style={styles.input} value={text1} onChangeText={setText1} />
        <TextInput placeholder="Sobrenome" style={styles.input} value={text2} onChangeText={setText2} />
        <TextInput placeholder="Email" style={styles.input} value={text3} onChangeText={setText3} />
        <TextInput placeholder="Status" style={styles.input} value={text4} onChangeText={setText4} />
      </View>

      <Text style={styles.sectionTitle}>Seleções</Text>
      <Picker
        selectedValue={selectedGenre}
        onValueChange={setSelectedGenre}
        style={styles.picker}
        mode="dropdown"
      >
        <Picker.Item label="Ator" value="Ação" />
        <Picker.Item label="Atriz" value="Drama" />

      </Picker>

      <Picker
        selectedValue={selectedRating}
        onValueChange={setSelectedRating}
        style={styles.picker}
        mode="dropdown"
      >
        <Picker.Item label="Masculino" value="1" />
        <Picker.Item label="Feminino" value="2" />
        <Picker.Item label="Outro" value="3" />
      </Picker>


      <Text style={styles.sectionTitle}>Ajustes</Text>
      <Text>Idade: {slider1.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={slider1}
        onValueChange={setSlider1}
      />
      <Text>Força do Personagem: {slider2.toFixed(0)}%</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={slider2}
        onValueChange={setSlider2}
      />

      <View style={styles.switchContainer}>
        <Text>Notificações</Text>
        <Switch value={switch1} onValueChange={setSwitch1} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Salvar</Text>
        <Switch value={switch2} onValueChange={setSwitch2} />
      </View>

      <Text style={styles.sectionTitle}>Opções</Text>
      <Button title="Salvar Dados" onPress={() => alert("Dados salvos!")} />
      <Button title="Limpar" color="red" onPress={() => {
        setText1(''); setText2(''); setText3(''); setText4('');
      }} />

      <Text style={styles.sectionTitle}>Galeria</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <Image source={{ uri: movieDetails.cast[0].image }} style={styles.galleryImage} />
        <Image source={{ uri: movieDetails.cast[1].image }} style={styles.galleryImage} />
        <Image source={require('./assets/icon.png')} style={styles.galleryImage} />
        <Image source={{ uri: 'https://placekitten.com/200/200' }} style={styles.galleryImage} />
        <Image source={{ uri: 'https://placebear.com/200/200' }} style={styles.galleryImage} />
      </ScrollView>

      <Text style={styles.sectionTitle}>Atores</Text>
      <FlatList
        data={movieDetails.cast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actorItem} onPress={() => navigation.navigate("ActorDetails", { actor: item })}>
            <Image source={{ uri: item.image }} style={styles.actorImage} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.actor}</Text>
            </View>
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

      <Text style={styles.sectionTitle}>Filmes</Text>
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
    padding: 10,
    backgroundColor: '#fff',
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  movieDescription: {
    fontSize: 14,
    color: '#333',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  picker: {
    height: 60,
    marginBottom: 80,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actorItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  actorImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  actorImageLarge: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  actorName: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  actorBio: {
    padding: 10,
    textAlign: 'justify',
  },
  backButton: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
});
