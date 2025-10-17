# ⚡ Hızlı Başlangıç - Tealducks

## 🎯 Yapmanız Gerekenler (Sırayla)

### 1️⃣ Node.js Kurun

Terminal'i açın ve şunu çalıştırın:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

Veya https://nodejs.org adresinden indirin.

### 2️⃣ Projeyi Kurun

```bash
cd /Users/yusufk/Desktop/Tealducks.com
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` açılacak! 🎉

### 3️⃣ Oyunlarınızı Ekleyin

`src/components/Games.jsx` dosyasını açın ve oyunlarınızı ekleyin:

```javascript
const games = [
  {
    id: 1,
    title: "Oyun Adınız",
    description: "Oyun açıklaması",
    image: "https://...",  // Google Play'den resim URL
    rating: 4.5,
    downloads: "100K+",
    playStoreUrl: "https://play.google.com/store/apps/details?id=...",
    category: "Aksiyon"
  }
]
```

### 4️⃣ Google Play Developer ID Ekleyin

Bu dosyalarda `YOUR_DEVELOPER_ID` araması yapın ve değiştirin:
- `src/components/Hero.jsx`
- `src/components/Games.jsx`
- `src/components/Footer.jsx`

Developer ID'nizi bulmak için:
- Google Play Console → Herhangi bir uygulama → URL'deki `dev?id=` sonrası

### 5️⃣ İletişim Bilgilerini Güncelleyin

Bu dosyalarda email adreslerini değiştirin:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### 6️⃣ GitHub'a Yükleyin

```bash
# GitHub'da yeni repo oluşturun: https://github.com/new

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/KULLANICI_ADINIZ/tealducks-website.git
git branch -M main
git push -u origin main
```

### 7️⃣ Vercel'de Deploy Edin

1. https://vercel.com → Sign up (GitHub ile)
2. "New Project" → GitHub reposunu seçin
3. "Deploy" butonuna basın
4. 2-3 dakika bekleyin → Site hazır! 🚀

### 8️⃣ Domain'i Bağlayın

**Vercel'de:**
- Settings → Domains → Domain adınızı ekleyin

**Squarespace'de:**
- Settings → Domains → DNS Settings
- Mevcut kayıtları silin
- Şunları ekleyin:

```
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

### 9️⃣ Bekleyin

DNS değişiklikleri 10 dakika - 48 saat sürebilir.

Kontrol: https://dnschecker.org

### 🎉 Tamamlandı!

Siteniz artık canlı: `https://tealducks.com`

---

## 📚 Detaylı Kılavuzlar

- **KURULUM.md** → Node.js kurulumu ve proje yapısı
- **DEPLOYMENT_GUIDE.md** → Detaylı deployment talimatları
- **README.md** → Genel bilgiler ve dokümantasyon

---

## 🆘 Sorun mu Yaşıyorsunuz?

### "npm: command not found"
→ Node.js kurun: `brew install node`

### Site açılmıyor
→ `npm run dev` çalıştırın ve `http://localhost:3000` açın

### DNS çalışmıyor
→ 24-48 saat bekleyin, DNS propagation sürüyor

### Değişiklikler görünmüyor
→ `git push` yaptınız mı? Vercel otomatik deploy eder

---

## 💡 İpuçları

✅ Her değişiklikten sonra `git push` yapın → Otomatik deploy
✅ Tarayıcı cache'ini temizleyin: `Cmd + Shift + R`
✅ Vercel dashboard'da deployment loglarını kontrol edin
✅ Google Play'den yüksek kaliteli oyun resimleri kullanın

---

## 📞 İletişim

Sorun yaşarsanız:
1. `DEPLOYMENT_GUIDE.md` dosyasını okuyun
2. Vercel docs: https://vercel.com/docs
3. Google'da arama yapın

**Başarılar! 🚀**
