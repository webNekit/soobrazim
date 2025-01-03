class Header {
    selectors = {
        root: '[data-header]',
        overlay: '[data-header-overlay]',
        toglerButton: '[data-togler-menu]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    bindEvents() {
        this.toglerButtonElement.addEventListener("click", this.onToglerButtonClick)
    }

    onToglerButtonClick = () => {
        this.toglerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = document.querySelector(this.selectors.overlay);
        this.toglerButtonElement = document.querySelector(this.selectors.toglerButton);
        this.bindEvents();
    }
}

export default Header;