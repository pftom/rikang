const transferDepartment = {
 'AND': '男科',
 'ANE': '麻醉科',
 'ANO': '肛肠科',
 'BUR': '烧伤科',
 'CAR': '心血管内科',
 'CLI': '检验科',
 'CSG': '心脏与血管外科',
 'DER': '皮肤科',
 'ECG': '心电图科',
 'END': '内分泌与代谢科',
 'ESC': '内镜科',
 'GAS': '消化内科',
 'GSG': '普外科',
 'GYN': '妇科',
 'HAE': '血液病科',
 'HEP': '肝胆外科',
 'IMO': '肿瘤内科',
 'INF': '感染科',
 'JOI': '关节科',
 'MEX': '体检中心',
 'NAS': '鼻科',
 'NEO': '新生儿科',
 'NEP': '肾内科',
 'NEU': '神经内科',
 'NSG': '神经外科',
 'NUT': '营养科',
 'OAM': '口腔颌面科',
 'OPH': '眼科',
 'OTO': '耳科',
 'PAE': '小儿科',
 'PAT': '病理科',
 'PCH': '心理科',
 'PLA': '产科',
 'PNE': '呼吸内科',
 'PRE': '预防保健科',
 'PSY': '精神科',
 'RAD': '介入与放疗中心',
 'RDL': '放射科',
 'REH': '康复科',
 'RHE': '风湿免疫科',
 'SPI': '脊柱科',
 'STD': '性病科',
 'TAB': '甲状腺乳腺科',
 'TAN': '中医男科',
 'TGY': '中医妇科',
 'THO': '胸外科',
 'THR': '咽喉科',
 'TIM': '中医内科',
 'TPE': '中医儿科',
 'TRA': '创伤科',
 'TSG': '中医外科',
 'TTU': '肿瘤中医科',
 'TUM': '肿瘤外科',
 'ULT': '超声科',
 'URO': '泌尿外科'
};

const opppsiteDepartment = {};
const iter = Object.keys(transferDepartment);
for (let i = 0; i < iter.length; i++) {
  opppsiteDepartment[transferDepartment[iter[i]]] = iter[i];
}

const transferTitle = {
  'R':'住院医师',
  'A':'主治医师',
  'D':'副主任医师',
  'C':'主任医师',
};

const transferHospitalClass = {
'1A': '一级甲等',
'1B': '一级乙等',
'1C': '一级丙等',
'2A': '二级甲等',
'2B': '二级乙等',
'2C': '二级丙等',
'3A': '三级甲等',
'3B': '三级乙等',
'3C': '三级丙等',
};

const order = {
  'U':    'UNPAID',
'P':      'PAID',
'W':   'UNDERWAY',
'R':    'REFUND',
'F':   'FINISHED',
}

export {
  transferDepartment,
  transferTitle,
  transferHospitalClass,

  opppsiteDepartment,
  order,
}