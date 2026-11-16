// High-contrast, thermal-optimized medical vector pictograms (SVG)
// Modeled precisely after professional pharmacy auxiliary labels & USP pictograms

const PICTOGRAMS = {
  // 1. Morning on rising (Sunrise) - Exact match to user image Icon #1
  morning_sun: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 28 h30 M8 33 h24 M12 37 h16" stroke-width="2.6"/>
      <path d="M12 28 a8 8 0 0 1 16 0 Z" fill="currentColor"/>
      <line x1="20" y1="7" x2="20" y2="12"/>
      <line x1="8" y1="12" x2="12" y2="15.5"/>
      <line x1="32" y1="12" x2="28" y2="15.5"/>
      <line x1="4" y1="23" x2="9" y2="23"/>
      <line x1="36" y1="23" x2="31" y2="23"/>
    </svg>
  `,

  // 2. Empty stomach / Fasting 30 mins before food - Exact match to user image Icon #2
  fasting_plate: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Clock showing 30 mins -->
      <circle cx="15" cy="14" r="8"/>
      <polyline points="15,10 15,14 18,14"/>
      <!-- Empty Plate -->
      <circle cx="26" cy="24" r="10" stroke-width="2.4"/>
      <circle cx="26" cy="24" r="6" stroke-dasharray="1 3"/>
      <!-- Cup -->
      <path d="M6 25 h8 v5 a3 3 0 0 1 -3 3 h-2 a3 3 0 0 1 -3 -3 Z"/>
      <path d="M14 27 h2 a1.5 1.5 0 0 1 0 3 h-2"/>
    </svg>
  `,

  // 3. Full glass of water - Exact match to user image Icon #3
  water_glass: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 7 L13.5 34 A2 2 0 0 0 15.5 36 L24.5 36 A2 2 0 0 0 26.5 34 L30 7 Z" stroke-width="2.4"/>
      <!-- Water level fill -->
      <path d="M11.8 17 Q20 15 28.2 17 L25.5 34 A1 1 0 0 1 24.5 35 L15.5 35 A1 1 0 0 1 14.5 34 Z" fill="currentColor"/>
    </svg>
  `,

  // 4. Effervescent dissolve in water, do NOT chew - Exact match to user image Icon #4
  effervescent_dissolve: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Glass with bubbling tablet -->
      <path d="M7 9 L10 33 A2 2 0 0 0 12 35 L22 35 A2 2 0 0 0 24 33 L27 9 Z"/>
      <circle cx="17" cy="27" r="3" fill="currentColor"/>
      <circle cx="14" cy="20" r="1.3" fill="currentColor"/>
      <circle cx="20" cy="18" r="1.1" fill="currentColor"/>
      <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="11" r="1.2" fill="currentColor"/>
      <!-- Crossed out chew/swallow tablets -->
      <line x1="28" y1="12" x2="38" y2="22" stroke-width="2.6"/>
      <line x1="38" y1="12" x2="28" y2="22" stroke-width="2.6"/>
      <line x1="28" y1="26" x2="38" y2="36" stroke-width="2.6"/>
      <line x1="38" y1="26" x2="28" y2="36" stroke-width="2.6"/>
    </svg>
  `,

  // 5. Do NOT lie down / Stay upright 30 mins - Exact match to user image Icon #5
  no_lying_down: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Person reclined -->
      <circle cx="10" cy="13" r="3.5" fill="currentColor"/>
      <path d="M7 21 L13 28 L23 31 L28 26" stroke-width="2.4"/>
      <!-- Big Cross slash -->
      <line x1="5" y1="33" x2="26" y2="10" stroke-width="3.2"/>
      <!-- Clock 30 min and standing person indicator -->
      <circle cx="32" cy="13" r="6"/>
      <polyline points="32,9 32,13 35,13"/>
      <path d="M32 23 v9 M29 26 h6 M32 20 a1.5 1.5 0 1 0 0 -3 a1.5 1.5 0 0 0 0 3" stroke-width="2"/>
    </svg>
  `,

  // 6. Missed dose? Take next morning, NEVER double - Exact match to user image Icon #6
  calendar_missed: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Calendar Body -->
      <rect x="7" y="9" width="26" height="26" rx="2.5" stroke-width="2.4"/>
      <line x1="7" y1="16" x2="33" y2="16"/>
      <!-- Binder rings -->
      <line x1="13" y1="5" x2="13" y2="10" stroke-width="2.6"/>
      <line x1="27" y1="5" x2="27" y2="10" stroke-width="2.6"/>
      <!-- Missed X -->
      <line x1="12" y1="21" x2="18" y2="27" stroke-width="2.6"/>
      <line x1="18" y1="21" x2="12" y2="27" stroke-width="2.6"/>
      <!-- Next morning sun -->
      <circle cx="26" cy="27" r="4" fill="currentColor"/>
      <line x1="26" y1="19" x2="26" y2="21"/>
      <line x1="31" y1="22" x2="29" y2="24"/>
      <line x1="33" y1="27" x2="31" y2="27"/>
    </svg>
  `,

  // 7. Take with food / meal
  with_food: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="21" r="12" stroke-width="2.4"/>
      <circle cx="20" cy="21" r="8" fill="currentColor"/>
      <!-- Fork -->
      <path d="M6 10 v10 M4 10 v5 a2 2 0 0 0 4 0 v-5 M6 20 v10"/>
      <!-- Knife -->
      <path d="M34 10 c0 6 -2 10 -2 10 v10"/>
    </svg>
  `,

  // 8. Bedtime / Night
  bedtime_moon: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 8 A12 12 0 1 0 32 28 A13 13 0 0 1 22 8 Z" fill="currentColor"/>
      <polygon points="28,8 29,11 32,11 30,13 31,16 28,14 26,16 27,13 24,11 27,11" fill="currentColor" stroke="none"/>
      <circle cx="33" cy="18" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  `,

  // 9. Capsule swallowing (do not open)
  capsule_swallow: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="16" width="22" height="11" rx="5.5" transform="rotate(-35 20 20)" stroke-width="2.4"/>
      <path d="M12 25 L21 12" stroke-width="2.2"/>
      <path d="M12 25 A5.5 5.5 0 0 1 18 34 L15 36" fill="currentColor" opacity="0.8"/>
    </svg>
  `,

  // 10. Do not crush or chew
  no_crush_chew: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="13" stroke-width="2.5"/>
      <line x1="11" y1="11" x2="29" y2="29" stroke-width="3"/>
      <!-- Broken tablet pieces inside -->
      <path d="M15 17 a5 5 0 0 1 8 -3"/>
      <path d="M17 25 a5 5 0 0 0 8 -3"/>
    </svg>
  `,

  // 11. Regular intervals (Clock repeat)
  interval_clock: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="12" stroke-width="2.4"/>
      <polyline points="20,13 20,20 25,20" stroke-width="2.4"/>
      <!-- Curved arrow around clock -->
      <path d="M8 12 A16 16 0 0 1 32 12" stroke-width="2"/>
      <polyline points="30,7 33,12 28,14"/>
    </svg>
  `,

  // 12. Finish antibiotic course completely
  antibiotic_finish: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 L32 11 V22 C32 29 20 35 20 35 C20 35 8 29 8 22 V11 Z" stroke-width="2.4"/>
      <polyline points="14,20 18,24 26,16" stroke-width="2.8"/>
    </svg>
  `,

  // 13. Shake well before use
  shake_well: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="15" y="13" width="10" height="20" rx="2" stroke-width="2.2"/>
      <path d="M17 13 V8 H23 V13" stroke-width="2"/>
      <!-- Shake motion waves left and right -->
      <path d="M9 16 C6 18 6 22 9 24 M6 13 C3 18 3 24 6 28"/>
      <path d="M31 16 C34 18 34 22 31 24 M34 13 C37 18 37 24 34 28"/>
    </svg>
  `,

  // 14. Cold storage / Refrigerator (2-8 C)
  storage_cold: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="20" y1="6" x2="20" y2="34" stroke-width="2.4"/>
      <line x1="6" y1="20" x2="34" y2="20" stroke-width="2.4"/>
      <line x1="10" y1="10" x2="30" y2="30"/>
      <line x1="10" y1="30" x2="30" y2="10"/>
      <circle cx="20" cy="20" r="3" fill="currentColor"/>
      <path d="M17 9 L20 6 L23 9 M17 31 L20 34 L23 31 M9 17 L6 20 L9 23 M31 17 L34 20 L31 23"/>
    </svg>
  `,

  // 15. Room storage below 25 C
  storage_room: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 17 L20 7 L32 17 V33 H8 Z" stroke-width="2.4"/>
      <!-- Thermometer inside -->
      <rect x="18" y="15" width="4" height="12" rx="2"/>
      <circle cx="20" cy="27" r="3.5" fill="currentColor"/>
    </svg>
  `,

  // 16. Do NOT drive / Drowsiness hazard
  no_drive: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Steering wheel -->
      <circle cx="20" cy="20" r="13" stroke-width="2.4"/>
      <circle cx="20" cy="20" r="3.5"/>
      <line x1="20" y1="7" x2="20" y2="16.5"/>
      <line x1="8.5" y1="26" x2="17" y2="22"/>
      <line x1="31.5" y1="26" x2="23" y2="22"/>
      <!-- Cross slash -->
      <line x1="9" y1="9" x2="31" y2="31" stroke-width="3"/>
    </svg>
  `,

  // 17. Avoid grapefruit / interactions
  avoid_grapefruit: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="13" stroke-width="2.4"/>
      <!-- Citrus segments -->
      <circle cx="20" cy="20" r="9"/>
      <line x1="20" y1="11" x2="20" y2="29"/>
      <line x1="11" y1="20" x2="29" y2="20"/>
      <!-- Prohibition slash -->
      <line x1="9" y1="9" x2="31" y2="31" stroke-width="3"/>
    </svg>
  `,

  // 18. Inhaler device
  inhaler_device: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 7 h10 v15 h8 v10 h-18 Z" stroke-width="2.4"/>
      <!-- Aerosol spray dots -->
      <circle cx="33" cy="24" r="1.2" fill="currentColor"/>
      <circle cx="36" cy="22" r="1.2" fill="currentColor"/>
      <circle cx="36" cy="27" r="1.2" fill="currentColor"/>
    </svg>
  `,

  // 19. Drops (Eye / Ear)
  drops_eye_ear: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Dropper -->
      <path d="M14 6 L20 12 L18 14 L12 8 Z M19 13 L12 20 L8 21 L9 17 L16 10 Z" stroke-width="2"/>
      <!-- Falling drop -->
      <path d="M26 21 C26 21 21 28 21 31 A5 5 0 0 0 31 31 C31 28 26 21 26 21 Z" fill="currentColor"/>
    </svg>
  `,

  // 20. Topical skin application
  topical_skin: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Tube -->
      <path d="M7 31 L17 11 L23 14 L13 34 Z"/>
      <path d="M17 11 L21 7 L24 9 L20 13 Z" fill="currentColor"/>
      <!-- Cream swirl -->
      <path d="M26 26 C28 23 32 23 33 26 C34 29 29 32 26 31 Z" fill="currentColor"/>
    </svg>
  `,

  // 21. Bleeding caution (Anticoagulant)
  bleeding_precaution: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 L35 32 H5 Z" stroke-width="2.5"/>
      <path d="M20 17 v6 M20 27 v2" stroke-width="2.8"/>
    </svg>
  `,

  // 22. Blood sugar monitoring (Diabetes)
  blood_sugar: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="8" width="20" height="26" rx="4" stroke-width="2.4"/>
      <rect x="14" y="12" width="12" height="9" rx="1"/>
      <!-- Glucose droplet -->
      <path d="M20 25 C20 25 17 29 17 30.5 A3 3 0 0 0 23 30.5 C23 29 20 25 20 25 Z" fill="currentColor"/>
    </svg>
  `,

  // 23. Blood pressure monitoring
  blood_pressure: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21 C8 15 14 9 20 15 C26 9 32 15 28 21 L20 31 Z" stroke-width="2.4"/>
      <polyline points="13,20 17,20 19,16 22,24 24,19 27,20" stroke-width="2"/>
    </svg>
  `,

  // 24. General safe medicine instruction
  medical_shield: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 L32 11 V22 C32 29 20 35 20 35 C20 35 8 29 8 22 V11 Z" stroke-width="2.4"/>
      <path d="M20 13 v14 M13 20 h14" stroke-width="2.6"/>
    </svg>
  `
};

