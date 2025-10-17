# Tealducks - Mobile Game Developer Website

Modern, responsive ve profesyonel bir mobil oyun geliştiricisi web sitesi.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🎮 Oyun showcase sayfası
- 📱 Mobil uyumlu
- ⚡ Hızlı ve optimize edilmiş
- 🎨 TailwindCSS ile stillendirilmiş
- ⚛️ React ile geliştirilmiş

## 📦 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın: `http://localhost:3000`

## 🏗️ Production Build

Production için build almak için:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 🌐 Deployment (Yayınlama)

### Seçenek 1: Vercel (ÖNERİLEN - ÜCRETSİZ)

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub'a projeyi yükleyin
3. Vercel'de "New Project" tıklayın
4. GitHub reposunu seçin
5. Deploy butonuna basın
6. Domain ayarlarından kendi domaininizi bağlayın

**Domain Bağlama:**
- Vercel dashboard'da projenize gidin
- Settings > Domains
- Domain adınızı ekleyin
- Vercel size DNS kayıtlarını gösterecek
- Squarespace DNS ayarlarına gidin ve bu kayıtları ekleyin

### Seçenek 2: Netlify (ÜCRETSİZ)

1. [Netlify](https://netlify.com) hesabı oluşturun
2. "Add new site" > "Import an existing project"
3. GitHub reposunu bağlayın
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy butonuna basın

**Domain Bağlama:**
- Site settings > Domain management
- Add custom domain
- DNS kayıtlarını Squarespace'e ekleyin

### Seçenek 3: GitHub Pages (ÜCRETSİZ)

1. `vite.config.js` dosyasına base ekleyin:
```javascript
export default defineConfig({
  base: '/repo-adi/',
  // ...
})
```

2. Deploy scripti ekleyin `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. gh-pages yükleyin:
```bash
npm install --save-dev gh-pages
```

4. Deploy edin:
```bash
npm run deploy
```

### Seçenek 4: Kendi Sunucunuz (VPS)

**Gereksinimler:**
- Linux sunucu (Ubuntu önerilir)
- Node.js ve npm
- Nginx veya Apache

**Adımlar:**

1. Sunucuya bağlanın:
```bash
ssh kullanici@sunucu-ip
```

2. Nginx kurun:
```bash
sudo apt update
sudo apt install nginx
```

3. Build dosyalarını sunucuya yükleyin:
```bash
# Yerel bilgisayarınızda
npm run build
scp -r dist/* kullanici@sunucu-ip:/var/www/tealducks
```

4. Nginx konfigürasyonu:
```bash
sudo nano /etc/nginx/sites-available/tealducks
```

Aşağıdaki içeriği ekleyin:
```nginx
server {
    listen 80;
    server_name tealducks.com www.tealducks.com;
    root /var/www/tealducks;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

5. Siteyi aktif edin:
```bash
sudo ln -s /etc/nginx/sites-available/tealducks /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. SSL sertifikası ekleyin (Let's Encrypt):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tealducks.com -d www.tealducks.com
```

## 🔧 Domain Yönlendirme (Squarespace'den)

### DNS Ayarları

1. Squarespace hesabınıza giriş yapın
2. Settings > Domains > DNS Settings
3. Mevcut kayıtları silin veya devre dışı bırakın
4. Hosting sağlayıcınızın verdiği DNS kayıtlarını ekleyin

**Vercel için:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Netlify için:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [site-adi].netlify.app
```

**Kendi sunucunuz için:**
```
Type: A
Name: @
Value: [sunucu-ip-adresi]

Type: A
Name: www
Value: [sunucu-ip-adresi]
```

### DNS Propagation

DNS değişikliklerinin yayılması 24-48 saat sürebilir. Kontrol etmek için:
- https://dnschecker.org kullanın
- Terminal'de: `nslookup tealducks.com`

## 📝 Özelleştirme

### Oyunlarınızı Ekleyin

`src/components/Games.jsx` dosyasındaki `games` array'ini düzenleyin:

```javascript
const games = [
  {
    id: 1,
    title: "Oyun Adınız",
    description: "Oyun açıklaması",
    image: "oyun-resmi-url",
    rating: 4.5,
    downloads: "1M+",
    playStoreUrl: "https://play.google.com/store/apps/details?id=...",
    category: "Kategori"
  }
]
```

### Google Play Developer ID

Dosyalarda `YOUR_DEVELOPER_ID` yazan yerleri kendi developer ID'nizle değiştirin.

### Renkler

`tailwind.config.js` dosyasından renk paletini özelleştirebilirsiniz.

### İletişim Bilgileri

`src/components/Contact.jsx` ve `src/components/Footer.jsx` dosyalarındaki email adreslerini güncelleyin.

## 🛠️ Teknolojiler

- React 18
- Vite
- TailwindCSS
- Lucide React (ikonlar)

## 📧 Destek

Sorularınız için: info@tealducks.com

## 📄 Lisans

Bu proje özel kullanım içindir.
