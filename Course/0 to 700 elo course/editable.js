        // Function to save text to local storage
        function saveText() {
            var text = document.getElementById('editable').innerText;
            localStorage.setItem('text', text);
        }

        // Function to load text from local storage
        function loadText() {
            var text = localStorage.getItem('text');
            if (text) {
                document.getElementById('editable').innerText = text;
            }
        }

        // Load text when the page is loaded
        window.onload = loadText;