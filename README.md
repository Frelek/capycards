# ⚡ FlashMaster — Anki-Like Spaced Repetition App (v2.5)

A modern, mobile-first Progressive Web App (PWA) for language learning equipped with **Anki's SM-2 spaced repetition algorithm**, **Anki TXT & JSON file import**, **Language-Aware Multiple Choice Quiz Mode** (Japanese 🇯🇵, Korean 🇰🇷, English 🇬🇧), **Bilingual Interface** (English 🇬🇧 / Polski 🇵🇱), and **Resilient Safe Progress File Sync** that prevents progress loss across PC and iPhone.

---

## 🌟 Key Features

1. **🧠 True SM-2 Spaced Repetition Engine**
   - Exact Anki rating tiers: **Again (1)**, **Hard (2)**, **Good (3)**, and **Easy (4)**.
   - Dynamic ease factor calculation, learning steps (1 min → 10 min), lapse tracking, and graduation intervals.

2. **🌐 Bilingual Interface (English & Polish)**
   - Select your preferred interface language on first launch (**English** 🇬🇧 or **Polski** 🇵🇱).
   - Switch anytime in **Settings**.

3. **❓ Language-Aware Multiple Choice Quiz & Flip Modes**
   - **Flip Mode**: Classic flashcard flip with spacebar or tap.
   - **Quiz Mode (Multiple Choice)**: Smart 4-choice questions with instant correct/incorrect animations.
   - **Quiz Direction**:
     - *Word → Meaning* (Recognition)
     - *Meaning → Word* (Recall & Production)
   - **Home Screen Filter Tabs**: Filter your decks by language: **All**, **Japanese 🇯🇵**, **Korean 🇰🇷**, **English 🇬🇧**, or **Other 🌐**.
   - **🔊 Text-to-Speech (TTS)**: Listen to native pronunciation (`ja-JP`, `ko-KR`, `en-US`) with one tap!
   - **Furigana Support**: Write `漢字[かんじ]` to render beautiful Japanese ruby characters.

4. **📄 Anki Text File (.txt / .tsv / .csv) Import**
   - Import directly from Anki export files or simple text editors.
   - Supports Tab, Semicolon, Comma, or Pipe separators with automatic detection.
   - Supports metadata headers: `#separator:tab`, `#deck:MyDeck`, `#targetLang:ja`.
   - Supports 3rd column image URLs/base64 or inline `<img src="...">` tags!

5. **🛡️ Safe Progress Sync (PC ⇄ iPhone)**
   - **Problem solved**: When you edit or add new words on your PC and upload the updated file to iPhone, **your existing card review history and intervals are 100% PRESERVED**.
   - **Safe Progress File**: Export `flashmaster-progress-[date].json` from one device and import on another. Cards are matched by ID and normalized text so progress is never lost even if files are renamed.

---

## 🚀 Quick Start

### 💻 Running on PC

1. Open PowerShell / Command Prompt in `anki-app`:
   ```bash
   # Python
   python -m http.server 8080

   # Or Node.js
   npx http-server -p 8080
   ```
2. Navigate to: `http://localhost:8080`
3. Pick your interface language (English or Polski).
4. Tap **🎁 Load Starter Decks** to get instant Japanese, Korean, and English decks!

---

### 📱 Installing on iPhone (Safari PWA)

1. Make sure your iPhone is on the same Wi-Fi network as your PC.
2. Find your PC's IP address (run `ipconfig` in PowerShell, e.g. `192.168.1.150`).
3. Open Safari on iPhone and visit: `http://192.168.1.150:8080`
4. Tap the **Share** button (box with upward arrow) at the bottom.
5. Tap **Add to Home Screen** (`Dodaj do ekranu początkowego`).
6. Launch FlashMaster from your home screen — it runs standalone full-screen like a native iOS app!

*(Alternatively, host the folder on GitHub Pages for 24/7 internet access without local Wi-Fi).*

---

## 📄 Anki TXT Import Format

You can import text files with fields separated by **Tabs**, **Semicolons**, or **Commas**:

```text
#separator:tab
#deck:Japanese Core 🇯🇵
#targetLang:ja
猫[ねこ]	Cat (Kot) 🐱
犬[いぬ]	Dog (Pies) 🐶
水[みず]	Water (Woda) 💧
食べる[たべる]	To eat (Jeść) 🍚
飲む[のむ]	To drink (Pić) 🥤
```

Sample files included in this repo:
- [`japanese_anki_sample.txt`](file:///d:/0_Antigravity/3_Japanese_Learning/anki-app/japanese_anki_sample.txt)
- [`korean_anki_sample.txt`](file:///d:/0_Antigravity/3_Japanese_Learning/anki-app/korean_anki_sample.txt)
- [`english_anki_sample.txt`](file:///d:/0_Antigravity/3_Japanese_Learning/anki-app/english_anki_sample.txt)

---

## 🛡️ Safe Cross-Device Progress Sync Protocol

To transfer progress between PC and iPhone without resetting card learning:

1. **On the device you studied on (e.g., iPhone)**:
   - Go to **⚙️ Settings** → tap **🛡️ Export Safe Progress**.
   - This downloads a compact `flashmaster-progress-[date].json` file.
2. **Send file to your other device**:
   - Send via AirDrop, iCloud Drive, Email, or Messaging app.
3. **On the target device (e.g., PC)**:
   - Go to **⚙️ Settings** → tap **📥 Restore Progress** and select the file.
   - FlashMaster matches every card and restores intervals, ease factors, and due dates.
4. **Re-importing updated decks**:
   - If you add 20 new words to your deck on PC and re-import the file on iPhone:
   - FlashMaster detects the existing deck.
   - Existing cards **keep their exact progress level**.
   - Only the 20 new words are added with "New" status.

---

## ⌨️ Keyboard Shortcuts (PC)

| Key | Flip Mode | Quiz Mode (Multiple Choice) |
|---|---|---|
| `Space` / `Enter` | Show Answer | — |
| `1` | Again (Reset to 1m) | Select Option 1 |
| `2` | Hard (Slower interval) | Select Option 2 |
| `3` | Good (Normal interval) | Select Option 3 |
| `4` | Easy (Long interval) | Select Option 4 |
