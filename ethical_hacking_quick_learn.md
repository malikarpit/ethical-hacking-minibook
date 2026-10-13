# Ethical Hacking - Quick Learn Filter

A compact pass over the syllabus' highest-value ideas, with enough explanation to understand them without reading the full minibook. For the full notes and sources, see [Ethical Hacking Minibook](ethical_hacking_minibook.md).

## 8. Quick Learn Filter

Use this section when you need the important concepts quickly but still want enough context to understand the unit. It is intentionally shorter than the full notes.

### Unit 1 - Fundamentals of Ethical Hacking & Cyber Laws

**1.1 Scoping & Legal Foundations (India & Global):**
- **Ethical Hacking vs Penetration Testing:** Ethical Hacking is the broad discipline of utilizing offensive techniques under explicit legal authority to identify flaws and remediate risks. Penetration Testing (PT) is a specific, evidence-based methodology that safely validates whether identified vulnerabilities can be chained to achieve system compromise.
- **Rules of Engagement (ROE):** The operational contract specifying in-scope targets, authorized testing windows, excluded production services (no DoS), synthetic test accounts, emergency stop contacts, and evidence-handling rules. A classroom assignment does **not** grant authorization to scan or test external systems.
- **Information Technology Act, 2000 (India):**
  - **Section 43:** Civil penalties for unauthorized computer access, data downloading, copying, extraction, or introducing contaminants.
  - **Section 66:** Criminal liability (up to 3 years imprisonment and ₹5 lakh fine) for fraudulent or dishonest acts under Section 43.
  - **Section 66C & 66E:** Identity theft, credential hijacking, and privacy violations.
  - **Section 70:** Severe criminal penalties (up to 10 years imprisonment) for unauthorized access to declared Critical Information Infrastructure (CII).
- **DPDP Rules 2025:** Mandates Data Fiduciaries maintain rigorous data protection, restrict testing to synthetic data, and notify CERT-In of security incidents within prescribed mandatory timeframes (typically 6 hours).

**1.2 Hacker Taxonomy Matrix:**
| Hacker Type | Primary Motive | Authorization Status | Legal / Operational Posture |
|---|---|---|---|
| **White-Hat** | Defensive posture, remediation | Explicit written permission | Lawful; works strictly under agreed ROE and discloses vulnerabilities privately |
| **Black-Hat** | Personal gain, extortion, theft | Zero permission | Criminal; violates cyber laws through data theft, ransomware, and disruption |
| **Grey-Hat** | Curiosity, public demonstration | Absent or ambiguous | Unlawful; testing without authorization remains illegal regardless of intent |
| **Script Kiddie** | Notoriety, casual vandalism | Zero permission | Unlawful; executes automated exploits without understanding protocols |
| **Hacktivist** | Political or ideological protest | Zero permission | Unlawful; uses website defacements, data leaks, and DDoS attacks |
| **State-Sponsored APT** | Geopolitical intelligence, disruption | Sovereign backing | Covert, highly resourced multi-stage persistent cyber campaigns |

**1.3 The 5-Phase Attack & Audit Lifecycle:**
1. **Reconnaissance (Footprinting):** Collecting target intelligence. *Passive Reconnaissance* leverages public records (Whois, Shodan, Google Dorking, Netcraft, Maltego) without generating traffic to target interfaces. *Active Reconnaissance* probes DNS servers (zone transfers) and edge hosts directly.
2. **Scanning & Enumeration:** Identifying live assets and exposed services. Host discovery (ping sweeps), TCP/UDP port mapping (Nmap `-sS`), OS fingerprinting (`-O`), and service version identification (`-sV`). *Enumeration* queries specific service details: usernames, Windows shares (SMB), SNMP community strings, and banner versions.
3. **Gaining Access (Exploitation Validation):** Validating suspected vulnerabilities using minimal, non-destructive proofs-of-concept (e.g. executing benign calculator or unprivileged shell) to prove realistic risk without downtime.
4. **Maintaining Access (Persistence Analysis):** Attackers install backdoors, cron jobs, or rootkits. In ethical audits, persistence is tested strictly in isolated sandbox labs to verify endpoint detection (EDR), then completely rolled back.
5. **Covering Tracks (Evidence Management):** Attackers wipe event logs and timestomp files. Ethical practitioners do the opposite: they preserve immutable audit trails, log command timestamps, and verify SIEM detection coverage.

