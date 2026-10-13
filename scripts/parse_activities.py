import pypdf
import re
import json

def clean(t):
    return ' '.join(t.split())

def get_text(fname):
    reader = pypdf.PdfReader(f'/Users/arpit/minibook/ethical_hacking/activities/{fname}')
    return clean('\n'.join([p.extract_text() for p in reader.pages]))

# Let's inspect the 25 MSQs from 30th Sept
txt30 = get_text('30th September.pdf')
msq_part = txt30[txt30.find('Part B: 25 MSQs'):]
q_splits = re.split(r'\s+(\d+)\.\s+', msq_part)

questions_30 = []
for i in range(1, len(q_splits), 2):
    qnum = int(q_splits[i])
    qbody = q_splits[i+1]
    opt_matches = re.split(r'\s+([A-E])\.\s+', qbody)
    prompt = opt_matches[0].strip()
    opts = [opt_matches[j+1].strip() for j in range(1, len(opt_matches), 2)]
    questions_30.append({
        'id': qnum,
        'q': prompt,
        'opts': opts
    })

print(f"Parsed {len(questions_30)} questions from 30th Sept.")
print("Sample Q1:", questions_30[0])
