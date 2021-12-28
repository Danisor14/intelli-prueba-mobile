import React, {useEffect, useState} from "react";
import axios from "axios";

import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Image } from "react-native-elements"

const Hero = () => {
    const [heroInfo, setHeroInfo] = useState([]);

    useEffect(async () => {
        const url = "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=15&ts=1&apikey=c4aedd0b064821e9f566355f0415b871&hash=f4314842e631d4dfaa172f605c964ccb";

        try {
            let response = await axios.get(url);
            setHeroInfo(response.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }, []) 

  return (
    <View>
      <ScrollView>
        {heroInfo.map((item) => (
          <Card key={item.id} style={styles.container}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <View style={styles.user}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: "column",
    marginBottom: 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Hero;