**1.4 Core Security Tools Ecosystem:**
| Tool | Category | Technical Role | Operational Safety Boundary |
|---|---|---|---|
| **Kali Linux** | Security OS Distro | Debian-based platform pre-loaded with 600+ penetration testing and forensic tools | Run in isolated virtual machines; isolate virtual network interfaces |
| **Metasploit** | Exploitation Framework | Modular exploit execution, auxiliary scanners, post-exploitation, and staged payloads | Exploit modules can crash unstable services; test in sandboxes first |
| **Wireshark** | Packet Sniffer | Deep packet inspection, protocol dissection, TCP stream reassembly, promiscuous captures | Captures expose cleartext passwords and private data; restrict scope |
| **Burp Suite** | Web Intercepting Proxy | HTTP/S interception, Repeater (manual request tampering), Intruder (fuzzing), Scanner | Restrict target scope strictly to authorized domains; do not intercept 3rd-party data |
| **Maltego** | OSINT Graph Engine | Transforms mapping relationships between domains, DNS records, IPs, emails, and infra | Verify data manually to eliminate false inferences; respect data privacy laws |
| **Nmap** | Port Scanner & Mapper | Host discovery, SYN stealth scan (`-sS`), OS detection, and Nmap Scripting Engine (NSE) | Aggressive scan timing (`-T4`/`-T5`) can trigger firewall rate-limiting or service drops |

**1.5 Nmap Port Scanning Mechanics & OSINT Operators:**
| Scan Type / Operator | CLI Flag / Syntax | Mechanism & Packet Behavior | Exam Relevance & Trade-off |
|---|---|---|---|
| **TCP SYN Stealth Scan** | `nmap -sS <target>` | Sends SYN; receives SYN-ACK (open) or RST (closed); sends RST immediately to abort 3-way handshake | Default root scan. Stealthy because TCP socket never establishes; evades application-layer daemon logging |
| **TCP Connect Scan** | `nmap -sT <target>` | Completes standard 3-Way Handshake via OS network socket API (SYN → SYN-ACK → ACK) | Usable without root/raw-socket privileges; slower, easily detected, and heavily logged by target firewalls |
| **UDP Port Scan** | `nmap -sU <target>` | Sends empty UDP packets; ICMP Port Unreachable (Type 3 Code 3) indicates closed; no reply indicates open/filtered | Essential for discovering DNS (53), SNMP (161), DHCP (67/68); slow due to operating system ICMP rate limiting |
| **Service Version Probe** | `nmap -sV <target>` | Interrogates open ports with signature payloads; matches banners against `nmap-service-probes` database | Identifies unpatched software versions regardless of non-standard port numbers (e.g. SSH on port 2222) |
| **OS Fingerprinting** | `nmap -O <target>` | Analyzes subtle TCP/IP stack implementation nuances (initial TTL, window size, TCP options, IP ID generation) | Determines target OS to narrow exploit payloads; can be skewed by packet scrubbers or load balancers |
| **Vulnerability NSE Script** | `nmap --script vuln <target>` | Executes Lua scripts from Nmap Scripting Engine to detect known CVE vulnerabilities | Automates non-destructive detection; high-intensity scripts can trigger intrusion alarms or destabilize legacy daemons |

- **Google Dorking (Passive OSINT Reconnaissance):**
  - `site:target.com`: Limits query scope strictly to target organization domains.
  - `filetype:pdf | env | sql | log | xlsx`: Discovers leaked credential files, environment configurations, and database dumps.
  - `intitle:"Index of /"`: Pinpoints servers with active directory indexing enabled, exposing internal file systems.
  - `inurl:admin | inurl:login | inurl:dashboard`: Uncovers unlinked administrative backdoors and login portals.

**1.6 Risk Formula & Penetration Test Report Anatomy:**
- **Risk Formula:** `Risk = Threat × Vulnerability × Impact`
- **7 Mandatory Components of a Pentest Report:**
  1. *Executive Summary:* Strategic business risk overview and prioritized leadership roadmap.
  2. *Scope & Methodology:* Explicit testing boundaries, dates, and excluded assets.
  3. *Vulnerability Title & CVSS Rating:* Standardized CVE/CWE identifier and CVSS v3.1 score.
  4. *Reproducible Steps:* Clear technical walkthrough enabling engineers to reproduce the issue.
  5. *Sanitized Evidence:* Redacted HTTP requests/responses, logs, and screenshots.
  6. *Technical Remediation:* Actionable code fixes, configuration directives, and defensive controls.
  7. *Retest & Verification:* Specific test criteria to confirm the patch works without regressions.

