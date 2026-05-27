const CONFIG = {
    // นำ URL ที่ได้จากการ Deploy Google Apps Script มาวางแทนข้อความด้านล่างนี้
    API_URL: "https://script.google.com/macros/s/AKfycbwzW79VBoyp3HCKkoPqwhvpO1VoekjAdLMLUvQGlK1txHxre0gL5nFiyYa9_ENTMsFx/exec",
    
    // รายชื่อตาราง (Sheets Name) ทั้งหมดในฐานข้อมูลเพื่อให้ตรงกับหน้า Frontend UI
    MODULES: {
        PATIENTS: "Patients",                 // 1.1 ทะเบียนประเมินเคสพื้นฐาน (Triage)
        INTERVENTIONS: "Interventions",       // 1.2 กิจกรรมเยียวยา & ติดตามผล (Follow-up)
        STAFF_REGISTRY: "Staff_Registry",     // 3.1 ทะเบียนฐานข้อมูลบุคลากร
        STAFF_DAILY_LOG: "Staff_Daily_Log",   // 3.2 บันทึกภารกิจรายวันของเจ้าหน้าที่
        STOCK_REGISTRY: "Stock_Registry",     // 4.1 คลังวัสดุ ยานพาหนะ และงบประมาณ
        STOCK_TRANSACTION: "Stock_Transaction", // 4.2 รายการเบิกจ่ายและ Assign ทรัพยากร
        AAR: "AAR",                           // 5. บันทึกทบทวนปฏิบัติการ (4 คำถาม)
        NETWORK: "Network"                    // 6. ทะเบียนเครือข่ายความร่วมมือ
    }
};
