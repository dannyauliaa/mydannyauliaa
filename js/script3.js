// ==================== GLOBAL VARIABLES ====================
let currentSeason = 'spring';
let particleAnimation;
let particles = [];
const maxParticles = 50;

// Profile data for popup
const profileData = {
    mio: {
        name: '四季 美桜',
        role: 'メインデザイナー',
        username: '@shiki_mio',
        image: 'https://via.placeholder.com/100x100/FF69B4/FFFFFF?text=美桜',
        skills: ['UI/UX Design', 'Web Design', 'Branding'],
        message: '四季の美しさからインスピレーションを得て、心に響くデザインを創造します。'
    },
    hana: {
        name: '桜庭 花音',
        role: 'UIデザイナー',
        username: '@sakuraba_hanon',
        image: 'https://via.placeholder.com/100x100/98FB98/FFFFFF?text=花音',
        skills: ['UI Design', 'Prototyping', 'Illustration'],
        message: '春の花々のように、美しく使いやすいインターフェースを設計します。'
    },
    aki: {
        name: '紅葉 秋人',
        role: 'UXデザイナー',
        username: '@momiji_akito',
        image: 'https://via.placeholder.com/100x100/DEB887/FFFFFF?text=秋人',
        skills: ['UX Research', 'User Testing', 'Information Architecture'],
        message: '秋の深みのように、ユーザーの心に寄り添う体験を設計します。'
    },
    yuki: {
        name: '白雪 雪花',
        role: 'グラフィックデザイナー',
        username: '@shirayuki_yukika',
        image: 'https://via.placeholder.com/100x100/E0E6FF/FFFFFF?text=雪花',
        skills: ['Graphic Design', 'Typography', '
