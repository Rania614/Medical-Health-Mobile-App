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

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
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
            <Text style={styles.headerTitle}>New Account</Text>
            <View style={styles.headerSpacer} />
          </View>

          {/* Input Fields */}
          <View style={styles.inputSection}>
            {/* Full name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full name</Text>
              <TextInput
                style={styles.input}
                placeholder="example@example.com"
                placeholderTextColor="#93C5FD"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
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

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
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

            {/* Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="example@example.com"
                placeholderTextColor="#93C5FD"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                keyboardType="phone-pad"
              />
            </View>

            {/* Date Of Birth */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Date Of Birth</Text>
              <TextInput
                style={styles.input}
                placeholder="DD / MM / YYYY"
                placeholderTextColor="#93C5FD"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Terms and Privacy Policy */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By continuing, you agree to{' '}
              <Text style={styles.termsLink}>Terms of Use</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>.
            </Text>
          </View>

          {/* Sign Up Button */}
          <Link href="/set-password" asChild>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>

          {/* Social Sign Up Section */}
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

          {/* Log In Link */}
          <View style={styles.loginSection}>
            <Text style={styles.loginText}>already have an account? </Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Log in</Text>
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
  inputSection: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
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
    backgroundColor: '#E8F0FE',
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
    backgroundColor: '#E8F0FE',
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
  termsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  termsText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    textAlign: 'center',
  },
  termsLink: {
    color: '#2563EB',
    fontWeight: '600',
  },
  signUpButton: {
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
  signUpButtonText: {
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
  loginSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#374151',
  },
  loginLink: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
  },
});

