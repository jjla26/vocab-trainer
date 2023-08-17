import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Button, Grid, TextField } from '@mui/material'
import VocabulariesStore from '../stores/VocabulariesStore'
import Card from '../components/Card'
import { Link } from "react-router-dom";

const Admin = () => {
  const { vocabularies, addVocabulary, deleteVocabulary } = VocabulariesStore

  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')
  const [image, setImage] = useState('')

  const handleAddVocabulary = () => {
    addVocabulary({
      id: vocabularies.length + 1,
      word,
      translation,
      image
    })
  }

  const handleDelete = (id) => {
    deleteVocabulary(id)
  }

  return (
    <Grid container>
      <Grid item xs={12} m={6}>
      <Button component={Link} to={'/'} variant="contained">Back</Button>
      </Grid>
      <Grid item xs={12} m={6}>
        <TextField id="outlined-basic" label="Word" variant="outlined" value={word} onChange={e => setWord(e.target.value)} />
        <TextField id="outlined-basic" label="Translation" variant="outlined" value={translation} onChange={e => setTranslation(e.target.value)} />
        <TextField id="outlined-basic" label="Image" variant="outlined" value={image} onChange={e => setImage(e.target.value)}/>
        <Button variant="contained" onClick={handleAddVocabulary}>ADD NEW WORD</Button>
      </Grid>
      {vocabularies.map((vocabulary) =>
        <Grid item key={vocabulary.id} xs={2} m={6}>
          <Card word={vocabulary.word} translation={vocabulary.translation} image={vocabulary.image}>
            <Button variant="contained" color="error" onClick={() =>handleDelete(vocabulary.id)}>DELETE</Button>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default observer(Admin)