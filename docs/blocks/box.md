[sizes]: base/sizes.md
[colors]: base/colors.md
[media]: base/media.md

# Box

### Модификаторы имеют [Media][media] параметры.

Задаёт блок для контента.

---

## Использование

Добавьте класс `.ek-box` к элементу контейнера.

``` html
<div class='ek-box ek-box_theme_gray'>
    Box
</div>
```

---

## Отображение (display)

Определяет, как элемент должен быть показан в документе. По умолчанию `display: block`.

|               Class               |                       Description                       |
|-----------------------------------|---------------------------------------------------------|
|  `.ek-box_display_none`           | Удаляет элемент из документа..                          |
|  `.ek-box_display_block`          | Элемент показывается как блочный.                       |
|  `.ek-box_display_inline`         | Элемент отображается как встроенный.                    |
|  `.ek-box_display_inline-block`   | Блочный элемент, который обтекается другими элементами. |

``` html
<div class='ek-box ek-box_theme_gray ek-box_margin_xxs ek-box_display_none'>
    None
</div>
<div class='ek-box ek-box_theme_gray ek-box_margin_xxs ek-box_display_block'>
    Block
</div>
<div class='ek-box ek-box_theme_gray ek-box_margin_xxs ek-box_display_inline'>
    Inline
</div>
<div class='ek-box ek-box_theme_gray ek-box_margin_xxs ek-box_display_inline-block'>
    Inline-block
</div>
```

---

## Позиционирование (position)

Устанавливает способ позиционирования элемента относительно окна браузера или других объектов на странице.

|               Class               |                       Description                       |
|-----------------------------------|---------------------------------------------------------|
|  `.ek-box_position_absolute`      | Указывает, что элемент абсолютно позиционирован         |
|  `.ek-box_position_fixed`         | Не меняет своего положения при прокрутке веб-страницы   |
|  `.ek-box_position_relative`      | Положение элемента устанавливается относительно его исходного места.  |
|  `.ek-box_position_static`        | Элементы отображаются как обычно. |

``` html
<div class='ek-box ek-box_position_absolute'>
    absolute
</div>
```

---

## Размещение (place)

Положение элемента зависит от значения свойства `position`.

|               Class               |                       Description                       |
|-----------------------------------|---------------------------------------------------------|
|  `.ek-box_place_top`              | Позиционирует элемент в верхнем центре.      |
|  `.ek-box_place_top-left`         | Позиционирует элемент в левом верхнем углу.  |
|  `.ek-box_place_top-right`        | Позиционирует элемент в верхнем правом углу. |
|  `.ek-box_place_center`           | Позиционирует элемент, центрированный по центру в середине. |
|  `.ek-box_place_center-left`      | Позиционирует элемент, вертикально центрированный слева.    |
|  `.ek-box_place_center-right`     | Позиционирует элемент, вертикально центрированный справа.   |
|  `.ek-box_place_bottom`           | Позиционирует элемент в центре внизу.       |
|  `.ek-box_place_bottom-left`      | Позиционирует элемент в левом нижнем углу.  |
|  `.ek-box_place_bottom-right`     | Позиционирует элемент в правом нижнем углу. |

``` html
<div class='ek-box ek-box_place_top'>
    элемент в верхнем центре
</div>
```

---

## Отступы

Модификатор размера определяет внутренние и внешние отступы. По умолчанию, блок не имеет отступов.

### Внутренние

|               Class               |            Description            |
|-----------------------------------|-----------------------------------|
|  `.ek-box_padding_`[sizes]        | Внутренний отступ со всех сторон. |
|  `.ek-box_padding-tb_`[sizes]     | Внутренний отступ сверху и снизу. |
|  `.ek-box_padding-lr_`[sizes]     | Внутренний отступ слева и справа. |
|  `.ek-box_padding-left_`[sizes]   | Внутренний отступ слева.          |
|  `.ek-box_padding-top_`[sizes]    | Внутренний отступ сверху.         |
|  `.ek-box_padding-right_`[sizes]  | Внутренний отступ справа.         |
|  `.ek-box_padding-bottom_`[sizes] | Внутренний отступ снизу.          |

---

### Внешние

|              Class               |            Description         |
|----------------------------------|--------------------------------|
|  `.ek-box_margin_`[sizes]        | Внешний отступ со всех сторон. |
|  `.ek-box_margin-tb_`[sizes]     | Внешний отступ сверху и снизу. |
|  `.ek-box_margin-lr_`[sizes]     | Внешний отступ слева и справа. |
|  `.ek-box_margin-left_`[sizes]   | Внешний отступ слева.          |
|  `.ek-box_margin-top_`[sizes]    | Внешний отступ сверху.         |
|  `.ek-box_margin-right_`[sizes]  | Внешний отступ справа.         |
|  `.ek-box_margin-bottom_`[sizes] | Внешний отступ снизу.          |



``` html
<div class='ek-box ek-box_padding_xxxl ek-box_margin-lr_xxxl ek-box_theme_gray'>
    Box
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|           Class           | Description |
|---------------------------|-------------|
| `.ek-box_theme_`[colors]  | Цвет фона.  |

``` html
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_transparent'>
    transparent
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_gray'>
    gray
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_white'>
    white
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_blue'>
    blue
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_info'>
    info
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_success'>
    success
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_warning'>
    warning
</div>
<div class='ek-box ek-box_padding_s ek-box_margin-tb_s ek-box_theme_error'>
    error
</div>
```

## Стиль

|           Class           | Description |
|---------------------------|-------------|
| `.ek-box_style_round`     | Скруглённые уголки. |

``` html
<div class='ek-box ek-box_style_round'>
    round
</div>
```