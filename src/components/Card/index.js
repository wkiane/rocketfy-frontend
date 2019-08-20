import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img src="https://randomuser.me/api/portraits/women/9.jpg" alt="Imagem do Usuário" />
    </Container>
  );
}
