# Ethical Hacking - Last-Minute Revision Filter

Use this in the final review session before your Delhi University examination. For complete explanations, laboratory walkthroughs, and syllabus mapping, see [Ethical Hacking Minibook](ethical_hacking_minibook.md).

---

## 9. Last-Minute Revision Filter (Units 1 & 2 Focus)

Master the high-frequency 2-mark definitions, core comparison matrices, rapid memory flow diagrams, and the 12 exam traps that cost students marks in university examinations.

---

### 9.1 High-Yield 2-Mark Definitions

#### Unit 1: Fundamentals of Ethical Hacking & Cyber Laws

1. **Ethical Hacking:** Authorized, legally scoped security testing applying offensive methodologies to uncover vulnerabilities and deliver verified remediation to the system owner.
2. **Penetration Testing (PT):** A structured, evidence-based validation methodology that safely exploits selected weaknesses to prove chained attack paths and realistic business impact.
3. **Vulnerability Assessment (VA):** A breadth-first systematic process that identifies, categorizes, and inventories potential flaws across assets without active exploitation or proof-of-concept verification.
4. **Security Audit:** A formal, systematic evaluation assessing an organization's systems against established regulatory standards (e.g., ISO 27001, PCI-DSS) or written internal security policies.
5. **Rules of Engagement (ROE):** The formal binding contract defining in-scope targets, excluded assets, authorized testing timeframes, emergency stop contacts, and permissible attack intensity.
6. **Passive Reconnaissance (OSINT):** Intelligence gathering using publicly available sources (Whois, Shodan, Google Dorking, DNS) without sending packets directly to target network interfaces.
7. **Active Footprinting:** Directly interrogating target systems (DNS zone transfers, ICMP sweeps, port probes); generates logged traffic and strictly requires prior written authorization.
8. **Google Dorking:** Leveraging advanced search engine operators (e.g. `site:`, `filetype:env`, `intitle:"Index of /"`) to uncover exposed configurations, leaks, and unlinked portals.
9. **Enumeration:** Active querying of discovered services to extract granular target metadata: user accounts, Windows network shares (SMB), SNMP community strings, and daemon versions.
10. **Vulnerability (CVE):** A weakness in software design, protocol implementation, system configuration, or human operation that can be triggered or exploited to violate security policy.
11. **Exploit:** A sequence of commands, proof-of-concept software, or weaponized payload that takes advantage of a specific vulnerability to cause unintended execution.
12. **Payload:** The actual malicious or diagnostic code executed on a target machine post-exploitation, such as delivering a reverse command shell or remote management agent.
13. **Metasploit Meterpreter:** An advanced, dynamically extensible payload executing entirely in-memory (RAM) via DLL injection, leaving zero forensic trace on target hard disks to evade antivirus.
14. **Zero-Day Vulnerability:** A software flaw actively known to researchers or adversaries for which no official vendor patch currently exists, leaving systems entirely vulnerable to exploit.
15. **Attack Surface:** The aggregate total of all accessible entry points, open network ports, web APIs, running services, and human channels through which an adversary can attempt a breach.
16. **IT Act 2000 — Section 43:** Prescribes civil liability and monetary compensation for unauthorized access, data copying, downloading, extracting, or introducing computer contaminants.
17. **IT Act 2000 — Section 66:** Prescribes criminal penalties (up to 3 years imprisonment and ₹5 lakh fine) for committing any unauthorized act under Section 43 dishonestly or fraudulently.
18. **IT Act 2000 — Section 66C & 66E:** Criminalizes identity theft (Section 66C: fraudulent use of electronic signatures/passwords) and privacy violation (Section 66E: publishing private images without consent).
19. **IT Act 2000 — Section 70 (Protected Systems):** Imposes up to 10 years imprisonment for unauthorized access to declared Critical Information Infrastructure (CII) affecting national security, economy, or public health.
20. **DPDP Rules 2025 (Digital Personal Data):** Mandates Data Fiduciaries maintain rigorous data protection, restrict testing strictly to synthetic data, and report cybersecurity incidents to CERT-In within 6 hours.
21. **CERT-In:** The national nodal agency in India responsible for cybersecurity incident response, vulnerability coordination, threat advisories, and mandatory incident reporting directives.
22. **CVSS v3.1:** An open industry standard evaluating vulnerability severity on a 0.0 to 10.0 scale across Base, Temporal, and Environmental metric dimensions.
23. **Defense-in-Depth:** A holistic security architecture implementing multiple redundant defensive layers (perimeter, network, endpoint, application, data) so no single failure leads to total compromise.

