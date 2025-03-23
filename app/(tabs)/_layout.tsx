import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({focused, icon, title}: any) => {
    if(focused){
        return(
            <ImageBackground
            source={images.highlight}
            className="flex flex-row w-[full] flex-1 min-w-[95px] min-h-16 justify-center items-center rounded-full overflow-hidden mt-6"
          >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
          </ImageBackground>
        )
    }
    return(
        <View className="size-full justify-center item-center mt-4 rounded-full">
        <Image source={icon}
        tintColor="#ffffff"
        className="size-5"></Image>
    </View>
    )



};

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent:'center',
                alignItems:'center',
            },
            tabBarStyle:{
                backgroundColor: '#1a1a1a',
                borderRadius: 50,
                marginHorizontal: 10,
                marginBottom: 75,
                height: 55,
                position:'absolute',
                
                borderWidth:1,
                borderColor: '#1A120B '
            }
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.home}
                title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.search}
                title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.save}
                title="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.person}
                title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
