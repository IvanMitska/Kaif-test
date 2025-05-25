# 📸 Инструкция по добавлению фотографий в KAIF Website

## 🎯 Места для фотографий

### 1. **Фоновое изображение Hero секции**

**Файл:** `src/components/home/HeroSection.jsx`
**Строка:** 25 (закомментированная)

```javascript
// Замените эту строку:
/* url('path-to-your-background-image.jpg'); */

// На:
url('/src/assets/images/hero-background.jpg'),
```

**Рекомендуемые размеры:** 1920x1080px или больше
**Формат:** JPG/WebP для лучшей производительности

### 2. **Карточки в секции "О KAIF"**

**Файл:** `src/components/home/AboutPreviewSection.jsx`
**Компонент:** `FeatureImagePlaceholder`

Сейчас показываются эмодзи, но готово для замены на изображения:

```javascript
// В массиве features замените icon на image:
{
  image: '/src/assets/images/sauna.jpg', // вместо icon: '🧘‍♀️'
  title: 'Самая большая сауна в Таиланде',
  description: '50м² релаксации и восстановления'
}
```

**Рекомендуемые размеры:** 400x300px
**Формат:** JPG/WebP

### 3. **Карточки услуг**

**Файл:** `src/components/home/ServicesSection.jsx`
**Компонент:** `ServiceIcon`

Готово для добавления фоновых изображений или замены на изображения.

## 📁 Структура папок для изображений

Создайте следующую структуру в `src/assets/images/`:

```
src/assets/images/
├── hero/
│   └── hero-background.jpg
├── services/
│   ├── spa.jpg
│   ├── restaurant.jpg
│   ├── sports.jpg
│   └── beauty.jpg
├── about/
│   ├── sauna.jpg
│   ├── restaurant.jpg
│   ├── gym.jpg
│   ├── pool.jpg
│   ├── fight-club.jpg
│   └── hammam.jpg
└── gallery/
    └── (дополнительные фото)
```

## 🔧 Как добавить фотографии

### Шаг 1: Добавьте изображения в папку

Поместите ваши фотографии в соответствующие папки в `src/assets/images/`

### Шаг 2: Обновите компоненты

#### Для Hero фона:

```javascript
// В HeroContainer (строка ~25)
background-image:
  linear-gradient(135deg,
    rgba(245, 243, 240, 0.85) 0%,
    rgba(240, 247, 244, 0.75) 50%,
    rgba(253, 252, 250, 0.85) 100%
  ),
  url('/src/assets/images/hero/hero-background.jpg');
```

#### Для карточек "О KAIF":

```javascript
// Замените FeatureImagePlaceholder на:
const FeatureImage = styled.div`
  width: 100%;
  height: 120px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  flex-shrink: 0;

  ${FeatureCard}:hover & {
    transform: scale(1.02);
  }
`;
```

### Шаг 3: Импортируйте изображения

```javascript
// В начале файла компонента
import heroBackground from "../assets/images/hero/hero-background.jpg";
import saunaImage from "../assets/images/about/sauna.jpg";
// и т.д.
```

## 🎨 Рекомендации по изображениям

### Качество и размеры:

- **Hero фон:** 1920x1080px, высокое качество
- **Карточки услуг:** 400x300px, среднее качество
- **Карточки "О нас":** 400x300px, среднее качество

### Оптимизация:

- Используйте WebP формат для лучшей производительности
- Сжимайте изображения (TinyPNG, ImageOptim)
- Для Hero фона используйте прогрессивный JPEG

### Стиль фотографий:

- Светлые, естественные тона
- Соответствие цветовой палитре сайта (зеленые, терракотовые оттенки)
- Высокое качество и профессиональная съемка
- Атмосфера wellness и релаксации

## 🚀 После добавления фотографий

1. Проверьте загрузку на всех устройствах
2. Убедитесь в читаемости текста поверх изображений
3. Проверьте производительность (время загрузки)
4. Протестируйте на разных разрешениях экрана

## 💡 Дополнительные возможности

- Добавление lazy loading для изображений
- Использование srcset для адаптивных изображений
- Добавление placeholder'ов во время загрузки
- Интеграция с CDN для быстрой загрузки
