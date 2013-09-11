package testpackage.content.repetition.stringlists;

import java.util.EnumSet;

/**
 * User: mtitov
 * Date: 11/2/11
 * Time: 10:05 AM
 */
public enum StringType implements StringTypeInterface {

    TEMP(getTemp()), BOOKS(getBooks()), ENGLISH_BOOKS(getEnglishBooks()), LOGIC_BOOKS(getLogicBooks()), FOOD(getFood()), GAMES(getGames()), MEAT(getMeat()),
    BALANCE_PROGRAM(getBalanceProgram()), RECIPES(getRecipes()), SALADS(getSalads()),
    SECOND_COURSES(getSecondCourses()), SOUPS(getSoups()), TRAINING(getTraining()), ZAYTSEV_GAMES(getZaytsevGames());

    public static final EnumSet<StringType> DISH_TYPES = EnumSet.of(SALADS, SOUPS, SECOND_COURSES, MEAT);

    StringType(String[] list) {
        this.list = list;
    }

    public String[] getList() {
        return list;
    }

    private String[] list;

    public static String[] getBooks() {
        return StringListHolder.books;
    }

    public static String[] getEnglishBooks() {
        return StringListHolder.englishBooks;
    }

    public static String[] getLogicBooks() {
        return StringListHolder.logicBooks;
    }

    public static String[] getFood() {
        return StringListHolder.food;
    }

    public static String[] getGames() {
        return StringListHolder.games;
    }

    public static String[] getMeat() {
        return StringListHolder.meat;
    }

    public static String[] getBalanceProgram() {
        return StringListHolder.balanceProgram;
    }

    public static String[] getRecipes() {
        return StringListHolder.recipes;
    }

    public static String[] getSalads() {
        return StringListHolder.salads;
    }

    public static String[] getSecondCourses() {
        return StringListHolder.secondCourses;
    }

    public static String[] getSoups() {
        return StringListHolder.soups;
    }

    public static String[] getTraining() {
        return StringListHolder.training;
    }

    public static String[] getZaytsevGames() {
        return StringListHolder.zaytsev;
    }

    public static String[] getTemp() {
        return StringListHolder.temp;
    }

    private static class StringListHolder {

        public static String[] temp = {
                "Варфоломей Надежда",
                "Петренко Татьяна",
                "Пузраков Андрей",
                "Щелинский Евгений",
                "Хоменко Максим",
                "Лида Николаева",
                "Бородина Татьяна",
                "Сытник Катя",
                "Коля Белый",
                "Влада Резникова"
        };

        public static String[] books = {
                "Зима",
                "Белочка",
                "В деревне",
                "Овощи",
                "Слоненок",
                "Гав",
                "Фрукты",
                "Маша-растеряша",
                "Мамы и малыши",
                "Мои игрушки",
                "Барто",
                "На отдыхе",
                "Перед сном",
                "Азбука",
                "Удивительные звери",
                "Гуси-лебеди",
                "Домашние животные",
                "Транспорт",
                "Малыши",
                "Фигуры",
                "Время суток",
                "Вежливые слова",
                "Лунтик",
                "Маугли",
                "Лесные зверята",
                "Хрестоматия",
                "Народные сказки",
                "Читаем по слогам",
                "Трафарет",
                "Шнуровочка",
                "Баба-яга",
                "Времена года"
        };

        public static String[] englishBooks = {
                "Aline-caterpillar",
                "The Cat and The Mouse",
                "Folk tales",
                "The brave little airplane",
                "The little house",
                "turnip",
                "the 3 little pigs"
        };

        public static String[] logicBooks = {
                "Величина,11",
                "Обучалочка,96",
        };

        public static String[] food = {
                "1Овощи, фрукты, здоровые жиры/масла, цельные зерна",
                "2Овощи, фрукты, здоровые жиры/масла, цельные зерна",
                "3Овощи, фрукты, здоровые жиры/масла, цельные зерна",
                "4Овощи, фрукты, здоровые жиры/масла, цельные зерна",
                "5Орехи, семечки, бобовые, тофу, рыба, птица, яйца",
                "6Орехи, семечки, бобовые, тофу, рыба, птица, яйца",
                "7Орехи, семечки, бобовые, тофу, рыба, птица, яйца",
                "8молочное или витамин D с кальцием",
                "9молочное или витамин D с кальцием",
                "0красное мясо, обработанное мясо, обработанные зерновые (белый рис, хлеб, макароны), картошка, сладкие напитки и сладости, соль"
        };

