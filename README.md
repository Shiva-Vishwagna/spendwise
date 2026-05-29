# 💰 SpendWise — Personal Finance OS

A complete, offline-first personal finance tracker built as a single HTML file. No backend, no server, just drop it into GitHub Pages.

## 🚀 Deploy to GitHub Pages in 3 Steps

1. **Push to your repo:**
   ```bash
   git add index.html
   git commit -m "SpendWise complete rewrite"
   git push origin main
   ```

2. **Enable GitHub Pages:**  
   Go to `Settings → Pages → Source: Deploy from branch → main → / (root)` → Save

3. **Access at:**  
   `https://<your-username>.github.io/<repo-name>/`

---

## ✨ Features

### 💸 Real Account Deductions
- Add multiple bank accounts with live balances
- Every expense, EMI payment, and SIP deduction actually subtracts from the selected account
- Transfer between accounts with full ledger tracking
- Low balance alerts

### 🔁 EMI Tracker
- Track home loans, car loans, personal loans, device EMIs
- See remaining EMIs, progress bars, total pending amount
- 12-month forecast table showing how your EMI burden decreases
- **Smart alerts when an EMI is about to close** (≤3 months left)

### 🤖 AI Financial Adviser
- Auto-generated insights based on your actual spending patterns
- EMI closing alerts with investment suggestions (redirect freed EMI into SIP)
- Financial health score with A/B/C/D grade
- Ask any question — powered by Claude AI with your financial context

### 📈 Investments & SIP
- Track FD, RD, Mutual Funds, Gold, PPF, Stocks, Crypto
- Monthly SIP recording with automatic account deduction
- Portfolio breakdown by instrument type
- Projected returns calculation

### 📊 Reports
- Month-by-month overview
- Category-wise spending breakdown
- 6-month summary table
- Spend vs income vs EMI visualization

### 🔒 Security
- 4-digit PIN lock screen (default: 1234)
- All data stored locally in `localStorage`
- Change PIN anytime in Settings

---

## 📁 File Structure

```
index.html    ← The entire app (single file, ~1000 lines)
README.md     ← This file
```

---

## 💡 First Time Setup

1. Open the app and enter PIN `1234`
2. Go to ⚙️ Settings → Set your monthly income → Save
3. Go to Home → Add Account (tap + Add) → Add your bank accounts with current balances
4. Start adding expenses — select the account you paid from and it auto-deducts
5. Add your EMIs under the EMI tab
6. Add your investments/SIPs under Savings tab

---

## 🔧 Tech Stack

- Pure HTML + CSS + Vanilla JS
- Zero dependencies (fonts loaded from Google Fonts CDN)
- AI features use Anthropic's Claude API (requires API key configured in the claude.ai artifact environment)
- Data stored in `localStorage` — fully offline after first load

---

## 📱 PWA-Ready

Add to home screen on iOS/Android for a native app feel.
