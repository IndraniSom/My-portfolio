document.addEventListener('DOMContentLoaded', () => {
    const responsiveToggle = document.getElementById('responsiveToggle');

    responsiveToggle.addEventListener('click', () => {
        fetch('responsive.css')  // Replace with the correct path to your responsive.css file
            .then(response => response.text())
            .then(responsiveCSS => {
                const styleElement = document.createElement('style');
                styleElement.innerHTML = responsiveCSS;

                const head = document.head || document.getElementsByTagName('head')[0];
                head.appendChild(styleElement);
            });
    });
});

