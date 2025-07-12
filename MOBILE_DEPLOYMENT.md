# 📱 LinguaLeap Mobile Deployment Guide

## 🚀 Quick Start

LinguaLeap è ora **mobile-ready** con Capacitor! Segui questi passi per pubblicare su Android/iOS.

### 1️⃣ Preparazione Locale

```bash
# 1. Export to GitHub dal bottone "Export to Github"
# 2. Clona il progetto localmente
git clone your-github-repo-url
cd lingua-leap-voyager

# 3. Installa dipendenze
npm install

# 4. Inizializza Capacitor (già configurato!)
npx cap init

# 5. Aggiungi piattaforme
npx cap add android
npx cap add ios

# 6. Build del progetto
npm run build

# 7. Sync con piattaforme native
npx cap sync
```

### 2️⃣ Android Deployment

#### Requisiti:
- **Android Studio** Flamingo 2025.1+
- **SDK** API Level 35 (Android 15)
- **Java** 17+

#### Build Commands:
```bash
# APK Debug (test rapido)
npx cap run android

# APK Release (per distribuzione)
cd android
./gradlew assembleRelease

# App Bundle (Google Play Store - CONSIGLIATO)
./gradlew bundleRelease
```

#### Files generati:
- `android/app/build/outputs/apk/release/app-release.apk`
- `android/app/build/outputs/bundle/release/app-release.aab`

### 3️⃣ iOS Deployment

#### Requisiti:
- **macOS** con Xcode 15+
- **Apple Developer Account** ($99/anno)

#### Build Commands:
```bash
# Apri in Xcode
npx cap open ios

# In Xcode:
# 1. Seleziona Team di sviluppo
# 2. Archive → Distribute App
# 3. Upload to App Store Connect
```

### 4️⃣ Play Store Upload

#### Setup Account:
1. **Google Play Console** ($25 una tantum)
2. **App Bundle Upload** (file .aab)
3. **Store Listing**: 
   - Nome: LinguaLeap
   - Categoria: Education
   - Rating: 3+ years

#### Assets Necessari:
- **Icon**: 512×512 PNG
- **Feature Graphic**: 1024×500 PNG  
- **Screenshots**: 2+ phone + 2+ tablet
- **Privacy Policy**: URL pubblico

### 5️⃣ Funzionalità Mobile Implementate

#### ✅ Ottimizzazioni Esistenti:
- **Haptic Feedback** su tap/successi
- **Status Bar** styling nativo
- **Safe Areas** per notch/home indicator
- **Touch Gestures** ottimizzati
- **Offline Mode** indicator
- **Voice Recording** interface (pronta per plugin)

#### 🎯 Features Capacitor:
```typescript
// Haptics per feedback tattile
import { Haptics } from '@capacitor/haptics';
await Haptics.impact({ style: 'light' });

// Status Bar styling
import { StatusBar } from '@capacitor/status-bar';
await StatusBar.setStyle({ style: 'LIGHT' });

// Notifiche locali (future)
import { LocalNotifications } from '@capacitor/local-notifications';
```

### 6️⃣ Hot Reload per Development

L'app è configurata per **hot-reload** dal sandbox Lovable:
- URL: `https://be4e31bd-c64a-4821-bc60-81440dcf1e4b.lovableproject.com`
- Modifica codice in Lovable → vedi cambiamenti live su device

### 7️⃣ Troubleshooting

#### Build Errors:
```bash
# Clean build
npm run build
npx cap sync
cd android && ./gradlew clean
```

#### Permission Issues:
```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.VIBRATE" />
```

### 8️⃣ Performance Tips

#### Android Optimizations:
- **Target SDK 35** (Android 15) ✅
- **64-bit only** builds ✅  
- **Proguard** enabled per release
- **App Bundle** < 150MB ✅

#### iOS Optimizations:
- **iOS 13+** minimum deployment
- **App Store Guidelines** compliant
- **Privacy labels** configured

---

## 🎉 Ready to Launch!

LinguaLeap ha tutto il necessario per essere pubblicato:
- ✅ **Mobile UI/UX** ottimizzata
- ✅ **Capacitor** configurato
- ✅ **Haptics** e feedback nativi
- ✅ **Build scripts** pronti
- ✅ **Store assets** guidelines

**Prossimi passi**: Export to GitHub → Build → Upload Store!

---

📖 **Documentazione completa**: [Capacitor Docs](https://capacitorjs.com/docs)  
🛠️ **Support**: [Lovable Discord](https://discord.gg/lovable)