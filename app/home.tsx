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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  reviews: number;
  imageColor: string;
}

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'Doctors' | 'Favorite'>('Doctors');
  const [selectedDate, setSelectedDate] = useState(11);

  const dates = [
    { day: 9, label: 'MON' },
    { day: 10, label: 'TUE' },
    { day: 11, label: 'WED' },
    { day: 12, label: 'THU' },
    { day: 13, label: 'FRI' },
    { day: 14, label: 'SAT' },
  ];

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Olivia Turner',
      title: 'M.D.',
      specialty: 'Dermato-Endocrinology',
      rating: 5,
      reviews: 60,
      imageColor: '#FF6B6B',
    },
    {
      id: '2',
      name: 'Alexander Bennett',
      title: 'Ph.D.',
      specialty: 'Dermato-Genetics',
      rating: 4.5,
      reviews: 40,
      imageColor: '#4ECDC4',
    },
    {
      id: '3',
      name: 'Sophia Martinez',
      title: 'Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      rating: 5,
      reviews: 150,
      imageColor: '#95E1D3',
    },
    {
      id: '4',
      name: 'Michael Davidson',
      title: 'M.D.',
      specialty: 'Nano-Dermatology',
      rating: 4.8,
      reviews: 90,
      imageColor: '#F38181',
    },
  ];

  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 AM'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <View style={styles.profileIcon}>
              <Ionicons name="person" size={24} color="#333" />
            </View>
          </View>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="settings-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Tabs and Search */}
        <View style={styles.tabsSection}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => setActiveTab('Doctors')}
              style={styles.tab}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Doctors' && styles.tabTextActive,
                ]}
              >
                Doctors
              </Text>
              {activeTab === 'Doctors' && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('Favorite')}
              style={styles.tab}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Favorite' && styles.tabTextActive,
                ]}
              >
                Favorite
              </Text>
              {activeTab === 'Favorite' && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="options-outline" size={20} color="#2563EB" />
            <Ionicons name="search-outline" size={20} color="#2563EB" />
          </View>
        </View>

        {/* Date Selector */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateSelector}
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

        {/* Today's Appointments */}
        <View style={styles.appointmentsCard}>
          <Text style={styles.appointmentsTitle}>11 Wednesday - Today</Text>
          <View style={styles.timeSlotsContainer}>
            <View style={styles.timeSlotsColumn}>
              {timeSlots.map((time, index) => (
                <View key={index} style={styles.timeSlot}>
                  <Text style={styles.timeText}>{time}</Text>
                  {time === '10 AM' && (
                    <View style={styles.appointmentCard}>
                      <View style={styles.appointmentHeader}>
                        <Text style={styles.appointmentDoctor}>
                          Dr. Olivia Turner, M.D.
                        </Text>
                        <View style={styles.appointmentIcons}>
                          <TouchableOpacity style={styles.appointmentIcon}>
                            <Ionicons name="checkmark" size={16} color="#2563EB" />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.appointmentIcon}>
                            <Ionicons name="close" size={16} color="#FF6B6B" />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.appointmentDescription}>
                        Treatment and prevention of skin and photodermatitis.
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Doctors List */}
        <View style={styles.doctorsSection}>
          {doctors.map((doctor) => (
            <View key={doctor.id} style={styles.doctorCard}>
              <View
                style={[styles.doctorImage, { backgroundColor: doctor.imageColor }]}
              >
                <Ionicons name="person" size={32} color="#fff" />
              </View>
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>
                  Dr. {doctor.name}, {doctor.title}
                </Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                <View style={styles.doctorStats}>
                  <View style={styles.statItem}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.statText}>{doctor.rating}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Ionicons name="chatbubble-outline" size={16} color="#2563EB" />
                    <Text style={styles.statText}>{doctor.reviews}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.doctorActions}>
                <Link href="/doctors" asChild>
                  <TouchableOpacity style={styles.actionIcon}>
                    <Ionicons name="help-circle-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.actionIcon}>
                  <Ionicons name="heart-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="home" size={24} color="#FFFFFF" />
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
        <Link href="/schedule" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="calendar-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 8,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeSection: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  tabsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  tab: {
    position: 'relative',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  tabTextActive: {
    color: '#2563EB',
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#2563EB',
    borderRadius: 2,
  },
  searchBar: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
  },
  dateSelector: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  dateButton: {
    width: 60,
    height: 70,
    borderRadius: 20,
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
  appointmentsCard: {
    backgroundColor: '#E8F0FE',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  appointmentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 16,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
  },
  timeSlotsColumn: {
    flex: 1,
  },
  timeSlot: {
    minHeight: 60,
    marginBottom: 12,
    position: 'relative',
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  appointmentCard: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    padding: 12,
    marginLeft: 8,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  appointmentDoctor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  appointmentIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  appointmentIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  doctorsSection: {
    paddingHorizontal: 20,
    gap: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F0FE',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  doctorStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  doctorActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
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
});

