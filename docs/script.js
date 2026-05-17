// Navigation and PDF viewing functionality

// Show specific content section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Load PDF in viewer
function loadPDF(pdfPath, title) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show PDF section
    const pdfSection = document.getElementById('pdf-section');
    pdfSection.style.display = 'block';

    // Update title
    document.getElementById('pdf-title').textContent = title;

    // Load PDF in object and embed tags
    const pdfObject = document.getElementById('pdf-object');
    const pdfEmbed = document.getElementById('pdf-embed');

    // Add timestamp to prevent caching issues
    const pdfUrl = pdfPath + '#toolbar=1&navpanes=1&scrollbar=1';

    pdfObject.data = pdfUrl;
    pdfEmbed.src = pdfUrl;

    // Update all links
    const downloadLink = document.getElementById('download-link');
    const openNewTab = document.getElementById('open-new-tab');
    const fallbackDownload = document.getElementById('fallback-download');
    const fallbackOpen = document.getElementById('fallback-open');

    downloadLink.href = pdfPath;
    downloadLink.download = title.replace(/\s+/g, '-') + '.pdf';

    openNewTab.href = pdfPath;
    fallbackDownload.href = pdfPath;
    fallbackDownload.download = title.replace(/\s+/g, '-') + '.pdf';
    fallbackOpen.href = pdfPath;

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Find and activate the clicked nav link
    if (typeof event !== 'undefined') {
        const clickedLink = event.target.closest('.nav-link');
        if (clickedLink) {
            clickedLink.classList.add('active');
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    showSection('home');

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !href.includes('onclick')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle browser back button
    window.addEventListener('popstate', function(e) {
        const hash = window.location.hash.slice(1);
        if (hash) {
            showSection(hash);
        } else {
            showSection('home');
        }
    });

    // Mobile menu toggle (if needed in future)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'h' to go home
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            showSection('home');
        }
    }

    // Press 'Escape' to go back to home from PDF viewer
    if (e.key === 'Escape') {
        const pdfSection = document.getElementById('pdf-section');
        if (pdfSection.style.display === 'block') {
            showSection('home');
        }
    }
});

// Analytics (optional - uncomment if you want to track page views)
/*
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
}
*/

// PDF loading handlers
document.addEventListener('DOMContentLoaded', function() {
    const pdfObject = document.getElementById('pdf-object');
    const pdfEmbed = document.getElementById('pdf-embed');

    if (pdfObject) {
        pdfObject.addEventListener('load', function() {
            console.log('PDF loaded successfully in object tag');
        });
    }

    if (pdfEmbed) {
        pdfEmbed.addEventListener('load', function() {
            console.log('PDF loaded successfully in embed tag');
        });
    }
});
