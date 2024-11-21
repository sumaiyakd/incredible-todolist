// layouts/MainLayout.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';  // Import Footer component

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}  {/* The screen content will be passed here */}
      <Footer />  {/* Footer will always be displayed at the bottom */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default MainLayout;
