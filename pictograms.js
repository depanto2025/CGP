// High-contrast, thermal-optimized medical vector pictograms (SVG)
// Modeled precisely after professional auxiliary labels, USP clinical pictograms & pharmacy standards

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
      <circle cx="15" cy="14" r="8"/>
      <polyline points="15,10 15,14 18,14"/>
      <circle cx="26" cy="24" r="10" stroke-width="2.4"/>
      <circle cx="26" cy="24" r="6" stroke-dasharray="1 3"/>
      <path d="M6 25 h8 v5 a3 3 0 0 1 -3 3 h-2 a3 3 0 0 1 -3 -3 Z"/>
      <path d="M14 27 h2 a1.5 1.5 0 0 1 0 3 h-2"/>
    </svg>
  `,

  // 3. Full glass of water - Exact match to user image Icon #3
  water_glass: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 7 L13.5 34 A2 2 0 0 0 15.5 36 L24.5 36 A2 2 0 0 0 26.5 34 L30 7 Z" stroke-width="2.4"/>
      <path d="M11.8 17 Q20 15 28.2 17 L25.5 34 A1 1 0 0 1 24.5 35 L15.5 35 A1 1 0 0 1 14.5 34 Z" fill="currentColor"/>
    </svg>
  `,

  // 4. Effervescent dissolve in water, do NOT chew - Exact match to user image Icon #4
  effervescent_dissolve: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 9 L10 33 A2 2 0 0 0 12 35 L22 35 A2 2 0 0 0 24 33 L27 9 Z"/>
      <circle cx="17" cy="27" r="3" fill="currentColor"/>
      <circle cx="14" cy="20" r="1.3" fill="currentColor"/>
      <circle cx="20" cy="18" r="1.1" fill="currentColor"/>
      <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="11" r="1.2" fill="currentColor"/>
      <line x1="28" y1="12" x2="38" y2="22" stroke-width="2.6"/>
      <line x1="38" y1="12" x2="28" y2="22" stroke-width="2.6"/>
      <line x1="28" y1="26" x2="38" y2="36" stroke-width="2.6"/>
      <line x1="38" y1="26" x2="28" y2="36" stroke-width="2.6"/>
    </svg>
  `,

  // 5. Do NOT lie down / Stay upright 30 mins - Exact match to user image Icon #5
  no_lying_down: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="13" r="6"/>
      <polyline points="12,10 12,13 14.5,13"/>
      <circle cx="28" cy="10" r="3.5" fill="currentColor"/>
      <path d="M28 14 v11 M24 20 h8 M25 25 v11 M31 25 v11" stroke-width="2.6"/>
      <line x1="5" y1="24" x2="19" y2="38" stroke-width="2.4"/>
      <line x1="19" y1="24" x2="5" y2="38" stroke-width="2.4"/>
      <circle cx="7" cy="23" r="2.5"/>
      <path d="M7 26 l4 6 l6 -3 l3 5"/>
    </svg>
  `,

  // 6. Missed dose (Calendar + sun) - Exact match to user image Icon #6
  calendar_missed: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="8" width="28" height="26" rx="3" stroke-width="2.4"/>
      <line x1="6" y1="15" x2="34" y2="15"/>
      <line x1="13" y1="5" x2="13" y2="10" stroke-width="2.4"/>
      <line x1="27" y1="5" x2="27" y2="10" stroke-width="2.4"/>
      <line x1="10" y1="19" x2="18" y2="27" stroke-width="2.4"/>
      <line x1="18" y1="19" x2="10" y2="27" stroke-width="2.4"/>
      <circle cx="26" cy="27" r="5" fill="currentColor"/>
      <line x1="26" y1="19" x2="26" y2="21" stroke-width="2"/>
      <line x1="20" y1="27" x2="22" y2="27" stroke-width="2"/>
      <line x1="30" y1="27" x2="32" y2="27" stroke-width="2"/>
    </svg>
  `,

  // 7. Take with food / meals (Fork, knife, plate with pill)
  with_food: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="8" y1="9" x2="8" y2="33" stroke-width="2"/>
      <path d="M5 9 v8 a3 3 0 0 0 6 0 V9"/>
      <line x1="32" y1="9" x2="32" y2="33" stroke-width="2"/>
      <path d="M32 9 c-4 0 -4 9 -4 14 h4"/>
      <circle cx="20" cy="21" r="10" stroke-width="2.4"/>
      <rect x="16" y="19" width="8" height="4" rx="2" fill="currentColor"/>
    </svg>
  `,

  // 8. Bedtime / Night (Crescent Moon + Stars + Bed)
  bedtime_moon: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 7 a11 11 0 1 0 10 16 a13 13 0 0 1 -10 -16 Z" fill="currentColor"/>
      <path d="M5 33 h30 M5 33 v-8 h12 v8 M10 25 h7"/>
      <circle cx="10" cy="11" r="1" fill="currentColor"/>
      <circle cx="15" cy="7" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // 9. Swallow whole - Do NOT crush, chew or split (Pill + crossed hammer/teeth)
  no_crush_chew: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="8" width="20" height="9" rx="4.5" stroke-width="2.4"/>
      <line x1="20" y1="8" x2="20" y2="17"/>
      <path d="M12 24 l16 12 M28 24 l-16 12" stroke-width="2.8"/>
      <circle cx="20" cy="30" r="9" stroke-dasharray="2 3"/>
    </svg>
  `,

  // 10. Chew thoroughly (Chewable tablet with teeth bite marks)
  chew_tablet: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="14" stroke-width="2.4"/>
      <path d="M14 15 q3 3 6 0 q3 3 6 0" stroke-width="2.4"/>
      <path d="M14 25 q3 -3 6 0 q3 -3 6 0" stroke-width="2.4"/>
      <path d="M12 20 h16" stroke-dasharray="1 2"/>
    </svg>
  `,

  // 11. Shake well before use (Suspension bottle with motion vibration arrows)
  shake_well: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="15" y="6" width="10" height="4" rx="1"/>
      <path d="M16 10 v3 L12 17 v17 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2 -2 V17 L24 13 v-3 Z" stroke-width="2.2"/>
      <path d="M13 26 Q20 22 27 26 L27 34 A1 1 0 0 1 26 35 L14 35 A1 1 0 0 1 13 34 Z" fill="currentColor"/>
      <path d="M6 16 l-3 3 l3 3 M6 26 l-3 3 l3 3"/>
      <path d="M34 16 l3 3 l-3 3 M34 26 l3 3 l-3 3"/>
    </svg>
  `,

  // 12. Regular interval schedule (Clock with repeating cycle arrows)
  interval_clock: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="13" stroke-width="2.4"/>
      <polyline points="20,12 20,20 26,20" stroke-width="2.4"/>
      <path d="M8 8 A18 18 0 0 1 32 8" stroke-width="2"/>
      <polyline points="30,4 33,8 29,11"/>
      <path d="M32 32 A18 18 0 0 1 8 32" stroke-width="2"/>
      <polyline points="10,36 7,32 11,29"/>
    </svg>
  `,

  // 13. Avoid antacids, dairy, calcium, milk, iron (Crossed milk bottle & antacid)
  no_antacid: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 13 v-3 h6 v3 l3 4 v14 a2 2 0 0 1 -2 2 h-8 a2 2 0 0 1 -2 -2 V17 Z"/>
      <circle cx="27" cy="22" r="6"/>
      <line x1="6" y1="8" x2="34" y2="34" stroke-width="3"/>
      <line x1="34" y1="8" x2="6" y2="34" stroke-width="3"/>
    </svg>
  `,

  // 14. Do NOT drink alcohol (Crossed wine glass and bottle)
  no_alcohol: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 7 h10 l-2 11 a5 5 0 0 1 -10 0 Z"/>
      <line x1="20" y1="21" x2="20" y2="33"/>
      <line x1="14" y1="33" x2="26" y2="33"/>
      <line x1="6" y1="6" x2="34" y2="34" stroke-width="3"/>
      <circle cx="20" cy="20" r="15" stroke-dasharray="3 3"/>
    </svg>
  `,

  // 15. Drowsiness / Do NOT drive or operate machinery (Car + warning triangle)
  no_drive: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 23 l3 -9 h12 l3 9 h-18 Z" stroke-width="2.2"/>
      <circle cx="11" cy="28" r="3.5" fill="currentColor"/>
      <circle cx="21" cy="28" r="3.5" fill="currentColor"/>
      <path d="M31 15 l6 11 h-12 Z" stroke-width="2.2"/>
      <line x1="31" y1="19" x2="31" y2="22" stroke-width="2"/>
      <circle cx="31" cy="24.5" r="0.8" fill="currentColor"/>
    </svg>
  `,

  // 16. Sublingual / Under the tongue (Open mouth profile with pill under tongue)
  sublingual_tongue: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 10 q14 0 18 10 q-8 14 -18 14 Z" stroke-width="2.4"/>
      <path d="M12 21 q8 1 12 5" stroke-width="2.4"/>
      <ellipse cx="17" cy="26" rx="3.5" ry="2" fill="currentColor"/>
    </svg>
  `,

  // 17. Rinse mouth / Gargle after use (Mouth with gargle bubbles)
  rinse_mouth: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 20 Q20 12 32 20 Q20 34 8 20 Z" stroke-width="2.4"/>
      <circle cx="16" cy="20" r="2" fill="currentColor"/>
      <circle cx="21" cy="18" r="2.5" fill="currentColor"/>
      <circle cx="26" cy="21" r="1.5" fill="currentColor"/>
      <path d="M20 6 v6 M17 8 l3 -3 l3 3"/>
    </svg>
  `,

  // 18. Inhaler device (Metered dose asthma inhaler with mist)
  inhaler_device: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 8 h10 v18 h6 a2 2 0 0 1 2 2 v4 a2 2 0 0 1 -2 2 h-16 a2 2 0 0 1 -2 -2 Z" stroke-width="2.4"/>
      <rect x="14" y="4" width="6" height="4" rx="1"/>
      <path d="M30 28 h4 M31 25 l3 -2 M31 31 l3 2" stroke-width="2"/>
    </svg>
  `,

  // 19. Eye drops (Eye with drop entering lower lid)
  drops_eye: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 24 Q20 10 35 24 Q20 38 5 24 Z" stroke-width="2.4"/>
      <circle cx="20" cy="24" r="6"/>
      <circle cx="20" cy="24" r="2.5" fill="currentColor"/>
      <path d="M20 5 C20 5 16 9 16 12 a4 4 0 0 0 8 0 C24 9 20 5 20 5 Z" fill="currentColor"/>
    </svg>
  `,

  // 20. Ear drops (Ear with descending otic drop)
  drops_ear: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M24 10 A8 8 0 0 0 14 20 C14 26 19 28 19 32 a3 3 0 0 1 -6 0" stroke-width="2.4"/>
      <path d="M20 18 a4 4 0 0 1 4 4 c0 3 -2 5 -4 5" stroke-width="2"/>
      <path d="M8 8 C8 8 5 11 5 13 a3 3 0 0 0 6 0 C11 11 8 8 8 8 Z" fill="currentColor"/>
    </svg>
  `,

  // 21. Nasal spray (Nasal spray bottle aiming upward)
  nasal_spray: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="20" width="12" height="15" rx="2" stroke-width="2.4"/>
      <path d="M12 20 h16 v-3 h-16 Z"/>
      <path d="M18 17 v-9 h4 v9"/>
      <path d="M20 4 v-2 M17 5 l-2 -2 M23 5 l2 -2"/>
    </svg>
  `,

  // 22. Topical cream / ointment (Hand applying ointment to skin)
  topical_skin: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 33 h30" stroke-width="2.6"/>
      <path d="M7 29 C12 25 18 25 24 29" stroke-width="2"/>
      <path d="M13 14 l8 8 l-4 4 l-8 -8 a3 3 0 0 1 4 -4 Z"/>
      <ellipse cx="20" cy="27" rx="5" ry="2" fill="currentColor"/>
    </svg>
  `,

  // 23. Transdermal patch (Square adhesive patch with rotation arrows)
  patch_transdermal: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="10" width="20" height="20" rx="3" stroke-width="2.4"/>
      <rect x="15" y="15" width="10" height="10" rx="1" fill="currentColor"/>
      <path d="M6 14 A16 16 0 0 1 14 6 M34 26 A16 16 0 0 1 26 34" stroke-width="2"/>
    </svg>
  `,

  // 24. Subcutaneous injection (Syringe angled into skin pinch fold)
  injection_subcut: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 34 Q20 28 34 34" stroke-width="2.6"/>
      <path d="M16 31 Q20 22 24 31" stroke-width="2.4"/>
      <path d="M22 17 l8 -8 l3 3 l-8 8 Z"/>
      <line x1="22" y1="17" x2="20" y2="24" stroke-width="2"/>
      <line x1="29" y1="10" x2="34" y2="5" stroke-width="2.2"/>
    </svg>
  `,

  // 25. Intravenous infusion (IV Bag with drip chamber)
  infusion_iv: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="13" y="6" width="14" height="20" rx="4" stroke-width="2.4"/>
      <line x1="17" y1="6" x2="23" y2="6" stroke-width="3"/>
      <rect x="17" y="26" width="6" height="5"/>
      <line x1="20" y1="31" x2="20" y2="37"/>
      <path d="M14 17 h12" stroke-dasharray="1 2"/>
    </svg>
  `,

  // 26. Rectal suppository (Bullet shaped suppository)
  suppository_rectal: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 32 h10 v-12 a5 5 0 0 0 -10 0 Z" stroke-width="2.4" fill="currentColor"/>
      <line x1="20" y1="7" x2="20" y2="15" stroke-width="2.4"/>
      <polyline points="16,11 20,15 24,11" stroke-width="2.4"/>
    </svg>
  `,

  // 27. Refrigerate / Cold storage (Fridge + snowflake + thermometer 2-8°C)
  storage_cold: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="11" y="5" width="18" height="30" rx="3" stroke-width="2.4"/>
      <line x1="11" y1="16" x2="29" y2="16"/>
      <line x1="14" y1="10" x2="14" y2="13" stroke-width="2.4"/>
      <line x1="14" y1="20" x2="14" y2="25" stroke-width="2.4"/>
      <path d="M20 22 v6 M17 25 h6"/>
    </svg>
  `,

  // 28. Room temperature storage below 25°C
  storage_room: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 17 L20 6 L33 17 v16 a2 2 0 0 1 -2 2 h-22 a2 2 0 0 1 -2 -2 Z" stroke-width="2.4"/>
      <text x="20" y="27" font-family="Arial, sans-serif" font-size="9" font-weight="900" fill="currentColor" text-anchor="middle" stroke="none">25°</text>
    </svg>
  `,

  // 29. Protect from light / Dark storage
  protect_light: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="8"/>
      <path d="M20 7 v4 M20 29 v4 M7 20 h4 M29 20 h4"/>
      <line x1="8" y1="8" x2="32" y2="32" stroke-width="2.8"/>
    </svg>
  `,

  // 30. Drink plenty of extra water / Hydration
  hydration_fluids: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 9 h16 v22 a3 3 0 0 1 -3 3 h-10 a3 3 0 0 1 -3 -3 Z"/>
      <path d="M28 14 C28 14 24 18 24 21 a4 4 0 0 0 8 0 C32 18 28 14 28 14 Z" fill="currentColor"/>
      <path d="M17 21 C17 21 14 24 14 26 a3 3 0 0 0 6 0 C20 24 17 21 17 21 Z" fill="currentColor"/>
    </svg>
  `,

  // 31. Monitor blood glucose / Sugar
  blood_sugar: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="10" width="20" height="24" rx="4" stroke-width="2.4"/>
      <rect x="13" y="14" width="14" height="9" fill="#000"/>
      <circle cx="20" cy="28" r="2.5"/>
      <path d="M20 4 C20 4 17 7 17 9 a3 3 0 0 0 6 0 C23 7 20 4 20 4 Z" fill="currentColor"/>
    </svg>
  `,

  // 32. Monitor blood pressure / Hypertension
  blood_pressure: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="18" r="11" stroke-width="2.4"/>
      <polyline points="20,18 25,14" stroke-width="2.2"/>
      <rect x="14" y="29" width="12" height="7" rx="1.5" stroke-width="2.2"/>
      <line x1="20" y1="29" x2="20" y2="36"/>
    </svg>
  `,

  // 33. Bleeding precaution / Bruising
  bleeding_precaution: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 L35 32 H5 Z" stroke-width="2.4"/>
      <path d="M20 15 C20 15 17 19 17 22 a3 3 0 0 0 6 0 C23 19 20 15 20 15 Z" fill="currentColor"/>
      <circle cx="20" cy="28" r="1.2" fill="currentColor"/>
    </svg>
  `,

  // 34. Urine / Stool discoloration (Harmless color change)
  urine_discoloration: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 6 h8 M18 6 v6 L10 28 a3 3 0 0 0 3 4 h14 a3 3 0 0 0 3 -4 L22 12 v-6" stroke-width="2.4"/>
      <path d="M12 25 Q20 22 28 25 L27 31 a2 2 0 0 1 -2 1 h-10 a2 2 0 0 1 -2 -1 Z" fill="currentColor"/>
    </svg>
  `,

  // 35. Complete full course of treatment (Antibiotic adherence)
  antibiotic_finish: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="14" stroke-width="2.4"/>
      <polyline points="13,21 18,26 27,15" stroke-width="3"/>
    </svg>
  `,

  // 36. Avoid grapefruit / interaction
  avoid_grapefruit: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="13" stroke-width="2.4"/>
      <circle cx="20" cy="20" r="4"/>
      <line x1="7" y1="7" x2="33" y2="33" stroke-width="3"/>
    </svg>
  `,

  // 37. Capsule formulation
  capsule_swallow: `
    <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="14" width="24" height="12" rx="6" stroke-width="2.4"/>
      <line x1="20" y1="14" x2="20" y2="26" stroke-width="2.4"/>
      <path d="M8 14 h12 v12 h-12 a6 6 0 0 1 -6 -6 a6 6 0 0 1 6 -6 Z" fill="currentColor"/>
    </svg>
  `,

  // 38. General safe medical direction (Rx shield)
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

