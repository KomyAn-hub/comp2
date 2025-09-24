document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            setTimeout(() => {
                const notification = document.getElementById('notification');
                if (notification) {
                    notification.style.display = 'block';
                    
                    setTimeout(() => {
                        notification.style.display = 'none';
                    }, 3000);
                    
                    this.reset();
                } else {
                    alert('Форма надіслана успішно!');
                    this.reset();
                }
            }, 500);
        });
    } else {
        console.error('Форма з id "myForm" не знайдена!');
    }
});