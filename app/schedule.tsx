import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(24);
  const [currentMonth, setCurrentMonth] = useState('MONTH');
  const router = useRouter();

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

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
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="calendar-outline" size={20} color="#2563EB" />
            <Text style={styles.headerIconText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="time-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="videocam-outline" size={20} color="#2563EB" />
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Doctor Profile Card */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorCardContent}>
            {/* Doctor Image */}
            <View style={styles.doctorImageContainer}>
              <View style={styles.doctorImage}>
                <Ionicons name="person" size={60} color="#fff" />
              </View>
            </View>

            {/* Experience and Focus Boxes */}
            <View style={styles.infoBoxes}>
              <View style={styles.infoBox}>
                <Ionicons name="bulb-outline" size={20} color="#2563EB" />
                <Text style={styles.infoBoxText}>20 years experience</Text>
              </View>
              <View style={styles.focusBox}>
                <Text style={styles.focusLabel}>Focus:</Text>
                <Text style={styles.focusText}>
                  The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.
                </Text>
              </View>
            </View>

            {/* Doctor Name and Specialty */}
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
              <Text style={styles.doctorSpecialty}>Dermato-Endocrinology</Text>
            </View>

            {/* Ratings, Reviews, and Availability */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Ionicons name="star" size={18} color="#FFD700" />
                <Text style={styles.statText}>4,5</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={18} color="#2563EB" />
                <Text style={styles.statText}>30</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="calendar-outline" size={18} color="#2563EB" />
                <Text style={styles.statText}>Mon - Sat / 9 AM - 4 PM</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Profile Description Section */}
        <View style={styles.profileSection}>
          <Text style={styles.profileTitle}>Profile</Text>
          <Text style={styles.profileText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>

        {/* Book Appointment Button */}
        <View style={styles.buttonContainer}>
          <Link href="/booking" asChild>
            <TouchableOpacity style={styles.bookButton} activeOpacity={0.8}>
              <Text style={styles.bookButtonText}>Book Appointment</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarCard}>
          {/* Month Navigation */}
          <View style={styles.monthNavigation}>
            <TouchableOpacity style={styles.monthArrow} activeOpacity={0.7}>
              <Ionicons name="chevron-back" size={20} color="#2563EB" />
            </TouchableOpacity>
            <Text style={styles.monthText}>{currentMonth}</Text>
            <TouchableOpacity style={styles.monthArrow} activeOpacity={0.7}>
              <Ionicons name="chevron-forward" size={20} color="#2563EB" />
            </TouchableOpacity>
          </View>

          {/* Days of Week */}
          <View style={styles.daysOfWeek}>
            {daysOfWeek.map((day, index) => (
              <View
                key={index}
                style={[
                  styles.dayOfWeek,
                  day === 'THU' && styles.dayOfWeekActive,
                ]}
              >
                <Text
                  style={[
                    styles.dayOfWeekText,
                    day === 'THU' && styles.dayOfWeekTextActive,
                  ]}
                >
                  {day}
                </Text>
              </View>
            ))}
          </View>

          {/* Date Grid */}
          <View style={styles.dateGrid}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date}
                onPress={() => setSelectedDate(date)}
                style={[
                  styles.dateItem,
                  selectedDate === date && styles.dateItemActive,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.dateTextActive,
                  ]}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

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
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  headerIconText: {
    fontSize: 10,
    color: '#2563EB',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  doctorCard: {
    backgroundColor: '#E8F0FE',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  doctorCardContent: {
    alignItems: 'center',
  },
  doctorImageContainer: {
    marginBottom: 20,
  },
  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  infoBoxes: {
    width: '100%',
    gap: 12,
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  infoBoxText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  focusBox: {
    backgroundColor: '#DBEAFE',
    padding: 16,
    borderRadius: 12,
  },
  focusLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 8,
  },
  focusText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  doctorDetails: {
    alignItems: 'center',
    marginBottom: 16,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '100%',
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
  profileSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 12,
  },
  profileText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  calendarCard: {
    backgroundColor: '#E8F0FE',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  monthArrow: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayOfWeek: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayOfWeekActive: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
  },
  dayOfWeekText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },
  dayOfWeekTextActive: {
    color: '#FFFFFF',
  },
  dateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  dateItem: {
    width: '12%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  dateItemActive: {
    backgroundColor: '#2563EB',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  dateTextActive: {
    color: '#FFFFFF',
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
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
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
});