// Comprehensive Semantic Classifier for Clinical Administration Database
function detectInstructionIcon(text) {
  if (!text || typeof text !== 'string') return 'medical_shield';
  const rawLower = text.toLowerCase().trim();
  // Strip Arabic Tashkeel, Tanween, normalize Alif, Taa Marbuta, Yaa
  const t = rawLower
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىي]/g, 'ي');

  // 1. Missed dose (Priority over morning/time)
  if (/الجرعة المنسية|نسيان|تفويت|جرعة فائتة|جرعة منسية|نسيت الجرعة|missed dose|missed|forgot|skip the missed/i.test(t)) {
    return 'calendar_missed';
  }

  // 2. Do not lie down / upright posture / esophagus protection
  if (/استلقاء|منسدح|مستقيم|النوم بعد|عدم الاستلقاء|تجنب النوم|لا تستلق|ممنوع الاستلقاء|المريء|حماية المريء|وضع قائم|stay\s+upright|do\s+not\s+lie\s+down|recline|lying|esophag/i.test(t)) {
    return 'no_lying_down';
  }

  // 3. Sublingual / Under tongue / Buccal (Check before general dissolve)
  if (/تحت اللسان|باطن الخد|sublingual|under the tongue|buccal/i.test(t)) {
    return 'sublingual_tongue';
  }

  // 4. Inhaler / Respiratory puff
  if (/استنشاق|بخاخ فموي|بخة|جهاز الاستنشاق|موسع شعب|inhal|puff|spacer|aerosol|metered-dose/i.test(t)) {
    return 'inhaler_device';
  }

  // 5. Rinse mouth / gargle after use
  if (/مضمضة|غسل الفم|تمضمض|ابصق|غرغرة|شطف الفم|rinse mouth|gargle|spit out/i.test(t)) {
    return 'rinse_mouth';
  }

  // 6. Eye drops
  if (/قطرة عين|للعين|في العين|مسار عيني|الجفن|ملتحمة|eye drop|ophthalm|conjunctiv/i.test(t)) {
    return 'drops_eye';
  }

  // 7. Ear drops
  if (/قطرة أذن|للأذن|في الأذن|مسار أذني|قناة الأذن|ear drop|otic|ear canal/i.test(t)) {
    return 'drops_ear';
  }

  // 8. Nasal spray
  if (/بخاخ أنف|للأنف|في الأنف|فتحة أنف|رذاذ أنفي|nasal spray|nostril|intranasal/i.test(t)) {
    return 'nasal_spray';
  }

  // 9. Avoid antacids / calcium / dairy / iron
  if (/مضادات الحموضة|مضاد حموضة|حليب|ألبان|منتجات الألبان|كالسيوم|حديد|ألمنيوم|مغنيسيوم|antacid|dairy|calcium|iron supplement|aluminum|magnesium/i.test(t)) {
    return 'no_antacid';
  }

  // 10. Avoid alcohol
  if (/كحول|المشروبات الكحولية|خمر|alcohol|alcoholic/i.test(t)) {
    return 'no_alcohol';
  }

  // 11. Drowsiness / Do not drive
  if (/نعاس|دوخة|دوار|القيادة|تشغيل الآلات|قيادة السيارات|drows|dizzy|drive|machinery|alertness/i.test(t)) {
    return 'no_drive';
  }

  // 12. Effervescent dissolution (bubbles, fizz, dissolve in water)
  if (/فوار|قرص فوار|الفوران|محلول فوار|غير المذاب|effervesc|dissolv|disperse|fizz|binosto/i.test(t)) {
    return 'effervescent_dissolve';
  }

  // 13. Chew thoroughly (Check before no_crush_chew)
  if (/امضغ|يمضغ|تمضغ|مضغ|اقراص مضغ|للمضغ|chew thoroughly|chewable|chew before/i.test(t)) {
    return 'chew_tablet';
  }

  // 14. Do NOT crush or chew / swallow whole
  if (/لا تمضغ|لا تكسر|لا تسحق|ممنوع كسر|ممنوع مضغ|دون كسر|دون سحق|دون مضغ|تبلع كاملة|ابلع كاملة|do not chew|do not crush|do not cut|swallow whole|do not split/i.test(t)) {
    return 'no_crush_chew';
  }

  // 15. Cold storage / Refrigerator (Check before room storage)
  if (/ثلاجة|تبريد|براد|درجة حرارة 2|2-8|refrigerat|keep cold|do not freeze/i.test(t)) {
    return 'storage_cold';
  }

  // 16. Room temperature storage below 25°C
  if (/حرارة الغرفة|أقل من 25|مكان جاف|جاف بدرجة|25 مئوية|room temp|below 25|dry place/i.test(t)) {
    return 'storage_room';
  }

  // 17. Shake well (Avoid matching "درجة"!)
  if (/\bرج\b|\bيرج\b|رج العبوة|يرج جيد|خض العبوة|شراب معلق|معلق|shake well|shake vigorously|suspension/i.test(t)) {
    return 'shake_well';
  }

  // 18. Fasting / Empty stomach (before food, 30 min, 1 hr before, 2 hrs after)
  if (/على الريق|معدة فارغة|صيام|قبل الأكل|قبل الطعام|قبل الوجبة|قبل الفطور|قبل الإفطار|قبل نصف ساعة|قبل ساعة|بعد ساعتين|نصف ساعة قبل|empty stomach|before food|before meal|before breakfast|prior to eating|fasting/i.test(t)) {
    return 'fasting_plate';
  }

  // 19. Morning upon rising
  if (/صباح|صباحاً|الاستيقاظ|عند الاستيقاظ|أول ما تصحى|أول شيء في الصباح|مع شروق|morning|upon rising|on waking|early morning|rising/i.test(t)) {
    return 'morning_sun';
  }

  // 20. Bedtime / night
  if (/مساء|مساءً|ليلاً|قبل النوم|عند النوم|وقت النوم|بالليل|عشاء|bedtime|evening|night|before sleep|retiring/i.test(t)) {
    return 'bedtime_moon';
  }

  // 21. With food / meals
  if (/مع الطعام|مع الأكل|بعد الأكل|بعد الطعام|بعد الوجبة|وسط الأكل|مع وجبة|with food|with meals|after meal|with meal|food|dinner/i.test(t)) {
    return 'with_food';
  }

  // 22. Drink plenty of extra water / Hydration
  if (/كميات وفيرة|سوائل وفيرة|إكثار من السوائل|شرب الماء بكثرة|ترطيب|plenty of fluids|hydrate|hydration/i.test(t)) {
    return 'hydration_fluids';
  }

  // 23. Water glass / swallow with water
  if (/كاسة ماء|كوب ماء|مع الماء|ماء كافي|كأس ماء|كاسة ماء كبيرة|ماء عادي|240 مل|water|fluid|glass of water/i.test(t)) {
    return 'water_glass';
  }

  // 24. Transdermal patch
  if (/لاصقة|لصقة|لصقات|مكان نظيف وخالي من الشعر|patch|transdermal/i.test(t)) {
    return 'patch_transdermal';
  }

  // 25. Topical cream / ointment
  if (/دهان|كريم|مرهم|جل|موضعي|على الجلد|topical|cream|ointment|gel|skin/i.test(t)) {
    return 'topical_skin';
  }

  // 26. Subcutaneous injection / needle
  if (/تحت الجلد|حقن|إبرة|قلم أنسولين|وخز|subcutaneous|sub-q|sc injection/i.test(t)) {
    return 'injection_subcut';
  }

  // 27. Intravenous infusion
  if (/وريد|تسريب وريدي|بالوريد|مغذي|تنقيط وريدي|intravenous|iv infusion|infuse/i.test(t)) {
    return 'infusion_iv';
  }

  // 28. Suppository rectal
  if (/تحاميل|لبوس|شرجي|تحميلة|suppository|rectal|enema/i.test(t)) {
    return 'suppository_rectal';
  }

  // 29. Protect from light / sun
  if (/الضوء|أشعة الشمس|معتمة|حساس للضوء|protect from light|sunlight|photosensitiv/i.test(t)) {
    return 'protect_light';
  }

  // 30. Blood sugar
  if (/سكر الدم|قياس السكر|مستوى السكر|جلوكوز|blood sugar|glucose|diabetes/i.test(t)) {
    return 'blood_sugar';
  }

  // 31. Blood pressure
  if (/ضغط الدم|قياس الضغط|ارتفاع الضغط|blood pressure|hypertension/i.test(t)) {
    return 'blood_pressure';
  }

  // 32. Bleeding / Bruising
  if (/نزيف|كدمات|براز أسود|bleeding|bruis|black stool/i.test(t)) {
    return 'bleeding_precaution';
  }

  // 33. Urine discoloration
  if (/تغير لون البول|بول برتقالي|بول أحمر|تلون البول|discoloration of urine|red urine|orange urine/i.test(t)) {
    return 'urine_discoloration';
  }

  // 34. Complete treatment / antibiotic
  if (/إكمال كامل|إنهاء الكورس|إتمام مدة العلاج|حتى لو شعرت بالتحسن|complete full course|finish all/i.test(t)) {
    return 'antibiotic_finish';
  }

  // 35. Regular interval schedule
  if (/مواعيد منتظمة|كل\s+\d+\s+ساع|بفترات متباعدة|في نفس الموعد|interval|schedule|every\s+\d+\s+hour/i.test(t)) {
    return 'interval_clock';
  }

  // 36. Grapefruit
  if (/جريب فروت|grapefruit/i.test(t)) {
    return 'avoid_grapefruit';
  }

  // 37. Capsule
  if (/كبسول|كبسولة|كبسولات|capsule/i.test(t)) {
    return 'capsule_swallow';
  }

  return 'medical_shield';
}
