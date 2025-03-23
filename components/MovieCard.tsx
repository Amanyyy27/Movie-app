import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { icons } from '@/constants/icons';

const MovieCard = ({id, poster_path,title, vote_average, release_date}: Movie) => {
    console.log(poster_path);
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <View className="bg-white/10  rounded-xl p-2">
            <Image
                source={{
                    uri:poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `https://placehold.co/600x400/1a1a1a/ffffff.png`
                }}
                className='w-full aspect-[2/3] rounded-lg'
                resizeMode='cover'
            />
            <Text className='text-white text-base font-bold' numberOfLines={1}>{title}</Text> 

            <View className='flex-row justify-start gap-x-1 items-center'>
                <Image source={icons.star} className='size-3'></Image>
                <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average/2)}</Text>
            </View>

            <View className='flex-row items-center justify-between'>
                <Text className='text-xs text-light-300 font-medium mt-1'>
                    {release_date?.split('-')[0]}
                </Text>
            </View>
            </View>
            
        </TouchableOpacity>
    </Link>

  )
}

export default MovieCard