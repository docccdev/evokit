[colors]: base/colors.md

[text]: blocks/text.md
[link]: blocks/link.md

# Tags

Блок `.ui-tags` создает "облако тегов".

---

## Использование

Чтобы применить этот компонент, просто добавьте класс `.ui-tags` к тегу `<ul>`.


``` html
<ul class='ui-tags ui-tags_theme_info'>
    <li class='ui-tags__item'>
        item
    </li>
    <li class='ui-tags__item'>
        item
    </li>
</ul>
```

---

## Темы

Определяет фоновый цвет для всех элементов. По умолчанию, не имеют фона.

|            Class            |       Description     |
|-----------------------------|-----------------------|
| `.ui-tags_theme_`[colors]   | Цвет фона.            |

``` html
<ul class='ui-tags'>
    <li class='ui-tags__item'>
        default
    </li>
    <li class='ui-tags__item'>
        default
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_white'>
    <li class='ui-tags__item'>
        white
    </li>
    <li class='ui-tags__item'>
        white
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_gray'>
    <li class='ui-tags__item'>
        gray
    </li>
    <li class='ui-tags__item'>
        gray
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_blue'>
    <li class='ui-tags__item'>
        blue
    </li>
    <li class='ui-tags__item'>
        blue
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_info'>
    <li class='ui-tags__item'>
        info
    </li>
    <li class='ui-tags__item'>
        info
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_success'>
    <li class='ui-tags__item'>
        success
    </li>
    <li class='ui-tags__item'>
        success
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_warning'>
    <li class='ui-tags__item'>
        warning
    </li>
    <li class='ui-tags__item'>
        warning
    </li>
</ul>
<ul class='ui-tags ui-tags_theme_error'>
    <li class='ui-tags__item'>
        error
    </li>
    <li class='ui-tags__item'>
        error
    </li>
</ul>
```

---

## Темы элемента

Определяет фоновый цвет для элемента.

|            Class            |        Description      |
|-----------------------------|-------------------------|
| `.ui-tags__item_theme_`[colors]   | Цвет фона.        |

``` html
<ul class='ui-tags'>
    <li class='ui-tags__item ui-tags__item_theme_transparent'>
        transparent
    </li>
    <li class='ui-tags__item ui-tags__item_theme_white'>
        white
    </li>
    <li class='ui-tags__item ui-tags__item_theme_gray'>
        gray
    </li>
    <li class='ui-tags__item ui-tags__item_theme_blue'>
        blue
    </li>
    <li class='ui-tags__item ui-tags__item_theme_info'>
        info
    </li>
    <li class='ui-tags__item ui-tags__item_theme_success'>
        success
    </li>
    <li class='ui-tags__item ui-tags__item_theme_warning'>
        warning
    </li>
    <li class='ui-tags__item ui-tags__item_theme_error'>
        error
    </li>
</ul>
```

---

## Пример

Использование с блоками [Link][link] и [Text][text].

``` html
<ul class='ui-tags'>
    <li class='ui-tags__item ui-tags__item_theme_white'>
        <span class='ui-text ui-text_color_muted'>
            color muted
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_gray'>
        <span class='ui-text ui-text_color_base'>
            color base
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_blue'>
        <span class='ui-text ui-text_color_link'>
            color link
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_info'>
        <span class='ui-text ui-text_color_info'>
            color info
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_success'>
        <span class='ui-text ui-text_color_success'>
            color success
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_warning'>
        <span class='ui-text ui-text_color_warning'>
            color warning
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_error'>
        <span class='ui-text ui-text_color_error'>
            color error
        </span>
    </li>
    <li class='ui-tags__item ui-tags__item_theme_white'>
        <a class='ui-link'>
            link
        </a>
    </li>
    <li class='ui-tags__item'>
        <a class='ui-link ui-link_style_dotted'>
            dotted link
        </a>
    </li>
</ul>
```
