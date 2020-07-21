function generateRandomItem(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

function generateTrashTalk(occupation){
    const target = {
        engineer: "工程師",
        designer: "設計師",
        entrepreneur: "創業家"
    }

    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
      }
      
    const phrase = ['很簡單','很容易','很快','很正常']
    
    //turning occupation(an object) first into an array then string
    let occupationString = Object.keys(occupation).join()
    
    let collection = ''

    if (occupation){
        return collection += `${target[occupationString]}，
        ${generateRandomItem(task[occupationString])}，
        ${generateRandomItem(phrase)}吧！`
    } else {
        return `choose one occupation to talk shit to!`
    }
}

module.exports = generateTrashTalk