---

### Unit 2 - Network & System Security Essentials

**2.1 Perimeter Defense Technologies Matrix:**
| Technology | OSI Layer | Operational Placement | Core Function & Inspection Logic | Key Limitation |
|---|---|---|---|---|
| **Packet Filter (Stateless)** | Layer 3 / 4 | Perimeter router / boundary | Static rule inspection: Source/Dest IP, Port, Protocol. Evaluates packets in isolation | Cannot track connection state; vulnerable to spoofed ACK flags |
| **Stateful Firewall (SPI)** | Layer 3 / 4 | Perimeter boundary, DMZ edge | Maintains state table tracking active TCP handshakes; permits valid returning reply traffic | Cannot inspect application payloads or attacks tunneling through open ports |
| **Next-Gen Firewall (NGFW)** | Layer 3 to 7 | Enterprise edge / datacenter | Combines SPI with Deep Packet Inspection (DPI), integrated IPS, and user identity awareness | High resource overhead; TLS decryption requires deploying enterprise root CA |
| **IDS (Intrusion Detection)** | Layer 3 to 7 | Out-of-band via TAP / SPAN mirror port | Passively inspects a traffic copy; matches against signatures (Snort) or anomalies; alerts | Passive only; does not block traffic inline. Prone to false positives |
| **IPS (Intrusion Prevention)** | Layer 3 to 7 | Inline directly in traffic path | Actively inspects live packets; terminates malicious sessions (`TCP RST`) and drops packets | Single point of failure; false positives actively drop legitimate business traffic |
| **VPN (Virtual Private Network)** | Layer 3 / 4 | Gateway-to-gateway or client-to-gateway | Encrypted, authenticated tunnel across untrusted networks using IPsec (AH/ESP) or SSL/TLS | Secures transit only; does not protect against compromised endpoints at either side |
| **Forward vs Reverse Proxy** | Layer 7 | Forward: client egress. Reverse: server ingress | Forward: employee URL filtering and client caching. Reverse: SSL offload, load balancing, WAF | Misconfiguration can expose internal endpoints or create single points of failure |

**2.2 The 8-Stage VAPT Workflow Pipeline:**
`Scope & Authorize → Reconnaissance & Discovery → Network & Vulnerability Scanning → Manual Verification → Controlled Exploitation → Risk Rating & Prioritization → Remediation Report → Verification Retesting`

**2.3 Packet Sniffing & Essential Wireshark Display Filters:**
- *Promiscuous Mode:* Configures the NIC to pass all received traffic to the CPU, not just frames addressed to its MAC. On switched networks, traffic must be directed using switch port mirroring (SPAN) or ARP poisoning.
- *Essential Display Filters:*
  - `tcp.flags.syn == 1 && tcp.flags.ack == 0`: Identifies outbound TCP connection attempts, port scans, and SYN floods.
  - `dns.flags.response == 0`: Isolates outbound DNS queries to detect C2 beaconing or tunneling.
  - `http.request.method == "POST"`: Isolates cleartext web form credential submissions.
  - `ip.addr == 192.168.1.50 && tcp.port == 443`: Filters target TLS sessions.
  - `arp.duplicate-address-frame`: Flags duplicate IP claims, detecting potential ARP spoofing.
  - `tcp.analysis.retransmission`: Detects dropped packets, network congestion, or firewall filtering drops.

