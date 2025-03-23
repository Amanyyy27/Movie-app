import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";
import { getTrendingMovies } from "@/services/appwrite";

export default function Index() {
  const router = useRouter();

  // hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  const{
    data:trendingMovies,
    loading: trendingLoading,
    error: trendingError
  } = useFetch(getTrendingMovies);


  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 opacity-75"></Image>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
  source={icons.logo}
  className="w-52 h-28 mt-20 mx-auto"
  resizeMode="contain"
/>

        {moviesLoading || trendingLoading? (
          <ActivityIndicator
            size="large"
            color="#F2613F"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError? (
          <Text className="text-white">Error: {moviesError?.message || trendingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5 ">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
              
            /> 

            <>
              <FlatList 
                data={movies}
                renderItem={({item})=>(
                  <MovieCard
                    {...item}
                  />
                )}
                keyExtractor={(item)=>item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap:20,
                  paddingRight:5,
                  marginBottom:10,
                }}
                className="mt-12 pb-32"
                scrollEnabled={false}
              
              />


            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
