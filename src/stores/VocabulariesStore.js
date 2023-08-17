import { makeAutoObservable } from "mobx"
import Vocabularies from '../constants/Vocabularies'

class VocabulariesStore {
  vocabularies = Vocabularies

  constructor() {
      makeAutoObservable(this)
  }

  addVocabulary = (vocabulary) => {
    this.vocabularies.push(vocabulary)
  }

  deleteVocabulary = (id) => {
    this.vocabularies = this.vocabularies.filter(vocabulary => vocabulary.id !== id)
  }


}

export default new VocabulariesStore()