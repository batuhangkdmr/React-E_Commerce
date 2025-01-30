# E-Commerce Platform

Bu proje, **modern bir e-ticaret platformu** oluşturmak için geliştirilmiş bir **React + Vite** tabanlı uygulamadır. Kullanıcıların ürünleri inceleyip satın alabilecekleri, siparişlerini yönetebilecekleri bir altyapı sunar.

## 🚀 Özellikler

- 🛒 **Ürün Listeleme**: Kullanıcılar ürünleri görüntüleyebilir ve detaylarını inceleyebilir.
- 🔍 **Arama ve Filtreleme**: Ürünleri kategoriye, fiyat aralığına veya popülerliğe göre filtreleyebilirsiniz.
- 🏷️ **Sepet Yönetimi**: Kullanıcılar ürünleri sepete ekleyip çıkarabilir.
- 💳 **Ödeme Entegrasyonu**: (Opsiyonel) Online ödeme desteği entegre edilebilir.
- 🔐 **Kullanıcı Kimlik Doğrulama**: Giriş, kayıt olma ve kullanıcı hesap yönetimi.
- 📦 **Sipariş Takibi**: Kullanıcılar sipariş durumlarını görebilir.
- 🎨 **Modern UI**: Vite + React kullanılarak hızlı ve şık bir kullanıcı arayüzü sağlanmıştır.

## 🛠️ Kurulum

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### 1️⃣ Gerekli Bağımlılıkları Yükleyin
```sh
npm install
```

### 2️⃣ Geliştirme Ortamında Çalıştırın
```sh
npm run dev
```

### 3️⃣ Build (Derleme) İşlemi
```sh
npm run build
```

### 4️⃣ Üretim Modunda Çalıştırın
```sh
npm run preview
```

## 📂 Proje Yapısı

```bash
📦 Ecommerce
├── 📂 src
│   ├── 📂 components  # Bileşenler
│   ├── 📂 pages       # Sayfa bileşenleri
│   ├── 📂 hooks       # Özel React Hook'ları
│   ├── 📂 context     # Global state yönetimi
│   ├── 📂 assets      # Görseller, ikonlar
│   ├── 📜 App.jsx     # Ana uygulama bileşeni
│   ├── 📜 main.jsx    # React giriş noktası
│   └── 📜 index.css   # Global stiller
├── 📜 package.json    # Bağımlılıklar ve komutlar
├── 📜 vite.config.js  # Vite yapılandırma dosyası
└── 📜 README.md       # Proje dökümantasyonu
```

## 🌍 Teknolojiler

- **React.js** – Kullanıcı arayüzü
- **Vite** – Hızlı geliştirme ortamı
- **Node.js & npm** – Paket yönetimi
- **Tailwind CSS veya CSS Modülleri** – Stil yönetimi
- **React Router** – Sayfa yönlendirmeleri
- **Context API** – Durum yönetimi
- **Firebase / JSON API (Opsiyonel)** – Backend entegrasyonu
