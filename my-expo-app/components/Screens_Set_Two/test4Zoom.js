import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const GridItem = ({ scale, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const itemSize = interpolate(
      scale.value,
      [1, 2],
      [width / 5 - 10, width / 3 - 10],
      Extrapolate.CLAMP
    );
    return {
      width: itemSize,
      height: itemSize,
      transform: [{ scale: scale.value }],
      opacity: scale.value > 1 ? 1 : 0.8, // Adjust opacity based on zoom level
      borderColor: '#000',
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(scale.value, [1, 2], [16, 24], Extrapolate.CLAMP);
    const detailOpacity = scale.value > 1.5 ? 1 : 0;

    return {
      fontSize,
      opacity: detailOpacity,
    };
  });

  return (
    <Animated.View style={[styles.gridItem, animatedStyle]}>
      {scale.value < 1.5 && (
        <Animated.Text style={[styles.text, textStyle]}>{`Item ${index}`}</Animated.Text>
      )}
      {scale.value >= 1.5 && scale.value < 2 && (
        <Animated.Text style={[styles.detailText, textStyle]}>
          {`Detail at 40%: Item ${index}`}
        </Animated.Text>
      )}
      {scale.value >= 2 && (
        <Animated.View style={styles.card}>
          <Text style={styles.cardTitle}>{`Item ${index} Details`}</Text>
          <Text style={styles.cardDetail}>Phone: 123-456-7890</Text>
          <Text style={styles.cardDetail}>Email: example@mail.com</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default function App() {
  const scale = useSharedValue(1);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withTiming(scale.value < 2 ? Math.max(scale.value, 1.2) : 2, { duration: 300 }); // Keep zoomed state or lock at max
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.View style={styles.gridContainer}>
            {Array.from({ length: 9 }, (_, index) => (
              <GridItem key={index} scale={scale} index={index + 1} />
            ))}
          </Animated.View>
        </PinchGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  gridItem: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  detailText: {
    fontSize: 12,
    color: 'blue',
    marginTop: 5,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDetail: {
    fontSize: 16,
    marginTop: 10,
  },
});