#### Unit 2: Network & System Security, VAPT & Wireless

24. **Stateless Packet Filter:** A Layer 3/4 firewall that inspects individual packets against static rule sets (IP, port, protocol) without tracking ongoing connection state.
25. **Stateful Packet Inspection (SPI):** A firewall that maintains an active dynamic state table tracking established TCP 3-way handshakes, automatically permitting legitimate returning reply packets.
26. **Next-Generation Firewall (NGFW):** A multi-layer appliance combining SPI with Deep Packet Inspection (DPI), integrated inline IPS, application-level awareness, and TLS decryption inspection.
27. **Intrusion Detection System (IDS):** An out-of-band monitoring system that passively inspects a traffic copy via TAP or SPAN port to generate alerts on signature matches or anomalies without blocking traffic.
28. **Intrusion Prevention System (IPS):** An inline network appliance placed directly in the live traffic path that inspects packets in real-time and actively drops malicious frames or resets connections (`TCP RST`).
29. **Network TAP vs SPAN Port:** A physical TAP is a hardware splitter delivering an unadulterated 100% traffic copy; a SPAN port mirrors traffic via switch software and may drop frames under high CPU load.
30. **Virtual Private Network (VPN):** An authenticated, encrypted logical tunnel (e.g., IPsec, OpenVPN, WireGuard) safeguarding communications across untrusted public networks.
31. **IPsec Authentication Header (AH):** IP Protocol 51 providing data integrity, origin authentication, and anti-replay across the full packet; provides zero confidentiality and breaks across NAT.
32. **IPsec ESP (Protocol 50):** Provides symmetric data confidentiality (AES), origin authentication, integrity, and anti-replay; compatible with NAT via UDP port 4500 (NAT-T).
33. **IPsec Transport Mode:** Host-to-host mode that encrypts only the Layer 4 payload while preserving original IP headers intact; lower overhead, but exposes endpoint addresses.
34. **IPsec Tunnel Mode:** Gateway-to-gateway mode encrypting the entire original IP packet and prepending a new outer IP header; standard for Site-to-Site enterprise VPNs.
35. **Forward Proxy Server:** An intermediary positioned at client network egress, enforcing corporate URL filtering, content caching, client identity masking, and outbound inspection.
36. **Reverse Proxy Server:** An intermediary deployed in front of web servers handling public ingress traffic, SSL/TLS termination, server load balancing, and WAF security filtering.
37. **Promiscuous Mode:** A NIC configuration instructing the controller to pass all received frames to the OS for inspection, regardless of whether destination MAC matches the host.
38. **Packet Sniffing:** Capturing, decoding, and analyzing raw data frames traversing a network segment using protocol analyzers such as Wireshark or `tcpdump`.
39. **Address Resolution Protocol (ARP):** A stateless Layer 2 broadcast protocol dynamically resolving a known IPv4 address to a physical hardware Media Access Control (MAC) address.
40. **ARP Cache Poisoning / Spoofing:** Broadcasting forged gratuitous ARP replies mapping the default gateway IP to the attacker's MAC, enabling Man-in-the-Middle traffic redirection.
41. **Dynamic ARP Inspection (DAI):** A managed switch security feature that validates incoming ARP packets against a trusted DHCP Snooping database, dropping invalid forged mappings.
42. **DNS Cache Poisoning:** Injecting forged DNS query replies with guessed Transaction IDs into a recursive resolver's cache before authentic nameservers respond, redirecting user domains.
43. **DNSSEC:** Cryptographic extension to DNS providing origin authentication and data integrity via digital signatures (RRSIG), preventing cache poisoning.
44. **IP Address Spoofing:** Forging the source IP in an IPv4 header to disguise packet origin; mitigated using BCP 38 ingress/egress filtering and Unicast Reverse Path Forwarding (uRPF).
45. **SSL / TLS Stripping:** An MITM attack where a proxy intercepts the initial unencrypted HTTP redirect, serving cleartext HTTP to the victim while bridging HTTPS to the authentic server.
46. **HSTS (Strict Transport Security):** A response header instructing web browsers to strictly enforce HTTPS connections only, completely neutralizing SSL stripping attacks.
47. **Vertical Privilege Escalation:** Elevating permissions from an unprivileged user account to administrative control (e.g. `root` or `SYSTEM`) via kernel flaws or misconfigurations.
48. **Horizontal Privilege Escalation:** Accessing data, resources, or capabilities belonging to a peer account at the same privilege tier (e.g. Alice accessing Bob's profile via IDOR flaws).
49. **SUID / SGID File Permissions:** Special Unix permission bits (`4000` / `2000`) enabling executable binaries to run with the file owner's privileges (e.g. root) rather than the user's.
50. **Trojan Horse:** Malicious code disguised as legitimate, benign software; relies on social engineering to trick users into executing it and never self-replicates.
51. **Computer Worm:** An autonomous malware program that actively self-replicates across networks by exploiting unpatched network daemon flaws without human intervention.
52. **Backdoor:** A hidden mechanism, listening service, or undocumented administrative credential providing covert, persistent access that bypasses standard authentication.
53. **WEP IV Collision Flaw:** Flawed 802.11 standard using a short 24-bit cleartext Initialization Vector (IV) with RC4, resulting in rapid IV reuse and mathematical key recovery in minutes.
54. **WPA2 4-Way Handshake:** Cryptographic exchange establishing PTK/GTK keys; capturing Msg 1 (ANonce) and Msg 2 (SNonce + MIC) allows offline dictionary attacks against the Pre-Shared Key.
55. **802.11 Deauthentication Attack:** Transmitting spoofed management frames with an AP's MAC address to abruptly disconnect clients, forcing a reconnection to capture the 4-Way Handshake.
56. **WPA3 SAE (Dragonfly Handshake):** Replaces 4-Way Handshake with Simultaneous Authentication of Equals; provides forward secrecy and total immunity to offline dictionary cracking.
57. **Rogue Access Point:** An unauthorized wireless AP plugged directly into an internal corporate Ethernet switchport without authorization, bypassing perimeter firewalls.
58. **Evil Twin Access Point:** An attacker-operated AP broadcasting the identical SSID and MAC address of a trusted network at high signal power to harvest victim credentials via fake portals.

#### Units 3 & 4: Quick Bridge Definitions

59. **SQL Injection (SQLi):** Untrusted input alters the structure of an SQL query; mitigated via parameterized prepared statements.
60. **Cross-Site Scripting (XSS):** Untrusted script executes within a victim's browser session under the application's origin; mitigated via contextual output encoding.
61. **Cross-Site Request Forgery (CSRF):** Inducing an authenticated browser into submitting unwanted requests; mitigated via anti-CSRF tokens & SameSite cookies.
62. **Incident Response (NIST SP 800-61):** Structured 6-phase lifecycle: Prepare → Detect & Analyze → Contain → Eradicate → Recover → Lessons Learned.
63. **Cryptographic Hash:** A deterministic one-way mathematical function producing a fixed digest (e.g. SHA-256) for data integrity verification.
64. **Digital Signature:** Private-key encrypted hash verifiable by the sender's public key, guaranteeing authenticity, integrity, and non-repudiation.
65. **Digital Certificate (X.509):** An electronic credential digitally signed by a Certificate Authority (CA) binding an entity's identity to a public key.
66. **Zero-Trust Architecture:** Security model rejecting implicit perimeter trust; every request is dynamically authenticated and authorized under least privilege.

---

### 9.2 Most-Tested University Differentiations (Units 1 & 2 Focus)

#### 1. Vulnerability Assessment (VA) vs Penetration Testing (PT) vs Security Audit
- **Vulnerability Assessment:** Broad, automated discovery identifying known weaknesses (Nessus/OpenVAS). Zero exploitation; high breadth, low validation.
- **Penetration Testing:** Deep, controlled exploitation of selected flaws to prove chained attack paths and business impact. High validation, requires signed ROE.
- **Security Audit:** Formal checklist evaluation assessing architecture against statutory or compliance baselines (ISO 27001, PCI-DSS).

#### 2. White-Hat vs Black-Hat vs Grey-Hat Hackers
| Attribute | White-Hat | Black-Hat | Grey-Hat |
|---|---|---|---|
| **Authorization** | Explicit written permission (ROE) | Zero authorization | Absent or ambiguous |
| **Motivation** | Defense, risk remediation | Financial extortion, sabotage | Curiosity, public disclosure |
| **Legality** | Lawful under Indian IT Act | Criminal under §43/§66 | Illegal regardless of intent |

#### 3. Passive Reconnaissance (OSINT) vs Active Footprinting
- **Passive Reconnaissance:** Uses public databases (Whois, Shodan, Google Dorks, Netcraft, Maltego) without generating packets to target boundaries. Undetectable by target firewalls; legally safe.
- **Active Footprinting:** Directly probes target systems (DNS zone transfer requests, ICMP sweeps, port scans). Generates logged traffic on target firewalls; requires explicit written contract.

#### 4. Nmap TCP SYN Stealth Scan (`-sS`) vs TCP Connect Scan (`-sT`)
- **TCP SYN Scan (`-sS`):** Half-open scanning. Sends SYN; receives SYN-ACK (open) or RST (closed); immediately transmits RST to abort handshake before completion. Stealthy; evades daemon logs; requires root privileges.
- **TCP Connect Scan (`-sT`):** Completes full 3-Way Handshake (SYN → SYN-ACK → ACK). Usable by unprivileged users; slow, noisy, and heavily logged by target application servers.

#### 5. Stateless Packet Filter vs Stateful Inspection (SPI) vs Next-Generation Firewall (NGFW)
| Firewall Type | OSI Layer | Inspection Logic | Critical Vulnerability |
|---|---|---|---|
| **Stateless Filter** | L3 / L4 | Static IP/Port rules per packet | Spoofed ACK flags, fragmented attacks |
| **Stateful (SPI)** | L3 / L4 | Tracks TCP state table sessions | Blind to application-layer attacks (ports 80/443) |
| **NGFW** | L3 to L7 | Deep Packet Inspection + inline IPS | High resource cost; requires TLS root CA certificates |

#### 6. Intrusion Detection System (IDS) vs Intrusion Prevention System (IPS)
- **Placement & Traffic Path:** IDS sits *out-of-band* (connected to switch SPAN mirror or TAP port); IPS sits *inline* directly in the live cable path.
- **Response Mode:** IDS is *passive* (generates log alerts); IPS is *active* (drops malicious packets, injects `TCP RST` frames).
- **Operational Failure Impact:** IDS failure produces zero business impact; IPS failure or false positive directly disrupts legitimate corporate network operations.

#### 7. IPsec Authentication Header (AH) vs Encapsulating Security Payload (ESP)
- **AH (IP Protocol 51):** Provides data integrity, origin authentication, and anti-replay. Hashes outer IP header + payload. **Zero confidentiality** (cleartext payload). **Fails across NAT** because NAT alters the IP header.
- **ESP (IP Protocol 50):** Provides confidentiality (symmetric encryption via AES), data integrity, origin authentication, and anti-replay. Does not hash outer IP header. **Fully compatible with NAT-Traversal (NAT-T)** via UDP port 4500.

#### 8. IPsec Transport Mode vs Tunnel Mode
- **Transport Mode:** Host-to-host direct secure link. Encrypts only the Layer 4 payload while keeping the original IP header visible. Lower overhead; exposes communicating endpoint addresses.
- **Tunnel Mode:** Gateway-to-gateway (Site-to-Site VPN). Encrypts the **entire original IP packet** (header + payload) and encapsulates it inside a **new outer IP header**. Completely hides internal network topology.

#### 9. Forward Proxy Server vs Reverse Proxy Server
- **Forward Proxy:** Sits at client network egress. Acts on behalf of internal clients to enforce URL filtering, employee content restrictions, caching, and client anonymity.
- **Reverse Proxy:** Sits in front of internal web servers at server ingress. Acts on behalf of servers to handle public traffic load balancing, SSL/TLS termination, and Web Application Firewall (WAF) filtering.

#### 10. ARP Spoofing vs DNS Spoofing vs IP Address Spoofing
| Vector | OSI Layer | Mechanics | Core Defense |
|---|---|---|---|
| **ARP Spoofing** | Data Link (L2) | Sends forged gratuitous ARP replies mapping gateway IP to attacker MAC | Dynamic ARP Inspection (DAI) & DHCP Snooping |
| **DNS Spoofing** | Application (L7) | Injects forged DNS query responses with guessed transaction IDs | DNSSEC & DNS over HTTPS (DoH) |
| **IP Spoofing** | Network (L3) | Forges source IP in IPv4 packet headers to mask origin or amplify DDoS | BCP 38 Ingress/Egress filtering & uRPF |

#### 11. Vertical Privilege Escalation vs Horizontal Privilege Escalation
- **Vertical Escalation:** Gaining higher permission tier (e.g., local user elevating to `root` or `SYSTEM`). Vectors: kernel exploits (Dirty COW), vulnerable SUID binaries, misconfigured `sudoers` (`NOPASSWD`).
- **Horizontal Escalation:** Accessing resources belonging to a peer account at the same permission tier (e.g., student A viewing student B's exam grades via Insecure Direct Object References - IDOR).

#### 12. Trojan Horse vs Computer Worm vs Backdoor
- **Trojan Horse:** Disguised as legitimate software. Requires user execution to run. Does **not** self-replicate.
- **Computer Worm:** Autonomous program that **actively self-replicates across networks** by exploiting unpatched service flaws (e.g. WannaCry via SMB) without human intervention.
- **Backdoor:** Undocumented administrative entry point, listening port, or backdoor account providing persistent covert remote access.

#### 13. WEP vs WPA vs WPA2 vs WPA3 Wireless Protocol Standards
| Protocol | Cipher | Authentication | Vulnerability | Status |
|---|---|---|---|---|
| **WEP** | RC4 (64/128-bit) | Open / PSK | 24-bit IV collision; rapid key recovery | **Broken & Obsolete** |
| **WPA** | TKIP (128-bit) | PSK / 802.1X | Michael MIC flaw; Beck-Tews attack | **Deprecated** |
| **WPA2** | AES-CCMP | PSK / 802.1X | 4-Way Handshake vulnerable to offline dictionary attack | **Acceptable (≥20 chars)** |
| **WPA3** | AES-GCMP | SAE (Dragonfly) | Immune to offline dictionary cracking; mandates PMF | **Modern Standard** |

#### 14. Rogue Access Point vs Evil Twin Attack
- **Rogue AP:** An unauthorized hardware AP physically attached to an internal corporate network switchport by an employee or intruder, bypassing perimeter firewalls.
- **Evil Twin:** An attacker-controlled software AP broadcasting the identical SSID and MAC address of a legitimate Wi-Fi network at higher signal strength to trick users into associating and harvesting credentials.

#### 15. SQLi vs XSS vs CSRF (Unit 3 Bridge)
- **SQLi:** Targets server-side database query parser → Prevent with parameterized prepared statements.
- **XSS:** Targets client-side browser document parser → Prevent with context-aware output encoding.
- **CSRF:** Targets implicit trust in automatic browser session cookies → Prevent with anti-CSRF tokens and SameSite cookies.

#### 16. Encryption vs Hash vs Digital Signature (Unit 4 Bridge)
- **Encryption:** Two-way reversible with proper key → Protects confidentiality.
- **Hash:** One-way irreversible digest → Verifies data integrity.
- **Digital Signature:** Asymmetric private-key signed digest → Guarantees authenticity, integrity, and non-repudiation.

---

### 9.3 Essential Memory Diagrams (Reproduce in Exam)

#### 1. The 5-Phase Ethical Hacking & Penetration Testing Lifecycle (Unit 1):
```text
[ Written Authorization & Signed Rules of Engagement (ROE) ]
                             ↓
[ Phase 1: Reconnaissance (Passive OSINT & Active Footprinting) ]
                             ↓
[ Phase 2: Scanning & Enumeration (Nmap -sS, Services, OS Fingerprinting) ]
                             ↓
[ Phase 3: Gaining Access (Controlled Exploitation Proof-of-Concept) ]
                             ↓
[ Phase 4: Maintaining Access (Persistence Analysis & Privilege Escalation) ]
                             ↓
[ Phase 5: Evidence Management & Defensive Reporting (Sanitized POCs) ]
                             ↓
[ Remediation Support & Retest Verification (Formal Engagement Closure) ]
```

#### 2. The Complete 8-Stage VAPT Workflow Pipeline (Unit 2):
```text
1. Scoping & Legal Sign-Off (IP Ranges, Excluded Systems, Authorized Window)
          ↓
2. Asset Discovery & Reconnaissance (Passive OSINT, ICMP/ARP sweeps)
          ↓
3. Port Scanning & Service Enumeration (Nmap -sS -sV, Banner Grabbing)
          ↓
4. Automated Vulnerability Scanning (Nessus, OpenVAS breadth scans)
          ↓
5. Manual Verification & False Positive Elimination (Discard Type I errors)
          ↓
6. Controlled Exploitation Validation (Minimal Proof-of-Concept verification)
          ↓
7. Comprehensive Reporting & CVSS Rating (Actionable technical fixes)
          ↓
8. Remediation Retesting & Formal Sign-Off (Validate patches in production)
```

#### 3. Enterprise Defense-in-Depth Network Perimeter Architecture (Unit 2):
```text
[ Public Untrusted Internet ]
            ↓
[ External Edge Router (Stateless BCP 38 Ingress Filtering) ]
            ↓
[ Perimeter Firewall (Next-Gen SPI Firewall + WAF) ]
            ↓
    +-------+-------+
    |               |
    ↓               ↓
[ DMZ Subnet ]  [ Inline IPS (Active Packet Drops & TCP RST) ]
(Web/Mail Proxies)  ↓
    |           [ Internal Stateful Firewall ]
    |               ↓
    +---------> [ Corporate Internal LAN (VLANs, 802.1X NAC, DAI) ]
                    ↓
                [ Secure Core Vault (DB Servers, Least Privilege Access) ]
```

#### 4. WPA2 4-Way Handshake & Deauthentication Capture Sequence (Unit 2):
```text
Attacker sends Spoofed Deauthentication Frame (aireplay-ng -0)
                         ↓
Legitimate Client Disconnects and Reconnects to AP
                         ↓
[Msg 1]  AP → Client:     ANonce (Random Authenticator Nonce)
                         ↓
[Msg 2]  Client → AP:     SNonce + MIC  <--- [ATTACKER CAPTURES Msg 1 & 2 via airodump-ng]
                         ↓
[Msg 3]  AP → Client:     Install PTK + GTK + MIC
                         ↓
[Msg 4]  Client → AP:     Confirmation ACK
                         ↓
Attacker runs Offline Dictionary Attack (aircrack-ng / hashcat mode 22000)
comparing candidate passwords against captured MIC with zero network interaction!
```

#### 5. ARP Cache Poisoning Man-in-the-Middle (MITM) Interception Flow (Unit 2):
```text
      [ Attacker Host (MAC: AA:AA) ]
        /                        \
Forged Gratuitous ARP        Forged Gratuitous ARP
"Gateway IP is at AA:AA"     "Victim IP is at AA:AA"
      /                            \
     ↓                              ↓
[ Victim Host ] <=== Poisoned ===> [ Default Gateway ]
(All outbound traffic routed        (All inbound replies routed
 through Attacker NIC in             through Attacker NIC before
 Promiscuous Mode)                   forwarding)
```

#### 6. IPsec Packet Encapsulation: Transport vs Tunnel Mode (Unit 2):
```text
Original IP Packet:
[ Original IP Header ] [ TCP/UDP Header ] [ Data Payload ]

IPsec ESP Transport Mode (Host-to-Host):
[ Original IP Header ] [ ESP Header ] [ Encrypted TCP/UDP + Payload ] [ ESP Trailer ] [ ESP Auth ]

IPsec ESP Tunnel Mode (Gateway-to-Gateway Site-to-Site VPN):
[ New Outer IP Header ] [ ESP Header ] [ Encrypted: Original IP Hdr + TCP/UDP + Payload ] [ ESP Trailer ] [ ESP Auth ]
```

#### 7. NIST SP 800-61 Incident Response Lifecycle (Unit 4 Bridge):
```text
[ 1. Preparation (Hardening & Playbooks) ]
                ↓
[ 2. Detection & Analysis (SIEM, Triage, Scope) ]
                ↓
[ 3. Containment (Network Isolation & Quarantining) ]
                ↓
[ 4. Eradication (Malware Removal & Root Cause Patch) ]
                ↓
[ 5. Recovery (Restoration from Clean Backups & Monitoring) ]
                ↓
[ 6. Post-Incident Lessons Learned (Audit & Control Updates) ]
```

#### 8. Secure Web Request Architecture Flow (Unit 3 Bridge):
```text
Browser → [HTTPS / TLS 1.3] → Reverse Proxy / WAF
         → Server-Side Authentication & RBAC Authorization
         → Input Validation & Business Logic
         → Parameterized Database Query (Prepared Statement)
         → Context-Aware Output Encoded Response (with HSTS & CSP)
```

---

### 9.4 12 Critical Exam Traps to Avoid (Units 1 & 2 Focus)

1. **Trap 1: Thinking Good Intentions Make Hacking Lawful:** Under Indian law (IT Act, 2000 Section 43/66), accessing or scanning any computer system without written authorization is strictly illegal. Claiming "helpful research motives" or "benign white-hat intentions" provides zero legal protection without a signed contract.
2. **Trap 2: Assuming a Port Scan or Banner Grabbing "Proves" an Exploit:** An open port or software version banner reported by Nmap is merely an operational clue, not proof of vulnerability. System banners can be forged, backported with custom patches, or honeypots. Controlled proof-of-concept validation is necessary.
3. **Trap 3: Equating Trojan Horses with Computer Worms:** A Trojan does NOT self-replicate across network subnets by definition. It relies entirely on social engineering and disguise to induce human execution. Autonomous self-propagation across network services without user intervention is the hallmark of worms.
4. **Trap 4: Believing Hiding the SSID or MAC Filtering Secures Wi-Fi:** Hiding the SSID provides zero security. Access points still broadcast probe requests and beacon headers containing the BSSID, and active client handshakes reveal the hidden SSID instantly in tools like Airodump-ng. MAC addresses are transmitted in plaintext and easily spoofed.
5. **Trap 5: Confusing Passive Out-of-Band IDS with Inline IPS Placements:** Never write that an IDS blocks traffic or that an IPS sits on a mirror port. An IDS sits out-of-band via switch SPAN or TAP ports and passively generates alerts. An IPS sits inline directly on the live network wire and actively terminates packets.
6. **Trap 6: Assuming IPsec Authentication Header (AH) Encrypts Data Payloads:** AH provides zero confidentiality. The payload travels in cleartext. AH provides data integrity, origin authentication, and anti-replay only. To achieve encryption and confidentiality, Encapsulating Security Payload (ESP) must be deployed.
7. **Trap 7: Believing IPsec AH Operates Seamlessly Across NAT:** AH includes the outer IP header in its cryptographic hash calculation. When an intermediate router performs Network Address Translation (NAT), it rewrites the source or destination IP, immediately invalidating the AH Integrity Check Value (ICV) and causing packet drops.
8. **Trap 8: Confusing Vertical and Horizontal Privilege Escalation:** Vertical escalation means gaining elevated permissions (e.g., standard user → `root` / `SYSTEM`). Horizontal escalation means accessing unauthorized records belonging to a peer account at the same permission tier (e.g., user Alice viewing user Bob's private records via IDOR).
9. **Trap 9: Thinking Increasing WEP RC4 Key Size to 128-bit Solves IV Collision Flaws:** WEP's fatal vulnerability is not the RC4 key size, but its short 24-bit cleartext Initialization Vector (IV). In a busy network, IV collisions occur every $2^{24} \approx 16.7$ million packets (within minutes), allowing complete key extraction regardless of key length.
10. **Trap 10: Confusing Client-Side Form Validation with Security:** Never write that browser JavaScript validation secures an endpoint. Attackers easily bypass client code using intercepting proxies (Burp Suite) or `curl`. Server-side input validation and parameterized database queries are strictly mandatory.
11. **Trap 11: Believing CORS Prevents Cross-Site Request Forgery (CSRF):** CORS restricts a web page from reading the response of a cross-origin HTTP request; it does NOT prevent the browser from transmitting the state-changing POST request. Anti-CSRF tokens and SameSite cookie flags are required.
12. **Trap 12: Claiming a Cryptographic Hash can be "Decrypted":** Hashes are strictly one-way irreversible mathematical functions, not symmetric or asymmetric encryption. They cannot be decrypted with any key. Rainbow tables and dictionary tools test candidate preimages; they never "decrypt" hashes.

---

[Back to the full minibook](ethical_hacking_minibook.md)
