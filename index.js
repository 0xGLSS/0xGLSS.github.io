<!DOCTYPE html>
<html>
<head>
    <title>Check Server Status</title>
</head>
<body>
    <h2>Check if server is up</h2>
    <form>
        <input type="text" id="ipInput" placeholder="Enter server IP"/>
        <input type="button" value="Check status" onclick="checkStatus()"/>
    </form>

    <div id="result"></div>

    <script>
        function checkStatus() {
            var ip = document.getElementById('ipInput').value;
            var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 0) {
                        document.getElementById('result').innerHTML = 'Error: Failed to send the request.';
                    } else {
                        document.getElementById('result').innerHTML = xhr.responseText;
                    }
                }
            };
            
            xhr.open('POST', 'https://api.example.com/check-status', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('ip=' + encodeURIComponent(ip));
        }
    </script>
</body>
</html>
