
## Remove "Chat interfaces are for prompts; this is for solvency." from /thesis Slide 9

### Overview
The user wants to remove the opening phrase "Chat interfaces are for prompts; this is for solvency." from the "Fiduciary Oversight" section on Slide 9 of the /thesis page, keeping only: "We provide a real-time view of agent liability, bond health, and collateral maintenance."

### Files to Update

**1. `src/contexts/LanguageContext.tsx`** — Three translation keys need updates:
   - **English** (line 1285): 
     - Current: `'Chat interfaces are for prompts; this is for solvency. We provide a real-time view of agent liability, bond health, and collateral maintenance.'`
     - New: `'We provide a real-time view of agent liability, bond health, and collateral maintenance.'`
   
   - **Japanese** (line 2591):
     - Current: `'チャットインターフェースはプロンプト用。これは支払能力用。エージェントの責任、ボンドの健全性、担保維持のリアルタイムビューを提供。'`
     - New: `'エージェントの責任、ボンドの健全性、担保維持のリアルタイムビューを提供。'`
   
   - **Arabic** (line 3897):
     - Current: `'واجهات الدردشة للمطالبات؛ هذه للملاءة. نوفر عرضاً في الوقت الفعلي لمسؤولية الوكيل وصحة السند وصيانة الضمان.'`
     - New: `'نوفر عرضاً في الوقت الفعلي لمسؤولية الوكيل وصحة السند وصيانة الضمان.'`

**2. `src/pages/LiabilityLayer.tsx`** — One hardcoded text instance needs removal:
   - **Line 753**: Remove "Chat interfaces are for prompts; this is for solvency. " from the rendered text
     - Current: `Chat interfaces are for prompts; this is for solvency. We provide a real-time view of agent liability, bond health, and collateral maintenance.`
     - New: `We provide a real-time view of agent liability, bond health, and collateral maintenance.`

Note: The component also uses the translation key from `LanguageContext`, so updating the context will be the primary fix; the hardcoded text on line 753 appears to be a fallback or duplicate that should also be cleaned up.

### Impact
This change only affects Slide 9 ("The Sovereign Terminal") on the /thesis page. It removes the meta-commentary about chat interfaces while preserving the core message about real-time solvency monitoring.
