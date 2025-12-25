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

export default function DoctorInfoScreen() {
  const [activeSort, setActiveSort] = useState<'A-Z' | 'Star' | 'Heart' | 'Location' | 'Male'>('A-Z');
  const router = useRouter();

  const sortOptions = [
    { id: 'A-Z', icon: 'text-outline', label: 'A-Z' },
    { id: 'Star', icon: 'star-outline', label: '' },
    { id: 'Heart', icon: 'heart-outline', label: '' },
    { id: 'Location', icon: 'location-outline', label: '' },
    { id: 'Male', icon: 'male-outline', label: '' },
  ] as const;

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
        <Text style={styles.headerTitle}>Doctor Info</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="search-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="options-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="chatbubble-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Sort By Section */}
        <View style={styles.sortSection}>
          <Text style={styles.sortLabel}>Sort By</Text>
          <View style={styles.sortButtons}>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setActiveSort(option.id)}
                style={[
                  styles.sortButton,
                  activeSort === option.id && styles.sortButtonActive,
                ]}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={option.icon}
                  size={20}
                  color={activeSort === option.id ? '#FFFFFF' : '#2563EB'}
                />
                {option.label && (
                  <Text
                    style={[
                      styles.sortButtonText,
                      activeSort === option.id && styles.sortButtonTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Doctor Information Card */}
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
                <Text style={styles.infoBoxText}>15 years experience</Text>
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
              <Text style={styles.doctorName}>Dr. Alexander Bennett, Ph.D.</Text>
              <Text style={styles.doctorSpecialty}>Dermato-Genetics</Text>
            </View>

            {/* Ratings, Reviews, and Availability */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Ionicons name="star" size={18} color="#FFD700" />
                <Text style={styles.statText}>5</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={18} color="#2563EB" />
                <Text style={styles.statText}>40</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="calendar-outline" size={18} color="#2563EB" />
                <Text style={styles.statText}>Mon-Sat / 9:00AM - 5:00PM</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.scheduleButton} activeOpacity={0.8}>
                <Ionicons name="calendar-outline" size={20} color="#FFFFFF" />
                <Text style={styles.scheduleButtonText}>Schedule</Text>
              </TouchableOpacity>
              <View style={styles.actionIcons}>
                <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                  <Ionicons name="information-circle-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                  <Ionicons name="help-circle-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                  <Ionicons name="star-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                  <Ionicons name="heart-outline" size={20} color="#2563EB" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Content Sections */}
        <View style={styles.contentSections}>
          {/* Profile Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          {/* Career Path Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Career Path</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          {/* Highlights Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
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
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  headerIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  sortSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sortLabel: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  sortButtons: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
  },
  sortButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DBEAFE',
  },
  sortButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 2,
  },
  sortButtonTextActive: {
    color: '#FFFFFF',
  },
  doctorCard: {
    backgroundColor: '#E8F0FE',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
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
    backgroundColor: '#4ECDC4',
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
    marginBottom: 20,
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
  actionButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  scheduleButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSections: {
    paddingHorizontal: 20,
    gap: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 12,
  },
  sectionText: {
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
});

