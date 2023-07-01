import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { SIZES, icons } from "../../../constants";

const jobType = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setactiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Harikrishna</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="What are you looking for?"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobType}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setactiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
