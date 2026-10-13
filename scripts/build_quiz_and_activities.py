import pypdf
import re
import json

def clean(t):
    return ' '.join(t.split())

def extract_text(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    return clean('\n'.join([p.extract_text() for p in reader.pages]))

print("Script template created successfully")
