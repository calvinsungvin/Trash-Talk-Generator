function generateRandomItem(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

function generateTrashTalk(job){

    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
      }
      
    const phrase = ['很簡單','很容易','很快','很正常']
    let collection = ""

    if (!job) return "Please choose one!"
    else if (job === 'engineer') collection += '工程師' + generateRandomItem(task.engineer) + generateRandomItem(phrase)
    else if (job === 'designer') collection += '設計師' + generateRandomItem(task.designer) + generateRandomItem(phrase)
    else if (job === 'entrepreneur') collection += '創業家' + generateRandomItem(task.entrepreneur) + generateRandomItem(phrase)

    return collection
}

module.exports = generateTrashTalk
