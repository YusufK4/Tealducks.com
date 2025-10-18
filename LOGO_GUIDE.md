# 🎨 Logo Ekleme Rehberi

## Adım 1: Logo Dosyasını Hazırla

### Önerilen Format:
- **PNG** (şeffaf arka plan için)
- **SVG** (vektör, her boyutta keskin)
- Boyut: 512x512px veya daha büyük

### Logo Dosya İsimleri:
```
logo.png          # Ana logo
logo-icon.png     # Sadece icon (favicon için)
logo-white.png    # Beyaz versiyon (koyu arka plan için)
```

---

## Adım 2: Logo'yu Projeye Ekle

### Yöntem 1: `public` Klasörüne Koy
```bash
# Terminal'de:
cp /path/to/your/logo.png /Users/yusufk/Desktop/Tealducks.com/public/logo.png
```

Kullanım:
```jsx
<img src="/logo.png" alt="Teal Ducks Logo" />
```

### Yöntem 2: `src/assets` Klasörüne Koy (Önerilen)
```bash
# Önce klasör oluştur:
mkdir -p /Users/yusufk/Desktop/Tealducks.com/src/assets

# Logo'yu kopyala:
cp /path/to/your/logo.png /Users/yusufk/Desktop/Tealducks.com/src/assets/logo.png
```

Kullanım:
```jsx
import logo from './assets/logo.png'

<img src={logo} alt="Teal Ducks Logo" />
```

---

## Adım 3: Component'lerde Kullan

### Header.jsx'de Logo Değiştir:
```jsx
// Şu anki (Gamepad2 icon):
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-accent-500 to-gaming-500 rounded-xl flex items-center justify-center">
  <Gamepad2 className="w-6 h-6 text-white" />
</div>

// Yeni (Gerçek logo):
<img 
  src="/logo.png" 
  alt="Teal Ducks Logo" 
  className="w-10 h-10 rounded-xl"
/>
```

### Footer.jsx'de Logo Değiştir:
Aynı şekilde değiştir.

---

## Adım 4: Favicon Ekle

### `public/index.html` dosyasını güncelle:
```html
<link rel="icon" href="/logo-icon.png" />
<link rel="apple-touch-icon" href="/logo-icon.png" />
```

---

## Adım 5: Otomatik Değiştirme (Ben Yapayım)

Eğer logo dosyanı bana verirsen:
1. Dosyayı projeye eklerim
2. Tüm component'leri güncellerim
3. Favicon'u ayarlarım
4. Commit & push yaparım

**Logo dosyasını şuraya koy:**
```
/Users/yusufk/Desktop/logo.png
```

Sonra bana "logo hazır" de, ben otomatik ekleyeyim! 🚀

---

## Bonus: SVG Logo Kullanımı

Eğer SVG logo'n varsa (en iyisi):
```jsx
import { ReactComponent as Logo } from './assets/logo.svg'

<Logo className="w-10 h-10" />
```

SVG avantajları:
- ✅ Her boyutta keskin
- ✅ Küçük dosya boyutu
- ✅ CSS ile renk değiştirilebilir
- ✅ Animasyon yapılabilir
