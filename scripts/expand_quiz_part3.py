import json

with open('/Users/arpit/minibook/ethical_hacking/assets/js/quiz-data.js', 'r') as f:
    text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    current = json.loads(text[start:end])

more_qb = [
    {
        "q": "What is the primary role of Metasploit payload stagers (such as windows/meterpreter/reverse_tcp)?",
        "options": [
            "A small, compact initial payload that connects back to the attacker and downloads the larger stage payload",
            "A compiler that generates custom Linux kernels",
            "An antivirus evasion script that permanently deletes target logs",
            "A hardware keylogger driver"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Moderate",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Metasploit Payloads (Stagers vs Stages)",
        "source": "Minibook Question Bank",
        "exp": "Stagers are tiny assembly stubs that establish network connections and fetch the full reflective DLL injection or stage payload (such as Meterpreter) into memory."
    },
    {
        "q": "Which Wireshark filter syntax matches TCP packets that have only the SYN flag set (initial connection requests)?",
        "options": [
            "tcp.flags.syn == 1 && tcp.flags.ack == 0",
            "tcp.port == 80 || tcp.port == 443",
            "tcp.syn == true",
            "ip.flags.df == 1"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Moderate",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Wireshark TCP Flag Filtering",
        "source": "Minibook Question Bank",
        "exp": "An initial connection SYN packet has SYN=1 and ACK=0. A SYN-ACK response has both SYN=1 and ACK=1."
    },
    {
        "q": "What is the key difference between Vulnerability Scanning and Penetration Testing in terms of automation and validation?",
        "options": [
            "Vulnerability scanning is largely automated and generates potential findings, whereas penetration testing involves manual verification of exploitability and impact",
            "Vulnerability scanning is illegal, while penetration testing is legal",
            "Vulnerability scanning always exploits systems to gain root shells",
            "Penetration testing never uses any automated scanners"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "VA vs PT Validation Differences",
        "source": "Minibook Question Bank",
        "exp": "VA uses automated scanners (Nessus, OpenVAS) to identify potential weaknesses across a broad footprint. PT manually validates selected weaknesses and attack paths to demonstrate true risk."
    },
    {
        "q": "Which parameter in Python DB-API prevents SQL injection when executing database queries?",
        "options": [
            "Passing user inputs as separate tuple parameters in cursor.execute(query, (param,)) rather than string concatenation",
            "Using eval() on user input before passing it to SQL",
            "Base64 encoding user input and concatenating it directly into the query string",
            "Increasing the database connection timeout limit"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "Parameterized Queries in Python",
        "source": "Minibook Code Examples",
        "exp": "Parameterized queries (`cursor.execute('SELECT * FROM users WHERE id = %s', (uid,))`) ensure the database driver binds the value strictly as a literal datum, preventing query structure alteration."
    },
    {
        "q": "Which header informs browsers to only load HTTPS resources and refuse unencrypted HTTP connections for a specified duration?",
        "options": [
            "Strict-Transport-Security (HSTS)",
            "Content-Security-Policy (CSP)",
            "X-Frame-Options",
            "X-Content-Type-Options"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "HTTP Security Headers (HSTS)",
        "source": "Lab 3 Security Headers",
        "exp": "HTTP Strict Transport Security (HSTS) enforces HTTPS and protects against SSL-stripping MITM attacks by instructing browsers never to load the site via plain HTTP."
    },
    {
        "q": "Which cryptographic property is provided by a Digital Signature that is NOT provided by symmetric Message Authentication Codes (MAC)?",
        "options": [
            "Non-repudiation (proof of origin verifiable by third parties)",
            "Confidentiality of the message body",
            "Data integrity",
            "Faster computation speed"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Moderate",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 4,
        "topic": "Digital Signatures vs MACs",
        "source": "Unit 4 Cryptography",
        "exp": "Because MACs use a shared symmetric key, either party could have created the MAC, precluding non-repudiation. Digital signatures use a private key known only to the signer, providing third-party verifiable non-repudiation."
    },
    {
        "q": "In Zero-Trust Architecture (NIST SP 800-207), which component evaluates access requests and makes the grant/deny decision?",
        "options": [
            "Policy Decision Point (PDP) / Policy Engine",
            "Policy Enforcement Point (PEP)",
            "Border Gateway Router",
            "DHCP Server"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Moderate",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 4,
        "topic": "Zero-Trust Architecture (PDP vs PEP)",
        "source": "Unit 4 Zero Trust",
        "exp": "The Policy Decision Point (PDP) evaluates trust signals (identity, device health, context) and makes the access decision. The Policy Enforcement Point (PEP) intercepts traffic and executes the PDP's decision."
    },
    {
        "q": "Why is an Elliptic Curve Cryptography (ECC) key of 256 bits considered as strong as an RSA key of 3072 bits?",
        "options": [
            "ECC solves the discrete logarithm problem over elliptic curve groups, which has no known sub-exponential solving algorithm",
            "ECC keys encrypt 1000 times more characters per packet",
            "ECC is a symmetric cipher while RSA is asymmetric",
            "ECC does not require any mathematics or modular arithmetic"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Hard",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 4,
        "topic": "ECC vs RSA Key Strengths",
        "source": "Unit 4 Cryptography",
        "exp": "ECC offers equivalent cryptographic security with much smaller key sizes (256-bit ECC ≈ 3072-bit RSA) because the Elliptic Curve Discrete Logarithm Problem (ECDLP) resists sub-exponential index-calculus attacks."
    },
    {
        "q": "What is Prompt Injection in generative AI and LLM security?",
        "options": [
            "Crafted adversarial user input that manipulates the LLM into ignoring system instructions or executing unauthorized tool actions",
            "Injecting SQL queries into the GPU CUDA memory",
            "Overwriting the hard drive firmware with random tokens",
            "A denial of service attack against power supply units"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 4,
        "topic": "Prompt Injection in AI Systems",
        "source": "Unit 4 Emerging AI Threats",
        "exp": "Prompt injection tricks the LLM into discarding previous instructions (system prompts) and executing attacker commands, posing severe risks when models have autonomous tool execution capabilities."
    },
    {
        "q": "In Syllabus Lab 5, what distinguishes a Low-Interaction Honeypot from a High-Interaction Honeypot?",
        "options": [
            "A low-interaction honeypot simulates specific services (e.g. emulated SSH banners) without providing a real operating system shell",
            "A low-interaction honeypot gives the attacker full unrestricted root access to production servers",
            "A high-interaction honeypot uses fake static HTML pages only",
            "A low-interaction honeypot cannot log IP addresses"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Moderate",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 5,
        "topic": "Low vs High Interaction Honeypots",
        "source": "Lab 5 Honeypots",
        "exp": "Low-interaction honeypots (e.g. Cowrie basic mode) simulate service responses and banners to capture probes safely without risking true underlying system compromise."
    }
]

start_id = len(current) + 1
for idx, q in enumerate(more_qb):
    q["id"] = start_id + idx
    q["uni"] = True
    q["syllabus"] = "DU Core DSE-3"
    current.append(q)

print(f"Total master questions: {len(current)}")

js_content = f"""// Ethical Hacking & Advanced Cybersecurity MiniBook - Master Question Bank
// University of Delhi · B.Tech CSE (DSE-3/GE-5)
// Total Curated Questions: {len(current)} (MCQ & MSQ) with In-Depth Explanations

const EH_QUIZ_DATA = {json.dumps(current, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ EH_QUIZ_DATA }};
}}
"""

with open('/Users/arpit/minibook/ethical_hacking/assets/js/quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Expanded quiz-data.js to", len(current), "questions successfully!")
