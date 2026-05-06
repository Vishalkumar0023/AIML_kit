CSS = """<style>
body { font-size: 14px; line-height: 1.6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1f2937; margin: 40px; }
h1 { font-size: 26px; color: #1d4ed8; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 16px; }
h2 { font-size: 20px; color: #1e40af; margin-top: 25px; margin-bottom: 12px; }
h3 { font-size: 16px; color: #1e3a8a; margin-top: 20px; margin-bottom: 8px; }
ul, ol { margin-left: 20px; margin-bottom: 16px; }
li { margin-bottom: 8px; }
p { margin-bottom: 14px; }
a { color: #2563eb; text-decoration: none; font-weight: 600; }
hr { border: 0; height: 1px; background: #e5e7eb; margin: 30px 0; }
.footer { font-size: 12px; color: #6b7280; font-style: italic; text-align: center; margin-top: 50px; }
</style>"""

FOOTER = """
---
<div class="footer">
AI Engineer Foundation System — Premium Digital Product<br>
Designed for execution, discipline, and portfolio building.
</div>
"""

def L(url, text):
    return f'<a href="{url}" target="_blank">**{text}**</a>'
