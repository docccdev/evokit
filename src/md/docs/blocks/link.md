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
<br>
<a class='ui-link ui-link_color_link'>Link</a>
<br>
<a class='ui-link ui-link_color_red'>Red</a>
<br>
<a class='ui-link ui-link_color_yellow'>Yellow</a>
<br>
<a class='ui-link ui-link_color_muted'>Muted</a>
<br>
<a class='ui-link ui-link_color_info'>Info</a>
<br>
<a class='ui-link ui-link_color_success'>Success</a>
<br>
<a class='ui-link ui-link_color_warning'>Warning</a>
<br>
<a class='ui-link ui-link_color_error'>Error</a>
```

---

## Размер

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-link_size_`[font-size][text]  | Размер текста.  |

``` html
<a class='ui-link ui-link_size_h1'>Размер заголовка h1</a>
<br>
<a class='ui-link ui-link_size_h2'>Размер заголовка h2</a>
<br>
<a class='ui-link ui-link_size_h3'>Размер заголовка h3</a>
<br>
<a class='ui-link ui-link_size_h4'>Размер заголовка h4</a>
<br>
<a class='ui-link ui-link_size_h5'>Размер заголовка h5</a>
<br>
<a class='ui-link ui-link_size_h6'>Размер заголовка h6</a>
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
