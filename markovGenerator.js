// import { MarkovData } from 'kurwov';
// const sentences = ['i love hamburgers', 'i love cats'];
// const data = new MarkovData(sentences);



export function markovMe(inputText) {
  const markovChain = {}
  const testPhrase = ' At this horror I sank nearly to the lichened earth, transfixed with a dread not of this nor any world, but only of the mad spaces between the stars.  Out of the unimaginable blackness beyond the gangrenous glare of that cold flame, out of the Tartarean leagues through which that oily river rolled uncanny, unheard, and unsuspected, there flopped rhythmically a horde of hybrid winged things that no sound eye could ever wholly grasp, or sound brain ever wholly remember. '

  // const inputText = document.getElementById('we3review').value
  const combinedText = inputText += testPhrase;
  const textArr = combinedText.split(' ');
  // const textArr = document.getElementById('inputBox').value.split(' ')
  for (let i = 0; i < textArr.length; i++) {
    let word = textArr[i].toLowerCase().replace(/[\W_]/, "")
    if (!markovChain[word]) {
      markovChain[word] = []
      }
    if (textArr[i + 1]) {
      markovChain[word].push(textArr[i + 1].toLowerCase().replace(/[\W_]/, ""));
}
}
  const words = Object.keys(markovChain)
  let word = words[Math.floor(Math.random() * words.length)]
  let result = ''
  for (let i = 0; i < words.length; i++ ) {
    result += word + ' ';
    let newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
    word = newWord;
    if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
  }
   return result;
}
