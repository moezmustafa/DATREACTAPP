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
    return {
      transform: [{ scale: scale.value }],
      opacity: scale.value > 1.5 ? 1 : 0, // Show details only when zoomed in
    };
  });

  return (
    <Animated.View style={[styles.gridItem, animatedStyle]}>
      <Text style={styles.text}>{`Item ${index}`}</Text>
      {scale.value > 1.5 && <Text style={styles.detailText}>{detailedInfo}</Text>}
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
    backgroundColor: 'red',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  gridItem: {
    borderColor: 'black',
    borderWidth: 1,
    width: (width / 3) - 10,
    height: (height / 6) - 10,
    backgroundColor: '#ddd',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  detailText: {
    fontSize: 12,
    color: 'blue',
    marginTop: 5,
  },
});
