import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={24} color="#2563EB" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Log In</Text>
            <View style={styles.headerSpacer} />
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Welcome</Text>
            <Text style={styles.welcomeDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputSection}>
            {/* Email or Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email or Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="example@example.com"
                placeholderTextColor="#93C5FD"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor="#93C5FD"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#2563EB"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forget Password Link */}
            <TouchableOpacity style={styles.forgetPasswordContainer}>
              <Text style={styles.forgetPasswordText}>Forget Password</Text>
            </TouchableOpacity>
          </View>

          {/* Log In Button */}
          <Link href="/home" asChild>
            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </Link>

          {/* Social Login Section */}
          <View style={styles.socialSection}>
            <Text style={styles.socialText}>or sign up with</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                <View style={styles.socialIconCircle}>
                  <Text style={styles.socialIconText}>G</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                <View style={styles.socialIconCircle}>
                  <Text style={styles.socialIconText}>f</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                <View style={styles.socialIconCircle}>
                  <Ionicons name="finger-print-outline" size={24} color="#2563EB" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2563EB',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  welcomeSection: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 16,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#9CA3AF',
    lineHeight: 24,
  },
  inputSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#2563EB',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#2563EB',
  },
  eyeButton: {
    padding: 12,
  },
  forgetPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: -8,
  },
  forgetPasswordText: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginBottom: 32,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  socialText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  socialIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  signUpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  signUpText: {
    fontSize: 16,
    color: '#374151',
  },
  signUpLink: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
  },
});

