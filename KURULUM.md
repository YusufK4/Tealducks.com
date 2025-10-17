# 🚀 Tealducks - Kurulum Kılavuzu

## Adım 1: Node.js Kurulumu

Node.js henüz kurulu değil. Kurulum için:

### Homebrew ile Kurulum (ÖNERİLEN)

1. Terminal'i açın
2. Homebrew kurulu değilse önce onu kurun:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Node.js'i kurun:

```bash
brew install node
```

4. Kurulumu doğrulayın:

```bash
node --version
npm --version
```

### Resmi Web Sitesinden Kurulum

Alternatif olarak:

1. https://nodejs.org adresine gidin
2. "LTS" (Long Term Support) versiyonunu indirin
3. İndirilen .pkg dosyasını çalıştırın
4. Kurulum sihirbazını takip edin

## Adım 2: Proje Kurulumu

Node.js kurduktan sonra:

```bash
# Proje klasörüne gidin
cd /Users/yusufk/Desktop/Tealducks.com

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda otomatik olarak `http://localhost:3000` açılacak!

## Adım 3: Özelleştirme

### Oyunlarınızı Ekleyin

`src/components/Games.jsx` dosyasını açın ve oyunlarınızı ekleyin.

### Google Play Linklerini Güncelleyin

Aşağıdaki dosyalarda `YOUR_DEVELOPER_ID` yazan yerleri bulun ve değiştirin:

- `src/components/Hero.jsx`
- `src/components/Games.jsx`
- `src/components/Footer.jsx`

Google Play Developer ID'nizi bulmak için:
1. https://play.google.com/console adresine gidin
2. Herhangi bir uygulamanızın sayfasını açın
3. URL'de `dev?id=` kısmından sonraki sayı sizin ID'nizdir

Örnek: `https://play.google.com/store/apps/dev?id=1234567890123456789`

### İletişim Bilgilerini Güncelleyin

Aşağıdaki dosyalardaki email adreslerini değiştirin:

- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

`info@tealducks.com` → Kendi email adresiniz

## Adım 4: Deployment (Canlıya Alma)

Detaylı deployment talimatları için `DEPLOYMENT_GUIDE.md` dosyasını okuyun.

**En Kolay Yöntem: Vercel**

1. GitHub hesabı oluşturun (yoksa)
2. Projeyi GitHub'a yükleyin
3. Vercel hesabı oluşturun (GitHub ile giriş yapın)
4. Projeyi Vercel'e deploy edin
5. Domain'i bağlayın

Tüm adımlar `DEPLOYMENT_GUIDE.md` dosyasında detaylı anlatılmıştır.

## 📁 Proje Yapısı

```
Tealducks.com/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Üst menü
│   │   ├── Hero.jsx        # Ana sayfa hero bölümü
│   │   ├── Games.jsx       # Oyunlar showcase
│   │   ├── About.jsx       # Hakkımızda
│   │   ├── Contact.jsx     # İletişim formu
│   │   └── Footer.jsx      # Alt bilgi
│   ├── App.jsx             # Ana uygulama
│   ├── main.jsx            # Giriş noktası
│   └── index.css           # Global stiller
├── index.html              # HTML template
├── package.json            # Bağımlılıklar
├── vite.config.js          # Vite konfigürasyonu
├── tailwind.config.js      # TailwindCSS ayarları
├── README.md               # Genel bilgiler
├── DEPLOYMENT_GUIDE.md     # Deployment kılavuzu
└── KURULUM.md             # Bu dosya

```

## 🎨 Özelleştirme İpuçları

### Renkleri Değiştirme

`tailwind.config.js` dosyasındaki `teal` renklerini değiştirebilirsiniz.

### Logo Ekleme

`src/components/Header.jsx` dosyasında `Gamepad2` ikonu yerine kendi logonuzu kullanabilirsiniz.

### Oyun Resimleri

Google Play'den oyun resimlerini alabilirsiniz:
1. Oyununuzun Play Store sayfasına gidin
2. Ekran görüntülerine sağ tıklayın
3. "Resmi Aç" veya "Resim Adresini Kopyala"

### İstatistikleri Güncelleme

`src/components/Hero.jsx` dosyasındaki istatistikleri (indirme sayısı, puan, vs.) güncelleyin.

## 🔧 Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build'i önizleme
npm run preview
```

## ❓ Sık Sorulan Sorular

**S: Değişiklikleri nasıl canlıya alırım?**
C: Değişiklikleri yaptıktan sonra `git add .`, `git commit -m "mesaj"`, `git push` komutlarını çalıştırın. Vercel/Netlify otomatik olarak yeni versiyonu deploy edecek.

**S: Domain yönlendirme ne kadar sürer?**
C: DNS değişiklikleri 10 dakika ile 48 saat arasında sürebilir. Genellikle birkaç saat içinde aktif olur.

**S: SSL sertifikası nasıl eklenir?**
C: Vercel ve Netlify otomatik olarak ücretsiz SSL sertifikası ekler. Herhangi bir şey yapmanıza gerek yok.

**S: Hosting ücretsiz mi?**
C: Evet! Vercel ve Netlify'ın ücretsiz planları hobby projeler için yeterlidir.

## 📞 Yardım

Sorun yaşarsanız:

1. `README.md` dosyasını okuyun
2. `DEPLOYMENT_GUIDE.md` dosyasını okuyun
3. Google'da arama yapın
4. Vercel/Netlify dokümantasyonuna bakın

## ✅ Kurulum Checklist

- [ ] Node.js kuruldu
- [ ] `npm install` çalıştırıldı
- [ ] `npm run dev` ile site açıldı
- [ ] Oyun bilgileri güncellendi
- [ ] Google Play linkleri eklendi
- [ ] İletişim bilgileri güncellendi
- [ ] GitHub'a yüklendi
- [ ] Vercel/Netlify'da deploy edildi
- [ ] Domain bağlandı
- [ ] Site canlı! 🎉

Başarılar! 🚀
