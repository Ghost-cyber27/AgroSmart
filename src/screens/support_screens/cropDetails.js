import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CropDetails() {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Image source={{ uri: item.image }} style={styles.img} />

      <View style={styles.content}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Category: {item.category}</Text>

        <Text style={styles.text}>Details About {item.name}</Text>

        <Text style={styles.text}>Soil Type: {item.soil_type.join(", ")}</Text>

        <Text style={styles.text}>Climate Preferred: {item.climate}</Text>
        <Text style={styles.text}>Season to plant: {item.season}</Text>
        <Text style={styles.text}>Watering Rate: {item.water_requirement}</Text>

        <Text style={styles.h1}>Watering Advice:</Text>
        <Text style={styles.text}>{item.watering_advice}</Text>

        <Text style={styles.text}>
          Duration of Growth: {item.growth_duration_days} days
        </Text>

        <Text style={styles.h1}>Fertilizer Recommendation</Text>
        <Text style={styles.text}>{item.fertilizer_recommendation}</Text>

        <Text style={styles.text}>Farming Tips</Text>

        <Text style={styles.h1}>Pest Control:</Text>
        {item.pest_control.map((pest, index) => (
          <Text key={index} style={styles.text}>
            • {pest}
          </Text>
        ))}

        <Text style={styles.h1}>Common Diseases:</Text>
        {item.common_diseases.map((disease, index) => (
          <Text key={index} style={styles.text}>
            • {disease}
          </Text>
        ))}

        <Text style={styles.h1}>Harvest Advice:</Text>
        <Text style={styles.text}>{item.harvest_advice}</Text>

        <Text style={styles.h1}>Storage Advice:</Text>
        <Text style={styles.text}>{item.storage_advice}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    paddingBottom: hp("10%"), // extra space at the bottom
  },
  img: {
    width: wp("100%"),
    height: hp("40%"),
  },
  content: {
    padding: wp("2%"),
    width: wp("100%"),
    gap: hp("1%"),
  },
  text: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  h1: {
    fontSize: 20,
    fontFamily: "Black",
  },
});
