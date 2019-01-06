[colors]: base/colors.md
[sizes]: base/sizes.md
[media]: base/media.md

[grid]: blocks/grid.md

# Panel

### Модификаторы имеют [media] параметры.

Панель определяет разделы вашего содержания, которые могут быть стилизованы по-разному. Как правило, панели расположены в столбцах сетки из компонента [Grid][grid].

---

## Использование

Блок состоит из самой панели `.ek-panel`  и дочерним элементом `.ek-panel__body`. По умолчанию панель не имеет цвета и отступов.

|       Class       |                              Description                               |
|-------------------|------------------------------------------------------------------------|
|  `.ek-panel`      |  Добавьте этот класс для элемента, чтобы определить компонент панели.  |
|  `.ek-panel_body` |  Добавьте этот класс дочернему элементу для создания тела панели.      |

``` html
<div class='ek-panel ek-panel_theme_gray ek-panel_size_xxs'>
    <div class='ek-panel__body'>
        Panel
    </div>
</div>
```

---

## Размеры

Модификатор размера панели определяет внутренние отступы. По умолчанию, панель не имеет отступов.

|           Class           |      Description      |
|---------------------------|-----------------------|
|  `.ek-panel_size_`[sizes] | Внутренний отступ.    |

``` html
<div class='ek-panel ek-panel_theme_gray ek-panel_size_xxxl'>
    <div class='ek-panel__body'>
        Panel
    </div>
</div>
```

---

## Темы

Определяется фоновым цветом. По умолчанию, панель не имеет фона.

|             Class             |      Description      |
|-------------------------------|-----------------------|
| `.ek-panel_theme_`[colors] | Цвет фона. |


``` html
<div class='ek-panel ek-panel_size_s ek-panel_theme_transparent'>
    <div class='ek-panel__body'>
        transparent
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_white'>
    <div class='ek-panel__body'>
        white
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_gray'>
    <div class='ek-panel__body'>
        gray
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_blue'>
    <div class='ek-panel__body'>
        blue
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_info'>
    <div class='ek-panel__body'>
        info
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_success'>
    <div class='ek-panel__body'>
        success
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_warning'>
    <div class='ek-panel__body'>
        warning
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_theme_error'>
    <div class='ek-panel__body'>
        error
    </div>
</div>
```

---

## Стили

|           Class            |    Description   |
|----------------------------|------------------|
|  `.ek-panel_style_border`  | Добавляет рамку. |
|  `.ek-panel_style_divider`  | Добавляет разделитель. |

``` html
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider'>
    <div class='ek-panel__body'>
        default
    </div>
    <div class='ek-panel__body'>
        default
    </div>
</div>
<br>

<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_transparent'>
    <div class='ek-panel__body'>
        transparent
    </div>
    <div class='ek-panel__body'>
        transparent
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_white'>
    <div class='ek-panel__body'>
        white
    </div>
    <div class='ek-panel__body'>
        white
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_gray'>
    <div class='ek-panel__body'>
        gray
    </div>
    <div class='ek-panel__body'>
        gray
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_blue'>
    <div class='ek-panel__body'>
        blue
    </div>
    <div class='ek-panel__body'>
        blue
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_info'>
    <div class='ek-panel__body'>
        info
    </div>
    <div class='ek-panel__body'>
        info
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_success'>
    <div class='ek-panel__body'>
        success
    </div>
    <div class='ek-panel__body'>
        success
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_warning'>
    <div class='ek-panel__body'>
        warning
    </div>
    <div class='ek-panel__body'>
        warning
    </div>
</div>
<br>
<div class='ek-panel ek-panel_size_s ek-panel_style_border ek-panel_style_divider ek-panel_theme_error'>
    <div class='ek-panel__body'>
        error
    </div>
    <div class='ek-panel__body'>
        error
    </div>
</div>
```
