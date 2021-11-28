import socketserver
from http.server import BaseHTTPRequestHandler
import metadata
import sys

REPORTS_DIRECTORY=sys.argv[1]

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/metadata/':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            reportJson = metadata.reportConstructor(REPORTS_DIRECTORY).encode(encoding='utf_8')
            self.wfile.write(reportJson)

port = 8085
server = socketserver.TCPServer(('localhost', port), MyHandler)

print ("*** Web Server running on port %s ***" % port)
server.serve_forever()
