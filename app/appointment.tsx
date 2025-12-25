import React from 'react';
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

export default function AppointmentScreen() {
  const router = useRouter();

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
        <Text style={styles.headerTitle}>Your Appointment</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Doctor Information Card */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorCardContent}>
            <View style={styles.doctorImage}>
              <Ionicons name="person" size={50} color="#fff" />
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
              <Text style={styles.doctorSpecialty}>Dermato-Endocrinology</Text>
              <View style={styles.doctorIcons}>
                <View style={styles.iconItem}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.iconText}>5</Text>
                </View>
                <View style={styles.iconItem}>
                  <Ionicons name="chatbubble-outline" size={16} color="#2563EB" />
                  <Text style={styles.iconText}>60</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="help-circle-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="heart-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Appointment Date and Time */}
        <View style={styles.appointmentSection}>
          <View style={styles.dateTimeContainer}>
            <View style={styles.dateButton}>
              <Text style={styles.dateButtonText}>Month 24, Year</Text>
            </View>
            <Text style={styles.timeText}>WED, 10:00 AM</Text>
          </View>
          <View style={styles.actionIcons}>
            <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
              <Ionicons name="checkmark-circle" size={32} color="#2563EB" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
              <Ionicons name="close-circle" size={32} color="#2563EB" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Booking Details */}
        <View style={styles.detailsSection}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Booking For</Text>
            <Text style={styles.detailValue}>Another Person</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Full Name</Text>
            <Text style={styles.detailValue}>Jane Doe</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Age</Text>
            <Text style={styles.detailValue}>30</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>Female</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Problem Description */}
        <View style={styles.problemSection}>
          <Text style={styles.problemTitle}>Problem</Text>
          <Text style={styles.problemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
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
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 16,
  },
  doctorCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  doctorIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  iconText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginVertical: 16,
  },
  appointmentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  dateTimeContainer: {
    flex: 1,
  },
  dateButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
  },
  dateButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  actionIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 16,
    color: '#6B7280',
  },
  problemSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  problemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 12,
  },
  problemText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
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