function getInstructionPictogramSvg(iconName) {
  if (iconName && PICTOGRAMS[iconName]) {
    return PICTOGRAMS[iconName].trim();
  }
  return PICTOGRAMS.medical_shield.trim();
}

function detectInstructionIcon(text) {
  if (!text || typeof text !== 'string') return 'medical_shield';
  const t = text.toLowerCase().trim();

  // 1. Effervescent dissolution (bubbles, do not chew dry)
  if (/فوار|تذاب|يذاب|الفوران|محلول فوار|قرص فوار|غير المذاب|effervesc|dissolv|fizz|binosto/i.test(t)) return 'effervescent_dissolve';

  // 2. Missed dose (take next morning, don't double)
  if (/الجرعة المنسية|نسيان|تفويت|جرعة فائتة|جرعة منسية|تتذكر|missed dose|missed|forgot|next morning/i.test(t)) return 'calendar_missed';

  // 3. Morning / upon rising (if text starts with early morning / rising)
  if (/^(?:administer\s+first\s+thing|take\s+only\s+upon|take\s+in\s+the\s+morning|upon\s+rising|rising|wake|قم\s+بتطبيقه\s+أول\s+شيء|أول\s+ما\s+تصحى|أول\s+شيء\s+في\s+الصباح|عند\s+الاستيقاظ|تناول\s+الجرعة\s+فقط\s+عند\s+الاستيقاظ)/i.test(t)) {
    return 'morning_sun';
  }

  // 4. Do not lie down / upright posture
  if (/استلقاء|منسدح|مستقيم|النوم بعد|عدم الاستلقاء|تجنب النوم|لا تستلق|ممنوع الاستلقاء|stay\s+upright|do\s+not\s+lie\s+down|recline|lying/i.test(t)) {
    return 'no_lying_down';
  }

  // 5. Fasting / Empty stomach (30 min or 1 hr before meal/breakfast/food)
  if (/على الريق|قبل\s+(?:نصف\s+)?ساعة|قبل الأكل|قبل الفطور|قبل الطعام|قبل وجبة|قبل\s+(?:أول\s+)?طعام|معدة فارغة|نصف ساعة قبل|30 دقيقة|empty stomach|before food|before meal|before breakfast|prior to/i.test(t)) {
    return 'fasting_plate';
  }

  // 6. Morning general check
  if (/صباح|أول ما تصحى|الاستيقاظ|عند الاستيقاظ|morning|rising/i.test(t)) {
    return 'morning_sun';
  }

  // 7. Water glass / swallow with water / fluids
  if (/ماء|الماء|كوب|كاسة|سوائل|كأس|water|fluid|glass of water/i.test(t)) {
    return 'water_glass';
  }

  // 8. With food / meals / after meals
  if (/مع الطعام|مع الأكل|بعد الأكل|مع وجبة|مع العشاء|وجبة طعام|وسط الأكل|with food|with meals|after meal|with meal|food|dinner/i.test(t)) {
    return 'with_food';
  }

  // 9. Bedtime / night
  if (/مساء|قبل النوم|عند النوم|بالليل|عشاء|وقت النوم|bedtime|evening|night|before sleep|retiring/i.test(t)) {
    return 'bedtime_moon';
  }

  // 10. Do not crush or chew / swallow whole
  if (/لا تمضغ|لا تسحق|ممنوع كسر|ممنوع مضغ|دون كسر|تبلع كاملة|ابلع كاملة|do not chew|do not crush|do not cut|swallow whole|crush|chew/i.test(t)) {
    return 'no_crush_chew';
  }

  // 11. Capsule
  if (/كبسول|كبسولة|كبسولات|capsule/i.test(t)) {
    return 'capsule_swallow';
  }

  // 12. Shake well (suspensions)
  if (/رج|خض|معلق|شراب معلق|يرج جيد|خض جيد|shake|suspension|shake well/i.test(t)) {
    return 'shake_well';
  }

  // 13. Antibiotic course / finish full treatment
  if (/إكمال العلاج|إنهاء الكورس|أكمل الجرعات|حتى لو شعرت|antibiotic|finish full|complete course/i.test(t)) {
    return 'antibiotic_finish';
  }

  // 14. Regular intervals / schedule
  if (/كل\s+\d+\s+ساع|كل\s+ساع|مواعيد\s+منتظمة|بانتظام|في\s+نفس\s+الوقت|interval|schedule|every\s+\d+\s+hour/i.test(t)) {
    return 'interval_clock';
  }

  // 15. Cold storage / Refrigerator
  if (/ثلاجة|تبريد|براد|درجة حرارة 2|2-8|refrigerat|cold|keep cold/i.test(t)) {
    return 'storage_cold';
  }

  // 16. Room temperature storage
  if (/درجة حرارة الغرفة|أقل من 25|مكان جاف|room temp|below 25|dry place/i.test(t)) {
    return 'storage_room';
  }

  // 17. Inhaler / respiratory
  if (/بخاخ|استنشاق|بخة|مضمضة بعد|inhaler|puff|aerosol|breathe/i.test(t)) {
    return 'inhaler_device';
  }

  // 18. Eye / ear drops
  if (/قطرة|عين|أذن|تقطير|drop|eye|ear|ophthalmic|otic/i.test(t)) {
    return 'drops_eye_ear';
  }

  // 19. Topical / cream / skin
  if (/كريم|مرهم|جلد|دهان|موضعي|topical|cream|ointment|skin/i.test(t)) {
    return 'topical_skin';
  }

  // 20. Bleeding / anticoagulant precautions
  if (/نزيف|سيولة|تجلط|كدمات|مميع|bleeding|bruising|anticoagulant|blood thinner/i.test(t)) {
    return 'bleeding_precaution';
  }

  // 21. Blood sugar monitoring
  if (/السكر|هبوط السكر|جلوكوز|قياس السكر|blood sugar|glucose|hypoglycemia/i.test(t)) {
    return 'blood_sugar';
  }

  // 22. Blood pressure monitoring
  if (/ضغط الدم|هبوط الضغط|ارتفاع الضغط|blood pressure|hypertension/i.test(t)) {
    return 'blood_pressure';
  }

  // 23. Drowsiness / No driving
  if (/نعاس|دوخة|قيادة|سيارة|drowsy|dizziness|driving/i.test(t)) {
    return 'no_drive';
  }

  // 24. Avoid grapefruit / interactions
  if (/جريب فروت|عصير|حموضة|ألمونيوم|مغنيسيوم|grapefruit|fruit juice|antacid/i.test(t)) {
    return 'avoid_grapefruit';
  }

  return 'medical_shield';
}

if (typeof module !== 'undefined') {
  module.exports = { PICTOGRAMS, getInstructionPictogramSvg, detectInstructionIcon };
}