        public static String[] games = {
                "Мячи",
                "Пирамида",
                "Книжки",
                "Лепка из пластилина",
                "Хлоп - шлёп 1",
                "Хлоп - шлёп 2",
                "Хлоп - шлёп 3",
                "нарисованный лабиринт",
                "обведение предметов и штрихование фигурок",
                "шнуровки",
                "составление бус (настоящих)",
                "перерисовывание примера дорожки",
                "аппликации",
                "плетение ковриков из полосок бумаги",
                "конструктор",
                "Раскрашивание",
                "оригами",
                "лупа - на воздухе",
                "рамки-вкладыши (кубик с прорезями)",
                "Логический поезд",//1.5 - 3 года
                "Детское лото распознавания",//1.5 - 3 года
                "Детское лото заполнение",//1.5 - 3 года
                "Детское лото дополнение",//1.5 - 3 года
                "Игра для различия цвета",
                "Что лишнее?",
                "Hайди паpу",
                "Что плавает?",
                "Ролевые игры",
                "Ролевые игры общение с животным",
                "Ролевые игры кормить куклу",
                "раздевать куклу",
                "Ролевые игры ехать в машине в стульчике",
                "кукольный театр родители показывают",
                "кукольный театр малыши показывают",
                "игры с нарисованными зверями",
                "маленькие игрушки в домиках",
                "катание зверей на лыжах",
                "магазин",
                "обыграть ситуацию, поменяться местами",
                "Вкладыши в основание",
                "Вкладыши один в другой (матрешка и т.п.)",
                "крупная мозаика с деталями геометрической формы",
                "Блоки и конструкторы сюжетные (с фигурками)",
                "Квадраты Никитина",
                "Дроби никитина",
                "Сложи узор Никитина",
                "Радужное лукошко Даниловой",
                "Складушки Красноухова",
                "Детское домино с цветными картинками (сопоставлять по признакам)",
                "блоки Дьенеша (сопоставлять по признакам)",
                "Кто что ест",
                "Веселая пантомима",
                "спектакль с книгами-декорациями",
                "сравнение изображений с одинаковым смыслом",
                "пруд из кубиков",
                "бусы из макарон",
                "сортировать макароны",
                "Диафильмы",
                "Рыбалка",
                "Где же лужа?",
                "Поймай-ка!",
                "Вот идет мышка - на воздухе",
                "Прокати мяч через тоннель - на воздухе",
                "Бегом к дереву - на воздухе",
                "Лови мяч - на воздухе",
                "Одеяло с сюрпризом - на воздухе",
                "Игра в песочек - на воздухе",
                "какое дерево выше, какое ниже; у какого дерева листик шире, а у какого уже",
                "Домики, норки и берлоги",
                "прятки зверей",
                "Рыба, птица, зверь",
                "Велосипед",
                "карандаши",
                "мелки",
                "танцевать под музыку",
                "сочинять музыку",
                "брать на концерты",
                "музеи",
                "ролевая игра врач",
                "ролевая игра паркмахерская",
                "детские спектакли",
                "счет",
                "Сказки-перевертыши",
                "рисование Солнышко",
                "рисование Ёжик",
                "рисование Елка с шариками и огоньками",
                "рисование Волшебные кляксы",
                "Что там такое голубое?",
                "Картинки-вкладыши",
                "Разрезные картинки",
                "Кубики с изображениями",
                "пазлы",
                "Забавная геометрия",
                "У медведя во бору",
                "Где живет ладья?",
                "Кто быстрее вспомнит любимую историю",
                "Читая вместе книжки, время от времени останавливайтесь и задавайте малышу вопросы о том, что вы уже прочитали.",
                "когда малыш смотрит мультфильмы, время от времени останавливайтесь и задавайте малышу вопросы о том, что вы уже посмотрели",
                "Побольше разговаривайте со своим ребенком об увиденном и услышанном",
                "Придумай историю",
                "рисовать комиксы",
                "Кто лучше услышит?",
                "мозаики",
                "запоминать стихи и тексты, пользуясь пиктограммами",
                "Тест Сказка",
                "походы на выставки",
                "вышивка",
                "плетение",
                "сортировать крупу",
                "БИНОМ ФАНТАЗИИ",
                "КРАСНАЯ ШАПОЧКА НА ВЕРТОЛЕТЕ",
                "СКАЗКИ НАИЗНАНКУ",
                "А ЧТО БЫЛО ПОТОМ?",
                "САЛАТ ИЗ СКАЗОК",
                "Разложи все по порядку",
                "Волшебное сито",
                "Смети, но не просыпь!",
                "Пересыпаем ложкой",
                "Готовим лекарства",
                "Веселые дорожки",
                "Лепим колобки, колбаски и блинчики",
                "Открой и закрой",
                "Веселый щенок",
                "Прячемся и лепим",
                "Домики",
                "Спичечные коробки",
                "Попляши!",
                "Где чье?",
                "Покорми куклу",
                "Кто разбудил щенка?",
                "Волшебный мешочек",
                "Геометрическое лото",
                "лото “Цвет и форма”",

        };

