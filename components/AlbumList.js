import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import albumData from "./albums.json"

const Card=()=> {
  return (
    <ScrollView>

      <View style={[styles.cardContainerStyle,styles.fixalbumspace]}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image,
            }}
          />
        </View>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image,
            }}
          />
          <View style={styles.ContentStyle}>
            <Text style={styles.cardtitlestyle}>{albumData[0].title}</Text>
            <Text style={styles.cardtextstyle}>{albumData[0].artist}</Text>
          </View>
        </View>
      </View>


      <View style={[styles.cardContainerStyle,styles.fixalbumspace]}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image,
            }}
          />
        </View>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image,
            }}
          />
          <View style={styles.ContentStyle}>
            <Text style={styles.cardtitlestyle}>{albumData[1].title}</Text>
            <Text style={styles.cardtextstyle}>{albumData[1].artist}</Text>
          </View>
        </View>
      </View>


      <View style={[styles.cardContainerStyle,styles.fixalbumspace]}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image,
            }}
          />
        </View>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image,
            }}
          />
          <View style={styles.ContentStyle}>
            <Text style={styles.cardtitlestyle}>{albumData[2].title}</Text>
            <Text style={styles.cardtextstyle}>{albumData[2].artist}</Text>
          </View>
        </View>
      </View>


      <View style={[styles.cardContainerStyle,styles.fixalbumspace]}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image,
            }}
          />
        </View>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image,
            }}
          />
          <View style={styles.ContentStyle}>
            <Text style={styles.cardtitlestyle}>{albumData[3].title}</Text>
            <Text style={styles.cardtextstyle}>{albumData[3].artist}</Text>
          </View>
        </View>
      </View>


      <View style={[styles.cardContainerStyle,styles.fixalbumspace]}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image,
            }}
          />
        </View>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image,
            }}
          />
          <View style={styles.ContentStyle}>
            <Text style={styles.cardtitlestyle}>{albumData[4].title}</Text>
            <Text style={styles.cardtextstyle}>{albumData[4].artist}</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    marginLeft:3,
    marginTop: 2,
    marginBottom: 5,
    borderRadius:50,
  },
  ContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#060C20",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  cardtitlestyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize:17,
  },
  cardtextstyle: {
    color: "#FFFFFF",
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#060C20",
    borderColor: "#060C20",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 300,
    width: null,
  },
  fixalbumspace:{
    marginBottom:25,
    marginTop: 10,
  }
});


export default Card;