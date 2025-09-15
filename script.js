// Sample news data with 10 Jharkhand-related articles
const newsData = [
    {
        id: 1,
        title: "झारखंड में नई औद्योगिक नीति की घोषणा, निवेशकों को मिलेंगे विशेष प्रोत्साहन",
        excerpt: "मुख्यमंत्री हेमंत सोरेन ने राज्य की नई औद्योगिक नीति का अनावरण किया है। इस नीति के तहत निवेशकों को जमीन, बिजली और अन्य सुविधाओं में विशेष छूट दी जाएगी।",
        content: "झारखंड सरकार ने राज्य के औद्योगिक विकास को बढ़ावा देने के लिए एक नई व्यापक औद्योगिक नीति की घोषणा की है। इस नीति के अंतर्गत निवेशकों को भूमि अधिग्रहण, बिजली कनेक्शन और अन्य बुनियादी सुविधाओं में महत्वपूर्ण छूट प्रदान की जाएगी।",
        category: "व्यापार",
        date: "2024-09-15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYuc8M6BDu68zni361BU9NLX2tlD2mSMn_w&s",
        featured: true
    },
    {
        id: 2,
        title: "रांची में मेट्रो रेल प्रोजेक्ट को मिली केंद्र सरकार की मंजूरी",
        excerpt: "रांची मेट्रो रेल कॉर्पोरेशन लिमिटेड का गठन किया गया है। यह परियोजना रांची शहर की यातायात व्यवस्था में क्रांतिकारी बदलाव लाएगी।",
        content: "झारखंड की राजधानी रांची के लिए लंबे समय से प्रतीक्षित मेट्रो रेल परियोजना को अंततः केंद्र सरकार की मंजूरी मिल गई है। इस परियोजना से शहर की बढ़ती जनसंख्या और यातायात की समस्या का समाधान होगा।",
        category: "राज्य समाचार",
        date: "2024-09-14",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 3,
        title: "झारखंड में बेरोजगारी भत्ते की राशि 5000 रुपए प्रति माह की गई",
        excerpt: "राज्य सरकार ने युवाओं के लिए बेरोजगारी भत्ते में वृद्धि की है। अब पात्र युवाओं को प्रति माह 5000 रुपए का भत्ता मिलेगा।",
        content: "झारखंड सरकार ने राज्य के शिक्षित बेरोजगार युवाओं के लिए एक बड़ा तोहफा देते हुए बेरोजगारी भत्ते की राशि में वृद्धि की है। अब योग्य उम्मीदवारों को प्रति माह 5000 रुपए का भत्ता दिया जाएगा।",
        category: "राजनीति",
        date: "2024-09-13",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 4,
        title: "धोनी के नेतृत्व में रांची में खेल अकादमी का उद्घाटन",
        excerpt: "महेंद्र सिंह धोनी ने अपने गृह राज्य झारखंड में एक नई खेल अकादमी का उद्घाटन किया है। यह अकादमी युवा क्रिकेटरों को विश्वस्तरीय प्रशिक्षण प्रदान करेगी।",
        content: "भारतीय क्रिकेट टीम के पूर्व कप्तान महेंद्र सिंह धोनी ने रांची में एक आधुनिक खेल अकादमी का उद्घाटन किया है। इस अकादमी में अत्याधुनिक सुविधाएं और अनुभवी कोच उपलब्ध होंगे।",
        category: "खेल",
        date: "2024-09-12",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 5,
        title: "झारखंड के आदिवासी कलाकारों को मिला राष्ट्रीय पुरस्कार",
        excerpt: "राज्य के पारंपरिक कलाकारों को उनकी बेहतरीन प्रस्तुति के लिए राष्ट्रीय स्तर पर सम्मानित किया गया है। यह झारखंड की समृद्ध सांस्कृतिक विरासत का प्रमाण है।",
        content: "झारखंड के आदिवासी संस्कृति और परंपरा को जीवंत रखने वाले कलाकारों को राष्ट्रीय पुरस्कार से नवाजा गया है। इन कलाकारों ने अपनी पारंपरिक कला के माध्यम से झारखंड का नाम रोशन किया है।",
        category: "मनोरंजन",
        date: "2024-09-11",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 6,
        title: "झारखंड में स्वास्थ्य सेवाओं का विस्तार, 50 नए प्राथमिक स्वास्थ्य केंद्र",
        excerpt: "राज्य सरकार ने ग्रामीण क्षेत्रों में स्वास्थ्य सेवाओं को बेहतर बनाने के लिए 50 नए प्राथमिक स्वास्थ्य केंद्रों की स्थापना की घोषणा की है।",
        content: "झारखंड सरकार ने राज्य की स्वास्थ्य व्यवस्था को मजबूत बनाने की दिशा में एक महत्वपूर्ण कदम उठाते हुए 50 नए प्राथमिक स्वास्थ्य केंद्र खोलने की घोषणा की है। इससे ग्रामीण आबादी को बेहतर चिकित्सा सुविधा मिलेगी।",
        category: "स्वास्थ्य",
        date: "2024-09-10",
        image: "https://plus.unsplash.com/premium_photo-1723651465341-6f347e27dafa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFMCVBNCU5RCVFMCVBNCVCRSVFMCVBNCVCMCVFMCVBNCU5NiVFMCVBNCU4MiVFMCVBNCVBMSUyMCVFMCVBNCVBRSVFMCVBNSU4NyVFMCVBNCU4MiUyMCVFMCVBNCVCOCVFMCVBNSU4RCVFMCVBNCVCNSVFMCVBNCVCRSVFMCVBNCVCOCVFMCVBNSU4RCVFMCVBNCVBNSVFMCVBNSU4RCVFMCVBNCVBRiUyMCVFMCVBNCVCOCVFMCVBNSU4NyVFMCVBNCVCNSVFMCVBNCVCRSVFMCVBNCU5MyVFMCVBNCU4MiUyMCVFMCVBNCU5NSVFMCVBNCVCRSUyMCVFMCVBNCVCNSVFMCVBNCVCRiVFMCVBNCVCOCVFMCVBNSU4RCVFMCVBNCVBNCVFMCVBNCVCRSVFMCVBNCVCMCUyQyUyMDUwJTIwJUUwJUE0JUE4JUUwJUE0JThGJTIwJUUwJUE0JUFBJUUwJUE1JThEJUUwJUE0JUIwJUUwJUE0JUJFJUUwJUE0JUE1JUUwJUE0JUFFJUUwJUE0JUJGJUUwJUE0JTk1JTIwJUUwJUE0JUI4JUUwJUE1JThEJUUwJUE0JUI1JUUwJUE0JUJFJUUwJUE0JUI4JUUwJUE1JThEJUUwJUE0JUE1JUUwJUE1JThEJUUwJUE0JUFGJTIwJUUwJUE0JTk1JUUwJUE1JTg3JUUwJUE0JTgyJUUwJUE0JUE2JUUwJUE1JThEJUUwJUE0JUIwfGVufDB8fDB8fHww",
        featured: false
    },
    {
        id: 7,
        title: "झारखंड के सरकारी स्कूलों में स्मार्ट क्लासरूम की शुरुआत",
        excerpt: "शिक्षा की गुणवत्ता सुधारने के लिए राज्य भर के सरकारी स्कूलों में स्मार्ट क्लासरूम स्थापित किए जा रहे हैं। यह डिजिटल इंडिया मिशन का हिस्सा है।",
        content: "झारखंड सरकार ने शिक्षा के क्षेत्र में तकनीक का समावेश करते हुए राज्य के सभी सरकारी स्कूलों में स्मार्ट क्लासरूम की व्यवस्था शुरू की है। इससे छात्रों को आधुनिक तरीके से शिक्षा प्राप्त होगी।",
        category: "शिक्षा",
        date: "2024-09-09",
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 8,
        title: "झारखंड में सोलर पार्क परियोजना से मिलेगी 750 MW बिजली",
        excerpt: "राज्य में अक्षय ऊर्जा के क्षेत्र में एक बड़ी उपलब्धि हासिल हुई है। नए सोलर पार्क से 750 मेगावॉट बिजली का उत्पादन होगा।",
        content: "झारखंड में अक्षय ऊर्जा की दिशा में एक महत्वपूर्ण प्रगति हुई है। राज्य के दुमका जिले में स्थापित किए गए सोलर पार्क से 750 मेगावॉट बिजली का उत्पादन शुरू हो गया है।",
        category: "राज्य समाचार",
        date: "2024-09-08",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 9,
        title: "झारखंड की महिला उद्यमियों को मिलेगा विशेष ऋण सहायता",
        excerpt: "राज्य सरकार ने महिला उद्यमिता को बढ़ावा देने के लिए एक नई योजना शुरू की है। इसके तहत महिलाओं को कम ब्याज पर ऋण उपलब्ध कराया जाएगा।",
        content: "झारखंड सरकार ने महिला सशक्तिकरण की दिशा में एक और महत्वपूर्ण कदम उठाते हुए महिला उद्यमियों के लिए विशेष ऋण योजना की शुरुआत की है। इससे राज्य की महिलाएं अपना व्यवसाय शुरू कर सकेंगी।",
        category: "व्यापार",
        date: "2024-09-07",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
        featured: false
    },
    {
        id: 10,
        title: "झारखंड में पारंपरिक त्योहार सरहुल की धूमधाम से मनाई गई",
        excerpt: "आदिवासी समुदाय के सबसे महत्वपूर्ण त्योहार सरहुल को पूरे राज्य में पारंपरिक रीति-रिवाजों के साथ मनाया गया। यह प्रकृति पूजा का पावन पर्व है।",
        content: "झारखंड में आदिवासी समुदाय का सबसे पवित्र त्योहार सरहुल मनाया गया। यह त्योहार प्रकृति और पृथ्वी माता की पूजा का प्रतीक है और राज्य भर में इसे बड़े उत्साह के साथ मनाया गया।",
        category: "धर्म",
        date: "2024-09-06",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop",
        featured: false
    }
];

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('hi-IN', options);
}

