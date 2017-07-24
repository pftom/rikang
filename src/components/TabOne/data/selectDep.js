const DEPARTMENT_CHOICES = [
    ['全部科室', [
            [ '全部科室'],
        ]
    ],
    ['妇科', [
            [ '妇科'],
        ]
    ],
    ['儿科', [
            [ '小儿科'],
            [ '新生儿科'],
        ]
    ],
    ['内科', [
            [ '呼吸内科'],
            [ '心血管内科'],
            [ '神经内科'],
            [ '消化内科'],
            [ '肾内科'],
            [ '内分泌与代谢科'],
            [ '风湿免疫科'],
            [ '血液病科'],
            [ '感染科'],
        ]
    ],
    ['皮肤性病科', [
            [ '皮肤科'],
            [ '性病科'],
        ]
    ],
    ['营养科', [
            [ '营养科'],
        ]
    ],
    ['骨伤科', [
            [ '脊柱科'],
            [ '关节科'],
            [ '创伤科'],
        ]
    ],
    ['男科', [
            [ '男科'],
        ]
    ],
    ['外科', [
            [ '胸外科'],
            [ '心脏与血管外科'],
            [ '神经外科'],
            [ '肝胆外科'],
            [ '烧伤科'],
            [ '康复科'],
            [ '泌尿外科'],
            [ '肛肠科'],
            [ '普外科'],
            [ '甲状腺乳腺科'],
        ]
    ],
    ['肿瘤及防治科', [
            [ '肿瘤内科'],
            [ '肿瘤外科'],
            [ '介入与放疗中心'],
            [ '肿瘤中医科'],
        ]
    ],
    ['中医科', [
            [ '中医内科'],
            [ '中医外科'],
            [ '中医妇科'],
            [ '中医男科'],
            [ '中医儿科'],
        ]
    ],
    ['口腔颌面科', [
            [ '口腔颌面科'],
        ]
    ],
    ['耳鼻咽喉科', [
            [ '耳科'],
            [ '鼻科'],
            [ '咽喉科'],
        ]
    ],
    ['眼科', [
            [ '眼科'],
        ]
    ],
    ['整形美容科', [
            [ '整形美容科'],
        ]
    ],
    ['精神心理科', [
            [ '精神科'],
            [ '心理科'],
        ]
    ],
    ['产科', [
            [ '产科'],
        ]
    ],
    ['报告解读科', [
            [ '检验科'],
            [ '放射科'],
            [ '内镜科'],
            [ '病理科'],
            [ '心电图科'],
            [ '超声科'],
            [ '麻醉科'],
            [ '体检中心'],
            [ '预防保健科'],
        ]
    ],
]

//custom select data
const selectDep = [];

for (let i = 0; i < DEPARTMENT_CHOICES.length; i++) {

  let obj = {
    label: DEPARTMENT_CHOICES[i][0],
    value: DEPARTMENT_CHOICES[i][0],
    children: [],
  }
  for (let j = 0; j < DEPARTMENT_CHOICES[i][1].length; j++) {
    obj.children.push(
      {
        label: DEPARTMENT_CHOICES[i][1][j][0],
        value: DEPARTMENT_CHOICES[i][1][j][0],
      }
    )
  }
  selectDep.push(obj);
}

export {
  selectDep,
}