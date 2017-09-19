const languages = {
  'C#': 'icon-csharp',
  'Haskell': 'icon-haskell',
  'HTML': 'icon-html5-alt',
  'Java': 'icon-java',
  'JavaScript': 'icon-javascript-alt',
  'Python': 'icon-python',
  'TypeScript': 'devicon-typescript-plain'
};

export default function language(languageName) {
  return languages[languageName];
}