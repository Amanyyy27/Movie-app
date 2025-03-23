import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";

export default function Saved() {
  const [savedMovies, setSavedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshSavedMovies, setRefreshSavedMovies] = useState(false); // New state to trigger re-fetch
  const [selectedFilter, setSelectedFilter] = useState<string>("None"); // Track selected filter
  const [modalVisible, setModalVisible] = useState(false); // Control the modal visibility

  // Load saved movies from AsyncStorage
  const loadSavedMovies = async () => {
    try {
      setLoading(true);
      const keys = await AsyncStorage.getAllKeys();
      const movieKeys = keys.filter((key) => key.startsWith("movie-"));
      const movies = await Promise.all(
        movieKeys.map(async (key) => {
          const movie = await AsyncStorage.getItem(key);
          return movie ? JSON.parse(movie) : null;
        })
      );
      // Filter out any movies that don't have a valid id
      setSavedMovies(movies.filter((movie) => movie?.id != null));
    } catch (e) {
      setError("Error loading saved movies.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger the loading of saved movies when component mounts or refreshSavedMovies state changes
  useEffect(() => {
    loadSavedMovies();
  }, [refreshSavedMovies]);

  // Handle filter selection and close the modal
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setModalVisible(false); // Close the modal after selection
    console.log(`Filter applied: ${filter}`);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={require("@/assets/images/bg.png")}
        className="absolute w-full z-0 opacity-75"
      />

      <View className="flex-1 px-5 mt-20">


        
          <View className=" flex-row items-center justify-between p-3">
            <Text className="text-white text-xl font-bold ">Saved Movies</Text>

            <TouchableOpacity
              onPress={() => setModalVisible(true)} // Open the modal
              className="bg-accent p-3 rounded-full px-4 flex-row items-center"
            >
              <Image source={icons.play} className="w-5 h-5" />
            </TouchableOpacity>
          </View>
        
          {/* Display Selected Filter Category */}
    {selectedFilter !== "None" && (
      <Text className="text-light-100 text-sm mt-2 px-3 opacity-75">
        Showing: {selectedFilter}
      </Text>
    )}



        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text className="text-white text-center">{error}</Text>
        ) : savedMovies.length === 0 ? (
          <Text className="text-white text-center">No saved movies.</Text>
        ) : (
          <FlatList
            data={savedMovies}
            renderItem={({ item }) => (
              <MovieCard
                {...item}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            className="mt-10"
            scrollEnabled={false}
          />
        )}
      </View>

      {/* Modal for Filter Options */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Close on back press
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-5 rounded-md w-80">
            <Text className="text-lg font-bold mb-5">Select a Filter</Text>

            {/* Filter Options */}
            <TouchableHighlight
              onPress={() => handleFilterChange("By Title")}
              underlayColor="#DDDDDD"
              className="p-3 mb-3 rounded-md bg-gray-200"
            >
              <Text className="text-black text-center">By Title</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => handleFilterChange("By Date")}
              underlayColor="#DDDDDD"
              className="p-3 mb-3 rounded-md bg-gray-200"
            >
              <Text className="text-black text-center">By Date</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => handleFilterChange("By Rating")}
              underlayColor="#DDDDDD"
              className="p-3 mb-3 rounded-md bg-gray-200"
            >
              <Text className="text-black text-center">By Rating</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => handleFilterChange("None")}
              underlayColor="#DDDDDD"
              className="p-3 mb-3 rounded-md bg-gray-200"
            >
              <Text className="text-black text-center">Clear Filter</Text>
            </TouchableHighlight>

            {/* Close Modal Button */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="p-3 mt-6 bg-accent rounded-full w-full"
            >
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
