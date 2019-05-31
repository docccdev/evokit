[colors]: docs/deprecated/removed_colors.md

[text]: packages/evokit-text/
[link]: packages/evokit-link/

!> DEPRECATED

# Tags

Блок `.ek-tags` создает "облако тегов".

---

## Использование

Чтобы применить этот компонент, просто добавьте класс `.ek-tags` к тегу `<ul>`.


``` html
<ul class='ek-tags ek-tags_theme_info'>
    <li class='ek-tags__item'>
        item
    </li>
    <li class='ek-tags__item'>
        item
    </li>
</ul>
```

---

## Темы

Определяет фоновый цвет для всех элементов. По умолчанию, не имеют фона.

|            Class            |       Description     |
|-----------------------------|-----------------------|
| `.ek-tags_theme_`[colors]   | Цвет фона.            |

``` html
<ul class='ek-tags'>
    <li class='ek-tags__item'>
        default
    </li>
    <li class='ek-tags__item'>
        default
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_white'>
    <li class='ek-tags__item'>
        white
    </li>
    <li class='ek-tags__item'>
        white
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_gray'>
    <li class='ek-tags__item'>
        gray
    </li>
    <li class='ek-tags__item'>
        gray
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_blue'>
    <li class='ek-tags__item'>
        blue
    </li>
    <li class='ek-tags__item'>
        blue
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_info'>
    <li class='ek-tags__item'>
        info
    </li>
    <li class='ek-tags__item'>
        info
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_success'>
    <li class='ek-tags__item'>
        success
    </li>
    <li class='ek-tags__item'>
        success
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_warning'>
    <li class='ek-tags__item'>
        warning
    </li>
    <li class='ek-tags__item'>
        warning
    </li>
</ul>
<ul class='ek-tags ek-tags_theme_error'>
    <li class='ek-tags__item'>
        error
    </li>
    <li class='ek-tags__item'>
        error
    </li>
</ul>
```

---

## Темы элемента

Определяет фоновый цвет для элемента.

|            Class            |        Description      |
|-----------------------------|-------------------------|
| `.ek-tags__item_theme_`[colors]   | Цвет фона.        |

``` html
<ul class='ek-tags'>
    <li class='ek-tags__item ek-tags__item_theme_transparent'>
        transparent
    </li>
    <li class='ek-tags__item ek-tags__item_theme_white'>
        white
    </li>
    <li class='ek-tags__item ek-tags__item_theme_gray'>
        gray
    </li>
    <li class='ek-tags__item ek-tags__item_theme_blue'>
        blue
    </li>
    <li class='ek-tags__item ek-tags__item_theme_info'>
        info
    </li>
    <li class='ek-tags__item ek-tags__item_theme_success'>
        success
    </li>
    <li class='ek-tags__item ek-tags__item_theme_warning'>
        warning
    </li>
    <li class='ek-tags__item ek-tags__item_theme_error'>
        error
    </li>
</ul>
```

---

## Пример

Использование с блоками [Link][link] и [Text][text].

``` html
<ul class='ek-tags'>
    <li class='ek-tags__item ek-tags__item_theme_white'>
        <span class='ek-text ek-text_color_muted'>
            color muted
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_gray'>
        <span class='ek-text ek-text_color_base'>
            color base
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_blue'>
        <span class='ek-text ek-text_color_link'>
            color link
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_info'>
        <span class='ek-text ek-text_color_info'>
            color info
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_success'>
        <span class='ek-text ek-text_color_success'>
            color success
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_warning'>
        <span class='ek-text ek-text_color_warning'>
            color warning
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_error'>
        <span class='ek-text ek-text_color_error'>
            color error
        </span>
    </li>
    <li class='ek-tags__item ek-tags__item_theme_white'>
        <a class='ek-link'>
            link
        </a>
    </li>
    <li class='ek-tags__item'>
        <a class='ek-link ek-link_style_dotted'>
            dotted link
        </a>
    </li>
</ul>
```
