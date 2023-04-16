var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://getlifted.icey.fr/style/lift.css';

document.head.appendChild(link);

const template = document.createElement('script');
template.src = "https://getlifted.icey.fr/scripts/index.js";
    
document.body.appendChild(template);