1. JSX блоки
    - Добавить возможность пробрасывать React element в box-tag={component}

2. CSS variables
    - Переделать font-family: system-ui на переменную css
    - Добавить возможность изменять background на line-gradient
    - Сделать подчеркивание для ссылок Link однотипное и настраиваемое
    - Убрать переменные step и прописать их явно
    - Засунуть темы в один файл (создать миксин)

3. CSS bundles
    - Создать reset.css
    - Создать base.css без сброса и тем
    - Обьеденить reset.css, base.css, themes.css в style.css
    - На выходе должны получить бандлы:
        * reset.css
        * base.css
        * themes.css
        * style.css = reset + base + themes

4. Picture
    - Добавить модификатор round и удалить style
    - Добавить модификатор border
    - Item - вынести как отдельный елемент
    - Добавить все свойства модификатору cover (создать миксин)

5. Image
    - Добавить модификатор round
    - Добавить модификатор border
    - Добавить модификатор cover

6. MORE
    - box_display_none не перебивает box_display_inline
    - Добавить модификаторы border-top, border-left, border-right, border-bottom
