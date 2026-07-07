content = open('src/pages/vet/VetDashboard.jsx', encoding='latin-1').read()
content = content.encode('latin-1').decode('utf-8', errors='replace')
open('src/pages/vet/VetDashboard.jsx', 'w', encoding='utf-8').write(content)
print('ok')
