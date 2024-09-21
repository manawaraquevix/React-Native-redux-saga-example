import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";




const SecondScreen = () => {
  const [coordinate, setCoordinate] = useState({ lat: 0, long: 0 });

  const handleCurrentLocation = async () => {
    try {
    //   const res = await getCurrentLocation();
    //   setCoordinate({
    //     lat: parseFloat(res[0]),
    //     long: parseFloat(res[1]),
    //   });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueSection}>
        <Text>{`Latitude: ${coordinate.lat}, Longitude: ${coordinate.long}`}</Text>
      </View>

      <Button
        title={'Detect location'}
        onPress={handleCurrentLocation}
      />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueSection: {
    marginBottom: 10,
  },
});