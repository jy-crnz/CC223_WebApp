function showMessage() {
    document.getElementById("message").innerText = "Hello, World!";
}

if (typeof window !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("fetchMessage").addEventListener("click", () => {
            fetch('/api/message')
                .then(response => response.json())
                .then(data => {
                    document.getElementById("message").innerText = data.message;
                })
                .catch(error => console.error('Error fetching message:', error));
        });
    });
}