**2.4 Spoofing & Man-in-the-Middle (MITM) Deep-Dive:**
| Attack Type | Layer | Vulnerability & Mechanism | Defensive Counter-Measures |
|---|---|---|---|
| **ARP Spoofing / Poisoning** | L2 | ARP lacks authentication; hosts accept unsolicited gratuitous ARPs mapping gateway IP to attacker MAC | Dynamic ARP Inspection (DAI) on switches, DHCP Snooping, static ARP tables |
| **DNS Cache Poisoning** | L7 | Resolvers accept forged UDP replies containing guessed transaction IDs before authoritative reply | DNSSEC (cryptographic signing), DNS over HTTPS (DoH), randomized query IDs/ports |
| **IP Address Spoofing** | L3 | IPv4 does not validate sender IP against physical origin; used in reflected amplification DDoS | BCP 38 Ingress/Egress filtering at ISPs, Unicast Reverse Path Forwarding (uRPF) |
| **SSL/TLS Stripping (MITM)** | L4-7 | Proxy intercepts unencrypted HTTP redirect, serving cleartext HTTP to client while keeping HTTPS to server | HTTP Strict Transport Security (HSTS) with preload, Secure cookie flags |

**2.5 IPsec Protocol Suite Architecture: AH vs ESP & Modes:**
| IPsec Component | Protocol Number | Security Services Provided | NAT Compatibility & Packet Behavior |
|---|---|---|---|
| **Authentication Header (AH)** | IP Protocol 51 | Data integrity, origin authentication, anti-replay. Hashes immutable fields of outer IP header + payload | **Fails with NAT**: NAT modifies source/dest IP in outer header, invalidating the AH Integrity Check Value (ICV). Provides *zero confidentiality* (payload is cleartext) |
| **Encapsulating Security Payload (ESP)** | IP Protocol 50 | Confidentiality (AES-CBC/GCM), data integrity, origin authentication, anti-replay. Encrypts payload and appends ICV | **Compatible with NAT-Traversal (NAT-T)**: Encapsulates ESP inside UDP port 4500 packets, allowing seamless traversal through stateful NAT firewalls |
| **Transport Mode** | Host-to-Host | Protects Layer 4 payload (TCP/UDP segments) while keeping original IP header visible | Used for direct end-to-end communication between two servers. Lower header overhead; exposes IP addresses |
| **Tunnel Mode** | Gateway-to-Gateway / Remote Access | Encrypts the **entire original IP packet** (header + payload) and encapsulates it inside a **new outer IP header** | Standard for Site-to-Site VPNs. Conceals internal corporate IP addressing topologies from intermediate public routers |

