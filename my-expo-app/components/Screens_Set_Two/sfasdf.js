const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerButton: {
      padding: 10,
    },
    headerButtonText: {
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    filterButton: {
      color: '#4CAF50',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#4CAF50',
      backgroundColor: '#fff',
      fontSize: 14,
      overflow: 'hidden',
    },
    activeFilter: {
      backgroundColor: '#4CAF50',
      color: '#fff',
    },
    moreButton: {
      padding: 5,
      paddingHorizontal: 10,
    },
    moreButtonText: {
      color: '#4CAF50',
      fontSize: 18,
    },
    gridContainer: {
      padding: 10,
    },
    gridItem: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    navigationBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: '#f5f5f5',
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
    },
    navButton: {
      alignItems: 'center',
    },
    navButtonText: {
      color: '#4CAF50',
      fontSize: 12,
    },
    activeNavButton: {
      borderBottomWidth: 2,
      borderBottomColor: '#4CAF50',
    },
    slider: {
      position: 'absolute',
      right: 10,
      top: 50,
      height: 200,
      transform: [{ rotate: '-90deg' }],
    },
  });
  