// Мокап данные для меню и слайдера
// Эти данные должны быть заменены на реальные данные из API в будущем

// Функция для создания данных с учетом i18next
export const getRestaurantData = (t) => {
  // Данные блюд для меню
  const menuItems = [
    {
      id: 1,
      name: t('restaurant.menu.items.salad.name', 'Свежий салат с авокадо'),
      description: t('restaurant.menu.items.salad.description', 'Свежие овощи, авокадо и орехи с оливковым маслом'),
      price: '฿320',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['vegetarian', 'healthy'],
      popular: true,
      category: 'lunch'
    },
    {
      id: 2,
      name: t('restaurant.menu.items.pasta.name', 'Паста с морепродуктами'),
      description: t('restaurant.menu.items.pasta.description', 'Итальянская паста с креветками и мидиями в сливочном соусе'),
      price: '฿450',
      image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['seafood', 'italian'],
      popular: false,
      category: 'dinner'
    },
    {
      id: 3,
      name: t('restaurant.menu.items.pancakes.name', 'Блинчики с ягодами'),
      description: t('restaurant.menu.items.pancakes.description', 'Пушистые блинчики со свежими ягодами и кленовым сиропом'),
      price: '฿280',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['sweet', 'breakfast'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 4,
      name: t('restaurant.menu.items.steak.name', 'Стейк с овощами гриль'),
      description: t('restaurant.menu.items.steak.description', 'Сочный стейк средней прожарки с овощами гриль и специальным соусом'),
      price: '฿750',
      image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['meat', 'grill'],
      popular: false,
      category: 'dinner'
    },
    {
      id: 5,
      name: t('restaurant.menu.items.smoothie.name', 'Фруктовый смузи'),
      description: t('restaurant.menu.items.smoothie.description', 'Свежий смузи из сезонных фруктов и ягод с йогуртом'),
      price: '฿180',
      image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['drink', 'healthy', 'fruit'],
      popular: true,
      category: 'drinks'
    },
    {
      id: 6,
      name: t('restaurant.menu.items.cheesecake.name', 'Чизкейк с клубникой'),
      description: t('restaurant.menu.items.cheesecake.description', 'Нежный чизкейк со свежей клубникой и клубничным соусом'),
      price: '฿220',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'desserts'
    }
  ];
  
  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: t('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: t('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: t('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
    }
  ];
  
  // Карта цветов для тегов
  const tagStyles = {
    vegetarian: 'bg-green-50 text-green-600',
    healthy: 'bg-primary bg-opacity-10 text-primary',
    seafood: 'bg-blue-50 text-blue-600',
    italian: 'bg-yellow-50 text-yellow-600',
    meat: 'bg-red-50 text-red-600',
    grill: 'bg-orange-50 text-orange-600',
    sweet: 'bg-pink-50 text-pink-600',
    breakfast: 'bg-indigo-50 text-indigo-600',
    dessert: 'bg-purple-50 text-purple-600',
    drink: 'bg-cyan-50 text-cyan-600',
    fruit: 'bg-lime-50 text-lime-600'
  };

  return { menuItems, slides, tagStyles };
};
