import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';

export default function BookingScreen() {
  const [selectedDate, setSelectedDate] = useState(24);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [patientType, setPatientType] = useState<'Yourself' | 'Another Person'>('Another Person');
  const [fullName, setFullName] = useState('Jane Doe');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Female');
  const [problem, setProblem] = useState('');
  const router = useRouter();

  const dates = [
    { day: 22, label: 'MON' },
    { day: 23, label: 'TUE' },
    { day: 24, label: 'WED' },
    { day: 25, label: 'THU' },
    { day: 26, label: 'FRI' },
    { day: 27, label: 'SAT' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
    '11:30 AM', '12:00 M', '12:30 M', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  ];

  const toggleTime = (time: string) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(t => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#2563EB" />
        </TouchableOpacity>
        <View style={styles.doctorNameContainer}>
          <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="videocam-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="call-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="chatbubble-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="help-circle-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="heart-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Date Selection Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Month</Text>
              <Ionicons name="chevron-down" size={20} color="#2563EB" />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dateScroll}
            >
              {dates.map((date) => (
                <TouchableOpacity
                  key={date.day}
                  onPress={() => setSelectedDate(date.day)}
                  style={[
                    styles.dateButton,
                    selectedDate === date.day && styles.dateButtonActive,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.dateNumber,
                      selectedDate === date.day && styles.dateNumberActive,
                    ]}
                  >
                    {date.day}
                  </Text>
                  <Text
                    style={[
                      styles.dateLabel,
                      selectedDate === date.day && styles.dateLabelActive,
                    ]}
                  >
                    {date.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Available Time Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Time</Text>
            <View style={styles.timeGrid}>
              {timeSlots.map((time) => {
                const isSelected = selectedTimes.includes(time);
                return (
                  <TouchableOpacity
                    key={time}
                    onPress={() => toggleTime(time)}
                    style={[
                      styles.timeSlot,
                      isSelected && styles.timeSlotActive,
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        isSelected && styles.timeTextActive,
                      ]}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Patient Details Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Patient Details</Text>
            
            {/* Patient Type Toggle */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                onPress={() => setPatientType('Yourself')}
                style={[
                  styles.toggleButton,
                  patientType === 'Yourself' && styles.toggleButtonActive,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.toggleText,
                    patientType === 'Yourself' && styles.toggleTextActive,
                  ]}
                >
                  Yourself
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPatientType('Another Person')}
                style={[
                  styles.toggleButton,
                  patientType === 'Another Person' && styles.toggleButtonActive,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.toggleText,
                    patientType === 'Another Person' && styles.toggleTextActive,
                  ]}
                >
                  Another Person
                </Text>
              </TouchableOpacity>
            </View>

            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter full name"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Age */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Age</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Enter age"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
              />
            </View>

            {/* Gender */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Gender</Text>
              <View style={styles.genderContainer}>
                {(['Male', 'Female', 'Other'] as const).map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setGender(option)}
                    style={[
                      styles.genderButton,
                      gender === option && styles.genderButtonActive,
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.genderText,
                        gender === option && styles.genderTextActive,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Problem Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Describe your problem</Text>
            <TextInput
              style={styles.textArea}
              value={problem}
              onChangeText={setProblem}
              placeholder="Enter Your Problem Here..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          {/* Book Appointment Button */}
          <View style={styles.buttonContainer}>
            <Link href="/appointment" asChild>
              <TouchableOpacity style={styles.bookButton} activeOpacity={0.8}>
                <Text style={styles.bookButtonText}>Book Appointment</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
        <Link href="/chat" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="calendar" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorNameContainer: {
    flex: 1,
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 16,
  },
  dateScroll: {
    gap: 12,
    paddingRight: 20,
  },
  dateButton: {
    width: 70,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dateButtonActive: {
    backgroundColor: '#2563EB',
  },
  dateNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  dateNumberActive: {
    color: '#FFFFFF',
  },
  dateLabel: {
    fontSize: 12,
    color: '#2563EB',
  },
  dateLabelActive: {
    color: '#FFFFFF',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeSlot: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#E8F0FE',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  timeSlotActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  timeTextActive: {
    color: '#FFFFFF',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#2563EB',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  toggleTextActive: {
    color: '#FFFFFF',
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
    paddingVertical: 14,
    fontSize: 16,
    color: '#374151',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  genderButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  genderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  genderTextActive: {
    color: '#FFFFFF',
  },
  textArea: {
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#374151',
    borderWidth: 1,
    borderColor: '#DBEAFE',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bookButton: {
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
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    padding: 8,
  },
  navItemActive: {
    opacity: 1,
  },
});

