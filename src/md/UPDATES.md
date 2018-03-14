<!--
updates|30
-->

[media]: docs/base/media.html
[size]: docs/base/sizes.html
[text]: docs/base/text.html
[colors]: docs/base/colors.html

[body]: docs/blocks/body.html
[grid]: docs/blocks/grid.html
[panel]: docs/blocks/panel.html
[box]: docs/blocks/box.html
[list]: docs/blocks/list.html
[text]: docs/blocks/text.html
[link]: docs/blocks/link.html
[picture]: docs/blocks/picture.html
[image]: docs/blocks/image.html
[line]: docs/blocks/line.html
[tags]: docs/blocks/tags.html

[page_deprecated]: docs/removed/page.html
[title_deprecated]: docs/removed/title.html
[text_deprecated]: docs/removed/text.html


# Обновления


## 0.1.54 beta (14.03.2018)
- Изменен тег c `<div>` на `<span>` для jsx компонента [UiText][text].
- Изменен тег c `<a>` на `<hr>` для jsx компонента [UiLine][line].
- Блок [ui-box][box] получил свойство `display: block`.
- Блок [ui-text][text] получил свойство `display: inline`.
- Блок [ui-list][list] получил свойство `display: block`.
- Добавлены модификаторы отображения [ui-box][box]:
    - `.ui-box_display_*`
- Добавлены модификаторы отображения [ui-text][text]:
    - `.ui-text_display_*`

## 0.1.53 beta (12.03.2018)
- Новый раздел [colors][colors].
- Изменен модификатор насыщенности с `regular` на `base` для [text][text].
- Установлен базовый `font-weight: 400` для [ui-body][body].
- Добавлено автоопределение сенсорных экранов для свойства `:hover` на ссылке [ui-link][link].
- Добавлен модификатор базового цвета [ui-text][text]:
    - `.ui-text_color_base`
- Добавлен модификатор базового цвета [ui-list][list]:
    - `.ui-list_color_base`
- Добавлены модификаторы для [ui-link][link]:
    - `.ui-link_color_*`
    - `.ui-link_size_*`
    - `.ui-link_weight_*`


## 0.1.52 beta (19.01.2018)
- Добавлен новый блок в `jsx`:
     - [UiImage][image]


## 0.1.51 beta (14.12.2017)
- Новый блок [ui-tags][tags].


## 0.1.50 beta (27.09.2017)
- Добавлены модификаторы переноса [ui-grid][grid]:
    - `.ui-grid_wrap_nowrap`
    - `.ui-grid_wrap_wrap`
    - `.ui-grid_wrap_wrap-reverse`


## 0.1.49 beta (14.09.2017)
- Добавлены модификаторы стиля для [ui-line][line]:
    - `.ui-line_style_dotted`
    - `.ui-line_style_dashed`


## 0.1.48 beta (13.09.2017)
- Исправлены названия компононетов для `React Developer Tools`.


## 0.1.46 beta (06.09.2017)
- Оптимизирован размер `.js` бандла.
- Добавлены модификаторы в `jsx` для блока [UiPicture][picture]:
    - `ui-size`
    - `ui-style`
- Добавлен новый блок в `jsx`:
    - [UiImage][image]


## 0.1.45 beta (04.09.2017)
- Добавлен новый блок в `jsx`:
     - [UiList][list]


## 0.1.44 beta (31.08.2017)
- Добавлены блоки `jsx`:
     - [UiGrid][grid]
     - [UiPanel][panel]
     - [UiBox][box]
     - [UiText][text]
     - [UiLink][link]
     - [UiPicture][picture]
     - [UiLine][line]


## 0.1.43 beta (30.08.2017)
- Исправлены стили  [ui-picture][picture].
- Добавлен модификатор закругления для [ui-picture][picture]:
    - `.ui-picture_size_cover`
    - `.ui-picture_style_round`


## 0.1.42 beta (28.08.2017)
- Новый блок [ui-image][image].


## 0.1.41 beta (16.08.2017)
- Добавлены два цвета для [ui-text][text]:
    - `.ui-text_color_red`
    - `.ui-text_color_yellow`
- Добавлены модификаторы цвета маркера для списка [ui-list][list]:
    - `.ui-list_color_red`
    - `.ui-list_color_yellow`
    - `.ui-list_color_link`
    - `.ui-list_color_muted`
    - `.ui-list_color_info`
    - `.ui-list_color_success`
    - `.ui-list_color_warning`
    - `.ui-list_color_error`


## 0.1.40 beta (10.08.2017)
- **УДАЛЕН** блок [ui-page][page_deprecated]
- **УДАЛЕН** блок [ui-title][title_deprecated]- *
- **УДАЛЕН** блок [ui-text][text_deprecated]- *


## 0.1.39 beta (03.08.2017)
- Добавлен новый элемент `.ui-body__section` для блока [ui-body][body]:
    - **НЕ ИСПОЛЬЗОВАТЬ** блок [ui-page][page_deprecated], замените его на `.ui-body__section`


## 0.1.38 beta (28.07.2017)
- Новый блок [ui-body][body].
- Новый блок [ui-text][text]:
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы [ui-title][title_deprecated], замените их на `.ui-text`
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы [ui-text][text_deprecated], замените их на `.ui-text`
- Добавлен модификатор `.ui-grid_valign_baseline` для [ui-grid][grid].
- Добавлены модификаторы тем для блока [ui-box][box]:
    - `.ui-box_theme_info`
    - `.ui-box_theme_success`
    - `.ui-box_theme_warning`
    - `.ui-box_theme_error`
