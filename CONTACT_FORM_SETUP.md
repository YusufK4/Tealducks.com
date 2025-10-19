# İletişim Formu Kurulum Rehberi

Bu döküman, Netlify Functions ile çalışan iletişim formunun nasıl kurulacağını açıklar.

## 📋 Gereksinimler

1. Netlify hesabı
2. Gmail hesabı (veya başka bir SMTP servisi)
3. Gmail App Password (2FA aktif olmalı)

## 🔧 Kurulum Adımları

### 1. Paketleri Yükle

```bash
npm install
```

### 2. Gmail App Password Oluştur

1. Google hesabınıza gidin: https://myaccount.google.com/
2. **Security** > **2-Step Verification** aktif edin (eğer değilse)
3. **Security** > **App passwords** bölümüne gidin
4. Yeni bir app password oluşturun:
   - App: "Mail"
   - Device: "Other" (Tealducks Website yazın)
5. Oluşturulan 16 haneli şifreyi kopyalayın

### 3. Netlify Environment Variables Ayarla

Netlify dashboard'a gidin:

1. Site Settings > Environment Variables
2. Aşağıdaki değişkenleri ekleyin:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
```

**Önemli:** `SMTP_PASS` değerine Gmail'den aldığınız 16 haneli app password'ü girin (boşluksuz).

### 4. Deploy Edin

```bash
npm run build
```

Netlify otomatik olarak deploy edecektir.

## 🧪 Test

1. Sitenize gidin
2. İletişim formunu doldurun
3. "Gönder" butonuna tıklayın
4. Yeşil başarı mesajı görmelisiniz
5. `Yusuf@tealducks.com` adresine mail geldiğini kontrol edin

## 🔍 Sorun Giderme

### Form gönderilmiyor
- Browser console'da hata var mı kontrol edin
- Netlify Functions logs'a bakın: Site > Functions > contact

### Mail gelmiyor
- SMTP bilgilerinin doğru olduğundan emin olun
- Gmail App Password'ün doğru girildiğinden emin olun
- Gmail hesabınızın "Less secure app access" kapalı olmalı (App Password kullanıyorsanız)

### "Failed to send email" hatası
- Netlify Functions logs'da detaylı hata mesajını görün
- SMTP_USER ve SMTP_PASS environment variables'ın doğru set edildiğinden emin olun

## 📧 Alternatif SMTP Servisleri

Gmail yerine başka servisler de kullanabilirsiniz:

### SendGrid
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

## 🎨 Özelleştirme

### Alıcı mail adresini değiştir

`netlify/functions/contact.js` dosyasında:

```javascript
to: 'Yusuf@tealducks.com',  // Burası değiştirilebilir
```

### Mail şablonunu özelleştir

Aynı dosyada `mailOptions` içindeki `html` kısmını düzenleyin.

## 📝 Notlar

- Form spam koruması için rate limiting eklenebilir
- Captcha eklemek için Google reCAPTCHA kullanılabilir
- Mail gönderimi async olduğu için kullanıcı hemen yanıt alır
- Başarısız maillar Netlify Functions logs'da görünür
