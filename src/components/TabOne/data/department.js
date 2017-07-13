// Sub-departments under gynaecology
GYNAECOLOGY = 'GYN'

// Sub-departments under pediatrics
PEDIATRICS = 'PAE'
NEONATOLOGY = 'NEO'

// Sub-departments under internal medicine
PNEUMOLOGY = 'PNE'
CARDIOVASCULAR = 'CAR'
NEUROLOGY = 'NEU'
GASTROENTEROLOGY = 'GAS'
NEPHROLOGY = 'NEP'
ENDOCRINOLOGY = 'END'
RHEUMATOLOGY = 'RHE'
HAEMOTOLOGY = 'HAE'
INFECTIOUS_DISEASE = 'INF'

// Sub-departments under dermatology & STD
DERMATOLOGY = 'DER'
STD = 'STD'

// Sub-departments under nutriology
NUTRIOLOGY = 'NUT'

// Sub-departments under orthopedics
SPINE = 'SPI'
JOINT = 'JOI'
TRAUMATOLOGY = 'TRA'

// Sub-departments under andrology
ANDROLOGY = 'AND'

// Sub-departments under surgery
THORACIC = 'THO'
CARDIAC_AND_VASCULAR_SURGERY = 'CSG'
NEUROSURGERY = 'NSG'
HEPATOBILIARY = 'HEP'
BURN = 'BUR'
REHABILITATION = 'REH'
UROLOGY = 'URO'
ANORECTAL = 'ANO'
GENERAL_SURGERY = 'GSG'
THYROID_AND_BREAST_SURGERY = 'TAB'

// Sub-departments under oncology
INTERNAL_MEDICINE_ONCOLOGY = 'IMO'
TUMOR_SURGERY = 'TUM'
RADIOTHERAPY = 'RAD'
TCM_TUMOR = 'TTU'

// Sub-departments under traditional chinese medicine
TCM_INTERNAL_MED = 'TIM'
TCM_SURGERY = 'TSG'
TCM_GYNECOLOGY = 'TGY'
TCM_ANDROLOGY = 'TAN'
TCM_PEDIATRICS = 'TPE'

// Sub-departments under oral & maxillofacial
ORAL_AND_MAXILLOFACIAL = 'OAM'

// Sub-departments under E.N.T.
OTOLOGY = 'OTO'
NASAL = 'NAS'
THROAT = 'THR'

// Sub-departments under Ophthalmology
OPHTHALMOLOGY = 'OPH'

// Sub-departments under plastic surgey
PLASTIC_SURGERY = 'PLA'

// Sub-departments under psychiatry
PSYCHIATRY = 'PSY'
PSYCHOLOGY = 'PCH'

// Sub-departments under obstetrics
OBSTETRICS = 'OBS'

// Sub-departments under report interpretation section
CLINICAL_LAB = 'CLI'
RADIOLOGY = 'RDL'
ENDOSCOPY = 'ESC'
PATHOLOGY = 'PAT'
ECG = 'ECG'
ULTRASONOGRAPHY = 'ULT'
ANESTHESIOLOGY = 'ANE'
MEDICAL_EXAMINATION = 'MEX'
PREVENTIVE_HEALTH_CARE = 'PRE'

// Choice field for models
DEPARTMENT_CHOICES = [
    ['妇科', [
            [GYNAECOLOGY, '妇科'],
        ]
    ],
    ['儿科', [
            [PEDIATRICS, '小儿科'],
            [NEONATOLOGY, '新生儿科'],
        ]
    ],
    ['内科', [
            [PNEUMOLOGY, '呼吸内科'],
            [CARDIOVASCULAR, '心血管内科'],
            [NEUROLOGY, '神经内科'],
            [GASTROENTEROLOGY, '消化内科'],
            [NEPHROLOGY, '肾内科'],
            [ENDOCRINOLOGY, '内分泌与代谢科'],
            [RHEUMATOLOGY, '风湿免疫科'],
            [HAEMOTOLOGY, '血液病科'],
            [INFECTIOUS_DISEASE, '感染科'],
        ]
    ],
    ['皮肤性病科', [
            [DERMATOLOGY, '皮肤科'],
            [STD, '性病科'],
        ]
    ],
    ['营养科', [
            [NUTRIOLOGY, '营养科'],
        ]
    ],
    ['骨伤科', [
            [SPINE, '脊柱科'],
            [JOINT, '关节科'],
            [TRAUMATOLOGY, '创伤科'],
        ]
    ],
    ['男科', [
            [ANDROLOGY, '男科'],
        ]
    ],
    ['外科', [
            [THORACIC, '胸外科'],
            [CARDIAC_AND_VASCULAR_SURGERY, '心脏与血管外科'],
            [NEUROSURGERY, '神经外科'],
            [HEPATOBILIARY, '肝胆外科'],
            [BURN, '烧伤科'],
            [REHABILITATION, '康复科'],
            [UROLOGY, '泌尿外科'],
            [ANORECTAL, '肛肠科'],
            [GENERAL_SURGERY, '普外科'],
            [THYROID_AND_BREAST_SURGERY, '甲状腺乳腺科'],
        ]
    ],
    ['肿瘤及防治科', [
            [INTERNAL_MEDICINE_ONCOLOGY, '肿瘤内科'],
            [TUMOR_SURGERY, '肿瘤外科'],
            [RADIOTHERAPY, '介入与放疗中心'],
            [TCM_TUMOR, '肿瘤中医科'],
        ]
    ],
    ['中医科', [
            [TCM_INTERNAL_MED, '中医内科'],
            [TCM_SURGERY, '中医外科'],
            [TCM_GYNECOLOGY, '中医妇科'],
            [TCM_ANDROLOGY, '中医男科'],
            [TCM_PEDIATRICS, '中医儿科'],
        ]
    ],
    ['口腔颌面科', [
            [ORAL_AND_MAXILLOFACIAL, '口腔颌面科'],
        ]
    ],
    ['耳鼻咽喉科', [
            [OTOLOGY, '耳科'],
            [NASAL, '鼻科'],
            [THROAT, '咽喉科'],
        ]
    ],
    ['眼科', [
            [OPHTHALMOLOGY, '眼科'],
        ]
    ],
    ['整形美容科', [
            [PLASTIC_SURGERY, '整形美容科'],
        ]
    ],
    ['精神心理科', [
            [PSYCHIATRY, '精神科'],
            [PSYCHOLOGY, '心理科'],
        ]
    ],
    ['产科', [
            [PLASTIC_SURGERY, '产科'],
        ]
    ],
    ['报告解读科', [
            [CLINICAL_LAB, '检验科'],
            [RADIOLOGY, '放射科'],
            [ENDOSCOPY, '内镜科'],
            [PATHOLOGY, '病理科'],
            [ECG, '心电图科'],
            [ULTRASONOGRAPHY, '超声科'],
            [ANESTHESIOLOGY, '麻醉科'],
            [MEDICAL_EXAMINATION, '体检中心'],
            [PREVENTIVE_HEALTH_CARE, '预防保健科'],
        ]
    ],
]