function formatDateShort(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'आज';
    if (diffDays === 1) return 'कल';
    if (diffDays < 7) return `${diffDays} दिन पहले`;
    return formatDate(dateString);
}

// DOM manipulation functions
function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="news-image" loading="lazy">
        <div class="news-content">
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="article-meta">
                <span><i class="fas fa-calendar-alt"></i> ${formatDateShort(article.date)}</span>
                <span><i class="fas fa-tag"></i> ${article.category}</span>
            </div>
        </div>
    `;
    return card;
}

function createFeaturedArticle(article) {
    const featuredArticle = document.getElementById('featured-article');
    featuredArticle.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="featured-image" loading="lazy">
        <div class="featured-content">
            <h1 class="featured-title">${article.title}</h1>
            <p class="featured-excerpt">${article.content}</p>
            <div class="article-meta">
                <span><i class="fas fa-calendar-alt"></i> ${formatDate(article.date)}</span>
                <span><i class="fas fa-tag"></i> ${article.category}</span>
                <span><i class="fas fa-user"></i> संवाददाता</span>
            </div>
        </div>
    `;
}

function createTrendingItem(article, index) {
    const item = document.createElement('div');
    item.className = 'trending-item';
    item.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="trending-image" loading="lazy">
        <div class="trending-content">
            <h4 class="trending-title">${article.title}</h4>
            <span class="trending-date">${formatDateShort(article.date)}</span>
        </div>
    `;
    return item;
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when window is resized to larger screen
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Here you would implement actual search functionality
            alert(`खोज रहे हैं: "${searchTerm}"`);
        }
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Image lazy loading for better performance
function initImageLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Load and display news content
function loadNewsContent() {
    // Load featured article
    const featuredArticle = newsData.find(article => article.featured);
    if (featuredArticle) {
        createFeaturedArticle(featuredArticle);
    }
    
    // Load news grid
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        const regularNews = newsData.filter(article => !article.featured);
        regularNews.forEach(article => {
            const newsCard = createNewsCard(article);
            newsGrid.appendChild(newsCard);
        });
    }
    
    // Load trending news (latest 5 articles)
    const trendingContainer = document.getElementById('trending-news');
    if (trendingContainer) {
        const latestNews = [...newsData]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
            
        latestNews.forEach((article, index) => {
            const trendingItem = createTrendingItem(article, index);
            trendingContainer.appendChild(trendingItem);
        });
    }
}

// Add interactive hover effects
function addHoverEffects() {
    // Add subtle animations to cards
    const cards = document.querySelectorAll('.news-card, .trending-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize dark mode toggle (if needed in future)
function initThemeToggle() {
    // This can be implemented later for dark/light theme switching
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Implementation would go here
}

// Handle window scroll events
function initScrollEffects() {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow to header on scroll
        if (currentScroll > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }
    });
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
        // You could send this to an analytics service
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Jharkhand News Portal loading...');
    
    // Initialize all functionality
    loadNewsContent();
    initMobileMenu();
    initSearch();
    initSmoothScrolling();
    initImageLazyLoading();
    addHoverEffects();
    initScrollEffects();
    initPerformanceMonitoring();
    initErrorHandling();
    
    console.log('Jharkhand News Portal loaded successfully!');
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        newsData,
        formatDate,
        formatDateShort,
        createNewsCard,
        createFeaturedArticle,
        createTrendingItem
    };
}