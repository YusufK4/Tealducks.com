# 🚀 Tealducks Deployment Kılavuzu

Bu kılavuz, Tealducks web sitenizi canlıya almak için adım adım talimatlar içerir.

## 📋 İçindekiler

1. [Hızlı Başlangıç](#hızlı-başlangıç)
2. [Vercel ile Deployment (ÖNERİLEN)](#vercel-ile-deployment)
3. [Netlify ile Deployment](#netlify-ile-deployment)
4. [Squarespace Domain Yönlendirme](#squarespace-domain-yönlendirme)
5. [Sorun Giderme](#sorun-giderme)

---

## Hızlı Başlangıç

### Önce Yapmanız Gerekenler

1. ✅ Node.js kurulu olmalı (https://nodejs.org)
2. ✅ Git kurulu olmalı (https://git-scm.com)
3. ✅ GitHub hesabı (https://github.com)
4. ✅ Squarespace'den aldığınız domain

### İlk Kurulum

Terminal'i açın ve proje klasörüne gidin:

```bash
cd /Users/yusufk/Desktop/Tealducks.com
```

Bağımlılıkları yükleyin:

```bash
npm install
```

Yerel olarak test edin:

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` açılacak.

---

## Vercel ile Deployment (ÖNERİLEN)

Vercel, en kolay ve ücretsiz hosting seçeneğidir. Otomatik SSL, CDN ve sürekli deployment sunar.

### Adım 1: GitHub'a Yükleyin

1. GitHub'da yeni bir repository oluşturun: https://github.com/new
   - Repository adı: `tealducks-website`
   - Public veya Private seçebilirsiniz
   - README eklemeyin (zaten var)

2. Terminal'de projenizi GitHub'a yükleyin:

```bash
cd /Users/yusufk/Desktop/Tealducks.com

# Git başlat
git init

# Dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Tealducks website"

# GitHub reposunu bağla (KULLANICI_ADINIZ yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/KULLANICI_ADINIZ/tealducks-website.git

# Push et
git branch -M main
git push -u origin main
```

### Adım 2: Vercel Hesabı Oluşturun

1. https://vercel.com adresine gidin
2. "Sign Up" tıklayın
3. "Continue with GitHub" seçin
4. GitHub hesabınızla giriş yapın

### Adım 3: Projeyi Deploy Edin

1. Vercel dashboard'da "Add New..." > "Project" tıklayın
2. GitHub reposunu seçin: `tealducks-website`
3. Vercel otomatik olarak ayarları algılayacak:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. "Deploy" butonuna basın

⏱️ İlk deployment 2-3 dakika sürer.

✅ Deployment tamamlandığında size bir URL verilecek: `https://tealducks-website.vercel.app`

### Adım 4: Custom Domain Ekleyin

1. Vercel dashboard'da projenize gidin
2. "Settings" > "Domains" tıklayın
3. Domain adınızı girin (örn: `tealducks.com`)
4. "Add" tıklayın

Vercel size DNS kayıtlarını gösterecek. Şimdi Squarespace'e geçin:

---

## Squarespace Domain Yönlendirme

### Squarespace DNS Ayarları

1. Squarespace hesabınıza giriş yapın: https://account.squarespace.com
2. "Settings" > "Domains" > Domain adınızı seçin
3. "DNS Settings" tıklayın

### Vercel için DNS Kayıtları

**Mevcut kayıtları silin veya devre dışı bırakın**, sonra şunları ekleyin:

#### A Record (Root Domain için)

```
Type: A
Host: @
Value: 76.76.21.21
TTL: 3600
```

#### CNAME Record (www için)

```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

### DNS Doğrulama

1. Kayıtları ekledikten sonra "Save" tıklayın
2. Vercel'e geri dönün
3. "Refresh" veya "Verify" butonuna basın
4. DNS propagation 10 dakika - 48 saat sürebilir

**DNS Kontrolü:**
- https://dnschecker.org adresine gidin
- Domain adınızı girin
- A ve CNAME kayıtlarının yayıldığını kontrol edin

---

## Netlify ile Deployment

Alternatif olarak Netlify de kullanabilirsiniz.

### Adım 1: GitHub'a Yükleyin

(Yukarıdaki Vercel bölümündeki GitHub adımlarını takip edin)

### Adım 2: Netlify Hesabı

1. https://netlify.com adresine gidin
2. "Sign Up" > "GitHub" ile giriş yapın

### Adım 3: Deploy Edin

1. "Add new site" > "Import an existing project"
2. "Deploy with GitHub" seçin
3. Repository'yi seçin: `tealducks-website`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" tıklayın

### Adım 4: Custom Domain

1. Site settings > "Domain management"
2. "Add custom domain"
3. Domain adınızı girin

**Netlify DNS Kayıtları:**

```
Type: A
Host: @
Value: 75.2.60.5

Type: CNAME
Host: www
Value: [site-adi].netlify.app
```

---

## Özelleştirmeler

### Oyunlarınızı Ekleyin

`src/components/Games.jsx` dosyasını açın ve oyunlarınızı ekleyin:

```javascript
const games = [
  {
    id: 1,
    title: "Oyununuzun Adı",
    description: "Oyununuzun kısa açıklaması",
    image: "https://play-lh.googleusercontent.com/...", // Google Play'den resim URL'i
    rating: 4.5,
    downloads: "100K+",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.yourgame",
    category: "Aksiyon" // veya "Bulmaca", "Macera", vs.
  },
  // Daha fazla oyun ekleyin...
]
```

### Google Play Developer ID

Dosyalarda `YOUR_DEVELOPER_ID` araması yapın ve kendi ID'nizi yazın:

```bash
# Terminal'de arama yapın
grep -r "YOUR_DEVELOPER_ID" src/
```

Google Play Developer ID'nizi bulmak için:
1. Google Play Console'a gidin
2. Herhangi bir uygulamanızın sayfasını açın
3. URL'de `id=` kısmından sonraki sayı sizin developer ID'nizdir

### İletişim Bilgileri

`src/components/Contact.jsx` ve `src/components/Footer.jsx` dosyalarındaki email adreslerini güncelleyin:

- `info@tealducks.com` → Kendi email adresiniz
- `support@tealducks.com` → Destek email adresiniz

### Değişiklikleri Yayınlama

Değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Oyunlar ve iletişim bilgileri güncellendi"
git push
```

Vercel/Netlify otomatik olarak yeni versiyonu deploy edecek! 🎉

---

## Sorun Giderme

### Problem: "npm: command not found"

**Çözüm:** Node.js kurulu değil. https://nodejs.org adresinden indirin ve kurun.

### Problem: DNS değişiklikleri çalışmıyor

**Çözüm:**
1. DNS propagation 24-48 saat sürebilir, bekleyin
2. DNS kayıtlarını kontrol edin: https://dnschecker.org
3. Squarespace'de eski kayıtları sildiğinizden emin olun
4. TTL değerini düşürün (300 veya 600)

### Problem: Site yüklenmiyor veya 404 hatası

**Çözüm:**
1. Vercel/Netlify dashboard'da deployment loglarını kontrol edin
2. Build başarılı mı kontrol edin
3. Domain ayarlarının doğru olduğundan emin olun

### Problem: Değişiklikler görünmüyor

**Çözüm:**
1. Tarayıcı cache'ini temizleyin (Cmd+Shift+R)
2. Vercel/Netlify'da son deployment'ın başarılı olduğunu kontrol edin
3. Git push yaptığınızdan emin olun

### Problem: SSL sertifikası hatası

**Çözüm:**
1. DNS kayıtlarının doğru olduğundan emin olun
2. 24 saat bekleyin (SSL sertifikası otomatik oluşturulur)
3. Vercel/Netlify'da "Renew SSL Certificate" deneyin

---

## 📞 Yardım

Sorun yaşarsanız:

1. README.md dosyasını okuyun
2. Vercel/Netlify dokümantasyonuna bakın:
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com
3. GitHub Issues açın

---

## ✅ Checklist

Deployment öncesi kontrol listesi:

- [ ] Node.js ve npm kurulu
- [ ] Proje yerel olarak çalışıyor (`npm run dev`)
- [ ] Oyun bilgileri güncellendi
- [ ] İletişim bilgileri güncellendi
- [ ] Google Play Developer ID eklendi
- [ ] GitHub'a yüklendi
- [ ] Vercel/Netlify'da deploy edildi
- [ ] Custom domain eklendi
- [ ] DNS kayıtları Squarespace'e eklendi
- [ ] SSL sertifikası aktif
- [ ] Site canlı ve çalışıyor! 🎉

---

## 🎉 Tebrikler!

Web siteniz artık canlı! Başarılar dileriz! 🚀
