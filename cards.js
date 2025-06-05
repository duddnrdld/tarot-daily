const cards = [
  {
    "name": "The Fool",
    "finance": "The Fool: '새로운 시작'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Fool: 애정운에서 '새로운 시작'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Fool: 학업에 있어 '새로운 시작'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Fool: 지금은 '새로운 시작'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Fool.jpg"
  },
  {
    "name": "The Magician",
    "finance": "The Magician: '의지와 창조'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Magician: 애정운에서 '의지와 창조'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Magician: 학업에 있어 '의지와 창조'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Magician: 지금은 '의지와 창조'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Magician.jpg"
  },
  {
    "name": "The High Priestess",
    "finance": "The High Priestess: '직관과 비밀'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The High Priestess: 애정운에서 '직관과 비밀'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The High Priestess: 학업에 있어 '직관과 비밀'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The High Priestess: 지금은 '직관과 비밀'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The High Priestess.jpg"
  },
  {
    "name": "The Empress",
    "finance": "The Empress: '풍요와 양육'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Empress: 애정운에서 '풍요와 양육'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Empress: 학업에 있어 '풍요와 양육'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Empress: 지금은 '풍요와 양육'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Empress.jpg"
  },
  {
    "name": "The Emperor",
    "finance": "The Emperor: '권위와 질서'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Emperor: 애정운에서 '권위와 질서'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Emperor: 학업에 있어 '권위와 질서'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Emperor: 지금은 '권위와 질서'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Emperor.jpg"
  },
  {
    "name": "The Hierophant",
    "finance": "The Hierophant: '전통과 신념'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Hierophant: 애정운에서 '전통과 신념'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Hierophant: 학업에 있어 '전통과 신념'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Hierophant: 지금은 '전통과 신념'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Hierophant.jpg"
  },
  {
    "name": "The Lovers",
    "finance": "The Lovers: '선택과 조화'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Lovers: 애정운에서 '선택과 조화'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Lovers: 학업에 있어 '선택과 조화'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Lovers: 지금은 '선택과 조화'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Lovers.jpg"
  },
  {
    "name": "The Chariot",
    "finance": "The Chariot: '승리와 통제'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Chariot: 애정운에서 '승리와 통제'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Chariot: 학업에 있어 '승리와 통제'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Chariot: 지금은 '승리와 통제'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Chariot.jpg"
  },
  {
    "name": "Strength",
    "finance": "Strength: '용기와 인내'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Strength: 애정운에서 '용기와 인내'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Strength: 학업에 있어 '용기와 인내'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Strength: 지금은 '용기와 인내'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Strength.jpg"
  },
  {
    "name": "The Hermit",
    "finance": "The Hermit: '탐색과 고독'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Hermit: 애정운에서 '탐색과 고독'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Hermit: 학업에 있어 '탐색과 고독'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Hermit: 지금은 '탐색과 고독'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Hermit.jpg"
  },
  {
    "name": "Wheel of Fortune",
    "finance": "Wheel of Fortune: '운명과 변화'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Wheel of Fortune: 애정운에서 '운명과 변화'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Wheel of Fortune: 학업에 있어 '운명과 변화'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Wheel of Fortune: 지금은 '운명과 변화'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Wheel of Fortune.jpg"
  },
  {
    "name": "Justice",
    "finance": "Justice: '균형과 공정함'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Justice: 애정운에서 '균형과 공정함'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Justice: 학업에 있어 '균형과 공정함'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Justice: 지금은 '균형과 공정함'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Justice.jpg"
  },
  {
    "name": "The Hanged Man",
    "finance": "The Hanged Man: '희생과 전환'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Hanged Man: 애정운에서 '희생과 전환'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Hanged Man: 학업에 있어 '희생과 전환'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Hanged Man: 지금은 '희생과 전환'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Hanged Man.jpg"
  },
  {
    "name": "Death",
    "finance": "Death: '종말과 재탄생'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Death: 애정운에서 '종말과 재탄생'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Death: 학업에 있어 '종말과 재탄생'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Death: 지금은 '종말과 재탄생'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Death.jpg"
  },
  {
    "name": "Temperance",
    "finance": "Temperance: '절제와 조화'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Temperance: 애정운에서 '절제와 조화'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Temperance: 학업에 있어 '절제와 조화'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Temperance: 지금은 '절제와 조화'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Temperance.jpg"
  },
  {
    "name": "The Devil",
    "finance": "The Devil: '유혹과 속박'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Devil: 애정운에서 '유혹과 속박'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Devil: 학업에 있어 '유혹과 속박'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Devil: 지금은 '유혹과 속박'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Devil.jpg"
  },
  {
    "name": "The Tower",
    "finance": "The Tower: '붕괴와 진실'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Tower: 애정운에서 '붕괴와 진실'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Tower: 학업에 있어 '붕괴와 진실'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Tower: 지금은 '붕괴와 진실'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Tower.jpg"
  },
  {
    "name": "The Star",
    "finance": "The Star: '희망과 치유'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Star: 애정운에서 '희망과 치유'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Star: 학업에 있어 '희망과 치유'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Star: 지금은 '희망과 치유'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Star.jpg"
  },
  {
    "name": "The Moon",
    "finance": "The Moon: '환상과 불안'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Moon: 애정운에서 '환상과 불안'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Moon: 학업에 있어 '환상과 불안'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Moon: 지금은 '환상과 불안'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Moon.jpg"
  },
  {
    "name": "The Sun",
    "finance": "The Sun: '성취와 기쁨'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The Sun: 애정운에서 '성취와 기쁨'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The Sun: 학업에 있어 '성취와 기쁨'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The Sun: 지금은 '성취와 기쁨'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The Sun.jpg"
  },
  {
    "name": "Judgement",
    "finance": "Judgement: '회복과 평가'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "Judgement: 애정운에서 '회복과 평가'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "Judgement: 학업에 있어 '회복과 평가'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "Judgement: 지금은 '회복과 평가'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/Judgement.jpg"
  },
  {
    "name": "The World",
    "finance": "The World: '완성과 통합'의 흐름이 금전운에 영향을 줍니다. 신중하게 기회를 선택하세요.",
    "love": "The World: 애정운에서 '완성과 통합'은(는) 관계에 중요한 메시지를 전달합니다.",
    "study": "The World: 학업에 있어 '완성과 통합'의 의미처럼, 방향성과 꾸준함이 요구됩니다.",
    "advice": "The World: 지금은 '완성과 통합'의 에너지를 받아들여 차분히 행동할 필요가 있습니다.",
    "image": "cards/The World.jpg"
  }
];