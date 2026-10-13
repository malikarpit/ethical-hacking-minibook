# Engineering Minibook: Ethical Hacking and Advanced Cybersecurity

**Course:** Ethical Hacking and Advanced Cybersecurity (DSE-3/GE-5)  
**Course code shown in syllabus:** EC (1273) - 17.01.2025  
**Credits:** 4 (3 Lecture + 1 Practical; 3L, 0T, 1P)  
**Prerequisite:** Fundamentals of Cybersecurity  
**Format:** Markdown-first study resource; designed for laptop reading, quick mobile review, and later conversion to PDF.

> **How to use this book**
> - **Learn mode:** Read the unit notes and examples to understand the concepts.
> - **Quick Learn filter:** Read the “Must Know” summaries, comparison tables, and key flows when time is limited.
> - **Last-Minute filter:** Use the final revision sheet, definitions, and self-test questions immediately before an exam.
> - **Practical mode:** Perform only in a lab you own or have explicit written permission to test. Prefer intentionally vulnerable training applications and isolated virtual machines.

---

## Table of Contents

1. [Syllabus Map and Study Strategy](#1-syllabus-map-and-study-strategy)
2. [Safety, Authorization, and Lab Rules](#2-safety-authorization-and-lab-rules)
3. [Unit 1 - Fundamentals of Ethical Hacking](#3-unit-1---fundamentals-of-ethical-hacking)
4. [Unit 2 - Network and System Security](#4-unit-2---network-and-system-security)
5. [Unit 3 - Application and Web Security](#5-unit-3---application-and-web-security)
6. [Unit 4 - Advanced Cybersecurity Concepts](#6-unit-4---advanced-cybersecurity-concepts)
7. [Practical Workbook: Seven Syllabus Experiments](#7-practical-workbook-seven-syllabus-experiments)
8. [Quick Learn Filter](#8-quick-learn-filter)
9. [Last-Minute Revision Filter](#9-last-minute-revision-filter)
10. [Question Bank and Self-Test](#10-question-bank-and-self-test)
11. [Glossary](#11-glossary)
12. [Study Plan](#12-study-plan)
13. [References and Version Notes](#13-references-and-version-notes)

---

## 1. Syllabus Map and Study Strategy

### 1.1 What the official syllabus contains

The uploaded syllabus sets these learning outcomes:

1. Understand and apply ethical-hacking and penetration-testing principles.
2. Detect and exploit vulnerabilities in a controlled and responsible manner.
3. Use advanced tools and frameworks for ethical hacking and network defense.
4. Conduct forensic investigations and malware analysis to identify breach root causes.
5. Formulate and implement advanced cybersecurity strategies to protect critical infrastructure.

The listed objectives are to introduce ethical-hacking techniques; discuss advanced cybersecurity, malware analysis, and threat hunting; introduce Kali Linux, Metasploit, and Burp Suite; develop ethical responsibility and legal compliance; and provide controlled attack-simulation and defense experience.

| Unit | Syllabus topics | What to be able to do |
|---|---|---|
| 1. Fundamentals of Ethical Hacking | Definition, scope, importance, cyber laws and ethics, hacker types, phases, Kali Linux, Metasploit, Wireshark | Define ethical hacking; distinguish roles; describe the lifecycle and basic tools |
| 2. Network and System Security | Firewalls, IDS/IPS, VPNs, proxies, VAPT, sniffing, spoofing, MITM, privilege escalation, backdoors, Trojans, wireless security, WPA/WPA2 | Explain network defenses and attack concepts; identify evidence and mitigations |
| 3. Application and Web Security | SQL injection, XSS, CSRF, OWASP Top 10, secure coding, APIs/web services, mobile security | Recognize common application flaws and explain preventive controls |
| 4. Advanced Cybersecurity Concepts | Detection/response, cryptography, signatures/certificates, APTs, blockchain security, zero trust, AI/IoT threats | Explain response stages, trust mechanisms, and emerging attack surfaces |
| Practical component | Reconnaissance with Maltego; controlled exploitation; custom scripts in sandbox; secure code analysis; honeypot; ransomware simulation and response; cloud security audits | Document a scoped lab, reproduce observations safely, explain findings, and recommend fixes |

**Important syllabus distinction:** the document names seven practical themes but says the instructor will design the experiments/mini-projects. It does **not** provide a fixed numbered list of formal lab experiments beyond those themes. The practical workbook below is therefore a suggested safe interpretation, not a claim about the instructor's exact lab sheet.

### 1.2 Exam answer pattern

For most theory questions, use this structure:

1. **Definition** - a precise one- or two-sentence meaning.
2. **Purpose or principle** - why it exists or how it works.
3. **Process or types** - numbered stages or a small comparison table.
4. **Example** - preferably a neutral or sandboxed example.
5. **Risks and defenses** - explain both the weakness and its mitigation.

For a “differentiate between” question, compare the same attributes on both sides. For a scenario question, identify the asset, threat, weakness, evidence, impact, and control. For a tool question, state the tool's purpose, input, output, limitations, and authorization boundary.

### 1.3 Suggested learning order

Learn the foundations first: networking basics, HTTP, Linux fundamentals, authentication/authorization, and the CIA triad. Then progress from observing traffic, to assessing configuration, to understanding web flaws, to interpreting alerts and responding to incidents. Do not start by memorizing commands; understand what evidence a command produces and what that evidence can and cannot prove.

---

## 2. Safety, Authorization, and Lab Rules

Ethical hacking is not defined by the tool used. It is defined by **authorization, scope, controlled methods, proportionality, and responsible reporting**.

### 2.1 Rules before every test

- Obtain explicit permission from the system owner. A class assignment is not automatically permission to test a university, public website, neighbor's Wi-Fi, or cloud account.
- Define the in-scope assets, allowed techniques, testing window, data-handling rules, rate limits, and stop conditions.
- Prefer local intentionally vulnerable applications, private virtual networks, and synthetic data.
- Do not access, download, modify, or disclose real users' data. Stop if unexpected sensitive information appears and follow the agreed reporting procedure.
- Do not run destructive, persistence, stealth, or denial-of-service actions against real systems.
- Keep evidence minimal: timestamps, redacted screenshots, sanitized logs, and reproducible observations.
- Restore the lab after testing and record what changed.

### 2.2 Authorization and scope example

**Good scope statement:** “Assess the local training web app at `http://127.0.0.1:3000` in a disposable VM from 14:00-15:00. Test authentication, input validation, and access-control behavior using synthetic accounts. Do not scan external hosts or run denial-of-service tests. Stop and notify the instructor if data outside the test dataset appears.”

This example illustrates a boundary; it is not permission to test any other target.

### 2.3 Ethical decision checklist

Before a test, ask:

1. Who owns the system, and where is written permission?
2. Is the exact target explicitly in scope?
3. Could the action affect availability, privacy, safety, or third parties?
4. Is there a safer method that answers the same question?
5. How will I stop, preserve evidence, and report the result?

If any answer is unclear, pause and ask the system owner or instructor.

### 2.4 Legal-awareness note for India

The course asks students to understand cyber laws and ethical responsibility. The Information Technology Act, 2000 is an important Indian legal reference, and India has also notified the Digital Personal Data Protection Rules, 2025. The exact obligations, effective dates, amendments, and applicability can depend on the provision and current notifications. Treat this section as a study pointer, not legal advice; consult official sources and your instructor for the provisions expected in the course. Never assume that calling an action “research” makes unauthorized access lawful.

Official starting points are linked in [References and Version Notes](#13-references-and-version-notes).

---

## 3. Unit 1 - Fundamentals of Ethical Hacking

### 3.1 Definition, scope, and importance

**Ethical hacking** is an authorized security assessment in which a tester uses techniques associated with attackers to discover weaknesses, validate their impact within agreed limits, and report corrective actions. The aim is risk reduction, not access for its own sake.

**Penetration testing** is a scoped, evidence-based assessment that attempts to validate whether identified weaknesses can be combined into a meaningful security impact. It is one activity within a broader security program. A penetration test is not the same as a complete security audit, and a clean result does not prove that a system is perfectly secure.

**Vulnerability assessment** emphasizes finding, classifying, and prioritizing weaknesses. **Penetration testing** goes further by safely validating selected weaknesses and attack paths. The terms overlap in practice, but they do not mean exactly the same thing.

**Scope** may include networks, endpoints, applications, APIs, wireless environments, cloud configurations, identities, or processes. The authorization must identify which of these are included and the permitted intensity of testing.

**Why it matters:** an assessment can reveal exposed services, weak access controls, insecure defaults, missing patches, vulnerable code, and gaps in logging before they are abused. The value comes from actionable evidence and remediation, not from the number of tools or vulnerabilities reported.

### 3.2 Hacker categories

| Type | Typical intent | Permission | Important note |
|---|---|---|---|
| White-hat | Improve security | Authorized | Reports findings to the owner under agreed rules |
| Black-hat | Unauthorized or harmful gain | Not authorized | May steal, disrupt, extort, or misuse access |
| Grey-hat | Mixed or ambiguous motives; may test without permission | Often absent or unclear | A claimed helpful intent does not replace authorization |

These labels are simplified descriptions, not legal classifications. Judge a real activity using authorization, actions, intent, impact, and applicable law rather than relying only on a label.

### 3.3 Ethical hacking lifecycle

The syllabus lists five phases: **reconnaissance, scanning, gaining access, maintaining access, and covering tracks**. These are common descriptions of an attacker's lifecycle. In ethical work, later phases must be translated into safe, expressly permitted validation activities; stealth or evidence destruction is not an ethical-testing objective.

1. **Reconnaissance:** collect information about the in-scope target. Passive reconnaissance uses public or already-provided data; active reconnaissance interacts with the target and needs explicit scope.
2. **Scanning and enumeration:** identify reachable hosts, ports, services, versions, and exposed resources. Results are clues, not proof of vulnerability.
3. **Gaining access / exploitation validation:** in a lab, confirm whether a hypothesized weakness is real, using the least intrusive method that demonstrates impact.
4. **Maintaining access / persistence concept:** attackers try to retain access. A safe assessment typically documents the risk or validates a pre-approved persistence control in an isolated lab, then removes all changes. Do not deploy persistence on systems without explicit approval.
5. **Covering tracks concept:** attackers try to avoid detection or remove evidence. Defenders study this phase to improve logging, integrity protection, and detection. Ethical testers should preserve test evidence and disclose actions instead of deleting logs.

**After the phases:** analyze evidence, rate risk, report reproducible findings, agree remediation, retest fixes, and close the engagement.

### 3.4 Reconnaissance, scanning, and enumeration

These activities build a progressively more specific picture of the authorized environment.

- **Reconnaissance:** “What can be learned about the target and its public footprint?”
- **Scanning:** “Which in-scope systems or services appear reachable?”
- **Enumeration:** “What specific resources, accounts, shares, versions, or service details are exposed?”

A disciplined tester records the source, timestamp, method, confidence, and scope for each observation. Avoid turning uncertain service banners or scanner labels into definitive claims without verification.

**Maltego** is named in the syllabus practical for relationship-oriented reconnaissance and open-source intelligence (OSINT). It can map relationships between entities such as domains, organizations, emails, and infrastructure. Its output can contain stale, inferred, or false relationships; verify important results and do not collect personal information unnecessarily.

### 3.5 Core tools

| Tool | Main use | Typical evidence | Limitation / safety point |
|---|---|---|---|
| Kali Linux | Security-testing operating-system distribution with many tools | Environment for labs and assessment workflows | It is not a vulnerability by itself; use a dedicated VM and control network access |
| Metasploit Framework | Organize and validate selected exploit modules and post-exploitation checks in authorized labs | Module output, session details, proof of controlled validation | Modules may crash services or alter state; understand the module and target before use |
| Wireshark | Capture and inspect network packets | Protocol fields, connection timing, DNS/HTTP/TLS metadata, retransmissions | Captures can contain sensitive information; limit scope and protect files |
| Burp Suite | Intercept and inspect browser-to-web-app requests; test application behavior | Requests, responses, cookies, parameters, findings | Configure browser proxy and target scope carefully; do not intercept third-party traffic |
| Maltego | OSINT and relationship visualization | Entity graph and source-linked observations | Relationships may be inferred; confirm findings and respect privacy |

### 3.6 Vulnerability, exploit, payload, risk, and impact

- **Vulnerability:** a weakness in design, implementation, configuration, or operation.
- **Exploit:** a method or action that takes advantage of a vulnerability.
- **Payload:** the data or action delivered as part of an exploit or test. In a safe demonstration, choose a harmless proof that does not damage data.
- **Threat:** a potential cause of harm, such as a malicious actor, accidental action, or environmental event.
- **Risk:** the possibility and consequence of a threat exploiting a weakness, considered in context.
- **Impact:** the resulting harm to confidentiality, integrity, availability, safety, finances, or trust.
- **Mitigation:** a control that reduces likelihood or impact.
- **Remediation:** fixing the underlying issue, such as correcting access control or patching vulnerable software.

A scanner's “critical” label should be reviewed in context: exposure, exploitability, privileges needed, data sensitivity, business impact, compensating controls, and confidence all matter.

### 3.7 Reporting a finding

A useful finding includes:

- **Title and identifier:** concise description of the weakness.
- **Affected asset:** exact in-scope host, endpoint, component, or version.
- **Severity and rationale:** explain likelihood and impact rather than copying a score blindly.
- **Evidence:** timestamped, redacted request/response or log snippet sufficient to reproduce the issue.
- **Reproduction conditions:** prerequisites and steps in the authorized lab.
- **Impact:** realistic consequence, including what has *not* been demonstrated.
- **Fix and verification:** recommended change and retest procedure.

Avoid overstating impact. “A role check appears missing on this test endpoint” is more defensible than “the entire organization is compromised” unless the evidence actually supports the latter.

### 3.8 Unit 1 - Quick check

You should be able to explain ethical hacking vs malicious hacking, vulnerability assessment vs penetration testing, passive vs active reconnaissance, the five syllabus phases, and the roles and limits of Kali Linux, Metasploit, Wireshark, Burp Suite, and Maltego.

---

## 4. Unit 2 - Network and System Security

### 4.1 Network security overview

Network security protects communications and connected systems against unauthorized access, manipulation, and disruption. It combines technical controls, secure configuration, monitoring, procedures, and trained users.

A basic network path may include a client, local network, router, firewall, proxy, VPN gateway, application server, and database. Security controls are most effective when their responsibilities are clear and logs can be correlated across the path.

### 4.2 Firewalls, IDS, IPS, VPNs, and proxy servers

| Technology | Primary purpose | Placement / behavior | Key limitation |
|---|---|---|---|
| Firewall | Enforce traffic rules using addresses, ports, protocols, connection state, and sometimes application context | At hosts, network boundaries, or cloud boundaries | A permitted connection can still carry malicious application data |
| IDS (Intrusion Detection System) | Detect suspicious behavior and alert | Monitors host or network activity | May produce false positives/negatives; alerting alone does not block traffic |
| IPS (Intrusion Prevention System) | Detect and block selected suspicious traffic | Inline or integrated with enforcement | Bad rules may disrupt legitimate traffic; encrypted traffic limits visibility unless lawfully inspected |
| VPN (Virtual Private Network) | Create an authenticated, encrypted tunnel over an untrusted network | Client-to-site or site-to-site | Protects the tunnel, not a compromised endpoint or every action after traffic exits it |
| Proxy server | Intermediary for client requests; can filter, log, cache, or mediate access | Forward proxy for clients; reverse proxy in front of services | Misconfiguration can expose data or create a bypass; TLS inspection has privacy implications |

**Remember:** a firewall enforces policy; an IDS detects and alerts; an IPS can actively block; a VPN protects a tunnel; a proxy intermediates application requests. These products can overlap, but their core roles differ.

### 4.3 Vulnerability Assessment and Penetration Testing (VAPT)

VAPT is commonly used as an umbrella expression for weakness discovery and controlled validation. A safe workflow is:

1. **Plan and authorize:** define assets, exclusions, credentials, time window, and stop conditions.
2. **Discover:** inventory exposed assets and services in scope.
3. **Assess:** compare versions/configurations and application behavior against known weaknesses and expected security requirements.
4. **Validate:** manually verify important results in the least intrusive authorized way; avoid unnecessary exploitation.
5. **Prioritize:** consider severity, exposure, likelihood, impact, and business context.
6. **Report:** provide evidence, limitations, and specific fixes.
7. **Remediate and retest:** confirm that the fix works and does not introduce a new problem.

**False positive:** the tool reports a weakness that is not present or not applicable. **False negative:** a real weakness is missed. Manual validation, multiple evidence sources, and clear limitations improve confidence.

### 4.4 Packet sniffing

**Packet sniffing** is observing network packets as they traverse an interface or capture point. It is useful for troubleshooting and security monitoring, but captures can include credentials, session tokens, personal data, and internal architecture.

Common analysis goals include identifying DNS lookups, connection attempts, protocol use, unusual traffic volume, retransmissions, unexpected cleartext protocols, and connections to suspicious endpoints. Modern HTTPS protects application contents in transit, although metadata such as destination IP addresses, timing, and sometimes DNS information may remain visible depending on the network and protocol.

A capture is a snapshot of observed traffic, not a complete record of everything that occurred. Capture location, filters, dropped packets, encryption, and clock accuracy affect conclusions.

**Wireshark display-filter examples** (for an authorized capture):

```text
# DNS packets
 dns

# TCP traffic on port 443
 tcp.port == 443

# Traffic involving a chosen private lab host
 ip.addr == 192.168.56.10

# Failed TCP connection setup indicators may be inspected with TCP flags
 tcp.flags.syn == 1 && tcp.flags.ack == 0
```

Replace example addresses with your own lab addresses. Display filters only change which captured packets are shown; they do not change the traffic on the network.

### 4.5 Spoofing and man-in-the-middle (MITM)

**Spoofing** is forging or impersonating an identity or source attribute. Examples include IP spoofing, ARP spoofing, DNS spoofing, and email sender spoofing. Whether spoofing is useful to an attacker depends on the protocol and the defenses present.

**Man-in-the-middle (MITM)** occurs when an adversary positions themselves between communicating parties and can observe or alter a communication that the parties believe is direct or protected. It can be enabled by network misconfiguration, compromised trust, malicious access points, or certificate-validation failures.

| Threat | Conceptual mechanism | Defensive controls |
|---|---|---|
| ARP spoofing on a local network | False address-resolution messages may redirect local traffic | Segmentation, switch protections where available, encrypted application protocols, monitoring for inconsistent mappings |
| DNS spoofing | A client is given an incorrect address resolution | Trusted resolvers, DNS security controls where appropriate, HTTPS certificate validation, monitoring |
| IP spoofing | A packet carries a forged source address | Ingress/egress filtering, anti-spoofing controls, protocol-specific authentication |
| MITM against a web session | An intermediary observes or changes traffic | HTTPS/TLS correctly configured, certificate validation, secure Wi-Fi, strong endpoint security, avoiding certificate-warning bypasses |

Encryption helps only when authentication and validation are correct. “Traffic is encrypted” does not automatically mean that the endpoint, certificate, DNS response, or account is trustworthy.

### 4.6 System security: privilege escalation, backdoors, and Trojans

**Privilege escalation** is obtaining permissions higher than those originally available. It is commonly divided into:

- **Vertical escalation:** moving from a lower privilege level to a higher one, such as a standard user to administrator/root.
- **Horizontal escalation:** accessing another user's resources at a similar privilege level.

Common contributing weaknesses include excessive permissions, unpatched software, insecure service configurations, hard-coded secrets, weak authorization checks, and exposed credentials.

Defenses include least privilege, prompt patching, secure service permissions, multifactor authentication, credential hygiene, application allowlisting where suitable, and monitoring of unusual privilege changes.

A **backdoor** is a hidden or undocumented way to bypass normal authentication or controls. It may be intentionally introduced or left behind by compromise. A **Trojan horse** is software that appears legitimate or useful but performs an undisclosed harmful action. A Trojan is not defined simply by self-replication; that property is more associated with worms.

Look for unusual startup entries, unexpected services, suspicious binaries, abnormal outbound connections, altered security settings, and unexplained account or privilege changes. A single indicator should be investigated rather than treated as automatic proof of malware.

### 4.7 Wireless network security and WPA/WPA2

Wireless security protects the radio link and the authentication process between a client and an access point. Key concepts:

- **Open Wi-Fi:** lacks link-layer authentication/encryption for client traffic; use caution and end-to-end encryption.
- **WEP:** obsolete and insecure; should not be used.
- **WPA:** transitional historical technology; not the modern preference.
- **WPA2:** commonly uses AES-CCMP; security depends on configuration, credential strength, and implementation.
- **WPA3:** newer design with stronger protections in supported configurations; compatibility and implementation still matter.

Practical defensive checklist:

- Use WPA2-AES or WPA3 where supported; avoid legacy insecure modes.
- Use a long, unique Wi-Fi passphrase and change default administrator credentials.
- Keep router firmware updated and disable unneeded management exposure.
- Use guest-network isolation for untrusted devices.
- Disable WPS if it is not needed and the router's implementation poses risk.
- Prefer modern encryption and certificate validation for application traffic.

**Course wording:** the syllabus explicitly mentions “WPA/WPA2 Cracking.” Study the threat model and defensive audit process. Any password-resilience demonstration should occur only on an access point you own or have written permission to test, in an isolated lab with synthetic credentials. Do not capture or attack neighboring or campus Wi-Fi.

### 4.8 Unit 2 - Quick check

Be ready to differentiate firewall/IDS/IPS, describe a VAPT workflow, explain sniffing vs spoofing vs MITM, distinguish vertical vs horizontal privilege escalation, and explain how wireless configuration and passphrase quality affect security.

---

## 5. Unit 3 - Application and Web Security

### 5.1 How a web application works

A basic web application includes a browser or mobile client, HTTP(S) requests, a web server/API, business logic, identity and session handling, and possibly a database or other services. Many flaws arise when the server trusts client-supplied data or fails to enforce a rule on every relevant request.

Useful concepts:

- **Authentication:** establishes who or what the user is.
- **Authorization:** decides what the authenticated identity may do.
- **Session management:** maintains authenticated state between requests.
- **Input validation:** checks that data conforms to expected type, size, and format.
- **Output encoding:** renders untrusted data safely in its destination context.
- **Parameterized query:** keeps SQL code separate from data values.
- **Security logging:** records security-relevant events without needlessly exposing secrets.

### 5.2 SQL injection (SQLi)

**Definition:** SQL injection occurs when untrusted input changes the intended structure or meaning of an SQL query.

**Root cause:** unsafe query construction, often by concatenating user-controlled strings into SQL syntax. The issue is not merely that an input contains a quote; it is that input can become part of the query's code rather than remaining a data value.

**Potential impact:** authentication bypass, unauthorized reading or modification of data, or—in some configurations—further database or application compromise. Actual impact depends on the query, database permissions, architecture, and safeguards.

**Conceptual example (intentionally unsafe pattern):**

```python
# UNSAFE: do not use this pattern with untrusted input
query = "SELECT * FROM users WHERE username = '" + username + "'"
```

**Safer pattern using a parameterized query (illustrative Python DB-API style):**

```python
# Safer: keep SQL structure separate from user-controlled values
cursor.execute(
    "SELECT * FROM users WHERE username = %s",
    (username,)
)
```

Placeholder syntax varies by database driver; follow that driver's documentation. Use an ORM correctly where suitable. Parameterization is the main defense for values; allowlists are appropriate for dynamic identifiers such as a selectable sort column because identifiers cannot always be bound as ordinary values. Use least-privilege database accounts, generic error messages, and security testing as additional safeguards.

### 5.3 Cross-Site Scripting (XSS)

**Definition:** XSS occurs when an application causes untrusted data to execute as script in another user's browser under the application's origin.

Common categories:

- **Stored XSS:** untrusted content is saved (for example, in a profile or comment) and later delivered to users.
- **Reflected XSS:** the payload comes from the current request and is included unsafely in the response.
- **DOM-based XSS:** client-side JavaScript processes data unsafely and changes the document in a way that executes script.

**Impact:** actions may be performed in the context of a victim's session, page content can be changed, or data visible to the page can be exposed. Modern browser protections and cookie settings can reduce some impacts but do not replace secure coding.

**Defenses:** context-aware output encoding; safe DOM APIs; avoiding dangerous HTML/JavaScript sinks; sanitizing HTML when HTML input is a required feature; Content Security Policy as defense in depth; secure cookie attributes; and tests across the relevant output contexts.

Validation and encoding are different. Validation asks whether a value fits business rules; output encoding ensures it is interpreted as data—not executable syntax—at the point where it is rendered.

### 5.4 Cross-Site Request Forgery (CSRF)

**Definition:** CSRF tricks a user's browser into sending an unwanted request to a site where that user is already authenticated. The risk is especially relevant when browsers automatically attach authentication cookies.

**Example scenario:** a user is logged into a vulnerable account-management site and visits a separate malicious page. That page causes the browser to submit a state-changing request that the application accepts because it does not verify that the request originated from an intended interaction.

**Defenses:** anti-CSRF tokens tied to the session/request; `SameSite` cookie settings appropriate to the use case; checking `Origin` or `Referer` where suitable; requiring re-authentication or confirmation for sensitive actions; and avoiding state changes on GET requests. CORS is not a general-purpose CSRF defense, and a CSRF token must be validated server-side.

**XSS vs CSRF:** XSS injects script execution into a trusted origin. CSRF abuses the browser's authenticated request behavior to trigger an action. They have different root causes and controls.

### 5.5 OWASP Top 10 framework

OWASP Top 10 is an awareness and prioritization resource for important web application security risks. It is not a complete security standard, checklist, or substitute for threat modeling and testing.

The course PDF does not state which edition is required. Use your lecturer's prescribed edition for exam terminology. As a current supplement, the official **OWASP Top 10:2025** categories are:

1. **A01:2025 - Broken Access Control**
2. **A02:2025 - Security Misconfiguration**
3. **A03:2025 - Software Supply Chain Failures**
4. **A04:2025 - Cryptographic Failures**
5. **A05:2025 - Injection**
6. **A06:2025 - Insecure Design**
7. **A07:2025 - Authentication Failures**
8. **A08:2025 - Software or Data Integrity Failures**
9. **A09:2025 - Security Logging & Alerting Failures**
10. **A10:2025 - Mishandling of Exceptional Conditions**

This list reflects the official 2025 edition, which was released after the date printed on your syllabus. Some teaching materials may use the 2021 edition, whose category names and ordering differ. Do not silently mix versions in a version-specific exam answer.

### 5.6 Secure coding practices

1. **Validate on the server:** client-side checks improve usability but can be bypassed.
2. **Use parameterized queries:** never create SQL by concatenating user input into query text.
3. **Enforce access control for every request:** do not rely only on hiding a button or route in the UI.
4. **Use least privilege:** application and database components should have only the permissions they need.
5. **Handle errors safely:** do not reveal stack traces, secrets, internal paths, or query details to end users.
6. **Protect secrets:** keep credentials out of source code and public repositories; use secret-management facilities and rotate exposed credentials.
7. **Use secure defaults:** restrict debug mode, unnecessary services, permissive CORS, and default accounts.
8. **Keep dependencies current:** review advisories, lock dependency versions responsibly, and maintain an update process.
9. **Authenticate and manage sessions securely:** protect session identifiers; invalidate sessions on logout and relevant account changes.
10. **Log security events:** record enough for investigation while excluding passwords, access tokens, and unnecessary personal data.
11. **Test negative cases:** confirm that unauthorized users cannot read, modify, or delete another user's data.
12. **Review design and code:** automated tools help, but human review is needed for business-logic flaws.

### 5.7 APIs and web services

An API exposes operations and data for clients or other services. Common risks include broken object-level authorization, weak authentication, excessive data exposure, mass assignment, unrestricted resource consumption, unsafe error handling, and trusting upstream services without validation.

**API security checklist:**

- Authenticate the caller where required and authorize each object/action on the server.
- Validate schema, type, size, and allowed values.
- Return only the fields needed by that caller.
- Apply rate limits, quotas, pagination limits, and request-size limits.
- Use TLS for transport and sound token lifecycle practices.
- Avoid putting secrets in URLs; URLs often enter logs and browser history.
- Validate webhooks and service-to-service requests; protect against replay where relevant.
- Version APIs, document authentication requirements, and deprecate insecure endpoints.
- Log denied and unusual access, while redacting credentials and personal information.

For REST-like services, inspect methods, status codes, headers, tokens, and object identifiers within an approved lab. Do not infer that an endpoint is secure merely because it returns `401` or `403` for one test case; test the full authorization matrix.

### 5.8 Mobile application security

Mobile apps introduce risks in local storage, app permissions, inter-process communication, deep links, transport security, API authorization, and reverse engineering. A mobile app is not a trusted enforcement point: business-critical authorization must be performed server-side.

Good practices include:

- Store secrets using platform-provided secure storage where appropriate; avoid plain-text tokens and passwords.
- Request the minimum permissions required and explain their purpose.
- Validate deep links and exported components; do not trust parameters passed between apps.
- Use TLS correctly and do not disable certificate validation in production.
- Avoid embedding long-lived API secrets in the app package.
- Check debug settings, backup behavior, logs, and sensitive screenshots.
- Apply server-side authorization even when the UI hides restricted functions.
- Test on a dedicated emulator/test device using synthetic accounts and approved endpoints.

### 5.9 Unit 3 - Quick check

Know the definition, root cause, impact, and defense for SQLi, XSS, and CSRF; explain authentication vs authorization; explain why OWASP Top 10 is a guide rather than a complete standard; and list core API/mobile security controls.

---

## 6. Unit 4 - Advanced Cybersecurity Concepts

### 6.1 Incident detection and response

**Incident detection** identifies evidence that a security event may be occurring. **Incident response** coordinates analysis and action to limit harm, preserve evidence, remove the cause, and restore safe operations.

A practical response cycle can be described as:

1. **Prepare:** define roles, contacts, playbooks, backups, logging, exercises, and decision authority.
2. **Detect and analyze:** correlate alerts, identify affected assets, validate the event, and estimate scope and severity.
3. **Contain:** limit spread and ongoing harm while preserving evidence and business-critical services when feasible.
4. **Eradicate:** remove the cause, such as malicious access, compromised credentials, or an exploited weakness.
5. **Recover:** restore clean systems, validate integrity, monitor for recurrence, and return services carefully.
6. **Learn and improve:** conduct a retrospective, update controls, and track corrective actions.

This is a useful teaching model; actual frameworks may group stages differently. Current NIST guidance (SP 800-61 Rev. 3, published in April 2025) integrates incident response into broader cybersecurity risk management rather than treating it as an isolated post-event task.

**Evidence to correlate:** authentication logs, endpoint telemetry, DNS/proxy/firewall logs, cloud audit logs, application logs, process/network events, and user reports. Use synchronized clocks where possible. Preserve originals, record who handled evidence, and make analysis copies.

### 6.2 Monitoring and threat hunting

**Monitoring** continuously observes telemetry for known patterns, rules, or behavioral signals. **Threat hunting** is a hypothesis-driven search for suspicious activity that may not have triggered existing alerts.

A hunt example: “Could a compromised account be accessing an unusual number of files outside normal working hours?” Define the data sources, time window, expected baseline, query logic, results, and limitations. A hunt produces leads requiring investigation; a statistical anomaly is not automatic proof of malicious behavior.

**Detection engineering basics:**

- Define a specific behavior and the evidence that would indicate it.
- Use sources with adequate coverage and timestamps.
- Measure false positives and false negatives.
- Test detections against benign cases and controlled simulations.
- Document the response expected when an alert fires.
- Review whether an attacker could evade the logic or whether normal behavior could trigger it.

MITRE ATT&CK is a knowledge base that organizes observed adversary tactics and techniques. It helps analysts describe behaviors and map detections, but it is not a complete prediction of every attack or a checklist that every organization must implement in full.

### 6.3 Cryptographic foundations

Cryptography supports confidentiality, integrity, authentication, and non-repudiation-related workflows, but a cryptographic algorithm alone cannot guarantee all of them.

- **Encryption:** transforms readable plaintext into ciphertext under a key, so an unauthorized party should not recover the plaintext without the appropriate key.
- **Hash function:** maps data to a fixed-length digest. A secure cryptographic hash is designed to make collisions and preimages computationally difficult. A hash is not encryption and cannot be “decrypted.”
- **Message Authentication Code (MAC):** uses a shared secret to provide integrity and authenticity to parties sharing that secret.
- **Digital signature:** uses a private key to sign a message or digest; a corresponding public key verifies the signature. It can support authenticity and integrity, but identity binding depends on key management and trust.
- **Certificate:** binds an identity or subject to a public key and is signed by a certificate authority (CA) or otherwise trusted under a defined scheme.
- **Key management:** includes generation, storage, access control, rotation, revocation, backup, and destruction. Weak key management can undermine strong cryptographic algorithms.

### 6.4 Symmetric vs asymmetric cryptography

| Aspect | Symmetric | Asymmetric (public-key) |
|---|---|---|
| Keys | Same shared secret key for encryption/decryption or a shared-key construction | Public/private key pair |
| Strength | Efficient for large amounts of data | Useful for key establishment, signatures, and identity mechanisms; generally more computationally expensive |
| Main challenge | Securely sharing and managing the secret | Protecting the private key and establishing trust in the public key |
| Examples | AES for encryption; HMAC for message authentication | RSA or elliptic-curve schemes for selected encryption/signature/key-establishment use cases |

Real systems often use **hybrid cryptography**: public-key mechanisms help establish or authenticate session keys, while symmetric cryptography protects bulk traffic. Modern protocols should use well-reviewed libraries and current protocol configurations rather than custom cryptographic designs.

### 6.5 Encryption, signatures, and certificates

**Encryption answers:** “Who can read this data?”  
**Hashing answers:** “Does this digest match this input?” (It does not prove who created the input.)  
**Digital signatures answer:** “Does this signature verify under this public key, and has the signed content remained unchanged?”  
**Certificates answer:** “Why should I trust that this public key belongs to this identity under this trust system?”

A signature is not the same as encryption. A certificate does not itself encrypt a file. A valid certificate is meaningful only when the client checks the chain, name/identity, validity, purpose, revocation/status where appropriate, and relevant policy.

**TLS at a high level:** a client and server negotiate cryptographic parameters, authenticate the server (and sometimes the client), establish session keys, and use symmetric encryption with integrity protection for application traffic. Exact TLS protocol details evolve; rely on current secure configurations and library defaults.

### 6.6 Advanced Persistent Threats (APTs)

An **Advanced Persistent Threat (APT)** is commonly used to describe a capable, well-resourced adversary conducting sustained, targeted activity. The exact term is used differently by different organizations; do not treat “APT” as proof of a particular actor or nation-state.

Typical behavior may include initial access, execution, persistence, privilege escalation, discovery, credential access, lateral movement, collection, command and control, and exfiltration. These are possible behaviors, not a mandatory sequence.

**Detection and mitigation:**

- Maintain asset and identity inventories; monitor high-value systems.
- Enforce MFA and least privilege; protect privileged accounts.
- Patch exposed services and reduce unnecessary attack surface.
- Centralize and retain appropriate logs; alert on suspicious identity, process, and network behavior.
- Segment critical systems and restrict outbound paths.
- Protect backups and test restoration.
- Hunt across endpoint, identity, network, email, and cloud telemetry.
- Prepare an incident response plan and practice it.
- Use threat intelligence as context, not as a substitute for local evidence.

### 6.7 Blockchain security

A blockchain is a replicated data structure in which records are linked cryptographically and accepted according to a consensus protocol. Security depends not only on hashes but also on consensus, key custody, software, smart contracts, governance, and external dependencies.

Common risks:

- **Private-key compromise:** an attacker can act as the key holder.
- **Smart-contract flaws:** incorrect logic, access-control errors, re-entrancy-like interaction bugs, arithmetic or validation issues, or unsafe assumptions about external calls.
- **Consensus and network attacks:** attacks on validators/miners or assumptions about the cost and control of consensus resources.
- **Oracle risk:** a contract may trust incorrect external data.
- **Bridge risk:** assets or messages crossing chains may rely on fragile validation or privileged operators.
- **Governance risk:** concentrated control may allow malicious or unexpected changes.

A tamper-evident ledger does not automatically make entries true, applications bug-free, wallets safe, or private data confidential. “Immutable” does not mean “secure by default.”

### 6.8 Zero-Trust Architecture

Zero trust is a security approach that avoids granting trust solely because a user or device is inside a traditional network perimeter. Access is evaluated using identity, device health, resource sensitivity, policy, and contextual signals, with continuous verification as appropriate.

Core ideas:

- Verify explicitly using available identity and context signals.
- Apply least-privilege access and limit the duration/scope of permissions.
- Assume a breach is possible; segment systems and limit lateral movement.
- Monitor access continuously and revoke or adjust access when risk changes.
- Protect data, workloads, devices, and identities—not only network boundaries.

Zero trust is not a single product and does not mean “trust nothing under any circumstances.” It is an architecture and policy model implemented through several controls.

### 6.9 Emerging AI and IoT threats

**AI-related risks** include prompt injection against AI applications, sensitive-data exposure, model or training-data poisoning, insecure tool/plugin access, model theft, abusive automation, and over-trusting generated output. AI output can be inaccurate and must not be treated as authoritative without verification. Systems that let a model call tools need strict authorization, input/output boundaries, logging, and human approval for high-impact actions.

**IoT risks** include default or hard-coded credentials, delayed updates, weak device identity, exposed services, insecure APIs, poor segmentation, unsafe update mechanisms, and devices that cannot support modern security controls. IoT can create physical as well as digital safety consequences.

**Defensive principles for both:** minimize privileges and exposed services, authenticate devices and services, maintain updates, isolate networks, protect secrets, validate inputs, log relevant activity, and establish a clear support/decommissioning lifecycle. For AI systems, also limit access to tools and data and test adversarial and misuse cases. For IoT, consider physical access and safety constraints.

### 6.10 Unit 4 - Quick check

Be able to describe incident response; distinguish encryption, hashing, MACs, signatures, and certificates; explain the threat pattern and defenses for APTs; and state what blockchain and zero trust can and cannot guarantee.

---

## 7. Practical Workbook: Seven Syllabus Experiments

These are proposed lab sheets aligned to the seven themes in the course PDF. Use instructor-provided instructions where they differ. Each lab should produce a brief report with scope, setup, steps, observations, evidence, limitations, and remediation.

### Lab 1 - Reconnaissance using Maltego

**Objective:** Build a small, evidence-backed OSINT graph for a deliberately selected lab organization/domain or a synthetic case provided by the instructor.

**Environment:** Maltego or an equivalent relationship-mapping tool; browser; note-taking template. Use a domain owned by you, a lab domain, or a target expressly approved by the instructor.

**Procedure:**

1. Write the target and authorization boundary before collecting anything.
2. Add the permitted seed entity (for example, your lab domain).
3. Run a small number of approved transforms that retrieve public DNS/domain or organization relationships.
4. Record each important result's source, time, and confidence.
5. Verify representative findings against the original source.
6. Mark inferred and unverified relationships as such; do not present them as facts.
7. Remove unnecessary personal data from screenshots and the report.

**Deliverables:** graph screenshot, evidence table, three observations, confidence/limitations, and suggested exposure-reduction steps.

**Success criteria:** all collection stays in scope; the graph is interpretable; claims link back to evidence; speculative relations are labelled.

### Lab 2 - Ethical hacking lifecycle in a controlled lab

**Objective:** Observe how discovery, assessment, validation, and reporting fit together without affecting real systems.

**Environment:** A disposable private VM network with an instructor-approved intentionally vulnerable target. Disable bridging to external networks unless explicitly required and authorized.

**Procedure:**

1. Record VM names, private IP addresses, network mode, snapshot, and test scope.
2. Identify which target is reachable using the lab's approved discovery method.
3. Enumerate only the services permitted by the worksheet.
4. Compare one observation with vendor or instructor-provided version/configuration information.
5. If the worksheet allows exploitation, use only the supplied lab exercise and a harmless validation goal; avoid destructive modules or persistence.
6. Collect minimal evidence and state what it proves and does not prove.
7. Restore the snapshot and confirm the lab is back to baseline.

**Deliverables:** scope note, high-level lifecycle diagram, findings table, and remediation/retest plan.

**Safety stop:** stop immediately if the traffic reaches an unexpected external host or a real system appears in scope accidentally.

### Lab 3 - Custom script for safe sandbox validation

**Objective:** Understand a security check by writing a small script that parses local sample data or tests a local mock service.

**Suggested safe exercise:** write a Python script that checks a local sample list of HTTP security headers or flags weak configuration values in a provided text/JSON fixture. Do not create a script that spreads, steals credentials, evades detection, or damages files.

**Procedure:**

1. Define exactly what the script checks and what it does not check.
2. Use only a fixture file or an explicit localhost service.
3. Validate input handling and include exception handling/timeouts if the script makes local requests.
4. Produce a deterministic report with pass/fail/unknown states.
5. Test normal, missing, malformed, and unexpected input.
6. Include a usage note, dependencies, and sample output.

**Example safe header-checking starter:**

```python
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

URL = "http://127.0.0.1:3000/"  # Replace only with your approved local lab URL.
TIMEOUT_SECONDS = 3

try:
    request = Request(URL, method="GET", headers={"User-Agent": "Ethical-Hacking-Lab/1.0"})
    with urlopen(request, timeout=TIMEOUT_SECONDS) as response:
        headers = {key.lower(): value for key, value in response.headers.items()}
        print(f"Status: {response.status}")
        for header in ("content-security-policy", "x-content-type-options", "referrer-policy"):
            print(f"{header}: {'present' if header in headers else 'missing'}")
except HTTPError as exc:
    print(f"HTTP error returned by local lab: {exc.code}")
except URLError as exc:
    print(f"Could not reach the local lab: {exc.reason}")
```

This example is a basic observational check, not a complete security scanner. A header may be appropriate or inappropriate depending on the app; investigate rather than equating “missing” with “exploitable.”

**Deliverables:** source file, test cases, sample output, explanation of checks, and limitations.

### Lab 4 - Secure code analysis for SQLi and XSS

**Objective:** Identify the root cause of two common input-handling flaws and propose secure fixes.

**Environment:** instructor-provided sample source code or a local intentionally vulnerable training application; no production data.

**Procedure:**

1. Read the route/handler and trace user input to the database query or HTML output.
2. For SQLi, determine whether query structure is built through string concatenation or parameterized binding.
3. For XSS, determine where untrusted content enters the page and whether context-appropriate encoding/sanitization is applied.
4. Write a minimal reproduction using only the provided training data.
5. Patch the code using parameterized queries and safe output handling.
6. Add regression tests for benign input, malformed input, and the previously vulnerable behavior.
7. Repeat the test and record the change in result.

**Deliverables:** vulnerable code location, explanation of data flow, before/after evidence, fix, regression test, and residual risks.

**Avoid:** testing real websites, harvesting records, or publishing exploit details for systems you do not own.

### Lab 5 - Build a small honeypot and review logs

**Objective:** Understand how a honeypot can collect signals about unsolicited or simulated connection attempts.

**Environment:** a disposable VM/container on an isolated host-only network; a low-interaction service or instructor-provided honeypot image. Do not expose it to the public Internet as part of this beginner exercise.

**Procedure:**

1. Document the isolated network and confirm that no production credential or file is present.
2. Run the supplied low-interaction honeypot according to its documentation.
3. From a second lab VM, generate a few benign, known test events approved by the instructor.
4. Inspect timestamp, source address within the lab, requested service, and event type.
5. Separate test-generated events from unknown or background activity.
6. Discuss what the honeypot can detect and what it cannot infer about an actor's identity or intention.
7. Shut down the service and preserve only the minimal sanitized logs needed for the report.

**Deliverables:** architecture diagram, sample sanitized events, three observations, limitations, and containment notes.

**Safety note:** do not use real credentials, provide a route into your private network, or interact with systems that connect to the honeypot unless the activity is in scope.

### Lab 6 - Ransomware incident simulation and response

**Objective:** Practice response decisions without encrypting real files or building deployable ransomware.

**Safe simulation design:** use synthetic event logs or a mock incident timeline. For example, a set of harmless log entries can indicate an unusual mass rename attempt, disabled backup job, suspicious process, and a sudden spike in file modifications. The lab is about triage and response, not building malware.

**Procedure:**

1. Read the scenario and identify the first reliable indicators.
2. Classify the incident's suspected scope and confidence level.
3. Decide when to isolate a simulated endpoint, disable a compromised test account, and notify the incident lead.
4. Identify evidence to preserve: relevant logs, timestamps, process/network records, affected asset list, and hashes of provided samples where requested.
5. Map containment, eradication, recovery, and communication steps.
6. Check backup integrity and define a safe restore validation plan.
7. Hold a short retrospective: which control or detection could have reduced the impact?

**Deliverables:** incident timeline, severity rationale, decision log, evidence checklist, recovery steps, and lessons learned.

**Never:** run ransomware on a personal computer, shared VM, real folder, or third-party system. Do not use a real encryption/deletion payload for this exercise.

### Lab 7 - Cloud security audit

**Objective:** Review a controlled cloud training account or a supplied configuration snapshot against a short checklist.

**Environment:** an instructor-managed sandbox or a static policy/configuration export. Use test resources and least-privileged credentials.

**Checklist:**

- Are any storage resources public without a documented need?
- Are identity roles broader than required?
- Is MFA enabled for privileged identities where supported?
- Are access keys, tokens, and secrets stored safely and rotated when needed?
- Are audit logs enabled, retained, and reviewed?
- Are management interfaces and inbound rules restricted?
- Are encryption settings and key-management responsibilities defined?
- Are backups protected and restoration tested?
- Are resources tagged with an owner and data classification?
- Is there a process for patching images, dependencies, and managed services?

**Procedure:** record the expected secure state; inspect each permitted setting; classify findings by evidence and impact; recommend a least-privilege fix; then validate using the sandbox or a sample configuration.

**Deliverables:** checklist, evidence references, risk-ranked findings, and retest plan. Avoid changing shared resources without instructor approval.

### Practical report template

Use this template for each instructor-assigned experiment:

```markdown
# Experiment: [Title]

## Aim
## Scope and Authorization
## Environment and Tools
## Theory / Security Principle
## Procedure
## Observations and Evidence
## Result
## Risks and Limitations
## Remediation / Defensive Lessons
## Conclusion
```

---

## 8. Quick Learn Filter

Use this section when you need the important concepts quickly but still want enough context to understand the unit. It is intentionally shorter than the full notes.

### Unit 1 - Essentials

- Ethical hacking = authorized, scoped security testing plus responsible reporting.
- Vulnerability assessment identifies and prioritizes weaknesses; penetration testing validates selected weaknesses and possible impact.
- White hat is authorized; black hat is unauthorized/harmful; grey hat may test without clear permission. Intent does not replace authorization.
- Syllabus phases: reconnaissance → scanning → gaining access → maintaining access → covering tracks. For ethical work, treat the last two as controlled concepts; preserve evidence, do not hide activity.
- Kali Linux is a security-tool environment; Metasploit is a validation framework; Wireshark analyzes packets; Burp Suite inspects web traffic; Maltego maps OSINT relationships.
- A finding should include asset, evidence, impact, severity rationale, remediation, and retest.

### Unit 2 - Essentials

| Term | Remember |
|---|---|
| Firewall | Enforces traffic policy |
| IDS | Detects and alerts |
| IPS | Detects and can block |
| VPN | Authenticated/encrypted tunnel |
| Proxy | Intermediary for requests |
| Sniffing | Observing traffic |
| Spoofing | Forging an identity/address attribute |
| MITM | Intermediary observes or alters communication |
| Vertical privilege escalation | Low privilege to high privilege |
| Horizontal privilege escalation | Access to another peer user's resources |
| Backdoor | Hidden bypass of normal controls |
| Trojan | Appears legitimate but performs undisclosed harmful actions |

VAPT workflow: plan → discover → assess → validate safely → prioritize → report → remediate → retest. Wireless defenses include WPA2-AES/WPA3 where supported, strong unique credentials, firmware updates, disabling unnecessary management exposure, guest isolation, and secure admin credentials.

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

## 9. Last-Minute Revision Filter

Read this section in the final review session. Memorize the high-yield differentiations and be able to explain at least one example for each.

### 9.1 One-line definitions

- **Ethical hacking:** authorized security testing to find and report weaknesses.
- **Penetration testing:** controlled validation of selected vulnerabilities and impact.
- **Reconnaissance:** gathering target information.
- **Enumeration:** extracting detailed information about exposed services/resources.
- **Vulnerability:** a weakness that could be exploited or triggered.
- **Exploit:** a method that takes advantage of a vulnerability.
- **Firewall:** enforces network traffic rules.
- **IDS/IPS:** intrusion detection system / intrusion prevention system.
- **VPN:** protected logical tunnel over another network.
- **Proxy:** intermediary for network/application requests.
- **Packet sniffing:** capturing and analyzing network packets.
- **Spoofing:** forging a source or identity attribute.
- **MITM:** an intermediary can observe or alter communications.
- **Privilege escalation:** obtaining permissions beyond the current level.
- **SQLi:** untrusted input changes an SQL query's structure.
- **XSS:** untrusted data executes as script in a trusted web origin.
- **CSRF:** a browser is induced to submit an unwanted authenticated request.
- **Incident response:** coordinated actions to analyze, contain, eradicate, recover, and learn from a security incident.
- **Hash:** fixed-length digest of input; not encryption.
- **Digital signature:** private-key signing, public-key verification.
- **Certificate:** identity/public-key binding under a trust system.
- **Zero trust:** no implicit trust based only on network location; verify context and apply least privilege.

### 9.2 Most-tested comparison points

**Vulnerability assessment vs penetration testing**

- Assessment: identify, classify, prioritize many weaknesses.
- Pen test: safely validate selected weaknesses and plausible impact.
- Both require authorization, scope, evidence, remediation, and retesting.

**IDS vs IPS**

- IDS: normally detects and alerts out-of-band or passively.
- IPS: may sit inline and block traffic.
- Both can miss attacks and both need tuning and monitoring.

**SQLi vs XSS vs CSRF**

- SQLi affects server-side query interpretation → parameterize queries.
- XSS affects script execution in a victim's browser → context-aware output encoding and safe DOM handling.
- CSRF exploits authenticated browser request behavior → server-side anti-CSRF token and cookie/request-origin controls.

**Encryption vs hash vs signature**

- Encryption: confidentiality, reversible with the proper key.
- Hash: digest/integrity comparison; not reversible by decryption.
- Signature: authenticity/integrity check using a public/private key scheme; does not automatically conceal the message.

**Authentication vs authorization**

- Authentication proves an identity or account control.
- Authorization decides allowed actions/resources.

### 9.3 Essential diagrams to reproduce from memory

**Ethical assessment flow:**

`Authorization & scope → Reconnaissance → Scanning/enumeration → Safe validation → Risk prioritization → Report → Remediation → Retest`

**Incident response flow:**

`Prepare → Detect/analyze → Contain → Eradicate → Recover → Lessons learned`

**Web request flow:**

`Browser → HTTPS request → Server-side authentication/authorization → Input handling/business logic → Parameterized database query → Response with safe output handling`

### 9.4 Last-minute traps to avoid

- Do not say that a scan proves a vulnerability; explain verification and false positives.
- Do not confuse encryption with hashing or signing.
- Do not say CORS alone prevents CSRF.
- Do not say client-side validation protects a server endpoint.
- Do not say a firewall protects against every attack or that TLS solves every trust problem.
- Do not equate a Trojan with a worm or assume every malicious program self-replicates.
- Do not claim “zero trust” is a single appliance.
- Do not claim blockchain is secure simply because it uses hashes.
- If the question says “according to OWASP Top 10,” use the edition specified by the instructor or question.
- In a legal/ethical question, say that permission and scope are required; benign intent is not sufficient.

---

## 10. Question Bank and Self-Test

Try answering without looking at the notes. Mark each answer **Strong**, **Partial**, or **Relearn**.

### Unit 1: Fundamentals

1. Define ethical hacking. Explain its scope and importance.
2. Differentiate white-hat, black-hat, and grey-hat hackers. Why is authorization more important than the label?
3. Explain the five phases listed in the syllabus. How should an ethical tester handle persistence and “covering tracks” concepts?
4. Differentiate vulnerability assessment and penetration testing.
5. Explain the purpose and limitations of Kali Linux, Metasploit, Wireshark, Burp Suite, and Maltego.
6. What should a responsible penetration-test report contain?

### Unit 2: Network and system security

7. Differentiate firewall, IDS, IPS, VPN, and proxy server.
8. Explain VAPT and its stages. What are false positives and false negatives?
9. Distinguish packet sniffing, spoofing, and MITM attacks.
10. Explain vertical and horizontal privilege escalation with examples.
11. What are a backdoor and a Trojan? List defensive indicators and mitigations.
12. Explain wireless security risks and list a secure Wi-Fi configuration checklist.

### Unit 3: Application and web security

13. Define SQL injection, explain its root cause, and describe parameterized queries.
14. Compare stored, reflected, and DOM-based XSS.
15. Explain CSRF and why a CSRF token is validated server-side.
16. Compare SQLi, XSS, and CSRF by target, root cause, impact, and mitigation.
17. What is the OWASP Top 10? Why should the version be identified?
18. Explain six secure coding practices for web applications.
19. List major API security risks and controls.
20. Explain mobile application security concerns and why authorization belongs on the server.

### Unit 4: Advanced concepts

21. Outline an incident response process from preparation to lessons learned.
22. Differentiate encryption, hashing, MACs, digital signatures, and certificates.
23. Compare symmetric and asymmetric cryptography. Explain why practical systems often use both.
24. Define APTs and list defensive detection/mitigation strategies.
25. Explain three smart-contract/blockchain security risks.
26. Explain zero-trust architecture and contrast it with perimeter-only trust.
27. Discuss AI and IoT threats and suitable mitigations.

### Practical and scenario questions

28. A scan reports an outdated service, but the version banner may be misleading. What do you do next?
29. A web form uses string concatenation to create an SQL query. Explain the risk and a safe correction.
30. A website stores comments and displays them to other visitors. What XSS checks and coding defenses are relevant?
31. An authenticated user can change an object ID in an API request. What security property must be tested?
32. Multiple endpoints show unusual outbound connections and privileged logins. How would you triage and contain the incident?
33. A storage bucket is publicly readable. What evidence, impact analysis, and remediation would you record?
34. Your honeypot receives unexpected traffic. What can you infer, and what can you not infer, about the source?
35. Why should a ransomware practical use mock logs or a harmless simulation rather than live ransomware?

### Self-test answer cues

1. Authorized, scoped, evidence-based testing and responsible reporting.
2. Permission and behavior determine whether the testing is ethical; labels do not grant permission.
3. Recon → scan → controlled validation → controlled persistence concept only if explicitly approved → preserve evidence; ethical testers do not conceal or destroy evidence.
4. Assessment finds/prioritizes; penetration testing validates selected vulnerabilities and impact.
5. Explain purpose, evidence, risk, and limitations for each tool.
6. Scope, affected asset, reproducible evidence, severity rationale, impact, limitations, fix, retest.
7. Firewall enforcement; IDS detection; IPS blocking capability; VPN tunnel; proxy intermediary.
8. Plan, discover, assess, validate, prioritize, report, remediate, retest; false positive is incorrect alert, false negative is missed issue.
9. Observe packets; forge source/identity; interpose in communications.
10. Vertical raises privilege; horizontal accesses another peer's resources.
11. Backdoor bypasses normal controls; Trojan disguises harmful behavior as legitimate.
12. Modern WPA2-AES/WPA3 where supported, unique passphrase, updated firmware, secure admin settings, guest isolation.
13. Unsafe input changes query syntax; parameter binding separates values from SQL structure.
14. Stored data, reflected request data, or client-side DOM processing respectively.
15. A token is validated by the server; a browser's presence alone cannot prove that a user intended the action.
16. SQL query interpretation vs browser script execution vs unwanted authenticated request.
17. Awareness/prioritization guide; version-specific categories change.
18. Server-side validation, parameterized queries, per-request authorization, safe output encoding, least privilege, secret protection, safe errors/logging.
19. Per-object authorization, minimal responses, input/schema validation, quotas, TLS, token protection, logging.
20. Local storage, permissions, deep links, transport, insecure embedded secrets; server authorizes sensitive actions.
21. Prepare, detect/analyze, contain, eradicate, recover, improve.
22. Confidentiality vs digest vs shared-secret authenticity/integrity vs public-key signature verification vs public-key identity binding.
23. Symmetric is efficient for data; asymmetric aids key establishment and signatures.
24. Sustained targeted adversary activity; use identity/endpoint/network monitoring, segmentation, least privilege, patching, backups, hunting.
25. Key theft, code flaws, consensus, oracle/bridge, governance.
26. Context-aware access and least privilege; no implicit trust from location.
27. AI: prompt injection/data/tool abuse; IoT: defaults, old firmware, exposed services; controls include least privilege, patching, isolation, authentication, monitoring.
28-34. Keep in scope, verify evidence, avoid overclaiming, protect data, report remediation and limits.
35. The learning objective is response and evidence handling, not creating deployable destructive malware.

---

## 11. Glossary

| Term | Meaning |
|---|---|
| Access control | Rules that decide who or what may use a resource and how |
| APT | Advanced Persistent Threat; a term for sustained, targeted activity by a capable adversary |
| API | Interface that lets software systems request data or actions from another system |
| Attack surface | Exposed assets, interfaces, identities, and paths that could be targeted |
| Authentication | Establishing an identity or proving control of an account/device |
| Authorization | Deciding which actions an identity may perform |
| Backdoor | Hidden or undocumented way to bypass intended controls |
| Certificate | A data structure binding an identity/subject to a public key under a trust scheme |
| CIA triad | Confidentiality, integrity, availability |
| Containment | Limiting an incident's spread or ongoing impact |
| CSRF | Cross-Site Request Forgery |
| CVE | Common Vulnerabilities and Exposures identifier system |
| CVSS | Common Vulnerability Scoring System; one input to, not a replacement for, contextual risk analysis |
| DNS | Domain Name System; resolves names to resource records such as IP addresses |
| Exploit | Technique or action that takes advantage of a vulnerability |
| Firewall | Control enforcing network traffic policy |
| Hash | Fixed-length digest generated from data |
| Honeypot | Decoy system/service used to observe or study activity |
| IDS / IPS | Intrusion Detection System / Intrusion Prevention System |
| MITM | Man-in-the-middle attack |
| MFA | Multi-factor authentication |
| OWASP | Open Worldwide Application Security Project |
| Packet capture | Recorded network packets from a capture point and time window |
| Payload | Data or action delivered as part of a test or exploit |
| Privilege escalation | Obtaining higher or different permissions than currently granted |
| Proxy | Service that mediates requests between clients and destinations |
| Remediation | Fixing a weakness or reducing it to an acceptable risk |
| Reconnaissance | Initial information gathering about a target |
| Risk | Potential for harm considered through likelihood and consequence |
| SQLi | SQL injection |
| TLS | Transport Layer Security; protects data in transit when correctly configured |
| Trojan | Software that presents itself as legitimate while performing undisclosed harmful activity |
| VPN | Virtual Private Network |
| VAPT | Vulnerability Assessment and Penetration Testing |
| Vulnerability | Weakness in design, implementation, configuration, or operation |
| XSS | Cross-Site Scripting |
| Zero trust | Architecture approach that evaluates access using identity/context and least privilege instead of trusting network location alone |

---

## 12. Study Plan

This flexible plan assumes roughly 30-45 minutes on most study days. Adjust the pace to your class schedule and prioritize lecturer-provided notes for exam-specific wording.

| Session | Focus | Output |
|---|---|---|
| 1 | Syllabus map, authorization, ethics, hacker categories | One-page definitions sheet |
| 2 | Lifecycle, reconnaissance, core tools, reporting | Lifecycle diagram + tool comparison |
| 3 | Firewall/IDS/IPS/VPN/proxy and VAPT | Comparison table from memory |
| 4 | Sniffing, spoofing, MITM, privilege escalation | Attack-vs-defense table |
| 5 | Wireless security, backdoors, Trojans | One-page mitigation checklist |
| 6 | Web flow, authentication/authorization, SQLi | Trace one safe code example and fix it |
| 7 | XSS, CSRF, OWASP Top 10 | Three-way comparison + version note |
| 8 | Secure coding, API and mobile security | Checklist applied to a mock endpoint |
| 9 | Incident response, monitoring, threat hunting | Incident timeline exercise |
| 10 | Cryptography, signatures, certificates | Diagram the trust and key flow |
| 11 | APT, blockchain, zero trust, AI/IoT | One-page concept map |
| 12 | Practical report format and labs | Complete one safe lab report |
| 13 | Question bank, weak-topic repair | Mark Strong / Partial / Relearn |
| 14 | Quick Learn + Last-Minute filters | Recite definitions and diagrams without notes |

### How to use active recall

1. Read one subsection, then close it.
2. Explain the concept in your own words in 60-90 seconds.
3. Draw the process or comparison table from memory.
4. Check the notes and correct gaps in another color.
5. Repeat only the weak concepts the next day.

### Suggested priority if time is very short

**Priority A:** ethical-hacking phases and authorization; firewall/IDS/IPS/VPN/proxy; VAPT; sniffing/spoofing/MITM; SQLi/XSS/CSRF; incident response; crypto distinctions.  
**Priority B:** tool purposes, wireless defenses, privilege escalation, API/mobile security, OWASP version.  
**Priority C:** blockchain, zero trust, APT, AI/IoT examples and deeper practical-report detail.  

This is a study recommendation, not a prediction of the exam paper. Check assignment weights and your instructor's guidance before final prioritization.

---

## 13. References and Version Notes

### 13.1 Official / primary references

These links supplement the course PDF. The lecturer's prescribed material remains the authority for what version or depth the exam expects.

- **Course syllabus:** *Ethical Hacking and Advanced Cybersecurity (DSE-3/GE-5)*, EC (1273), dated 17 January 2025, uploaded by the student. The four units, course outcomes/objectives, tool examples, seven practical themes, and suggested readings in this minibook are mapped from that document.
- **OWASP Top 10:2025:** https://top10.owasp.org/2025/ - current version and its category list.
- **OWASP Top 10 project page:** https://owasp.org/www-project-top-ten/ - project overview and access to earlier editions.
- **NIST SP 800-61 Rev. 3:** https://csrc.nist.gov/pubs/sp/800/61/r3/final - incident response recommendations integrated with cybersecurity risk management; final publication dated April 2025.
- **MITRE ATT&CK Enterprise Matrix:** https://attack.mitre.org/matrices/enterprise/ - structured descriptions of adversary tactics and techniques.
- **India Code - Information Technology Act, 2000:** https://www.indiacode.nic.in/ - use the official repository to consult the applicable text and amendments.
- **MeitY - Digital Personal Data Protection Rules, 2025:** https://www.meity.gov.in/documents/act-and-policies - official publication listing and related implementation materials.
- **Kali Linux documentation:** https://www.kali.org/docs/ - installation and tool/environment guidance.
- **Metasploit documentation:** https://docs.metasploit.com/ - framework documentation.
- **Wireshark documentation:** https://www.wireshark.org/docs/ - user guide and display-filter references.
- **PortSwigger Web Security Academy:** https://portswigger.net/web-security - free, intentionally designed web-security learning labs.
- **OWASP Juice Shop:** https://owasp.org/www-project-juice-shop/ - intentionally vulnerable web application for security training.

### 13.2 Suggested readings listed in the syllabus

1. Peter Kim, *The Hacker Playbook 3: Practical Guide to Penetration Testing*.
2. Jon Erickson, *Hacking: The Art of Exploitation*.
3. Georgia Weidman, *Penetration Testing: A Hands-On Introduction to Hacking*.
4. *Hacking: The Art of Exploitation*, Jon Erickson (No Starch Press) - repeated in the official list.
5. *Penetration Testing: A Hands-On Introduction to Hacking*, Georgia Weidman (No Starch Press) - repeated in the official list.
6. Dafydd Stuttard and Marcus Pinto, *The Web Application Hacker's Handbook* (Wiley).
7. David Kennedy, Jim O'Gorman, Devon Kearns, and Mati Aharoni, *Metasploit: The Penetration Tester's Guide* (No Starch Press).

### 13.3 Content provenance and limitations

- **Syllabus-derived:** course title/code/date, credit split, prerequisite, course objectives/outcomes, four units, named tools, seven practical themes, and suggested readings.
- **Expanded teaching material:** explanations, examples, comparison tables, safe-lab interpretation, study filters, self-test, glossary, and study plan are added to help learn the listed topics.
- **Time-sensitive supplement:** OWASP Top 10:2025, NIST SP 800-61 Rev. 3, and the official Indian legal-resource links were checked against their public official pages while preparing this minibook. Laws, standards, and tool interfaces can change; re-check the official source before relying on a detail operationally.
- **Not included as a claim:** the syllabus does not specify marks distribution, a fixed lab numbering scheme, an OWASP edition, or an exact exam pattern. Ask the instructor or use class materials for these details.

---

**End of minibook**  
*Study ethically. Test only with authorization. Report clearly. Fix and retest.*
