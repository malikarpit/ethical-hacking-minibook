import json

# Let's define the comprehensive curated question bank
quiz_items = []

# ==========================================
# UNIT 3: SECURE CODING (Activity 30 Sep)
# ==========================================
u3_sc = [
    {
        "q": "Which practices help prevent SQL injection?",
        "options": [
            "Using parameterized queries",
            "Using prepared statements",
            "Concatenating user input directly into SQL",
            "Applying appropriate input validation",
            "Giving the application unrestricted database privileges"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Parameterized queries and prepared statements ensure untrusted input is treated strictly as data rather than executable SQL syntax. Input validation ensures that parameters conform to expected formats. Concatenating user strings directly into SQL queries causes SQL injection, and unrestricted database privileges violate the principle of least privilege.",
        "topic": "SQL Injection & Input Handling"
    },
    {
        "q": "Which are characteristics of secure input validation?",
        "options": [
            "Validation is performed on security-sensitive inputs",
            "Validation considers the expected data type",
            "Validation is based only on client-side JavaScript",
            "Unexpected input is rejected or safely handled",
            "Validation rules are defined according to the application's context"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Secure input validation must always be enforced on the server-side because client-side JavaScript can easily be bypassed using proxy tools like Burp Suite or curl. Effective validation checks data types, formats, lengths, and context.",
        "topic": "Input Validation Principles"
    },
    {
        "q": "Which practices help reduce XSS vulnerabilities?",
        "options": [
            "Context-aware output encoding",
            "Safe DOM APIs (such as textContent)",
            "Content Security Policy (CSP)",
            "Displaying untrusted HTML without sanitization",
            "Appropriate input validation"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "XSS occurs when untrusted input executes in the victim's browser. Context-aware output encoding (HTML body, attribute, JavaScript context) neutralizes script characters. Safe DOM APIs prevent browser parsing. CSP provides defense-in-depth. Displaying untrusted HTML without sanitization directly causes XSS.",
        "topic": "XSS Prevention"
    },
    {
        "q": "Which practices are associated with secure password storage?",
        "options": [
            "Password hashing using an appropriate slow hashing algorithm (e.g., bcrypt, Argon2)",
            "Using a unique cryptographically random salt for each password",
            "Storing plaintext passwords",
            "Selecting appropriate work factors / iteration counts",
            "Encrypting all passwords with one common key and treating them as plaintext-equivalent data"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Passwords must be stored using adaptive, slow one-way hash functions (bcrypt, Argon2, PBKDF2) with unique salts per user to defeat precomputed rainbow tables. Reversible two-way encryption with a common key is flawed because key compromise exposes every password.",
        "topic": "Password Hashing & Storage"
    },
    {
        "q": "Which properties are desirable in secure authentication mechanisms?",
        "options": [
            "Protection against excessive failed login attempts (rate limiting / lockout)",
            "Secure session management and token lifecycle",
            "Secure password-reset mechanisms with time-limited tokens",
            "Returning detailed authentication failure messages that reveal which accounts exist (e.g. 'Username not found')",
            "Appropriate multi-factor authentication (MFA) where required"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Revealing detailed failure messages like 'Username not found' vs 'Incorrect password' enables user enumeration. Generic error messages (e.g., 'Invalid credentials') must be returned instead.",
        "topic": "Authentication & Session Security"
    },
    {
        "q": "Which practices support secure session management?",
        "options": [
            "Securely generating session identifiers with sufficient cryptographically secure entropy",
            "Regenerating session identifiers upon privilege changes (e.g. login)",
            "Setting appropriate expiration times for idle and absolute sessions",
            "Accepting session identifiers supplied directly through URL query strings",
            "Invalidating session tokens on logout and server-side timeouts"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Session IDs in URLs leak via Referer headers, proxy logs, and browser history. Session fixation is prevented by regenerating session IDs after successful authentication.",
        "topic": "Session Management & Fixation"
    },
    {
        "q": "Which characteristics apply to a secure password-reset mechanism?",
        "options": [
            "Using cryptographically unpredictable, single-use reset tokens",
            "Setting a short token expiration lifetime",
            "Displaying the temporary password directly in browser response",
            "Invalidating the token immediately after successful reset",
            "Sending notifications to the user upon password change"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Password reset tokens must be ephemeral, single-use, high-entropy, and invalidated immediately upon use. Passwords must never be displayed in plain HTTP responses.",
        "topic": "Password Reset Mechanisms"
    },
    {
        "q": "Which practices help protect file-upload functionality from malicious abuse?",
        "options": [
            "Validating file content and MIME types server-side",
            "Enforcing strict file size limits",
            "Restricting allowed file extensions using an allowlist",
            "Storing uploaded files in a directory with execution permissions enabled",
            "Storing uploaded files outside the public web root or using random filenames"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "exp": "Storing files in a directory where script execution (PHP, ASPX, JSP) is permitted allows Remote Code Execution (Web Shells). Execution permissions must be disabled, and filenames should be neutralized.",
        "topic": "Secure File Uploads"
    },
    {
        "q": "Why is client-side validation alone insufficient for web security?",
        "options": [
            "Client-side scripts run in an environment controlled by the user",
            "An attacker can intercept and modify HTTP requests using an intercepting proxy",
            "Client-side validation can be disabled or bypassed entirely",
            "Client-side validation completely eliminates the need for server-side validation",
            "Server endpoints must independently enforce business logic and constraints"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Client-side validation is a UX enhancement, not a security boundary. An attacker can use curl, Postman, or Burp Suite to send arbitrary HTTP payloads directly to the server.",
        "topic": "Client vs Server Validation"
    },
    {
        "q": "Which practices follow the Principle of Least Privilege?",
        "options": [
            "Giving users only the permissions necessary for their approved role",
            "Giving application database accounts only necessary CRUD privileges (e.g. no DROP TABLE or DBA privileges)",
            "Giving every application administrative privileges to simplify troubleshooting",
            "Restricting access to sensitive resources and system directories",
            "Reviewing and revoking privileges periodically"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Least privilege mandates granting the minimal permissions necessary for a task. Running applications as root/DBA drastically increases vulnerability impact.",
        "topic": "Principle of Least Privilege"
    },
    {
        "q": "Which practices help prevent Command Injection vulnerabilities?",
        "options": [
            "Avoiding unnecessary execution of system shell commands from application code",
            "Using parameterized APIs or programming language built-in functions instead of shell invocations",
            "Directly concatenating untrusted user input into shell command strings",
            "Validating user input against a strict allowlist of permitted characters",
            "Executing commands with elevated administrative privileges"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Command injection occurs when untrusted input is passed to system shells (`system()`, `exec()`, `shell_exec()`). Built-in platform APIs (e.g. `subprocess.run(['cmd', arg], shell=False)`) should be used.",
        "topic": "Command Injection"
    },
    {
        "q": "Which practices help prevent Path Traversal (Directory Traversal) vulnerabilities?",
        "options": [
            "Validating and canonicalizing user-controlled file paths against a base directory",
            "Restricting file access to a permitted directory sandbox",
            "Directly trusting user input containing '../' sequences",
            "Avoiding unnecessary exposure of underlying filesystem paths to users",
            "Using an allowlist of permitted filenames or indirect object references"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Path traversal (`../` or dot-dot-slash) allows accessing files outside intended roots. Resolving absolute canonical paths and verifying they start with the permitted base directory prevents traversal.",
        "topic": "Path Traversal"
    },
    {
        "q": "Which statements about hard-coded secrets in source code are correct?",
        "options": [
            "API keys and database passwords should not be embedded directly in source code",
            "Secrets should be managed using dedicated environment variables or secret management vaults",
            "Secrets committed to version control repositories can persist in commit history",
            "Obscuring a password through simple encoding (like Base64) makes it secure",
            "Periodic secret rotation reduces the impact of compromised credentials"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Base64 is an encoding format, NOT encryption; anyone can decode it instantly. Hardcoded secrets in git repositories remain in history even if deleted in subsequent commits.",
        "topic": "Secrets Management"
    },
    {
        "q": "Which practices are essential for secure logging and monitoring?",
        "options": [
            "Logging authentication failures, access denials, and privilege changes",
            "Writing plaintext passwords, session tokens, and credit card CVVs into log files",
            "Protecting log files from unauthorized modification and deletion",
            "Using synchronized system clocks (NTP) across servers for event correlation",
            "Monitoring and alerting on abnormal or repeated security events"
        ],
        "ans": [0, 2, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Sensitive data (credentials, tokens, PII) must NEVER be written to logs (OWASP A09 Logging & Alerting Failures). Logs must be tamper-proof with synchronized timestamps.",
        "topic": "Security Logging & Monitoring"
    },
    {
        "q": "Which practices help reduce Race Condition vulnerabilities in web applications?",
        "options": [
            "Identifying time-of-check to time-of-use (TOCTOU) windows in critical transactions",
            "Using database transactions and appropriate locking mechanisms",
            "Ensuring atomic operations for state changes (e.g. balance deductions)",
            "Relying on network latency to separate concurrent user requests",
            "Testing functionality with concurrent requests in security testing"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "exp": "Race conditions occur when concurrent requests exploit the gap between checking a state and executing an action (e.g. redeeming a coupon multiple times). Atomic operations and row locking prevent this.",
        "topic": "Concurrency & Race Conditions"
    }
]

for item in u3_sc:
    item["unit"] = "Unit 3"
    item["part"] = 3
    item["chapter"] = 3
    item["source"] = "DU Activity 30 Sep (Secure Coding)"
    quiz_items.append(item)

# ==========================================
# UNIT 3: OWASP TOP 10 (Activity 28 Sep)
# ==========================================
u3_owasp = [
    {
        "q": "Which of the following are recognized categories in the OWASP Top 10 framework?",
        "options": [
            "Broken Access Control",
            "Injection",
            "Security Misconfiguration",
            "Cryptographic Failures",
            "Increased CPU Clock Speed"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Broken Access Control, Injection, Security Misconfiguration, and Cryptographic Failures are premier categories in OWASP Top 10. CPU clock speed is hardware performance, not an application security vulnerability.",
        "topic": "OWASP Top 10 Categories"
    },
    {
        "q": "Which situations demonstrate Broken Access Control (OWASP A01)?",
        "options": [
            "A student alters a URL parameter from /invoice/1001 to /invoice/1002 and views another student's record",
            "A standard user accesses an administrative URL (/admin/users) directly without role verification",
            "A user modifies an internal object identifier in an API request and accesses unauthorized data",
            "A user enters an incorrect password three times and is temporarily locked out",
            "A user bypasses authorization checks because access control is only enforced in client UI code"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Broken Access Control occurs when users can act outside their intended permissions. Accessing other records via ID tampering (IDOR/BOLA) and bypassing hidden buttons are classic access control failures.",
        "topic": "Broken Access Control (IDOR/BOLA)"
    },
    {
        "q": "Which measures are effective in preventing Broken Access Control?",
        "options": [
            "Enforcing authorization on every single server-side request",
            "Adopting a deny-by-default access control architecture",
            "Hiding sensitive action buttons in HTML without server verification",
            "Implementing robust Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC)",
            "Disabling directory listing on web servers"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Hiding UI elements provides zero security against direct HTTP requests. Permissions must be validated on the server on every request under a deny-by-default policy.",
        "topic": "Access Control Defenses"
    },
    {
        "q": "What is the primary difference between Stored XSS and Reflected XSS?",
        "options": [
            "Stored XSS payloads are permanently saved on the server (e.g. database), whereas Reflected XSS payloads are immediately reflected from the incoming request",
            "Stored XSS can affect any user who views the stored data; Reflected XSS typically requires tricking a victim into clicking a crafted link",
            "Reflected XSS is always executed on the server; Stored XSS is executed on the router",
            "Both Stored and Reflected XSS execute arbitrary JavaScript within the victim's browser context",
            "Stored XSS is completely harmless compared to Reflected XSS"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Stored XSS persists on the backend (e.g. comments, profiles) and hits any visitor. Reflected XSS reflects directly off request parameters. Both execute client-side in the browser.",
        "topic": "Stored vs Reflected XSS"
    },
    {
        "q": "Which of the following are examples of Security Misconfiguration (OWASP A05 / A02)?",
        "options": [
            "Leaving default accounts and passwords unchanged (e.g. admin:admin)",
            "Detailed stack traces and verbose error messages exposed to end users",
            "Unnecessary features, debug ports, or sample files enabled on production servers",
            "Enforcing HTTPS with strict TLS 1.3 encryption across all endpoints",
            "Permissive CORS headers (e.g. Access-Control-Allow-Origin: *) on sensitive endpoints"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Security Misconfiguration includes default credentials, verbose stack traces that leak internal architecture, unnecessary services, and overly permissive CORS policies.",
        "topic": "Security Misconfiguration"
    },
    {
        "q": "Which practices address Vulnerable and Outdated Components (OWASP A06 / A03)?",
        "options": [
            "Maintaining an accurate Software Bill of Materials (SBOM) for all dependencies",
            "Continuously scanning third-party libraries for known CVEs using tools like OWASP Dependency-Check",
            "Never updating production dependencies under any circumstances to avoid breaking changes",
            "Removing unused dependencies, features, and components to minimize attack surface",
            "Subscribing to security advisories and promptly patching critical vulnerabilities"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Never updating dependencies leaves known public vulnerabilities unpatched. Maintaining an SBOM, automated dependency scanning, and timely patching are core defenses.",
        "topic": "Software Supply Chain & Dependencies"
    },
    {
        "q": "How does Cross-Site Request Forgery (CSRF) differ fundamentally from Cross-Site Scripting (XSS)?",
        "options": [
            "XSS injects and executes malicious script within a trusted web application origin",
            "CSRF tricks a victim's authenticated browser into sending unauthorized HTTP requests to a target website",
            "CSRF requires arbitrary script execution on the target application's server",
            "CSRF exploits the browser's automatic inclusion of credentials (cookies) in cross-site requests",
            "A Content Security Policy alone completely eliminates CSRF vulnerabilities"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Hard",
        "exp": "XSS executes malicious code inside the application's context. CSRF exploits the browser's implicit trust and automatic cookie submission. CSP does not prevent CSRF; anti-CSRF tokens and SameSite cookies do.",
        "topic": "XSS vs CSRF Mechanisms"
    },
    {
        "q": "Which cookies attributes enhance web session security?",
        "options": [
            "HttpOnly: Prevents client-side scripts from reading session cookies via document.cookie",
            "Secure: Ensures cookies are transmitted only over encrypted HTTPS connections",
            "SameSite=Strict: Blocks sending the cookie on all cross-site browsing contexts",
            "SameSite=None without the Secure attribute",
            "Domain: Setting the domain to the broadest possible public suffix (e.g. .com)"
        ],
        "ans": [0, 1, 2],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "HttpOnly blocks XSS cookie theft. Secure prevents cleartext eavesdropping. SameSite=Strict mitigates CSRF. Setting domain to a public suffix is rejected by browsers, and SameSite=None requires Secure.",
        "topic": "Cookie Security Attributes"
    }
]

for item in u3_owasp:
    item["unit"] = "Unit 3"
    item["part"] = 3
    item["chapter"] = 3
    item["source"] = "DU Activity 28 Sep (OWASP Top 10)"
    quiz_items.append(item)

# ==========================================
# UNIT 2: NETWORK & SYSTEM SECURITY (Activity 2 & 21/23 Sep)
# ==========================================
u2_net = [
    {
        "q": "When a network firewall inspects a TCP SYN packet, which factors influence whether it is permitted?",
        "options": [
            "Source IP address and Destination IP address",
            "Destination port and Protocol (TCP)",
            "Configured firewall security rules and policy",
            "Payload contents of an encrypted SSH tunnel inside the SYN packet",
            "Current state of the connection table (for stateful inspection)"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Firewalls evaluate source/destination IP, destination port, protocols, rule sets, and connection state. A TCP SYN packet initiates a connection and does not contain encrypted tunnel data.",
        "topic": "Firewall Packet Filtering Factors"
    },
    {
        "q": "Which of the following demonstrate limitations of traditional network firewalls?",
        "options": [
            "Malicious traffic carried over legitimate allowed ports (e.g. web attacks over TCP/443)",
            "Lateral movement between compromised hosts within the same internal broadcast domain",
            "Inability to detect social engineering or phishing attacks against employees",
            "Automatic identification and zero-day patch application for all endpoints",
            "Lack of visibility into encrypted application payloads without TLS inspection"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Firewalls do not automatically patch endpoints or fix zero-days. They permit traffic matching port rules (even if malicious) and cannot inspect internal same-subnet traffic without internal segmentation.",
        "topic": "Firewall Limitations"
    },
    {
        "q": "Which statements correctly differentiate an Intrusion Detection System (IDS) from an Intrusion Prevention System (IPS)?",
        "options": [
            "An IDS passively monitors traffic out-of-band and alerts on suspicious activity",
            "An IPS sits inline in the network traffic path and can actively block malicious packets",
            "An IDS can alter network packets in real-time to strip malicious shellcode",
            "An IPS misconfiguration can cause denial of service by dropping legitimate traffic",
            "Both IDS and IPS can utilize signature-based and anomaly-based detection methods"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "IDS is passive (span/tap port) and generates alerts. IPS sits inline and enforces drops/resets. Aggressive IPS rules risk dropping valid business traffic (false positive disruption).",
        "topic": "IDS vs IPS Architecture"
    },
    {
        "q": "What factors commonly contribute to false positives in signature-based IDS/IPS systems?",
        "options": [
            "Overly broad or poorly tuned detection signatures",
            "Benign network traffic closely resembling an attack pattern",
            "Corrupted system clocks causing clock skew",
            "Legitimate administrative vulnerability scans conducted by internal security teams",
            "Network traffic perfectly adhering to RFC specifications"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "False positives arise when non-malicious traffic matches a loose pattern or when administrative testing triggers attack alerts. Perfect RFC conformance does not trigger well-crafted signatures.",
        "topic": "IDS False Positives & Tuning"
    },
    {
        "q": "Which of the following correctly distinguish Vertical from Horizontal Privilege Escalation?",
        "options": [
            "Vertical privilege escalation involves acquiring higher privileges (e.g., standard user gaining root/admin)",
            "Horizontal privilege escalation involves accessing resources of peer users at the same privilege level",
            "Vertical privilege escalation is impossible on Linux systems",
            "Horizontal privilege escalation can occur via Insecure Direct Object References (IDOR)",
            "Kernel exploits and SUID misconfigurations are common vectors for vertical escalation"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Vertical moves upward in authority (user -> root/admin). Horizontal moves sideways across peers (user A -> user B's records). Linux SUID binaries and sudo flaws enable vertical escalation.",
        "topic": "Privilege Escalation Taxonomy"
    },
    {
        "q": "Which network attack techniques can enable Man-in-the-Middle (MITM) positioning on a local area network?",
        "options": [
            "ARP Cache Poisoning / ARP Spoofing",
            "Rogue DHCP Server offering malicious default gateway and DNS settings",
            "DNS Cache Poisoning",
            "Enforcing WPA3 Enterprise encryption with 802.1X authentication",
            "Evil Twin Wi-Fi Access Point spoofing an authorized SSID"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "exp": "ARP spoofing, rogue DHCP, DNS spoofing, and Evil Twin access points divert traffic through the attacker's machine. WPA3 Enterprise prevents unauthorized local interception.",
        "topic": "MITM Vectors on LANs"
    },
    {
        "q": "Which characteristics distinguish a Trojan Horse from a Computer Worm?",
        "options": [
            "A Trojan misrepresents itself as benign software while carrying a concealed malicious payload",
            "A Worm actively self-replicates and spreads across network connections without human interaction",
            "A Trojan always self-replicates across the entire network subnet automatically",
            "A Worm exploits network vulnerabilities to propagate autonomously",
            "Trojans often rely on user social engineering to achieve execution"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Trojans rely on disguise and user execution; they do NOT self-replicate by definition. Self-replication across networks is the defining characteristic of worms.",
        "topic": "Malware Types: Trojans vs Worms"
    },
    {
        "q": "Which security measures are critical for defending enterprise Wi-Fi networks against WPA2 cracking?",
        "options": [
            "Using long, complex passphrases with high entropy to defeat offline dictionary attacks against the 4-way handshake",
            "Transitioning to WPA3 with Simultaneous Authentication of Equals (SAE)",
            "Deploying 802.1X Enterprise authentication with RADIUS instead of Pre-Shared Keys (PSK)",
            "Hiding the SSID name (which completely stops all wireless sniffing)",
            "Disabling Wi-Fi Protected Setup (WPS) on access points"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Hiding SSIDs offers zero security because beacon and probe response frames reveal the SSID. Complex passphrases, WPA3 SAE, 802.1X Enterprise, and disabling vulnerable WPS prevent cracking.",
        "topic": "Wireless WPA2/WPA3 Security"
    },
    {
        "q": "What roles does a Forward Proxy serve compared to a Reverse Proxy?",
        "options": [
            "A Forward Proxy acts on behalf of internal clients reaching out to the Internet",
            "A Reverse Proxy sits in front of backend servers and intercepts client requests",
            "A Forward Proxy can enforce URL filtering, content inspection, and client caching",
            "A Reverse Proxy can provide load balancing, SSL termination, and web application firewalling",
            "A Reverse Proxy is used exclusively to hide client IP addresses from internal network administrators"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Forward proxies protect and filter internal clients reaching the web. Reverse proxies shield origin servers, providing TLS termination, caching, and load balancing.",
        "topic": "Forward vs Reverse Proxies"
    }
]

for item in u2_net:
    item["unit"] = "Unit 2"
    item["part"] = 2
    item["chapter"] = 2
    item["source"] = "DU Activity 2 & Network Security"
    quiz_items.append(item)

# ==========================================
# UNIT 1: FUNDAMENTALS & ETHICS (Activity 1.3 & 18 Sep)
# ==========================================
u1_fund = [
    {
        "q": "What are the five recognized phases of the ethical hacking lifecycle in proper sequential order?",
        "options": [
            "Reconnaissance -> Scanning -> Gaining Access -> Maintaining Access -> Covering Tracks",
            "Scanning -> Reconnaissance -> Exploitation -> Reporting -> Remediation",
            "Reconnaissance -> Gaining Access -> Scanning -> Patching -> Eradication",
            "Targeting -> Weaponization -> Delivery -> Exploitation -> Installation"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "exp": "The 5 official syllabus phases are: 1. Reconnaissance (OSINT & info gathering), 2. Scanning & Enumeration (ports/services), 3. Gaining Access (exploitation validation), 4. Maintaining Access (persistence concept), 5. Covering Tracks (concept; ethical testers preserve logs instead of destroying evidence).",
        "topic": "Ethical Hacking Lifecycle Phases"
    },
    {
        "q": "Which characteristics define a White-Hat hacker compared to Black-Hat and Grey-Hat hackers?",
        "options": [
            "Has explicit written authorization from the system owner before testing",
            "Operates within an agreed scope and adheres to safety boundaries",
            "Discloses vulnerabilities responsibly to the organization along with remediation guidance",
            "Tests production targets without permission whenever they suspect a vulnerability exists",
            "Never uses penetration testing tools like Kali Linux or Nmap"
        ],
        "ans": [0, 1, 2],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Ethical hackers operate strictly with written authorization, scoped targets, and responsible reporting. Testing without permission—even with benevolent intent—is unauthorized (Grey or Black hat).",
        "topic": "Hacker Classifications & Ethics"
    },
    {
        "q": "Which statements accurately distinguish Passive Reconnaissance from Active Reconnaissance?",
        "options": [
            "Passive reconnaissance gathers information without sending traffic directly to the target system",
            "Active reconnaissance interacts directly with target hosts, creating logs on target firewalls and servers",
            "WHOIS lookups, public DNS queries, and OSINT searching are examples of passive reconnaissance",
            "Port scanning with Nmap and banner grabbing are examples of passive reconnaissance",
            "Active reconnaissance requires explicit written authorization to remain lawful"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Port scanning and banner grabbing interact directly with target ports, making them active reconnaissance. Passive recon uses third-party sources (WHOIS, DNS records, public search engines).",
        "topic": "Passive vs Active Reconnaissance"
    },
    {
        "q": "What is the primary objective of Vulnerability Assessment (VA) compared to Penetration Testing (PT)?",
        "options": [
            "Vulnerability Assessment focuses on identifying, classifying, and prioritizing known weaknesses across an environment",
            "Penetration Testing simulates adversarial attack paths to validate whether weaknesses can be exploited to cause business impact",
            "Vulnerability Assessment always involves executing destructive exploits to crash database servers",
            "Penetration testing demonstrates the practical risk and chained exploitability of discovered findings",
            "A clean vulnerability scan proves a system is completely impenetrable"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "VA inventories and rates weaknesses across broad scope. PT actively validates exploitability and attack paths. Neither guarantees absolute, permanent security.",
        "topic": "VA vs PT Differences"
    },
    {
        "q": "Which Indian legal statutes govern unauthorized computer access and data protection?",
        "options": [
            "Information Technology Act, 2000 (Section 43, 66)",
            "Digital Personal Data Protection (DPDP) Act, 2023 and Rules, 2025",
            "The Indian Penal Code provisions regarding fraud and criminal trespass",
            "The Digital Millennium Copyright Act (DMCA)",
            "Computer Fraud and Abuse Act (CFAA)"
        ],
        "ans": [0, 1, 2],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "In India, the IT Act, 2000 (Sections 43, 66) and the DPDP Act 2023 / Rules 2025 are the governing statutes. DMCA and CFAA are United States federal laws.",
        "topic": "Indian Cyber Laws & Statutory Context"
    },
    {
        "q": "What should be included in an official penetration testing report?",
        "options": [
            "Executive summary detailing overall security posture and business risk",
            "Technical findings with reproducible steps, affected assets, and sanitized evidence",
            "Risk ratings based on likelihood, impact, and contextual exposure (CVSS context)",
            "Concrete, actionable remediation guidance and retest validation steps",
            "Actual user passwords and unredacted sensitive customer records dumped from the database"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Easy",
        "exp": "Professional reports must protect privacy: credentials and PII must be sanitized and redacted. Reports require executive summaries, technical steps, risk ratings, and fix procedures.",
        "topic": "Penetration Testing Reporting"
    },
    {
        "q": "Which tool in Kali Linux is primarily designed for Open-Source Intelligence (OSINT) and entity relationship graph visualization?",
        "options": [
            "Maltego",
            "Wireshark",
            "Metasploit",
            "John the Ripper"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "exp": "Maltego is the specialized OSINT link-analysis and graphical relationship mapping tool named in the syllabus. Wireshark inspects packets, Metasploit executes exploits, and John cracks hashes.",
        "topic": "Maltego & OSINT Tools"
    }
]

for item in u1_fund:
    item["unit"] = "Unit 1"
    item["part"] = 1
    item["chapter"] = 1
    item["source"] = "DU Activity 1.3 & Unit 1 Fundamentals"
    quiz_items.append(item)

# ==========================================
# UNIT 4: ADVANCED CYBERSECURITY (IR, Crypto, Zero Trust, APT)
# ==========================================
u4_adv = [
    {
        "q": "What are the six phases of the Incident Response lifecycle according to standard NIST guidance (SP 800-61)?",
        "options": [
            "Preparation -> Detection & Analysis -> Containment -> Eradication -> Recovery -> Post-Incident Activity (Lessons Learned)",
            "Identification -> Escalation -> Prosecution -> Restoration -> Closing -> Billing",
            "Reconnaissance -> Weaponization -> Delivery -> Exploitation -> Installation -> Command & Control",
            "Triage -> Patching -> Quarantine -> Eradication -> Backup -> Reporting"
        ],
        "ans": [0],
        "type": "MCQ",
        "diff": "Easy",
        "exp": "NIST SP 800-61 defines: 1. Preparation, 2. Detection & Analysis, 3. Containment, 4. Eradication, 5. Recovery, and 6. Post-Incident Activity (Lessons Learned). Option C represents the Lockheed Martin Cyber Kill Chain.",
        "topic": "NIST Incident Response Lifecycle"
    },
    {
        "q": "Which statements correctly compare Symmetric Encryption with Asymmetric (Public-Key) Encryption?",
        "options": [
            "Symmetric encryption uses the same shared secret key for encryption and decryption",
            "Asymmetric encryption uses mathematically linked public and private key pairs",
            "Symmetric algorithms (e.g. AES-256) are computationally fast and suited for bulk data encryption",
            "Asymmetric algorithms (e.g. RSA, ECC) are commonly used for key exchange and digital signatures",
            "Asymmetric encryption is 1000 times faster than symmetric encryption for encrypting terabytes of video data"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Asymmetric encryption is computationally intensive and much slower than symmetric encryption. Real systems use hybrid cryptography: asymmetric key exchange to agree on symmetric session keys.",
        "topic": "Symmetric vs Asymmetric Cryptography"
    },
    {
        "q": "Which statements accurately distinguish a Cryptographic Hash from a Digital Signature?",
        "options": [
            "A hash produces a fixed-size digest that verifies integrity, but cannot prove who created the data",
            "A digital signature encrypts a hash digest with a private key, providing authenticity, integrity, and non-repudiation",
            "A cryptographic hash can be easily decrypted using a private key to recover the original input text",
            "Anyone with the signer's public key can verify a valid digital signature",
            "SHA-256 is a hashing algorithm; RSA-PSS and ECDSA are digital signature schemes"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Hash functions are one-way mathematical functions and cannot be 'decrypted'. Digital signatures bind an identity to data by signing the digest with the sender's private key.",
        "topic": "Hashes vs Digital Signatures"
    },
    {
        "q": "What is the core role of a Digital Certificate (X.509) in Public Key Infrastructure (PKI)?",
        "options": [
            "It binds a subject identity (e.g., domain name or individual) to a public key, signed by a trusted Certificate Authority (CA)",
            "It automatically encrypts the contents of a hard drive without requiring keys",
            "It enables clients to verify the authenticity of a remote server's public key through a chain of trust",
            "It guarantees that a web application has zero software bugs or vulnerabilities",
            "It contains validity dates, key usage flags, and revocation status check pointers (CRL/OCSP)"
        ],
        "ans": [0, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "A certificate binds an identity to a public key signed by a CA. It does not certify that the application is bug-free or encrypt files on its own.",
        "topic": "Digital Certificates & PKI"
    },
    {
        "q": "Which characteristics define Advanced Persistent Threats (APTs)?",
        "options": [
            "High capability, sophisticated tooling, and significant resources (often nation-state backed)",
            "Long-term persistence within target networks to achieve strategic espionage or sabotage objectives",
            "Rapid opportunistic automated script scanning looking for easy random targets",
            "Adherence to multi-stage operational lifecycles mapped by the MITRE ATT&CK framework",
            "Stealthy movement, living-off-the-land techniques, and custom command-and-control channels"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "APTs are deliberate, well-funded, persistent, and highly targeted adversaries. Opportunistic random script scanning describes commodity malware / botnets, not APTs.",
        "topic": "Advanced Persistent Threats (APTs)"
    },
    {
        "q": "Which core tenets define Zero-Trust Architecture (ZTA)?",
        "options": [
            "Never Trust, Always Verify: Explicitly verify identity and device posture for every access request",
            "Assume Breach: Minimize blast radius, segment networks, and encrypt internal traffic",
            "Enforce Least Privilege: Provide Just-In-Time (JIT) and Just-Enough-Access (JEA)",
            "Trust all users and devices once they connect inside the physical corporate LAN or VPN",
            "Continuous evaluation of contextual telemetry through Policy Decision Points (PDP) and Policy Enforcement Points (PEP)"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Zero Trust rejects the perimeter model ('inside is safe'). It mandates explicit verification, least privilege, and continuous monitoring regardless of network location.",
        "topic": "Zero-Trust Architecture Tenets"
    },
    {
        "q": "Which vulnerabilities represent critical risks in Blockchain and Smart Contract systems?",
        "options": [
            "Re-entrancy flaws where external calls allow re-entering state-changing functions before state updates",
            "Private key compromise giving adversaries irreversible control over digital assets",
            "Oracle manipulation where external data feeds provide fraudulent pricing or event feeds",
            "51% consensus attacks compromising decentralized transaction validation",
            "Automatic injection of SQL database queries into the immutable peer-to-peer ledger"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Hard",
        "exp": "Blockchains use consensus protocols and state machines, not relational SQL engines. Re-entrancy, private key theft, oracle bribery, and 51% attacks are classic blockchain risks.",
        "topic": "Blockchain & Smart Contract Security"
    },
    {
        "q": "Which emerging security threats are associated with AI and Large Language Model (LLM) applications?",
        "options": [
            "Prompt Injection: Adversarial instructions overriding system guardrails and safety prompts",
            "Training Data Poisoning: Tampering with training datasets to introduce covert backdoors",
            "Insecure Output Handling / Cross-Plugin Privilege Abuse: LLM outputs executed as raw commands by backend agents",
            "Sensitive Data Exfiltration through model prompts and chat histories",
            "Overclocking the user's monitor refresh rate via text completion"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Prompt injection, data poisoning, insecure tool invocation, and training data privacy leaks are primary risks identified in the OWASP Top 10 for LLMs.",
        "topic": "AI & LLM Threat Vectors"
    },
    {
        "q": "Why is deploying a Honeypot valuable in an organization's defensive strategy?",
        "options": [
            "It acts as an intentional decoy system with no legitimate production business value",
            "Any connection attempt to a honeypot is inherently suspicious and represents high-fidelity telemetry",
            "It diverts adversaries away from critical assets while studying their tactics, techniques, and procedures (TTPs)",
            "It automatically patches all vulnerabilities on other production servers across the domain",
            "It provides early warning indicators of network reconnaissance or lateral movement"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Honeypots have no legitimate production users; hence any interaction generates high-confidence detection alerts without false positives. They do not patch other production servers.",
        "topic": "Honeypot Technology & Threat Intelligence"
    },
    {
        "q": "When responding to a simulated or real Ransomware attack, which actions should be prioritized in containment?",
        "options": [
            "Isolating infected endpoints from the local network (disconnecting network cables / revoking Wi-Fi access)",
            "Immediately paying the ransom demand using corporate credit cards before investigating",
            "Revoking active directory sessions and rotating compromised privileged account credentials",
            "Verifying the integrity and offline status of immutable data backups",
            "Preserving memory dumps and event logs for forensic root-cause analysis"
        ],
        "ans": [0, 2, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "exp": "Immediate containment involves network isolation, credential revocation, backup verification, and forensic preservation. Paying ransoms is discouraged as it guarantees neither decryption nor data recovery.",
        "topic": "Ransomware Containment & Incident Response"
    }
]

for item in u4_adv:
    item["unit"] = "Unit 4"
    item["part"] = 4
    item["chapter"] = 4
    item["source"] = "DU Unit 4 Advanced Concepts"
    quiz_items.append(item)

# Assign sequential IDs and uni mapping
for idx, q in enumerate(quiz_items):
    q["id"] = idx + 1
    q["uni"] = True
    q["syllabus"] = "DU Core DSE-3"

print(f"Total curated master questions: {len(quiz_items)}")

# Write to quiz-data.js
js_content = f"""// Ethical Hacking & Advanced Cybersecurity MiniBook - Master Question Bank
// University of Delhi · B.Tech CSE (DSE-3/GE-5)
// Total Curated Questions: {len(quiz_items)} (MCQ & MSQ) with In-Depth Explanations

const EH_QUIZ_DATA = {json.dumps(quiz_items, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ EH_QUIZ_DATA }};
}}
"""

with open('/Users/arpit/minibook/ethical_hacking/assets/js/quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved quiz-data.js successfully!")