- Добавлены модификаторы тем для блока [ui-panel][panel]:
    - `.ui-panel_theme_info`
    - `.ui-panel_theme_success`
    - `.ui-panel_theme_warning`
    - `.ui-panel_theme_error`


## 0.1.37 beta (25.07.2017)
- Увеличена скорость компиляции стилей в 6 раз.
- **Удален** миксин для комбинирования медиа стилей. Использовать [postcss](http://postcss.org) плагин.


## 0.1.36 beta (11.07.2017)

- Новое [media][media] правило `xxxlarge`.
- Добавлен модификатор `.ui-page_size_xxxl` для блока [ui-page][page_deprecated].


## 0.1.35 beta (20.06.2017)

- Исправлен модификатор размера для [ui-list][list].
- Для модификатора `.ui-list_theme_divider` добавлены [media][media] правила.
- Модификаторы для обнуления [size][size]:
    - `.ui-box_margin_none`
    - `.ui-box_padding_none`
    - `.ui-box_size_none`
    - `.ui-grid_size_none`
    - `.ui-line_size_none`
    - `.ui-list_size_none`
    - `.ui-panel_size_none`


## 0.1.34 beta (19.04.2017)

- Добавлены стили `border-radius` и `padding` к элементу`.ui-panel__body` для блока [ui-panel][panel].
- Добавлен модификатор `.ui-panel_theme_blue` для [ui-panel][panel].
- Новые модификаторы для [ui-box][box]:
    - `.ui-box_margin_auto`
    - `.ui-box_margin-left_auto`
    - `.ui-box_margin-top_auto`
    - `.ui-box_margin-right_auto`
    - `.ui-box_margin-bottom_auto`
    - `.ui-box_margin-tb_auto`
    - `.ui-box_margin-lr_auto`

## 0.1.33 beta (18.04.2017)

- Добавлен модификатор `.ui-box_theme_blue` для [ui-box][box].
- Обновлен список переменных.


## 0.1.32 beta (13.04.2017)

- Added [ui-picture][picture] to portable bundle.
- Added min and max width for `.ui-grid__item`.


## 0.1.31 beta (27.03.2017)

- Fixed bug with [ui-grid][grid] item padding when applied theme divider.


## 0.1.30 beta (23.03.2017)

- Исправлена ошибка с повторяющимися стилями.


## 0.1.29 beta (23.03.2017)

- Big update [ui-grid][grid] divider:
    - `Responsive`
    - `Multi column`
    - `Horizontal and vertical divider`


## 0.1.28 beta (06.03.2017)

- Added font weight class for [ui-text][text]:
    - `.ui-text-thin`
    - `.ui-text-light`
    - `.ui-text-regular`
    - `.ui-text-medium`
    - `.ui-text-black`


## 0.1.27 beta (06.03.2017)

- Добавлен модификатор `.ui-box_theme_transparent` для [ui-box][box].
- Добавлен модификатор `.ui-panel_theme_transparent` для [ui-panel][panel].
- Added [media][media] rules for all [ui-box][box] modifiers.
- Added [media][media] rules for all [ui-panel][panel] modifiers.


## 0.1.26 beta (01.03.2017)

- Добавлен цвет текста `.ui-text-muted` для [ui-text][text].
- Добавлен модификатор `.ui-panel_style_border` для [ui-panel][panel].
- Added border-box for [ui-panel][panel].
- Reset margin-bottom for `.ui-grid_theme_divider`.


## 0.1.25 beta (20.02.2017)

- Added modifiers for [ui-grid][grid]:
    - `.ui-grid_direction_row`
    - `.ui-grid_direction_row-reverse`
    - `.ui-grid_direction_column`
    - `.ui-grid_direction_column-reverse`
    - `.ui-grid_align_left`
    - `.ui-grid_valign_top`
- Added [media][media] rules for all grid modifiers.


## 0.1.24 beta (06.02.2017)

- Новый блок [ui-link][link].
- Added modifiers for [ui-box][box] padding:
    - `.ui-box_padding-left_*`
    - `.ui-box_padding-top_*`
    - `.ui-box_padding-right_*`
    - `.ui-box_padding-bottom_*`
- Added modifiers for [ui-box][box] margin:
    - `.ui-box_margin-left_*`
    - `.ui-box_margin-top_*`
    - `.ui-box_margin-right_*`
    - `.ui-box_margin-bottom_*`


## 0.1.23 beta (24.01.2017)

- Новый блок [ui-picture][picture].
- Added ui-width class `.ui-width-auto`.
- Added ui-width class `.ui-width-expand`.
- Added modifier for [ui-grid][grid] `.ui-grid_column_expand`.
- Исправлен стиль `position` для `.ui-list__item`.
- Changed the design documentation and add preview block.


## 0.1.21 beta (16.01.2017)

- Added modifier `.ui-grid_column_*` for [ui-grid][grid].
- Added description for [media][media] rules.
- Changed all media class from `.ui-width-xl-1-2` to `.ui-width-1-2@xlarge`.


## 0.1.20 beta (13.01.2017)

- Новый блок [ui-box][box].
- **УДАЛЕН** блок `.ui-block`.
- Исправлен стиль `display` для `.ui-list__item`.
