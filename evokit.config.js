// EvoKit config v2.0.0

module.exports = {
    customProperties: {
        '--ek-step-indent': '4px', // xxs, xs, s, m, l, xl, xxl
        '--ek-step-round': '2px', // xxs, xs, s, m, l, xl, xxl
        '--ek-step-font-size': '2px', // small, default, big
        '--ek-step-line-height': '0.25em', // default, medium, large

        // body
        '--ek-body-min-width': '1000px',
        '--ek-body-max-width': '1240px',
        '--ek-body-font-family': 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',

        // font size
        '--ek-font-size-h1': '24px',
        '--ek-font-size-h2': '22px',
        '--ek-font-size-h3': '20px',
        '--ek-font-size-h4': '18px',
        '--ek-font-size-h5': '16px',
        '--ek-font-size-h6': '14px',

        '--ek-default-font-size': '13px',
        '--ek-default-font-weight': '400',
        '--ek-default-line-height': '1em',

        // COMMON and THEME DEFAULT
        '--ek-default-background-color': '#f7f7f7',
        '--ek-default-border-color': '#dde8f0',
        '--ek-default-divider-color': 'var(--ek-default-border-color)',
        '--ek-default-text-color': '#3c3c3c',
        '--ek-default-link-color': '#5e8fd5',

        // THEME RESET
        '--ek-reset-background-color': 'transparent',
        '--ek-reset-border-color': 'transparent',
        '--ek-reset-divider-color': 'transparent',
        '--ek-reset-text-color': 'var(--ek-default-text-color)',
        '--ek-reset-link-color': 'var(--ek-default-text-color)',

        // THEME PRIMARY (brand color 1)
        '--ek-primary-background-color': 'white',
        '--ek-primary-border-color': 'black',
        '--ek-primary-divider-color': 'black',
        '--ek-primary-text-color': 'black',
        '--ek-primary-link-color': 'black',

        // THEME SECOND (brand color 2)
        '--ek-second-background-color': 'white',
        '--ek-second-border-color': 'black',
        '--ek-second-divider-color': 'black',
        '--ek-second-text-color': 'black',
        '--ek-second-link-color': 'black',

        // THEME MINOR (brand color 3)
        '--ek-minor-background-color': 'white',
        '--ek-minor-border-color': 'black',
        '--ek-minor-divider-color': 'black',
        '--ek-minor-text-color': 'black',
        '--ek-minor-link-color': 'black',

        // THEME LIGHT
        '--ek-light-background-color': '#f8f9fa',
        '--ek-light-border-color': '#dee2e6',
        '--ek-light-divider-color': '#dee2e6',
        '--ek-light-text-color': '#212529',
        '--ek-light-link-color': '#212529',

        // THEME MUTED
        '--ek-muted-background-color': '#f7f7f7',
        '--ek-muted-border-color': '#e5e5e5',
        '--ek-muted-divider-color': '#e5e5e5',
        '--ek-muted-text-color': '#a0b0c7',
        '--ek-muted-link-color': '#a0b0c7',

        // THEME DARK
        '--ek-dark-background-color': '#343a40',
        '--ek-dark-border-color': '#dee2e6',
        '--ek-dark-divider-color': '#dee2e6',
        '--ek-dark-text-color': '#ffffff',
        '--ek-dark-link-color': '#ffffff',

        // THEME SUCCESS
        '--ek-success-border-color': '#b7e6b1',
        '--ek-success-divider-color': '#b7e6b1',
        '--ek-success-background-color': '#d0efcc',
        '--ek-success-text-color': '#33b600',
        '--ek-success-link-color': '#33b600',

        // THEME INFO
        '--ek-info-border-color': '#c1d4ed',
        '--ek-info-divider-color': '#dde8f0',
        '--ek-info-background-color': '#dde7f5',
        '--ek-info-text-color': '#5e8fd5',
        '--ek-info-link-color': '#5e8fd5',

        // THEME WARNING
        '--ek-warning-border-color': '#faea9b',
        '--ek-warning-divider-color': '#faea9b',
        '--ek-warning-background-color': '#fcf1bd',
        '--ek-warning-text-color': '#ff9600',
        '--ek-warning-link-color': '#ff9600',

        // THEME DANGER
        '--ek-danger-border-color': '#e6b9b3',
        '--ek-danger-divider-color': '#e6b9b3',
        '--ek-danger-background-color': '#efd2ce',
        '--ek-danger-text-color': '#bb2914',
        '--ek-danger-link-color': '#bb2914',
    },
    customMedia: {
        '--ek-media-small': 'only screen and (min-width: 480px)',
        '--ek-media-medium': 'only screen and (min-width: 768px)',
        '--ek-media-large': 'only screen and (min-width: 960px)',
        '--ek-media-wide': 'only screen and (min-width: 1200px)',
        '--ek-media-huge': 'only screen and (min-width: 1400px)'
    }
}
