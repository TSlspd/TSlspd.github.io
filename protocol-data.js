const protocolRows=[
  {
    "category": "الأكواد الأساسية",
    "code": "Code 0",
    "pronunciation": "كود زيرو",
    "meaning": "استنفار امني",
    "radio": "U-1 To Dispatch | Code 0 Last 10-10"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 1",
    "pronunciation": "كود ون",
    "meaning": "شغل سفاتي فقط",
    "radio": "U-1 To U-100 | Code 1"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 2",
    "pronunciation": "كود تو",
    "meaning": "شغل السفاتي والصوت",
    "radio": "U-1 To U-100 | Code 2"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 3",
    "pronunciation": "كود ثري",
    "meaning": "اغلاق السفاتي",
    "radio": "U-1 To U-100 | Code 3"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 4",
    "pronunciation": "كود فور",
    "meaning": "المكان امن وخالي",
    "radio": "U-1 To Dispatch | Code 4 Last 10-7"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 5",
    "pronunciation": "كود فايف",
    "meaning": "مسح البصمات و رفع تقرير",
    "radio": "U-1 To Dispatch  | Code 5 Last 10-7"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 6",
    "pronunciation": "كود سكس",
    "meaning": "تحقق من المكان",
    "radio": "U-1 To Dispatch | Code 6 Last 10-7"
  },
  {
    "category": "الأكواد الأساسية",
    "code": "Code 7",
    "pronunciation": "كود سفن",
    "meaning": "سحر او قلتش",
    "radio": "U-1 | Code 7"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-1",
    "pronunciation": "زيرو ون",
    "meaning": "استراحه او تسجيل خروج مؤقت",
    "radio": "U-1 To Dispatch | 0-1 {Time}"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-2",
    "pronunciation": "زيرو تو",
    "meaning": "الاشاره واضحه",
    "radio": "U-1 To Dispatch | 0-2"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-3",
    "pronunciation": "زيرو ثري",
    "meaning": "التاكد من اشارة الراديو",
    "radio": "U-1 To Dispatch | 0-3"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-4",
    "pronunciation": "زيرو فور",
    "meaning": "الغ البلاع",
    "radio": "U-1 To Dispatch | Last 10-5 0-4"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-5",
    "pronunciation": "زيرو فايف",
    "meaning": "الشرطي مشغول",
    "radio": ""
  },
  {
    "category": "اكواد جانبية",
    "code": "0-6",
    "pronunciation": "زيرو سكس",
    "meaning": "كرر البلاغ",
    "radio": "U-1 To Dispatch | 0-6"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-7",
    "pronunciation": "زيرو سفن",
    "meaning": "تسجيل خروج",
    "radio": "U-1 To Dispatch | 0-7"
  },
  {
    "category": "اكواد جانبية",
    "code": "0-8",
    "pronunciation": "زيرو ايت",
    "meaning": "تسجيل دخول",
    "radio": "U-1 To Dispatch | 0-8"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-1",
    "pronunciation": "تن - ون",
    "meaning": "مطاردة مركبة",
    "radio": "U-1 To Dispatch | 10-1"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-2",
    "pronunciation": "تن - تو",
    "meaning": "غير صحيح",
    "radio": "U-1 To Dispatch | 10-2"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-3",
    "pronunciation": "تن - ثري",
    "meaning": "استيقاف مروري",
    "radio": "U-1 To Dispatch | 10-3"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-4",
    "pronunciation": "تن - فور",
    "meaning": "صحيح",
    "radio": "U-1 To Dispatch | 10-4"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-5",
    "pronunciation": "تن - فايف",
    "meaning": "سرقة سياره",
    "radio": "U-1 To Dispatch | 10-5"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-6",
    "pronunciation": "تن - سكس",
    "meaning": "سرقة منزل",
    "radio": "U-1 To Dispatch | 10-6"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-7",
    "pronunciation": "تن - سفن",
    "meaning": "سرقة بقاله",
    "radio": "U-1 To Dispatch | 10-7"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-8",
    "pronunciation": "تن - ايت",
    "meaning": "سرقة مجوهرات",
    "radio": "U-1 To Dispatch | 10-8"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-9",
    "pronunciation": "تن - ناين",
    "meaning": "سرقة فليكا",
    "radio": "U-1 To Dispatch | 10-9"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-10",
    "pronunciation": "تن - تن",
    "meaning": "سرقة بنك المركزي",
    "radio": "U-1 To Dispatch | 10-10"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-11",
    "pronunciation": "تن - ألفن",
    "meaning": "سرقة بوليتو",
    "radio": "U-1 To Dispatch | 10-11"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-12",
    "pronunciation": "تن-تويلف",
    "meaning": "سرقة بوب كات",
    "radio": "U-1 To Dispatch | 10-12"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-13",
    "pronunciation": "تن-ثيرتين",
    "meaning": "سرقة مصرف",
    "radio": "U-1 To Dispatch | 10-13"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-19",
    "pronunciation": "تن - ناينتين",
    "meaning": "مطاردة على الاقدام",
    "radio": "U-1 To Dispatch | 10-19 Last 10-1"
  },
  {
    "category": "الاكواد مهمة",
    "code": "10-20",
    "pronunciation": "تن - توني",
    "meaning": "موقعك",
    "radio": "U-1 To U-25 | 10-20"
  },
  {
    "category": "الاكواد مهمة",
    "code": "20-3",
    "pronunciation": "Back Up",
    "meaning": "احتاج دعم",
    "radio": "U-1 To Dispatch | 20-3 Last 10-7"
  },
  {
    "category": "الاكواد مهمة",
    "code": "20-2",
    "pronunciation": "توني- تو",
    "meaning": "اطلاق نار",
    "radio": ""
  },
  {
    "category": "الاكواد مهمة",
    "code": "20-4",
    "pronunciation": "توني- فور",
    "meaning": "الاشخاص لديهم رهينه",
    "radio": ""
  }
];


Object.assign(window, {protocolRows});
