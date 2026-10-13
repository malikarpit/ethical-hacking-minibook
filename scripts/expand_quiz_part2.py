import json

with open('/Users/arpit/minibook/ethical_hacking/assets/js/quiz-data.js', 'r') as f:
    text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    current = json.loads(text[start:end])

more = [
    # 21st Sept: Campus Network Security
    {
        "q": "A university campus network experiences repeated unauthorized probing from untrusted student Wi-Fi into administrative servers. Which architectural control is most effective?",
        "options": [
            "Network segmentation using VLANs and an internal firewall with strict Access Control Lists (ACLs)",
            "Placing all administrative servers and student laptops on the same flat unsegmented subnet",
            "Disabling all passwords on administrative servers",
            "Implementing a Demilitarized Zone (DMZ) for public-facing servers with no direct access to internal databases",
            "Enforcing 802.1Q trunking and firewall policy between student, faculty, and administration zones"
        ],
        "ans": [0, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Campus Network Segmentation & DMZ",
        "source": "DU 21 Sep Activity (Campus Security)",
        "exp": "A flat network allows unrestricted lateral movement. Segregating network zones via VLANs, internal firewalls, and DMZs prevents unauthorized student Wi-Fi traffic from reaching high-value administrative databases."
    },
    {
        "q": "What is the primary function of a Demilitarized Zone (DMZ) in enterprise network design?",
        "options": [
            "To isolate publicly accessible services (such as web and email servers) from the sensitive internal corporate network",
            "To prevent external traffic from communicating directly with the internal database servers",
            "To eliminate the need for any firewalls on the network perimeter",
            "To contain the blast radius if an internet-facing web server is compromised",
            "To automatically encrypt all desktop hard drives in the company"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Easy",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "DMZ Architecture & Containment",
        "source": "DU 21 Sep Activity",
        "exp": "A DMZ acts as a buffer network between the public untrusted Internet and the secure internal corporate LAN. If a DMZ web server is breached, the firewall prevents it from accessing internal subnets."
    },
    # 23rd Sept: Proxy Servers
    {
        "q": "In a college computer laboratory, what benefits does deploying a Forward Web Proxy provide?",
        "options": [
            "Web access control and URL filtering based on corporate/college acceptable use policies",
            "Local web object caching to reduce external internet bandwidth consumption and improve loading latency",
            "Centralized logging of employee/student web request destinations and timestamps",
            "Complete elimination of all database SQL injection vulnerabilities on remote third-party websites",
            "Content inspection and antivirus scanning of unencrypted HTTP downloads"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Forward Proxy Capabilities",
        "source": "DU 23 Sep Activity (Proxy Server)",
        "exp": "Forward proxies provide URL filtering, object caching, centralized client request logging, and download scanning. They cannot prevent SQL injection vulnerabilities residing on external web applications."
    },
    {
        "q": "What privacy and security trade-offs arise when an enterprise proxy performs HTTPS / SSL Decryption (TLS Inspection)?",
        "options": [
            "The proxy terminates the client's TLS session using a custom enterprise root certificate installed on managed endpoints",
            "Sensitive employee data (such as online banking passwords or medical information) may become visible to administrators and logs",
            "It breaks end-to-end encryption between the client browser and the true destination server",
            "It mathematically prevents all forms of MITM attacks by third parties",
            "If the proxy server itself is compromised, all decrypted traffic traversing it is exposed"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "TLS Decryption & Proxy Inspection",
        "source": "DU 23 Sep Activity (Proxies)",
        "exp": "TLS inspection requires installing a trusted root CA on endpoints. While it grants visibility into encrypted malware, it terminates end-to-end encryption and risks exposing confidential banking/personal data in proxy logs."
    },
    # Unit 1 Activity 1.3 Case Studies
    {
        "q": "In an authorized security assessment of a university student portal, why must ethical testers use synthetic test accounts rather than actual student accounts?",
        "options": [
            "To prevent viewing, modifying, or corrupting real student educational records and personal data",
            "To adhere to legal data privacy obligations (e.g. DPDP Rules 2025 and IT Act 2000)",
            "Because penetration testing tools fail to operate if real accounts are used",
            "To allow controlled, reproducible testing without impacting real university business operations",
            "To ensure tests can be rolled back without residual data contamination"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Synthetic Test Accounts & Data Privacy",
        "source": "DU Activity 1.3 (University Portal Case)",
        "exp": "Using synthetic test accounts guarantees that live customer/student records are protected from exposure or corruption, upholding ethical standards and legal requirements."
    },
    {
        "q": "Which controls are critical for preventing Insecure Direct Object Reference (IDOR) / BOLA flaws in API endpoints?",
        "options": [
            "Validating that the authenticated user actually owns or is authorized to view the requested record ID on every single request",
            "Using cryptographically secure non-sequential identifiers (e.g. UUIDv4) instead of predictable autoincrementing integers (e.g. 1001, 1002)",
            "Relying entirely on obfuscating the URL parameter names in the frontend JavaScript code",
            "Enforcing server-side context checks combining user session identity with resource permissions",
            "Adopting a strict role and tenant verification middleware before returning resource data"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "IDOR / BOLA Prevention",
        "source": "DU 28 Sep Activity (Broken Access Control)",
        "exp": "IDOR is prevented through server-side ownership verification. Using UUIDs adds defense-in-depth against enumeration, but server-side authorization checks remain mandatory."
    },
    {
        "q": "What security properties must be validated when testing API authentication using JSON Web Tokens (JWT)?",
        "options": [
            "Verifying that the server validates the cryptographic signature using a strong secret key",
            "Testing whether the server improperly accepts the algorithm 'none' (alg: none vulnerability)",
            "Checking whether tokens expire within an appropriate timeframe (exp claim enforcement)",
            "Verifying that the token signature is checked against an asymmetric public key rather than confusing public and private keys (algorithm confusion)",
            "Storing JWT tokens in unencrypted local storage alongside plaintext user passwords"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "JWT API Security Testing",
        "source": "DU Unit 3 API Security",
        "exp": "JWT testing verifies signature integrity, token expiration, mitigation of 'alg: none' bypasses, and resistance to RSA/HMAC algorithm confusion attacks."
    },
    {
        "q": "In secure software design, how does Output Encoding specifically neutralize Cross-Site Scripting (XSS)?",
        "options": [
            "It converts characters that have special syntactic meaning in HTML (such as <, >, &, \", ') into harmless HTML entity representations (&lt;, &gt;, &amp;, &quot;, &#x27;)",
            "It deletes the entire user request from the web server before it reaches the database",
            "It ensures the browser parses user input strictly as inert display data rather than executable browser markup",
            "It replaces the need for using HTTPS on the web application",
            "It must be context-sensitive (HTML body encoding differs from JavaScript attribute or URL encoding)"
        ],
        "ans": [0, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "Context-Aware Output Encoding",
        "source": "DU 30 Sep Activity (XSS Defense)",
        "exp": "Output encoding turns dangerous syntax characters into inert HTML entities (e.g. `<script>` becomes `&lt;script&gt;`), rendering it harmlessly as visible text. It must be customized to the rendering context."
    },
    {
        "q": "What is the primary objective of Threat Hunting compared to Automated Security Monitoring?",
        "options": [
            "Threat hunting is a proactive, hypothesis-driven investigation looking for stealthy adversaries that bypassed automated alerts",
            "Automated monitoring continuously observes telemetry against predefined static rules and known threshold alerts",
            "Threat hunting replaces the need for having any security logs or firewalls",
            "Threat hunting assumes an adversary may already be present in the network (Assume Breach mindset)",
            "Threat hunting leverages MITRE ATT&CK techniques to search for anomalous behavior in endpoint and identity logs"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 4,
        "topic": "Threat Hunting vs Monitoring",
        "source": "DU Unit 4 Threat Hunting",
        "exp": "Monitoring is reactive to known alerts; threat hunting is proactive, hypothesis-driven, assumes breach, and actively searches for sophisticated APT presence using telemetry."
    },
    {
        "q": "Why is Certificate Pinning (or Public Key Pinning) utilized in high-security mobile applications?",
        "options": [
            "To prevent attackers from intercepting mobile API traffic using forged or rogue Certificate Authority (CA) certificates installed on the device",
            "To associate the mobile app with a specific expected certificate or public key hash",
            "To prevent users from uninstalling the mobile application",
            "To defend against Man-in-the-Middle (MITM) attacks even if an enterprise CA is trusted by the device OS",
            "To bypass all server-side authentication requirements"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 3",
        "part": 3,
        "chapter": 3,
        "topic": "Mobile Certificate Pinning",
        "source": "DU Unit 3 Mobile App Security",
        "exp": "Certificate pinning hardcodes the expected server certificate or public key in the mobile client, preventing proxy interception via user-installed custom root certificates."
    }
]

start_id = len(current) + 1
for idx, q in enumerate(more):
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
