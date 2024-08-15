import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import {
  PinchGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  interpolate,
  Extrapolate,
  useDerivedValue,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const GridItem = ({ scale, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const itemSize = interpolate(
      scale.value,
      [1, 2, 3, 4],
      [width / 6 - 10, width / 4 - 10, width / 2 - 10, width - 20],
      Extrapolate.CLAMP
    );
    return {
      width: itemSize,
      height: itemSize,
      margin: 5,
    };
  });

  return (
    <Animated.View style={[styles.gridItem, animatedStyle]}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with the actual image source
        style={styles.image}
      />
      {scale.value >= 3 && scale.value < 4 && (
        <View style={styles.stars}>
          <Text style={styles.starsText}>100</Text>
        </View>
      )}
      {scale.value >= 4 && (
        <View style={styles.detailView}>
          <Text style={styles.detailTitle}>Freddie Brown</Text>
          <Text style={styles.detailSubtitle}>
            I will bring good vibes and entrepreneur knowledge as a member
          </Text>
          <View style={styles.socialIcons}>
            {/* Social media icons would go here */}
          </View>
          <Text style={styles.quote}>
            "Don't wait for the perfect moment. Take the moment and make it
            perfect."
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

export default function App() {
  const scale = useSharedValue(1);
  const baseScale = useSharedValue(1);
  const [zoomLevel, setZoomLevel] = useState(1);

  const pinchHandler = useAnimatedGestureHandler({
    onStart: () => {
      baseScale.value = scale.value;
    },
    onActive: (event) => {
      scale.value = baseScale.value * event.scale;
    },
    onEnd: () => {
      scale.value = withTiming(scale.value < 4 ? Math.max(scale.value, 1.2) : 4, { duration: 300 });
    },
  });

  const currentZoomLevel = useDerivedValue(() => {
    return scale.value.toFixed(2);
  });

  useAnimatedReaction(
    () => currentZoomLevel.value,
    (newZoomLevel) => {
      runOnJS(setZoomLevel)(newZoomLevel);
    },
    []
  );

  const getNumColumns = () => {
    if (scale.value >= 4) return 1;
    if (scale.value >= 3) return 2;
    if (scale.value >= 2) return 4;
    return 6;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{ flex: 1 }}>
          <Text style={styles.zoomText}>Zoom Level: {zoomLevel}</Text>
          <FlatList
            data={Array.from({ length: 100 }, (_, index) => index + 1)}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item, index }) => (
              <GridItem scale={scale} index={index} />
            )}
            numColumns={getNumColumns()}
            key={getNumColumns()} // This will re-render the grid when zooming
            contentContainerStyle={styles.gridContainer}
          />
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  stars: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 5,
  },
  starsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  detailSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
    // Icons go here
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    color: '#333',
  },
  zoomText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
});