**2.6 System Security: Privilege Escalation, Backdoors & Trojans:**
- **Vertical Escalation:** Elevating privilege level (e.g. unprivileged user to `root` or `SYSTEM`). Vectors: kernel exploits (Dirty COW), SUID binaries (`find / -perm -4000`), misconfigured `sudoers`, unquoted service paths, and DLL hijacking.
- **Horizontal Escalation:** Accessing peer resources at the same privilege tier (e.g. accessing another student's grade records via Insecure Direct Object References - IDOR).
- **Trojans vs Worms vs Backdoors:**
  - *Trojan:* Malicious code disguised as legitimate software. Does **not** self-replicate; relies on user execution.
  - *Worm:* Autonomous malware that actively self-replicates across networks by exploiting service flaws (e.g. WannaCry via SMB).
  - *Backdoor:* Undocumented listening service or backdoor user account providing persistent administrative access.
- **System Hardening Baseline:** Principle of Least Privilege (PoLP), SUID/SGID audit, RBAC, application allowlisting, and File Integrity Monitoring (FIM).

**2.7 Wireless Network Security & WPA/WPA2/WPA3 Matrix:**
| Protocol | Cipher & Key Size | Authentication | Vulnerability Profile | Status |
|---|---|---|---|---|
| **WEP** | RC4 (64/128-bit) | Pre-Shared Key | Flawed 24-bit IV allows key recovery within minutes via FMS / ChopChop | **Broken & Obsolete** |
| **WPA** | TKIP (128-bit) | PSK / 802.1X | 48-bit IV, but flawed Michael MIC vulnerable to Beck-Tews keystream recovery | **Deprecated** |
| **WPA2** | AES-CCMP | PSK / 802.1X Enterprise | 4-Way Handshake vulnerable: capturing Msg 1 & 2 allows offline dictionary attack on PSK | **Acceptable with $\ge 20$ Char Passphrases** |
| **WPA3** | AES-GCMP / SAE | Dragonfly Key Exchange | Replaces 4-Way Handshake with SAE; zero offline dictionary vulnerability; mandates PMF | **Modern Standard** |

**2.8 WPA2 4-Way Handshake Anatomy & Defensive Hardening:**
- **Handshake Flow:** Msg 1 (AP sends `ANonce`) → Msg 2 (Client sends `SNonce` + MIC calculated with PTK derived from PMK) → Msg 3 (AP verifies MIC and sends GTK) → Msg 4 (Client confirms encryption).
- **Attack Mechanics:** Attacker sends deauth frames (`aireplay-ng -0`) to disconnect clients. On client reconnect, attacker captures Msg 1 (`ANonce`) and Msg 2 (`SNonce` + `MIC`). Attacker runs offline dictionary matching (`aircrack-ng`) comparing candidate passphrases against the captured MIC without further network interaction.
- **Defenses:** 20+ character random passphrases, 802.1X Enterprise with EAP-TLS, disabling WPS (PIN brute-force vulnerability), VLAN segmentation, and Protected Management Frames (PMF / 802.11w).

**2.9 Wireless Attacks: Rogue AP, Evil Twin & WPS Exploits:**
| Threat Vector | Execution Mechanism | Attacker Objective | Detection & Prevention |
|---|---|---|---|
| **Rogue Access Point** | Unauthorized physical AP plugged into internal Ethernet switchport | Bypasses edge firewalls, creating an unmonitored wireless backdoor into corporate LAN | Wireless Intrusion Prevention Systems (WIPS), 802.1X port NAC, periodic RF site surveys |
| **Evil Twin AP** | Attacker soft AP broadcasting identical SSID and MAC at higher signal power | Lures victim clients to associate; serves fake captive portal to harvest credentials or malware | WIPS rogue AP detection, mutual certificate validation (EAP-TLS), client verification of BSSID |
| **WPS PIN Attack (Reaver)** | Exploits flawed WPS PIN design split into 4-digit and 3-digit halves (11,000 combinations) | Recovers AP Pre-Shared Key (PSK) in hours/minutes without requiring wordlist cracking | **Disable WPS permanently** in AP firmware; enable WPS lockouts after failed PIN attempts |
| **Deauthentication Flood** | Injects unencrypted 802.11 deauth frames (`aireplay-ng -0`) spoofing AP source MAC | Forces client disconnections, causes DoS, and prompts immediate reconnect to capture handshake | Enable **Protected Management Frames (PMF / 802.11w)**; upgrade to WPA3 which mandates PMF |

### Unit 3 - Essentials

| Flaw | Root cause | Strong core defense |
|---|---|---|
| SQL injection | User data becomes SQL syntax | Parameterized queries; least-privilege database account |
| XSS | Untrusted data is executed as script in a trusted origin | Context-aware output encoding, safe DOM handling, sanitization when needed, CSP as defense-in-depth |
| CSRF | Browser sends an unwanted authenticated state-changing request | Server-validated CSRF tokens, appropriate SameSite cookies, Origin/Referer checks, no state changes on GET |

Authentication = who are you? Authorization = what are you allowed to do? OWASP Top 10 is an awareness guide, not a full audit standard. Check which edition your instructor expects; current supplementary list is OWASP 2025.

API quick checklist: authentication, per-object authorization, minimal data, schema validation, rate limits, TLS, secret protection, logging, and version/deprecation discipline. Mobile clients are not trusted enforcement points; enforce authorization server-side.

### Unit 4 - Essentials

- Response flow: prepare → detect/analyze → contain → eradicate → recover → learn/improve.
- Encryption protects confidentiality; hashes summarize data and do not decrypt; MACs authenticate using shared secrets; signatures verify a message/digest using a public key; certificates bind identity to a public key under a trust model.
- Symmetric cryptography is efficient for bulk data; asymmetric mechanisms support key establishment/signatures; real protocols commonly combine them.
- APT = sustained targeted activity by a capable adversary; it is a descriptive term, not proof of a specific actor.
- Blockchain security also depends on keys, consensus, smart contracts, oracles, bridges, and governance.
- Zero trust means access decisions based on identity/context and least privilege, not automatic trust inside a perimeter.
- AI risks include prompt injection, data exposure, poisoning, insecure tool access, and over-trusting output. IoT risks include default credentials, stale firmware, exposed services, and weak segmentation.

### Practical quick checklist

Before practical work, write down target, permission, scope, network isolation, allowed activity, stop conditions, and evidence-handling rules. In the report, include observations and limitations—not merely screenshots of tool output.

---

---

[Back to the full minibook](ethical_hacking_minibook.md)
