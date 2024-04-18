document.addEventListener('DOMContentLoaded', function() {
    // הוספת מאזיני אירועים לכפתור חזרה
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault(); // מניעת התנהגות ברירת המחדל של קישור
            window.history.back(); // חזרה אחורה בהיסטוריה של הדפדפן
        });
    }
});
