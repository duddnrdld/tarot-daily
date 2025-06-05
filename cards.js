const cards = [
  {
    "name": "The Fool",
    "finance": "The Fool: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Fool: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Fool: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Fool: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Fool.jpg"
  },
  {
    "name": "The Magician",
    "finance": "The Magician: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Magician: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Magician: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Magician: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Magician.jpg"
  },
  {
    "name": "The High Priestess",
    "finance": "The High Priestess: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The High Priestess: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The High Priestess: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The High Priestess: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The High Priestess.jpg"
  },
  {
    "name": "The Empress",
    "finance": "The Empress: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Empress: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Empress: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Empress: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Empress.jpg"
  },
  {
    "name": "The Emperor",
    "finance": "The Emperor: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Emperor: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Emperor: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Emperor: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Emperor.jpg"
  },
  {
    "name": "The Hierophant",
    "finance": "The Hierophant: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Hierophant: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Hierophant: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Hierophant: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Hierophant.jpg"
  },
  {
    "name": "The Lovers",
    "finance": "The Lovers: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Lovers: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Lovers: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Lovers: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Lovers.jpg"
  },
  {
    "name": "The Chariot",
    "finance": "The Chariot: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Chariot: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Chariot: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Chariot: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Chariot.jpg"
  },
  {
    "name": "Strength",
    "finance": "Strength: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Strength: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Strength: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Strength: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Strength.jpg"
  },
  {
    "name": "The Hermit",
    "finance": "The Hermit: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Hermit: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Hermit: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Hermit: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Hermit.jpg"
  },
  {
    "name": "Wheel of Fortune",
    "finance": "Wheel of Fortune: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Wheel of Fortune: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Wheel of Fortune: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Wheel of Fortune: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Wheel of Fortune.jpg"
  },
  {
    "name": "Justice",
    "finance": "Justice: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Justice: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Justice: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Justice: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Justice.jpg"
  },
  {
    "name": "The Hanged Man",
    "finance": "The Hanged Man: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Hanged Man: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Hanged Man: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Hanged Man: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Hanged Man.jpg"
  },
  {
    "name": "Death",
    "finance": "Death: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Death: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Death: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Death: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Death.jpg"
  },
  {
    "name": "Temperance",
    "finance": "Temperance: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Temperance: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Temperance: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Temperance: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Temperance.jpg"
  },
  {
    "name": "The Devil",
    "finance": "The Devil: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Devil: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Devil: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Devil: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Devil.jpg"
  },
  {
    "name": "The Tower",
    "finance": "The Tower: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Tower: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Tower: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Tower: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Tower.jpg"
  },
  {
    "name": "The Star",
    "finance": "The Star: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Star: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Star: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Star: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Star.jpg"
  },
  {
    "name": "The Moon",
    "finance": "The Moon: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Moon: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Moon: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Moon: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Moon.jpg"
  },
  {
    "name": "The Sun",
    "finance": "The Sun: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The Sun: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The Sun: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The Sun: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The Sun.jpg"
  },
  {
    "name": "Judgement",
    "finance": "Judgement: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Judgement: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Judgement: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Judgement: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Judgement.jpg"
  },
  {
    "name": "The World",
    "finance": "The World: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "The World: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "The World: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "The World: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/The World.jpg"
  },
  {
    "name": "Ace of Cups",
    "finance": "Ace of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ace of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ace of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ace of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ace of Cups.jpg"
  },
  {
    "name": "Two of Cups",
    "finance": "Two of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Two of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Two of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Two of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Two of Cups.jpg"
  },
  {
    "name": "Three of Cups",
    "finance": "Three of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Three of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Three of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Three of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Three of Cups.jpg"
  },
  {
    "name": "Four of Cups",
    "finance": "Four of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Four of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Four of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Four of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Four of Cups.jpg"
  },
  {
    "name": "Five of Cups",
    "finance": "Five of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Five of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Five of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Five of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Five of Cups.jpg"
  },
  {
    "name": "Six of Cups",
    "finance": "Six of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Six of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Six of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Six of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Six of Cups.jpg"
  },
  {
    "name": "Seven of Cups",
    "finance": "Seven of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Seven of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Seven of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Seven of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Seven of Cups.jpg"
  },
  {
    "name": "Eight of Cups",
    "finance": "Eight of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Eight of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Eight of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Eight of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Eight of Cups.jpg"
  },
  {
    "name": "Nine of Cups",
    "finance": "Nine of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Nine of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Nine of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Nine of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Nine of Cups.jpg"
  },
  {
    "name": "Ten of Cups",
    "finance": "Ten of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ten of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ten of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ten of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ten of Cups.jpg"
  },
  {
    "name": "Page of Cups",
    "finance": "Page of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Page of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Page of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Page of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Page of Cups.jpg"
  },
  {
    "name": "Knight of Cups",
    "finance": "Knight of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Knight of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Knight of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Knight of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Knight of Cups.jpg"
  },
  {
    "name": "Queen of Cups",
    "finance": "Queen of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Queen of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Queen of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Queen of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Queen of Cups.jpg"
  },
  {
    "name": "King of Cups",
    "finance": "King of Cups: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "King of Cups: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "King of Cups: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "King of Cups: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/King of Cups.jpg"
  },
  {
    "name": "Ace of Pentacles",
    "finance": "Ace of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ace of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ace of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ace of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ace of Pentacles.jpg"
  },
  {
    "name": "Two of Pentacles",
    "finance": "Two of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Two of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Two of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Two of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Two of Pentacles.jpg"
  },
  {
    "name": "Three of Pentacles",
    "finance": "Three of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Three of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Three of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Three of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Three of Pentacles.jpg"
  },
  {
    "name": "Four of Pentacles",
    "finance": "Four of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Four of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Four of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Four of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Four of Pentacles.jpg"
  },
  {
    "name": "Five of Pentacles",
    "finance": "Five of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Five of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Five of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Five of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Five of Pentacles.jpg"
  },
  {
    "name": "Six of Pentacles",
    "finance": "Six of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Six of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Six of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Six of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Six of Pentacles.jpg"
  },
  {
    "name": "Seven of Pentacles",
    "finance": "Seven of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Seven of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Seven of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Seven of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Seven of Pentacles.jpg"
  },
  {
    "name": "Eight of Pentacles",
    "finance": "Eight of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Eight of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Eight of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Eight of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Eight of Pentacles.jpg"
  },
  {
    "name": "Nine of Pentacles",
    "finance": "Nine of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Nine of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Nine of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Nine of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Nine of Pentacles.jpg"
  },
  {
    "name": "Ten of Pentacles",
    "finance": "Ten of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ten of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ten of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ten of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ten of Pentacles.jpg"
  },
  {
    "name": "Page of Pentacles",
    "finance": "Page of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Page of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Page of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Page of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Page of Pentacles.jpg"
  },
  {
    "name": "Knight of Pentacles",
    "finance": "Knight of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Knight of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Knight of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Knight of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Knight of Pentacles.jpg"
  },
  {
    "name": "Queen of Pentacles",
    "finance": "Queen of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Queen of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Queen of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Queen of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Queen of Pentacles.jpg"
  },
  {
    "name": "King of Pentacles",
    "finance": "King of Pentacles: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "King of Pentacles: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "King of Pentacles: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "King of Pentacles: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/King of Pentacles.jpg"
  },
  {
    "name": "Ace of Swords",
    "finance": "Ace of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ace of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ace of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ace of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ace of Swords.jpg"
  },
  {
    "name": "Two of Swords",
    "finance": "Two of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Two of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Two of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Two of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Two of Swords.jpg"
  },
  {
    "name": "Three of Swords",
    "finance": "Three of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Three of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Three of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Three of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Three of Swords.jpg"
  },
  {
    "name": "Four of Swords",
    "finance": "Four of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Four of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Four of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Four of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Four of Swords.jpg"
  },
  {
    "name": "Five of Swords",
    "finance": "Five of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Five of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Five of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Five of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Five of Swords.jpg"
  },
  {
    "name": "Six of Swords",
    "finance": "Six of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Six of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Six of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Six of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Six of Swords.jpg"
  },
  {
    "name": "Seven of Swords",
    "finance": "Seven of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Seven of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Seven of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Seven of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Seven of Swords.jpg"
  },
  {
    "name": "Eight of Swords",
    "finance": "Eight of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Eight of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Eight of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Eight of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Eight of Swords.jpg"
  },
  {
    "name": "Nine of Swords",
    "finance": "Nine of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Nine of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Nine of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Nine of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Nine of Swords.jpg"
  },
  {
    "name": "Ten of Swords",
    "finance": "Ten of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ten of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ten of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ten of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ten of Swords.jpg"
  },
  {
    "name": "Page of Swords",
    "finance": "Page of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Page of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Page of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Page of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Page of Swords.jpg"
  },
  {
    "name": "Knight of Swords",
    "finance": "Knight of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Knight of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Knight of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Knight of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Knight of Swords.jpg"
  },
  {
    "name": "Queen of Swords",
    "finance": "Queen of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Queen of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Queen of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Queen of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Queen of Swords.jpg"
  },
  {
    "name": "King of Swords",
    "finance": "King of Swords: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "King of Swords: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "King of Swords: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "King of Swords: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/King of Swords.jpg"
  },
  {
    "name": "Ace of Wands",
    "finance": "Ace of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ace of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ace of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ace of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ace of Wands.jpg"
  },
  {
    "name": "Two of Wands",
    "finance": "Two of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Two of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Two of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Two of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Two of Wands.jpg"
  },
  {
    "name": "Three of Wands",
    "finance": "Three of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Three of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Three of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Three of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Three of Wands.jpg"
  },
  {
    "name": "Four of Wands",
    "finance": "Four of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Four of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Four of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Four of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Four of Wands.jpg"
  },
  {
    "name": "Five of Wands",
    "finance": "Five of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Five of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Five of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Five of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Five of Wands.jpg"
  },
  {
    "name": "Six of Wands",
    "finance": "Six of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Six of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Six of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Six of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Six of Wands.jpg"
  },
  {
    "name": "Seven of Wands",
    "finance": "Seven of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Seven of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Seven of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Seven of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Seven of Wands.jpg"
  },
  {
    "name": "Eight of Wands",
    "finance": "Eight of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Eight of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Eight of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Eight of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Eight of Wands.jpg"
  },
  {
    "name": "Nine of Wands",
    "finance": "Nine of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Nine of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Nine of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Nine of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Nine of Wands.jpg"
  },
  {
    "name": "Ten of Wands",
    "finance": "Ten of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Ten of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Ten of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Ten of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Ten of Wands.jpg"
  },
  {
    "name": "Page of Wands",
    "finance": "Page of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Page of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Page of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Page of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Page of Wands.jpg"
  },
  {
    "name": "Knight of Wands",
    "finance": "Knight of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Knight of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Knight of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Knight of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Knight of Wands.jpg"
  },
  {
    "name": "Queen of Wands",
    "finance": "Queen of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "Queen of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "Queen of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "Queen of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/Queen of Wands.jpg"
  },
  {
    "name": "King of Wands",
    "finance": "King of Wands: 현재 재정 상황에 있어 변화가 예상됩니다. 신중하게 지출을 관리하고 장기적인 안목으로 접근하세요.",
    "love": "King of Wands: 감정의 흐름이 복잡해질 수 있습니다. 상대방과의 진솔한 대화를 통해 관계의 방향을 확인해보세요.",
    "study": "King of Wands: 집중력과 꾸준함이 중요한 시기입니다. 기초부터 탄탄하게 다지며 계획적인 학습이 필요합니다.",
    "advice": "King of Wands: 내면의 목소리에 귀를 기울이고 조급함을 내려놓으세요. 지금은 자신을 믿고 나아가야 할 때입니다.",
    "image": "cards/King of Wands.jpg"
  }
];