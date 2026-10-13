// Ethical Hacking & Advanced Cybersecurity MiniBook - Master Question Bank
// University of Delhi · B.Tech CSE (DSE-3/GE-5)
// Total Curated Questions: 160 (MCQs, MSQs, Scenarios, and Short Q&As)
// Unit 1: 80 Questions | Unit 2: 80 Questions

const EH_QUIZ_DATA = [
  {
    "id": 101,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Definitions & Scope",
    "q": "What is the primary defining distinction between ethical hacking and malicious hacking?",
    "options": [
      "The specific automated toolchain deployed during assessment",
      "Explicit, documented authorization and agreement on Rules of Engagement (RoE)",
      "The technical operating system utilized by the practitioner (Kali Linux vs Windows)",
      "The network protocol layer targeted by the attack probes"
    ],
    "ans": 1,
    "exp": "Ethical hacking requires explicit, prior written authorization from the system owner and operates strictly within legally binding Rules of Engagement (RoE). Malicious hacking operates without authorization.",
    "viva_tip": "Always state to the examiner: 'Authorization and scope are the legal dividing lines; benign intent alone does not make hacking legal.'"
  },
  {
    "id": 102,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "VA vs Penetration Testing",
    "q": "Which statements accurately contrast Vulnerability Assessment (VA) with Penetration Testing (PT)?",
    "options": [
      "VA emphasizes broad identification and cataloging of vulnerabilities without exploitation",
      "PT actively validates exploitability through controlled, non-destructive proof-of-concept attacks",
      "VA is typically automated and covers high breadth with lower depth",
      "PT never requires written authorization whereas VA always does",
      "VA produces a prioritized CVE list while PT reveals end-to-end attack paths"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Statements A, B, C, and E are correct. Both VA and PT mandate strict written authorization; testing without permission violates the law.",
    "viva_tip": "Remember the doctor analogy: VA is a full-body diagnostic blood test; PT is a stress test under controlled load."
  },
  {
    "id": 103,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Security Auditing",
    "q": "What is the primary objective of an Information Security Audit?",
    "options": [
      "Exfiltrating sensitive customer database tables to prove data exposure",
      "Verifying organizational compliance against defined security standards and policies (e.g., ISO 27001, PCI-DSS)",
      "Performing brute-force password attacks against active employee accounts",
      "Reverse-engineering proprietary software binaries to discover zero-day bugs"
    ],
    "ans": 1,
    "exp": "A security audit assesses operational, technical, and administrative controls against formal standards, statutory policies, and regulatory checklists.",
    "viva_tip": "Audits are compliance and governance driven; penetration tests are threat and adversary simulation driven."
  },
  {
    "id": 104,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "Short Q&A: Define Ethical Hacking and list its three primary operational objectives in enterprise defense.",
    "options": [],
    "ans": 0,
    "short_ans": "1. Definition: Ethical hacking is an authorized security evaluation wherein certified testers apply adversary tactics, techniques, and procedures (TTPs) within defined contractual boundaries.\n2. Primary Objectives: (a) Proactively identify vulnerabilities before malicious actors exploit them, (b) Measure real-world business risk and defense readiness, (c) Provide actionable technical remediation roadmaps to harden system architecture.",
    "exp": "Ethical hacking operates under formal Rules of Engagement (RoE) and Non-Disclosure Agreements (NDAs). The ultimate goal is risk remediation, not unauthorized access.",
    "viva_tip": "Highlight risk reduction and proactive posture during viva examinations."
  },
  {
    "id": 105,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Pre-Engagement Rules",
    "q": "Under standard Rules of Engagement (RoE), what should an ethical hacker do upon discovering an active zero-day vulnerability in production infrastructure?",
    "options": [
      "Immediately post the exploit code on public social media to warn users",
      "Halt testing on that component, isolate findings, and immediately notify the designated emergency contact via the escalation matrix",
      "Attempt to exploit all neighboring servers to measure full potential damage before telling anyone",
      "Sell the vulnerability details on dark web forums to fund research"
    ],
    "ans": 1,
    "exp": "An established escalation matrix defines emergency notification channels. Testers must pause testing on high-risk components and notify designated client liaisons immediately.",
    "viva_tip": "Responsible disclosure and escalation protocols protect both client infrastructure and tester legality."
  },
  {
    "id": 106,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Hard",
    "topic": "Rules of Engagement",
    "q": "Which components MUST be explicitly documented in a legally binding Rules of Engagement (RoE) document?",
    "options": [
      "Specific in-scope IP addresses, CIDR ranges, and fully qualified domain names (FQDNs)",
      "Explicitly excluded critical production systems and third-party hosted services",
      "Authorized testing time windows (e.g., off-peak maintenance hours)",
      "A guarantee that the tester can delete system audit logs at will",
      "An emergency escalation matrix with 24/7 technical contacts"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Statements A, B, C, and E are mandatory RoE components. Ethical testers never delete system audit logs; audit trails are essential forensic evidence.",
    "viva_tip": "Out-of-scope assets must be treated as hostile third parties; probing them creates immediate legal liability."
  },
  {
    "id": 107,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Legal Authorization",
    "q": "Why is verbal permission from an IT administrator legally insufficient for conducting penetration testing?",
    "options": [
      "Verbal permission expires after exactly 24 hours under IEEE standards",
      "Verbal permission cannot establish scope boundaries or indemnify testers in criminal court under cyber law",
      "Operating systems reject network packets without digital signatures",
      "Wireshark cannot capture packets initiated under verbal contracts"
    ],
    "ans": 1,
    "exp": "Under Indian Contract Act and IT Act 2000, verbal permissions lack evidentiary weight in court. Written, signed contracts signed by authorized corporate officers are mandatory.",
    "viva_tip": "Examiner trap: 'Can a friend verbally ask you to test their server?' Answer: No, written authorization is always required."
  },
  {
    "id": 108,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Easy",
    "topic": "Contracts & NDAs",
    "q": "Short Q&A: What is the purpose of a Non-Disclosure Agreement (NDA) in penetration testing engagements?",
    "options": [],
    "ans": 0,
    "short_ans": "An NDA is a legally binding contract that prohibits the penetration testing team from disclosing, leaking, or exploiting any confidential data, intellectual property, credentials, or system vulnerabilities discovered during the security assessment to third parties or the public.",
    "exp": "NDAs protect organizational trade secrets and sensitive personal data (PII) encountered during testing.",
    "viva_tip": "NDAs ensure discovered flaws remain strictly between the tester and client until remediation."
  },
  {
    "id": 109,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Hacker Classifications",
    "q": "A security enthusiast identifies an SQL injection flaw on an e-commerce website without authorization and emails the owner demanding a bounty reward. Which category best describes this actor?",
    "options": [
      "White-Hat Hacker",
      "Grey-Hat Hacker",
      "State-Sponsored APT",
      "Certified Security Auditor"
    ],
    "ans": 1,
    "exp": "Grey-hat hackers operate without prior authorization but claim non-malicious intentions. Under cyber law, unauthorized testing remains illegal regardless of intent.",
    "viva_tip": "Grey-hat actions remain legally unauthorized under IT Act Section 66."
  },
  {
    "id": 110,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Hacker Classifications",
    "q": "Which characteristics define a 'Script Kiddie' in cybersecurity taxonomy?",
    "options": [
      "Relies on pre-packaged, automated exploitation scripts without understanding underlying networking protocols",
      "Motivated primarily by peer recognition, personal notoriety, or casual nuisance",
      "Develops sophisticated custom zero-day kernel exploits from scratch",
      "Frequently targets systems indiscriminately using automated scanning tools",
      "Possesses sovereign state funding and advanced defense evasion capabilities"
    ],
    "ans": [
      0,
      1,
      3
    ],
    "exp": "Script kiddies lack deep protocol understanding and execute automated tools created by others. Statements C and E describe elite researchers and state-sponsored APTs.",
    "viva_tip": "Script kiddies use tools blindly; ethical hackers understand packet-level mechanics."
  },
  {
    "id": 111,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Threat Actors",
    "q": "Which threat actor category is characterized by political, social, or ideological motivations, commonly utilizing website defacements and DDoS attacks?",
    "options": [
      "Hacktivist",
      "Script Kiddie",
      "White-Hat Penetration Tester",
      "Malicious Insider"
    ],
    "ans": 0,
    "exp": "Hacktivists (e.g., groups like Anonymous) execute cyber attacks to promote ideological, political, or social causes rather than financial gain.",
    "viva_tip": "Hacktivism = Hacking + Activism (political/ideological motivation)."
  },
  {
    "id": 112,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Advanced Persistent Threats",
    "q": "What distinguishes an Advanced Persistent Threat (APT) from opportunistic cybercriminals?",
    "options": [
      "APTs exclusively target mobile phones using SMS spoofing",
      "APTs are highly resourced, stealthy, long-term campaigns backed by sovereign nations targeting critical infrastructure and espionage",
      "APTs always execute loud denial-of-service floods immediately upon entering a network",
      "APTs only deploy open-source automated tools without modifying them"
    ],
    "ans": 1,
    "exp": "APTs operate persistent, multi-year stealth campaigns with massive nation-state backing, targeting espionage and sabotage of critical infrastructure.",
    "viva_tip": "APTs prioritize stealth and longevity over immediate noisy financial theft."
  },
  {
    "id": 113,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Threat Actors",
    "q": "Short Q&A: Define an 'Insider Threat' and explain why it presents a unique challenge to enterprise perimeter firewalls.",
    "options": [],
    "ans": 0,
    "short_ans": "An Insider Threat is a current or former employee, contractor, or business partner with legitimate, authorized internal network credentials who abuses or misuses that access maliciously or negligently. Perimeter firewalls cannot detect internal abuse because traffic originates inside trusted boundaries.",
    "exp": "Defense-in-depth, Zero-Trust Architecture, and User and Entity Behavior Analytics (UEBA) are required to detect insider threats.",
    "viva_tip": "Firewalls protect the perimeter; insider threats bypass the perimeter by having legitimate credentials."
  },
  {
    "id": 114,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Hacker Classifications",
    "q": "A White-Hat hacker differs fundamentally from a Black-Hat hacker because a White-Hat hacker:",
    "options": [
      "Only uses Windows operating systems for security audits",
      "Holds legal written authorization, reports findings privately, and adheres strictly to defensive risk mitigation",
      "Never uses command-line terminals or packet sniffers",
      "Is immune to all international and domestic cyber laws"
    ],
    "ans": 1,
    "exp": "White-hat hackers operate with full authorization, transparent documentation, and ethical commitments to improve defensive posture.",
    "viva_tip": "White hats use offensive skills for defensive goals within legal boundaries."
  },
  {
    "id": 115,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Hacker Classifications",
    "q": "Which parameters are evaluated in legal and industry frameworks to categorize a hacker's posture?",
    "options": [
      "Authorization status (Explicit contract vs Unauthorized)",
      "Underlying intent and motivation (Defensive remediation vs Extortion/Theft)",
      "Compliance with established Rules of Engagement (RoE)",
      "The brand of computer hardware used by the tester",
      "Responsible reporting vs public data dumping"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Hardware brand is irrelevant. Authorization, motivation, RoE adherence, and reporting practices are the determining criteria.",
    "viva_tip": "Four pillars: Authorization, Intent, Boundary compliance, and Reporting."
  },
  {
    "id": 116,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Easy",
    "topic": "Hacker Classifications",
    "q": "Short Q&A: In an examination, how should you tabularly distinguish White-Hat, Grey-Hat, and Black-Hat hackers?",
    "options": [],
    "ans": 0,
    "short_ans": "Tabulate across 3 columns:\n1. White-Hat: Authorization = Explicit/Contractual; Motivation = Defense/Remediation; Legal Posture = Fully Lawful.\n2. Grey-Hat: Authorization = None/Ambiguous; Motivation = Curiosity/Bounty; Legal Posture = Unlawful (Section 66 violation).\n3. Black-Hat: Authorization = Zero; Motivation = Financial extortion/Sabotage; Legal Posture = Criminal.",
    "exp": "Under Indian IT Act 2000, intent does not supersede authorization; both Grey and Black hat activities without permission violate Section 66.",
    "viva_tip": "Draw this exact 3-column table for 5-mark examination questions."
  },
  {
    "id": 117,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Under the Indian Information Technology Act, 2000, which section prescribes civil compensation up to ₹1 Crore for unauthorized downloading, copying, or damaging of computer systems?",
    "options": [
      "Section 43",
      "Section 65",
      "Section 66",
      "Section 70"
    ],
    "ans": 0,
    "exp": "Section 43 of the IT Act covers penalty and compensation for damage to computer systems, data copying, virus introduction, and denial of access as a civil remedy.",
    "viva_tip": "Section 43 = Civil compensation payable to the victim (up to ₹1 Crore)."
  },
  {
    "id": 118,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Which section of the IT Act 2000 specifically penalizes 'Hacking with Computer System' with criminal imprisonment up to 3 years and/or fines up to ₹5 Lakh?",
    "options": [
      "Section 66",
      "Section 43A",
      "Section 66F",
      "Section 72"
    ],
    "ans": 0,
    "exp": "Section 66 criminalizes acts covered under Section 43 committed dishonestly or fraudulently, imposing up to 3 years imprisonment or fine up to ₹5 Lakh, or both.",
    "viva_tip": "Section 66 requires mens rea (dishonest or fraudulent criminal intent)."
  },
  {
    "id": 119,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Hard",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Section 66F of the IT Act 2000 penalizes acts of 'Cyber Terrorism' against the integrity and sovereignty of India with which statutory sentence?",
    "options": [
      "Fine of ₹50,000 only",
      "Community service for 6 months",
      "Imprisonment for life",
      "Simple detention for 1 year"
    ],
    "ans": 2,
    "exp": "Section 66F prescribes imprisonment for life for cyber terrorism, covering attacks targeting critical infrastructure, defense networks, or sovereignty.",
    "viva_tip": "Section 66F carries life imprisonment — the most severe punishment in Indian cyber law."
  },
  {
    "id": 120,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Which actions constitute punishable offenses under Section 66C and 66D of the IT Act 2000?",
    "options": [
      "Identity theft: fraudulently using electronic signatures or passwords belonging to another person (Sec 66C)",
      "Cheating by personation: using a computer resource or fake email to impersonate an authority (Sec 66D)",
      "Configuring an enterprise router with a static IP address in a private sandbox",
      "Setting up phishing portals to capture university student portal credentials",
      "Reading official open-source documentation for Linux kernel commands"
    ],
    "ans": [
      0,
      1,
      3
    ],
    "exp": "Section 66C targets identity theft (stolen passwords, biometric tokens); Section 66D targets cheating by personation (phishing/spoofing). Configuration of private hardware and reading documentation are lawful.",
    "viva_tip": "Sec 66C = Identity theft; Sec 66D = Phishing & personation."
  },
  {
    "id": 121,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Section 70 of the IT Act 2000 declares unauthorized access to 'Protected Systems' punishable by up to 10 years imprisonment. What is a 'Protected System'?",
    "options": [
      "Any personal laptop containing gaming software",
      "Critical Information Infrastructure (CII) declared by government notification, whose disruption significantly impacts national security, economy, or public health",
      "A public web server hosting Wikipedia pages",
      "A test environment running inside VirtualBox"
    ],
    "ans": 1,
    "exp": "Protected Systems refer to Critical Information Infrastructure (power grids, banking cores, defense networks, air traffic control) designated under Section 70.",
    "viva_tip": "Protected Systems = Critical Infrastructure; unauthorized access carries up to 10 years imprisonment."
  },
  {
    "id": 122,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "CERT-In Directives",
    "q": "Short Q&A: State the CERT-In 2022 cybersecurity reporting timeline and list three types of reportable security incidents.",
    "options": [],
    "ans": 0,
    "short_ans": "1. Mandatory Timeline: Organizations in India must report designated cybersecurity incidents to CERT-In within 6 HOURS of noticing or being brought to notice.\n2. Reportable Incidents: (a) Targeted scanning/probing of critical networks, (b) Ransomware attacks, (c) Unauthorized access to IT systems or databases, (d) Defacement of websites, (e) Data leaks or breach of personal data.",
    "exp": "The April 2022 CERT-In directions under Section 70B mandate strict 6-hour reporting windows and 180-day system log retention.",
    "viva_tip": "Remember the exact 6-hour number; examiners test this in current affairs cybersecurity questions."
  },
  {
    "id": 123,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Which section of the IT Act 2000 penalizes tampering with computer source code documents required by law to be maintained?",
    "options": [
      "Section 65",
      "Section 43",
      "Section 66E",
      "Section 71"
    ],
    "ans": 0,
    "exp": "Section 65 criminalizes intentional concealing, destroying, or altering computer source code, punishable by up to 3 years imprisonment or fine up to ₹2 Lakh.",
    "viva_tip": "Section 65 = Source code tampering."
  },
  {
    "id": 124,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Publishing or transmitting private photos or videos of an individual without their consent is penalized under which section of the IT Act?",
    "options": [
      "Section 66E",
      "Section 43",
      "Section 66B",
      "Section 69"
    ],
    "ans": 0,
    "exp": "Section 66E penalizes violation of privacy (capturing, publishing, or transmitting images of private areas without consent) with up to 3 years imprisonment.",
    "viva_tip": "Section 66E = Violation of privacy."
  },
  {
    "id": 125,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Hard",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Short Q&A: Explain the difference between civil remedies under Section 43 and criminal offenses under Section 66 of the IT Act 2000.",
    "options": [],
    "ans": 0,
    "short_ans": "Section 43 provides a civil remedy where the victim can claim compensatory financial damages (up to ₹1 Crore) from the perpetrator without proof of criminal mens rea. Section 66 is a criminal offense where the state prosecutes the offender for committing Section 43 acts dishonestly or fraudulently, resulting in criminal imprisonment (up to 3 years) and penal fines.",
    "exp": "Civil vs Criminal: Section 43 compensates the victim; Section 66 punishes the criminal with jail.",
    "viva_tip": "Use the words 'mens rea' (guilty mind) to impress the university examiner."
  },
  {
    "id": 126,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Cyber Law (IT Act 2000)",
    "q": "Which activities on a college network constitute illegal offenses under Section 43 and 66 of the IT Act 2000?",
    "options": [
      "Injecting malware into the college server to modify internal exam scores",
      "Disrupting access to the college portal using automated DoS scripts",
      "Downloading proprietary research database files without authorization",
      "Submitting an assigned coursework PDF through the authorized student portal",
      "Sniffing cleartext passwords from the campus Wi-Fi network without authorization"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Modifying grades, DoS floods, unauthorized data downloads, and sniffing private traffic are criminal acts under Section 43 and 66. Submitting coursework is authorized behavior.",
    "viva_tip": "Even on campus networks, cyber law applies equally."
  },
  {
    "id": 127,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Lifecycle Phases",
    "q": "In the standard 5-phase ethical hacking lifecycle, what is the correct chronological sequence of operations?",
    "options": [
      "Reconnaissance &rarr; Scanning &rarr; Gaining Access &rarr; Maintaining Access &rarr; Reporting",
      "Scanning &rarr; Gaining Access &rarr; Reconnaissance &rarr; Reporting &rarr; Maintaining Access",
      "Gaining Access &rarr; Reconnaissance &rarr; Maintaining Access &rarr; Scanning &rarr; Reporting",
      "Reporting &rarr; Scanning &rarr; Gaining Access &rarr; Reconnaissance &rarr; Maintaining Access"
    ],
    "ans": 0,
    "exp": "The canonical lifecycle is: Phase 1: Reconnaissance (Footprinting), Phase 2: Scanning & Enumeration, Phase 3: Gaining Access, Phase 4: Maintaining Access, Phase 5: Reporting & Remediation.",
    "viva_tip": "R-S-G-M-R mnemonic: Recon, Scan, Gain, Maintain, Report."
  },
  {
    "id": 128,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Lifecycle Phases",
    "q": "How does Phase 5 of the ethical hacking lifecycle differ between an ethical penetration tester and a malicious black-hat hacker?",
    "options": [
      "The ethical tester deletes system event logs whereas the black-hat keeps backups",
      "The ethical tester documents actions in an audit log and produces a Remediation Report; the malicious hacker wipes logs and timestomps files to conceal presence",
      "The ethical tester turns off the server while the malicious hacker formats the hard drive",
      "There is no difference; both delete all traces to protect client privacy"
    ],
    "ans": 1,
    "exp": "Ethical hackers never erase evidence or tamper with audit logs. They provide full disclosure and remediation guidance. Malicious hackers wipe logs and modify timestamps.",
    "viva_tip": "Ethical hackers deliver Remediation Reports; malicious hackers wipe logs."
  },
  {
    "id": 129,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Phase 2: Scanning & Enumeration",
    "q": "Which operational activities take place during Phase 2 (Scanning and Enumeration)?",
    "options": [
      "Probing for live hosts across a target subnet using ping sweeps (ICMP/TCP)",
      "Identifying open TCP and UDP listening ports using port scanners (Nmap)",
      "Extracting user accounts, shared SMB folders, and SNMP community strings",
      "Executing SQL injection payloads to extract user credit cards",
      "Determining service version numbers and operating system fingerprints"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Ping sweeps, port scanning, OS fingerprinting, and SMB/SNMP enumeration are Phase 2 activities. Exploiting SQL injection to exfiltrate data belongs to Phase 3 (Gaining Access).",
    "viva_tip": "Enumeration is detailed inspection of discovered open ports before exploit delivery."
  },
  {
    "id": 130,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Phase 4: Maintaining Access",
    "q": "Which technique is commonly deployed during Phase 4 (Maintaining Access) to guarantee persistent access following target reboots?",
    "options": [
      "Deploying web shells, scheduled cron jobs, or persistent backdoor services",
      "Running an unauthenticated WHOIS query against the domain registrar",
      "Disabling the local network interface card on the attacker machine",
      "Sending a single ICMP echo ping request to the default gateway"
    ],
    "ans": 0,
    "exp": "Phase 4 establishes persistence via backdoors, web shells, modified startup registry keys, or cron jobs so that session disconnects do not terminate access.",
    "viva_tip": "Persistence allows access to survive system reboots."
  },
  {
    "id": 131,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Lifecycle Phases",
    "q": "Short Q&A: Explain the concept of 'Pivoting' (Lateral Movement) during Phase 3 and Phase 4 of a penetration test.",
    "options": [],
    "ans": 0,
    "short_ans": "Pivoting is the technique where a tester uses a compromised host (such as an internet-facing DMZ web server) as a routing bridge or proxy to scan, probe, and exploit internal, unexposed network subnets that are not directly reachable from the external public internet.",
    "exp": "Pivoting allows testers to evaluate whether perimeter compromise enables internal network traversal.",
    "viva_tip": "Pivoting turns an external foothold into an internal launchpad."
  },
  {
    "id": 132,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Lifecycle Phases",
    "q": "During Phase 1 (Reconnaissance), an analyst searches job boards for IT technician openings at the target corporation. What intelligence does this provide?",
    "options": [
      "The exact root password of the database",
      "The specific technology stack, operating systems, and firewall vendors in use by the organization",
      "The private MAC address of the core datacenter router",
      "The active TCP sequence numbers of production web servers"
    ],
    "ans": 1,
    "exp": "Job listings frequently enumerate required technical proficiencies (e.g., '5 years managing Cisco ASA firewalls, Red Hat Enterprise Linux, Oracle 19c'), revealing internal technology stacks to passive reconnaissance analysts.",
    "viva_tip": "Job postings are valuable OSINT sources for tech stack mapping."
  },
  {
    "id": 133,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Reconnaissance",
    "q": "What characterizes Passive Reconnaissance compared to Active Reconnaissance?",
    "options": [
      "Passive reconnaissance generates zero direct packet transmissions to target servers, making detection by target IDS/IPS impossible",
      "Passive reconnaissance exploits vulnerabilities immediately without scanning",
      "Passive reconnaissance is only possible from physical server rooms",
      "Passive reconnaissance requires specialized commercial hardware dongles"
    ],
    "ans": 0,
    "exp": "Passive reconnaissance relies on third-party repositories (search engines, DNS caches, WHOIS registries). The target's intrusion detection systems cannot log the analyst.",
    "viva_tip": "Passive = Zero packets to target; Active = Direct packet exchange."
  },
  {
    "id": 134,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Google Dorking",
    "q": "Which Google search queries represent valid Google Dorks used in passive footprinting?",
    "options": [
      "site:target.com filetype:pdf confidential",
      "site:target.com inurl:admin intitle:\"login\"",
      "site:target.com \"DB_PASSWORD\" filetype:env",
      "ping -c 4 192.168.1.1",
      "intitle:\"index of /\" \"backup.sql\""
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Statements A, B, C, and E are valid Google search operators (site, filetype, inurl, intitle). Statement D is an active terminal ping command, not a search query.",
    "viva_tip": "Google Dorks exploit indexed search engine data without sending packets to target servers."
  },
  {
    "id": 135,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "WHOIS Reconnaissance",
    "q": "What primary intelligence is extracted from an unauthenticated WHOIS query against a corporate domain name?",
    "options": [
      "The corporate admin password hash",
      "Domain registration dates, authoritative name servers, and registrant contact details",
      "Active TCP connection state tables",
      "The firmware version of the local Wi-Fi router"
    ],
    "ans": 1,
    "exp": "WHOIS queries Regional Internet Registries (RIRs) to return domain registration metadata, expiration dates, authoritative DNS servers, and administrative contacts.",
    "viva_tip": "WHOIS queries the registrar registry, not the target web server."
  },
  {
    "id": 136,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "DNS Reconnaissance",
    "q": "Which command-line DNS query attempts to perform a full DNS Zone Transfer against a target nameserver?",
    "options": [
      "dig axfr @ns1.target.com target.com",
      "ping -s 1500 target.com",
      "whois -r target.com",
      "traceroute -p 80 target.com"
    ],
    "ans": 0,
    "exp": "`dig axfr @nameserver domain` requests an authoritative zone transfer (AXFR). Misconfigured DNS servers reveal all subdomains and internal records.",
    "viva_tip": "`axfr` is the query type for DNS Zone Transfer over TCP port 53."
  },
  {
    "id": 137,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "OSINT Tools",
    "q": "Short Q&A: Explain how Shodan differs from a traditional search engine like Google.",
    "options": [],
    "ans": 0,
    "short_ans": "Google indexes web page contents and HTML text for end-user search queries. Shodan is a search engine for internet-connected devices; it continuously scans the IPv4 address space, banners, open ports, and protocols of servers, webcams, industrial control systems (ICS/SCADA), routers, and databases.",
    "exp": "Shodan allows analysts to find internet-facing devices by service banner, port, operating system, and geographic coordinates.",
    "viva_tip": "Google indexes web pages; Shodan indexes device banners and open ports."
  },
  {
    "id": 138,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "OSINT Visualizers",
    "q": "What is the primary operational strength of the tool Maltego in Phase 1 reconnaissance?",
    "options": [
      "Automatically cracking WPA2 Wi-Fi passphrases using rainbow tables",
      "Performing graphical link analysis and automated OSINT data transforms to map relationships between domains, IPs, people, and email addresses",
      "Injecting SQL payloads into backend relational databases",
      "Blocking incoming TCP SYN floods at the kernel level"
    ],
    "ans": 1,
    "exp": "Maltego performs entity relationship mapping through automated transforms, turning isolated OSINT data points into structured graphical link trees.",
    "viva_tip": "Maltego = Graph and entity relationship visualizer."
  },
  {
    "id": 139,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Social Engineering",
    "q": "What is the key distinction between Phishing and Spear-Phishing?",
    "options": [
      "Phishing is mass, generic fraudulent emails sent indiscriminately; Spear-Phishing is customized and tailored to a specific individual or organization based on prior reconnaissance",
      "Phishing uses phone calls while spear-phishing uses paper mail",
      "Phishing targets only Windows machines while spear-phishing targets Linux",
      "Phishing is lawful while spear-phishing is illegal"
    ],
    "ans": 0,
    "exp": "Spear-phishing incorporates researched personal context (names, job titles, recent projects) to deceive high-value specific targets.",
    "viva_tip": "Phishing = Broadcast net; Spear-phishing = Targeted harpoon."
  },
  {
    "id": 140,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Social Engineering",
    "q": "Which definitions accurately describe social engineering attack vectors?",
    "options": [
      "Whaling: Spear-phishing attacks targeted specifically at high-profile corporate executives (CEOs, CFOs)",
      "Vishing: Voice phishing conducted over telephone or VoIP calls",
      "Smishing: Fraudulent deception conducted via SMS text messages",
      "Baiting: Leaving infected USB drives in parking lots hoping employees plug them into internal workstations",
      "Tailgating: Sending encrypted emails to system administrators"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "Statements A, B, C, and D are accurate definitions. Tailgating is physically following an authorized person through a secured door without scanning a badge.",
    "viva_tip": "Tailgating/Piggybacking is a physical security attack, not email."
  },
  {
    "id": 141,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Kali Linux Architecture",
    "q": "Kali Linux is built upon which base Linux distribution and package management framework?",
    "options": [
      "Arch Linux (pacman)",
      "Debian Linux (apt / dpkg)",
      "Red Hat Enterprise Linux (RPM)",
      "Alpine Linux (apk)"
    ],
    "ans": 1,
    "exp": "Kali Linux is maintained by Offensive Security as a Debian-derived distribution equipped with specialized security repositories, customized kernels, and pre-packaged tools.",
    "viva_tip": "Kali is Debian-based and uses APT."
  },
  {
    "id": 142,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Core Tools",
    "q": "Which tool in the ethical hacker arsenal is primarily designed to act as an intercepting HTTP/HTTPS proxy to manipulate web requests before they reach the server?",
    "options": [
      "Burp Suite",
      "Wireshark",
      "John the Ripper",
      "Aircrack-ng"
    ],
    "ans": 0,
    "exp": "Burp Suite operates as a local HTTP proxy between the browser and backend server, enabling inspection, modification, and automated fuzzing of web traffic.",
    "viva_tip": "Burp Suite = Web application intercepting proxy."
  },
  {
    "id": 143,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Metasploit Architecture",
    "q": "Which components constitute modular architecture categories in the Metasploit Framework (MSF)?",
    "options": [
      "Exploits (Modules taking advantage of specific vulnerabilities)",
      "Payloads (Code executed on the target after successful exploit delivery, e.g., Meterpreter)",
      "Auxiliary modules (Scanners, fuzzers, and fingerprinting tools)",
      "Encoders (Modules obfuscating payloads to evade simple signature detection)",
      "Hardware soldering iron controllers"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "Metasploit organizes capabilities into Exploits, Payloads, Auxiliaries, Encoders, NOP generators, and Post-exploitation modules.",
    "viva_tip": "Four core MSF modules: Exploits, Payloads, Auxiliaries, and Encoders."
  },
  {
    "id": 144,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Metasploit Payloads",
    "q": "What is the primary advantage of deploying a Metasploit 'Meterpreter' payload over a standard command shell (`/bin/sh`)?",
    "options": [
      "Meterpreter operates entirely in memory using DLL injection, leaves no forensic disk footprint, and provides robust post-exploitation commands",
      "Meterpreter is written in pure Python and requires no operating system",
      "Meterpreter increases the physical CPU clock frequency of target hardware",
      "Meterpreter formats the hard drive automatically upon disconnection"
    ],
    "ans": 0,
    "exp": "Meterpreter is an advanced, dynamically extensible payload that executes strictly in-memory (reflectively injected), evading disk-based antivirus detection.",
    "viva_tip": "Meterpreter is in-memory and stealthy, avoiding disk artifacts."
  },
  {
    "id": 145,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Easy",
    "topic": "Lab Environments",
    "q": "Short Q&A: Why is a 'Host-Only' virtual network adapter preferred over a 'Bridged' adapter for isolated ethical hacking practice labs?",
    "options": [],
    "ans": 0,
    "short_ans": "A Host-Only adapter creates an isolated private virtual network restricted entirely to the host machine and guest VMs; it has zero access to the external physical LAN or campus network. A Bridged adapter attaches the VM directly to the physical LAN, creating severe legal and security hazards if attack scripts leak onto public university networks.",
    "exp": "Host-Only sandboxes prevent exploit packets from traversing external production networks.",
    "viva_tip": "Host-Only prevents packet leakage to university networks."
  },
  {
    "id": 146,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Credential Tools",
    "q": "What is the primary operational distinction between John the Ripper and THC-Hydra?",
    "options": [
      "John the Ripper is an offline hash cracker; Hydra is an online network service authentication brute-forcer",
      "John the Ripper only runs on macOS; Hydra only runs on Windows",
      "John the Ripper cracks Wi-Fi passwords; Hydra only sniffs HTTP packets",
      "There is no difference; both are web application proxies"
    ],
    "ans": 0,
    "exp": "John the Ripper and Hashcat perform offline mathematical cracking of captured hash dumps. Hydra executes active online authentication attempts across network protocols (SSH, FTP, RDP).",
    "viva_tip": "John/Hashcat = Offline hash cracking; Hydra = Online network service brute-forcing."
  },
  {
    "id": 147,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Risk & Formulas",
    "q": "In cybersecurity risk management, what is the standard mathematical relationship defining Risk?",
    "options": [
      "Risk = Threat × Vulnerability × Impact",
      "Risk = Bandwidth × Port Number × IP Address",
      "Risk = CPU Clock Speed / RAM Size",
      "Risk = Total Lines of Source Code + Number of Users"
    ],
    "ans": 0,
    "exp": "Risk is quantitatively modeled as the product of Threat probability, Vulnerability exposure, and resulting Business Impact (Loss).",
    "viva_tip": "Risk = Threat × Vulnerability × Impact."
  },
  {
    "id": 148,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "CVSS v3.1 Metrics",
    "q": "Which parameters belong to the CVSS v3.1 Base Metric Group used to calculate vulnerability severity scores?",
    "options": [
      "Attack Vector (AV: Network, Adjacent, Local, Physical)",
      "Attack Complexity (AC: Low, High)",
      "Privileges Required (PR: None, Low, High)",
      "User Interaction (UI: None, Required)",
      "Current stock price of the target corporation"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "CVSS v3.1 Base Metrics include Attack Vector (AV), Attack Complexity (AC), Privileges Required (PR), User Interaction (UI), Scope (S), Confidentiality (C), Integrity (I), and Availability (A). Stock price is not a technical metric.",
    "viva_tip": "Base metrics evaluate inherent vulnerability characteristics independent of environment."
  },
  {
    "id": 149,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "CVSS v3.1 Scores",
    "q": "According to the CVSS v3.1 qualitative severity rating scale, a score of 9.8 is classified under which severity tier?",
    "options": [
      "Low",
      "Medium",
      "High",
      "Critical"
    ],
    "ans": 3,
    "exp": "CVSS v3.1 defines: None (0.0), Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), and Critical (9.0–10.0). A score of 9.8 is Critical.",
    "viva_tip": "Critical = 9.0 to 10.0; High = 7.0 to 8.9; Medium = 4.0 to 6.9."
  },
  {
    "id": 150,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Reporting Best Practices",
    "q": "Short Q&A: What is the purpose of an 'Executive Summary' in a penetration testing report, and how does it differ from the technical findings section?",
    "options": [],
    "ans": 0,
    "short_ans": "The Executive Summary is a high-level briefing tailored for non-technical executive leadership (CEOs, Board of Directors, Deans). It outlines the overall organizational risk posture, critical business impacts, and strategic budget recommendations without technical jargon. The technical findings section provides granular Proof-of-Concept steps, CVSS vector strings, code endpoints, and terminal outputs for software developers and sysadmins.",
    "exp": "Reports serve two audiences: executive leadership for funding/strategy, and technical engineers for code remediation.",
    "viva_tip": "Executives need business risk context; developers need code endpoints and reproduction steps."
  },
  {
    "id": 151,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Reporting Best Practices",
    "q": "Why MUST sensitive customer records (credit card numbers, national IDs) be redacted in penetration testing reports?",
    "options": [
      "To comply with data privacy regulations (GDPR, DPDP Act 2023) and prevent secondary data leaks if the report is shared",
      "Because PDF documents corrupt if numbers exceed 10 digits",
      "Because redacting text speeds up internet network speed",
      "Because operating systems cannot render colored images"
    ],
    "ans": 0,
    "exp": "Penetration test reports often circulate among management, auditors, and external consultants. Proof-of-concept evidence must be sanitized to protect personal data from accidental secondary exposure.",
    "viva_tip": "Sanitize and redact sensitive data to ensure privacy compliance."
  },
  {
    "id": 152,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "ShortQA",
    "diff": "Hard",
    "topic": "Remediation Roadmaps",
    "q": "Short Q&A: Distinguish between 'tactical' (short-term) and 'strategic' (long-term) security remediation recommendations.",
    "options": [],
    "ans": 0,
    "short_ans": "Tactical remediations are immediate operational workarounds deployed to block active exploit paths quickly (e.g., creating an emergency WAF filter rule to block SQL syntax, or temporarily disabling an affected network port). Strategic remediations are systemic, root-cause architectural fixes (e.g., refactoring codebase to enforce parameterized queries, implementing secure SDLC, and mandating automated static code analysis).",
    "exp": "Reports must provide both immediate band-aids to stop attacks and permanent architectural cures.",
    "viva_tip": "Tactical = Fast operational patch (WAF rule); Strategic = Permanent root cause cure (code refactor)."
  },
  {
    "id": 153,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "What is the principle of least privilege in security architecture?",
    "options": [
      "Granting users and services only the minimum necessary permissions required to fulfill their designated role",
      "Giving all users administrator passwords",
      "Disabling authentication on internal networks",
      "Restarting servers every hour"
    ],
    "ans": 0,
    "exp": "Principle of least privilege minimizes attack blast radius by restricting access.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 154,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "What standard methodology defines the 7 phases of penetration testing from pre-engagement to reporting?",
    "options": [
      "PTES (Penetration Testing Execution Standard)",
      "IEEE 802.11",
      "RFC 793",
      "OSI Model"
    ],
    "ans": 0,
    "exp": "PTES defines pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post exploitation, and reporting.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 155,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Hacker Categories",
    "q": "Which term refers to ethical hackers hired by corporations to simulate attacks while internal teams defend?",
    "options": [
      "Red Team",
      "Blue Team",
      "Yellow Team",
      "Green Team"
    ],
    "ans": 0,
    "exp": "Red teams simulate offensive adversaries; Blue teams monitor, detect, and defend.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 156,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Hacker Categories",
    "q": "What is the primary role of a cybersecurity 'Blue Team'?",
    "options": [
      "Proactive defensive monitoring, threat hunting, and incident response",
      "Exfiltrating database tables for sale",
      "Creating ransomware encryptors",
      "Defacing competitor websites"
    ],
    "ans": 0,
    "exp": "Blue teams operate SOCs, tune SIEMs, and analyze security alerts.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 157,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Cyber Law",
    "q": "Under the Indian IT Act, who possesses statutory authority to investigate cyber offenses?",
    "options": [
      "A police officer not below the rank of Inspector",
      "Any university student",
      "Commercial software vendors",
      "Private internet service providers"
    ],
    "ans": 0,
    "exp": "Section 78 of the IT Act states that only a police officer not below the rank of Inspector can investigate cyber offenses.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 158,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Cyber Law",
    "q": "What is the statutory penalty under Section 66B of the IT Act for dishonestly receiving stolen computer resources?",
    "options": [
      "Imprisonment up to 3 years and/or fine up to ₹1 Lakh",
      "Death penalty",
      "Verbal warning only",
      "No punishment exists"
    ],
    "ans": 0,
    "exp": "Section 66B prescribes up to 3 years imprisonment or fine up to ₹1 Lakh.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 159,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Cyber Law",
    "q": "Which section of the IT Act 2000 addresses punishment for sending offensive or menacing messages through communication services (subsequently struck down by Supreme Court in Shreya Singhal case)?",
    "options": [
      "Section 66A",
      "Section 43",
      "Section 70",
      "Section 65"
    ],
    "ans": 0,
    "exp": "Section 66A was struck down by the Supreme Court of India in Shreya Singhal v. Union of India (2015) for violating free speech under Article 19(1)(a).",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 160,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Lifecycle",
    "q": "During which phase does an ethical hacker identify software service versions and running daemons?",
    "options": [
      "Scanning and Enumeration",
      "Reporting",
      "Scope Negotiation",
      "Legal Settlement"
    ],
    "ans": 0,
    "exp": "Service enumeration occurs in Phase 2 via banner grabbing and Nmap probes.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 161,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Lifecycle",
    "q": "What tool is primarily used during Phase 2 to discover live hosts and open TCP ports?",
    "options": [
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Ghidra"
    ],
    "ans": 0,
    "exp": "Nmap is the industry standard for host discovery and port enumeration.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 162,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Reconnaissance",
    "q": "What is 'Footprinting' in the context of Phase 1 reconnaissance?",
    "options": [
      "The initial blueprinting of a target's technological landscape, organizational structure, and internet presence",
      "Physically measuring server chassis dimensions",
      "Tracing network cables on the floor",
      "Formatting hard drives with zeros"
    ],
    "ans": 0,
    "exp": "Footprinting gathers structural intelligence regarding target infrastructure.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 163,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Reconnaissance",
    "q": "Which DNS record type maps domain names to IPv4 addresses?",
    "options": [
      "A Record",
      "AAAA Record",
      "MX Record",
      "CNAME Record"
    ],
    "ans": 0,
    "exp": "A records map hostnames to 32-bit IPv4 addresses; AAAA maps to 128-bit IPv6.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 164,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Reconnaissance",
    "q": "Which DNS record indicates authoritative mail exchange servers for a domain?",
    "options": [
      "MX Record",
      "TXT Record",
      "NS Record",
      "SOA Record"
    ],
    "ans": 0,
    "exp": "MX (Mail Exchange) records specify mail routing destinations for the domain.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 165,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Reconnaissance",
    "q": "What does the Google Dork operator `intitle:` specify?",
    "options": [
      "Restricts search results to pages containing the keyword within their HTML title tag",
      "Searches only internal server disks",
      "Filters results by internet cable type",
      "Translates text to another language"
    ],
    "ans": 0,
    "exp": "`intitle:` filters pages where the title element matches the query term.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 166,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Core Tools",
    "q": "What is the role of an 'Auxiliary' module in the Metasploit Framework?",
    "options": [
      "Performing non-exploitation actions such as network scanning, service fingerprinting, and denial of service verification",
      "Deploying permanent rootkits",
      "Replacing the target kernel",
      "Burning optical CDs"
    ],
    "ans": 0,
    "exp": "Auxiliary modules perform scanning, sniffing, and protocol probes without delivering payloads.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 167,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Core Tools",
    "q": "What command initiates an Nmap ping sweep across the subnet 192.168.1.0/24 without port scanning?",
    "options": [
      "nmap -sn 192.168.1.0/24",
      "nmap -p- 192.168.1.0/24",
      "nmap -O 192.168.1.0/24",
      "nmap -sS 192.168.1.0/24"
    ],
    "ans": 0,
    "exp": "`-sn` (formerly `-sP`) disables port scanning and performs host discovery only.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 168,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Risk & CVSS",
    "q": "What does the 'Attack Vector' (AV) metric in CVSS v3.1 measure?",
    "options": [
      "The context through which vulnerability exploitation is possible (Network, Adjacent, Local, Physical)",
      "The price of the software package",
      "The number of lines of code",
      "The processor architecture"
    ],
    "ans": 0,
    "exp": "AV evaluates remote network accessibility vs local or physical access requirements.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 169,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Risk & CVSS",
    "q": "If a vulnerability requires the victim to click a malicious link to trigger execution, which CVSS metric is affected?",
    "options": [
      "User Interaction: Required (UI:R)",
      "Attack Vector: Physical",
      "Privileges Required: High",
      "Scope: Unchanged"
    ],
    "ans": 0,
    "exp": "User Interaction (UI) is flagged as 'Required' when victim interaction is needed.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 170,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Social Engineering",
    "q": "What is 'Pretexting' in social engineering?",
    "options": [
      "Creating an invented scenario or believable identity to manipulate a victim into releasing information",
      "Printing fake paper currency",
      "Updating software drivers",
      "Compiling C source code"
    ],
    "ans": 0,
    "exp": "Pretexting relies on an established false backstory to establish trust.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 171,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Social Engineering",
    "q": "What physical defense best mitigates 'Tailgating' through secure datacenter entry points?",
    "options": [
      "Mantraps / turnstiles and security guard enforcement",
      "Installing faster Wi-Fi routers",
      "Using complex database passwords",
      "Running antivirus software on servers"
    ],
    "ans": 0,
    "exp": "Mantraps (interlocking doors) physically restrict passage to one authorized badge at a time.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 172,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Legal & Ethics",
    "q": "Why must penetration testers maintain an immutable execution audit log during engagements?",
    "options": [
      "To provide indisputable proof of testing actions, distinguish tester activity from concurrent malicious attacks, and substantiate findings",
      "To sell customer logs to marketing agencies",
      "To fill up hard drive storage space",
      "Because operating systems crash without logs"
    ],
    "ans": 0,
    "exp": "Audit logs protect testers against accusations of unauthorized collateral damage.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 173,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "What does 'Black-Box Testing' mean in penetration testing methodology?",
    "options": [
      "Testing conducted with zero prior knowledge of internal target architecture, source code, or network diagrams",
      "Testing conducted with complete source code access",
      "Testing performed only during nighttime",
      "Testing conducted inside dark server rooms"
    ],
    "ans": 0,
    "exp": "Black-box tests simulate external adversaries with zero prior system knowledge.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 174,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "What does 'White-Box Testing' mean in penetration testing?",
    "options": [
      "Testing performed with full knowledge, including architecture diagrams, source code access, and network documentation",
      "Testing performed without contracts",
      "Testing restricted to color displays",
      "Testing performed using pre-recorded videos"
    ],
    "ans": 0,
    "exp": "White-box testing grants complete architectural and source transparency to maximize depth.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 175,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Definitions & Scope",
    "q": "What is 'Grey-Box Testing'?",
    "options": [
      "Testing conducted with partial knowledge (e.g., standard low-privileged user credentials and basic network map)",
      "Testing conducted by script kiddies",
      "Testing without permission",
      "Testing using expired software"
    ],
    "ans": 0,
    "exp": "Grey-box simulates an authenticated user or insider with partial knowledge.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 176,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Explain the concept of 'Defense-in-Depth'.",
    "options": [],
    "ans": 0,
    "exp": "Defense-in-Depth is an information security strategy that employs multiple layers of redundant defensive controls (firewalls, intrusion prevention, endpoint protection, least privilege, data encryption, and employee training) so that if one defensive layer fails, subsequent layers prevent total system compromise.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 177,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: State the difference between an 'Exploit' and a 'Zero-Day'.",
    "options": [],
    "ans": 0,
    "exp": "An Exploit is a software program or crafted input that takes advantage of a known vulnerability to alter software behavior. A Zero-Day is a vulnerability that is unknown to the software vendor or public, meaning zero days have elapsed since vendor discovery and zero security patches exist.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 178,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is a 'Proof-of-Concept' (PoC) in ethical penetration testing?",
    "options": [],
    "ans": 0,
    "exp": "A Proof-of-Concept (PoC) is a minimally invasive demonstration, script, or screenshot showing that an identified vulnerability is genuinely exploitable, without executing damaging or destructive payloads on client infrastructure.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 179,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is CVSS and who maintains the standard?",
    "options": [],
    "ans": 0,
    "exp": "CVSS stands for Common Vulnerability Scoring System. It is an open industry framework for communicating the characteristics and severity of software vulnerabilities via numerical scores from 0.0 to 10.0, maintained by FIRST (Forum of Incident Response and Security Teams).",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 180,
    "unit": "Unit 1",
    "part": 1,
    "chapter": 1,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Why is DNS Zone Transfer testing considered an active reconnaissance technique?",
    "options": [],
    "ans": 0,
    "exp": "DNS Zone Transfer testing sends direct AXFR query packets to the target's authoritative nameserver (over TCP port 53). Because it directly interacts with the target's server and generates connection logs, it is an active reconnaissance technique.",
    "viva_tip": "High-yield university exam topic."
  },
  {
    "id": 181,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "OSI Layer Attacks",
    "q": "At which layer of the OSI model does an Address Resolution Protocol (ARP) poisoning attack operate?",
    "options": [
      "Layer 2 (Data Link Layer)",
      "Layer 3 (Network Layer)",
      "Layer 4 (Transport Layer)",
      "Layer 7 (Application Layer)"
    ],
    "ans": 0,
    "exp": "ARP operates at Layer 2 (Data Link Layer), mapping 32-bit IPv4 addresses to 48-bit physical MAC addresses within local Ethernet broadcast domains.",
    "viva_tip": "ARP = Layer 2 Data Link; IP = Layer 3 Network; TCP/UDP = Layer 4 Transport."
  },
  {
    "id": 182,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Transport Layer Attacks",
    "q": "What mechanism does an attacker exploit when executing a classic TCP SYN Flood attack?",
    "options": [
      "Transmitting malformed DNS queries to trigger UDP buffer overflows",
      "Flooding target servers with TCP SYN packets while ignoring or spoofing return addresses, exhausting the server's half-open connection queue (SYN Backlog)",
      "Injecting rogue BGP routes into core internet routers",
      "Tampering with physical fiber optic cables"
    ],
    "ans": 1,
    "exp": "A TCP SYN flood transmits massive volumes of SYN packets without completing the 3-way handshake (never sending final ACKs). The target's SYN backlog queue fills with half-open connections, denying legitimate users.",
    "viva_tip": "Mitigation: SYN Cookies, connection rate limiting, and stateful firewall inspection."
  },
  {
    "id": 183,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "OSI Layer Attacks",
    "q": "Which network attack vectors are mapped accurately to their respective OSI protocol layers?",
    "options": [
      "Layer 2: MAC Flooding and ARP Poisoning",
      "Layer 3: IP Address Spoofing and ICMP Smurf attacks",
      "Layer 4: TCP SYN Flooding and Port Scanning",
      "Layer 7: SQL Injection and Cross-Site Scripting (XSS)",
      "Layer 1: DNS Tunneling and HTTP Header Injection"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "Statements A, B, C, and D are correctly mapped. DNS tunneling and HTTP attacks operate at Layer 7 (Application), not Layer 1 (Physical).",
    "viva_tip": "Examiners love asking layer-wise attack categorization questions."
  },
  {
    "id": 184,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Defense-in-Depth",
    "q": "Short Q&A: Define a 'Demilitarized Zone' (DMZ) in network architecture and explain which servers should reside inside it.",
    "options": [],
    "ans": 0,
    "short_ans": "A DMZ is a physical or logical perimeter subnetwork that separates an organization's internal private LAN from untrusted external networks (the Internet). Servers that must be publicly accessible from the outside (e.g., public web servers, mail gateways, external DNS servers, and reverse proxies) reside in the DMZ. Internal databases and domain controllers must never reside in the DMZ.",
    "exp": "If a DMZ server is compromised, internal stateful firewalls prevent the attacker from pivoting directly into the core private LAN.",
    "viva_tip": "DMZ buffers public web services from internal databases."
  },
  {
    "id": 185,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Firewalls",
    "q": "What is the primary operational distinction between a Stateless Packet Filter and a Stateful Inspection Firewall?",
    "options": [
      "Stateless filters inspect individual packets against static ACLs in isolation; Stateful firewalls track active connection states (SYN, ESTABLISHED, FIN) in a state table",
      "Stateless filters only run on Linux; Stateful firewalls only run on Windows",
      "Stateless filters block all Wi-Fi traffic; Stateful firewalls allow all Wi-Fi traffic",
      "There is no difference; both operate identically at Layer 7"
    ],
    "ans": 0,
    "exp": "Stateful firewalls maintain a Connection State Table. Inbound packets are automatically admitted if they belong to an established outbound TCP session, whereas stateless filters inspect every packet independently.",
    "viva_tip": "State table tracks connection context; stateless evaluates static rules only."
  },
  {
    "id": 186,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Firewalls (iptables)",
    "q": "In Linux `iptables`, which command sets the default policy of the INPUT chain to drop all incoming packets that do not match an explicit allow rule?",
    "options": [
      "iptables -P INPUT DROP",
      "iptables -F INPUT ACCEPT",
      "iptables -A INPUT -j REJECT",
      "iptables --delete-all-chains"
    ],
    "ans": 0,
    "exp": "`iptables -P <CHAIN> <TARGET>` sets the default chain policy. `iptables -P INPUT DROP` enforces a secure 'default-deny' stance.",
    "viva_tip": "`-P` specifies chain Policy; default deny is a foundational security principle."
  },
  {
    "id": 187,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Firewalls",
    "q": "Which parameters are evaluated by a traditional Layer 4 Stateful Firewall when processing an incoming TCP packet?",
    "options": [
      "Source IPv4/IPv6 Address",
      "Destination IPv4/IPv6 Address",
      "Destination Port and Source Port",
      "TCP Header Flags (SYN, ACK, FIN, RST)",
      "Full HTTP POST JSON application payload payload strings"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "Layer 4 stateful firewalls inspect IPs, ports, and TCP flags/sequence numbers. Deep application payload parsing (e.g. JSON/SQL strings) requires a Layer 7 Next-Gen Firewall (NGFW) or WAF.",
    "viva_tip": "Layer 4 inspects headers and state; Layer 7 inspects application payloads."
  },
  {
    "id": 188,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Firewalls (iptables)",
    "q": "Short Q&A: Explain the significance of the `iptables` rule: `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`.",
    "options": [],
    "ans": 0,
    "short_ans": "This rule utilizes the Linux kernel connection tracking (`conntrack`) subsystem. It automatically accepts all incoming packets that belong to an existing, established bidirectional connection initiated by an internal user (such as responses to outbound web browsing or DNS requests). This allows outbound communication without opening broad, insecure inbound ports.",
    "exp": "Enables stateful return traffic while keeping unsolicited incoming ports closed.",
    "viva_tip": "Memorize this exact iptables rule for 5-mark firewall questions."
  },
  {
    "id": 189,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "IDS vs IPS",
    "q": "What is the primary architectural difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
    "options": [
      "IDS is deployed out-of-band (via TAP or SPAN port) to passively alert on threats; IPS is deployed inline to actively inspect and drop malicious packets",
      "IDS only detects viruses; IPS only detects spam emails",
      "IDS blocks network traffic instantly; IPS only writes log files after an hour",
      "IDS requires hardware dongles; IPS runs in web browsers"
    ],
    "ans": 0,
    "exp": "An IDS monitors traffic copies out-of-band and alerts administrators passively. An IPS sits inline directly in the traffic flow and can actively drop packets or reset sessions.",
    "viva_tip": "IDS = Passive alarm; IPS = Active inline blocker/bouncer."
  },
  {
    "id": 190,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Snort Rules",
    "q": "Examine the following Snort rule:\n`alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS 80 (msg:\"SQLi Attempt\"; content:\"' OR 1=1\"; nocase; sid:1000001;)`\nWhat does the `nocase` modifier accomplish?",
    "options": [
      "Enforces case-insensitive pattern matching for the specified content string",
      "Drops the packet immediately without logging",
      "Encrypts the packet payload using AES-256",
      "Disables rule matching during weekend hours"
    ],
    "ans": 0,
    "exp": "`nocase` instructs the Snort detection engine to match content regardless of capitalization (matching `' OR 1=1'`, `' or 1=1'`, `' Or 1=1'`, etc.).",
    "viva_tip": "`nocase` prevents evasion via mixed-case capitalization."
  },
  {
    "id": 191,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "IDS Detection Models",
    "q": "Which statements accurately compare Signature-Based Detection with Anomaly-Based Detection in IDS/IPS?",
    "options": [
      "Signature-based detection matches traffic against known CVE attack patterns; it has high accuracy for known threats but zero efficacy against zero-days",
      "Anomaly-based detection establishes statistical baselines of normal network behavior and alerts on significant deviations",
      "Anomaly-based detection can potentially detect zero-day attacks but often produces higher false positive rates",
      "Signature-based systems require machine learning models to detect port scans",
      "Both models can be implemented within modern enterprise IDS/IPS sensors"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Statements A, B, C, and E are correct. Signature-based detection relies on deterministic rules and regex, not machine learning.",
    "viva_tip": "Signatures = Known attacks (fast, low false positives); Anomaly = Baseline deviations (detects zero-days, higher false positives)."
  },
  {
    "id": 192,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "IDS vs IPS",
    "q": "Short Q&A: In IDS tuning, explain the difference between a 'False Positive' and a 'False Negative', and state which presents greater operational risk.",
    "options": [],
    "ans": 0,
    "short_ans": "1. False Positive: The IDS alerts on benign, legitimate network traffic, misidentifying it as malicious (causes alert fatigue and operational disruption).\n2. False Negative: The IDS fails to detect an actual malicious intrusion, allowing the attack to pass completely unnoticed.\n3. Greater Risk: A False Negative is vastly more dangerous because an attacker penetrates the network undetected, whereas a False Positive is merely an operational nuisance.",
    "exp": "False negatives lead to silent compromises, data breaches, and undetected ransomware deployment.",
    "viva_tip": "False Negatives = Undetected compromise (fatal); False Positives = Alert noise (annoying)."
  },
  {
    "id": 193,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "VPNs (IPsec)",
    "q": "In IPsec VPN architecture, which protocol provides both data encryption (confidentiality) AND packet integrity/authentication?",
    "options": [
      "Encapsulating Security Payload (ESP)",
      "Authentication Header (AH)",
      "Internet Control Message Protocol (ICMP)",
      "Address Resolution Protocol (ARP)"
    ],
    "ans": 0,
    "exp": "ESP (protocol 50) provides confidentiality, integrity, and anti-replay protection. AH (protocol 51) provides integrity and authentication only, with zero data encryption.",
    "viva_tip": "ESP = Encryption + Authentication; AH = Authentication only (No encryption)."
  },
  {
    "id": 194,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "VPN Modes",
    "q": "What is the difference between IPsec 'Tunnel Mode' and 'Transport Mode'?",
    "options": [
      "Tunnel Mode encrypts the entire original IP packet (header + payload) and encapsulates it inside a new IP header; Transport Mode encrypts only the IP payload",
      "Tunnel Mode only operates on copper cables; Transport Mode operates on Wi-Fi",
      "Tunnel Mode cannot encrypt TCP traffic; Transport Mode only encrypts UDP",
      "Tunnel Mode operates at Layer 7; Transport Mode operates at Layer 1"
    ],
    "ans": 0,
    "exp": "Tunnel mode encapsulates and encrypts the entire original IP packet, adding a new outer IP header (ideal for site-to-site VPNs). Transport mode protects only the payload, leaving the original IP header exposed.",
    "viva_tip": "Tunnel mode = Whole packet encrypted; Transport mode = Payload only."
  },
  {
    "id": 195,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Proxy Servers",
    "q": "What is the primary function of a 'Reverse Proxy' deployed in front of internal enterprise web servers?",
    "options": [
      "Terminating inbound TLS/SSL connections, balancing client load, and concealing backend server internal IP addresses",
      "Monitoring employee outbound web browsing behavior to block social media",
      "Cracking Wi-Fi WPA2 handshakes via GPU brute-forcing",
      "Overriding root passwords on internal Linux database servers"
    ],
    "ans": 0,
    "exp": "A reverse proxy (e.g. Nginx, HAProxy) fronts backend servers, providing SSL termination, caching, load balancing, and obscuring internal network topologies from public clients.",
    "viva_tip": "Forward proxy protects clients; Reverse proxy shields servers."
  },
  {
    "id": 196,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Proxies",
    "q": "Short Q&A: Explain the security difference between a Forward Proxy and a Reverse Proxy.",
    "options": [],
    "ans": 0,
    "short_ans": "A Forward Proxy sits on the client side, acting on behalf of internal clients reaching out to the external internet. It hides internal client IP addresses and enforces content filtering policies. A Reverse Proxy sits on the server side, acting on behalf of internal web servers receiving external requests. It shields the backend servers, offloads SSL decryption, and provides load balancing and DDoS buffering.",
    "exp": "Forward proxies protect and control internal users; reverse proxies protect and optimize internal servers.",
    "viva_tip": "Forward proxy = Client side; Reverse proxy = Server side."
  },
  {
    "id": 197,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "VAPT Methodology",
    "q": "Which automated vulnerability scanning engine is widely recognized in enterprise infrastructure assessments?",
    "options": [
      "Nessus / OpenVAS",
      "Vim text editor",
      "Ping command line utility",
      "GCC C compiler"
    ],
    "ans": 0,
    "exp": "Tenable Nessus and Greenbone OpenVAS are industry-standard enterprise vulnerability scanning engines that detect unpatched CVEs, default credentials, and security misconfigurations.",
    "viva_tip": "Nessus and OpenVAS are the primary vulnerability scanning platforms."
  },
  {
    "id": 198,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "VAPT Scanning",
    "q": "What are the key advantages of performing a 'Credentialed' vulnerability scan over an 'Uncredentialed' scan?",
    "options": [
      "Significantly reduced false-positive rates by directly inspecting installed software registries and file system versions",
      "Ability to inspect missing local OS security patches and unpatched third-party libraries",
      "Ability to evaluate internal system hardening and weak local permissions",
      "Generating zero network traffic between scanner and target host",
      "Simulating external remote attackers with no inside knowledge"
    ],
    "ans": [
      0,
      1,
      2
    ],
    "exp": "Statements A, B, and C describe credentialed scans (using SSH/SMB admin accounts). Statement D is false because credentialed scans still generate traffic; Statement E describes uncredentialed scans.",
    "viva_tip": "Credentialed scans log in and inspect internals; uncredentialed scans probe from outside."
  },
  {
    "id": 199,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Packet Sniffing",
    "q": "What hardware mode must a Network Interface Card (NIC) be switched into to capture all frames traversing a physical network segment, regardless of destination MAC address?",
    "options": [
      "Promiscuous Mode",
      "Stealth Mode",
      "Hibernate Mode",
      "Half-Duplex Mode"
    ],
    "ans": 0,
    "exp": "In promiscuous mode, the NIC disables its hardware MAC address filter and forwards every received Ethernet frame to the operating system kernel for inspection.",
    "viva_tip": "Promiscuous mode disables hardware MAC destination filtering."
  },
  {
    "id": 200,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Switched Sniffing",
    "q": "Why does standard passive sniffing fail on a modern switched Ethernet network, unlike legacy hubs?",
    "options": [
      "Switches inspect destination MAC addresses and forward frames only to the specific physical port connected to that recipient MAC, rather than broadcasting to all ports",
      "Switches automatically encrypt all plaintext HTTP traffic using quantum cryptography",
      "Switches drop all packets containing passwords",
      "Switches only operate when connected to optical fiber"
    ],
    "ans": 0,
    "exp": "Switches use Content Addressable Memory (CAM) tables to unicast frames specifically to destination physical switch ports, isolating unicast traffic between communicating endpoints.",
    "viva_tip": "Hubs broadcast to all ports; switches unicast to destination ports using CAM tables."
  },
  {
    "id": 201,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Hard",
    "topic": "tcpdump Filters",
    "q": "Which `tcpdump` command using Berkeley Packet Filters (BPF) captures only TCP packets with the SYN flag set (connection requests)?",
    "options": [
      "tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn) != 0'",
      "tcpdump -i eth0 'udp port 53'",
      "tcpdump -i eth0 'icmp'",
      "tcpdump -i eth0 'arp'"
    ],
    "ans": 0,
    "exp": "`tcp[tcpflags] & (tcp-syn) != 0` evaluates the TCP header offset at byte 13 using bitwise AND to filter packets where the SYN bit is set.",
    "viva_tip": "Byte 13 of the TCP header contains control flags (SYN, ACK, FIN, RST, PSH, URG)."
  },
  {
    "id": 202,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Wireshark Analysis",
    "q": "Short Q&A: In Wireshark, explain how the 'Follow TCP Stream' feature assists in credential recovery during a network assessment.",
    "options": [],
    "ans": 0,
    "short_ans": "The 'Follow TCP Stream' feature automatically reconstructs fragmented Layer 4 TCP segments, strips protocol headers, and reassembles the complete bidirectional Layer 7 application conversation into a readable text transcript. If cleartext protocols (HTTP POST, Telnet, FTP) are captured, user credentials, passwords, and transmitted data appear directly in plaintext.",
    "exp": "Reassembles full application-layer conversations from raw TCP packet streams.",
    "viva_tip": "Follow TCP Stream reassembles fragmented data into full application conversations."
  },
  {
    "id": 203,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "ARP Spoofing",
    "q": "What fundamental structural flaw in the Address Resolution Protocol (RFC 826) enables ARP Cache Poisoning?",
    "options": [
      "ARP is completely stateless and trusts unsolicited Gratuitous ARP replies without any cryptographic authentication or verification",
      "ARP packet sizes are limited to exactly 16 bytes",
      "ARP only works on dial-up internet connections",
      "ARP requires root passwords to be broadcast in plaintext"
    ],
    "ans": 0,
    "exp": "ARP lacks authentication. Operating systems blindly update their internal ARP cache whenever an ARP reply is received, even if no ARP request was sent.",
    "viva_tip": "ARP is stateless and unauthenticated; hosts accept unsolicited Gratuitous ARP replies."
  },
  {
    "id": 204,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Hard",
    "topic": "ARP Poisoning Commands",
    "q": "To establish a full bidirectional Man-in-the-Middle (MITM) position between Target (192.168.1.50) and Gateway (192.168.1.1) using `arpspoof`, which commands must be executed?",
    "options": [
      "echo 1 > /proc/sys/net/ipv4/ip_forward (Enable Linux kernel packet forwarding)",
      "arpspoof -i eth0 -t 192.168.1.50 192.168.1.1 (Poison target cache claiming attacker is gateway)",
      "arpspoof -i eth0 -t 192.168.1.1 192.168.1.50 (Poison gateway cache claiming attacker is target)",
      "rm -rf /etc/network/interfaces",
      "reboot -f"
    ],
    "ans": [
      0,
      1,
      2
    ],
    "exp": "Bidirectional interception requires poisoning both directions (Target & Gateway) and enabling IP forwarding in the Linux kernel (`ip_forward=1`) so packets pass through seamlessly without breaking internet connectivity.",
    "viva_tip": "Must poison both target and gateway while enabling ip_forward in the kernel."
  },
  {
    "id": 205,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "DNS Spoofing",
    "q": "How does DNS Cache Poisoning (Kaminsky attack) compromise a victim's web browsing session?",
    "options": [
      "Forges DNS response records to resolve legitimate domain names (e.g., bank.com) to an attacker's malicious IP before the authoritative server responds",
      "Physically unplugs the DNS server cable",
      "Forces the victim's web browser to delete all bookmarks",
      "Overclocks the victim's router CPU"
    ],
    "ans": 0,
    "exp": "DNS cache poisoning injects fraudulent IP mappings into a recursive DNS resolver by predicting 16-bit Transaction IDs and source ports, redirecting users to phishing portals.",
    "viva_tip": "Kaminsky attack poisons DNS resolver caches by predicting 16-bit Transaction IDs."
  },
  {
    "id": 206,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "MITM & SSL Stripping",
    "q": "What security mechanism prevents an attacker from executing an SSL Stripping (`sslstrip`) attack against high-security banking domains?",
    "options": [
      "HTTP Strict Transport Security (HSTS) with Preloading",
      "Disabling JavaScript in web browsers",
      "Using static IP addresses on all home laptops",
      "Restarting the computer after every web search"
    ],
    "ans": 0,
    "exp": "HSTS instructs browsers to connect exclusively via HTTPS. Preloaded HSTS ensures the browser refuses to initiate cleartext HTTP connections even on initial page visits.",
    "viva_tip": "HSTS blocks SSL stripping by forcing browser-side HTTPS enforcement."
  },
  {
    "id": 207,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Hard",
    "topic": "Defensive Switching",
    "q": "Short Q&A: Explain how Dynamic ARP Inspection (DAI) and DHCP Snooping mitigate ARP Poisoning attacks on enterprise switches.",
    "options": [],
    "ans": 0,
    "short_ans": "1. DHCP Snooping inspects DHCP traffic on switch ports, classifying ports as trusted (uplinks to DHCP servers) or untrusted (user endpoints). It builds a dynamic binding database of valid IP-to-MAC-to-Port mappings.\n2. Dynamic ARP Inspection (DAI) intercepts all ARP packets on untrusted ports and validates them against the DHCP Snooping database. Any forged gratuitous ARP packet claiming an IP not bound to that port's MAC address is instantly dropped at hardware wire speed.",
    "exp": "DHCP Snooping builds the binding database; DAI validates and drops forged ARP packets.",
    "viva_tip": "DAI + DHCP Snooping is the primary enterprise hardware defense against ARP spoofing."
  },
  {
    "id": 208,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Privilege Escalation",
    "q": "What is the difference between 'Horizontal' and 'Vertical' privilege escalation?",
    "options": [
      "Horizontal is accessing resources of another user with identical privilege tiers (User A &rarr; User B); Vertical is elevating privileges to system administrator (Standard User &rarr; root/SYSTEM)",
      "Horizontal operates on Windows; Vertical operates on Linux",
      "Horizontal is physical; Vertical is wireless",
      "Horizontal is legal; Vertical is illegal"
    ],
    "ans": 0,
    "exp": "Horizontal escalation accesses another user account at the same tier. Vertical escalation elevates an unprivileged account to superuser (root or Administrator).",
    "viva_tip": "Horizontal = Same tier (peer to peer); Vertical = Low to root/admin."
  },
  {
    "id": 209,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Linux Privilege Escalation",
    "q": "Which Linux terminal command finds all executables with the SUID (Set User ID) permission bit set?",
    "options": [
      "find / -perm -u=s -type f 2>/dev/null",
      "ls -la /home",
      "cat /etc/passwd",
      "ps aux | grep root"
    ],
    "ans": 0,
    "exp": "`find / -perm -u=s -type f 2>/dev/null` searches root filesystem for files with the SUID bit set (`-perm -u=s`), discarding permission-denied errors to `/dev/null`.",
    "viva_tip": "SUID binaries execute with file owner privileges (root); exploitable binaries allow root shell escapes."
  },
  {
    "id": 210,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Linux Privilege Escalation",
    "q": "Which misconfigurations on a Linux operating system frequently lead to vertical root privilege escalation?",
    "options": [
      "Misconfigured Sudo permissions (`sudo -l`) permitting execution of binaries like `vim`, `find`, or `less` as root without a password",
      "SUID permission bit set on administrative binaries with known shell escape mechanisms",
      "System cron jobs executing world-writable shell scripts with root privileges",
      "Using the command `cd /var/log` to view system log directories",
      "Vulnerable, unpatched Linux kernel drivers susceptible to memory corruption (e.g., Dirty COW)"
    ],
    "ans": [
      0,
      1,
      2,
      4
    ],
    "exp": "Sudo escapes, vulnerable SUID binaries, writable cron jobs, and kernel exploits allow root escalation. Changing directories is normal behavior.",
    "viva_tip": "Four classic Linux vectors: Sudo, SUID, Cron jobs, and Kernel exploits."
  },
  {
    "id": 211,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Hard",
    "topic": "Malware Architectures",
    "q": "How does a Kernel-Mode Rootkit maintain stealth compared to standard user-space malware?",
    "options": [
      "By hooking core operating system kernel system calls (e.g. `sys_getdents`) and data structures directly in Ring 0, rendering its processes and files invisible to tools like `ps`, `netstat`, and Task Manager",
      "By playing loud audio alerts to distract administrators",
      "By changing the desktop wallpaper every 10 seconds",
      "By running only on battery power"
    ],
    "ans": 0,
    "exp": "Kernel rootkits operate in Ring 0 privilege. By hooking kernel system calls (like directory enumeration `sys_getdents`), they filter out their own files and sockets before user-mode tools can see them.",
    "viva_tip": "Kernel rootkits modify Ring 0 system calls, blinding diagnostic tools."
  },
  {
    "id": 212,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Easy",
    "topic": "Wireless Security (WEP)",
    "q": "What primary cryptographic weakness caused Wired Equivalent Privacy (WEP) to be completely cracked within minutes?",
    "options": [
      "Use of an undersized 24-bit Initialization Vector (IV) with the RC4 stream cipher, leading to rapid IV reuse and algebraic key recovery via FMS attacks",
      "Using RSA-4096 asymmetric public keys on low-power routers",
      "Mandating passwords to be exactly 100 characters long",
      "Transmitting data over satellite signals instead of radio frequencies"
    ],
    "ans": 0,
    "exp": "WEP combined a static key with a small 24-bit IV using RC4. In active networks, IVs repeat after ~16 million packets, allowing algebraic master key recovery within minutes.",
    "viva_tip": "WEP flaw = 24-bit small IV + RC4 stream cipher reuse."
  },
  {
    "id": 213,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security (WPA2)",
    "q": "What encryption standard and cipher suite is mandated by IEEE 802.11i WPA2?",
    "options": [
      "CCMP based on AES-128",
      "TKIP based on RC4",
      "DES-56",
      "Plaintext ASCII"
    ],
    "ans": 0,
    "exp": "WPA2 mandates CCMP (Counter Mode with Cipher Block Chaining MAC Protocol) based on the AES-128 block cipher.",
    "viva_tip": "WPA2 = CCMP/AES-128; WPA = TKIP/RC4; WEP = RC4 with 24-bit IV."
  },
  {
    "id": 214,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Hard",
    "topic": "WPA2 4-Way Handshake",
    "q": "During the WPA/WPA2 4-Way Handshake, which dynamic transient key is derived by both the Access Point and Client to encrypt unicast data frames?",
    "options": [
      "Pairwise Transient Key (PTK)",
      "Group Temporal Key (GTK)",
      "Master Boot Record (MBR)",
      "Dynamic Host Configuration Key (DHCK)"
    ],
    "ans": 0,
    "exp": "The PTK is derived from the Pairwise Master Key (PMK), ANonce, SNonce, AP MAC, and Client MAC. It encrypts unicast traffic. The GTK encrypts broadcast/multicast traffic.",
    "viva_tip": "PTK = Unicast traffic; GTK = Broadcast/Multicast traffic."
  },
  {
    "id": 215,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MSQ",
    "diff": "Medium",
    "topic": "Aircrack-ng Workflow",
    "q": "Which tools from the Aircrack-ng suite are correctly mapped to their roles in capturing and cracking a WPA2 4-way handshake?",
    "options": [
      "`airmon-ng`: Enables 802.11 RF monitor mode on the wireless interface",
      "`airodump-ng`: Captures raw 802.11 frames and writes handshake packets to file",
      "`aireplay-ng`: Injects deauthentication management frames to force target client re-connection",
      "`aircrack-ng`: Performs offline dictionary attacks against the captured 4-way handshake file",
      "`airformat-ng`: Formats the router firmware over radio waves"
    ],
    "ans": [
      0,
      1,
      2,
      3
    ],
    "exp": "Statements A, B, C, and D are real Aircrack-ng utilities. Statement E is completely fictional.",
    "viva_tip": "Workflow: airmon-ng (monitor) &rarr; airodump-ng (sniff) &rarr; aireplay-ng (deauth) &rarr; aircrack-ng (crack)."
  },
  {
    "id": 216,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "WPA2 Vulnerabilities",
    "q": "Why does an `aireplay-ng` deauthentication attack succeed even on strongly encrypted WPA2 networks?",
    "options": [
      "Because 802.11 management frames (such as deauth and disassociation frames) are unencrypted in standard WPA2 networks unless 802.11w (MFP) is enforced",
      "Because WPA2 passwords are broadcast every 10 seconds",
      "Because Wi-Fi routers disable encryption when clients connect",
      "Because radio waves cannot carry encrypted packets"
    ],
    "ans": 0,
    "exp": "In standard WPA2, 802.11 management frames are unencrypted and unauthenticated. An attacker can forge deauthentication packets using the AP's spoofed MAC address to disconnect clients.",
    "viva_tip": "Deauth frames are unencrypted management frames unless 802.11w (MFP) is enabled."
  },
  {
    "id": 217,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "WPA3 Advances",
    "q": "How does WPA3 prevent offline dictionary brute-force attacks against captured wireless handshakes?",
    "options": [
      "Replaces the 4-way handshake with Simultaneous Authentication of Equals (SAE) based on the Dragonfly handshake, enforcing Forward Secrecy",
      "Requires passwords to be renewed every 60 seconds",
      "Replaces Wi-Fi radio frequencies with infrared light",
      "Disables all client connections"
    ],
    "ans": 0,
    "exp": "WPA3 mandates Simultaneous Authentication of Equals (SAE / Dragonfly handshake). Even if an attacker captures the exchange, the session key cannot be verified offline against a wordlist.",
    "viva_tip": "WPA3 Dragonfly SAE handshake eliminates offline dictionary attacks."
  },
  {
    "id": 218,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Wireless Attacks",
    "q": "Short Q&A: Explain the concept of an 'Evil Twin' attack on wireless networks.",
    "options": [],
    "ans": 0,
    "short_ans": "An Evil Twin attack involves an adversary deploying a rogue wireless Access Point configured with the identical SSID (network name) and cloned MAC address as a legitimate enterprise or public Wi-Fi network. By broadcasting at higher signal strength or injecting deauthentication frames against the real AP, victims are tricked into connecting to the attacker's rogue AP, allowing full MITM credential interception.",
    "exp": "Evil Twin clones legitimate SSIDs to trick client devices into connecting to an attacker-controlled gateway.",
    "viva_tip": "Evil Twin = Rogue AP cloning legitimate SSID and MAC."
  },
  {
    "id": 219,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Hard",
    "topic": "Wireless Cryptography",
    "q": "Short Q&A: Write the mathematical equation for deriving the WPA2 Pairwise Transient Key (PTK).",
    "options": [],
    "ans": 0,
    "short_ans": "The PTK is derived via a Pseudorandom Function (PRF):\n$$\\text{PTK} = \\text{PRF}(\\text{PMK}, \\text{ANonce}, \\text{SNonce}, \\text{AP MAC}, \\text{Client MAC})$$\nWhere PMK is the Pairwise Master Key derived from the WPA2 Pre-Shared Key (passphrase) and SSID via PBKDF2 with 4096 HMAC-SHA1 iterations.",
    "exp": "PTK derivation requires 5 inputs: PMK, ANonce, SNonce, AP MAC, and Client MAC.",
    "viva_tip": "Memorize the 5 inputs: PMK, ANonce, SNonce, AP MAC, Client MAC."
  },
  {
    "id": 220,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "ShortQA",
    "diff": "Medium",
    "topic": "Firewalls vs IPS",
    "q": "Short Q&A: Can a Next-Generation Firewall (NGFW) replace an Intrusion Prevention System (IPS)? Explain.",
    "options": [],
    "ans": 0,
    "short_ans": "Yes, in modern enterprise architectures, Next-Generation Firewalls (NGFWs) converge traditional stateful packet filtering with integrated inline IPS engines, application-layer deep packet inspection (DPI), TLS decryption, and cloud threat intelligence into a unified hardware appliance.",
    "exp": "NGFW combines stateful firewalling, inline IPS, and application awareness in a single appliance.",
    "viva_tip": "NGFW converges stateful inspection with inline IPS and DPI."
  },
  {
    "id": 221,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Network Security",
    "q": "What attack exploits the IP fragmentation reassembly offset to crash target operating systems?",
    "options": [
      "Ping of Death / Teardrop attack",
      "SQL Injection",
      "Cross-Site Scripting",
      "BGP Hijacking"
    ],
    "ans": 0,
    "exp": "Teardrop attacks transmit overlapping fragmented packets, causing buffer crashes during reassembly.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 222,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Port Scanning Types",
    "q": "What TCP flags are set in an Nmap Xmas tree port scan (-sX)?",
    "options": [
      "FIN, PSH, and URG flags",
      "SYN and ACK flags only",
      "RST flag only",
      "No flags set (Null scan)"
    ],
    "ans": 0,
    "exp": "Xmas scans light up the TCP header like a Christmas tree with FIN, PSH, and URG set; closed ports reply with RST.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 223,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Port Scanning Types",
    "q": "What is a TCP Null scan (-sN) in Nmap?",
    "options": [
      "A scan where a packet is sent with all 6 TCP control flags set to zero (0)",
      "A scan that disconnects the router",
      "A scan that requires zero internet data",
      "A scan targeting port 0 only"
    ],
    "ans": 0,
    "exp": "Null scans set zero TCP flags. RFC 793 dictates that closed ports return RST while open ports drop the packet.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 224,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Enumeration Ports",
    "q": "Which standard TCP/UDP port is utilized by the Simple Network Management Protocol (SNMP) for community string queries?",
    "options": [
      "Port 161 (UDP)",
      "Port 80 (TCP)",
      "Port 22 (TCP)",
      "Port 443 (TCP)"
    ],
    "ans": 0,
    "exp": "SNMP queries use UDP port 161; SNMP traps use UDP port 162.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 225,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Enumeration Ports",
    "q": "Which standard port is targeted during Server Message Block (SMB) enumeration for shared folders and IPC$ pipes?",
    "options": [
      "Port 445 (TCP)",
      "Port 25 (TCP)",
      "Port 53 (UDP)",
      "Port 110 (TCP)"
    ],
    "ans": 0,
    "exp": "Direct-hosted SMB over TCP runs on port 445.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 226,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Deception Technologies",
    "q": "What is the primary difference between a Low-Interaction and High-Interaction Honeypot?",
    "options": [
      "Low-interaction honeypots simulate only basic service banners (e.g., HoneyPy); High-interaction honeypots run real operating systems and full services to observe advanced adversary TTPs",
      "Low-interaction runs on mobile phones; High-interaction runs on mainframes",
      "Low-interaction honeypots are illegal; High-interaction are legal",
      "There is no difference"
    ],
    "ans": 0,
    "exp": "Low-interaction simulates banners safely; High-interaction deploys real OS environments capturing full exploit payloads.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 227,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Defenses",
    "q": "What enterprise authentication standard provides mutual cryptographic authentication between client and RADIUS server in WPA2/WPA3 Enterprise?",
    "options": [
      "IEEE 802.1X / EAP-TLS",
      "WEP-64",
      "WPS PIN",
      "Telnet"
    ],
    "ans": 0,
    "exp": "802.1X with EAP-TLS uses X.509 digital certificates for mutual client-server authentication.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 228,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "OS Fingerprinting",
    "q": "How does active OS fingerprinting determine target operating systems?",
    "options": [
      "By analyzing target TCP/IP stack implementation quirks, initial TTL values, TCP window sizes, and responses to malformed probe packets",
      "By reading the color of the computer chassis",
      "By querying the computer manufacturer on social media",
      "By restarting the remote router"
    ],
    "ans": 0,
    "exp": "Different OS kernels (Linux vs Windows vs BSD) implement TCP/IP RFCs with unique default TTLs, window sizes, and probe response quirks.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 229,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Explain the difference between an Nmap TCP SYN Stealth Scan (-sS) and a TCP Connect Scan (-sT).",
    "options": [],
    "ans": 0,
    "exp": "A TCP Connect scan (-sT) completes the full 3-way handshake (SYN, SYN-ACK, ACK) using the OS socket API, meaning the connection is logged by application-level services. A TCP SYN scan (-sS) is 'half-open': upon receiving SYN-ACK, Nmap immediately sends an RST packet to tear down the connection before it completes, avoiding application service logging.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 230,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Network Security",
    "q": "What is an ICMP Smurf attack?",
    "options": [
      "An amplification attack where an attacker broadcasts ICMP echo requests with a spoofed victim source IP, causing all hosts on the subnet to flood the victim with replies",
      "Cracking Wi-Fi keys using blue characters",
      "Overloading web servers with cookies",
      "Formatting hard disks"
    ],
    "ans": 0,
    "exp": "Smurf attacks use broadcast ICMP reflection to amplify traffic against a victim.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 231,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Firewalls",
    "q": "In `iptables`, which built-in table is used for Network Address Translation (port forwarding and masquerading)?",
    "options": [
      "nat",
      "filter",
      "mangle",
      "raw"
    ],
    "ans": 0,
    "exp": "The `nat` table handles PREROUTING, POSTROUTING, and OUTPUT for IP translation.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 232,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Firewalls",
    "q": "What `iptables` target immediately drops a packet and sends an ICMP destination-unreachable error back to the sender?",
    "options": [
      "REJECT",
      "DROP",
      "ACCEPT",
      "LOG"
    ],
    "ans": 0,
    "exp": "DROP silently discards the packet; REJECT sends an explicit error reply (ICMP unreachable or TCP RST).",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 233,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Firewalls",
    "q": "Why is the DROP target preferred over REJECT on external internet-facing perimeter firewalls?",
    "options": [
      "DROP gives zero response feedback to scanning adversaries, slowing down automated port scans and concealing firewall existence",
      "DROP consumes more bandwidth",
      "DROP only works on Wi-Fi",
      "DROP formats the router"
    ],
    "ans": 0,
    "exp": "DROP forces scanners to wait for timeouts, hiding whether a port is filtered or non-existent.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 234,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "IDS & IPS",
    "q": "What is a 'NIDS' sensor?",
    "options": [
      "Network-based Intrusion Detection System that monitors packet traffic across an entire subnet",
      "A hard drive controller",
      "A web browser plugin",
      "An antivirus scanner on a phone"
    ],
    "ans": 0,
    "exp": "NIDS monitors network segments; HIDS monitors host operating system logs and system calls.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 235,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "IDS & IPS",
    "q": "What is an 'HIDS' agent?",
    "options": [
      "Host-based Intrusion Detection System installed directly on an endpoint operating system (e.g. OSSEC/Wazuh)",
      "A hardware network cable",
      "An antenna on a drone",
      "A satellite receiver"
    ],
    "ans": 0,
    "exp": "HIDS monitors local system logs, file integrity (Tripwire), and root privilege changes.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 236,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "VPNs",
    "q": "Which UDP port is standard for IKE (Internet Key Exchange) in IPsec VPN setups?",
    "options": [
      "Port 500",
      "Port 80",
      "Port 22",
      "Port 443"
    ],
    "ans": 0,
    "exp": "IKE uses UDP port 500 (and UDP 4500 for NAT-Traversal).",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 237,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "VAPT",
    "q": "What is a 'Zero-Day' exploit in vulnerability assessment?",
    "options": [
      "An exploit for a software flaw that has zero vendor patches available and is unknown to developers",
      "An exploit that runs at midnight",
      "An exploit that requires no electricity",
      "An expired antivirus tool"
    ],
    "ans": 0,
    "exp": "Zero-days have zero days of patch availability from vendors.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 238,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Packet Sniffing",
    "q": "What is the BPF filter syntax in tcpdump to capture DNS queries on port 53?",
    "options": [
      "udp port 53",
      "tcp port 80",
      "ip proto 1",
      "icmp"
    ],
    "ans": 0,
    "exp": "`udp port 53` isolates standard DNS resolution traffic.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 239,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Packet Sniffing",
    "q": "In Wireshark, what does a packet colored red with black text typically indicate in default coloring rules?",
    "options": [
      "TCP RST or corrupted/bad checksum segment",
      "Encrypted banking password",
      "Successful file download",
      "Video streaming segment"
    ],
    "ans": 0,
    "exp": "Wireshark uses red/black for aborted TCP connections (RST flags) or checksum errors.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 240,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Spoofing & MITM",
    "q": "What command enables IP packet routing on a Linux host so it acts as an inline router during an ARP spoof?",
    "options": [
      "echo 1 > /proc/sys/net/ipv4/ip_forward",
      "echo 0 > /proc/sys/net/ipv4/ip_forward",
      "systemctl stop networking",
      "iptables -F"
    ],
    "ans": 0,
    "exp": "`ip_forward=1` enables packet forwarding through the Linux kernel.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 241,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Spoofing & MITM",
    "q": "What is the effect of running `macof` on a switched network?",
    "options": [
      "Floods the switch CAM table with random MACs, forcing it into fail-open hub broadcast mode",
      "Updates switch firmware to latest version",
      "Encrypts all switch cables",
      "Shuts down the building power"
    ],
    "ans": 0,
    "exp": "`macof` exhausts switch CAM table memory, forcing broadcast behavior.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 242,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "System Security",
    "q": "In Linux, what permission bit allows an executable to run with the permissions of the file's owner?",
    "options": [
      "SUID (Set User ID) bit",
      "Sticky bit",
      "Execute bit",
      "Read bit"
    ],
    "ans": 0,
    "exp": "SUID (represented by `s` in owner permissions, e.g. `-rwsr-xr-x`) runs as file owner.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 243,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "System Security",
    "q": "What is a 'Backdoor' in system compromise?",
    "options": [
      "A covert mechanism or service allowing an attacker to bypass standard authentication and regain remote access",
      "A physical emergency fire exit",
      "A backup power supply",
      "A secondary optical mouse"
    ],
    "ans": 0,
    "exp": "Backdoors provide persistent unauthorized administrative access.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 244,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "System Security",
    "q": "What type of malware installs hidden administrative listeners and communicates with Command & Control (C2) servers?",
    "options": [
      "Trojan / RAT (Remote Access Trojan)",
      "Benign text file",
      "Standard Linux kernel",
      "Optical driver"
    ],
    "ans": 0,
    "exp": "RATs provide remote interactive control to C2 servers.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 245,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What is 'RF Monitor Mode' on wireless network cards?",
    "options": [
      "A mode that allows the card to passively capture 802.11 wireless frames without associating with an Access Point",
      "A mode that connects to monitors and displays",
      "A power saving sleep mode",
      "A high volume speaker mode"
    ],
    "ans": 0,
    "exp": "Monitor mode captures raw 802.11 RF frames without AP association.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 246,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What is the difference between Managed Mode and Monitor Mode on Wi-Fi cards?",
    "options": [
      "Managed mode associates with a single AP as a client; Monitor mode passively captures all over-the-air frames on a channel",
      "Managed mode is faster; Monitor mode is slower",
      "Managed mode only runs on Linux; Monitor mode runs on printers",
      "There is no difference"
    ],
    "ans": 0,
    "exp": "Managed mode requires AP association; Monitor mode sniffs all raw RF frames.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 247,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What does BSSID represent in 802.11 wireless networking?",
    "options": [
      "The 48-bit MAC address of the wireless Access Point radio interface",
      "The human-readable Wi-Fi network name",
      "The encryption password hash",
      "The channel frequency in Gigahertz"
    ],
    "ans": 0,
    "exp": "BSSID is the physical 48-bit MAC address of the wireless access point.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 248,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What does SSID represent in Wi-Fi networks?",
    "options": [
      "Service Set Identifier: the human-readable text name identifying the wireless network",
      "The MAC address of the router",
      "The serial number of the modem",
      "The IP address of Google"
    ],
    "ans": 0,
    "exp": "SSID is the broadcast name of the Wi-Fi network (e.g. 'DU_Campus_WiFi').",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 249,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What is 'WPS' (Wi-Fi Protected Setup) and why is WPS PIN authentication considered insecure?",
    "options": [
      "WPS PIN uses an 8-digit PIN split into two halves, allowing brute-force cracking within hours via Reaver attacks",
      "WPS is quantum encryption",
      "WPS only runs on satellites",
      "WPS requires retinal scanning"
    ],
    "ans": 0,
    "exp": "WPS PIN verification checks first 4 digits and last 3 digits separately, reducing brute-force space to ~11,000 attempts.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 250,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Wireless Security",
    "q": "What tool is commonly used to crack WPS PINs on vulnerable routers?",
    "options": [
      "Reaver / Bully",
      "Wireshark",
      "Metasploit",
      "Nmap"
    ],
    "ans": 0,
    "exp": "Reaver and Bully exploit the design flaw in WPS PIN authentication.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 251,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Network Security",
    "q": "What is 'Port Knocking' in defensive network security?",
    "options": [
      "A method of dynamically opening closed firewall ports by sending a sequence of connection attempts to specific closed ports",
      "Knocking on the physical server chassis",
      "Brute-forcing passwords on port 22",
      "Formatting firewall flash memory"
    ],
    "ans": 0,
    "exp": "Port knocking keeps services completely hidden until a correct port knock sequence is received.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 252,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "System Security",
    "q": "In Windows, what does 'Unquoted Service Path' privilege escalation exploit?",
    "options": [
      "Windows path resolution spaces (e.g., executing `C:\\Program.exe` before `C:\\Program Files\\app.exe`) if file paths contain spaces without quotation marks",
      "Registry keys containing emojis",
      "Corrupted desktop shortcuts",
      "Missing mouse drivers"
    ],
    "ans": 0,
    "exp": "Windows attempts to execute file path segments separated by spaces if not enclosed in quotes.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 253,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Explain the 3-way TCP handshake using ASCII or sequence steps.",
    "options": [],
    "ans": 0,
    "exp": "1. Client &rarr; Server: SYN (Synchronize sequence number X)\n2. Server &rarr; Client: SYN-ACK (Synchronize sequence Y, Acknowledge X+1)\n3. Client &rarr; Server: ACK (Acknowledge Y+1)\nAfter step 3, the connection is ESTABLISHED and data transmission begins.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 254,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Explain how a SYN Cookie mitigates TCP SYN flood attacks without consuming server memory.",
    "options": [],
    "ans": 0,
    "exp": "Instead of storing state in an in-memory SYN backlog queue upon receiving a SYN packet, the server encodes connection parameters (timestamp, MSS, cryptographic secret) into the 32-bit Initial Sequence Number (ISN) of the SYN-ACK packet. When the client returns the final ACK with acknowledgment number ISN+1, the server verifies the cryptographic cookie and allocates memory only then.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 255,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is the Fluhrer-Mantin-Shamir (FMS) attack against WEP?",
    "options": [],
    "ans": 0,
    "exp": "The FMS attack is a cryptographic attack against the RC4 stream cipher used in WEP. By intercepting weakly encrypted packets where the first few bytes of the keystream are known (e.g., standard SNAP/LLC headers) combined with small 24-bit Initialization Vectors, an attacker algebraically reconstructs the shared master key byte-by-byte within minutes.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 256,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is 'Promiscuous Mode' and what command enables it on Linux?",
    "options": [],
    "ans": 0,
    "exp": "Promiscuous mode instructs the Network Interface Card (NIC) to pass all observed Ethernet frames on the network wire to the kernel, disabling hardware MAC destination filtering. On Linux, it is enabled using:\n`ip link set eth0 promisc on` or `ifconfig eth0 promisc`.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 257,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is a 'Rootkit' and how do User-Mode and Kernel-Mode rootkits differ?",
    "options": [],
    "ans": 0,
    "exp": "A Rootkit is a stealth software package designed to maintain undetected persistent administrative access to a compromised system.\n- User-Mode Rootkits hook user-space shared libraries (e.g., modifying `LD_PRELOAD` in Linux or DLL injection in Windows).\n- Kernel-Mode Rootkits operate in Ring 0, directly modifying kernel memory and system call tables (e.g., `sys_getdents`), making detection by standard user diagnostic tools impossible.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 258,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: Explain how 'Dynamic ARP Inspection' (DAI) prevents Man-in-the-Middle attacks.",
    "options": [],
    "ans": 0,
    "exp": "DAI is a hardware security feature on enterprise network switches. When enabled, the switch intercepts all ARP requests and gratuitous ARP replies on untrusted user ports. It validates the sender MAC and IP against the verified DHCP Snooping database. If an unauthorized host attempts to spoof an IP address (such as the default gateway), the switch immediately drops the forged ARP packet at the port level.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 259,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is 'HSTS Preloading' and how does it prevent SSL Stripping?",
    "options": [],
    "ans": 0,
    "exp": "HSTS Preloading is a mechanism where high-security domain names are hardcoded directly into modern web browsers (Chrome, Firefox, Safari). Even on the very first time a user visits the website, the browser refuses to initiate a cleartext HTTP connection and forces HTTPS exclusively. This renders intermediate SSL Stripping proxies (`sslstrip`) completely ineffective.",
    "viva_tip": "High-yield Unit 2 exam question."
  },
  {
    "id": 260,
    "unit": "Unit 2",
    "part": 2,
    "chapter": 2,
    "type": "MCQ",
    "diff": "Medium",
    "topic": "Exam Blueprint",
    "q": "Short Q&A: What is the difference between WPA2 Enterprise and WPA2 Personal (PSK)?",
    "options": [],
    "ans": 0,
    "exp": "- WPA2 Personal (PSK) uses a single Pre-Shared Key (passphrase) shared by all users, which derives individual session keys via the 4-way handshake.\n- WPA2 Enterprise uses IEEE 802.1X network access control with a RADIUS authentication server. Each user authenticates using individual credentials (username/password, certificate via EAP-TLS), preventing users from sniffing each other's traffic.",
    "viva_tip": "High-yield Unit 2 exam question."
  }
];