        public static String[] meat = {
                "Биточки по-селянски",
                "Бигус",
                "Бризол фирменный",
                "Отбивная из свинины",
                "Голубцы с мясом",
                "Колбаса домашняя",
                "Колбаски охотничьи (порц.)",
                "Котлета домашняя",
                "Котлета мясная с сулугуни",
                "Котлета полтавская",
                "Котлета Садко",
                "Жаркое по-домашнему",
                "Печень жареная",
                "Ребра жареные",
                "Сосиски вареные",
                "Стейк из телятины",
                "Стейк из свинины",
                "Телятина отварная",
                "Тефтели мясные",
                "Шашлык из свинины",
                "Говядина в сыре",
                "Бризоль рыбный",
                "Котлета рыбная Бужок",
                "Котлета рыбная с маслом",
                "Котлета рыбная паровая",
                "Котлета рыбная жареная",
                "Крученик рыбный",
                "Лосось запеченный",
                "Рыба с овощами",
                "Рыба под маринадом",
                "Рыба по-итальянски",
                "Рыба жареная",
                "Стейки из лосося",
                "Скумбрия припущенная",
                "Колбаса куриная",
                "Котлета куриная с овощами и грибами",
                "Котлета куриная с сыром",
                "Котлета куриная паровая",
                "Котлета куриная по-домашнему",
                "Котлета по-киевски",
                "Крученик куриный с омлетом",
                "Курица запеченная с картофелем",
                "Куриная отбивная под сыром",
                "Куриные крылышки в маринаде",
                "Куриные крылышки жареные",
                "Куриные потрошки в сливочном соусе",
                "Куриные окорочка жареные",
                "Печень куриная жареная",
                "Стейк куриный",
                "Тефтели куриные",
                "Шашлык куриный"
        };

        public static String[] balanceProgram = {
                "Перекатывание",
                "Кувырок вперед",
                "Хождение по балке"
        };

        public static String[] recipes = {
                "Ванильные сырники 36",
                "Ленивые вареники на завтрак 57",
                "Необычный и вкусный бутерброд 45",
                "Пицца на сковороде 27",
                "Салат \"Мимоза\" 56",
        };

        public static String[] salads = {
                "Жюльен с грибами и курицей",
                "Закуска острая",
                "Огурец соленый",
                "Сельдь с луком",
                "Селедка под шубой",
                "Помидор соленый",
                "Сало с чесноком",
                "Торт из кабачков",
                "Салат Винегрет",
                "Салат из грибов",
                "Салат из квашеной капусты",
                "Салат с крабовыми палочками",
                "Салат с курицей и ананасом",
                "Салат с курицей и грибами",
                "Салат из моркови и сельдерея",
                "Салат из краснокочанной капусты",
                "Салат с ветчиной",
                "Салат Лососевый",
                "Салат Морковь по-корейски",
                "Салат Мимоза",
                "Салат Оливье",
                "Салат Спаржевый",
                "Салат Цезарь с курицей",
                "Салат-фреш Греческий",
                "Салат-фреш с курицей",
                "Салат-фреш с тунцом"
        };

        public static String[] secondCourses = {
                "Баклажаны с курицей",
                "Гречка",
                "Грибы жареные",
                "Гуляш с мясом",
                "Капуста тушеная",
                "Картофель вареный",
                "Картофель по-полтавски",
                "Картофель жареный",
                "Фасоль с овощами и грибами",
                "Макароны в соусе",
                "Овощи бланшированные",
                "Овощи с беконом",
                "Перец фаршированный мясом",
                "Шампиньоны в сметане",
                "Плов",
                "Рагу овощное",
                "Рис",
                "Рис с морепродуктами",
                "Рис с овощами",
                "Соте",
                "Сырники",
                "Вареники с вишнями",
                "Вареники с капустой",
                "Вареники с картошкой",
                "Вареники с мясом",
                "Зразы картофельные с капустой и грибами",
                "Блины с маком",
                "Блинчики с мясом",
                "Блины с творогом",
                "Блины с яблоками",
                "Блинчики с мясом в яйце",
                "Пирожок с капустой",
                "Пирожок с мясом (печенью)",
                "Пирожок с вишнями",
                "Пирожок жареный с капустой",
                "Пирожок жареный с картофелем",
                "Пирожок жареный с мясом",
                "Пирожок жареный с печенью и картофелем"
        };

        public static String[] soups = {
                "Борщ украинский",
                "Бульон куриный с лапшой",
                "Рассольник",
                "Солянка мясная",
                "Суп гороховый",
                "Суп овощной",
                "Юшка грибная с фасолью",
                "Уха из рыбы"
        };

        public static String[] training = {
                "Life",
                "Life",
                "Life",
                "Life",
                "health",
                "health",
                "health",
                "Children"
        };

        public static String[] zaytsev = {
                "Дорожки",
                "Маленькие дорожки",
                "поиграть несколько кубиков",
                "Домики",
                "Перекладывание",
                "Писать окружающее",
                "дежурный кубик",
                "новая Игрушки на кубиках",
                "Активная игра в кубики",
                "Активный словарь",
                "Чтение про себя",
                "Перевертыши",
                "Игрушки пишут слова",
                "Пишем кубиками"
        };

    }
}
