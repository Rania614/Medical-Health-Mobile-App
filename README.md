# Medical Health Mobile App

UI implementation of a medical appointment mobile app, built with React Native and Expo. The screens use sample data and are not connected to a backend.

## Screens

- **Account:** onboarding, login, sign up, and set password.
- **Doctors:** home, doctors list, and doctor details.
- **Appointments:** schedule, booking, and appointment summary.
- **Other:** chat, notifications, profile, edit profile, and settings.

## Tech Stack

React Native 0.81, Expo SDK 54, Expo Router, TypeScript, Expo Vector Icons.

## My Role

I built the screens and the navigation between them.

## Technical Challenges & Solutions

### Challenge: Keeping inputs visible above the keyboard

**Problem:** On the form and chat screens, the on-screen keyboard can cover the field being typed in, and it behaves differently on iOS and Android.

**Approach:** Handle the keyboard per platform on every screen that has inputs.

**Solution:** Login, sign up, set password, booking, and chat are wrapped in `KeyboardAvoidingView` with platform-specific behavior. Chat adds an iOS offset for its header, booking keeps taps working while the keyboard is open, and each field uses a matching keyboard type.

**Result:** Fields stay visible while typing on both platforms, and email, phone, and numeric fields open the right keyboard.

### Challenge: A custom screen flow with Expo Router

**Problem:** The design uses its own headers and bottom bar, so the default navigation UI could not be used as is.

**Approach:** Use one stack with native headers hidden and navigate from the custom controls.

**Solution:** The entry route re-exports onboarding so the app opens there. All screens are registered in one stack, custom buttons navigate through `Link asChild`, and back buttons use `router.back()`.

**Result:** The app follows the designed flow from onboarding to home, and from schedule to booking to the appointment summary.

### Challenge: Modeling the booking selections

**Problem:** The booking screen combines a single date, several time slots, a patient type, and a gender choice.

**Approach:** Give each selection typed state that allows only valid values.

**Solution:** The date is a single value, time slots are an array updated by a toggle function, and patient type and gender use TypeScript union types. Active styles are derived from that state.

**Result:** Each control shows its selected state correctly, and invalid option values are caught by TypeScript.

## Known Limitations

- **Sample data:** doctors, appointments, notifications, and chat messages are fixed sample content, with no backend.
- **No authentication or validation:** the login and sign-up buttons navigate straight to the next screen.
- **Display-only controls:** the sort chips and the Doctors/Favorite tabs change their highlight but do not change the list.
- **Booking is not carried forward:** the appointment summary does not use the selections made on the booking screen.
- **Chat is static:** typed messages are not added to the conversation.
- **Repeated bottom bar:** it is written into nine screens and not yet extracted into a shared component.

## Getting Started

```bash
npm install
npx expo start
```

Open the app in Expo Go, an Android emulator, or an iOS simulator.
