import json, re, pypdf

# Load current quiz items
with open('/Users/arpit/minibook/ethical_hacking/assets/js/quiz-data.js', 'r') as f:
    text = f.read()
    start = text.find('[')
    end = text.rfind(']') + 1
    current = json.loads(text[start:end])

print(f"Loaded {len(current)} existing questions.")

# Let's add curated questions from Activity 2 and Unit 1 Activity 1.3
more_questions = [
    # Activity 2 - Network Security
    {
        "q": "An organization permits outbound TCP port 80 and 443 from all internal endpoints to the Internet. Which security concern is most significant?",
        "options": [
            "Malicious command-and-control (C2) agents and exfiltration can masquerade as outbound HTTPS traffic",
            "Port 443 mathematically guarantees that traffic is safe and free of malware",
            "Firewalls without SSL/TLS decryption cannot inspect the encrypted payload traversing port 443",
            "Internal hosts are prevented from receiving DNS query responses",
            "Attackers can leverage outbound tunnels to bypass perimeter filtering"
        ],
        "ans": [0, 2, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Egress Filtering & C2 Detection",
        "source": "DU Activity 2 (Network Security)",
        "exp": "Outbound 443 is frequently exploited by malware for encrypted C2 communications and data exfiltration. Without deep packet inspection (DPI) with TLS decryption or proxy inspection, firewalls are blind to the payload content."
    },
    {
        "q": "What is the primary role of a Stateful Inspection Firewall compared to a Stateless Packet Filter?",
        "options": [
            "A stateful firewall maintains a dynamic state table tracking ongoing TCP handshakes and connection states",
            "A stateful firewall automatically allows inbound return traffic matching an established outbound connection",
            "A stateless packet filter inspects each packet in complete isolation based solely on static header rules",
            "A stateful firewall terminates every TCP connection and re-encrypts application data like an application gateway",
            "A stateful firewall is more vulnerable to TCP SYN flooding than a stateless filter without SYN cookies"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Stateful vs Stateless Filtering",
        "source": "DU Activity 2 (Firewalls)",
        "exp": "Stateful inspection tracks TCP sequence numbers and connection states (SYN_SENT, ESTABLISHED), allowing legitimate reply traffic automatically. Maintaining state requires memory, making stateful tables vulnerable to SYN flood resource exhaustion if SYN cookies are absent."
    },
    {
        "q": "Which of the following techniques can adversaries use to evade signature-based Network Intrusion Detection Systems (NIDS)?",
        "options": [
            "IP packet fragmentation to split malicious shellcode across multiple frame fragments",
            "Protocol obfuscation and payload encryption using TLS or custom ciphers",
            "Polymorphic shellcode that changes appearance on each generation",
            "Sending packets with completely valid RFC standard TCP checksums",
            "HTTP request encoding (e.g., URL percent-encoding, Unicode normalization bypasses)"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "IDS Evasion Techniques",
        "source": "DU Activity 2 (IDS/IPS)",
        "exp": "Adversaries evade static signatures using packet fragmentation, payload encryption, polymorphic encoders (like shikata_ga_nai), and URL/Unicode evasion. Anomaly detection and normalization engines counteract these."
    },
    {
        "q": "Why is packet normalization important in inline Intrusion Prevention Systems (IPS)?",
        "options": [
            "It reassembles fragmented packets before inspection to eliminate overlapping fragment evasion",
            "It canonicalizes URL encodings and character representations into a standard format",
            "It resolves ambiguities between how different operating systems (e.g. Windows vs Linux) interpret malformed packets",
            "It encrypts all cleartext traffic passing through the network gateway",
            "It reduces the likelihood of attackers bypassing signatures via header trickery"
        ],
        "ans": [0, 1, 2, 4],
        "type": "MSQ",
        "diff": "Hard",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Traffic Normalization in IPS",
        "source": "DU Activity 2 (IDS/IPS)",
        "exp": "Traffic normalization ensures the IPS inspects the exact same stream that the destination target OS will interpret, eliminating insertion/evasion attacks where ambiguity hides malicious bytes."
    },
    {
        "q": "Which Wireshark display filter will isolate all DNS queries originating from or destined to an authorized lab host at 192.168.1.50?",
        "options": [
            "ip.addr == 192.168.1.50 && dns",
            "ip.src == 192.168.1.50 || ip.dst == 192.168.1.50 && port 53",
            "dns && (ip.addr == 192.168.1.50)",
            "tcp.port == 53 && ip.addr == 192.168.1.50 (Note: standard DNS primarily uses UDP/53)",
            "host 192.168.1.50 and port 53 (This is a BPF capture filter, not a Wireshark display filter)"
        ],
        "ans": [0, 2],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 2",
        "part": 2,
        "chapter": 2,
        "topic": "Wireshark Display Filter Syntax",
        "source": "DU Activity 2 & Lab Packet Analysis",
        "exp": "In Wireshark display filters, `ip.addr == 192.168.1.50 && dns` isolates DNS traffic for that host. `host 192.168.1.50 and port 53` is Berkeley Packet Filter (BPF) capture syntax used in tcpdump, not Wireshark display syntax."
    },
    # Unit 1 - Reconnaissance & Kali Linux
    {
        "q": "During the reconnaissance phase, an ethical hacker identifies target IP ranges and autonomous system numbers (ASNs). Which tools and databases are appropriate for passive OSINT collection?",
        "options": [
            "Regional Internet Registries (RIR) such as ARIN, RIPE, APNIC WHOIS queries",
            "BGP routing lookup tables and Hurricane Electric BGP Toolkit",
            "Aggressive SYN scanning with Nmap against all IP addresses in the subnet",
            "Search engine dorking (Google Hacking Database / GHDB)",
            "Public Certificate Transparency logs (crt.sh)"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Passive OSINT & Network Footprinting",
        "source": "DU Activity 1.3 & 18 Sep",
        "exp": "WHOIS, BGP lookups, search engine dorking, and Certificate Transparency (crt.sh) query third-party public databases without sending any packets to target servers (passive recon). Direct Nmap port scanning is active recon."
    },
    {
        "q": "What is the primary operational difference between Nmap SYN Stealth Scan (-sS) and Nmap TCP Connect Scan (-sT)?",
        "options": [
            "-sS sends SYN and tears down half-open connections with RST before completing the 3-way handshake",
            "-sT completes the full 3-way TCP handshake (SYN -> SYN/ACK -> ACK) using the OS system call",
            "-sT requires root/administrator privileges, whereas -sS can be run by unprivileged users",
            "-sT is more likely to be logged by target application servers because connections are formally established",
            "-sS requires raw socket privileges (root/admin) on Unix systems"
        ],
        "ans": [0, 1, 3, 4],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Nmap Scan Mechanics (-sS vs -sT)",
        "source": "DU 18 Sep Activity (Kali & Nmap)",
        "exp": "SYN scan (-sS) is 'half-open': it resets connections upon receiving SYN/ACK, avoiding full session establishment and reducing application logging. It requires raw socket access (root/sudo). Connect scan (-sT) uses standard unprivileged socket calls."
    },
    {
        "q": "In an ethical hacking lab, why is it critical that virtual machines running Kali Linux and vulnerable targets operate on a 'Host-Only' or 'Internal Network' virtual adapter?",
        "options": [
            "To prevent scanning, exploit packets, or malware payloads from leaking onto the college campus network or public Internet",
            "To isolate lab traffic strictly between the attacker VM and the designated vulnerable VM",
            "Because Kali Linux cannot obtain an IP address when connected to a bridged adapter",
            "To maintain strict containment and adhere to defined scope boundaries",
            "Because Bridged adapters automatically encrypt all network traffic"
        ],
        "ans": [0, 1, 3],
        "type": "MSQ",
        "diff": "Easy",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Virtual Lab Network Containment",
        "source": "DU 18 Sep Activity (Kali Lab)",
        "exp": "Host-Only and Internal virtual network adapters provide physical containment, ensuring student scans and test payloads never traverse live production networks or internet gateways."
    },
    {
        "q": "Which components constitute the Metasploit Framework architecture?",
        "options": [
            "Exploits: Modules that take advantage of specific system vulnerabilities",
            "Payloads: Code executed on the target system upon successful exploitation (e.g. Meterpreter shell)",
            "Auxiliary modules: Scanners, fuzzers, and fingerprinting tools that do not deliver payloads",
            "Post modules: Post-exploitation modules for gathering evidence, credential dumping, and persistence validation",
            "Compilers: C compilers used to assemble operating system kernels from source"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Easy",
        "unit": "Unit 1",
        "part": 1,
        "chapter": 1,
        "topic": "Metasploit Framework Architecture",
        "source": "DU Activity 1.3 & Unit 1 Tools",
        "exp": "Metasploit modules are organized into Exploits, Payloads (Singles, Stagers, Stages), Auxiliary, Post-exploitation, Encoders, and Nops. Metasploit is not an OS compiler."
    },
    {
        "q": "What is the primary defensive purpose of conducting a Cloud Security Audit according to Syllabus Lab 7?",
        "options": [
            "Verifying that Cloud storage buckets (e.g. AWS S3, Azure Blob) are not publicly readable or writable without authorization",
            "Auditing IAM policies to ensure least-privilege role assignments and eliminating overly permissive wildcards (*)",
            "Enforcing Multi-Factor Authentication (MFA) on root and administrative cloud accounts",
            "Ensuring cloud audit logging (e.g. AWS CloudTrail, GCP Cloud Audit Logs) is enabled and protected from deletion",
            "Overclocking cloud virtual machines to double compute speeds without paying additional fees"
        ],
        "ans": [0, 1, 2, 3],
        "type": "MSQ",
        "diff": "Moderate",
        "unit": "Unit 4",
        "part": 4,
        "chapter": 5,
        "topic": "Cloud Security Auditing (Lab 7)",
        "source": "DU Syllabus Lab 7 (Cloud Audit)",
        "exp": "Cloud audits verify storage bucket ACLs, IAM least-privilege, root MFA enforcement, encryption at rest/in transit, and audit logging immutability."
    }
]

# Append new questions
start_id = len(current) + 1
for idx, q in enumerate(more_questions):
    q["id"] = start_id + idx
    q["uni"] = True
    q["syllabus"] = "DU Core DSE-3"
    current.append(q)

print(f"Total questions now: {len(current)}")

# Write updated quiz-data.js
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

print("Expanded quiz-data.js successfully!")
