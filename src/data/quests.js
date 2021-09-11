const DATA_QUEST = {
  test: {
    title: 'Test Quest',
    introduction: '',
    questType: 'input',
    questions: ['Type a'],
    solutions: 'a',
    termination: '',
    experience: 0
  },
  baker: {
    title: "A Baker's Dozen",
    introduction: "Hello traveller, oh don't worry about me, I'm trying to bake bread for the upcoming festival but it seems that I don't have enough time to get it all ready in time. I know this might be a big ask but I am wondering if you would be able to help me? I am willing to reward you accordingly.",
    questType: 'input',
    questions: [
      'How to say "bread"?',
      'How to say "eggs"?',
      'How to say "flour"?',
      'How to say "sugar"?',
      'How to say "water"?',
      'How to say "yeast"?'
    ],
    solutions: ['pain', 'œufs', 'farine', 'sucre', 'eau', 'levure'],
    termination: 'Thank you so much for helping out. Here, have a loaf of bread as your reward!',
    experience: 20
  },
  fashionista: {
    title: 'Fashionista',
    introduction: 'Can’t decide, I can’t decide, decisions, decisions… What should I do? The festival starts in a few minutes and I have no idea what I want to wear. I’m going to be late! Late! Oh my goodness… Help me please, save me from this chaos.',
    questType: 'input',
    questions: [
      'How to say "shirt"?',
      'How to say "pants"?',
      'How to say "skirt"?',
      'How to say "belt"?',
      'How to say "tie"?',
      'How to say "jeans"?'
    ],
    solutions: ['chemise', 'pantalon', 'jupe', 'ceinture', 'cravate', 'jeans'],
    termination: 'Thank you!',
    experience: 20
  }
}
