import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

const ProfileScreen = () => {
  return (
    <View className='bg-primary flex-1'>
      <Image source={images.bg} className="absolute w-full z-0 opacity-75"></Image>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View className='items-center mt-20'>

          <Text className='text-white text-xl font-bold mt-10'>John Doe</Text>
          <Text className='text-light-200 text-sm'>johndoe@example.com</Text>
        </View>

        <View className='mt-20 px-5'>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Privacy & Security</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Language Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-secondary rounded-lg py-4 px-4 mb-3'>
            <Text className='text-white text-base font-semibold'>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-red-500 rounded-full py-3 px-4 mt-10 w-32 self-center'>
            <Text className='text-white text-base font-semibold text-center'>Log Out</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
