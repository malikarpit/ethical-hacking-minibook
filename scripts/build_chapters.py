import re
import html

with open('/Users/arpit/minibook/ethical_hacking/ethical_hacking_minibook.md', 'r', encoding='utf-8') as f:
    text = f.read()

def md_to_html(md_chunk):
    lines = md_chunk.split('\n')
    out = []
    in_code = False
    code_lang = ''
    code_lines = []
    in_table = False
    table_lines = []
    
    for line in lines:
        if line.startswith('```'):
            if in_code:
                in_code = False
                code_content = html.escape('\n'.join(code_lines))
                out.append(f'<div class="code-block-container"><pre class="code-block"><code class="language-{code_lang}">{code_content}</code></pre></div>')
                code_lines = []
            else:
                in_code = True
                code_lang = line[3:].strip() or 'text'
            continue
            
        if in_code:
            code_lines.append(line)
            continue
            
        # Table handling
        if '|' in line and not in_table and ('|---|' in line or line.strip().startswith('|')):
            in_table = True
            table_lines = [line]
            continue
        elif in_table:
            if '|' in line:
                table_lines.append(line)
                continue
            else:
                in_table = False
                # render table
                if len(table_lines) >= 2:
                    t_html = ['<div class="table-responsive"><table class="data-table">']
                    # Header
                    headers = [c.strip() for c in table_lines[0].split('|')[1:-1]]
                    t_html.append('<thead><tr>' + ''.join([f'<th>{h}</th>' for h in headers]) + '</tr></thead><tbody>')
                    # Data rows
                    for r in table_lines[2:]:
                        cols = [c.strip() for c in r.split('|')[1:-1]]
                        t_html.append('<tr>' + ''.join([f'<td>{c}</td>' for c in cols]) + '</tr>')
                    t_html.append('</tbody></table></div>')
                    out.append(''.join(t_html))
                table_lines = []
        
        # Headers
        if line.startswith('### '):
            h_text = line[4:].strip()
            slug = re.sub(r'[^a-z0-9]+', '-', h_text.lower()).strip('-')
            out.append(f'<h3 id="s-{slug}" class="section-h3"><span class="h-anchor">#</span> {h_text}</h3>')
        elif line.startswith('## '):
            h_text = line[3:].strip()
            slug = re.sub(r'[^a-z0-9]+', '-', h_text.lower()).strip('-')
            out.append(f'<h2 id="s-{slug}" class="section-h2"><span class="h-anchor">§</span> {h_text}</h2>')
        elif line.startswith('> '):
            quote_text = line[2:].strip()
            out.append(f'<div class="callout callout-info"><div class="callout-content">{quote_text}</div></div>')
        elif line.startswith('- '):
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line[2:].strip())
            p_text = re.sub(r'`(.*?)`', r'<code>\1</code>', p_text)
            out.append(f'<li>{p_text}</li>')
        elif re.match(r'^[0-9]+\.\s+', line):
            num_match = re.match(r'^([0-9]+\.)\s+(.*)', line)
            num_prefix = num_match.group(1)
            p_text = num_match.group(2)
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', p_text)
            p_text = re.sub(r'`(.*?)`', r'<code>\1</code>', p_text)
            out.append(f'<li><strong>{num_prefix}</strong> {p_text}</li>')
        elif line.strip() == '---':
            out.append('<hr class="chapter-divider">')
        elif line.strip() != '':
            # check bold
            p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)
            p_text = re.sub(r'`(.*?)`', r'<code>\1</code>', p_text)
            out.append(f'<p class="body-p">{p_text}</p>')
            
    # Wrap loose <li> tags in <ul>
    final_out = []
    in_ul = False
    for item in out:
        if item.startswith('<li>'):
            if not in_ul:
                final_out.append('<ul class="styled-list">')
                in_ul = True
            final_out.append(item)
        else:
            if in_ul:
                final_out.append('</ul>')
                in_ul = False
            final_out.append(item)
    if in_ul:
        final_out.append('</ul>')
        
    return '\n'.join(final_out)

# Define chapter split ranges in master markdown
# Ch 1: From "## 1. Syllabus Map" up to "## 4. Unit 2"
# Ch 2: From "## 4. Unit 2" up to "## 5. Unit 3"
# Ch 3: From "## 5. Unit 3" up to "## 6. Unit 4"
# Ch 4: From "## 6. Unit 4" up to "## 7. Practical Workbook"
# Ch 5: From "## 7. Practical Workbook" up to "## 8. Quick Learn"

