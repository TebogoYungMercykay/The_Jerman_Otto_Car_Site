// Selepe Sello uXXXXXXXX
var html = document.querySelector('html');
var themeStyle = document.querySelector('#theme-style');
var toggleButton = document.querySelector('#theme-toggle');
var defaultTheme = localStorage.getItem('default_theme');

if (defaultTheme && defaultTheme != "N/A") {
    html.setAttribute('data-theme', defaultTheme);
    themeStyle.setAttribute('href', `../css/jerman-otto-styles-${defaultTheme}.css`);
    if(defaultTheme === 'dark'){
        toggleButton.textContent = 'Dark Mode';
    }
    else {
        toggleButton.textContent = 'Light Mode';
    }
}

toggleButton.addEventListener('click', () => {
    var theme = '';
    if(html.getAttribute('data-theme') === 'dark'){
        theme = 'light';
    }
    else{
        theme = 'dark';
    }
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    localStorage.setItem('default_theme', theme);
    themeStyle.setAttribute('href', `../css/jerman-otto-styles-${theme}.css`);

    // toggle button text
    if (theme === 'dark') {
        toggleButton.textContent = 'Dark Mode';
    }
    else {
        toggleButton.textContent = 'Light Mode';
    }
});