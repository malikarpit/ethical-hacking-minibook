import pypdf, re

def clean(t): return ' '.join(t.split())
reader = pypdf.PdfReader('/Users/arpit/minibook/ethical_hacking/activities/28th September 2026 Securing Web Applications_ OWASP Top 10 Framework (2).pdf')
text = clean('\n'.join([p.extract_text() for p in reader.pages]))
msq_part = text[text.find('Multiple-Select Questions'):]
q_splits = re.split(r'\s+(\d+)\.\s+', msq_part)

questions_28 = []
for i in range(1, len(q_splits), 2):
    qnum = int(q_splits[i])
    qbody = q_splits[i+1]
    opt_matches = re.split(r'\s+([A-E])\.\s+', qbody)
    prompt = opt_matches[0].strip()
    opts = [opt_matches[j+1].strip() for j in range(1, len(opt_matches), 2)]
    questions_28.append({'id': qnum, 'q': prompt, 'opts': opts})

print(f"Parsed {len(questions_28)} questions from 28th Sept.")
for q in questions_28[:3]:
    print(f"Q{q['id']}: {q['q']}")
    for idx, o in enumerate(q['opts']):
        print(f"  {chr(65+idx)}. {o}")
    print()
