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

interface Message {
  id: string;
  text: string;
  time: string;
  isSent: boolean;
  isAudio?: boolean;
  audioDuration?: string;
}

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const messages: Message[] = [
    {
      id: '1',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '09:00',
      isSent: true,
    },
    {
      id: '2',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '09:30',
      isSent: false,
    },
    {
      id: '3',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '09:43',
      isSent: true,
    },
    {
      id: '4',
      text: '',
      time: '09:50',
      isSent: false,
      isAudio: true,
      audioDuration: '02:50',
    },
    {
      id: '5',
      text: 'lorem ipsum dolor sit amet. consectetur adipiscing elit.',
      time: '09:55',
      isSent: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dr. Olivia Turner</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="call-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Ionicons name="videocam-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Chat Area */}
        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageContainer,
                msg.isSent ? styles.messageSent : styles.messageReceived,
              ]}
            >
              {msg.isAudio ? (
                <View style={styles.audioMessage}>
                  <View style={styles.audioProfile}>
                    <Ionicons name="person" size={24} color="#fff" />
                  </View>
                  <View style={styles.audioControls}>
                    <TouchableOpacity style={styles.playButton}>
                      <Ionicons name="play" size={20} color="#2563EB" />
                    </TouchableOpacity>
                    <View style={styles.audioProgressBar}>
                      <View style={styles.audioProgress} />
                    </View>
                    <Text style={styles.audioDuration}>{msg.audioDuration}</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.messageBubble}>
                  <Text style={styles.messageText}>{msg.text}</Text>
                </View>
              )}
              <Text style={styles.messageTime}>{msg.time}</Text>
            </View>
          ))}

          {/* Typing Indicator */}
          <View style={styles.typingIndicator}>
            <Text style={styles.typingText}>Dr. Olivia is typing...</Text>
          </View>
        </ScrollView>

        {/* Message Input Bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.inputIcon} activeOpacity={0.7}>
            <Ionicons name="attach-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Write Here..."
            placeholderTextColor="#9CA3AF"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.inputIcon} activeOpacity={0.7}>
            <Ionicons name="mic-outline" size={24} color="#2563EB" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} activeOpacity={0.7}>
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
            <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="chatbubble" size={24} color="#FFFFFF" />
        </TouchableOpacity>
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
    backgroundColor: '#2563EB',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
  },
  chatArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chatContent: {
    padding: 16,
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '75%',
  },
  messageSent: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  messageReceived: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  messageBubble: {
    backgroundColor: '#E8F0FE',
    borderRadius: 16,
    padding: 12,
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
  },
  messageTime: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    borderRadius: 16,
    padding: 12,
    gap: 12,
    marginBottom: 4,
  },
  audioProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioControls: {
    flex: 1,
    gap: 8,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioProgressBar: {
    height: 4,
    backgroundColor: '#DBEAFE',
    borderRadius: 2,
    overflow: 'hidden',
  },
  audioProgress: {
    height: '100%',
    width: '60%',
    backgroundColor: '#2563EB',
  },
  audioDuration: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '500',
  },
  typingIndicator: {
    marginTop: 8,
    marginBottom: 8,
  },
  typingText: {
    fontSize: 14,
    color: '#2563EB',
    fontStyle: 'italic',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
  },
  inputIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#374151',
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2563EB',
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
  navItemActive: {
    opacity: 1,
  },
});

