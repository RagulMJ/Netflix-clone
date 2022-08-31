import React from 'react'
import styled from 'styled-components'

export default function Card({movieData,isLiked=false}) {
  return (
    <Container>
      <img src={`hrrps://image.tmdb.org/t/p/w500${movieData.image}`} alt="" />
    </Container>
  )
}

const Container = styled.div``;