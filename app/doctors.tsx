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

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  imageColor: string;
}

export default function DoctorsScreen() {
  const [activeSort, setActiveSort] = useState<'A-Z' | 'Star' | 'Heart' | 'Female' | 'Male'>('A-Z');
  const router = useRouter();

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Alexander Bennett',
      title: 'Ph.D.',
      specialty: 'Dermato-Genetics',
      imageColor: '#4ECDC4',
    },
    {
      id: '2',
      name: 'Michael Davidson',
      title: 'M.D.',
      specialty: 'Solar Dermatology',
      imageColor: '#F38181',
    },
    {
      id: '3',
      name: 'Olivia Turner',
      title: 'M.D.',
      specialty: 'Dermato-Endocrinology',
      imageColor: '#FF6B6B',
    },
    {
      id: '4',
      name: 'Sophia Martinez',
      title: 'Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      imageColor: '#95E1D3',
    },
  ];

  const sortOptions = [
    { id: 'A-Z', icon: 'text-outline', label: 'A-Z' },
    { id: 'Star', icon: 'star-outline', label: '' },
    { id: 'Heart', icon: 'heart-outline', label: '' },
    { id: 'Female', icon: 'female-outline', label: '' },
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
        <Text style={styles.headerTitle}>Doctors</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="search-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="options-outline" size={24} color="#2563EB" />
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

        {/* Doctors List */}
        <View style={styles.doctorsList}>
          {doctors.map((doctor) => (
            <View key={doctor.id} style={styles.doctorCard}>
              <View
                style={[styles.doctorImage, { backgroundColor: doctor.imageColor }]}
              >
                <Ionicons name="person" size={40} color="#fff" />
              </View>
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>
                  Dr. {doctor.name}, {doctor.title}
                </Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              </View>
              <View style={styles.doctorActions}>
                <Link href="/doctor-info" asChild>
                  <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
                    <Text style={styles.infoButtonText}>Info</Text>
                  </TouchableOpacity>
                </Link>
                <View style={styles.actionIcons}>
                  <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                    <Ionicons name="calendar-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                    <Ionicons name="information-circle-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                    <Ionicons name="help-circle-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
                    <Ionicons name="heart-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
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
    backgroundColor: '#E8F0FE',
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
    gap: 12,
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
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 2,
  },
  sortButtonTextActive: {
    color: '#FFFFFF',
  },
  doctorsList: {
    paddingHorizontal: 20,
    gap: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F0FE',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
    color: '#2563EB',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6B7280',
  },
  doctorActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  infoButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  infoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
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

