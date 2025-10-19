# 🎮 Memory Dash - Play Store Bilgileri

## 📱 Gerekli Bilgiler

Lütfen Play Store'dan şu bilgileri sağla:

### 1️⃣ **Package Name (Uygulama ID)**
Play Store URL'inde görünür:
```
https://play.google.com/store/apps/details?id=BURAYA_PACKAGE_NAME
```

Örnek: `com.tealducks.memorydash`

### 2️⃣ **Oyun İkonu URL'si**
Play Store'da sağ tıkla → "Resmi Kopyala" → URL'yi yapıştır

Veya Play Store Console'dan indir ve `/public/` klasörüne koy

### 3️⃣ **Ekran Görüntüleri** (Opsiyonel)
Play Store'dan 2-3 screenshot indir
`/public/screenshots/` klasörüne koy

### 4️⃣ **Güncel İstatistikler**
- İndirme sayısı: (örn: "1K+", "10K+")
- Puan: (örn: 4.5)
- Yorumlar: (opsiyonel)

---

## 🔍 Package Name Nasıl Bulunur?

### Yöntem 1: Play Store URL'den
1. Play Store'da Memory Dash'i aç
2. URL'ye bak:
```
https://play.google.com/store/apps/details?id=com.example.memorydash
                                              ^^^^^^^^^^^^^^^^^^^^
                                              Bu kısım package name
```

### Yöntem 2: Play Console'dan
1. Play Console'a giriş yap
2. Memory Dash'i seç
3. "App content" → "App details"
4. "Application ID" kısmına bak

---

## 📝 Şu Anda Kullanılan (Placeholder):

```javascript
{
  title: "Memory Dash",
  packageName: "com.tealducks.memorydash", // ← Bunu güncelle
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.tealducks.memorydash",
  icon: "https://play-lh.googleusercontent.com/YOUR_ICON_URL", // ← Bunu güncelle
  rating: 4.5,
  downloads: "1K+"
}
```

---

## ✅ Bilgileri Aldıktan Sonra:

Bana şunları söyle:
1. ✅ Package name (örn: `com.tealducks.memorydash`)
2. ✅ İkon URL'si veya dosya yolu
3. ✅ Güncel indirme sayısı
4. ✅ Güncel puan

Ben de siteyi güncelleyeceğim! 🚀
