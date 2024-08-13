import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView, PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const scale = useSharedValue(1);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = 1;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const boxes = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    color: `hsl(${Math.random() * 360}, 100%, 75%)`,
  }));

  const handleBoxPress = (box) => {
    setSelectedBox(box);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const { width } = Dimensions.get('window');
  const boxSize = width / 5 - 10;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.View style={[styles.grid, animatedStyle]}>
            {boxes.map((box) => (
              <TouchableOpacity
                key={box.id}
                style={[styles.box, { backgroundColor: box.color, width: boxSize, height: boxSize }]}
                onPress={() => handleBoxPress(box)}
              />
            ))}
          </Animated.View>
        </PinchGestureHandler>
        <Modal
          visible={isVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={handleCloseModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={handleCloseModal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Box ID: {selectedBox?.id}</Text>
              <Text style={styles.modalText}>Color: {selectedBox?.color}</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden', // Added to handle scaling within bounds
  },
  box: {
    margin: 5,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
