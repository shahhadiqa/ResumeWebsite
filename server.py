import http.server
import socketserver
import cgi
import os
import subprocess
import time

PORT = 8000
UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

class UploadHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/upload':
            form = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={
                    'REQUEST_METHOD': 'POST',
                    'CONTENT_TYPE': self.headers['Content-Type'],
                }
            )
            
            if 'image' in form:
                fileitem = form['image']
                if fileitem.filename:
                    ts = int(time.time() * 1000)
                    ext = os.path.splitext(fileitem.filename)[1].lower()
                    if ext == '':
                        ext = '.heic' # Fallback for iOS
                        
                    save_path = os.path.join(UPLOAD_DIR, f"img_{ts}{ext}")
                    
                    with open(save_path, 'wb') as f:
                        f.write(fileitem.file.read())
                    
                    if ext in ['.heic', '.heif']:
                        out_path = os.path.join(UPLOAD_DIR, f"img_{ts}.jpg")
                        # Use macOS native CLI to convert HEIC to JPG
                        subprocess.call(['sips', '-s', 'format', 'jpeg', save_path, '--out', out_path])
                        if os.path.exists(out_path):
                            os.remove(save_path)
                            save_path = out_path
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(f'{{"url": "/{save_path}"}}'.encode())
                    return
            
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'{"error": "No image uploaded"}')
        else:
            self.send_response(404)
            self.end_headers()

with socketserver.TCPServer(("", PORT), UploadHandler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
