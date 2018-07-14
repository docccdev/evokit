[colors]: base/colors.md
[text]: base/text.md

# Link

Блок предназначен для создания ссылок.

---

## Использование

``` html
<a class='ek-link'>Cсылка</a>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-link_color_`[colors]  | Цвет ссылки.  |

``` html
<a class='ek-link ek-link_color_base'>Base</a>
<a class='ek-link ek-link_color_white'>White</a>
<a class='ek-link ek-link_color_link'>Link</a>
<a class='ek-link ek-link_color_red'>Red</a>
<a class='ek-link ek-link_color_yellow'>Yellow</a>
<a class='ek-link ek-link_color_muted'>Muted</a>
<a class='ek-link ek-link_color_info'>Info</a>
<a class='ek-link ek-link_color_success'>Success</a>
<a class='ek-link ek-link_color_warning'>Warning</a>
<a class='ek-link ek-link_color_error'>Error</a>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-link_size_`[font-size][text]  | Размер текста.  |

``` html
<a class='ek-link ek-link_size_h1'>H1</a>
<a class='ek-link ek-link_size_h2'>H2</a>
<a class='ek-link ek-link_size_h3'>H3</a>
<a class='ek-link ek-link_size_h4'>H4</a>
<a class='ek-link ek-link_size_h5'>H5</a>
<a class='ek-link ek-link_size_h6'>H6</a>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ek-link_weight_`[font-weight][text]  | Насыщенность шрифта.  |


``` html
<a class='ek-link ek-link_weight_base'>base</a>
<a class='ek-link ek-link_weight_thin'>100</a>
<a class='ek-link ek-link_weight_light'>300</a>
<a class='ek-link ek-link_weight_medium'>500</a>
<a class='ek-link ek-link_weight_bold'>700</a>
<a class='ek-link ek-link_weight_black'>900</a>
```

---

## Стили

|          Class          |             Description             |
|-------------------------|-------------------------------------|
| `.ek-link_style_dotted` | Добавляет пунктирное подчеркивание. |
| `.ek-link_style_multi-line` | Делает пространство между многострочной ссылкой кликабельным. |

``` html
<a class='ek-link ek-link_style_dotted'>Пунктирная ссылка</a>
<hr class="ek-line ek-line_size_xl">
<a class='ek-link ek-link_style_multi-line'>Многострочная <br><br> ссылка</a>
```
