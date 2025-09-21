// DOM Elements
const floatingMenuBtn = document.getElementById('floatingMenuBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const menuItems = document.querySelectorAll('.menu-item');
const previewContent = document.getElementById('previewContent');
const portfolioCards = document.querySelectorAll('.portfolio-card');

// Preview Content Data
const previewData = {
    home: {
        title: 'ホーム - Home',
        content: `
            <div style="text-align: center;">
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">ようこそ</h3>
                <p style="line-height: 1.6;">メインページへようこそ。ここでは最新の作品や情報をご覧いただけます。</p>
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    <span style="font-size: 2rem;">🏮</span>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.8;">日本の美しさを現代に</p>
                </div>
            </div>
        `
    },
    about: {
        title: 'プロフィール - About',
        content: `
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">自己紹介</h3>
                <p style="line-height: 1.6; margin-bottom: 1rem;">クリエイティブデザイナーとして、日本の伝統美と現代のデザインを融合させています。</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <div style="padding: 0.8rem; background: rgba(255,255,255,0.1); border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem;">🎨</div>
                        <p style="font-size: 0.8rem; margin-top: 0.3rem;">デザイン</p>
                    </div>
                    <div style="padding: 0.8rem; background: rgba(255,255,255,0.1); border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.5rem;">📸</div>
                        <p style="font-size: 0.8rem; margin-top: 0.3rem;">写真</p>
                    </div>
                </div>
            </div>
        `
    },
    portfolio: {
        title: '作品集 - Portfolio',
        content: `
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">作品一覧</h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <span style="font-size: 1.5rem;">🌐</span>
                        <div>
                            <h4 style="margin-bottom: 0.3rem;">ウェブデザイン</h4>
                            <p style="font-size: 0.8rem; opacity: 0.8;">レスポンシブなウェブサイト制作</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <span style="font-size: 1.5rem;">🏷️</span>
                        <div>
                            <h4 style="margin-bottom: 0.3rem;">ブランディング</h4>
                            <p style="font-size: 0.8rem; opacity: 0.8;">企業アイデンティティデザイン</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    services: {
        title: 'サービス - Services',
        content: `
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">提供サービス</h3>
                <div style="display: grid; gap: 0.8rem;">
                    <div style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span>⚙️</span>
                            <strong>ウェブ開発</strong>
                        </div>
                        <p style="font-size: 0.8rem; opacity: 0.8;">モダンで高性能なウェブサイト制作</p>
                    </div>
                    <div style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span>🎨</span>
                            <strong>UI/UXデザイン</strong>
                        </div>
                        <p style="font-size: 0.8rem; opacity: 0.8;">ユーザー中心のインターフェースデザイン</p>
                    </div>
                    <div style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span>📱</span>
                            <strong>モバイルアプリ</strong>
                        </div>
                        <p style="font-size: 0.8rem; opacity: 0.8;">iOS/Android対応アプリケーション開発</p>
                    </div>
                </div>
            </div>
        `
    },
    blog: {
        title: 'ブログ - Blog',
        content: `
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">最新記事</h3>
                <div style="display: grid; gap: 1rem;">
                    <article style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span>📝</span>
                            <small style="opacity: 0.7;">2024.03.15</small>
                        </div>
                        <h4 style="margin-bottom: 0.5rem;">日本のデザインアプローチ</h4>
                        <p style="font-size: 0.8rem; opacity: 0.8;">伝統的な日本の美意識をモダンデザインに活かす方法について...</p>
                    </article>
                    <article style="padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span>🍂</span>
                            <small style="opacity: 0.7;">2024.03.10</small>
                        </div>
                        <h4 style="margin-bottom: 0.5rem;">秋のカラーパレット</h4>
                        <p style="font-size: 0.8rem; opacity: 0.8;">季節の変化をデザインに取り入れるテクニック...</p>
                    </article>
                </div>
            </div>
        `
    },
    contact: {
        title: 'お問い合わせ - Contact',
        content: `
            <div>
                <h3 style="color: #ff6b35; margin-bottom: 1rem;">連絡先</h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <span style="font-size: 1.5rem;">📧</span>
                        <div>
                            <strong>Email</strong>
                            <p style="font-size: 0.8rem; opacity: 0.8;">hello@example.com</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <span style="font-size: 1.5rem;">📞</span>
                        <div>
                            <strong>Phone</strong>
                            <p style="font-size: 0.8rem; opacity: 0.8;">+81 90-1234-5678</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 10px;">
                        <span style="font-size: 1.5rem;">📍</span>
                        <div>
                            <strong>Location</strong>
                            <p style="font-size: 0.8rem; opacity: 0.8;">Tokyo, Japan</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
});

// Event Listeners
function initializeEventListeners() {
    // Floating menu button
    floatingMenuBtn.addEventListener('click', openPopup);
    
    // Close popup
    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
    
    // Menu items hover and click
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const previewType = this.getAttribute('data-preview');
            showPreview(previewType);
        });
        
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            // Add active class to clicked item
            this.classList.add('active');
            
            const previewType = this.getAttribute('data-preview');
            showPreview(previewType);
        });
    });
    
    // Portfolio cards click
    portfolioCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    // You can redirect to the link or show more details
                    console.log('Redirecting to:', link);
                    // window.open(link, '_blank');
                }, 150);
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.2)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });
}

// Popup Functions
function openPopup() {
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation to floating button
    floatingMenuBtn.style.transform = 'scale(0.8) rotate(180deg)';
    setTimeout(() => {
        floatingMenuBtn.style.transform = 'scale(1) rotate(180deg)';
    }, 200);
}

function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset floating button
    floatingMenuBtn.style.transform = 'scale(1) rotate(0deg)';
    
    // Clear active states
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Reset preview
    previewContent.innerHTML = '<div class="preview-placeholder">メニューを選択してプレビューを表示</div>';
}

// Preview Function
function showPreview(type) {
    if (previewData[type]) {
        const data = previewData[type];
        previewContent.innerHTML = `
            <div class="preview-header" style="margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.2);">
                <h4 style="color: #ff6b35; margin: 0;">${data.title}</h4>
            </div>
            <div class="preview-body">
                ${data.content}
            </div>
        `;
        
        // Add fade-in animation
        previewContent.style.opacity = '0';
        previewContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            previewContent.style.transition = 'all 0.3s ease';
            previewContent.style.opacity = '1';
            previewContent.style.transform = 'translateY(0)';
        }, 50);
    }
}

// Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.portfolio-card, .stat-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for floating leaves
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.leaf');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.japanese-main');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Utility Functions
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.classList.contains('menu-item')) {
        createRippleEffect(e, e.target);
    }
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        
        // Show message
        const message = document.createElement('div');
        message.textContent = '🌸 秘密のコードが発動しました！ 🌸';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b35, #d47341);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-weight: bold;
            z-index: 9999;
            animation: fadeInOut 3s ease-in-out;
        `;
        
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
        
        konamiCode = [];
    }
});

// Add fadeInOut animation
const easterEggStyle = document.createElement('style');
easterEggStyle.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(easterEggStyle);
