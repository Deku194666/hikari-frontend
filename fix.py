import re
content = open('src/pages/vet/VetDashboard.jsx', encoding='utf-8').read()
content = content.replace('import { useState } from "react";', 'import { useState, useEffect } from "react";')
content = content.replace(
    'const [activeSection, setActiveSection] = useState("overview");',
    'const [activeSection, setActiveSection] = useState("overview");\n  const [currentUser, setCurrentUser] = useState({ name: "Veterinario", email: "" });\n  useEffect(() => {\n    const user = JSON.parse(localStorage.getItem("user") || "{}");\n    if (user && user.name) setCurrentUser(user);\n  }, []);'
)
content = re.sub(r'<p className="user-name">Dr\..*?</p>', '<p className="user-name">{currentUser.name}</p>', content)
open('src/pages/vet/VetDashboard.jsx', 'w', encoding='utf-8').write(content)
print('ok')
