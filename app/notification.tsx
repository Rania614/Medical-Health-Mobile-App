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

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
  isUnread?: boolean;
}

interface NotificationGroup {
  date: string;
  notifications: Notification[];
}

export default function NotificationScreen() {
  const router = useRouter();

  const notificationGroups: NotificationGroup[] = [
    {
      date: 'Today',
      notifications: [
        {
          id: '1',
          title: 'Scheduled Appointment',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          time: '2M',
          icon: 'calendar-outline',
        },
        {
          id: '2',
          title: 'Scheduled Change',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          time: '2H',
          icon: 'calendar-outline',
          isUnread: true,
        },
        {
          id: '3',
          title: 'Medical Notes',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          time: '3H',
          icon: 'document-text-outline',
        },
      ],
    },
    {
      date: 'Yesterday',
      notifications: [
        {
          id: '4',
          title: 'Scheduled Appointment',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          time: '1D',
          icon: 'calendar-outline',
        },
      ],
    },
    {
      date: '15 April',
      notifications: [
        {
          id: '5',
          title: 'Medical History Update',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          time: '5D',
          icon: 'chatbubble-outline',
        },
      ],
    },
  ];

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
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.newsButton} activeOpacity={0.7}>
            <Text style={styles.newsButtonText}>News</Text>
            <View style={styles.newsDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.markAllButton} activeOpacity={0.7}>
            <Text style={styles.markAllText}>Mark all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Notification Groups */}
        {notificationGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.notificationGroup}>
            {/* Date Header */}
            <View style={styles.dateHeader}>
              <Text style={styles.dateText}>{group.date}</Text>
            </View>

            {/* Notifications */}
            {group.notifications.map((notification) => (
              <TouchableOpacity
                key={notification.id}
                style={[
                  styles.notificationItem,
                  notification.isUnread && styles.notificationItemUnread,
                ]}
                activeOpacity={0.7}
              >
                <View style={styles.notificationIconContainer}>
                  <Ionicons
                    name={notification.icon}
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>
                    {notification.title}
                  </Text>
                  <Text style={styles.notificationDescription}>
                    {notification.description}
                  </Text>
                </View>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  newsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  newsButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  newsDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563EB',
  },
  markAllButton: {
    padding: 4,
  },
  markAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2563EB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  notificationGroup: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  dateHeader: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 12,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  notificationItemUnread: {
    backgroundColor: '#E8F0FE',
    borderColor: '#DBEAFE',
  },
  notificationIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
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

