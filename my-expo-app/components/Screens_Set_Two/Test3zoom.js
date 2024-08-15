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
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const GridItem = ({ scale, index }) => {
  const detailedInfo = `Detail for item ${index}`;

  const animatedStyle = useAnimatedStyle(() => {
    const itemSize = withTiming(scale.value * 100); // Adjust the base size as needed
    return {
      width: itemSize,
      height: itemSize,
      transform: [{ scale: scale.value }],
      borderColor: scale.value > 1.5 ? 'blue' : '#000', // Change border color on zoom
      opacity: scale.value > 1.2 ? 1 : 0.5, // Make items slightly transparent when zoomed out
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(scale.value * 16), // Scale the text size
      opacity: scale.value > 1.5 ? 1 : 0, // Show details only when zoomed in
    };
  });

  return (
    <Animated.View style={[styles.gridItem, animatedStyle]}>
      <Animated.Text style={[styles.text, textStyle]}>
        {`Item ${index}`}
      </Animated.Text>
      {scale.value > 1.5 && (
        <Animated.Text style={[styles.detailText, textStyle]}>
          {detailedInfo}
        </Animated.Text>
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
      scale.value = withTiming(1, { duration: 200 }); // Reset scale on pinch end
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.View style={styles.gridContainer}>
            {Array.from({ length: 30 }, (_, index) => (
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
    margin: 10,
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
});
