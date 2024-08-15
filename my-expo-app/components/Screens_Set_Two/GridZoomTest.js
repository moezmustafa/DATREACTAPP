import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const boxSize = width / 5;

const ZoomableGrid = () => {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handlePinch = (event) => {
    scale.value = withSpring(event.scale);
  };

  const handlePan = (event) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={handlePan}>
      <PinchGestureHandler onGestureEvent={handlePinch}>
        <Animated.View style={[styles.container, animatedStyle]}>
          {Array.from({ length: 25 }).map((_, index) => (
            <View
              key={index}
              style={[styles.box, { backgroundColor: `hsl(${(index * 360) / 25}, 70%, 70%)` }]}
            >
              {/* Example details at different zoom levels */}
              {scale.value > 1.5 && scale.value <= 2.5 && (
                <Text style={styles.details}>Detail Level 1</Text>
              )}
              {scale.value > 2.5 && (
                <Text style={styles.details}>Detail Level 2</Text>
              )}
            </View>
          ))}
        </Animated.View>
      </PinchGestureHandler>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
  },
  box: {
    width: boxSize,
    height: boxSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ZoomableGrid;