splits = [
    ("ch01-fundamentals-ethics.html", "Ch 1: Fundamentals of Ethical Hacking & Cyber Laws", "Unit 1", "## 1. Syllabus Map and Study Strategy", "## 4. Unit 2 - Network and System Security", "ch02-network-system-security.html", None),
    ("ch02-network-system-security.html", "Ch 2: Network & System Security, VAPT & Wireless", "Unit 2", "## 4. Unit 2 - Network and System Security", "## 5. Unit 3 - Application and Web Security", "ch03-web-application-security.html", "ch01-fundamentals-ethics.html"),
    ("ch03-web-application-security.html", "Ch 3: Web Security, OWASP Top 10 & Secure Coding", "Unit 3", "## 5. Unit 3 - Application and Web Security", "## 6. Unit 4 - Advanced Cybersecurity Concepts", "ch04-advanced-cybersecurity.html", "ch02-network-system-security.html"),
    ("ch04-advanced-cybersecurity.html", "Ch 4: Incident Response, Cryptography & Zero Trust", "Unit 4", "## 6. Unit 4 - Advanced Cybersecurity Concepts", "## 7. Practical Workbook: Seven Syllabus Experiments", "ch05-practical-lab-workbook.html", "ch03-web-application-security.html"),
    ("ch05-practical-lab-workbook.html", "Ch 5: Practical Lab Workbook (All 7 Experiments)", "Practical Component", "## 7. Practical Workbook: Seven Syllabus Experiments", "## 8. Quick Learn Filter", None, "ch04-advanced-cybersecurity.html")
]

