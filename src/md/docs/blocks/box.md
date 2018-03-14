<!--
docs/blocks/box|40
-->

[sizes]: docs/base/sizes.html
[colors]: docs/base/colors.html
[media]: docs/base/media.html

# Box

### Модификаторы имеют [Media][media] параметры.

Задаёт блок для контента.

---

## Использование

Добавьте класс `.ui-box` к элементу контейнера.

``` html
<div class='ui-box ui-box_theme_gray'>
    Box
</div>
```

---

## Отображение (display)

Определяет, как элемент должен быть показан в документе. По умолчанию `display: block`;

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-text_display_block`  | Элемент показывается как блочный.  |
|  `.ui-text_display_inline`  | Элемент отображается как встроенный.  |
|  `.ui-text_display_inline-block`  | Блочный элемент, который обтекается другими элементами.  |

``` html
<div class='ui-box ui-box_theme_gray ui-box_margin_xxs ui-box_display_block'>
    Block
</div>
<div class='ui-box ui-box_theme_gray ui-box_margin_xxs ui-box_display_inline'>
    Inline
</div>
<div class='ui-box ui-box_theme_gray ui-box_margin_xxs ui-box_display_inline-block'>
    Inline-block
</div>
```

---

## Отступы

Модификатор размера определяет внутренние и внешние отступы. По умолчанию, блок не имеет отступов.

### Внутренние

|                         Class                          |            Description            |
|--------------------------------------------------------|-----------------------------------|
|  `.ui-box_padding_`[sizes]        | Внутренний отступ со всех сторон. |
|  `.ui-box_padding-tb_`[sizes]     | Внутренний отступ сверху и снизу. |
|  `.ui-box_padding-lr_`[sizes]     | Внутренний отступ слева и справа. |
|  `.ui-box_padding-left_`[sizes]   | Внутренний отступ слева.          |
|  `.ui-box_padding-top_`[sizes]    | Внутренний отступ сверху.         |
|  `.ui-box_padding-right_`[sizes]  | Внутренний отступ справа.         |
|  `.ui-box_padding-bottom_`[sizes] | Внутренний отступ снизу.          |

---

### Внешние

|                         Class                         |            Description         |
|-------------------------------------------------------|--------------------------------|
|  `.ui-box_margin_`[sizes]        | Внешний отступ со всех сторон. |
|  `.ui-box_margin-tb_`[sizes]     | Внешний отступ сверху и снизу. |
|  `.ui-box_margin-lr_`[sizes]     | Внешний отступ слева и справа. |
|  `.ui-box_margin-left_`[sizes]   | Внешний отступ слева.          |
|  `.ui-box_margin-top_`[sizes]    | Внешний отступ сверху.         |
|  `.ui-box_margin-right_`[sizes]  | Внешний отступ справа.         |
|  `.ui-box_margin-bottom_`[sizes] | Внешний отступ снизу.          |



``` html
<div class='ui-box ui-box_padding_xxxl ui-box_margin-lr_xxxl ui-box_theme_gray'>
    Box
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|            Class            |       Description     |
|-----------------------------|-----------------------|
| `.ui-box_theme_`[colors] | Цвет фона. |

``` html
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_transparent'>
    transparent
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_gray'>
    gray
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_white'>
    white
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_blue'>
    blue
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_info'>
    info
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_success'>
    success
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_warning'>
    warning
</div>
<div class='ui-box ui-box_padding_s ui-box_margin-tb_s ui-box_theme_error'>
    error
</div>
```
