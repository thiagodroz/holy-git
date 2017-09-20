const languages = {
  'C': 'icon-c',
  'C++': 'devicon-cplusplus-plain',
  'C#': 'devicon-csharp-plain',
  'Clojure': 'icon-clojure',
  'CoffeeScript': 'devicon-coffeescript-original',
  'CSS': 'icon-css3-alt',
  'Elixir': 'icon-elixir',
  'Erlang': 'icon-erlang',
  'Go': 'icon-go',
  'Haskell': 'icon-haskell',
  'HTML': 'icon-html5-alt',
  'Java': 'icon-java',
  'JavaScript': 'icon-javascript-alt',
  'Objective-C': 'icon-objc',
  'Perl': 'icon-perl',
  'PHP': 'icon-php-alt',
  'PowerShell': 'icon-shell',
  'Python': 'icon-python',
  'Ruby': 'icon-ruby',
  'Rust': 'icon-rust',
  'Scala': 'icon-scala',
  'Shell': 'icon-shell',
  'Swift': 'devicon-swift-plain',
  'TypeScript': 'devicon-typescript-plain'
};

export default function language(languageName) {
  return languages[languageName];
}