import { useMemo, useState } from 'react';
import { ArrowLeft, Globe, RefreshCw } from 'lucide-react';
import { DATABASE, type Dish, type MealType, type Language } from './data';
import { i18n } from './i18n';

type View = 'home' | 'menu' | 'browse-list' | 'browse-detail';

type MenuState = {
  dish1: Dish[];
  dish2: Dish[];
};

type BrowseSelection = {
  dish: Dish;
  category: keyof MenuState;
} | null;

const BROWSE_ITEMS = [
  ...DATABASE.dish1.map((dish) => ({ dish, category: 'dish1' as const })),
  ...DATABASE.dish2.map((dish) => ({ dish, category: 'dish2' as const })),
];

const getRandomItems = (array: Dish[], num: number, excludeIds: string[] = []) => {
  const filtered = array.filter((item) => !excludeIds.includes(item.id));
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const DishDetailContent = ({ dish, lang }: { dish: Dish; lang: Language }) => {
  const ingredients = lang === 'zh' ? dish.ingZh : dish.ingEn;
  const instructions = lang === 'zh' ? dish.instZh : dish.instEn;

  return (
    <>
      <div className="section-block">
        <h4 className="section-title">{i18n.ingredients[lang]}</h4>
        <div className="chip-row">
          {ingredients.map((ing, idx) => (
            <span key={`${ing}-${idx}`} className="chip">
              {ing}
            </span>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h4 className="section-title">{i18n.steps[lang]}</h4>
        <ul className="step-list">
          {instructions.map((step, idx) => (
            <li key={`${step}-${idx}`} className="step-item">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const DishCard = ({
  dish,
  category,
  onReroll,
  currentMenuIds,
  lang,
}: {
  dish: Dish;
  category: keyof MenuState;
  onReroll: (oldDishId: string, category: keyof MenuState, currentMenuIds: string[]) => void;
  currentMenuIds: string[];
  lang: Language;
}) => {
  const dishName = lang === 'zh' ? dish.nameZh : dish.nameEn;
  const subName = lang === 'zh' ? dish.nameEn : dish.nameZh;

  return (
    <article className="card">
      <div className="card-header">
        <div>
          <h3 className="card-title">{dishName}</h3>
          <p className="card-subtitle">{subName}</p>
        </div>
        <button
          type="button"
          onClick={() => onReroll(dish.id, category, currentMenuIds)}
          className="icon-button"
          title={i18n.changeDish[lang]}
          aria-label={i18n.changeDish[lang]}
        >
          <RefreshCw size={18} />
        </button>
      </div>

      <DishDetailContent dish={dish} lang={lang} />
    </article>
  );
};

const initialMenu = (): MenuState => ({
  dish1: [],
  dish2: [],
});

export default function App() {
  const [view, setView] = useState<View>('home');
  const [mealType, setMealType] = useState<MealType | null>(null);
  const [currentMenu, setCurrentMenu] = useState<MenuState>(initialMenu);
  const [lang, setLang] = useState<Language>('zh');
  const [browseSelection, setBrowseSelection] = useState<BrowseSelection>(null);

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));

  const generateMenu = (type: MealType) => {
    setMealType(type);
    setCurrentMenu({
      dish1: getRandomItems(DATABASE.dish1, type === 'lunch' ? 1 : 2),
      dish2: getRandomItems(DATABASE.dish2, 1),
    });
    setView('menu');
  };

  const handleRerollSingle = (oldDishId: string, category: keyof MenuState, currentMenuIds: string[]) => {
    const newDish = getRandomItems(DATABASE[category], 1, currentMenuIds)[0];
    if (newDish) {
      setCurrentMenu((prev) => ({
        ...prev,
        [category]: prev[category].map((dish) => (dish.id === oldDishId ? newDish : dish)),
      }));
    }
  };

  const handleRerollAll = () => {
    if (mealType) {
      generateMenu(mealType);
    }
  };

  const currentMenuIds = useMemo(
    () => [...currentMenu.dish1.map((dish) => dish.id), ...currentMenu.dish2.map((dish) => dish.id)],
    [currentMenu]
  );

  const handleBrowseSelect = (selection: BrowseSelection) => {
    setBrowseSelection(selection);
    setView('browse-detail');
  };

  const handleBrowseBack = () => {
    if (view === 'browse-detail') {
      setBrowseSelection(null);
      setView('browse-list');
    } else {
      setBrowseSelection(null);
      setView('home');
    }
  };

  if (view === 'home') {
    return (
      <div className="screen screen-home">
        <button type="button" onClick={toggleLang} className="lang-toggle lang-toggle-home">
          {lang === 'zh' ? 'EN' : '中文'}
        </button>

        <div className="hero-card">
          <div className="hero-badge">🍽️ Family Table</div>
          <h1 className="hero-title">{i18n.title[lang]}</h1>
          <p className="hero-subtitle">{i18n.subtitle[lang]}</p>

          <div className="button-stack">
            <button type="button" onClick={() => generateMenu('lunch')} className="primary-button secondary-button">
              {i18n.lunch[lang]}
            </button>
            <button type="button" onClick={() => generateMenu('dinner')} className="primary-button">
              {i18n.dinner[lang]}
            </button>
            <button type="button" onClick={() => setView('browse-list')} className="primary-button secondary-button">
              {i18n.pickForMyself[lang]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'browse-list') {
    return (
      <div className="screen screen-menu">
        <header className="top-bar">
          <button type="button" onClick={handleBrowseBack} className="icon-button" aria-label={i18n.back[lang]}>
            <ArrowLeft size={18} />
          </button>
          <h2 className="top-bar-title">{i18n.browseTitle[lang]}</h2>
          <button type="button" onClick={toggleLang} className="icon-button" aria-label="Toggle language">
            <Globe size={18} />
          </button>
        </header>

        <main className="menu-content">
          <p className="browse-subtitle">{i18n.browseSubtitle[lang]}</p>
          {BROWSE_ITEMS.map(({ dish, category }) => {
            const displayName = lang === 'zh' ? dish.nameZh : dish.nameEn;
            const subName = lang === 'zh' ? dish.nameEn : dish.nameZh;
            return (
              <button
                key={dish.id}
                type="button"
                className="browse-item"
                onClick={() => handleBrowseSelect({ dish, category })}
              >
                <div className="browse-item-copy">
                  <span className="browse-item-title">{displayName}</span>
                  <span className="browse-item-subtitle">{subName}</span>
                </div>
                <span className="browse-item-badge">{category === 'dish1' ? i18n.mainCourse[lang] : i18n.sideDish[lang]}</span>
              </button>
            );
          })}
        </main>
      </div>
    );
  }

  if (view === 'browse-detail' && browseSelection) {
    const { dish, category } = browseSelection;
    const dishName = lang === 'zh' ? dish.nameZh : dish.nameEn;
    const subName = lang === 'zh' ? dish.nameEn : dish.nameZh;

    return (
      <div className="screen screen-menu">
        <header className="top-bar">
          <button type="button" onClick={handleBrowseBack} className="icon-button" aria-label={i18n.back[lang]}>
            <ArrowLeft size={18} />
          </button>
          <h2 className="top-bar-title">{dishName}</h2>
          <button type="button" onClick={toggleLang} className="icon-button" aria-label="Toggle language">
            <Globe size={18} />
          </button>
        </header>

        <main className="menu-content">
          <article className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{dishName}</h3>
                <p className="card-subtitle">{subName}</p>
              </div>
              <span className="browse-item-badge">{category === 'dish1' ? i18n.mainCourse[lang] : i18n.sideDish[lang]}</span>
            </div>
            <DishDetailContent dish={dish} lang={lang} />
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="screen screen-menu">
      <header className="top-bar">
        <button type="button" onClick={() => setView('home')} className="icon-button" aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <h2 className="top-bar-title">{mealType === 'lunch' ? i18n.lunchTitle[lang] : i18n.dinnerTitle[lang]}</h2>
        <button type="button" onClick={toggleLang} className="icon-button" aria-label="Toggle language">
          <Globe size={18} />
        </button>
      </header>

      <main className="menu-content">
        {currentMenu.dish1.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            category="dish1"
            onReroll={handleRerollSingle}
            currentMenuIds={currentMenuIds}
            lang={lang}
          />
        ))}
        {currentMenu.dish2.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            category="dish2"
            onReroll={handleRerollSingle}
            currentMenuIds={currentMenuIds}
            lang={lang}
          />
        ))}
      </main>

      <div className="bottom-action">
        <button type="button" onClick={handleRerollAll} className="primary-button full-width">
          <RefreshCw size={18} />
          <span>{i18n.rerollAll[lang]}</span>
        </button>
      </div>
    </div>
  );
}
