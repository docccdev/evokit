[colors]: base/colors
[sizes]: base/sizes
[media]: base/media

# List

### Модификаторы имеют [Media][media] параметры.

Блок `.ek-list` создает список. Каждый элемент списка должен иметь класс `.ek-list__item`.

---

## Использование

Чтобы применить этот компонент, просто добавьте класс `.ek-list` к тегу `<ul>` или `<ol>`.


``` html
<ul class='ek-list'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
```

---

## Размер

Модификатор размера списка определяет вертикальные отступы.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-list_size_`[sizes]  | Отступ между ячейками.  |

``` html
<ul class='ek-list ek-list_size_xxxl'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
```

---

## Стили маркера

Изменяет вид маркера для каждого элемента списка.

|            Class          |            Description            |
|---------------------------|-----------------------------------|
|  `.ek-list_style_decimal` |  Арабские числа (1, 2, 3, 4,...). |
|  `.ek-list_style_dash`    |  Маркер в виде тире.              |
|  `.ek-list_style_disc`    |  Маркер в виде точки.             |

``` html
<ul class='ek-list ek-list_style_decimal'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
<ul class='ek-list ek-list_style_dash'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
<ul class='ek-list ek-list_style_disc'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
```

---

## Цвет

Определяют цвет маркера.

|            Class          |            Description            |
|---------------------------|-----------------------------------|
|  `.ek-list_color_`[colors]  | Цвет маркера.  |

``` html
<ul class='ek-list ek-list_style_disc ek-list_color_base'>
    <li class='ek-list__item'>
        Base
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_white'>
    <li class='ek-list__item'>
        White
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_link'>
    <li class='ek-list__item'>
        Link
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_red'>
    <li class='ek-list__item'>
        Red
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_yellow'>
    <li class='ek-list__item'>
        Yellow
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_muted'>
    <li class='ek-list__item'>
        Muted
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_info'>
    <li class='ek-list__item'>
        Info
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_success'>
    <li class='ek-list__item'>
        Success
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_warning'>
    <li class='ek-list__item'>
        Warning
    </li>
</ul>
<ul class='ek-list ek-list_style_disc ek-list_color_error'>
    <li class='ek-list__item'>
        Error
    </li>
</ul>
```

---

## Разделитель между элементами

Чтобы применить горизонтальный разделитель, добавьте класс `.ek-list_theme_divider`.

``` html
<ul class='ek-list ek-list_size_xl ek-list_theme_divider'>
    <li class='ek-list__item'>
        Item
    </li>
    <li class='ek-list__item'>
        Item
    </li>
</ul>
```
