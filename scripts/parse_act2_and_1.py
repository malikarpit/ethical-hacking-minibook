import pypdf, re

def clean(t): return ' '.join(t.split())

# Activity 2
reader2 = pypdf.PdfReader('/Users/arpit/minibook/ethical_hacking/activities/Activity 2 (1).pdf')
text2 = clean('\n'.join([p.extract_text() for p in reader2.pages]))
# Notice in Activity 2, questions start from page 1: '1. A firewall receives...'
q_splits2 = re.split(r'\s+(\d+)\.\s+', text2)
questions_act2 = []
for i in range(1, len(q_splits2), 2):
    qnum = int(q_splits2[i])
    qbody = q_splits2[i+1]
    if 'A.' in qbody and 'B.' in qbody and 'C.' in qbody and 'D.' in qbody:
        opt_matches = re.split(r'\s+([A-E])\.\s+', qbody)
        prompt = opt_matches[0].strip()
        opts = [opt_matches[j+1].strip() for j in range(1, len(opt_matches), 2)]
        questions_act2.append({'id': qnum, 'q': prompt, 'opts': opts})

print(f"Parsed {len(questions_act2)} questions from Activity 2.")
for q in questions_act2[:3]:
    print(f"Q{q['id']}: {q['q']}")
    for idx, o in enumerate(q['opts']):
        print(f"  {chr(65+idx)}. {o}")
    print()

# Activity 1.3
reader1 = pypdf.PdfReader('/Users/arpit/minibook/ethical_hacking/activities/UNIT 1 Activity 1.3 (1).pdf')
text1 = clean('\n'.join([p.extract_text() for p in reader1.pages]))
msq_idx = text1.find('Which are phases')
if msq_idx != -1:
    msq_text1 = text1[msq_idx:]
    q_splits1 = re.split(r'\s+(\d+)\.\s+', msq_text1)
    questions_act1 = []
    # Q1 was before '1. ' so let's handle Q1
    # text starts with 'Which are phases...'
    print("Found MCQ section in Unit 1 Activity 1.3")
