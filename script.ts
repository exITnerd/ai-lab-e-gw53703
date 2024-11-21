//const msg: string = "Hello!";
//alert(msg);

type StyleMap = { [key: string]: string };

class ThemeSwitcher {
    private activeTheme: string;
    private themes: StyleMap;

    constructor(defaultTheme: string, themeFiles: StyleMap) {
        this.activeTheme = defaultTheme;
        this.themes = themeFiles;

        // Ustaw domyślny motyw
        this.switchTheme(this.activeTheme);

        // Inicjuj interakcje z elementami na stronie
        this.initClickHandlers();
    }

    // Zmiana aktualnego motywu
    private switchTheme(themeName: string): void {
        if (!(themeName in this.themes)) {
            console.warn(`Theme '${themeName}' is not available.`);
            return;
        }

        const currentLink = document.getElementById('theme-stylesheet') as HTMLLinkElement;
        if (currentLink) {
            currentLink.parentNode?.removeChild(currentLink);
        }

        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = this.themes[themeName];
        linkElement.id = 'theme-stylesheet';
        document.head.appendChild(linkElement);

        this.activeTheme = themeName;
    }

    // Inicjalizacja obsługi kliknięć
    private initClickHandlers(): void {
        const themeLinks = document.querySelectorAll('a[data-theme]');

        themeLinks.forEach(element => {
            element.addEventListener('click', (e: Event) => {
                e.preventDefault();

                const clickedElement = e.target as HTMLElement;
                const selectedTheme = clickedElement.getAttribute('data-theme');

                if (selectedTheme) {
                    this.switchTheme(selectedTheme);
                }
            });
        });
    }
}

const themeFiles: StyleMap = {
    'style1': 'css/style1.css',
    'style2': 'css/style2.css',
};

new ThemeSwitcher('style1', themeFiles);
