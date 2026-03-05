import os
import re

logs_dir = r"C:\Users\LapOne MX\.gemini\antigravity\brain\80c96076-cb55-4913-b51e-dec63c602221\.system_generated\logs"
target_file = r"C:\Users\LapOne MX\control-plagas\src\app\components\error404\error404.html"

svg_match = None
pattern = re.compile(r'<a target="_blank" href="https://www\.youtube\.com/shorts/V5eSXcn9YRc">.*?</a>', re.DOTALL)

for filename in os.listdir(logs_dir):
    if filename.endswith(".txt"):
        filepath = os.path.join(logs_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            match = pattern.search(content)
            if match:
                svg_match = match.group(0)
                break

if svg_match:
    with open(target_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = re.sub(r'<a href="/" class="error-animation">.*?</a>', svg_match, html, flags=re.DOTALL)
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully injected SVG!")
else:
    print("SVG not found in logs")
