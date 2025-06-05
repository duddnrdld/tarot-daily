const cards = [
  {
    "name": "The Fool",
    "finance": "The Fool: 재정 운이 변화할 수 있습니다.",
    "love": "The Fool: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Fool: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Fool: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Magician",
    "finance": "The Magician: 재정 운이 변화할 수 있습니다.",
    "love": "The Magician: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Magician: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Magician: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The High Priestess",
    "finance": "The High Priestess: 재정 운이 변화할 수 있습니다.",
    "love": "The High Priestess: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The High Priestess: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The High Priestess: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Empress",
    "finance": "The Empress: 재정 운이 변화할 수 있습니다.",
    "love": "The Empress: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Empress: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Empress: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Emperor",
    "finance": "The Emperor: 재정 운이 변화할 수 있습니다.",
    "love": "The Emperor: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Emperor: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Emperor: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Hierophant",
    "finance": "The Hierophant: 재정 운이 변화할 수 있습니다.",
    "love": "The Hierophant: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Hierophant: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Hierophant: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Lovers",
    "finance": "The Lovers: 재정 운이 변화할 수 있습니다.",
    "love": "The Lovers: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Lovers: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Lovers: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Chariot",
    "finance": "The Chariot: 재정 운이 변화할 수 있습니다.",
    "love": "The Chariot: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Chariot: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Chariot: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Strength",
    "finance": "Strength: 재정 운이 변화할 수 있습니다.",
    "love": "Strength: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Strength: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Strength: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Hermit",
    "finance": "The Hermit: 재정 운이 변화할 수 있습니다.",
    "love": "The Hermit: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Hermit: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Hermit: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Wheel of Fortune",
    "finance": "Wheel of Fortune: 재정 운이 변화할 수 있습니다.",
    "love": "Wheel of Fortune: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Wheel of Fortune: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Wheel of Fortune: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Justice",
    "finance": "Justice: 재정 운이 변화할 수 있습니다.",
    "love": "Justice: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Justice: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Justice: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Hanged Man",
    "finance": "The Hanged Man: 재정 운이 변화할 수 있습니다.",
    "love": "The Hanged Man: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Hanged Man: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Hanged Man: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Death",
    "finance": "Death: 재정 운이 변화할 수 있습니다.",
    "love": "Death: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Death: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Death: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Temperance",
    "finance": "Temperance: 재정 운이 변화할 수 있습니다.",
    "love": "Temperance: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Temperance: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Temperance: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Devil",
    "finance": "The Devil: 재정 운이 변화할 수 있습니다.",
    "love": "The Devil: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Devil: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Devil: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Tower",
    "finance": "The Tower: 재정 운이 변화할 수 있습니다.",
    "love": "The Tower: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Tower: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Tower: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Star",
    "finance": "The Star: 재정 운이 변화할 수 있습니다.",
    "love": "The Star: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Star: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Star: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Moon",
    "finance": "The Moon: 재정 운이 변화할 수 있습니다.",
    "love": "The Moon: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Moon: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Moon: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The Sun",
    "finance": "The Sun: 재정 운이 변화할 수 있습니다.",
    "love": "The Sun: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The Sun: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The Sun: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Judgement",
    "finance": "Judgement: 재정 운이 변화할 수 있습니다.",
    "love": "Judgement: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Judgement: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Judgement: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "The World",
    "finance": "The World: 재정 운이 변화할 수 있습니다.",
    "love": "The World: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "The World: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "The World: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ace of Cups",
    "finance": "Ace of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Ace of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ace of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ace of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Two of Cups",
    "finance": "Two of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Two of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Two of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Two of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Three of Cups",
    "finance": "Three of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Three of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Three of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Three of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Four of Cups",
    "finance": "Four of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Four of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Four of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Four of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Five of Cups",
    "finance": "Five of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Five of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Five of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Five of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Six of Cups",
    "finance": "Six of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Six of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Six of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Six of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Seven of Cups",
    "finance": "Seven of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Seven of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Seven of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Seven of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Eight of Cups",
    "finance": "Eight of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Eight of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Eight of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Eight of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Nine of Cups",
    "finance": "Nine of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Nine of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Nine of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Nine of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ten of Cups",
    "finance": "Ten of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Ten of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ten of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ten of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Page of Cups",
    "finance": "Page of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Page of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Page of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Page of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Knight of Cups",
    "finance": "Knight of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Knight of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Knight of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Knight of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Queen of Cups",
    "finance": "Queen of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "Queen of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Queen of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Queen of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "King of Cups",
    "finance": "King of Cups: 재정 운이 변화할 수 있습니다.",
    "love": "King of Cups: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "King of Cups: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "King of Cups: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ace of Pentacles",
    "finance": "Ace of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Ace of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ace of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ace of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Two of Pentacles",
    "finance": "Two of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Two of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Two of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Two of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Three of Pentacles",
    "finance": "Three of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Three of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Three of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Three of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Four of Pentacles",
    "finance": "Four of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Four of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Four of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Four of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Five of Pentacles",
    "finance": "Five of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Five of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Five of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Five of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Six of Pentacles",
    "finance": "Six of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Six of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Six of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Six of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Seven of Pentacles",
    "finance": "Seven of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Seven of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Seven of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Seven of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Eight of Pentacles",
    "finance": "Eight of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Eight of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Eight of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Eight of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Nine of Pentacles",
    "finance": "Nine of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Nine of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Nine of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Nine of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ten of Pentacles",
    "finance": "Ten of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Ten of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ten of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ten of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Page of Pentacles",
    "finance": "Page of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Page of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Page of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Page of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Knight of Pentacles",
    "finance": "Knight of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Knight of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Knight of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Knight of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Queen of Pentacles",
    "finance": "Queen of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "Queen of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Queen of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Queen of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "King of Pentacles",
    "finance": "King of Pentacles: 재정 운이 변화할 수 있습니다.",
    "love": "King of Pentacles: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "King of Pentacles: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "King of Pentacles: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ace of Swords",
    "finance": "Ace of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Ace of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ace of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ace of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Two of Swords",
    "finance": "Two of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Two of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Two of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Two of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Three of Swords",
    "finance": "Three of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Three of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Three of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Three of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Four of Swords",
    "finance": "Four of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Four of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Four of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Four of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Five of Swords",
    "finance": "Five of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Five of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Five of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Five of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Six of Swords",
    "finance": "Six of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Six of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Six of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Six of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Seven of Swords",
    "finance": "Seven of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Seven of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Seven of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Seven of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Eight of Swords",
    "finance": "Eight of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Eight of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Eight of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Eight of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Nine of Swords",
    "finance": "Nine of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Nine of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Nine of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Nine of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ten of Swords",
    "finance": "Ten of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Ten of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ten of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ten of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Page of Swords",
    "finance": "Page of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Page of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Page of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Page of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Knight of Swords",
    "finance": "Knight of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Knight of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Knight of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Knight of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Queen of Swords",
    "finance": "Queen of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "Queen of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Queen of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Queen of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "King of Swords",
    "finance": "King of Swords: 재정 운이 변화할 수 있습니다.",
    "love": "King of Swords: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "King of Swords: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "King of Swords: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ace of Wands",
    "finance": "Ace of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Ace of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ace of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ace of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Two of Wands",
    "finance": "Two of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Two of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Two of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Two of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Three of Wands",
    "finance": "Three of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Three of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Three of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Three of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Four of Wands",
    "finance": "Four of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Four of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Four of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Four of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Five of Wands",
    "finance": "Five of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Five of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Five of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Five of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Six of Wands",
    "finance": "Six of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Six of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Six of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Six of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Seven of Wands",
    "finance": "Seven of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Seven of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Seven of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Seven of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Eight of Wands",
    "finance": "Eight of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Eight of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Eight of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Eight of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Nine of Wands",
    "finance": "Nine of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Nine of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Nine of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Nine of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Ten of Wands",
    "finance": "Ten of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Ten of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Ten of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Ten of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Page of Wands",
    "finance": "Page of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Page of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Page of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Page of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Knight of Wands",
    "finance": "Knight of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Knight of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Knight of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Knight of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "Queen of Wands",
    "finance": "Queen of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "Queen of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "Queen of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "Queen of Wands: 자신의 내면의 목소리를 따르세요."
  },
  {
    "name": "King of Wands",
    "finance": "King of Wands: 재정 운이 변화할 수 있습니다.",
    "love": "King of Wands: 사랑에 있어 중요한 메시지를 전달받게 됩니다.",
    "study": "King of Wands: 학습에 있어 집중이 필요한 시기입니다.",
    "advice": "King of Wands: 자신의 내면의 목소리를 따르세요."
  }
];