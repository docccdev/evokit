<!--
docs/blocks/box|40
-->

# Box

Задаёт блок для контента.

---

## Использование

Добавьте класс `.ui-box` к элементу контейнера.

``` html
<div class="doc-example">
    <div class='ui-box ui-box_theme_gray'>
        Box
    </div>
</div>
```

---

## Отступы

Модификатор размера определяет внутренние и внешние отступы. По умолчанию, блок не имеет отступов.

### Внутренние

|                         Class                          |            Description            |
|--------------------------------------------------------|-----------------------------------|
|  `.ui-box_padding_`[size](docs/base/sizes.html)        | Внутренний отступ со всех сторон. |
|  `.ui-box_padding-tb_`[size](docs/base/sizes.html)     | Внутренний отступ сверху и снизу. |
|  `.ui-box_padding-lr_`[size](docs/base/sizes.html)     | Внутренний отступ слева и справа. |
|  `.ui-box_padding-left_`[size](docs/base/sizes.html)   | Внутренний отступ слева.          |
|  `.ui-box_padding-top_`[size](docs/base/sizes.html)    | Внутренний отступ сверху.         |
|  `.ui-box_padding-right_`[size](docs/base/sizes.html)  | Внутренний отступ справа.         |
|  `.ui-box_padding-bottom_`[size](docs/base/sizes.html) | Внутренний отступ снизу.          |

---

### Внешние

|                         Class                         |            Description         |
|-------------------------------------------------------|--------------------------------|
|  `.ui-box_margin_`[size](docs/base/sizes.html)        | Внешний отступ со всех сторон. |
|  `.ui-box_margin-tb_`[size](docs/base/sizes.html)     | Внешний отступ сверху и снизу. |
|  `.ui-box_margin-lr_`[size](docs/base/sizes.html)     | Внешний отступ слева и справа. |
|  `.ui-box_margin-left_`[size](docs/base/sizes.html)   | Внешний отступ слева.          |
|  `.ui-box_margin-top_`[size](docs/base/sizes.html)    | Внешний отступ сверху.         |
|  `.ui-box_margin-right_`[size](docs/base/sizes.html)  | Внешний отступ справа.         |
|  `.ui-box_margin-bottom_`[size](docs/base/sizes.html) | Внешний отступ снизу.          |



``` html
<div class="doc-example">
    <div class='ui-box ui-box_padding_xxxl ui-box_theme_gray'>
        Box
    </div>
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|            Class            |       Description     |
|-----------------------------|-----------------------|
| `.ui-box_theme_transparent` | Цвет фона прозрачный. |
| `.ui-box_theme_gray`        | Цвет фона серый.      |
| `.ui-box_theme_white`       | Цвет фона белый.      |
| `.ui-box_theme_blue`        | Цвет фона синий.      |
| `.ui-box_theme_info`        | Цвет информации.      |
| `.ui-box_theme_success`     | Цвет успеха.          |
| `.ui-box_theme_warning`     | Цвет предупреждения.  |
| `.ui-box_theme_error`       | Цвет ошибки.          |

``` html
<div class="doc-example doc-example_theme_gray">
    <div class='ui-box ui-box_theme_transparent'>
        transparent
    </div>
    <div class='ui-box ui-box_theme_gray'>
        gray
    </div>
    <div class='ui-box ui-box_theme_white'>
        white
    </div>
    <div class='ui-box ui-box_theme_blue'>
        blue
    </div>
    <div class='ui-box ui-box_theme_info'>
        info
    </div>
    <div class='ui-box ui-box_theme_success'>
        success
    </div>
    <div class='ui-box ui-box_theme_warning'>
        warning
    </div>
    <div class='ui-box ui-box_theme_error'>
        error
    </div>
</div>
```
