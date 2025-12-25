import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main content */}
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          {/* Medical Cross with Leaves */}
          <View style={styles.logoWrapper}>
            {/* Medical Cross */}
            <View style={styles.crossContainer}>
              <View style={styles.crossVertical} />
              <View style={styles.crossHorizontal} />
            </View>
            
            {/* Leaves */}
            <View style={styles.leavesContainer}>
              <View style={[styles.leaf, styles.leafLeft]} />
              <View style={[styles.leaf, styles.leafRight]} />
            </View>
          </View>
          
          {/* Brand Name */}
          <View style={styles.brandContainer}>
            <Text style={styles.brandName}>Skin</Text>
            <Text style={styles.brandName}>Firts</Text>
          </View>
          
          {/* Tagline */}
          <Text style={styles.tagline}>Dermatology Center</Text>
        </View>

        {/* Description Text */}
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/signup" asChild>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 80,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  crossContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossVertical: {
    position: 'absolute',
    width: 8,
    height: 60,
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  crossHorizontal: {
    position: 'absolute',
    width: 60,
    height: 8,
    backgroundColor: '#2563EB',
    borderRadius: 4,
  },
  leavesContainer: {
    position: 'absolute',
    top: -10,
    right: -5,
    width: 50,
    height: 50,
  },
  leaf: {
    position: 'absolute',
    width: 30,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  leafLeft: {
    top: 5,
    left: 0,
    transform: [{ rotate: '-30deg' }],
  },
  leafRight: {
    top: 8,
    right: 0,
    transform: [{ rotate: '30deg' }],
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2563EB',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '400',
    marginTop: 4,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#E0E7FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  signUpButtonText: {
    color: '#2563EB',
    fontSize: 18,
    fontWeight: '600',
  },
});
