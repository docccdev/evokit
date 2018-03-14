<!--
docs/blocks/link|70
-->

[colors]: docs/base/colors.html
[text]: docs/base/text.html

# Link

Блок предназначен для создания ссылок.

---

## Использование

``` html
<a class='ui-link'>Cсылка</a>
```

---

## Цвет

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-link_color_`[colors]  | Цвет ссылки.  |

``` html
<a class='ui-link ui-link_color_base'>Base</a>
<a class='ui-link ui-link_color_link'>Link</a>
<a class='ui-link ui-link_color_red'>Red</a>
<a class='ui-link ui-link_color_yellow'>Yellow</a>
<a class='ui-link ui-link_color_muted'>Muted</a>
<a class='ui-link ui-link_color_info'>Info</a>
<a class='ui-link ui-link_color_success'>Success</a>
<a class='ui-link ui-link_color_warning'>Warning</a>
<a class='ui-link ui-link_color_error'>Error</a>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-link_size_`[font-size][text]  | Размер текста.  |

``` html
<a class='ui-link ui-link_size_h1'>H1</a>
<a class='ui-link ui-link_size_h2'>H2</a>
<a class='ui-link ui-link_size_h3'>H3</a>
<a class='ui-link ui-link_size_h4'>H4</a>
<a class='ui-link ui-link_size_h5'>H5</a>
<a class='ui-link ui-link_size_h6'>H6</a>
```

---

## Насыщенность шрифта

|        Class       |    Description   |
|--------------------|------------------|
|  `.ui-link_weight_`[font-weight][text]  | Насыщенность шрифта.  |


``` html
<a class='ui-link ui-link_weight_base'>base</a>
<a class='ui-link ui-link_weight_thin'>100</a>
<a class='ui-link ui-link_weight_light'>300</a>
<a class='ui-link ui-link_weight_medium'>500</a>
<a class='ui-link ui-link_weight_bold'>700</a>
<a class='ui-link ui-link_weight_black'>900</a>
```

---

## Стили

|          Class          |             Description             |
|-------------------------|-------------------------------------|
| `.ui-link_style_dotted` | Добавляет пунктирное подчеркивание. |

``` html
<a class='ui-link ui-link_style_dotted'>Пунктирная ссылка</a>
```
