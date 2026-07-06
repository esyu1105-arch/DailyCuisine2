export type Language = 'zh' | 'en';
export type MealType = 'lunch' | 'dinner';

export type Dish = {
  id: string;
  nameZh: string;
  nameEn: string;
  emoji: string;
  ingZh: string[];
  ingEn: string[];
  instZh: string[];
  instEn: string[];
};

export const DATABASE = {
  dish1: [
    {
      id: '1-1',
      nameZh: '栗子蒸雞件',
      nameEn: 'Steamed Chicken with Chestnuts',
      emoji: '🍗',
      ingZh: ['栗子', '雞件'],
      ingEn: ['Chestnuts', 'Chicken pieces'],
      instZh: ['1. 栗子去殼去皮。', '2. 雞件洗淨。', '3. 將兩者混合隔水蒸15至20分鐘至熟透。'],
      instEn: ['1. Shell and peel chestnuts.', '2. Wash chicken pieces.', '3. Mix and steam for 15-20 minutes until fully cooked.'],
    },
    {
      id: '1-2',
      nameZh: '冬菇蒸雞件',
      nameEn: 'Steamed Chicken with Shiitake Mushrooms',
      emoji: '🍄',
      ingZh: ['冬菇', '雞件'],
      ingEn: ['Shiitake mushrooms', 'Chicken pieces'],
      instZh: ['1. 冬菇浸軟去蒂。', '2. 雞件洗淨。', '3. 將兩者混合隔水蒸15至20分鐘至熟透。'],
      instEn: ['1. Soak mushrooms until soft and remove stems.', '2. Wash chicken pieces.', '3. Mix and steam for 15-20 minutes until fully cooked.'],
    },
    {
      id: '1-3',
      nameZh: '梅菜蒸肉餅件',
      nameEn: 'Steamed Pork Patty with Preserved Greens',
      emoji: '🥩',
      ingZh: ['甜梅菜', '豬肉'],
      ingEn: ['Sweet preserved mustard greens', 'Pork'],
      instZh: ['1. 梅菜浸洗乾淨並切碎。', '2. 豬肉剁碎後與梅菜拌勻。', '3. 隔水蒸約15分鐘至熟透。'],
      instEn: ['1. Soak, wash and chop the preserved greens.', '2. Mince pork and mix with greens.', '3. Steam for about 15 minutes until fully cooked.'],
    },
    {
      id: '1-4',
      nameZh: '蕃茄煎豬扒',
      nameEn: 'Pan-fried Pork Chop with Tomato',
      emoji: '🍅',
      ingZh: ['蕃茄', '豬扒'],
      ingEn: ['Tomatoes', 'Pork chops'],
      instZh: ['1. 豬扒稍微搥鬆。', '2. 落鑊將豬扒兩面煎熟後備用。', '3. 蕃茄切塊下鑊炒軟鋪在豬扒面。'],
      instEn: ['1. Tenderize pork chops slightly.', '2. Pan-fry both sides until cooked and set aside.', '3. Stir-fry chopped tomatoes until soft and serve over pork chops.'],
    },
    {
      id: '1-5',
      nameZh: '三色椒炒雞件',
      nameEn: 'Stir-fried Chicken with Bell Peppers',
      emoji: '🥄',
      ingZh: ['三色椒', '雞件'],
      ingEn: ['Bell peppers', 'Chicken pieces'],
      instZh: ['1. 三色椒去籽切塊。', '2. 落鑊炒熟雞件備用。', '3. 下三色椒炒軟將雞件回鑊兜勻。'],
      instEn: ['1. Seed and chop bell peppers.', '2. Stir-fry chicken until cooked and set aside.', '3. Stir-fry peppers until soft, return chicken to the wok and mix well.'],
    },
    {
      id: '1-6',
      nameZh: '煎銀鱈魚',
      nameEn: 'Pan-fried Black Cod',
      emoji: '🐟',
      ingZh: ['銀鱈魚'],
      ingEn: ['Black cod'],
      instZh: ['1. 銀鱈魚洗淨並徹底印乾水份。', '2. 燒熱鑊落油將兩面煎至金黃色及完全熟透。'],
      instEn: ['1. Wash black cod and pat dry completely.', '2. Heat oil in a pan, fry both sides until golden brown and fully cooked.'],
    },
    {
      id: '1-7',
      nameZh: '煎鯖魚',
      nameEn: 'Pan-fried Mackerel',
      emoji: '🐠',
      ingZh: ['鯖魚'],
      ingEn: ['Mackerel'],
      instZh: ['1. 鯖魚洗淨並徹底印乾水份。', '2. 燒熱鑊落油將兩面煎至金黃色及完全熟透。'],
      instEn: ['1. Wash mackerel and pat dry completely.', '2. Heat oil in a pan, fry both sides until golden brown and fully cooked.'],
    },
    {
      id: '1-8',
      nameZh: '蒸雞件',
      nameEn: 'Steamed Chicken',
      emoji: '🍴',
      ingZh: ['雞件'],
      ingEn: ['Chicken pieces'],
      instZh: ['1. 雞件洗淨。', '2. 隔水蒸15分鐘至完全熟透。'],
      instEn: ['1. Wash chicken pieces.', '2. Steam for 15 minutes until fully cooked.'],
    },
  ],
  dish2: [
    {
      id: '2-1',
      nameZh: '菜心炒豬肉',
      nameEn: 'Stir-fried Choy Sum with Pork',
      emoji: '🥬',
      ingZh: ['菜心', '豬肉片'],
      ingEn: ['Choy sum', 'Sliced pork'],
      instZh: ['1. 菜心洗淨切段。', '2. 落鑊炒熟豬肉片備用。', '3. 炒熟菜心將豬肉片回鑊兜勻。'],
      instEn: ['1. Wash and cut choy sum into sections.', '2. Stir-fry pork slices until cooked and set aside.', '3. Stir-fry choy sum until cooked, return pork to the wok and mix well.'],
    },
    {
      id: '2-2',
      nameZh: '魚蛋片炒青瓜',
      nameEn: 'Stir-fried Cucumber with Sliced Fish Balls',
      emoji: '🥒',
      ingZh: ['魚蛋', '青瓜'],
      ingEn: ['Fish balls', 'Cucumber'],
      instZh: ['1. 魚蛋切片青瓜洗淨切片。', '2. 先落鑊將青瓜炒至半軟。', '3. 加入魚蛋片同炒至熟透。'],
      instEn: ['1. Slice fish balls and washed cucumber.', '2. Stir-fry cucumber until slightly soft.', '3. Add fish ball slices and stir-fry until fully cooked.'],
    },
    {
      id: '2-3',
      nameZh: '蕃茄炒蛋',
      nameEn: 'Stir-fried Tomato and Egg',
      emoji: '🍳',
      ingZh: ['蕃茄', '雞蛋'],
      ingEn: ['Tomatoes', 'Eggs'],
      instZh: ['1. 蕃茄切塊雞蛋打勻。', '2. 落鑊將雞蛋炒熟備用。', '3. 蕃茄下鑊炒軟出汁將雞蛋回鑊兜勻。'],
      instEn: ['1. Chop tomatoes and beat eggs.', '2. Scramble eggs in a wok and set aside.', '3. Stir-fry tomatoes until soft and juicy, return eggs to the wok and mix well.'],
    },
    {
      id: '2-4',
      nameZh: '炒白菜仔',
      nameEn: 'Stir-fried Baby Bok Choy',
      emoji: '🥬',
      ingZh: ['白菜仔'],
      ingEn: ['Baby bok choy'],
      instZh: ['1. 白菜仔洗淨及瀝乾水份。', '2. 燒熱鑊大火快炒至菜身軟熟。'],
      instEn: ['1. Wash and drain baby bok choy.', '2. Heat wok and stir-fry quickly over high heat until soft.'],
    },
    {
      id: '2-5',
      nameZh: '炒菠菜',
      nameEn: 'Stir-fried Spinach',
      emoji: '🌿',
      ingZh: ['菠菜'],
      ingEn: ['Spinach'],
      instZh: ['1. 菠菜洗淨切段。', '2. 燒熱鑊快速兜炒至菠菜軟身出水即可。'],
      instEn: ['1. Wash and cut spinach into sections.', '2. Heat wok and stir-fry quickly until spinach is soft and releases water.'],
    },
  ],
};
