import re
content = open('src/pages/vet/VetDashboard.jsx', encoding='utf-8').read()

# Eliminar el bloque duplicado - dejar solo una declaracion
# Primero eliminamos todas las ocurrencias del bloque useEffect+currentUser
pattern = r"const \[currentUser.*?\}, \[\]\);"
matches = re.findall(pattern, content, re.DOTALL)
print(f"Encontradas {len(matches)} ocurrencias")

# Dejar solo la primera
if len(matches) > 1:
    for m in matches[1:]:
        content = content.replace(m, '', 1)

open('src/pages/vet/VetDashboard.jsx', 'w', encoding='utf-8').write(content)
print('ok')
