# 🧪 Dil Algılama Test Rehberi

## 1️⃣ LocalStorage Temizle

Tarayıcı console'unda çalıştır:
```javascript
localStorage.clear()
location.reload()
```

## 2️⃣ Tarayıcı Dilini Kontrol Et

Console'da çalıştır:
```javascript
console.log('Browser language:', navigator.language)
console.log('Browser languages:', navigator.languages)
```

## 3️⃣ URL ile Test Et

```
http://localhost:3000/?lang=tr   → Türkçe olmalı
http://localhost:3000/?lang=de   → Almanca olmalı
http://localhost:3000/?lang=ar   → Arapça olmalı (RTL)
http://localhost:3000/?lang=en   → İngilizce olmalı
```

## 4️⃣ Tarayıcı Dilini Değiştir

### Chrome:
1. Settings → Languages
2. "Add languages" → Türkçe ekle
3. Türkçe'yi en üste taşı
4. Sayfayı yenile

### Firefox:
1. Settings → Language
2. Choose your preferred language
3. Türkçe'yi en üste taşı
4. Sayfayı yenile

## 5️⃣ Console Logları Kontrol Et

Şunları görmelisin:
```
🌍 Detected browser language: tr-TR (veya senin dilin)
🎯 i18next language: tr (veya en)
```

## ❓ Sorun Giderme

### Eğer hala İngilizce kalıyorsa:

1. **LocalStorage temizle:**
```javascript
localStorage.removeItem('i18nextLng')
location.reload()
```

2. **Tarayıcı dilini kontrol et:**
```javascript
navigator.language  // "tr-TR" gibi olmalı
```

3. **i18next dilini kontrol et:**
```javascript
window.i18n?.language  // Hangi dil seçilmiş?
```