for filename, title, unit_badge, start_marker, end_marker, next_ch, prev_ch in splits:
    start_pos = text.find(start_marker)
    end_pos = text.find(end_marker) if end_marker else len(text)
    chunk = text[start_pos:end_pos].strip()
    html_body = md_to_html(chunk)
    
    # Extract TOC from headers
    headers = re.findall(r'(?:^|\n)(##|###)\s+([^\n]+)', chunk)
    toc_items = []
    for level, h in headers:
        slug = re.sub(r'[^a-z0-9]+', '-', h.lower()).strip('-')
        is_sub = level == '###'
        toc_items.append(f'<li class="{"toc-subitem" if is_sub else "toc-item"}"><a href="#s-{slug}">{h}</a></li>')
    toc_html = '<nav class="toc-box"><div class="toc-title">📑 Table of Contents</div><ul class="toc-list">' + ''.join(toc_items) + '</ul></nav>'
    
    prev_link = f'<a href="{prev_ch}" class="chapter-nav-btn prev-btn">&larr; Previous Chapter</a>' if prev_ch else '<span class="chapter-nav-btn disabled">&larr; Start of Book</span>'
    next_link = f'<a href="{next_ch}" class="chapter-nav-btn next-btn">Next Chapter &rarr;</a>' if next_ch else '<a href="../activities.html" class="chapter-nav-btn next-btn">Classroom Activities &rarr;</a>'
    
    page_html = f"""<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<!-- ⚡ Arpit | Ethical Hacking MiniBook 2026 | University of Delhi -->
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="author" content="Arpit"><meta name="description" content="{title} — Ethical Hacking and Advanced Cybersecurity MiniBook, University of Delhi B.Tech CSE.">
<title>{title} | Ethical Hacking MiniBook 🛡️</title>
<link rel="manifest" href="../manifest.json">
<link rel="stylesheet" href="../assets/css/main.css">
<link rel="stylesheet" href="../assets/css/components.css">
<link rel="stylesheet" href="../assets/css/animations.css">
<link rel="stylesheet" href="../assets/css/chapters.css">
<link rel="stylesheet" href="../assets/css/timer.css">
</head>
<body>
<div id="progress-bar"></div>

<!-- HEADER -->
<header id="main-header">
  <div class="header-left">
    <button id="sidebar-toggle" class="icon-btn" title="Toggle Sidebar (S)" aria-label="Toggle Navigation">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <div class="brand-logo">
      <div class="brand-icon">🛡️</div>
      <div class="brand-text">
        <span class="main">Ethical Hacking</span>
        <span class="sub">University of Delhi · B.Tech CSE</span>
      </div>
    </div>
  </div>

  <span class="header-chapter-title">{title}</span>

  <div class="header-right">
    <button id="search-btn" class="icon-btn" title="Search (Ctrl+K)" aria-label="Search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </button>
    <button id="print-btn" title="Print to Clean PDF (Ctrl+P)" aria-label="Print">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
      <span class="print-label">PDF</span>
    </button>
    <button id="reading-mode-btn" class="icon-btn" title="Reading Focus Mode (F)" aria-label="Reading Mode">📖</button>
    <button id="theme-toggle" class="icon-btn" title="Toggle Theme (T)" aria-label="Theme"></button>
  </div>
</header>

<!-- SIDEBAR -->
<div id="sidebar-overlay"></div>
<aside id="sidebar">
  <nav class="sidebar-nav">
    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      <a href="../index.html" class="sidebar-link"><span class="link-icon">🏠</span>Home Portal</a>
      <a href="../quick-learn.html" class="sidebar-link"><span class="link-icon">⚡</span>Quick Learn</a>
      <a href="../last-minute.html" class="sidebar-link"><span class="link-icon">⏱️</span>Last-Minute Cram</a>
      <a href="../activities.html" class="sidebar-link"><span class="link-icon">📁</span>Activities &amp; Solutions</a>
      <a href="../exams/mcq-test.html" class="sidebar-link"><span class="link-icon">📝</span>MCQ Test Simulator</a>
      <a href="../progress.html" class="sidebar-link"><span class="link-icon">📊</span>Study Dashboard</a>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Chapters</div>
      <a href="ch01-fundamentals-ethics.html" class="sidebar-link {'active' if filename == 'ch01-fundamentals-ethics.html' else ''}"><span class="link-icon">🛡️</span>Ch 1 — Fundamentals &amp; Ethics</a>
      <a href="ch02-network-system-security.html" class="sidebar-link {'active' if filename == 'ch02-network-system-security.html' else ''}"><span class="link-icon">🌐</span>Ch 2 — Network &amp; Systems</a>
      <a href="ch03-web-application-security.html" class="sidebar-link {'active' if filename == 'ch03-web-application-security.html' else ''}"><span class="link-icon">💻</span>Ch 3 — Web Security &amp; OWASP</a>
      <a href="ch04-advanced-cybersecurity.html" class="sidebar-link {'active' if filename == 'ch04-advanced-cybersecurity.html' else ''}"><span class="link-icon">🔒</span>Ch 4 — Advanced Cyber &amp; Crypto</a>
      <a href="ch05-practical-lab-workbook.html" class="sidebar-link {'active' if filename == 'ch05-practical-lab-workbook.html' else ''}"><span class="link-icon">🔬</span>Ch 5 — Practical Labs (1 to 7)</a>
    </div>
  </nav>
  <div class="sidebar-footer">
    <div class="sidebar-brand-mark"><div class="mark">🛡️</div><span>Arpit · DU B.Tech CSE</span></div>
  </div>
</aside>

<!-- MAIN CONTENT -->
<main id="main-content">
  <div class="chapter-content-container">
    
    <div class="chapter-hero">
      <span class="chapter-badge">{unit_badge}</span>
      <h1 class="chapter-headline">{title}</h1>
      <p class="chapter-sub">Curriculum-aligned textbook study module for University of Delhi (DSE-3/GE-5).</p>
    </div>

    {toc_html}

    <div class="chapter-body-text">
      {html_body}
    </div>

    <div class="chapter-nav-bottom">
      {prev_link}
      {next_link}
    </div>

  </div>
</main>

<footer>
  <div class="chapter-content-container" style="padding-top:1.5rem; padding-bottom:1.5rem; text-align:center; color:var(--tx-muted); font-size:0.85rem; border-top:1px solid var(--bd-subtle);">
    <span style="color:var(--em-accent-text); font-weight:700;">Ethical Hacking MiniBook</span> · University of Delhi B.Tech CSE · Pitch Black &amp; Archival Paper Themes.
  </div>
</footer>

<script src="../assets/js/state.js"></script>
<script src="../assets/js/core.js"></script>
<script>
document.addEventListener('DOMContentLoaded', () => {{
  ThemeManager.init();
  SidebarManager.init();
}});
</script>
</body>
</html>
"""
    out_path = f"/Users/arpit/minibook/ethical_hacking/chapters/{filename}"
    with open(out_path, 'w', encoding='utf-8') as f_out:
        f_out.write(page_html)
    print(f"Generated {filename} successfully ({len(page_html)} bytes).")

print("All 5 chapters built successfully!")
