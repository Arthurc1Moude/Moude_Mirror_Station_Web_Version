// Server Configuration
const SERVER_IP = 'http://192.168.40.136/files';
const fileList = document.getElementById('file-list');
const loader = document.getElementById('loader');

// Fetch Files from Repository
async function fetchFileList() {
    try {
        loader.style.display = 'block';
        const response = await fetch(`${SERVER_IP}/files`);
        if (!response.ok) throw new Error('Failed to retrieve file list');
        const files = await response.json();

        loader.style.display = 'none';
        fileList.innerHTML = '';
        files.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file;
            fileList.appendChild(li);
        });
    } catch (error) {
        loader.style.display = 'none';
        fileList.innerHTML = `<li>❌ Error: ${error.message}</li>`;
    }
}

// On Page Load
document.addEventListener('DOMContentLoaded', fetchFileList);
