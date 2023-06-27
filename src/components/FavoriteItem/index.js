import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DeleleButton,
  DetailButton,
} from "./styles";

function FavoriteItem({ data, deleteMovie, navigatePage }) {
  // componente filmes

  return (
    <Container>
      <Title size={22}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E"></Ionicons>
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton onPress={() => navigatePage(data)}>
          <Title size={14}>Ver Detalher</Title>
        </DetailButton>

        <DeleleButton onPress={() => deleteMovie(data.id)}>
          <Feather name="trash" size={24} color="#fff" />
        </DeleleButton>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;
